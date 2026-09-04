import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Flame,
  Hammer,
  HelpCircle,
  Home,
  PaintRoller,
} from "lucide-react";

export interface DiagnosticItem {
  code: string;
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  /** Matches a `value` in app/data/discipline-options.ts — pre-selects
   * Step 1 of the survey wizard when linked from here. */
  disciplineValue: string;
}

export const diagnosticItems: DiagnosticItem[] = [
  {
    code: "CODE 01",
    icon: Home,
    title: "Roof repair",
    description:
      "Slipped slates, local water ingress, valley failures, and structural timber diagnostics.",
    ctaLabel: "View protocols",
    disciplineValue: "Roof repair",
  },
  {
    code: "CODE 02",
    icon: Hammer,
    title: "Re-roofing",
    description:
      "Complete heritage roof overhauls using reclaimed materials and breathable sarking.",
    ctaLabel: "View protocols",
    disciplineValue: "Re-roofing",
  },
  {
    code: "CODE 03",
    icon: Flame,
    title: "Chimney problems",
    description:
      "Capping, repointing, flaunching repairs, and structural stability assessments.",
    ctaLabel: "View protocols",
    disciplineValue: "Chimney",
  },
  {
    code: "CODE 04",
    icon: Compass,
    title: "Leadwork",
    description:
      "Bossed code 4-8 lead gutters, dormer cheeks, flashings, and cast iron integration.",
    ctaLabel: "View protocols",
    disciplineValue: "Leadwork",
  },
  {
    code: "CODE 05",
    icon: PaintRoller,
    title: "Limework",
    description:
      "Hot-mixed lime mortars, breathable renders, and traditional stone conservation.",
    ctaLabel: "View protocols",
    disciplineValue: "Limework",
  },
  {
    code: "CODE 06",
    icon: HelpCircle,
    title: "I'm not sure what's wrong",
    description:
      "Request an on-site investigative survey with full photographic diagnostic report.",
    ctaLabel: "Request assessment",
    disciplineValue: "Not sure",
  },
];
