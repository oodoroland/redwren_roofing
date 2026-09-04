import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  disciplineLabel: string;
  urgencyLabel: string;
  onReturnToPortal: () => void;
}

export function SuccessModal({
  open,
  disciplineLabel,
  urgencyLabel,
  onReturnToPortal,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg space-y-6 rounded-xl bg-surface p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <div>
          <span className="font-sans text-label-sm font-semibold uppercase tracking-wider text-tertiary-container">
            LOG REF: RW-2025-894X
          </span>
          <h3 className="mt-1 font-serif text-headline-lg text-primary">
            Survey Request Logged Successfully
          </h3>
          <p className="mt-2 font-sans text-body-md text-on-surface-variant">
            Your architectural survey request has been routed to Senior
            Surveyor M. Vance. We will contact you within 4 business hours
            to confirm site access.
          </p>
        </div>
        <div className="space-y-2 rounded-lg bg-surface-container p-4 text-left">
          <div className="flex justify-between font-sans text-body-sm">
            <span className="text-on-surface-variant">Discipline:</span>
            <span className="font-semibold text-primary">
              {disciplineLabel}
            </span>
          </div>
          <div className="flex justify-between font-sans text-body-sm">
            <span className="text-on-surface-variant">Urgency:</span>
            <span className="font-semibold text-primary">{urgencyLabel}</span>
          </div>
          <div className="flex justify-between font-sans text-body-sm">
            <span className="text-on-surface-variant">Assigned Unit:</span>
            <span className="font-semibold text-primary">
              Heritage Division // South East
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onReturnToPortal}
          className="w-full rounded bg-primary py-3 font-sans text-label-md font-semibold uppercase text-on-primary"
        >
          Return to Portal
        </button>
      </div>
    </div>
  );
}
