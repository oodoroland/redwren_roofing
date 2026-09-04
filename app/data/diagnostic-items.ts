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
  image: { src: string; alt: string };
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
    image: {
      src: "https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1",
      alt: "Roofer repairing shingles on a residential roof",
    },
  },
  {
    code: "CODE 02",
    icon: Hammer,
    title: "Re-roofing",
    description:
      "Complete heritage roof overhauls using reclaimed materials and breathable sarking.",
    ctaLabel: "View protocols",
    disciplineValue: "Re-roofing",
    image: {
      src: "https://images.unsplash.com/photo-1634750009079-6bf7bede038b",
      alt: "Roofers stripping a roof down to the sarking during a full re-roof",
    },
  },
  {
    code: "CODE 03",
    icon: Flame,
    title: "Chimney problems",
    description:
      "Capping, repointing, flaunching repairs, and structural stability assessments.",
    ctaLabel: "View protocols",
    disciplineValue: "Chimney",
    image: {
      src: "https://images.unsplash.com/photo-1556009762-36a907690bda",
      alt: "Brick chimney stack rising from a tiled roof",
    },
  },
  {
    code: "CODE 04",
    icon: Compass,
    title: "Leadwork",
    description:
      "Bossed code 4-8 lead gutters, dormer cheeks, flashings, and cast iron integration.",
    ctaLabel: "View protocols",
    disciplineValue: "Leadwork",
    image: {
      src: "https://images.unsplash.com/photo-1779941674155-429b26d214c4",
      alt: "Standing seam metal roof with a dormer window and flashing detail",
    },
  },
  {
    code: "CODE 05",
    icon: PaintRoller,
    title: "Limework",
    description:
      "Hot-mixed lime mortars, breathable renders, and traditional stone conservation.",
    ctaLabel: "View protocols",
    disciplineValue: "Limework",
    image: {
      src: "https://images.unsplash.com/photo-1566474949309-1ecedbf7382e",
      alt: "Traditional rubblestone wall with visible lime mortar pointing",
    },
  },
  {
    code: "CODE 06",
    icon: HelpCircle,
    title: "I'm not sure what's wrong",
    description:
      "Request an on-site investigative survey with full photographic diagnostic report.",
    ctaLabel: "Request assessment",
    disciplineValue: "Not sure",
    image: {
      src: "https://images.unsplash.com/photo-1694521787193-9293daeddbaa",
      alt: "Two surveyors in hi-vis vests inspecting a wall",
    },
  },
];
