import React from 'react';
import {StepIndicatorStyled} from "../../../components/ui/step/StepIndicatorStyled.tsx";

type Props = {
    isActive: boolean,
    stepNumber: number,
    title: string,
}

export const StepIndicator: React.FC<Props> = ({isActive, stepNumber, title}) => {
    return (
        <StepIndicatorStyled>
            <section className={`${isActive}`}>
                {stepNumber}
            </section>
            <section>
                <h2>Step {stepNumber}</h2>
                <h2>{title}</h2>
            </section>
        </StepIndicatorStyled>
    );
};

