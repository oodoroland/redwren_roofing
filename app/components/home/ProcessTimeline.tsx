import { Eyebrow } from "@/app/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    title: "Tell us what you're seeing",
    description:
      "Submit details, photographs, or observations of the roof defect through our survey request portal.",
  },
  {
    number: "02",
    title: "We review the request",
    description:
      "Our heritage surveyors analyze building age, construction type, and reported symptoms before scheduling.",
  },
  {
    number: "03",
    title: "We inspect",
    description:
      "On-site physical inspection using drones, ladder access, and moisture meters to locate root causes.",
  },
  {
    number: "04",
    title: "We explain the options",
    description:
      "You receive a clear, jargon-free report outlining repair versus replacement choices with fixed pricing.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="mx-auto mb-24 w-full max-w-[1440px] px-margin-page">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Eyebrow className="mb-2">Survey workflow</Eyebrow>
        <h2 className="mb-4 font-serif text-headline-lg text-primary">
          How we handle your property
        </h2>
        <p className="font-sans text-body-md text-on-surface-variant">
          A transparent, four-step engineering workflow from initial contact
          to definitive solution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-lg bg-surface-container-low p-6"
          >
            <span className="mb-4 block font-mono text-headline-lg text-outline-variant">
              {step.number}
            </span>
            <h3 className="mb-2 font-serif text-headline-sm text-primary">
              {step.title}
            </h3>
            <p className="font-sans text-body-sm text-on-surface-variant">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
