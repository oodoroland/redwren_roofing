import { Check, RefreshCw, Wrench } from "lucide-react";
import { Eyebrow } from "@/app/components/ui/Eyebrow";

const panels = [
  {
    icon: Wrench,
    title: "Repair",
    description:
      "Recommended when original fabric remains structurally sound but requires targeted intervention to prevent water ingress or further deterioration.",
    points: [
      "Preserves historic fabric & patina",
      "Lower embodied carbon impact",
      "Usually avoids listed building consent delays",
    ],
  },
  {
    icon: RefreshCw,
    title: "Replace",
    description:
      "Necessary when structural timber failure, widespread nail fatigue, or profound material degradation makes localized patching uneconomical or ineffective.",
    points: [
      "Resets maintenance cycle for 50+ years",
      "Allows integration of breathable sarking membranes",
      "Comprehensive resolution of latent defects",
    ],
  },
];

export function RepairOrReplace() {
  return (
    <section className="mx-auto mb-24 w-full max-w-[1440px] px-margin-page">
      <div className="rounded-2xl bg-surface-container-high p-8 lg:p-16">
        <div className="mb-12 max-w-3xl">
          <Eyebrow className="mb-2">Technical appraisal</Eyebrow>
          <h2 className="mb-4 font-serif text-headline-lg text-primary">
            Repair or replace?
          </h2>
          <p className="font-sans text-body-lg text-on-surface-variant">
            Understanding structural intervention thresholds for heritage and
            period properties.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-gutter-lg md:grid-cols-2">
          {panels.map((panel) => (
            <div key={panel.title} className="rounded-xl bg-surface p-8">
              <div className="mb-4 flex items-center gap-3">
                <panel.icon className="h-7 w-7 text-primary" />
                <h3 className="font-serif text-headline-sm uppercase text-primary">
                  {panel.title}
                </h3>
              </div>
              <p className="mb-4 font-sans text-body-md text-on-surface-variant">
                {panel.description}
              </p>
              <ul className="space-y-2 font-sans text-body-sm text-on-surface-variant">
                {panel.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary py-2 pl-6">
          <p className="font-serif text-headline-sm text-primary italic">
            &ldquo;A photograph can help us understand the situation, but it
            cannot replace an inspection.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
