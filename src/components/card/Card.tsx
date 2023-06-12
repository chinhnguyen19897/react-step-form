import React, {ReactEventHandler} from 'react';
import {PriceUnit} from "types/form.ts";
import {formatPrice} from "@utils/formUtils.ts";

type CardProps = {
    icon: string;
    title: string;
    price: string;
    units: PriceUnit,
    isActive: boolean;
    onClick: (e: ReactEventHandler) => void;
}
export const Card: React.FC<CardProps> = ({icon, title, price, units, onClick, isActive}) => {
    const prices = formatPrice(price, units)
    const yearly = units === PriceUnit.YEARLY

    return (
        <section onClick={() => onClick} className={`${isActive}`}>
            <img src={icon} alt="icon"/>
            <section>
                <h3>{title}</h3>
                <p>{prices}</p>
                {yearly && (<p>2 months free</p>)}
            </section>
        </section>
    );
};

