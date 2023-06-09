import React, {useContext} from "react";
import {StepFormContext} from "../../../core/context/Context.tsx";
import {FormInput} from "../../../components/form-input/FormInput.tsx";
import {regExEmail, regExPhone} from "../../../utils/regexUtils.ts";


export const PersonalInfoForm: React.FC = () => {
    const formAPI = useContext(StepFormContext)
    const register = formAPI!.personalInfo.formRegister;
    const errors = formAPI!.personalInfo.personalInfoErrors;
    if (formAPI?.step != 1) return <></>;
    return (
        <section>
            <FormInput label="Name" type="text" placeholder="e.g. Chinh Nguyen"
                       error={errors?.name}  {...register("name", {
                required: true,
            })}/>
            <FormInput
                placeholder="e.g. stephenking@lorem.com"
                type="text"
                label="Email Address"
                {...register("email", {
                    required: true,
                    pattern: regExEmail
                })}
                error={errors?.email}
            />
            <FormInput
                placeholder="e.g. +1 234 567 890"
                type="text"
                label="Phone Number"
                {...register("phone", {
                    required: true,
                    pattern: regExPhone
                })}
                error={errors?.phone}
            />
        </section>
    );
}