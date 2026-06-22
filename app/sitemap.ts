import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/markdown";

const staticRoutes: ReadonlyArray<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: string;
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-06-20" },
  { path: "/product", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/product/cognitive-core", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/product/connectors", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/product/agents", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/product/security", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/accounting", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/ceo", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/finance", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/inventory", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/operations", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/production", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/sales-crm", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/solutions/supply-chain", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/customers", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-06-20" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-06-22" },
  { path: "/resources/blog", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-06-22" },
  { path: "/resources/guides", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/resources/compare", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/demo", priority: 0.9, changeFrequency: "yearly", lastModified: "2026-06-20" },
  { path: "/company", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/company/about", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-06-20" },
  { path: "/company/careers", priority: 0.6, changeFrequency: "weekly", lastModified: "2026-06-20" },
  { path: "/company/contact", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-06-20" },
  { path: "/legal/kvkk", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-20" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-20" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-20" },
  { path: "/legal/cookies", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-20" },
];

const baseUrl = siteConfig.url.replace(/\/$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
  url: `${baseUrl}/resources/blog/${post.slug}`,
  lastModified: new Date(post.meta.date),
  changeFrequency: "weekly",
  priority: 0.6,
}));

  return [...staticEntries, ...blogEntries];
}