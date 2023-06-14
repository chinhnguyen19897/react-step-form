import { SideBar } from "@layout/SideBar.tsx"
import Steps from "@components/step/Steps.tsx"
import { StepFormContext, useStepForm } from "context/FormContext.tsx"
import StepForm from "@layout/StepLayout.tsx"
import { PersonalForm } from "@pages/form-subscription/components/personal-form/PersonalForm.tsx"
import { SelectPlanForm } from "@pages/form-subscription/components/select-plan-form/SelectPlanForm.tsx"
import AddonsForm from "@pages/form-subscription/components/addons-form/AddonsForm.tsx"
import SummaryForm from "@pages/form-subscription/components/summary-form/SummaryForm.tsx"
import ThankYouForm from "@pages/form-subscription/components/thank-you-form/ThankYouForm.tsx"
import "./formSubscription.scss"

export const FormSubscription = () => {
  const stepForm = useStepForm(5)
  const stepFormProps = { ...stepForm.getCurrentStepInfo() }
  return (
    <StepFormContext.Provider value={stepForm}>
      <section className="form-wrapper">
        <SideBar>
          <Steps
            activeStep={stepForm.step}
            stepData={stepForm.getAllStepInfo()}
          />
        </SideBar>
        <section id="main-form" className="main-form">
          <StepForm {...stepFormProps}>
            <PersonalForm />
            <SelectPlanForm />
            <AddonsForm />
            <SummaryForm />
            <ThankYouForm />
          </StepForm>
        </section>
      </section>
    </StepFormContext.Provider>
  )
}
