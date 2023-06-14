import { StepIndicator } from "@components/step-indicator/StepIndicator.tsx"

type StepProps = {
  activeStep: number
  stepData: {
    id: number
    title: string
  }[]
}

const Steps = ({ stepData, activeStep }: StepProps) => {
  const isStepActive = (id: number) => {
    if (activeStep <= 3) return id === activeStep
    return id >= 4
  }
  return (
    <section className="step-wrapper">
      {stepData.map((step) => (
        <StepIndicator
          key={step.id}
          isActive={isStepActive(step.id)}
          title={step.title}
          stepNumber={step.id}
        />
      ))}
    </section>
  )
}

export default Steps
