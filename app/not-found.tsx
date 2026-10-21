import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That link doesn’t lead anywhere on this site. Head home, or contact Medical Billers if you need help with billing.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
