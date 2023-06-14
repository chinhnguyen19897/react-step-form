import {
  StepIndicatorNumber,
  StepIndicatorTitle,
  StepIndicatorWrapper,
} from "@components/step-indicator/stepIndicatorStyles.ts"

type Props = {
  isActive: boolean
  stepNumber: number
  title: string
}

export const StepIndicator = ({ isActive, stepNumber, title }: Props) => {
  return (
    <StepIndicatorWrapper>
      <StepIndicatorNumber isActive={isActive}>
        {stepNumber}
      </StepIndicatorNumber>
      <StepIndicatorTitle>
        <h2 className="step-title">Step {stepNumber}</h2>
        <h2 className="step-subtitle">{title}</h2>
      </StepIndicatorTitle>
    </StepIndicatorWrapper>
  )
}
