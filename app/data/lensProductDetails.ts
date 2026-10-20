export type LensApplication = { title: string; description: string };

export type LensProductDetail = {
  slug: string;
  title: string;
  description: string;
  image: string;
  overview: readonly string[];
  applications: readonly LensApplication[];
};

const lensGalleryCounts: Readonly<Record<string, number>> = {
  "plano-convex-lenses": 5,
  "large-plano-concave-lenses": 5,
  "bi-convex-lenses": 5,
  "bi-concave-lenses": 7,
  "meniscus-lenses": 7,
  "plano-convex-cylindrical-lenses": 5,
  "cemented-lenses": 7,
  "toroidal-lenses": 7,
  "thick-plano-convex-lenses": 5,
  "meniscus-cylindrical-lenses": 6,
  "large-meniscus-cylindrical-lenses": 7,
  "large-plano-convex-cylindrical-lenses": 7,
  "large-plano-concave-cylindrical-lenses": 6,
  "small-axicon-lenses": 6,
};

export function getLensGalleryImages(slug: string): readonly string[] {
  const count = lensGalleryCounts[slug];
  if (!count) return [];

  return Array.from({ length: count }, (_, index) => {
    const position = index + 1;
    const number = String(position).padStart(2, "0");
    const filename = position === 1
      ? "01-main.webp"
      : position === count
        ? `${number}-collection.webp`
        : `${number}.webp`;
    return `/products/lenses/${slug}-gallery/${filename}`;
  });
}

export const lensSpecificationGrades = [
  { title: "Standard Grade", items: [
    ["Materials", "N-BK7, Quartz, CaF₂, MgF₂, ZnSe, ZnS,\nand other optical glass upon request"],
    ["Diameter", "5–300 mm"],
    ["Diameter Tolerance", "+0 / −0.10 mm"],
    ["Center Thickness Tolerance", "±0.10 mm"],
    ["Radius of Curvature Tolerance", "±0.5%–±1%"],
    ["Surface Figure", "λ/4 @ 632.8 nm"],
    ["Surface Quality\n(Scratch–Dig)", "40–20"],
    ["Surface Roughness (Ra)", "≤1.0 nm"],
    ["Centration Error", "<3′"],
    ["Angle / Wedge", "1′–5′"],
    ["Coating", "AR / HR, etc., to customer requirements"],
  ]},
  { title: "Precision Grade", items: [
    ["Materials", "N-BK7, Quartz, CaF₂, MgF₂, ZnSe, ZnS,\nand other optical glass upon request"],
    ["Diameter", "5–300 mm"],
    ["Diameter Tolerance", "+0 / −0.02 mm"],
    ["Center Thickness Tolerance", "±0.02 mm"],
    ["Radius of Curvature Tolerance", "±0.1%"],
    ["Surface Figure", "λ/10 @ 632.8 nm"],
    ["Surface Quality\n(Scratch–Dig)", "20–10 / 10–5"],
    ["Surface Roughness (Ra)", "≤0.3 nm"],
    ["Centration Error", "<30″"],
    ["Angle / Wedge", "1″–10″"],
    ["Coating", "AR / HR, etc., to customer requirements"],
  ]},
] as const;

