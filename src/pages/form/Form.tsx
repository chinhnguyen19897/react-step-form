import { SideBar } from "@layout/SideBar.tsx"
import Steps from "@components/step/Steps.tsx"
import { StepFormContext, useStepForm } from "@core/context/FormContext.tsx"
import StepForm from "@layout/step/StepLayout"
import { PersonalForm } from "@components/form-custom/personal-form/PersonalForm"
import { SelectPlanForm } from "@components/form-custom/select-plan-form/SelectPlanForm"
import AddOnsForm from "@components/form-custom/addons-form/AddonsForm"
import SummaryForm from "@components/form-custom/summary-form/SummaryForm"
import ThankYouForm from "@components/form-custom/thank-you-form/ThankYouForm"

export const Form = () => {
  const stepForm = useStepForm(5)
  const stepFormProps = { ...stepForm.getCurrentStepInfo() }
  return (
    // TODO: lỗi fix đi a =)))
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
            <AddOnsForm />
            <SummaryForm />
            <ThankYouForm />
          </StepForm>
        </section>
      </section>
    </StepFormContext.Provider>
  )
}
