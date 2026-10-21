import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { heroLeadFormSchema } from "@/lib/hero-lead-schema";
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

  const parsed = heroLeadFormSchema.safeParse(body);
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
      ? `Medical Billers <${gmailUser}>`
      : "Medical Billers <onboarding@resend.dev>");

  const hasResend = Boolean(resendApiKey);
  const hasGmail = Boolean(gmailUser && gmailAppPassword);

  if (!hasResend && !hasGmail) {
    console.error(
      "Hero lead form email is not configured. Set RESEND_API_KEY or GMAIL_USER + GMAIL_APP_PASSWORD.",
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

  const subject = `New quote request: ${data.specialty} — ${data.fullName}`;

  const text = [
    "New quote request from www.medicalbillerstexas.com",
    "",
    `Full name: ${data.fullName}`,
    `Specialty: ${data.specialty}`,
    `Provider NPI: ${data.npi || "—"}`,
    `Business email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Preferred date: ${data.preferredDate || "—"}`,
    `EHR in use: ${data.ehr || "—"}`,
    `Practice name & address: ${data.practiceAddress}`,
  ].join("\n");

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
      <p style="margin: 0 0 16px;">New quote request from <strong>www.medicalbillerstexas.com</strong></p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 0; color: #555;">Full name</td><td style="padding: 6px 0;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Specialty</td><td style="padding: 6px 0;">${escapeHtml(data.specialty)}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Provider NPI</td><td style="padding: 6px 0;">${escapeHtml(data.npi || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Business email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Phone</td><td style="padding: 6px 0;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Preferred date</td><td style="padding: 6px 0;">${escapeHtml(data.preferredDate || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">EHR in use</td><td style="padding: 6px 0;">${escapeHtml(data.ehr || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Practice name &amp; address</td><td style="padding: 6px 0;">${escapeHtml(data.practiceAddress)}</td></tr>
      </table>
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
    console.error("Hero lead form email send error:", err);
    return NextResponse.json(
      {
        error:
          "Unable to send your request right now. Please try again or email us directly at " +
          siteContact.email.label +
          ".",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
