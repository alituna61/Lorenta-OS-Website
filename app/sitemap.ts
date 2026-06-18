import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Statik sayfa listesi. Dinamik içerik (blog, case study) eklendiğinde
 * burada CMS'ten çekilen kayıtları map'leyeceğiz.
 */
const staticRoutes: ReadonlyArray<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  { path: "/product", priority: 0.9, changeFrequency: "monthly" },
  { path: "/product/cognitive-core", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/connectors", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/agents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/security", priority: 0.8, changeFrequency: "monthly" },

  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/finance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/supply-chain", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/operations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/sales-crm", priority: 0.8, changeFrequency: "monthly" },

  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/customers", priority: 0.8, changeFrequency: "weekly" },

  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources/guides", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/compare", priority: 0.7, changeFrequency: "monthly" },

  { path: "/demo", priority: 0.9, changeFrequency: "yearly" },

  { path: "/company", priority: 0.6, changeFrequency: "monthly" },
  { path: "/company/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/company/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/company/contact", priority: 0.5, changeFrequency: "yearly" },

  { path: "/legal/kvkk", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
