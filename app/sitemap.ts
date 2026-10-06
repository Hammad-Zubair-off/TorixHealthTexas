import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const indexableRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services/medical-billing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/revenue-cycle-management", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/medical-coding", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/medical-audit", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/ar-follow-up", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/credentialing", changeFrequency: "monthly", priority: 0.85 },
  {
    path: "/solutions/medical-billing-software",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/solutions/healthcare-platform",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/solutions/hipaa-compliant-software",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
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
