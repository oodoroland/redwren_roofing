import { Calendar, Headset, Siren, Zap, type LucideIcon } from "lucide-react";

export interface UrgencyOption {
  value: string;
  icon: LucideIcon;
  iconClassName: string;
  badge: { label: string; className: string };
  title: string;
  description: string;
  summaryLabel: string;
}

export const urgencyOptions: UrgencyOption[] = [
  {
    value: "Emergency",
    icon: Siren,
    iconClassName: "text-red-700",
    badge: { label: "24HR RESPONSE", className: "bg-red-100 text-red-800" },
    title: "Emergency Incident",
    description:
      "Active water ingress, severe storm damage, or structural hazard requiring immediate tarping or stabilization.",
    summaryLabel: "Emergency (24hr response)",
  },
  {
    value: "Soon",
    icon: Zap,
    iconClassName: "text-primary",
    badge: {
      label: "3-5 DAYS",
      className: "bg-surface-container text-on-surface-variant",
    },
    title: "Soon",
    description:
      "Persistent damp spots, missing slates, or chimney deterioration needing prompt professional attention.",
    summaryLabel: "Soon (3-5 days)",
  },
  {
    value: "Planned",
    icon: Calendar,
    iconClassName: "text-primary",
    badge: {
      label: "FLEXIBLE",
      className: "bg-surface-container text-on-surface-variant",
    },
    title: "Planned Project",
    description:
      "Full re-roofing, conservation lime pointing, or scheduled architectural restoration work.",
    summaryLabel: "Planned (flexible)",
  },
  {
    value: "Advice",
    icon: Headset,
    iconClassName: "text-primary",
    badge: {
      label: "CONSULTATION",
      className: "bg-surface-container text-on-surface-variant",
    },
    title: "Expert Advice",
    description:
      "Pre-purchase building inspection, specification review, or general heritage conservation advice.",
    summaryLabel: "Advice (consultation)",
  },
];
