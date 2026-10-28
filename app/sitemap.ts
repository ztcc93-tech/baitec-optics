import type { MetadataRoute } from "next";
import { insightArticles } from "./data/insights";
import { productCatalog } from "./data/productCatalog";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://baitecoptics.com";
  const staticPages = ["", "/about", "/products", "/workshop-equipment", "/contact", "/faq", ...(insightArticles.length ? ["/insight"] : [])];
  const productPages = productCatalog.flatMap((category) => [category.href, ...category.products.map((product) => product.href)]);
  return [...staticPages, ...productPages, ...insightArticles.map(article => `/insight/${article.slug}`)].map((path) => ({ url: `${base}${path}`, changeFrequency: path.startsWith("/products") ? "monthly" : "yearly", priority: path === "" ? 1 : path === "/products" ? .9 : .7 }));
}
