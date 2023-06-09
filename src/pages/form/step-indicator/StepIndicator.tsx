import React from "react";
import { StepIndicatorStyled } from "@components/ui/step/StepIndicatorStyled.tsx";

type Props = {
  isActive: boolean;
  stepNumber: number;
  title: string;
};

export const StepIndicator: React.FC<Props> = ({
  isActive,
  stepNumber,
  title,
}) => {
  return (
    <StepIndicatorStyled>
      <section
        className={`rounded-[1000px] w-10 h-10 border  text-lg text-center align-middle leading-9 ${
          isActive
            ? "text-black bg-light-blue border-light-blue"
            : "text-white border-white"
        }`}
      >
        {stepNumber}
      </section>
      <section className="hidden sm:block text-white tracking-wide ml-5">
        <h2>Step {stepNumber}</h2>
        <h2>{title}</h2>
      </section>
    </StepIndicatorStyled>
  );
};
