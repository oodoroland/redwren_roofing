interface StepHeaderProps {
  stepNumber: number;
  title: string;
  description: string;
}

export function StepHeader({ stepNumber, title, description }: StepHeaderProps) {
  return (
    <div>
      <span className="font-sans text-label-sm font-semibold uppercase tracking-wider text-tertiary-container">
        STEP {String(stepNumber).padStart(2, "0")} OF 06
      </span>
      <h2 className="mt-1 font-serif text-headline-md text-primary">
        {title}
      </h2>
      <p className="font-sans text-body-md text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
