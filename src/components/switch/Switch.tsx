import React from 'react';
import {Switch as HeadlessSwitch} from "@headlessui/react"


type SwitchProps = {
    checked: boolean,
    leftLabel: string,
    rightLabel: string,
    onChange: (value: boolean) => void
}
export const Switch: React.FC<SwitchProps> = ({checked, onChange, leftLabel, rightLabel}) => {
    return (
        <HeadlessSwitch.Group>
            <HeadlessSwitch.Label>
                {leftLabel}
            </HeadlessSwitch.Label>
            <HeadlessSwitch checked={checked} onChange={onChange}>
                <span/>
            </HeadlessSwitch>
            <HeadlessSwitch.Label>
                {rightLabel}
            </HeadlessSwitch.Label>
        </HeadlessSwitch.Group>
    );
};

