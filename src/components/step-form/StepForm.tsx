import React, {ReactNode, useContext} from "react";
import {StepFormContext} from "@core/context/Context.tsx";
import {StepFormFooter, StepFormHeader, StepFormStyled, StepFormWrapper} from "./stepForm.styles.ts";
import {Button} from "@assets/styles/button/button.styles.ts";

type StepFormProps = {
    heading: string,
    subheading: string,
    isLast: boolean,
    isFirst: boolean,
    children: ReactNode
}


const StepForm: React.FC<StepFormProps> = ({children, isFirst, isLast, subheading, heading}) => {
    const formAPI = useContext(StepFormContext)
    const showHeaderFooter = formAPI?.step != 5 || false;

    const handleSubmit = () => {
        if(formAPI) {
            formAPI.getSubmitHandler()
        }

        // handler()
    }

    return (
        <StepFormStyled id="step-section">
            {
                showHeaderFooter && <StepFormHeader>
                    <h1>{heading}</h1>
                    <h2>{subheading}</h2>
                </StepFormHeader>
            }
            <StepFormWrapper>
                {children}
            </StepFormWrapper>
            {
                showHeaderFooter && <StepFormFooter>
                    {
                        !isFirst && (
                            <Button onClick={() => {
                                formAPI?.prevStep()
                            }}>
                                Go Back
                            </Button>
                        )
                    }
                    <Button onClick={handleSubmit}>
                        {isLast ? "Confirm" : "Next Step"}
                    </Button>
                </StepFormFooter>
            }
        </StepFormStyled>
    );
};

export default StepForm;
