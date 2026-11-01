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
  "slug": "how-to-request-a-quote-for-custom-optical-components",
  "title": "How to Request a Quote for Custom Optical Components: A Practical Checklist",
  "description": "A practical RFQ checklist covering drawings, optical materials, dimensions, tolerances, surface requirements, coatings, quantities and delivery.",
  "seoTitle": "Custom Optical Components RFQ Checklist | Baitec Optics",
  "seoDescription": "Request a quote for custom optical components with a practical checklist of drawings, materials, tolerances, coatings, quantities and delivery requirements.",
  "category": "Manufacturing",
  "publishedAt": "2026-11-01",
  "image": "/insight/custom-optics-rfq-checklist.png",
  "imageAlt": "Optical lenses, a prism and coated windows on a technical drawing beside a caliper",
  "sections": [
    {
      "heading": "",
      "paragraphs": [
        "When sourcing custom optical components, a clear quotation request helps the manufacturer evaluate your requirements, identify missing information, and prepare a relevant quotation.",
        "Whether you need optical lenses, windows, prisms, or mirrors, the information you provide affects how accurately the supplier can assess manufacturing feasibility, pricing, and lead time.",
        "This checklist explains what to include when requesting a quote for custom optics."
      ]
    },
    {
      "heading": "1. Technical Drawings or Available Specifications",
      "paragraphs": [
        "A technical drawing is usually the most useful starting point. It brings the component’s geometry, dimensions, tolerances, and optical requirements into one document.",
        "If available, include:"
      ],
      "bullets": [
        "A dimensioned 2D drawing, with the drawing number and revision.",
        "A 3D model to clarify complex shapes or mechanical features.",
        "Supporting data referenced in the drawing, such as an aspheric surface prescription or sag table."
      ],
      "after": [
        "For optical components, a 3D model alone may not define all the requirements needed for manufacturing and inspection. Optical tolerances and coating specifications should also be provided.",
        "If you do not have a complete drawing, send the specifications you already know and describe the intended application. Photos can help explain the component’s appearance, but they generally cannot establish its material, curvature, or optical performance."
      ]
    },
    {
      "heading": "2. Optical Material",
      "paragraphs": [
        "Specify the material and exact glass grade where possible. Examples include N-BK7, fused silica, calcium fluoride (CaF₂), zinc selenide (ZnSe), silicon, and germanium.",
        "For optical glass, include the manufacturer and grade if these are specified in your design. If alternative materials are acceptable, state whether substitutions require your approval.",
        "If the material has not yet been selected, provide the operating wavelength range and relevant environmental conditions. This gives the supplier a basis for discussing suitable options."
      ]
    },
    {
      "heading": "3. Dimensions and Tolerances",
      "paragraphs": [
        "Provide the dimensions that define the component and how it fits into your assembly.",
        "Depending on the component, these may include:"
      ],
      "bullets": [
        "Diameter, length, width, and thickness.",
        "Radius of curvature for curved surfaces.",
        "Prism angles or window wedge.",
        "Chamfers, holes, and other mechanical features."
      ],
      "after": [
        "Include the associated tolerances and identify any critical dimensions.",
        "Avoid applying unnecessarily tight tolerances to every feature. Requirements should reflect the optical design and assembly needs, because tighter tolerances can increase manufacturing and inspection costs.",
        "For lenses, clarify whether focal length is a reference value or an acceptance requirement."
      ]
    },
    {
      "heading": "4. Optical Surface and Alignment Requirements",
      "paragraphs": [
        "Mechanical dimensions alone do not fully describe a precision optical component. Include the optical requirements relevant to your design, such as:"
      ],
      "bullets": [
        "Surface quality, including scratch-dig requirements.",
        "Surface figure or surface irregularity.",
        "Clear aperture.",
        "Centration for lenses.",
        "Parallelism or wedge for windows.",
        "Angular tolerances for prisms."
      ],
      "after": [
        "When specifying surface accuracy in wavelengths, include the reference wavelength. State the applicable standard and inspection method where required.",
        "Clear aperture and transmittance describe different properties: clear aperture defines the usable optical area, while transmittance describes how much light passes through the component under specified conditions."
      ]
    },
    {
      "heading": "5. Coating Requirements",
      "paragraphs": [
        "Specify whether the component should be uncoated or coated, and identify the surfaces that require treatment.",
        "For a coating quotation, useful information includes:"
      ],
      "bullets": [
        "Coating type, such as anti-reflection or reflective coating.",
        "Operating wavelength or wavelength range.",
        "Required transmittance or reflectance.",
        "Angle of incidence.",
        "Polarization conditions, where relevant."
      ],
      "after": [
        "Clarify whether the performance requirement applies to an individual surface or the complete component, and whether it is an average value or a limit across the specified band.",
        "For laser applications, include laser damage threshold requirements and the associated test conditions if applicable."
      ]
    },
    {
      "heading": "6. Quantity and Delivery Requirements",
      "paragraphs": [
        "State the quantity needed for the current order. If you are comparing different order volumes, request separate prices for each quantity.",
        "It is also helpful to distinguish between prototype quantities and expected production volumes. This allows the supplier to assess the appropriate manufacturing approach.",
        "Include your preferred delivery date and any documentation, inspection, or packaging requirements, such as material certificates, coating measurement reports, or individual protective packaging."
      ]
    },
    {
      "heading": "What If Some Specifications Are Still Missing?",
      "paragraphs": [
        "You do not need to wait until every detail is finalized before contacting a supplier.",
        "Send the available drawing or specifications, explain the component’s function, and identify which requirements remain open. The supplier can then review the available information and clarify what is needed before confirming a quotation.",
        "An early budgetary estimate may be possible, but it should be distinguished from a firm quotation based on agreed technical requirements."
      ]
    },
    {
      "heading": "Discuss Your Custom Optics Requirements with Baitec Optics",
      "paragraphs": [
        "Baitec Optics supplies custom optical lenses, windows, prisms, mirrors, and other optical components for instrument and equipment applications.",
        "To discuss your project, send us your drawings, required quantities, and available specifications. Include your material, coating, and delivery requirements where known.",
        "Contact Baitec Optics to request a quotation for your custom optical components."
      ]
    }
  ]
},
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
