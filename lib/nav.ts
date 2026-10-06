export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children: NavLink[];
};

/** Exact nav structure — Healthcare SEO and Resources/Blog intentionally excluded for now */
export const mainNav: Array<NavLink | NavGroup> = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Medical Billing", href: "/services/medical-billing" },
      { label: "Medical Billing Audit", href: "/services/medical-audit" },
      { label: "Medical Coding", href: "/services/medical-coding" },
      { label: "Accounts Receivable Operations", href: "/services/ar-follow-up" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Credentialing and Contract", href: "/services/credentialing" },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "Medical Billing Software",
        href: "/solutions/medical-billing-software",
      },
      { label: "Healthcare Platform", href: "/solutions/healthcare-platform" },
      { label: "HIPAA Compliance", href: "/solutions/hipaa-compliant-software" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Medical Billing", href: "/services/medical-billing" },
    { label: "Medical Billing Audit", href: "/services/medical-audit" },
    { label: "Medical Coding", href: "/services/medical-coding" },
    { label: "Accounts Receivable Operations", href: "/services/ar-follow-up" },
    { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
    { label: "Credentialing and Contract", href: "/services/credentialing" },
  ],
  solutions: [
    { label: "Medical Billing Software", href: "/solutions/medical-billing-software" },
    { label: "Healthcare Platform", href: "/solutions/healthcare-platform" },
    { label: "HIPAA-Compliant Software", href: "/solutions/hipaa-compliant-software" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
  contact: [{ label: "Contact Us", href: "/contact" }],
};
