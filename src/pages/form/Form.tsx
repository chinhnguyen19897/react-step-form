import { SideBar } from "@layout/SideBar.tsx";
import Steps from "@components/step/Steps.tsx";
import { StepFormContext, useStepForm } from "@core/context/FormContext.tsx";
import StepForm from "@layout/step/StepLayout";
import { PersonalForm } from "@components/form-custom/personal-form/PersonalForm";
import { SelectPlanForm } from "@components/form-custom/select-plan-form/SelectPlanForm";
import { AddonsForm } from "@components/form-custom/addons-form/AddonsForm.tsx";
import { SummaryForm } from "@components/form-custom/summary-form/SummaryForm.tsx";
import { ThankYouForm } from "@components/form-custom/thank-you-form/ThankYouForm.tsx";

export const Form = () => {
  const stepForm = useStepForm(5);
  const stepFormProps = { ...stepForm.getCurrentStepInfo() };
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
  );
};
