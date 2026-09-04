import type { SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  containerClassName?: string;
}

export function SelectField({
  label,
  options,
  containerClassName = "",
  id,
  className = "",
  ...selectProps
}: SelectFieldProps) {
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      <label
        htmlFor={id}
        className="font-sans text-label-md uppercase text-primary"
      >
        {label}
      </label>
      <select
        id={id}
        className={`w-full rounded border border-outline-variant bg-surface p-3 font-sans text-body-md text-on-surface focus:border-tertiary-container focus:outline-none ${className}`}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
