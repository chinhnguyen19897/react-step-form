import React, { useMemo } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { generateID } from "@utils/stepUtils.ts";

interface FormInputProps extends UseFormRegisterReturn {
  type: string;
  placeholder: string;
  label: string;
  className?: string;
  error?: FieldError;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const formID = useMemo(() => `form-input-${generateID()}`, []);
    const required = props.error?.type === "required";
    const errorMessage = required
      ? "This field is required"
      : `Invalid ${props.name}`;
    const propsWithoutClassName = { ...props };
    delete propsWithoutClassName.className;
    delete propsWithoutClassName.error;
    return (
      <>
        <section className="input-label">
          <label htmlFor={formID}>{props.label}</label>
          {props.error && <span className="error-massage">{errorMessage}</span>}
        </section>
        <input
          id={formID}
          required={required}
          {...props}
          ref={ref}
          className="form-input"
        />
      </>
    );
  }
);
