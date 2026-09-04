import {
  Compass,
  Flame,
  HelpCircle,
  Home,
  Layers,
  PaintRoller,
  type LucideIcon,
} from "lucide-react";

export interface DisciplineOption {
  value: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const disciplineOptions: DisciplineOption[] = [
  {
    value: "Roof repair",
    icon: Home,
    title: "Roof Repair",
    description: "Slipped slates, local water ingress, valley gutter maintenance.",
  },
  {
    value: "Re-roofing",
    icon: Compass,
    title: "Re-roofing",
    description:
      "Full structural stripping, breathable membranes, battening & re-slate.",
  },
  {
    value: "Chimney",
    icon: Flame,
    title: "Chimney",
    description:
      "Stack repointing, flaunching repairs, cowl fitting & flaunching.",
  },
  {
    value: "Leadwork",
    icon: Layers,
    title: "Leadwork",
    description:
      "Code 4-8 lead flashing, bossed dormer cheeks, flat roof bays.",
  },
  {
    value: "Limework",
    icon: PaintRoller,
    title: "Limework",
    description:
      "Hot-mixed lime mortars, breathable renders, stone conservation.",
  },
  {
    value: "Not sure",
    icon: HelpCircle,
    title: "Not Sure",
    description: "Comprehensive general survey & diagnostic building assessment.",
  },
];
