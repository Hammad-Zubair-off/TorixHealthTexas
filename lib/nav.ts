import { services } from "@/lib/site";

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children: NavLink[];
};

const serviceLinks: NavLink[] = [
  services.medicalBilling,
  services.rcm,
  services.medicalCoding,
  services.arFollowUp,
  services.credentialing,
  services.medicalAudit,
];

/** Software is only offered free alongside the billing service. */
const softwareLinks: NavLink[] = [services.billingSoftware, services.hipaaSoftware];

export const mainNav: Array<NavLink | NavGroup> = [
  { label: "Home", href: "/" },
  { label: "Services", children: serviceLinks },
  { label: "Software", children: softwareLinks },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  services: serviceLinks,
  solutions: softwareLinks,
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
  contact: [{ label: "Contact Us", href: "/contact" }],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};
