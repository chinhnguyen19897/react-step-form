import {useMemo} from "react";
import {PriceUnit} from "types/form.ts";
import {generateID} from "@utils/stepUtils.ts";
import {CheckBox, WrapCheckBox, WrapPrice, WrapText} from "./checkboxCardStyles.ts";

interface CheckboxCardProps {
  isChecked: boolean;
  onChange: (e: any) => void;
  title: string;
  subtitle: string;
  cost: number;
  unit: PriceUnit;
}

export function CheckboxCard(props: CheckboxCardProps) {
  const price = formatCost(props.cost, props.unit);
  const checkboxID = useMemo(() => `checkbox-${generateID()}`, []);
  return (
    <label htmlFor={checkboxID}>
      <WrapCheckBox isChecked={props.isChecked}>
        <CheckBox>
          <input
            type="checkbox"
            id={checkboxID}
            checked={props.isChecked}
            onChange={props.onChange}
          />
        </CheckBox>
        <WrapText>
          <h3>{props.title}</h3>
          <h3>{props.subtitle}</h3>
        </WrapText>
        <WrapPrice className="price">{price}</WrapPrice>
      </WrapCheckBox>
    </label>
  );
}

function formatCost(cost: number, unit: PriceUnit) {
  switch (unit) {
    case PriceUnit.MONTHLY:
      return `+$${cost}/mo`;
    case PriceUnit.YEARLY:
      return `+$${cost}/yr`;
    default:
      return `+$${cost}`;
  }
}
