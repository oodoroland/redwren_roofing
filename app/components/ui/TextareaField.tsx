import type { TextareaHTMLAttributes } from "react";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helpText?: string;
  containerClassName?: string;
}

export function TextareaField({
  label,
  helpText,
  containerClassName = "",
  id,
  className = "",
  ...textareaProps
}: TextareaFieldProps) {
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      <label
        htmlFor={id}
        className="font-sans text-label-md uppercase text-primary"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full rounded border border-outline-variant bg-surface p-4 font-sans text-body-md text-on-surface focus:border-tertiary-container focus:outline-none ${className}`}
        {...textareaProps}
      />
      {helpText && (
        <p className="font-sans text-body-sm text-on-surface-variant">
          {helpText}
        </p>
      )}
    </div>
  );
}
