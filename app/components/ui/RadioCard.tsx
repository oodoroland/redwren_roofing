import { ArrowRight, type LucideIcon } from "lucide-react";

interface RadioCardBadge {
  label: string;
  className: string;
}

interface RadioCardProps {
  name: string;
  value: string;
  checked: boolean;
  onSelect: () => void;
  icon: LucideIcon;
  iconClassName?: string;
  badge?: RadioCardBadge;
  title: string;
  description: string;
  ctaLabel: string;
}

export function RadioCard({
  name,
  value,
  checked,
  onSelect,
  icon: Icon,
  iconClassName = "text-primary",
  badge,
  title,
  description,
  ctaLabel,
}: RadioCardProps) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onSelect}
        className="peer sr-only"
      />
      <div className="flex h-full flex-col justify-between rounded-lg border-2 border-transparent bg-surface p-5 transition-all hover:bg-surface-container peer-checked:border-tertiary-container peer-checked:bg-surface-container-lowest">
        <div>
          {badge ? (
            <div className="mb-2 flex items-center justify-between">
              <Icon className={`h-7 w-7 ${iconClassName}`} />
              <span
                className={`rounded px-2 py-0.5 font-sans text-label-sm font-semibold ${badge.className}`}
              >
                {badge.label}
              </span>
            </div>
          ) : (
            <Icon className={`mb-3 h-7 w-7 ${iconClassName}`} />
          )}
          <div className="font-serif text-headline-sm text-primary">
            {title}
          </div>
          <p className="mt-1 font-sans text-body-sm text-on-surface-variant">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center font-sans text-label-sm font-semibold text-tertiary-container">
          <span>{ctaLabel}</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </label>
  );
}
