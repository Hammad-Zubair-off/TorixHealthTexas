import Link from "next/link";
import { Container } from "@/components/Container";
import { footerNav } from "@/lib/nav";
import { siteContact } from "@/lib/site-contact";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-band-deep text-band-deep-text">
      <Container className="grid gap-10 py-[clamp(56px,6.5vw,92px)] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-3 text-[19px] font-semibold tracking-[-0.02em]">TORIX</p>
          <p className="mb-4 max-w-[28ch] text-[13px] text-band-deep-muted">
            Torix Solutions runs medical billing, coding, credentialing and revenue
            cycle work for independent practices.
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[13px]">
            <li>
              <a
                href={siteContact.phone.href}
                className="text-band-deep-text no-underline hover:text-accent-300"
              >
                {siteContact.phone.label}
              </a>
            </li>
            <li>
              <a
                href={siteContact.email.href}
                className="break-all text-band-deep-text no-underline hover:text-accent-300"
              >
                {siteContact.email.label}
              </a>
            </li>
          </ul>
        </div>

        <FooterCol title="Services" links={footerNav.services} />
        <FooterCol title="Solutions" links={footerNav.solutions} />
        <div className="grid gap-8">
          <FooterCol title="Company" links={footerNav.company} />
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-accent-300">
              Contact
            </p>
            <ul className="flex list-none flex-col gap-2 p-0">
              {footerNav.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-band-deep-text no-underline hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteContact.phone.href}
                  className="text-[13px] text-band-deep-text no-underline hover:text-accent-300"
                >
                  {siteContact.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={siteContact.email.href}
                  className="break-all text-[13px] text-band-deep-text no-underline hover:text-accent-300"
                >
                  {siteContact.email.label}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-[12px] text-band-deep-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Torix Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="no-underline transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/about" className="no-underline transition-colors hover:text-white">
            Terms of Use
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-accent-300">
        {title}
      </p>
      <ul className="flex list-none flex-col gap-2 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] text-band-deep-text no-underline hover:text-accent-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
