import React, {ReactNode, useContext} from "react";
import {StepFormContext} from "../../../core/context/Context.tsx";
import {StepFormStyled} from "./StepFormStyled.tsx";

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


    return (
        <StepFormStyled id="step-section">
            {
                showHeaderFooter && <header>
                    <h1>{heading}</h1>
                    <h2>{subheading}</h2>
                </header>
            }
            <section>
                {children}
            </section>
            {
                showHeaderFooter && <footer>
                    {
                        !isFirst && (
                            <button onClick={() => {
                                formAPI?.prevStep()
                            }}>
                                Go Back
                            </button>
                        )
                    }
                    <button onClick={() => {
                        formAPI?.getSubmitHandler()
                    }}>
                        {isLast ? "Confirm" : "Next Step"}
                    </button>
                </footer>
            }
        </StepFormStyled>
    );
};

export default StepForm;
