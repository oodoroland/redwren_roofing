import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/app/components/ui/Eyebrow";
import { diagnosticItems } from "@/app/data/diagnostic-items";

export function DiagnosticIndex() {
  return (
    <section
      id="diagnostic-index"
      className="mx-auto mb-24 w-full max-w-[1440px] scroll-mt-32 px-margin-page"
    >
      <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-end">
        <div>
          <Eyebrow className="mb-2">Diagnostic index</Eyebrow>
          <h2 className="font-serif text-headline-lg text-primary">
            What brings you here?
          </h2>
        </div>
        <p className="mt-4 max-w-md font-sans text-body-md text-on-surface-variant md:mt-0">
          Select an area of concern to view relevant survey protocols and
          historical case notes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-3">
        {diagnosticItems.map((item) => (
          <Link
            key={item.title}
            href={`/request?discipline=${encodeURIComponent(item.disciplineValue)}`}
            className="group flex flex-col justify-between rounded-xl bg-surface-container p-8 transition-all hover:bg-surface-container-high"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="font-mono text-label-sm text-on-surface-variant">
                  {item.code}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-headline-sm text-primary transition-colors group-hover:text-tertiary-container">
                {item.title}
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 font-sans text-label-md uppercase text-primary">
              <span>{item.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
