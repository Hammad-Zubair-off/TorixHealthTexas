"use client";

import { useId, useRef, useState } from "react";
import type { ZodError } from "zod";
import { Icon } from "@/components/icons";
import {
  contactFormSchema,
  type ContactFormPayload,
} from "@/lib/contact-schema";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

export type ContactServiceOption = {
  value: string;
  label: string;
};

type ContactFormProps = {
  serviceOptions: ContactServiceOption[];
  submitLabel?: string;
};

type FieldName =
  | "fullName"
  | "organization"
  | "email"
  | "phone"
  | "service"
  | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

type ApiErrorBody = {
  error?: string;
  issues?: Partial<Record<string, string[] | undefined>>;
};

const fieldClass =
  "w-full rounded-md border bg-band-paper px-3.5 py-2.5 text-[14px] text-text outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-neutral-500 focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_15%,transparent)]";

const labelClass = "mb-1.5 block text-[13px] font-medium text-text";

function firstIssueMessage(
  issues: ApiErrorBody["issues"],
): FieldErrors {
  const out: FieldErrors = {};
  if (!issues) return out;
  for (const key of Object.keys(issues) as FieldName[]) {
    const messages = issues[key];
    if (messages?.[0]) out[key] = messages[0];
  }
  return out;
}

function zodFieldErrors(error: ZodError<ContactFormPayload>): FieldErrors {
  const flat = error.flatten().fieldErrors;
  const out: FieldErrors = {};
  for (const key of Object.keys(flat) as FieldName[]) {
    const messages = flat[key];
    if (messages?.[0]) out[key] = messages[0];
  }
  return out;
}

export function ContactForm({
  serviceOptions,
  submitLabel = "Send Message",
}: ContactFormProps) {
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

  function focusFirstInvalid(errors: FieldErrors) {
    const order: FieldName[] = [
      "fullName",
      "organization",
      "email",
      "phone",
      "service",
      "message",
    ];
    const first = order.find((key) => errors[key]);
    if (!first || !formRef.current) return;
    const el = formRef.current.elements.namedItem(first);
    if (el && "focus" in el && typeof el.focus === "function") {
      el.focus();
    }
  }

  function inputClass(name: FieldName) {
    return cn(
      fieldClass,
      fieldErrors[name]
        ? "border-red-400 focus:border-red-500"
        : "border-divider focus:border-accent",
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
      organization: String(formData.get("organization") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      const errors = zodFieldErrors(parsed.error);
      setFieldErrors(errors);
      setError("Please check the highlighted fields and try again.");
      setPending(false);
      focusFirstInvalid(errors);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
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
            data?.error ??
              "Please check the highlighted fields and try again.",
          );
          focusFirstInvalid(apiFieldErrors);
          return;
        }

        setError(
          data?.error ??
            `Unable to send your message right now. Please try again or email us at ${siteContact.email.label}.`,
        );
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        `Unable to send your message right now. Please check your connection and try again, or email us at ${siteContact.email.label}.`,
      );
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-accent-300 bg-accent-100/70 p-6"
        role="status"
      >
        <p className="mb-2 font-[family-name:var(--font-heading)] text-[18px] text-text">
          Message received.
        </p>
        <p className="text-[14px] leading-[1.55] text-neutral-700">
          Thanks for reaching out. A member of our team will get back to you as
          soon as possible during business hours.
        </p>
        <button
          type="button"
          className="mt-4 text-[13px] font-semibold text-accent-700 underline-offset-2 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      ref={formRef}
      onSubmit={onSubmit}
      className="relative flex flex-col gap-4"
      noValidate
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
      <div>
        <label className={labelClass} htmlFor={`${formId}-name`}>
          Full Name
        </label>
        <input
          id={`${formId}-name`}
          name="fullName"
          type="text"
          required
          autoComplete="name"
          className={inputClass("fullName")}
          placeholder="Your name"
          aria-invalid={Boolean(fieldErrors.fullName)}
          aria-describedby={
            fieldErrors.fullName ? `${formId}-name-error` : undefined
          }
          onChange={() => clearFieldError("fullName")}
        />
        {fieldErrors.fullName ? (
          <p
            id={`${formId}-name-error`}
            className="mt-1.5 text-[12px] text-red-700"
            role="alert"
          >
            {fieldErrors.fullName}
          </p>
        ) : null}
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-org`}>
          Organization / Practice Name
        </label>
        <input
          id={`${formId}-org`}
          name="organization"
          type="text"
          autoComplete="organization"
          className={inputClass("organization")}
          placeholder="Practice or organization"
          aria-invalid={Boolean(fieldErrors.organization)}
          aria-describedby={
            fieldErrors.organization ? `${formId}-org-error` : undefined
          }
          onChange={() => clearFieldError("organization")}
        />
        {fieldErrors.organization ? (
          <p
            id={`${formId}-org-error`}
            className="mt-1.5 text-[12px] text-red-700"
            role="alert"
          >
            {fieldErrors.organization}
          </p>
        ) : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            Email Address
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass("email")}
            placeholder="you@practice.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? `${formId}-email-error` : undefined
            }
            onChange={() => clearFieldError("email")}
          />
          {fieldErrors.email ? (
            <p
              id={`${formId}-email-error`}
              className="mt-1.5 text-[12px] text-red-700"
              role="alert"
            >
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone Number
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass("phone")}
            placeholder="(555) 000-0000"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={
              fieldErrors.phone ? `${formId}-phone-error` : undefined
            }
            onChange={() => clearFieldError("phone")}
          />
          {fieldErrors.phone ? (
            <p
              id={`${formId}-phone-error`}
              className="mt-1.5 text-[12px] text-red-700"
              role="alert"
            >
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-service`}>
          Service of Interest
        </label>
        <select
          id={`${formId}-service`}
          name="service"
          required
          className={cn(inputClass("service"), "bg-band-paper")}
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.service)}
          aria-describedby={
            fieldErrors.service ? `${formId}-service-error` : undefined
          }
          onChange={() => clearFieldError("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {fieldErrors.service ? (
          <p
            id={`${formId}-service-error`}
            className="mt-1.5 text-[12px] text-red-700"
            role="alert"
          >
            {fieldErrors.service}
          </p>
        ) : null}
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-message`}>
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          className={cn(inputClass("message"), "resize-y min-h-[120px]")}
          placeholder="Tell us what you need help with"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? `${formId}-message-error` : undefined
          }
          onChange={() => clearFieldError("message")}
        />
        {fieldErrors.message ? (
          <p
            id={`${formId}-message-error`}
            className="mt-1.5 text-[12px] text-red-700"
            role="alert"
          >
            {fieldErrors.message}
          </p>
        ) : null}
      </div>
      {error ? (
        <div
          className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] leading-[1.5] text-red-800"
          role="alert"
        >
          <p>{error}</p>
          <p className="mt-1.5">
            Or email us directly at{" "}
            <a
              href={siteContact.email.href}
              className="font-semibold underline underline-offset-2"
            >
              {siteContact.email.label}
            </a>
            .
          </p>
        </div>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent bg-accent px-7 py-3.5 text-[15px] font-semibold text-white",
          "shadow-[var(--shadow-accent)] transition-[transform,box-shadow,background-color,opacity] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-[var(--shadow-accent-lg)]",
          "active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70",
        )}
      >
        {pending ? "Sending…" : submitLabel}
        {!pending ? <Icon name="arrowRight" size={16} /> : null}
      </button>
    </form>
  );
}
