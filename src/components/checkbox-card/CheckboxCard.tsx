import { ChangeEvent, useMemo } from "react";
import { PriceUnit } from "types/form.ts";
import { generateID } from "@utils/steps.ts";
import { formatCost } from "@utils/form.ts";

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
      <section className={`card-checkbox ${isChecked ? "active" : ""}`}>
        <div className="check-box">
          <input
            type="checkbox"
            id={checkboxID}
            checked={isChecked}
            onChange={onChange}
            className="checkbox-input"
          />
        </div>
        <div className="card-checkbox--title">
          <h3>{title}</h3>
          <h3>{subtitle}</h3>
        </div>
        <div className="card-checkbox--price">{price}</div>
      </section>
    </label>
  );
}
