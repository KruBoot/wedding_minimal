import {
  CalendarDays,
  Home,
  Images,
  Mail,
  QrCode,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  Icon: LucideIcon;
  match: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", Icon: Home, match: ["home"] },
  { id: "gallery", label: "Gallery", Icon: Images, match: ["gallery"] },
  { id: "invitation", label: "Invitation", Icon: Mail, match: ["invitation"] },
  {
    id: "details",
    label: "Details",
    Icon: CalendarDays,
    match: ["details", "schedule", "location"],
  },
  { id: "qr", label: "QR", Icon: QrCode, match: ["qr", "closing"] },
];

export const SECTION_IDS = [
  "home",
  "gallery",
  "invitation",
  "details",
  "schedule",
  "location",
  "qr",
  "closing",
] as const;
