export type WindowProductDetail = {
  slug: string;
  title: string;
  description: string;
  overview: readonly string[];
  applications: readonly { title: string; description: string }[];
  imageCount: number;
};

export const windowSpecificationGrades = [
  { title: "Standard Grade", items: [
    ["Materials", "N-BK7, Quartz, CaF₂, MgF₂, ZnSe, ZnS,\nand other optical glass upon request"],
    ["Dimensions", "Ø3–300 mm or side length 3–300 mm"],
    ["Diameter Tolerance", "+0 / −0.10 mm"],
    ["Length and Width Tolerance", "±0.10 mm"],
    ["Thickness Tolerance", "±0.10 mm"],
    ["Parallelism", "≤3′"],
    ["Surface Figure (P–V)", "≤λ/4 @ 632.8 nm"],
    ["Surface Quality\n(Scratch–Dig)", "40–20"],
    ["Surface Roughness (Ra)", "≤1.0 nm"],
    ["Clear Aperture", "≥85% of overall dimensions"],
    ["Coating", "AR / HR, etc., to customer requirements"],
  ]},
  { title: "Precision Grade", items: [
    ["Materials", "N-BK7, Quartz, CaF₂, MgF₂, ZnSe, ZnS,\nand other optical glass upon request"],
    ["Dimensions", "Ø3–300 mm or side length 3–300 mm"],
    ["Diameter Tolerance", "+0 / −0.02 mm"],
    ["Length and Width Tolerance", "±0.02 mm"],
    ["Thickness Tolerance", "±0.02 mm"],
    ["Parallelism", "≤2″"],
    ["Surface Figure (P–V)", "≤λ/10 @ 632.8 nm"],
    ["Surface Quality\n(Scratch–Dig)", "20–10"],
    ["Surface Roughness (Ra)", "≤0.3 nm"],
    ["Clear Aperture", "≥90% of overall dimensions"],
    ["Coating", "AR / HR, etc., to customer requirements"],
  ]},
] as const;

export const windowProductDetails: readonly WindowProductDetail[] = [
  {
    slug: "rectangular-optical-windows", title: "Rectangular Optical Windows", imageCount: 4,
    description: "Custom rectangular optical windows for protected transmission across rectangular apertures.",
    overview: [
      "Rectangular optical windows are flat plates with a rectangular outline and two polished, nominally parallel faces.",
      "They transmit light across a rectangular aperture while separating internal optics from the surrounding environment.",
      "Material, length, width, thickness, edge details, surface flatness, and coatings can be specified to match the mounting frame and spectral range.",
    ],
    applications: [
      { title: "Machine Vision Enclosures", description: "A rectangular front window protects the camera and lens while accommodating the imaging field." },
      { title: "Line-Scan Inspection Systems", description: "An elongated window covers the optical opening along the line-scan field." },
      { title: "Optical Instrument Housings", description: "A rectangular window covers an illumination or detection aperture while preserving optical access." },
      { title: "Laser Equipment Enclosures", description: "A window matched to the beam aperture protects internal beam delivery optics from external contamination." },
    ],
  },
  {
    slug: "wedged-optical-windows", title: "Wedged Optical Windows", imageCount: 5,
    description: "Custom wedged optical windows for reflection separation and reduced etalon interference.",
    overview: [
      "Wedged optical windows have two polished faces set at a small angle to each other.",
      "The wedge separates reflections from the two faces to reduce overlapping ghost beams and etalon interference, while introducing a small angular deviation in transmission.",
      "Material, outline, thickness, wedge angle, surface flatness, and coatings can be specified for the beam geometry and operating wavelength.",
    ],
    applications: [
      { title: "Laser Beam Delivery Systems", description: "A wedged protective window directs surface reflections away from the main beam path to help reduce unwanted feedback." },
      { title: "Laser Spectroscopy", description: "A wedged window reduces parasitic etalon fringes that can interfere with weak spectral measurements." },
      { title: "Interferometric Instruments", description: "A wedged access window separates unwanted surface reflections from the measurement beam." },
      { title: "Laser Beam Profilers", description: "A wedged entrance window separates secondary reflections that could otherwise overlap the measured beam." },
    ],
  },
  {
    slug: "octagonal-optical-windows", title: "Octagonal Optical Windows", imageCount: 5,
    description: "Custom octagonal optical windows for specialized housings and mounting profiles.",
    overview: [
      "Octagonal optical windows are flat plates with an eight-sided outline and two polished, nominally parallel faces.",
      "They provide a light-transmitting barrier where the housing or mounting aperture requires an octagonal profile.",
      "Material, dimensions across flats, thickness, corner geometry, surface flatness, parallelism, and coatings can be specified to match the drawing.",
    ],
    applications: [
      { title: "Custom Machine Vision Housings", description: "An octagonal front window protects imaging optics where the mounting frame requires an eight-sided outline." },
      { title: "Optical Sensor Modules", description: "A window matched to an octagonal seat transmits the sensing beam while covering the housing aperture." },
      { title: "Laser Instrument Housings", description: "An octagonal cover window provides optical access in a housing designed for this mounting profile." },
    ],
  },
  {
    slug: "optical-filters", title: "Optical Filters", imageCount: 5,
    description: "Custom optical filters for wavelength selection, attenuation, and detector protection.",
    overview: [
      "Optical filters use an absorbing substrate, a thin-film coating, or a combination of both to control transmitted light.",
      "They selectively transmit or attenuate light according to the specified filter design.",
      "Substrate, dimensions, spectral response or optical density, angle of incidence, and coating requirements can be specified after the filter type is confirmed.",
    ],
    applications: [
      { title: "Infrared Thermal Imaging", description: "Selected infrared-transmitting materials serve as protective windows that allow infrared radiation to reach the detector." },
      { title: "CO₂ Laser Systems", description: "ZnSe windows transmit the laser beam while helping protect internal optics in cutting, engraving, and marking equipment." },
      { title: "Spectroscopy", description: "Optical filters select wavelength bands or suppress unwanted light to support spectral measurements." },
      { title: "Machine Vision", description: "Color or coated filters select illumination wavelengths and reduce unwanted background light to improve image contrast." },
    ],
  },
  {
    slug: "aerospace-optical-windows", title: "Aerospace Optical Windows", imageCount: 6,
    description: "Custom optical windows for airborne imaging, sensing, and laser instrument housings.",
    overview: [
      "Aircraft optical windows are transmissive elements shaped to fit the optical aperture of an airborne instrument housing.",
      "They allow light to enter or leave the instrument while providing a physical barrier over its optics.",
      "Material, outline, thickness, surface figure, transmitted wavefront requirements, and coatings can be specified to suit the instrument and its defined operating conditions.",
    ],
    applications: [
      { title: "Aerial Survey Cameras", description: "A housing window provides optical access for terrain and mapping images while covering the camera optics." },
      { title: "Airborne Multispectral Imagers", description: "A window selected for the required wavelength bands transmits scene radiation to the imaging channels." },
      { title: "Airborne LiDAR Instruments", description: "A window selected for the laser wavelength transmits outgoing pulses and returning light through the instrument housing." },
    ],
  },
] as const;

export function getWindowProductDetail(slug: string) {
  return windowProductDetails.find((product) => product.slug === slug);
}

export function getWindowGalleryImages(slug: string, count: number): readonly string[] {
  return Array.from({ length: count }, (_, index) => {
    const position = index + 1;
    const number = String(position).padStart(2, "0");
    const filename = position === 1 ? "01-main.webp" : position === count ? `${number}-collection.webp` : `${number}.webp`;
    return `/products/windows/${slug}-gallery/${filename}`;
  });
}
