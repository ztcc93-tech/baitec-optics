type Specification = readonly [string, string];

export type CustomProductDetail = {
  slug: string;
  title: string;
  imageCount: number;
  applications?: readonly { title: string; description: string }[];
  specifications?: readonly Specification[];
};

const homogenizerApplications = [
  { title: "Solar Simulators", description: "Homogenizes light from xenon lamps, LEDs and other sources to produce uniform illumination for simulated sunlight systems." },
  { title: "Photovoltaic Testing", description: "Used in solar cell and PV module testing equipment for uniform irradiance across the test area." },
  { title: "Environmental & Material Testing", description: "Suitable for solar radiation, aging and weathering test systems requiring consistent light distribution." },
  { title: "Optical & Sensor Testing", description: "Provides uniform illumination for cameras, imaging sensors, detectors and other optical measurement systems." },
  { title: "Scientific & Laboratory Systems", description: "Used in spectroscopy, illumination calibration and custom optical setups requiring high-uniformity light fields." },
] as const;

const homogenizerSpecifications = (diameter: string): readonly Specification[] => [
  ["Material", "JGS1 / BK7 / JGS3 / H-K9L"],
  ["Diameter", diameter],
  ["Diameter Tolerance", "−0.05 mm / +0.0"],
  ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Power", "N ≤ 1 fringe"],
  ["Local Irregularity", "ΔN ≤ 0.3 fringe"],
  ["Parallelism", "≤ 2 arcsec"],
  ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", "≥ 90%"],
  ["Bevel", "< 0.2 mm × 45°"],
  ["Coating", "AR Coating"],
];

export const customProductDetails: readonly CustomProductDetail[] = [
  { slug: "optical-homogenizer-integrator", title: "Optical Homogenizer", imageCount: 6, applications: homogenizerApplications, specifications: homogenizerSpecifications("Ø200 mm") },
  { slug: "medium-optical-homogenizer-integrator", title: "Medium Optical Homogenizer", imageCount: 6, applications: homogenizerApplications, specifications: homogenizerSpecifications("Ø200 mm") },
  { slug: "small-optical-homogenizer-integrator", title: "Small Optical Homogenizer", imageCount: 6, applications: homogenizerApplications, specifications: homogenizerSpecifications("Ø100 mm") },
  { slug: "miniature-optical-homogenizer-integrator", title: "Mini Optical Homogenizer", imageCount: 6, applications: homogenizerApplications, specifications: homogenizerSpecifications("Ø20 mm") },
  { slug: "special-material-irregular-shaped-prism", title: "Irregular Prism", imageCount: 6 },
  { slug: "custom-optical-prism", title: "Custom Prism", imageCount: 6 },
  { slug: "custom-precision-optical-cone", title: "Precision Optical Cone", imageCount: 5 },
  { slug: "custom-corner-cube-prism", title: "Custom Corner Cube", imageCount: 5 },
  { slug: "custom-spherical-lens", title: "Spherical Lens", imageCount: 5 },
  { slug: "optical-encoder-disc", title: "Optical Encoder Disc", imageCount: 6 },
  { slug: "quartz-glass-tube", title: "Quartz Tube", imageCount: 7 },
] as const;

export function getCustomProductDetail(slug: string) {
  return customProductDetails.find((product) => product.slug === slug);
}

export function getCustomGalleryImages(slug: string, count: number): readonly string[] {
  return Array.from({ length: count }, (_, index) => {
    const position = index + 1;
    const filename = position === 1 ? "01-main.webp" : `${String(position).padStart(2, "0")}.webp`;
    return `/products/custom/${slug}-gallery/${filename}`;
  });
}
