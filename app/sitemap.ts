import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harshithareddy.com";
  return [
    { url: base, priority: 1 },
    { url: `${base}/work`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/chat`, priority: 0.7 },
    { url: `${base}/work/hack-nation`, priority: 0.8 },
    { url: `${base}/work/banking-products`, priority: 0.8 },
    { url: `${base}/work/finconnect`, priority: 0.8 },
    { url: `${base}/work/periwise`, priority: 0.8 },
  ];
}
