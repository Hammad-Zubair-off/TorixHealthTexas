import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Retired off-niche pages — permanent (308) so search engines move the ranking. */
  async redirects() {
    return [
      {
        source: "/solutions/healthcare-platform",
        destination: "/solutions/medical-billing-software",
        permanent: true,
      },
      {
        source: "/services/healthcare-seo",
        destination: "/services/medical-billing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
