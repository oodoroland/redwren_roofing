import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
}

export function TextField({
  label,
  containerClassName = "",
  id,
  className = "",
  ...inputProps
}: TextFieldProps) {
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      <label
        htmlFor={id}
        className="font-sans text-label-md uppercase text-primary"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded border border-outline-variant bg-surface p-3 font-sans text-body-md text-on-surface focus:border-tertiary-container focus:outline-none ${className}`}
        {...inputProps}
      />
    </div>
  );
}
