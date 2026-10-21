import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site";

/** Indexable pages only — noindex drafts (/privacy, /terms, /resources/blog) are left out. */
const indexableRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: services.medicalBilling.href, changeFrequency: "monthly", priority: 0.9 },
  { path: services.rcm.href, changeFrequency: "monthly", priority: 0.9 },
  { path: services.medicalCoding.href, changeFrequency: "monthly", priority: 0.85 },
  { path: services.arFollowUp.href, changeFrequency: "monthly", priority: 0.85 },
  { path: services.credentialing.href, changeFrequency: "monthly", priority: 0.85 },
  { path: services.medicalAudit.href, changeFrequency: "monthly", priority: 0.85 },
  { path: services.billingSoftware.href, changeFrequency: "monthly", priority: 0.7 },
  { path: services.hipaaSoftware.href, changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexableRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
