import { ArrowRight, CheckCircle2, Circle } from "lucide-react";
import { surveySteps } from "@/app/data/survey-steps";

interface SurveyPipelineNavProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
}

export function SurveyPipelineNav({
  currentStep,
  onSelectStep,
}: SurveyPipelineNavProps) {
  return (
    <div className="space-y-2 lg:sticky lg:top-36">
      <div className="px-3 py-2 font-sans text-label-md uppercase text-on-surface-variant">
        Survey Pipeline
      </div>
      <nav className="space-y-1">
        {surveySteps.map((step) => {
          const isCurrent = step.id === currentStep;
          const isComplete = step.id < currentStep;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors ${
                isCurrent
                  ? "bg-primary-container font-semibold text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span className="flex items-center gap-3 font-sans text-body-sm">
                <span className="font-mono text-label-sm opacity-70">
                  {String(step.id).padStart(2, "0")}
                </span>
                {step.label}
              </span>
              {isCurrent ? (
                <ArrowRight className="h-[18px] w-[18px]" />
              ) : isComplete ? (
                <CheckCircle2 className="h-[18px] w-[18px]" />
              ) : (
                <Circle className="h-[18px] w-[18px] opacity-40" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
