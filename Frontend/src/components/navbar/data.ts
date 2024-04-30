import {
  Building,
  ReceiptText,
  Home,
  MessageSquare,
  Newspaper,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  { label: "Accueil", to: "/", Icon: Home },
  { label: "Immobiliers", to: "/real-estate", Icon: Building },
  { label: "À propos", to: "/a-propos", Icon: Newspaper },
  { label: "Contact", to: "/contact", Icon: ReceiptText },
  {
    label: "Retour d'information",
    to: "/retour-d'information",
    Icon: MessageSquare,
  },
];
