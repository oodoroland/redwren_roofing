import { RadioCard } from "@/app/components/ui/RadioCard";
import { StepHeader } from "@/app/components/request/StepHeader";
import { StepActions } from "@/app/components/request/StepActions";
import { urgencyOptions } from "@/app/data/urgency-options";

interface UrgencyStepProps {
  value: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function UrgencyStep({
  value,
  onChange,
  onBack,
  onNext,
}: UrgencyStepProps) {
  return (
    <div className="space-y-6">
      <StepHeader
        stepNumber={3}
        title="Urgency & Deployment Timeline"
        description="Indicate the criticality of the survey response."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {urgencyOptions.map((option) => (
          <RadioCard
            key={option.value}
            name="urgency"
            value={option.value}
            checked={value === option.value}
            onSelect={() => onChange(option.value)}
            icon={option.icon}
            iconClassName={option.iconClassName}
            badge={option.badge}
            title={option.title}
            description={option.description}
            ctaLabel="SELECT URGENCY"
          />
        ))}
      </div>
      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel="Proceed to Symptoms"
      />
    </div>
  );
}
