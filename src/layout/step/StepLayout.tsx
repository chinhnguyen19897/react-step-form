import { ReactNode, useContext } from "react"
import { StepFormContext } from "@context/FormContext.tsx"
import {
  StepFormFooter,
  StepFormHeader,
  StepFormStyled,
  StepFormWrapper,
} from "./stepLayoutStyles.ts"

type StepFormProps = {
  heading: string
  subheading: string
  isLast: boolean
  isFirst: boolean
  children: ReactNode
}

const StepForm = ({
  children,
  isFirst,
  isLast,
  subheading,
  heading,
}: StepFormProps) => {
  const formAPI = useContext(StepFormContext)
  const showHeaderFooter = formAPI?.step != 5 || false
  const handleSubmit = async () => {
    formAPI?.getSubmitHandler()
  }
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
            <button
              onClick={() => {
                formAPI?.prevStep()
              }}
              className="button-prev"
            >
              Go Back
            </button>
          )}
          <button onClick={handleSubmit} className="button-next">
            {isLast ? "Confirm" : "Next Step"}
          </button>
        </StepFormFooter>
      )}
    </StepFormStyled>
  )
}

export default StepForm
