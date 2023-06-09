import React from "react";
import {StepIndicator} from "../step-indicator/StepIndicator.tsx";

type StepProps = {
    activeStep: number,
    stepData: {
        id: number,
        title: string
    }[]
}


const Steps: React.FC<StepProps> = ({stepData, activeStep}) => {
    const isStepActive = (id: number) => {
        if (activeStep <= 3) return id === activeStep;
        return id >= 4
    }
    return (
        <section>
            {
                stepData.map(step => (
                    <StepIndicator key={step.id} isActive={isStepActive(step.id)} title={step.title}
                                   stepNumber={step.id}/>
                ))
            }
        </section>
    );
};

export default Steps;
