import {SideBar} from "../../layout/SideBar.tsx";
import Steps from "./step/Steps.tsx";
import {useStepForm} from "../../core/context/Context.tsx";
import {FormWrapper, MainForm} from "../../components/ui/form/FormStyled.tsx";
import StepForm from "./step-form/StepForm.tsx";
import {PersonalInfoForm} from "./personal-form/PersonalInfoForm.tsx";
import {SelectPlanForm} from "./select-plan-form/SelectPlanForm.tsx";

export const FormPerson = () => {

    const stepForm = useStepForm(5)
    const stepFormProps = {...stepForm.getCurrentStepInfo()}
    return (
        <FormWrapper>
            <SideBar>
                <Steps activeStep={stepForm.step} stepData={stepForm.getAllSteps()}/>
            </SideBar>
            <MainForm id="main-form">
                <StepForm {...stepFormProps}>
                    <PersonalInfoForm/>
                    <SelectPlanForm/>
                </StepForm>
            </MainForm>
        </FormWrapper>
    )
};

