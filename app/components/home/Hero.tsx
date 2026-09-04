import { Ruler } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

export function Hero() {
  return (
    <section className="relative mb-16 w-full overflow-hidden px-gutter-lg py-28 text-on-primary lg:py-36">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjj2HPVVp1Ws0pJRDKe9GaFUXYEUDPHESnKXb5gn2C_4e4wq5RZSNkW1IS-EPlj14oaXA5etSBFg44nbzta3FR7Pjr-9o5ZDr752Nz_58dzKMl_vU3RWGzNEe3No-b44Do2cksVFNiZx0XUz4ivH3w_Ex6qtKKDac6lx9-nfCKiL5uOAyBtbAxwRo0qsYBnuzMqrHEQhItY0czS-muHiEbHVLkVW8M0NoDGXt77BtbnCpDjayL_HQlUg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-container/90" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-primary-container px-4 py-1.5 font-sans text-label-sm uppercase tracking-widest text-primary-fixed-dim">
          <Ruler className="h-3.5 w-3.5" />
          <span>Structural survey &amp; heritage restoration</span>
        </div>
        <h1 className="mb-6 font-serif text-4xl leading-none font-semibold tracking-tight text-on-primary md:text-5xl lg:text-6xl">
          Older buildings.
          <br />
          Clear advice.
          <br />
          Work made to last.
        </h1>
        <p className="mb-10 max-w-2xl font-sans text-lg text-primary-fixed-dim md:text-xl">
          Roofing repairs, re-roofing and traditional restoration for
          properties that need careful attention.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/request">Request a survey</Button>
          <Button href="/#evidence" variant="inverse">
            View completed work
          </Button>
        </div>
      </div>
    </section>
  );
}
