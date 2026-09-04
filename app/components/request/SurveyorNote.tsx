import { Info } from "lucide-react";

export function SurveyorNote() {
  return (
    <div className="mt-6 rounded-lg bg-surface-container p-4">
      <div className="mb-2 flex items-center gap-2 font-sans text-label-md font-semibold text-primary">
        <Info className="h-4 w-4" />
        SURVEYOR NOTE
      </div>
      <p className="font-sans text-body-sm leading-relaxed text-on-surface-variant">
        Listed properties require specialist non-destructive diagnostic
        methods. Please note your listing grade in Step 02 if applicable.
      </p>
    </div>
  );
}
