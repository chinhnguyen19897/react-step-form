import {StepFormContext} from "@core/context/Context.tsx";
import {useContext} from "react";
import {PriceUnit} from "@types/form.ts";
import {formatPrice} from "@utils/formUtils.ts";

export const SummaryForm = () => {

    const formAPI = useContext(StepFormContext)

    if (formAPI?.step !== 4) return <></>

    const stateSummaryForm = formAPI.getFormSummary();

    const unitString = stateSummaryForm?.unit === PriceUnit.MONTHLY ? "Monthly" : "Yearly";
    const totalUnitString = stateSummaryForm?.totalUnit === PriceUnit.YEARLY ? "month" : "year"

    return (
        <section>
            <div>
                <div>
                    <div>
                        <h3>{stateSummaryForm?.plan}&nbsp;({unitString})</h3>
                        <a href="#" onClick={() => formAPI?.goToStep(2)}>Change</a>
                    </div>
                    <h2>
                        {formatPrice(stateSummaryForm?.planPrice || "", stateSummaryForm?.unit)}
                    </h2>
                </div>
                <hr/>
                <div>
                    {
                        stateSummaryForm.addOns.map(addOn => (
                            <div key={addOn.name}>
                                <p>{addOn.name}</p>
                                <p>+{formatPrice(addOn.price, stateSummaryForm.unit)}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <p>Total (per {totalUnitString})</p>
                <h2>{formatPrice(stateSummaryForm.total, stateSummaryForm.unit)}</h2>
            </div>
        </section>
    );
};

