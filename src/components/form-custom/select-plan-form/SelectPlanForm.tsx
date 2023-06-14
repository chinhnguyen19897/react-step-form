import {StepFormContext} from "@core/context/FormContext.tsx";
import {useContext} from "react";
import {Card} from "@components/card/Card.tsx";
import {EPriceUnit} from "types/form.ts";
import {Switch} from "@components/switch/Switch.tsx";
import {
    SelectPlanFormSwitch,
    SelectPlanFormWrapper,
} from "@components/form-custom/select-plan-form/selectPlanFormStyles.ts";

export const SelectPlanForm = () => {
  const formAPI = useContext(StepFormContext);
  const allPlans = formAPI?.planInfo.getAllPlans();
  if (formAPI?.step !== 2) return <></>;
  return (
    <>
      <SelectPlanFormWrapper>
        {allPlans?.map((plan) => {
          const { id, icon, monthlyCost, title, yearlyCost } = plan;
          return (
            <Card
              key={id}
              icon={icon}
              title={title}
              price={
                formAPI?.planInfo.pricingType === EPriceUnit.MONTHLY
                  ? monthlyCost
                  : yearlyCost
              }
              units={formAPI?.planInfo.pricingType}
              isActive={formAPI?.planInfo.isPlanActive(plan.id)}
              onClick={() => formAPI?.planInfo.setPlanAsActive(plan.id)}
            />
          );
        })}
      </SelectPlanFormWrapper>
      <SelectPlanFormSwitch>
        <Switch
          leftLabel="Monthly"
          rightLabel="Yearly"
          onChange={() => formAPI?.planInfo.togglePricingType()}
          checked={formAPI?.planInfo.pricingType === EPriceUnit.YEARLY}
        />
      </SelectPlanFormSwitch>
    </>
  );
};
