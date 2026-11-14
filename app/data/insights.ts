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
  "slug": "custom-optical-components-cost-guide",
  "title": "What Affects the Cost of Custom Optical Components",
  "description": "Understand how material, geometry, tolerances, coating, inspection and order quantity affect custom optics quotations.",
  "category": "Manufacturing",
  "publishedAt": "2026-11-14",
  "image": "/insight/custom-optics-cost-guide.png",
  "imageAlt": "Four precision optical components on black velvet",
  "sections": [
    {
      "heading": "",
      "paragraphs": [
        "When two optical components look similar, a large difference in price can be difficult to understand. A lens or window may have the same nominal dimensions as another part while requiring a different material grade, polishing process, coating, or inspection procedure.",
        "For custom optics, the quotation reflects the complete specification and order conditions. Understanding the main cost drivers helps buyers compare offers and discuss practical options without compromising the performance their system needs."
      ]
    },
    {
      "heading": "1 Material and Grade",
      "paragraphs": [
        "The material specification determines more than the price of the starting blank. Availability, usable blank size, material quality, and the way the substrate responds to fabrication can all affect the finished cost.",
        "Even within one material family, grades may differ in transmission, homogeneity, inclusions, or other properties. A quotation based on a general material name may therefore differ from one based on an exact manufacturer and grade.",
        "If your design permits an alternative, identify the properties that must be maintained. Any substitution should be reviewed and approved before manufacture."
      ]
    },
    {
      "heading": "2 Dimensions and Geometry",
      "paragraphs": [
        "Diameter, thickness, curvature, and edge features influence how a component can be held, ground, polished, and measured. A large, thin window may need different handling and support from a thicker part of the same diameter.",
        "Curved surfaces, restricted access, or unusual shapes can require dedicated fixtures and additional process development. A small component can also be demanding when there is little space for handling or inspection.",
        "Provide the complete geometry and tolerances. A photograph can illustrate the shape, but it does not define the requirements needed for a firm manufacturing quotation."
      ]
    },
    {
      "heading": "3 Optical and Mechanical Tolerances",
      "paragraphs": [
        "Tighter tolerances can increase processing time, inspection effort, and the risk of rejection. Their effect depends on the combination of requirements: a tolerance that is routine on one geometry may be difficult on another.",
        "Surface quality, surface figure, and roughness describe different characteristics. Tightening one does not automatically improve all aspects of optical performance. Likewise, a window’s surface flatness alone does not fully define its transmitted wavefront performance.",
        "Mark requirements that are fixed by the design and identify any that remain open for discussion. Changes should follow an engineering review of the application rather than an assumption that looser specifications are always acceptable."
      ]
    },
    {
      "heading": "4 Coating and Acceptance Requirements",
      "paragraphs": [
        "A coating must be defined by its intended performance. Wavelength range, angle of incidence, polarization, coated surfaces, and environmental requirements help determine the design and verification needed.",
        "A request for a broad operating band or a demanding performance limit can lead to a different quotation from a simpler coating requirement. The effect on cost should be reviewed for the actual substrate and part geometry.",
        "Inspection documentation also belongs in the enquiry. A certificate of conformity, dimensional report, spectral measurement, and interferometric report represent different deliverables. State what evidence is required and whether testing applies to every part or to an agreed sample."
      ]
    },
    {
      "heading": "5 Order Quantity and Manufacturing Preparation",
      "paragraphs": [
        "A small order can still require drawing review, tooling, machine setup, coating preparation, and inspection planning. These activities are spread over fewer accepted parts, which can make the unit price of a prototype higher than that of a repeat production batch.",
        "Increasing quantity may improve the unit price, but the reduction is not necessarily proportional. Material purchasing, fixture capacity, coating loads, and yield can affect the price at each quantity.",
        "If you expect repeat orders, provide the initial quantity and realistic future demand separately. Ask whether the offer includes one-time charges and whether existing tooling can be reused if the drawing remains unchanged."
      ]
    },
    {
      "heading": "6 Compare Quotations on the Same Basis",
      "paragraphs": [
        "Before comparing totals, confirm that suppliers have used the same drawing revision, material, tolerances, coating requirements, and acceptance criteria. Check the required quantity, delivery basis, packaging, inspection documents, and any exclusions.",
        "A lower price may reflect a different technical interpretation or commercial scope. Ask for clarification where an offer does not explicitly address a critical requirement.",
        "If the price exceeds your budget, request a review of the main cost drivers. A supplier may be able to quote an approved material alternative, a different quantity, or a revised specification for your evaluation. Performance-critical requirements should remain subject to your design approval."
      ]
    },
    {
      "heading": "Discuss Your Custom Optics with Baitec Optics",
      "paragraphs": [
        "Baitec Optics supplies custom optical lenses, windows, prisms, and mirrors manufactured to agreed specifications.",
        "Send your drawing, required quantity, material, coating, and inspection requirements to sales@baitecoptics.com. If you are evaluating cost options, identify which specifications are fixed and which can be reviewed so we can clarify the basis of the quotation."
      ]
    }
  ]
},
{
  "slug": "surface-quality-vs-surface-accuracy-optical-specifications",
  "title": "Surface Quality vs. Surface Accuracy: Understanding Optical Specifications",
  "description": "Understand scratch-dig surface quality, surface accuracy and roughness, and learn which details to include when specifying custom optical components.",
  "seoTitle": "Surface Quality vs. Surface Accuracy | Baitec Optics",
  "seoDescription": "Understand the difference between optical surface quality, surface accuracy and roughness, with practical guidance on scratch-dig, wavelength, PV and RMS requirements.",
  "category": "Manufacturing",
  "publishedAt": "2026-11-10",
  "image": "/insight/surface-quality-vs-surface-accuracy.png",
  "imageAlt": "Optical window on protective foam beside a drawing showing surface quality and surface figure specifications",
  "sections": [
    {
      "heading": "",
      "paragraphs": [
        "When requesting custom optical lenses, windows, or mirrors, buyers often encounter specifications such as 40-20 scratch-dig and λ/4 surface accuracy.",
        "Both describe an optical surface, but they answer different questions. Surface quality concerns defects such as scratches and digs. Surface accuracy concerns how closely the manufactured surface follows its intended shape.",
        "Understanding the distinction helps buyers interpret drawings, compare quotations, and communicate requirements more clearly."
      ]
    },
    {
      "heading": "1. What Does Surface Quality Describe?",
      "paragraphs": [
        "Surface quality specifies allowable surface defects. A familiar format is the scratch-dig designation, such as 40-20 or 20-10.",
        "Under the MIL-PRF-13830B convention, the scratch designation is assessed by comparison with reference standards under controlled viewing conditions. It should not be read as a direct measurement of scratch width. The dig designation relates to the size of pits or digs.",
        "Within the same specification system, lower numbers generally represent tighter defect limits. However, acceptance also depends on the applicable rules and inspection conditions, so the standard should accompany the numerical requirement.",
        "For an enquiry, “surface quality: 40-20 scratch-dig, per the specified drawing standard” is more useful than a general request for a “high-quality polished surface.”"
      ]
    },
    {
      "heading": "2. What Does Surface Accuracy Describe?",
      "paragraphs": [
        "Surface accuracy concerns the departure from the intended surface form.",
        "For a flat window or mirror, this may be expressed as surface flatness. For a curved optical surface, the drawing may distinguish curvature or power error from surface irregularity.",
        "Requirements are often expressed in fractions of a reference wavelength, such as λ/4 or λ/10. These values need context: the reference wavelength, evaluation area, and definition of the reported error must be clear.",
        "When comparing quotations, check that both suppliers are quoting the same requirement. A shorter numerical specification can conceal different interpretations if the measurement basis is omitted."
      ]
    },
    {
      "heading": "3. Why Do These Specifications Need Separate Lines?",
      "paragraphs": [
        "Consider two enquiries:"
      ],
      "bullets": [
        "A custom lens with a 40-20 scratch-dig requirement.",
        "A custom lens with a λ/4 surface figure requirement."
      ],
      "after": [
        "The first defines a surface-defect requirement but leaves the figure requirement open. The second defines a form requirement but leaves the allowable scratches and digs open.",
        "A complete drawing may need both. Neither value, by itself, provides a complete description of the surface.",
        "The practical question is therefore: “Which defect limits and form tolerances does this application require?” Listing them separately makes the answer easier to quote and inspect."
      ]
    },
    {
      "heading": "4. Surface Roughness Is Another Requirement",
      "paragraphs": [
        "Surface roughness describes fine-scale surface texture. It is commonly reported using a defined roughness metric and measurement bandwidth.",
        "It is distinct from scratch-dig quality and overall surface figure. Where scatter control is important, a drawing may need a separate roughness requirement with an agreed measurement method.",
        "If your design specifies surface roughness, include it explicitly rather than assuming that a scratch-dig requirement also defines the surface texture."
      ]
    },
    {
      "heading": "5. Write Requirements That Can Be Verified",
      "paragraphs": [
        "A useful specification tells the manufacturer both what must be achieved and how acceptance will be determined.",
        "For surface-related requirements, clarify:"
      ],
      "bullets": [
        "Which optical surfaces the requirement applies to.",
        "The clear aperture or evaluation area.",
        "The applicable drawing or inspection standard.",
        "The reference wavelength for wave-based values.",
        "Whether the value describes surface error or wavefront error.",
        "Whether PV or RMS is required, and any permitted terms removed during analysis.",
        "Whether inspection applies before or after coating, where relevant."
      ],
      "after": [
        "For example, a drawing might separately identify “Surface quality: 40-20 scratch-dig” and “Surface figure: ≤λ/4 PV at 632.8 nm,” together with the applicable standard, evaluation aperture, and analysis conditions.",
        "This is an illustration of specification structure. The actual limits should come from the optical design and agreed acceptance criteria."
      ]
    },
    {
      "heading": "6. Match the Requirements to the Project",
      "paragraphs": [
        "When preparing an enquiry, identify which tolerances are fixed by the design and which can be discussed.",
        "If the drawing is final, provide the current revision so the quotation can follow it. If the project is still being developed, explain the intended function and ask the supplier to identify requirements that need clarification.",
        "When reviewing a quotation, confirm that the quoted surface quality, figure, aperture, coating stage, and inspection documentation match your request. This creates a clearer basis for comparing offers and accepting the finished components."
      ]
    },
    {
      "heading": "Discuss Your Optical Specifications with Baitec Optics",
      "paragraphs": [
        "Baitec Optics supplies custom optical lenses, windows, prisms, and mirrors manufactured to agreed specifications.",
        "Send your drawing, required quantity, and surface requirements to sales@baitecoptics.com. If any specification remains open, identify it in your enquiry so we can review it with you before confirming the quotation."
      ]
    }
  ]
},
{
  "slug": "optical-windows-how-to-choose-the-right-material",
  "title": "Optical Windows: How to Choose the Right Material for Your Application",
  "description": "Choose optical window materials for your application by reviewing wavelength, material grade, operating environment, optical requirements and coatings.",
  "seoTitle": "Optical Window Material Selection Guide | Baitec Optics",
  "seoDescription": "Learn how to choose optical window materials based on wavelength, material grade, operating environment, dimensions, optical requirements and coating specifications.",
  "category": "Materials",
  "publishedAt": "2026-11-04",
  "image": "/insight/optical-window-materials.png",
  "imageAlt": "Clear, yellow and dark optical windows in round and rectangular shapes on a protective mat beside a caliper",
  "sections": [
    {
      "heading": "",
      "paragraphs": [
        "An optical window may look like a simple transparent plate, but choosing its material involves more than finding a piece of glass that fits the housing. The window must transmit the required wavelengths, withstand its operating environment, and meet the optical requirements of the system.",
        "For buyers sourcing custom optical windows, the most useful starting point is the application. What light needs to pass through the window? What conditions will it face? Which specifications are essential to the equipment?",
        "This guide explains the main questions to consider before selecting a material."
      ]
    },
    {
      "heading": "1. Start with the Operating Wavelength",
      "paragraphs": [
        "A material that appears transparent to the eye may not transmit the wavelengths used by your instrument.",
        "N-BK7 is a common starting point for visible and some near-infrared applications. Fused silica is often considered when ultraviolet transmission or low thermal expansion is important. Sapphire can be useful where durability is a priority, while materials such as zinc selenide, silicon, and germanium serve different infrared applications.",
        "These are starting points rather than interchangeable options. “Infrared” covers a broad range, so an infrared window should always be specified against the actual operating band.",
        "When requesting a quotation, provide a wavelength or defined range rather than simply stating “visible” or “IR.” If several wavelengths must pass through the same window, include all of them."
      ]
    },
    {
      "heading": "2. Confirm the Exact Material Grade",
      "paragraphs": [
        "A general material name may leave important details unresolved.",
        "For fused silica, for example, the manufacturing process and hydroxyl content can affect spectral transmission. A grade selected for ultraviolet use may have different infrared absorption characteristics from a grade intended for infrared applications.",
        "If your drawing specifies a manufacturer and material grade, include both in the enquiry. If alternatives are acceptable, identify the properties that must be maintained and state whether substitutions require approval.",
        "For a replacement window, confirming the original material is especially useful. Matching the dimensions alone does not establish optical equivalence."
      ]
    },
    {
      "heading": "3. Describe the Operating Environment",
      "paragraphs": [
        "The environment helps define what the window must withstand throughout its service life.",
        "Useful information includes:"
      ],
      "bullets": [
        "Operating temperature and expected temperature changes.",
        "Indoor, outdoor, or enclosed installation.",
        "Exposure to moisture, chemicals, dust, or repeated cleaning.",
        "Any pressure difference across the window.",
        "Mounting and sealing arrangements."
      ],
      "after": [
        "For a protective window, explain what it protects and how it is installed. A window fitted inside a laboratory instrument faces different conditions from one exposed on an outdoor sensor.",
        "Where pressure loading is involved, provide the unsupported opening and pressure conditions so the material, thickness, and mounting can be reviewed together."
      ]
    },
    {
      "heading": "4. Specify Dimensions and Optical Requirements",
      "paragraphs": [
        "Material selection is only one part of a complete window specification. The supplier also needs the geometry and acceptance requirements.",
        "Depending on the application, include:"
      ],
      "bullets": [
        "Diameter or length and width.",
        "Thickness and dimensional tolerances.",
        "Clear aperture.",
        "Surface quality.",
        "Surface flatness or transmitted wavefront requirements.",
        "Parallelism or intentional wedge.",
        "Edge features, such as chamfers."
      ],
      "after": [
        "Flatness and transmitted wavefront error describe different aspects of performance. A window’s effect on the transmitted wavefront also depends on factors beyond the flatness of an individual surface, including material uniformity and mounting stress.",
        "Identify the requirements that are critical to your system so the quotation reflects the intended use."
      ]
    },
    {
      "heading": "5. Define the Coating Separately",
      "paragraphs": [
        "“AR coated” is a useful description, but it is not a complete coating specification.",
        "For a custom optical window, state the operating wavelength range, angle of incidence, required transmission or reflection performance, and which surfaces need coating. Include polarization conditions where relevant.",
        "Also clarify whether the transmission requirement applies to the complete window or whether you are specifying reflectance per coated surface.",
        "For example, “AR coating on both faces for operation at 1064 nm” gives a clearer starting point than “high-transmission coating.” The performance limit and measurement conditions can then be agreed during technical review."
      ]
    },
    {
      "heading": "6. Send the Application When the Material Is Undecided",
      "paragraphs": [
        "You can begin an enquiry before selecting the final material.",
        "Send the available drawing, operating wavelength, installation conditions, and required quantity. Explain which specifications are fixed and which remain open.",
        "A useful enquiry might read:",
        "“We need a custom protective window for an optical sensor. The operating band is 450–900 nm. Please review the attached dimensions and advise on material and coating options. The initial quantity is 20 pieces.”",
        "This gives the supplier a practical basis for discussion without treating an initial material suggestion as a finalized design."
      ]
    },
    {
      "heading": "Discuss Your Custom Optical Windows with Baitec Optics",
      "paragraphs": [
        "Baitec Optics supplies custom optical windows manufactured to agreed material, dimensional, surface, and coating requirements.",
        "Send your drawing, operating wavelength, required quantity, and available specifications to sales@baitecoptics.com. We can review your requirements and clarify the information needed for a quotation."
      ]
    }
  ]
},
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
