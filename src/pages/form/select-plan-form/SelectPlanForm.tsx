import {StepFormContext} from "../../../core/context/Context.tsx";
import {useContext} from "react";
import {Card} from "../../../components/card/Card.tsx";
import {PriceUnit} from "@types/form.ts";
import {Switch} from "../../../components/switch/Switch.tsx";

export const SelectPlanForm = () => {
    const formAPI = useContext(StepFormContext);
    const allPlans = formAPI?.planInfo.getAllPlans();
    if (formAPI?.step !== 2) return <></>
    return (
        <section>
            <div>
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
            </div>
            <div>
                <Switch leftLabel="Monthly" rightLabel="Yearly" onChange={() => formAPI?.planInfo.togglePricingType()}
                        checked={formAPI?.planInfo.pricingType === PriceUnit.YEARLY}/>
            </div>
        </section>
    );
};

