import type { Metadata } from "next";

const siteUrl = "https://baitecoptics.com";

export function productMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
): Metadata {
  const canonical = `${siteUrl}${path}`;

  return {
    title: `${title} | Custom Precision Optics | Baitec Optics`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Baitec Optics`,
      description,
      url: canonical,
      siteName: "Baitec Optics",
      type: "website",
      ...(image ? { images: [{ url: `${siteUrl}${image}`, alt: title }] } : {}),
    },
  };
}
