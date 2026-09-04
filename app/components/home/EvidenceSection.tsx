import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Eyebrow } from "@/app/components/ui/Eyebrow";
import { caseStudies } from "@/app/data/case-studies";

export function EvidenceSection() {
  return (
    <section
      id="evidence"
      className="mx-auto mb-24 w-full max-w-[1440px] scroll-mt-32 px-margin-page"
    >
      <div className="mb-12">
        <Eyebrow className="mb-2">Field case studies</Eyebrow>
        <h2 className="font-serif text-headline-lg text-primary">
          Don&apos;t take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-gutter-lg lg:grid-cols-3">
        {caseStudies.map((study) => (
          <div
            key={study.ref}
            className="flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm"
          >
            <div>
              <div className="relative h-64 w-full">
                <Image
                  src={study.image.src}
                  alt={study.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded bg-primary-container px-2.5 py-1 font-mono text-label-sm text-primary-fixed-dim">
                    {study.ref}
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    {study.status}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-headline-sm text-primary">
                  {study.title}
                </h3>
                <div className="my-4 space-y-2 font-sans text-body-sm text-on-surface-variant">
                  <p>
                    <strong className="text-primary">Problem:</strong>{" "}
                    {study.problem}
                  </p>
                  <p>
                    <strong className="text-primary">Work Completed:</strong>{" "}
                    {study.workCompleted}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 pt-0 pb-6">
              <span className="flex items-center gap-1 font-sans text-label-md font-semibold uppercase text-primary">
                <span>Verified case study</span>
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
