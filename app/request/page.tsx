import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { RequestPortal } from "@/app/components/request/RequestPortal";

export const metadata: Metadata = {
  title: "Request a Survey — Redwren Roofing & Limework",
  description:
    "Start a structured heritage roofing and limework survey request.",
};

interface RequestPageProps {
  searchParams: Promise<{ discipline?: string }>;
}

export default async function RequestPage({ searchParams }: RequestPageProps) {
  const { discipline } = await searchParams;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen w-full bg-surface px-margin-page pt-32">
        <RequestPortal initialDiscipline={discipline} />
      </main>
      <SiteFooter />
    </>
  );
}
