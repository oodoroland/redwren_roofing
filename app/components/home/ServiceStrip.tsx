import { Fragment } from "react";
import { BadgeCheck, Compass, Flame, HardHat } from "lucide-react";

const disciplines = [
  { label: "Slate", icon: BadgeCheck },
  { label: "Leadwork", icon: Compass },
  { label: "Chimneys", icon: Flame },
  { label: "Limework", icon: HardHat },
];

export function ServiceStrip() {
  return (
    <section className="mb-20 w-full bg-primary-container px-margin-page py-6 text-on-primary-container">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 font-sans text-label-md uppercase tracking-widest">
        {disciplines.map((discipline, index) => (
          <Fragment key={discipline.label}>
            {index > 0 && (
              <span className="hidden text-outline-variant md:inline">/</span>
            )}
            <div className="flex items-center gap-3">
              <discipline.icon className="h-4 w-4 text-primary-fixed-dim" />
              <span>{discipline.label}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
