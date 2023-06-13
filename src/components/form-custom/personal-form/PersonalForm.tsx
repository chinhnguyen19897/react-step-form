import React, { useContext } from "react";
import { StepFormContext } from "@core/context/FormContext.tsx";
import { FormInput } from "@components/form-input/FormInput.tsx";
import { regExEmail, regExPhone } from "@utils/regexUtils.ts";
import { PersonalFormWrapper } from "@components/form-custom/personal-form/personalFormStyles.ts";

export const PersonalForm: React.FC = () => {
  const formAPI = useContext(StepFormContext);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const register = formAPI!.personalInfo.formRegister;
  const errors = formAPI?.personalInfo.personalInfoErrors;
  if (formAPI?.step != 1) return <></>;
  return (
    <PersonalFormWrapper>
      <FormInput
        label="Name"
        type="text"
        placeholder="e.g. Nguyen Van A"
        error={errors?.name}
        {...register("name", {
          required: true,
        })}
      />
      <FormInput
        placeholder="e.g. nguyenvana@gmail.com"
        type="text"
        label="Email Address"
        {...register("email", {
          required: true,
          pattern: regExEmail,
        })}
        error={errors?.email}
      />
      <FormInput
        placeholder="e.g. +84234330023"
        type="text"
        label="Phone Number"
        {...register("phone", {
          required: true,
          pattern: regExPhone,
        })}
        error={errors?.phone}
      />
    </PersonalFormWrapper>
  );
};