export const lensProductDetails: readonly LensProductDetail[] = [
  {
    slug: "large-plano-concave-lenses",
    title: "Large Plano-Concave Lenses",
    description: "Precision plano-concave lenses for beam expansion and optical divergence.",
    image: "/products/lenses/plano-concave.webp",
    overview: [
      "Large plano-concave lenses have one flat surface and one concave spherical surface, providing negative optical power in air.",
      "They diverge incident light and can serve as the negative element in a beam expander; the required aperture depends on beam size.",
      "Material, dimensions, surface radii, focal length and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Laser Processing Beam Expanders", description: "Negative input elements paired with positive lenses to increase beam diameter before downstream focusing optics." },
      { title: "Optical Inspection & Metrology", description: "Adjusting beam divergence and illumination coverage in measurement systems requiring a specified larger clear aperture." },
      { title: "Projection & Illumination Equipment", description: "Spreading source light or modifying convergence within a multi-element illumination path." },
      { title: "Laser Research & Optical Testing", description: "Introducing negative optical power to control beam vergence in larger-aperture experimental setups." },
    ],
  },
  {
    slug: "bi-convex-lenses",
    title: "Bi-Convex Lenses",
    description: "Precision bi-convex lenses for finite-conjugate imaging and light concentration.",
    image: "/products/lenses/bi-convex.webp",
    overview: [
      "Bi-convex lenses have two convex spherical surfaces and provide positive optical power in air.",
      "They converge light and are commonly used for finite-conjugate imaging, including relay arrangements with similar object and image distances.",
      "Material, dimensions, surface radii, focal length and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Industrial Imaging & Inspection", description: "Relaying images between finite object and image planes in inspection modules, especially where the conjugate distances are similar." },
      { title: "Medical & Laboratory Diagnostics", description: "Collecting light and relaying finite-distance images or illuminated sample areas within diagnostic instrument optical assemblies." },
      { title: "Microscopy & Scientific Instruments", description: "Condenser and relay elements for concentrating illumination or transferring an intermediate image." },
      { title: "Spectroscopy & Analytical Detection", description: "Focusing light from a finite-distance source or sample region onto a slit or detector." },
      { title: "Projection & Optical Demonstration", description: "Forming magnified or reduced real images of illuminated targets in finite-conjugate projection setups." },
    ],
  },
  {
    slug: "bi-concave-lenses",
    title: "Bi-Concave Lenses",
    description: "Precision bi-concave lenses for beam expansion and image reduction.",
    image: "/products/lenses/bi-concave.webp",
    overview: [
      "Bi-concave lenses have two concave spherical surfaces and provide negative optical power in air.",
      "They diverge light and modify beam vergence when incorporated into an optical assembly.",
      "Material, dimensions, surface radii, focal length and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Laser Beam Expansion Systems", description: "Negative elements paired with positive lenses to expand laser beams and adjust beam diameter before downstream focusing optics." },
      { title: "Spectroscopy & Analytical Instruments", description: "Adjusting beam size and convergence before light enters a spectrometer slit or subsequent optical assembly." },
      { title: "Industrial Imaging & Optical Inspection", description: "Negative elements within multi-element imaging assemblies to adjust effective focal length and balance optical aberrations." },
      { title: "Medical & Ophthalmic Instruments", description: "Negative-power elements within designed optical assemblies to adjust beam vergence in illumination, examination or measurement paths." },
      { title: "Optical Testing & Scientific Research", description: "Controlling beam convergence and creating virtual object conditions in laboratory imaging and optical testing setups." },
    ],
  },
  {
    slug: "meniscus-lenses",
    title: "Meniscus Lenses",
    description: "Custom meniscus lenses for imaging, beam control, and aberration balancing.",
    image: "/products/lenses/meniscus.webp",
    overview: [
      "Meniscus lenses have one convex spherical surface and one concave spherical surface.",
      "They can have positive or negative optical power, depending on surface radii, thickness and refractive index; their effect must be determined from the optical prescription.",
      "Material, dimensions, surface radii, focal length and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Camera & Industrial Imaging Optics", description: "Meniscus elements within camera or inspection lens assemblies to distribute optical power and balance aberrations." },
      { title: "Laser Focusing Assemblies", description: "Positive meniscus designs combined with other lenses to adjust focal length and spherical aberration in a matched focusing system." },
      { title: "Projection & Viewing Instruments", description: "Positive or negative meniscus elements used to modify the focal length and aberration balance of a multi-element lens group." },
      { title: "Optical Design & Instrument Research", description: "Supplementary meniscus elements for testing changes in system power and image quality." },
    ],
  },
  {
    slug: "cemented-lenses",
    title: "Cemented Lenses",
    description: "Custom cemented lens assemblies for focusing and aberration control.",
    image: "/products/lenses/cemented-lens.webp",
    overview: [
      "Cemented lenses consist of two or more optical elements bonded together at matching interfaces with optical adhesive.",
      "The combined prescription controls focusing and aberrations; chromatic correction is achieved only when the materials and curvatures are designed for that purpose.",
      "Glass combinations, element geometry, centration, adhesive requirements and external-surface coatings can be specified for manufacturing review.",
    ],
    applications: [
      { title: "Medical & Fluorescence Instruments", description: "Cemented groups designed as achromats can collect or focus light while reducing chromatic focal shift over the specified band." },
      { title: "Microscopy & Image Relay", description: "Cemented lens groups used to transfer images and manage aberrations within microscope or relay optical assemblies." },
      { title: "Spectroscopy & Chemical Analysis", description: "Achromatic cemented designs can focus multiple wavelengths toward a common plane in spectrometer collection or imaging paths." },
      { title: "Industrial Imaging & Inspection", description: "Compound lens elements within camera and inspection optics, with glass pairing and curvature chosen for the required image quality." },
      { title: "Optical Detection Modules", description: "Bonded lens groups that combine optical powers in a single assembly for focusing or relaying light to detectors." },
    ],
  },
  {
    slug: "plano-convex-cylindrical-lenses",
    title: "Plano-Convex Cylindrical Lenses",
    description: "Custom cylindrical lenses for line focusing and one-axis collimation.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Plano-convex cylindrical lenses combine a flat surface with a convex cylindrical surface, providing positive power in one transverse direction.",
      "They focus a collimated beam into a line rather than a point, or collimate a diverging beam in the powered direction.",
      "Material, aperture, center thickness, cylindrical radii, axis orientation and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Machine Vision & Surface Inspection", description: "Focusing laser illumination into a line for profile measurement, surface inspection and alignment systems." },
      { title: "Laser Diode Modules", description: "Collimating or resizing one axis of an elliptical laser beam as part of a matched cylindrical lens assembly." },
      { title: "Biomedical Research & Light-Sheet Microscopy", description: "Focusing excitation light in one direction to form a sheet within a designed microscope illumination path." },
      { title: "Spectroscopy & Slit Illumination", description: "Concentrating light in one direction to better match the elongated entrance slit of a spectrometer." },
      { title: "Industrial Optical Measurement", description: "Producing line or sheet illumination for geometric measurement and optical alignment." },
    ],
  },
  {
    slug: "toroidal-lenses",
    title: "Toroidal Lenses",
    description: "Custom toroidal lenses for asymmetric focusing and astigmatism correction.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Toroidal lenses have a toroidal surface with different principal radii in two orthogonal meridians.",
      "They provide different optical action in the two meridians and can be used to tailor asymmetric focusing or compensate astigmatism in a designed optical system.",
      "Principal radii, aperture, thickness, material, surface orientation and coating requirements can be specified for manufacturing review.",
    ],
    applications: [
      { title: "Laser Diode Beam Conditioning", description: "Tailoring different optical powers in the two principal meridians to reshape an asymmetric beam." },
      { title: "Anamorphic Imaging Instruments", description: "Producing different image scales in orthogonal directions within a prescribed imaging assembly." },
      { title: "Optical Inspection & Metrology", description: "Compensating unequal meridional focus positions in a designed astigmatism-correction group." },
      { title: "Custom Research Instruments", description: "Controlling asymmetric focusing where a spherical lens cannot provide the required two-meridian prescription." },
    ],
  },
  {
    slug: "thick-plano-convex-lenses",
    title: "Thick Plano-Convex Lenses",
    description: "Custom thick plano-convex lenses manufactured to optical prescriptions and drawings.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Thick plano-convex lenses have one flat surface and one convex spherical surface with a specified increased center thickness.",
      "They provide positive optical power; center thickness affects principal-plane positions and back focal length, so focal positioning should use the full optical prescription.",
      "Material, dimensions, surface radii, focal length and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Industrial Optical Instruments", description: "Focusing or relaying light where the optical prescription calls for a specific thick plano-convex element and mounting envelope." },
      { title: "Illumination & Projection Equipment", description: "Collecting source light as a condenser element, with thickness and curvature selected for the required focal position." },
      { title: "Optical Sensor Modules", description: "Focusing light toward a detector while accounting for the thick lens back focal length and available working distance." },
      { title: "Optical Design & Laboratory Testing", description: "Evaluating principal-plane position and focal location in thick-lens imaging or beam-conditioning experiments." },
    ],
  },
  {
    slug: "meniscus-cylindrical-lenses",
    title: "Meniscus Cylindrical Lenses",
    description: "Custom meniscus cylindrical lenses for one-axis beam and imaging control.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Meniscus cylindrical lenses have a meniscus profile and are designed to provide cylindrical optical action.",
      "Their net power can be positive or negative; the actual surface prescription determines focusing or divergence in the powered meridian.",
      "Material, aperture, center thickness, cylindrical radii, axis orientation and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Laser Beam-Shaping Instruments", description: "Positive or negative cylindrical power for changing one beam dimension within a matched optical assembly." },
      { title: "Anamorphic Imaging Systems", description: "Adjusting image magnification in one direction while retaining the specified meniscus profile." },
      { title: "Optical Inspection & Measurement", description: "Balancing one-axis focus or astigmatism within a prescribed measurement optical path." },
      { title: "Scientific Optical Test Systems", description: "Investigating line focusing or one-axis divergence according to the confirmed sign of cylindrical power." },
    ],
  },
  {
    slug: "large-meniscus-cylindrical-lenses",
    title: "Large Meniscus Cylindrical Lenses",
    description: "Large-aperture meniscus cylindrical lenses manufactured to customer drawings.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Large meniscus cylindrical lenses combine a meniscus profile with cylindrical optical action over a specified aperture.",
      "They control focusing or divergence in a selected transverse meridian; the sign and magnitude of optical power depend on the surface prescription.",
      "Material, aperture, center thickness, cylindrical radii, axis orientation and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Industrial Laser Beam Conditioning", description: "Adjusting one transverse beam dimension where the beam footprint requires a larger clear aperture." },
      { title: "Anamorphic Projection & Imaging", description: "Providing direction-dependent image scaling in a lens group requiring a specified larger optical aperture." },
      { title: "Optical Metrology Instruments", description: "Controlling one-meridian focus or divergence in larger-aperture measurement beam paths." },
      { title: "Research Beam-Shaping Systems", description: "Evaluating positive or negative cylindrical power with a prescribed meniscus profile and aperture." },
    ],
  },
  {
    slug: "large-plano-convex-cylindrical-lenses",
    title: "Large Plano-Convex Cylindrical Lenses",
    description: "Large-aperture plano-convex cylindrical lenses for line and sheet illumination.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Large plano-convex cylindrical lenses have one flat surface and one convex cylindrical surface over a specified aperture.",
      "They provide positive power in one direction for line focusing or one-axis collimation, with aperture selected to accommodate the incident beam.",
      "Material, aperture, center thickness, cylindrical radii, axis orientation and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Machine Vision & Profile Measurement", description: "Focusing larger-aperture laser beams into lines for optical triangulation and surface-profile measurement." },
      { title: "Line-Scan Inspection Illumination", description: "Concentrating light in one direction to illuminate a narrow inspection region on moving materials." },
      { title: "Particle Imaging & Flow Research", description: "Forming light-sheet illumination with other optics to illuminate a selected plane of a seeded flow." },
      { title: "Laser Beam Delivery Modules", description: "Focusing or collimating one beam axis when a larger clear aperture is needed to avoid clipping." },
      { title: "Spectroscopy & Analytical Equipment", description: "Focusing light in one direction toward an elongated spectrometer slit." },
    ],
  },
  {
    slug: "large-plano-concave-cylindrical-lenses",
    title: "Large Plano-Concave Cylindrical Lenses",
    description: "Large-aperture plano-concave cylindrical lenses for one-axis beam expansion.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Large plano-concave cylindrical lenses have one flat surface and one concave cylindrical surface over a specified aperture.",
      "They provide negative power in one direction to increase divergence or expand a beam axis when paired with suitable positive optics.",
      "Material, aperture, center thickness, cylindrical radii, axis orientation and coating requirements can be specified to your drawings, subject to manufacturing review.",
    ],
    applications: [
      { title: "Laser Diode Beam Expansion", description: "Negative cylindrical elements paired with positive cylindrical lenses to enlarge one beam axis and reshape elliptical output." },
      { title: "Machine Vision & Alignment", description: "Spreading a laser beam in one direction to produce fan-shaped illumination for alignment or line projection." },
      { title: "Anamorphic Imaging Instruments", description: "Negative cylindrical power within lens groups that modify image scale in one direction." },
      { title: "Industrial Optical Measurement", description: "Adjusting one-axis divergence to match illumination width to the measurement region." },
      { title: "Laboratory Beam-Shaping Systems", description: "Controlling the convergence of larger-aperture beams independently in one transverse direction." },
    ],
  },
  {
    slug: "small-axicon-lenses",
    title: "Small Axicon Lenses",
    description: "Custom small axicon lenses for annular and Bessel-like beam generation.",
    image: "/homepage/categories/optical-lenses.png",
    overview: [
      "Small axicon lenses use a conical refracting surface rather than a spherical surface; the exact form must be established from the drawing.",
      "In an appropriate setup, an axicon can generate an annular beam or an approximate Bessel beam over a finite propagation region.",
      "Material, diameter, cone angle, tip geometry, thickness and coating requirements can be specified for manufacturing review.",
    ],
    applications: [
      { title: "Laser Alignment & Optical Metrology", description: "Generating annular illumination for ring-based alignment and optical measurement experiments." },
      { title: "Biomedical Imaging Research", description: "Generating Bessel-like excitation beams in specially designed extended-focus microscopy systems." },
      { title: "Optical Trapping & Life-Science Research", description: "Shaping light into annular or Bessel-like distributions within particle and cell manipulation setups." },
      { title: "Laser Micromachining Research", description: "Generating extended-focus beam profiles for transparent-material processing experiments, subject to laser-damage and tip-quality requirements." },
    ],
  },
] as const;

export const getLensProductDetail = (slug: string) => lensProductDetails.find((product) => product.slug === slug);
