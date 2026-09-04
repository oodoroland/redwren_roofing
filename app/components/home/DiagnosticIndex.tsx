import Link from "next/link";
import Image from "next/image";
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
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container p-8"
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 to-primary/90 transition-colors duration-500 group-hover:from-primary/90 group-hover:to-primary/95" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <item.icon className="h-8 w-8 text-on-primary" />
                <span className="font-mono text-label-sm text-primary-fixed-dim">
                  {item.code}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-headline-sm text-on-primary">
                {item.title}
              </h3>
              <p className="font-sans text-body-sm text-primary-fixed-dim">
                {item.description}
              </p>
            </div>
            <div className="relative z-10 mt-8 flex items-center gap-2 font-sans text-label-md uppercase text-tertiary-fixed-dim transition-transform duration-300 group-hover:translate-x-1">
              <span>{item.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
