import { SideBar } from "@layout/SideBar.tsx";
import Steps from "@components/step/Steps.tsx";
import { StepFormContext, useStepForm } from "@core/context/Context.tsx";
import { FormWrapper, MainForm } from "@assets/styles/form/form.styles.ts";
import StepForm from "@layout/step/StepLayout";
import { PersonalForm } from "@components/form-custom/personal-form/PersonalForm";
import { SelectPlanForm } from "@components/form-custom/select-plan-form/SelectPlanForm";
import AddonsForm from "@components/form-custom/addons-form/AddonsForm";

export const Form = () => {
  const stepForm = useStepForm(5);
  const stepFormProps = { ...stepForm.getCurrentStepInfo() };

  return (
    <StepFormContext.Provider value={stepForm}>
      <FormWrapper>
        <SideBar>
          <Steps activeStep={stepForm.step} stepData={stepForm.getAllSteps()} />
        </SideBar>
        <MainForm id="main-form">
          <StepForm {...stepFormProps}>
            <PersonalForm />
            <SelectPlanForm />
            <AddonsForm />
          </StepForm>
        </MainForm>
      </FormWrapper>
    </StepFormContext.Provider>
  );
};
