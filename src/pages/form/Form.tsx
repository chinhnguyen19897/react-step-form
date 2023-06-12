import {SideBar} from "@layout/SideBar.tsx";
import Steps from "@components/step/Steps.tsx";
import {useStepForm} from "@core/context/Context.tsx";
import {FormWrapper, MainForm} from "@assets/styles/form/form.styles.ts";
import StepForm from "@components/step-form/StepForm.tsx";
import {PersonalForm} from "@components/personal-form/PersonalForm.tsx";
import {SelectPlanForm} from "@components/select-plan-form/SelectPlanForm.tsx";

export const Form = () => {

    const stepForm = useStepForm(5)
    const stepFormProps = {...stepForm.getCurrentStepInfo()}
    return (
        <FormWrapper>
            <SideBar>
                <Steps activeStep={stepForm.step} stepData={stepForm.getAllSteps()}/>
            </SideBar>
            <MainForm id="main-form">
                <StepForm {...stepFormProps}>
                    <PersonalForm/>
                    <SelectPlanForm/>
                </StepForm>
            </MainForm>
        </FormWrapper>
    )
};

