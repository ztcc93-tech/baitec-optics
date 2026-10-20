import type { MetadataRoute } from "next";
import { productCatalog } from "./data/productCatalog";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://baitecoptics.com";
  const staticPages = ["", "/about", "/products", "/workshop-equipment", "/contact"];
  const productPages = productCatalog.flatMap((category) => [category.href, ...category.products.map((product) => product.href)]);
  return [...staticPages, ...productPages].map((path) => ({ url: `${base}${path}`, changeFrequency: path.startsWith("/products") ? "monthly" : "yearly", priority: path === "" ? 1 : path === "/products" ? .9 : .7 }));
}
