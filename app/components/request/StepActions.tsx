import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

interface StepActionsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel: string;
  isSubmit?: boolean;
}

export function StepActions({
  onBack,
  onNext,
  nextLabel,
  isSubmit = false,
}: StepActionsProps) {
  return (
    <div className={`flex pt-4 ${onBack ? "justify-between" : "justify-end"}`}>
      {onBack && (
        <Button type="button" variant="outline" size="compact" onClick={onBack}>
          Back
        </Button>
      )}
      <Button
        type={isSubmit ? "submit" : "button"}
        onClick={isSubmit ? undefined : onNext}
        size={isSubmit ? "emphasis" : "wide"}
        icon={
          isSubmit ? (
            <BadgeCheck className="h-[18px] w-[18px]" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )
        }
      >
        {nextLabel}
      </Button>
    </div>
  );
}
