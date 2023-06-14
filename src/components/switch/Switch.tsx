import { Switch as HeadlessSwitch } from "@headlessui/react"

type SwitchProps = {
  checked: boolean
  leftLabel: string
  rightLabel: string
  onChange: (value: boolean) => void
}
export const Switch = ({
  checked,
  onChange,
  leftLabel,
  rightLabel,
}: SwitchProps) => {
  return (
    <HeadlessSwitch.Group>
      <HeadlessSwitch.Label
        className={`${
          !checked ? "text-marine-blue" : "text-light-gray"
        } label-monthly`}
      >
        {leftLabel}
      </HeadlessSwitch.Label>
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } switch-button`}
      >
        <span />
      </HeadlessSwitch>
      <HeadlessSwitch.Label
        className={`${
          checked ? "text-marine-blue" : "text-light-gray"
        } label-yearly`}
      >
        {rightLabel}
      </HeadlessSwitch.Label>
    </HeadlessSwitch.Group>
  )
}
