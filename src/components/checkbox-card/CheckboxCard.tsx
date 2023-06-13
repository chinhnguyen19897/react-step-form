import {ChangeEvent, useMemo} from "react";
import {PriceUnit} from "types/form.ts";
import {generateID} from "@utils/stepUtils.ts";
import {CheckBox, WrapCheckBox, WrapPrice, WrapText,} from "./checkboxCardStyles.ts";
import {formatCost} from "@utils/formUtils.ts";

interface CheckboxCardProps {
  isChecked: boolean;
  onChange: (e: ChangeEvent) => void;
  title: string;
  subtitle: string;
  cost: number;
  unit: PriceUnit;
}

export function CheckboxCard({
  cost,
  unit,
  isChecked,
  onChange,
  title,
  subtitle,
}: CheckboxCardProps) {
  const price = formatCost(cost, unit);
  const checkboxID = useMemo(() => `checkbox-${generateID()}`, []);

  return (
    <label htmlFor={checkboxID}>
      <WrapCheckBox isChecked={isChecked}>
        <CheckBox>
          <input
            type="checkbox"
            id={checkboxID}
            checked={isChecked}
            onChange={onChange}
          />
        </CheckBox>
        <WrapText>
          <h3>{title}</h3>
          <h3>{subtitle}</h3>
        </WrapText>
        <WrapPrice>{price}</WrapPrice>
      </WrapCheckBox>
    </label>
  );
}
