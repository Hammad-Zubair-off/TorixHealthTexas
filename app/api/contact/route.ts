import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";
import { siteContact } from "@/lib/site-contact";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatServiceLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

type MailPayload = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

async function sendWithResend(apiKey: string, mail: MailPayload) {
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: mail.from,
    to: [mail.to],
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
  if (error) {
    throw new Error(
      typeof error === "object" && error && "message" in error
        ? String((error as { message: string }).message)
        : "Resend failed to send email",
    );
  }
}

async function sendWithGmail(
  user: string,
  appPassword: string,
  mail: MailPayload,
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: appPassword.replace(/\s+/g, ""),
    },
  });

  await transporter.sendMail({
    from: mail.from,
    to: mail.to,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success so bots don't retry.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.trim();

  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || siteContact.email.label;

  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    (gmailUser
      ? `Torix Solutions <${gmailUser}>`
      : "Torix Solutions <onboarding@resend.dev>");

  const hasResend = Boolean(resendApiKey);
  const hasGmail = Boolean(gmailUser && gmailAppPassword);

  if (!hasResend && !hasGmail) {
    console.error(
      "Contact email is not configured. Set RESEND_API_KEY or GMAIL_USER + GMAIL_APP_PASSWORD.",
    );
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please email us directly at " +
          siteContact.email.label +
          ".",
      },
      { status: 503 },
    );
  }

  const serviceLabel = formatServiceLabel(data.service);
  const subject = `Contact form: ${serviceLabel} — ${data.fullName}`;

  const text = [
    "New contact form submission from www.torixhealth.com",
    "",
    `Full name: ${data.fullName}`,
    `Organization: ${data.organization || "—"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Service: ${serviceLabel}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
      <p style="margin: 0 0 16px;">New contact form submission from <strong>www.torixhealth.com</strong></p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 0; color: #555;">Full name</td><td style="padding: 6px 0;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Organization</td><td style="padding: 6px 0;">${escapeHtml(data.organization || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Phone</td><td style="padding: 6px 0;">${escapeHtml(data.phone || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Service</td><td style="padding: 6px 0;">${escapeHtml(serviceLabel)}</td></tr>
      </table>
      <p style="margin: 20px 0 8px; color: #555;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const mail: MailPayload = {
    from: fromEmail,
    to: toEmail,
    replyTo: data.email,
    subject,
    text,
    html,
  };

  try {
    if (hasResend && resendApiKey) {
      await sendWithResend(resendApiKey, mail);
    } else if (hasGmail && gmailUser && gmailAppPassword) {
      await sendWithGmail(gmailUser, gmailAppPassword, mail);
    }
  } catch (err) {
    console.error("Contact email send error:", err);
    return NextResponse.json(
      {
        error:
          "Unable to send your message right now. Please try again or email us directly at " +
          siteContact.email.label +
          ".",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
