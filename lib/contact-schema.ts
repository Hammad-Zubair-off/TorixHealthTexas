import { z } from "zod";

/** Shared contact form payload validation (client + API). */
export const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  organization: z.string().trim().max(160).optional().default(""),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().min(1, "Select a service").max(80),
  message: z.string().trim().min(1, "Message is required").max(5000),
  /** Honeypot — ignored when filled; API pretends success. */
  website: z.string().max(200).optional().default(""),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
