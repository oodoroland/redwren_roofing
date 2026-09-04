import { TextareaField } from "@/app/components/ui/TextareaField";
import { StepHeader } from "@/app/components/request/StepHeader";
import { StepActions } from "@/app/components/request/StepActions";

interface SymptomsStepProps {
  value: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function SymptomsStep({
  value,
  onChange,
  onBack,
  onNext,
}: SymptomsStepProps) {
  return (
    <div className="space-y-6">
      <StepHeader
        stepNumber={4}
        title="What have you noticed?"
        description="Provide detailed notes on visible defects, internal staining, or structural movement."
      />
      <TextareaField
        label="Diagnostic Field Notes"
        placeholder="Tell us what you've noticed, where it is and when it started."
        rows={6}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        helpText="Include details such as room locations (e.g. 'front attic ceiling'), weather triggers (e.g. 'leaks only during heavy driving rain from the south-west'), and age of previous repairs."
      />
      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel="Proceed to Evidence"
      />
    </div>
  );
}
