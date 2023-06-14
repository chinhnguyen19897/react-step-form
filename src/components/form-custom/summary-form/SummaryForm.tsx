import { StepFormContext } from "@core/context/FormContext.tsx"
import { useContext } from "react"
import {
  formatPrice,
  formatToLowerCase,
  formatToPacalCase,
} from "@utils/format"
import {
  ChangePlanLink,
  SummaryFormInfo,
  SummaryTotalPlanPrice,
  SummaryTotalServicesPrice,
  TitlePlan,
  TotalPerMonth,
} from "@components/form-custom/summary-form/summaryFormStyles.ts"

const SummaryForm = () => {
  const formAPI = useContext(StepFormContext)

  if (formAPI?.step !== 4) return <></>

  const stateSummaryForm = formAPI.getFormSummary()

  // const unitString = stateSummaryForm?.unit === EPriceUnit.MONTHLY ? "Monthly" : "Yearly";
  //   const totalUnitString =
  //     stateSummaryForm?.unit === EPriceUnit.YEARLY ? "month" : "year";

  return (
    <>
      <SummaryFormInfo>
        <SummaryTotalPlanPrice>
          <div>
            <TitlePlan>
              {stateSummaryForm?.plan}&nbsp;(
              {formatToPacalCase(stateSummaryForm?.unit)})
            </TitlePlan>
            <ChangePlanLink href="#" onClick={() => formAPI?.goToStep(2)}>
              Change
            </ChangePlanLink>
          </div>
          <h2>
            {formatPrice(
              stateSummaryForm?.planPrice || "",
              stateSummaryForm?.unit
            )}
          </h2>
        </SummaryTotalPlanPrice>
        <hr />
        <div>
          {stateSummaryForm.addOns.map((addOn) => (
            <SummaryTotalServicesPrice key={addOn.name}>
              <p>{addOn.name}</p>
              <p>+{formatPrice(addOn.price, stateSummaryForm.unit)}</p>
            </SummaryTotalServicesPrice>
          ))}
        </div>
      </SummaryFormInfo>
      <TotalPerMonth>
        <p>Total (per {formatToLowerCase(stateSummaryForm?.unit)})</p>
        <h2>{formatPrice(stateSummaryForm.total, stateSummaryForm.unit)}</h2>
      </TotalPerMonth>
    </>
  )
}
export default SummaryForm
