import { useContext } from "react"
import { EPriceUnit } from "types/form.ts"
import { StepFormContext } from "contexts/FormContext.tsx"
import { CheckboxCard } from "@components/checkbox-card/CheckboxCard"

const AddonsForm = () => {
  const formAPI = useContext(StepFormContext)
  const allAddOns = formAPI?.addOnInfo.getAllAddons()
  if (formAPI?.step != 3) return <></>

  return (
    <>
      {allAddOns?.map((addOn) => (
        <CheckboxCard
          key={addOn.id}
          title={addOn.title}
          subtitle={addOn.subtitle}
          cost={parseInt(
            formAPI.planInfo.pricingUnit === EPriceUnit.MONTHLY
              ? addOn.monthlyCost
              : addOn.yearlyCost
          )}
          isChecked={formAPI?.addOnInfo.isActiveAddon(addOn.id)}
          onChange={(e) => {
            formAPI?.addOnInfo.addOrRemoveAddon(
              addOn.id,
              !(e.target as HTMLInputElement).checked
            )
          }}
          unit={formAPI?.planInfo.pricingUnit}
        />
      ))}
    </>
  )
}
export default AddonsForm
