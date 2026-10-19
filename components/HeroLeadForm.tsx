"use client";

import { useId, useRef, useState } from "react";
import type { ZodError } from "zod";
import { Icon } from "@/components/icons";
import {
  heroLeadFormSchema,
  type HeroLeadFormPayload,
} from "@/lib/hero-lead-schema";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

type HeroLeadFormProps = {
  specialtyOptions: string[];
};

type FieldName =
  | "fullName"
  | "specialty"
  | "npi"
  | "email"
  | "phone"
  | "preferredDate"
  | "ehr"
  | "practiceAddress"
  | "consent";

type FieldErrors = Partial<Record<FieldName, string>>;

type ApiErrorBody = {
  error?: string;
  issues?: Partial<Record<string, string[] | undefined>>;
};

const fieldClass =
  "w-full rounded-md border border-divider bg-band-paper px-3.5 py-2.5 text-[13px] text-text outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-neutral-500 focus:border-accent focus:shadow-[0_0_0_3px_rgba(10,80,208,0.15)]";

function firstIssueMessage(issues: ApiErrorBody["issues"]): FieldErrors {
  const out: FieldErrors = {};
  if (!issues) return out;
  for (const key of Object.keys(issues) as FieldName[]) {
    const messages = issues[key];
    if (messages?.[0]) out[key] = messages[0];
  }
  return out;
}

function zodFieldErrors(error: ZodError<HeroLeadFormPayload>): FieldErrors {
  const flat = error.flatten().fieldErrors;
  const out: FieldErrors = {};
  for (const key of Object.keys(flat) as FieldName[]) {
    const messages = flat[key as keyof typeof flat];
    if (messages?.[0]) out[key] = messages[0];
  }
  return out;
}

/** Lead-capture card that replaces the hero photo — fields match the sales-approved reference layout. */
export function HeroLeadForm({ specialtyOptions }: HeroLeadFormProps) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(name: FieldName) {
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function inputClass(name: FieldName) {
    return cn(
      fieldClass,
      fieldErrors[name] && "border-red-400 focus:border-red-500",
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      specialty: String(formData.get("specialty") ?? ""),
      npi: String(formData.get("npi") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      ehr: String(formData.get("ehr") ?? ""),
      practiceAddress: String(formData.get("practiceAddress") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    const parsed = heroLeadFormSchema.safeParse(payload);
    if (!parsed.success) {
      const errors = zodFieldErrors(parsed.error);
      setFieldErrors(errors);
      setError("Please check the highlighted fields and try again.");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/hero-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await res.json().catch(() => null)) as ApiErrorBody | null;

      if (!res.ok) {
        const apiFieldErrors = firstIssueMessage(data?.issues);
        if (Object.keys(apiFieldErrors).length > 0) {
          setFieldErrors(apiFieldErrors);
          setError(
            data?.error ?? "Please check the highlighted fields and try again.",
          );
          return;
        }

        setError(
          data?.error ??
            `Unable to send your request right now. Please try again or email us at ${siteContact.email.label}.`,
        );
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        `Unable to send your request right now. Please check your connection and try again, or email us at ${siteContact.email.label}.`,
      );
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-accent-300 bg-band-paper p-7 shadow-lg sm:p-8"
        role="status"
      >
        <p className="mb-2 font-[family-name:var(--font-heading)] text-[19px] text-text">
          Request received.
        </p>
        <p className="text-[14px] leading-[1.55] text-neutral-700">
          Thanks for reaching out. A member of our team will get back to you
          shortly during business hours.
        </p>
        <button
          type="button"
          className="mt-4 text-[13px] font-semibold text-accent-700 underline-offset-2 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="relative flex flex-col gap-3.5 rounded-2xl bg-band-paper p-6 shadow-lg sm:p-7"
    >
      {/* Honeypot — visually hidden; bots that fill it are ignored. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        style={{ left: "-9999px", top: "auto" }}
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-3">
        <input
          name="fullName"
          type="text"
          required
          autoComplete="name"
          placeholder="Full Name"
          className={inputClass("fullName")}
          aria-invalid={Boolean(fieldErrors.fullName)}
          onChange={() => clearFieldError("fullName")}
        />
        <select
          name="specialty"
          required
          defaultValue=""
          className={cn(inputClass("specialty"), "bg-band-paper")}
          aria-invalid={Boolean(fieldErrors.specialty)}
          onChange={() => clearFieldError("specialty")}
        >
          <option value="" disabled>
            - Type Specialty -
          </option>
          {specialtyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          name="npi"
          type="text"
          inputMode="numeric"
          placeholder="Provider NPI's"
          className={inputClass("npi")}
          aria-invalid={Boolean(fieldErrors.npi)}
          onChange={() => clearFieldError("npi")}
        />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-3">
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Business Email"
          className={inputClass("email")}
          aria-invalid={Boolean(fieldErrors.email)}
          onChange={() => clearFieldError("email")}
        />
        <div
          className={cn(
            "flex items-center gap-1.5 rounded-md border border-divider bg-band-paper pl-3 focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgba(10,80,208,0.15)]",
            fieldErrors.phone && "border-red-400",
          )}
        >
          <span aria-hidden className="shrink-0 text-[14px] leading-none">
            🇺🇸
          </span>
          <span className="shrink-0 text-[13px] text-neutral-500">+1</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone"
            className="w-full bg-transparent py-2.5 pr-3.5 text-[13px] text-text outline-none placeholder:text-neutral-500"
            aria-invalid={Boolean(fieldErrors.phone)}
            onChange={() => clearFieldError("phone")}
          />
        </div>
        <input
          name="preferredDate"
          type="date"
          placeholder="Date"
          className={cn(inputClass("preferredDate"), "text-neutral-600")}
          aria-invalid={Boolean(fieldErrors.preferredDate)}
          onChange={() => clearFieldError("preferredDate")}
        />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <input
          name="ehr"
          type="text"
          placeholder="In Use EHR"
          className={inputClass("ehr")}
          aria-invalid={Boolean(fieldErrors.ehr)}
          onChange={() => clearFieldError("ehr")}
        />
        <input
          name="practiceAddress"
          type="text"
          required
          placeholder="Practice Name & Address"
          className={inputClass("practiceAddress")}
          aria-invalid={Boolean(fieldErrors.practiceAddress)}
          onChange={() => clearFieldError("practiceAddress")}
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-neutral-700">
          <span className="mb-0.5 shrink-0 text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700">
            Consent *
          </span>
        </label>
        <label className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-neutral-700">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 accent-accent"
            aria-invalid={Boolean(fieldErrors.consent)}
            onChange={() => clearFieldError("consent")}
          />
          <span>
            I acknowledge that Torix Solutions may use my information as
            described in its Privacy Policy &amp; agree to receive
            promotional content via email &amp; text messages.
          </span>
        </label>
        {fieldErrors.consent ? (
          <p className="mt-1.5 text-[12px] text-red-700" role="alert">
            {fieldErrors.consent}
          </p>
        ) : null}
      </div>

      {error ? (
        <div
          className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-[12px] leading-[1.5] text-red-800"
          role="alert"
        >
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 self-start rounded-md border border-transparent bg-accent px-6 py-3 text-[14px] font-semibold text-white",
          "shadow-[0_8px_24px_rgba(10,80,208,0.28)] transition-[transform,box-shadow,background-color,opacity] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-[0_14px_36px_rgba(10,80,208,0.34)]",
          "active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70",
        )}
      >
        {pending ? "Submitting…" : "Submit Form"}
        {!pending ? <Icon name="arrowRight" size={16} /> : null}
      </button>
    </form>
  );
}
