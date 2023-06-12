import {StepFormContext} from "@core/context/Context.tsx";
import {useContext} from "react";
import {Card} from "@components/card/Card.tsx";
import {PriceUnit} from "types/form.ts";
import {Switch} from "@components/switch/Switch.tsx";
import {SelectPlanFormWrapper} from "@components/select-plan-form/selectPlanForm.styles.ts";

export const SelectPlanForm = () => {
    const formAPI = useContext(StepFormContext);
    const allPlans = formAPI?.planInfo.getAllPlans();
    if (formAPI?.step !== 2) return <></>
    return (
        <section>
            <SelectPlanFormWrapper>
                {
                    allPlans?.map((plan) => {
                        const {id, icon, monthlyCost, title, yearlyCost} = plan;
                        return (
                            <Card
                                key={id}
                                icon={icon}
                                title={title}
                                price={formAPI?.planInfo.pricingType === PriceUnit.MONTHLY ? monthlyCost : yearlyCost}
                                units={formAPI?.planInfo.pricingType}
                                isActive={formAPI?.planInfo.isPlanActive(plan.id)}
                                onClick={() => formAPI?.planInfo.setPlanAsActive(plan.id)}
                            />
                        )
                    })
                }
            </SelectPlanFormWrapper>
            <div>
                <Switch leftLabel="Monthly" rightLabel="Yearly" onChange={() => formAPI?.planInfo.togglePricingType()}
                        checked={formAPI?.planInfo.pricingType === PriceUnit.YEARLY}/>
            </div>
        </section>
    );
};

