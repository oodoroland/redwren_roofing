import { Cog, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export function FinalCta() {
  return (
    <section className="mx-auto mb-20 w-full max-w-[1440px] px-margin-page">
      <div className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-primary-container p-12 text-center text-on-primary-container lg:p-20">
        <Cog
          className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] opacity-10"
          strokeWidth={1}
        />
        <span className="mb-3 font-sans text-label-sm uppercase tracking-widest text-primary-fixed-dim">
          Action required
        </span>
        <h2 className="mb-6 max-w-xl font-serif text-headline-xl text-on-primary">
          Think something needs looking at?
        </h2>
        <p className="mb-10 max-w-xl font-sans text-body-lg text-on-primary-container">
          Speak directly with our senior surveyor or request an inspection
          schedule for your property.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/request">Request a survey</Button>
          <Button
            href="tel:08005550199"
            variant="inverse"
            icon={<Phone className="h-[18px] w-[18px]" />}
          >
            Call Redwren
          </Button>
        </div>
        <div className="mt-8 font-mono text-label-sm uppercase tracking-widest text-on-primary-container">
          Survey desk open Monday—Friday 08:00 to 17:30
        </div>
      </div>
    </section>
  );
}
