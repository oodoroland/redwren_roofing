import Link from "next/link";
import { Siren, User } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

const navLinks = [
  { label: "Roof Repairs", href: "/#diagnostic-index" },
  { label: "Re-roofing", href: "/#diagnostic-index" },
  { label: "Leadwork & Chimneys", href: "/#diagnostic-index" },
  { label: "Limework", href: "/#diagnostic-index" },
  { label: "Projects", href: "/#evidence" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="flex items-center justify-between bg-primary-container px-margin-page py-1 text-label-sm text-on-primary-container">
        <span className="tracking-wider">
          SURVEY REF: RW-0894-X // HERITAGE DIVISION
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Siren className="h-3.5 w-3.5" />
            EMERGENCY LINE: 0800 555 0199
          </span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <User className="h-3.5 w-3.5 text-on-primary" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-margin-page">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-headline-md font-bold tracking-tight text-primary">
            REDWREN
          </span>
          <span className="hidden text-label-sm uppercase tracking-widest text-on-surface-variant sm:inline-block">
            Roofing &amp; Limework
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/request" size="md">
          Request a survey
        </Button>
      </div>
    </header>
  );
}
