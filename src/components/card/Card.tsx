import {PriceUnit} from "types/form.ts";
import {formatPrice} from "@utils/formUtils.ts";
import {CardStyles} from "@components/card/card.styles.ts";

type CardProps = {
    icon: string;
    title: string;
    price: string;
    units: PriceUnit,
    isActive: boolean;
    onClick: () => void;
}
export const Card = ({icon, title, price, units, onClick, isActive}: CardProps) => {
    const prices = formatPrice(price, units)
    const yearly = units === PriceUnit.YEARLY
    return (
        <CardStyles onClick={onClick} isActive={isActive}>
            <img src={icon} alt="icon"/>
            <section>
                <h3>{title}</h3>
                <p>{prices}</p>
                {yearly && (<p>2 months free</p>)}
            </section>
        </CardStyles>
    );
};

