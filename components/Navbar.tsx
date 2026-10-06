"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { mainNav, type NavGroup, type NavLink } from "@/lib/nav";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

function isGroup(item: NavLink | NavGroup): item is NavGroup {
  return "children" in item;
}

function DesktopDropdown({ item }: { item: NavGroup }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md bg-transparent px-2 py-1.5 text-[14px] font-medium text-text transition-colors duration-150 hover:bg-accent-100 hover:text-accent-700"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Icon
          name="chevronDown"
          size={14}
          className={cn(
            "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full z-50 min-w-[240px] origin-top animate-[faqIn_180ms_ease-out] rounded-md border border-accent-300 bg-band-paper py-2 shadow-md"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2.5 text-[14px] text-text no-underline transition-colors duration-150 hover:bg-accent-100 hover:text-accent-700"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  const line =
    "absolute left-1/2 top-1/2 block h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={cn(
          line,
          open ? "translate-y-0 rotate-45" : "-translate-y-[6px] rotate-0",
        )}
      />
      <span
        className={cn(
          line,
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
        )}
      />
      <span
        className={cn(
          line,
          open ? "translate-y-0 -rotate-45" : "translate-y-[6px] rotate-0",
        )}
      />
    </span>
  );
}

function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Torix Health"
      className={cn(
        "group mr-auto inline-flex items-center gap-3 no-underline",
        className,
      )}
    >
      <Image
        src="/brand/torix-logo-mark.png"
        alt=""
        width={365}
        height={431}
        className="h-[44px] w-auto shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sm:h-[48px]"
        priority
      />
      <span className="flex min-w-[7.5rem] flex-col items-center justify-center text-center leading-none">
        <span className="font-[family-name:var(--font-heading)] text-[18px] font-bold tracking-[0.12em] text-accent-700 sm:text-[19px]">
          TORIX
        </span>
        <span className="mt-1.5 flex w-full items-center gap-2">
          <span aria-hidden="true" className="h-px flex-1 bg-accent-400/70" />
          <span className="font-[family-name:var(--font-heading)] text-[9px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-[10px]">
            Health
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-accent-400/70" />
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileOpen) setOpenGroup(null);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-[color-mix(in_srgb,var(--band-paper)_90%,transparent)] backdrop-blur-[12px]">
      <div className="border-b border-divider bg-band-paper/80">
        <Container className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 py-2 text-[12px] text-neutral-600">
          <a
            href={siteContact.phone.href}
            className="inline-flex items-center gap-1.5 no-underline transition-colors hover:text-accent-700"
          >
            <Icon name="headphones" size={14} className="text-accent" />
            <span>{siteContact.phone.label}</span>
          </a>
          <a
            href={siteContact.email.href}
            className="inline-flex items-center gap-1.5 no-underline transition-colors hover:text-accent-700"
          >
            <Icon name="fileText" size={14} className="text-accent" />
            <span className="break-all">{siteContact.email.label}</span>
          </a>
        </Container>
      </div>
      <Container
        as="nav"
        className="flex flex-wrap items-center gap-4 py-3.5"
        aria-label="Primary"
      >
        <BrandLogo />

        <div className="hidden items-center gap-0.5 lg:flex">
          {mainNav.map((item) =>
            isGroup(item) ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-2.5 py-1.5 text-[14px] font-medium no-underline transition-colors duration-150",
                  pathname === item.href
                    ? "text-accent-700 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[2px] after:rounded-full after:bg-accent"
                    : "text-text hover:bg-accent-100 hover:text-accent-700",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" arrow>
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border bg-band-paper text-text lg:hidden",
            "transition-[border-color,background-color,color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "hover:border-accent-300 hover:bg-accent-100 hover:text-accent-700 active:scale-95",
            mobileOpen
              ? "border-accent bg-accent-100 text-accent-700 shadow-sm"
              : "border-divider",
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-divider bg-band-paper transition-[grid-template-rows,border-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          mobileOpen
            ? "grid-rows-[1fr] border-t opacity-100"
            : "grid-rows-[0fr] border-t border-transparent opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) =>
              isGroup(item) ? (
                <div key={item.label} className="border-b border-divider py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-transparent py-3 text-left text-[15px] font-medium text-text transition-colors duration-150 hover:text-accent-700"
                    aria-expanded={openGroup === item.label}
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      size={16}
                      className={cn(
                        "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        openGroup === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      openGroup === item.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="flex flex-col gap-1 pb-3 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-md py-2 pl-1 text-[14px] text-neutral-700 no-underline transition-colors duration-150 hover:bg-accent-100 hover:text-accent-700"
                            tabIndex={openGroup === item.label ? 0 : -1}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b border-divider py-3 text-[15px] font-medium no-underline transition-colors duration-150 hover:text-accent-700",
                    pathname === item.href ? "text-accent-700" : "text-text",
                  )}
                  tabIndex={mobileOpen ? 0 : -1}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-3">
              <Button href="/contact" variant="primary" arrow className="w-full">
                Book a Consultation
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
