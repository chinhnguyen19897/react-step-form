import React, {ReactEventHandler, useMemo} from 'react';
import {generateID} from "@utils/stepUtils.ts";
import {PriceUnit} from "types/form.ts";
import {formatCost} from "@utils/formUtils.ts";

type CardCheckboxProps = {
    title: string,
    subtitle: string,
    cost: number,
    isChecked: boolean,
    unit: PriceUnit,
    onChange: (e: ReactEventHandler) => void,
}
export const CardCheckbox: React.FC<CardCheckboxProps> = ({title, cost, unit, onChange, subtitle, isChecked}) => {
    const price = formatCost(cost, unit);
    const checkboxID = useMemo(() => (`checkbox-${generateID()}`), []);
    return (
        <label htmlFor={checkboxID}>
            <div>
                <section>
                    <input type="checkbox" id={checkboxID} checked={isChecked} onChange={() => onChange}/>
                </section>
                <section>
                    <h3>{title}</h3>
                    <h3>{subtitle}</h3>
                </section>
                <section>
                    {price}
                </section>
            </div>
        </label>
    );
};

