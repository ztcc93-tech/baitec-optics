export const insightCategories = ["Materials", "Manufacturing", "Applications", "Company News", "Industry Insights"] as const;
export type InsightCategory = typeof insightCategories[number];
export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  category: InsightCategory;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  imageAlt?: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[]; ordered?: boolean; after?: string[] }[];
  relatedProducts?: { title: string; href: string }[];
};
// Add approved articles here. Dates represent actual publication and revision dates.
export const insightArticles: InsightArticle[] = [
  {
    "slug": "why-a-photo-is-not-enough-to-quote-custom-optics",
    "title": "Why a Photo Is Not Enough to Quote Custom Optics: What Information We Actually Need",
    "description": "A photo is a useful starting point. Learn which specifications we need to quote custom optics accurately, and what to do when some details are unknown.",
    "category": "Manufacturing",
    "publishedAt": "2026-10-28",
    "seoTitle": "Why a Photo Is Not Enough to Quote Custom Optics | Baitec Optics",
    "seoDescription": "A photo shows the size and shape of an optical component, but not its material, radius, focal length, surface quality or coating. Here is the checklist of specifications needed for an accurate custom optics quote — and what to do if you don’t have them.",
    "image": "/insight/custom-optics-quote.png",
    "imageAlt": "Optical lenses and windows beside a disassembled black optical assembly",
    "sections": [
      {
        "heading": "",
        "paragraphs": [
          "Sending a photo is often the first step when asking for a quote for custom optics. A photo is a quick way to show what a part looks like, and it is a useful place to start.",
          "It is not, on its own, enough for an accurate quote. **Two components that look identical in a photo can behave completely differently in a system.** A part made from appearance alone may fit its holder perfectly and still not work, because price and performance depend on specifications that a photo cannot show.",
          "That does not mean a photo is useless, or that a full drawing is always required before we can talk. It means a few key specifications are needed alongside the photo, so the part we quote is the part that will actually work in your equipment."
        ]
      },
      {
        "heading": "What a photo can — and cannot — tell us",
        "paragraphs": [
          "From a photo we can usually see the approximate diameter, the general shape (a plano-convex lens, a flat optical window, a mirror), the edge, and a rough hint of coating from the colour of the reflection. That is enough to start a conversation.",
          "But price and performance depend on what a photo cannot show:"
        ],
        "bullets": [
          "**Material.** N-BK7, fused silica and sapphire all look like clear glass, but they bend light differently, transmit different wavelengths, and withstand very different laser power. The wrong material can absorb energy and overheat.",
          "**Radius and focal length.** The exact curve of a lens decides where light is focused. A small difference, invisible in a photo, shifts the focal point — so we need the radius (R) or focal length (EFL), not an estimate.",
          "**Centre thickness and tolerances.** Thickness affects the optics and the fit in the mount, and tighter tolerances mean more processing and inspection time, which affects the price.",
          "**Surface figure and quality.** Requirements such as λ/4 accuracy and 40-20 scratch-dig decide whether a part scatters light and loses energy. They cannot be seen in a photo.",
          "**Clear aperture.** The usable area of the part, often specified as >90% of the diameter. It affects processing and cost, and cannot be judged from appearance.",
          "**Wavelength and coating.** A green or purple reflection does not tell us whether a coating is AR @ 1064 nm, AR @ 532 nm, or something else. In a laser system, the wrong coating means low transmission — and can even be damaged by the laser."
        ],
        "after": [
          "In short, appearance tells us the shape of a part. Specifications tell us how it handles light, and handling light is the job the part is there to do. A quote based only on appearance would have to guess at material, performance and processing difficulty. That helps neither side: the price could be wrong, and the finished part could fail in use."
        ]
      },
      {
        "heading": "The checklist: what we need to quote",
        "paragraphs": [
          "A technical drawing (PDF is fine) usually contains all of this in one file. If you don't have a drawing, please send as much of the following as you can:"
        ],
        "bullets": [
          "Component type, diameter, and centre thickness",
          "Radius of curvature or focal length (for lenses and curved mirrors)",
          "Material — or, if unknown, the application and wavelength (see below)",
          "Working wavelength or wavelength range",
          "Coating requirement (e.g. AR @ 1064 nm)",
          "Surface quality, surface accuracy, and clear aperture, if specified",
          "Quantity",
          "Application: what the part is used for, and where it sits in the system (focusing, collimating, protection window, etc.)"
        ]
      },
      {
        "heading": "Don't know these specifications? Three options",
        "paragraphs": [
          "Missing specifications are common, especially when replacing parts in older equipment or when the original supplier is no longer available. You do not need to solve this alone before contacting us. Start with whichever of these routes is available to you:"
        ],
        "ordered": true,
        "bullets": [
          "**Check the original documentation.** The equipment manual, spare parts list, or original supplier's part number often identifies the material and focal length.",
          "**Send us the original sample for measurement.** Diameter, thickness, radius and focal length can be measured from a physical sample, so the part is reproduced from data, not guessed from a photo. For a set of parts, send the full set.",
          "**Tell us about the application.** Equipment type, laser type, wavelength and power, and what the component does. With that, we can often narrow down the likely material and coating, and tell you exactly what still needs to be confirmed."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "For custom optics, a quotation is based on specifications, not appearance: **material, radius or focal length, thickness, surface quality, clear aperture, wavelength, and coating.**",
          "A photo plus the checklist above is usually enough for us to start. If some items are still unknown, send what you have — we will point out exactly what is missing, instead of asking you to start over.",
          "Planning a replacement or a custom part? Send us your drawing or specifications — even a partial checklist helps — and we will confirm what else is needed and quote accordingly.",
          "**Contact Baitec Optics: sales@baitecoptics.com**"
        ]
      }
    ]
  }
];
export const getInsightArticle = (slug: string) => insightArticles.find(article => article.slug === slug);
export const formatInsightDate = (date: string) => new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const insightPreviews: { title: string; description: string; category: InsightCategory; image: string }[] = [];
