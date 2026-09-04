import { Award, History, Map, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "Qualifications",
    description: "NVQ Guild Certified Master Craftsmen in Heritage Masonry.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "£10m Public & Contractors All-Risk Heritage Cover.",
  },
  {
    icon: History,
    title: "Experience",
    description: "Over 25 years specializing in period and listed properties.",
  },
  {
    icon: Map,
    title: "Local Coverage",
    description: "Serving regional conservation areas and historic towns.",
  },
];

export function TrustStrip() {
  return (
    <section className="mx-auto mb-24 w-full max-w-[1440px] px-margin-page">
      <div className="grid grid-cols-2 gap-gutter-md md:grid-cols-4">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-lg bg-surface-container-low p-6"
          >
            <point.icon className="mb-3 h-8 w-8 text-primary" />
            <h3 className="mb-1 font-sans text-label-md uppercase text-primary">
              {point.title}
            </h3>
            <p className="font-sans text-body-sm text-on-surface-variant">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
