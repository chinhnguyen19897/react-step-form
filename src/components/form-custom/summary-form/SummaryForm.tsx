import { StepFormContext } from "context/FormContext.tsx"
import { useContext } from "react"
import { EPriceUnit } from "types/form.ts"
import { formatPrice } from "@utils/form.ts"
import "./styles.scss"

const SummaryForm = () => {
  const formAPI = useContext(StepFormContext)

  if (formAPI?.step !== 4) return <></>

  const stateSummaryForm = formAPI.getFormSummary()

  const unitString =
    stateSummaryForm?.unit === EPriceUnit.MONTHLY ? "Monthly" : "Yearly"
  const totalUnitString =
    stateSummaryForm?.unit === EPriceUnit.YEARLY ? "month" : "year"

  return (
    <>
      <div className="summary-form--info">
        <div className="total-price">
          <div>
            <h3 className="title-plan">
              {stateSummaryForm?.plan}&nbsp;({unitString})
            </h3>
            <a
              className="change-plan"
              href="#"
              onClick={() => formAPI?.goToStep(2)}
            >
              Change
            </a>
          </div>
          <h2>
            {formatPrice(
              stateSummaryForm?.planPrice || "",
              stateSummaryForm?.unit
            )}
          </h2>
        </div>
        <hr />
        <div>
          {stateSummaryForm.addOns.map((addOn) => (
            <h2 className="total-service" key={addOn.name}>
              <p>{addOn.name}</p>
              <p>+{formatPrice(addOn.price, stateSummaryForm.unit)}</p>
            </h2>
          ))}
        </div>
      </div>
      <div className="form-total--price">
        <p>Total (per {totalUnitString})</p>
        <h2>{formatPrice(stateSummaryForm.total, stateSummaryForm.unit)}</h2>
      </div>
    </>
  )
}

export default SummaryForm
