import React, { ReactNode, useContext } from "react";
import { StepFormContext } from "@core/context/Context.tsx";
import {
  StepFormFooter,
  StepFormHeader,
  StepFormStyled,
  StepFormWrapper,
} from "./StepLayoutStyles.ts";
import { Button } from "@assets/styles/button/button.styles.ts";

type StepFormProps = {
  heading: string;
  subheading: string;
  isLast: boolean;
  isFirst: boolean;
  children: ReactNode;
};

const StepForm = ({
  children,
  isFirst,
  isLast,
  subheading,
  heading,
}: StepFormProps) => {
  const formAPI = useContext(StepFormContext);
  const showHeaderFooter = formAPI?.step != 5 || false;

  const handleSubmit = async () => {
    return formAPI?.getSubmitHandler();
  };
  return (
    <StepFormStyled id="step-section">
      {showHeaderFooter && (
        <StepFormHeader>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
        </StepFormHeader>
      )}
      <StepFormWrapper>{children}</StepFormWrapper>
      {showHeaderFooter && (
        <StepFormFooter>
          {!isFirst && (
            <Button
              onClick={() => {
                formAPI?.prevStep();
              }}
            >
              Go Back
            </Button>
          )}
          <Button onClick={handleSubmit}>
            {isLast ? "Confirm" : "Next Step"}
          </Button>
        </StepFormFooter>
      )}
    </StepFormStyled>
  );
};

export default StepForm;