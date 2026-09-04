import { RadioCard } from "@/app/components/ui/RadioCard";
import { StepHeader } from "@/app/components/request/StepHeader";
import { StepActions } from "@/app/components/request/StepActions";
import { disciplineOptions } from "@/app/data/discipline-options";

interface DisciplineStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function DisciplineStep({ value, onChange, onNext }: DisciplineStepProps) {
  return (
    <div className="space-y-6">
      <StepHeader
        stepNumber={1}
        title="What do you need help with?"
        description="Select the primary discipline required for your building inspection."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {disciplineOptions.map((option) => (
          <RadioCard
            key={option.value}
            name="discipline"
            value={option.value}
            checked={value === option.value}
            onSelect={() => onChange(option.value)}
            icon={option.icon}
            title={option.title}
            description={option.description}
            ctaLabel="SELECT DISCIPLINE"
          />
        ))}
      </div>
      <StepActions onNext={onNext} nextLabel="Proceed to Property" />
    </div>
  );
}
