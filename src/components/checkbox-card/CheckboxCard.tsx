import { ChangeEvent, useId, useMemo } from "react"
import { EPriceUnit } from "types/form.ts"
import { formatCost } from "@utils/form.ts"

type CheckboxCardProps = {
  isChecked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  title: string
  subtitle: string
  cost: number
  unit: EPriceUnit
}

export function CheckboxCard({
  cost,
  unit,
  isChecked,
  onChange,
  title,
  subtitle,
}: CheckboxCardProps) {
  const price = formatCost(cost, unit)
  const newId = useId()
  const checkboxID = useMemo(() => `checkbox-${newId}`, [newId])

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
  )
}
