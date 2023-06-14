import { ReactNode, useContext } from "react";
import { StepFormContext } from "context/FormContext.tsx";

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
    formAPI?.getSubmitHandler();
  };
  return (
    <section id="step-section" className="step-form">
      {showHeaderFooter && (
        <header className="step-form--header">
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
        </header>
      )}
      <section className="form-container">{children}</section>
      {showHeaderFooter && (
        <footer className="step-form--footer">
          {!isFirst && (
            <button
              onClick={() => {
                formAPI?.prevStep();
              }}
              className="btn button-prev"
            >
              Go Back
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="btn btn-primary button-next"
          >
            {isLast ? "Confirm" : "Next Step"}
          </button>
        </footer>
      )}
    </section>
  );
};

export default StepForm;
