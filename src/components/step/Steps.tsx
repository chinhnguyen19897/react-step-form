import { StepIndicator } from "@components/step-indicator/StepIndicator.tsx";
import { SideBarStep } from "@assets/styles/sidebar/sideBar.styles.ts";

type StepProps = {
  activeStep: number;
  stepData: {
    id: number;
    title: string;
  }[];
};

const Steps = ({ stepData, activeStep }: StepProps) => {
  const isStepActive = (id: number) => {
    if (activeStep <= 3) return id === activeStep;
    return id >= 4;
  };
  return (
    <SideBarStep>
      {stepData.map((step) => (
        <StepIndicator
          key={step.id}
          isActive={isStepActive(step.id)}
          title={step.title}
          stepNumber={step.id}
        />
      ))}
    </SideBarStep>
  );
};

export default Steps;
