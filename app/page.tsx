import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { Hero } from "@/app/components/home/Hero";
import { ServiceStrip } from "@/app/components/home/ServiceStrip";
import { TrustStrip } from "@/app/components/home/TrustStrip";
import { DiagnosticIndex } from "@/app/components/home/DiagnosticIndex";
import { EvidenceSection } from "@/app/components/home/EvidenceSection";
import { RepairOrReplace } from "@/app/components/home/RepairOrReplace";
import { ProcessTimeline } from "@/app/components/home/ProcessTimeline";
import { FinalCta } from "@/app/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen w-full bg-surface pt-32">
        <Hero />
        <ServiceStrip />
        <TrustStrip />
        <DiagnosticIndex />
        <EvidenceSection />
        <RepairOrReplace />
        <ProcessTimeline />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
