import { StepFormContext } from "context/FormContext.tsx";
import { useContext } from "react";
import { Card } from "@components/card/Card.tsx";
import { PriceUnit } from "types/form.ts";
import { Switch } from "@components/switch/Switch.tsx";
import "./styles.scss";

export const SelectPlanForm = () => {
  const formAPI = useContext(StepFormContext);
  const allPlans = formAPI?.planInfo.getAllPlans();
  if (formAPI?.step !== 2) return <></>;
  return (
    <>
      <section className="form-plan">
        {allPlans?.map((plan) => {
          const { id, icon, monthlyCost, title, yearlyCost } = plan;
          return (
            <Card
              key={id}
              icon={icon}
              title={title}
              price={
                formAPI?.planInfo.pricingType === PriceUnit.MONTHLY
                  ? monthlyCost
                  : yearlyCost
              }
              units={formAPI?.planInfo.pricingType}
              isActive={formAPI?.planInfo.isPlanActive(plan.id)}
              onClick={() => formAPI?.planInfo.setPlanAsActive(plan.id)}
            />
          );
        })}
      </section>
      <section className="switch-container">
        <Switch
          leftLabel="Monthly"
          rightLabel="Yearly"
          onChange={() => formAPI?.planInfo.togglePricingType()}
          checked={formAPI?.planInfo.pricingType === PriceUnit.YEARLY}
        />
      </section>
    </>
  );
};
