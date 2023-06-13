import {StepFormContext} from "@core/context/FormContext.tsx";
import {useContext} from "react";
import {PriceUnit} from "types/form.ts";
import {formatPrice} from "@utils/formUtils.ts";
import {
    ChangePlanLink,
    SummaryFormInfo,
    SummaryTotalPlanPrice,
    SummaryTotalServicesPrice,
    TitlePlan,
    TotalPerMonth,
} from "@components/form-custom/summary-form/summaryFormStyles.ts";

export const SummaryForm = () => {
    const formAPI = useContext(StepFormContext)

    if (formAPI?.step !== 4) return <></>

    const stateSummaryForm = formAPI.getFormSummary();


    const unitString = stateSummaryForm?.unit === PriceUnit.MONTHLY ? "Monthly" : "Yearly";
    const totalUnitString = stateSummaryForm?.unit === PriceUnit.YEARLY ? "month" : "year"


    return (
        <>
            <SummaryFormInfo>
                <SummaryTotalPlanPrice>
                    <div>
                        <TitlePlan>{stateSummaryForm?.plan}&nbsp;({unitString})</TitlePlan>
                        <ChangePlanLink href="#" onClick={() => formAPI?.goToStep(2)}>Change</ChangePlanLink>
                    </div>
                    <h2>
                        {formatPrice(stateSummaryForm?.planPrice || "", stateSummaryForm?.unit)}
                    </h2>
                </SummaryTotalPlanPrice>
                <hr/>
                <div>
                    {
                        stateSummaryForm.addOns.map(addOn => (
                            <SummaryTotalServicesPrice key={addOn.name}>
                                <p>{addOn.name}</p>
                                <p>+{formatPrice(addOn.price, stateSummaryForm.unit)}</p>
                            </SummaryTotalServicesPrice>
                        ))
                    }
                </div>
            </SummaryFormInfo>
            <TotalPerMonth>
                <p>Total (per {totalUnitString})</p>
                <h2>{formatPrice(stateSummaryForm.total, stateSummaryForm.unit)}</h2>
            </TotalPerMonth>
        </>
    );
};

