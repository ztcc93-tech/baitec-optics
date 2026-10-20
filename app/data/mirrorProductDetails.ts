export type MirrorProductDetail = {
  slug: string;
  title: string;
  description: string;
  overview: readonly string[];
  applications: readonly { title: string; description: string }[];
  imageCount: number;
};

export const mirrorProductDetails: readonly MirrorProductDetail[] = [
  {
    slug: "spherical-concave-mirrors", title: "Spherical Concave Mirrors", imageCount: 7,
    description: "Custom spherical concave mirrors for reflective focusing, imaging, and collimation.",
    overview: [
      "A spherical concave mirror has a reflective surface curved inward as a section of a sphere.",
      "It converges incident light to form a focus or image, or approximately collimates light from a source near its paraxial focal point.",
      "Substrate material, aperture, thickness, radius of curvature, focal length, surface figure, and reflective coating can be specified to match the optical design.",
    ],
    applications: [
      { title: "Spectroscopic Instruments", description: "Collects light from a source or sample and focuses it onto an entrance slit or detector." },
      { title: "Laser Resonators", description: "Provides focusing feedback that helps define the cavity mode in a resonator designed for spherical mirrors." },
      { title: "Optical Test Benches", description: "Forms a converging beam or a near-collimated beam for component testing and alignment." },
      { title: "Reflecting Telescopes", description: "Collects and focuses incoming light in spherical-primary designs with suitable aberration control." },
    ],
  },
  {
    slug: "spherical-convex-mirrors", title: "Spherical Convex Mirrors", imageCount: 4,
    description: "Custom spherical convex mirrors for beam divergence and wide-angle reflective imaging.",
    overview: [
      "A spherical convex mirror has a reflective surface curved outward as a section of a sphere.",
      "It causes collimated incident light to diverge and forms an upright, reduced virtual image of a real object.",
      "Substrate material, diameter or outline, thickness, radius of curvature, focal length, surface figure, and reflective coating can be specified to match the required geometry.",
    ],
    applications: [
      { title: "Wide-Angle Imaging Systems", description: "Expands the observed field by reflecting a larger scene into the camera optics." },
      { title: "Industrial Inspection Cameras", description: "Provides a wider overview of a work area or surrounding components within a reflective imaging arrangement." },
    ],
  },
  {
    slug: "cylindrical-convex-mirrors", title: "Cylindrical Convex Mirrors", imageCount: 6,
    description: "Custom cylindrical convex mirrors for one-axis beam expansion and astigmatism control.",
    overview: [
      "A cylindrical convex mirror has an outward-curved reflective surface with curvature in one direction and no curvature along the cylinder axis.",
      "It increases beam divergence in the curved direction while adding no focusing power along the cylinder axis.",
      "Substrate material, length, width, thickness, cylinder-axis orientation, radius of curvature, surface figure, and reflective coating can be specified from drawings.",
    ],
    applications: [
      { title: "Laser Beam-Shaping Modules", description: "Spreads a beam in one direction to adjust its width or aspect ratio." },
      { title: "Reflective Anamorphic Beam Expanders", description: "Works with a matching concave cylindrical mirror to expand a collimated beam along one axis." },
      { title: "Astigmatism-Correction Modules", description: "Adds diverging power in one direction to adjust the unequal convergence of the two beam axes." },
    ],
  },
  {
    slug: "corner-retroreflectors", title: "Mounted Hollow Corner Cube Retroreflectors", imageCount: 6,
    description: "Mounted hollow corner cube retroreflectors for stable return paths in precision instruments.",
    overview: [
      "A mounted hollow corner cube retroreflector has three mutually perpendicular reflective faces inside a cylindrical housing.",
      "It returns incident light in a parallel, opposite direction through three successive reflections, without transmission through a solid prism.",
      "Aperture, housing dimensions, mounting interfaces, reflective-face material, dihedral-angle tolerances, and reflective coatings can be specified to match drawings or system requirements.",
    ],
    applications: [
      { title: "FTIR Spectrometers", description: "Returns light through an interferometer arm while reducing sensitivity to small angular changes of the moving reflector." },
      { title: "Laser Tracking Systems", description: "Acts as the optical return element in a suitable target assembly for distance and position measurement." },
      { title: "Open-Path Gas Analyzers", description: "Returns a transmitted beam across the measurement path so the analyzer can measure gas absorption." },
      { title: "Optical Delay Lines", description: "Returns the beam from a translating stage to vary optical path length while preserving the return direction." },
    ],
  },
  {
    slug: "hollow-corner-cube-retroreflectors", title: "Hollow Corner Cube Retroreflectors", imageCount: 6,
    description: "Custom hollow corner cube retroreflectors for parallel optical beam return without solid-glass transmission.",
    overview: [
      "A hollow corner cube retroreflector has three mutually perpendicular reflective faces arranged around an open optical cavity.",
      "Three successive reflections return the beam in a direction parallel and opposite to the incident beam, without transmission through a solid prism.",
      "Aperture, overall dimensions, substrate material, dihedral-angle tolerances, reflected wavefront requirements, and reflective coatings can be specified for the intended optical layout.",
    ],
    applications: [
      { title: "FTIR Spectrometers", description: "Returns light through an interferometer arm while reducing sensitivity to small angular changes of the moving reflector." },
      { title: "Laser Tracking Systems", description: "Acts as the optical return element in a suitable target assembly for distance and position measurement." },
      { title: "Open-Path Gas Analyzers", description: "Returns a transmitted beam across the measurement path so the analyzer can measure gas absorption." },
      { title: "Optical Delay Lines", description: "Returns the beam from a translating stage to vary optical path length while preserving the return direction." },
    ],
  },
  {
    slug: "cylindrical-concave-mirrors", title: "Cylindrical Concave Mirrors", imageCount: 6,
    description: "Custom cylindrical concave mirrors for reflective line focusing and one-axis collimation.",
    overview: [
      "A cylindrical concave mirror has an inward-curved reflective surface with curvature in one direction and no curvature along the cylinder axis.",
      "It focuses collimated light into a line or collimates a diverging beam in the curved direction while adding no focusing power along the cylinder axis.",
      "Substrate material, length, width, thickness, cylinder-axis orientation, radius of curvature, focal length, surface figure, and reflective coating can be specified from drawings.",
    ],
    applications: [
      { title: "Laser Line Illumination", description: "Focuses a collimated beam in one direction to create a line for scanning or inspection." },
      { title: "Spectroscopic Instruments", description: "Concentrates light in one dimension to couple it into an entrance slit." },
      { title: "Laser Diode Systems", description: "Collimates one axis of a diverging diode beam as part of a reflective beam-conditioning assembly." },
      { title: "Astigmatism-Correction Modules", description: "Adds converging power in one direction to bring the beam axes toward a common focus." },
    ],
  },
] as const;

export function getMirrorProductDetail(slug: string) {
  return mirrorProductDetails.find((product) => product.slug === slug);
}

export function getMirrorGalleryImages(slug: string, count: number): readonly string[] {
  return Array.from({ length: count }, (_, index) => {
    const position = index + 1;
    const number = String(position).padStart(2, "0");
    const filename = position === 1 ? "01-main.webp" : position === count ? `${number}-collection.webp` : `${number}.webp`;
    return `/products/mirrors/${slug}-gallery/${filename}`;
  });
}
