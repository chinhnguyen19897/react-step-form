import { useMemo, useId } from "react";
import { EPriceUnit } from "types/form.ts";
import {
  CheckBox,
  WrapCheckBox,
  WrapPrice,
  WrapText,
} from "./checkboxCardStyles.ts";
import { formatCost } from "@utils/format.ts";

interface CheckboxCardProps {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  subtitle: string;
  cost: number;
  unit: EPriceUnit;
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
  const newId = useId();
  const checkboxID = useMemo(() => `checkbox-${newId}`, [newId]);

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
