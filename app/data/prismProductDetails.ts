export type PrismApplication = { title: string; description: string };
export type PrismProductDetail = {
  slug: string;
  title: string;
  image: string;
  overview: readonly string[];
  applications: readonly PrismApplication[];
};

type RawPrismProduct = readonly [slug: string, title: string, image: string, overview: string, applications: string];

const rawProducts: readonly RawPrismProduct[] = [
  ["right-angle-prisms", "Right-Angle Prism", "/products/prisms/right-angle-gallery/01-main.png",
    `Right-angle prisms have a 45°–90°–45° triangular cross-section with two perpendicular leg faces and a hypotenuse face.
They redirect light through 90° in the standard single-reflection configuration, using total internal reflection where conditions permit or a reflective coating.
Material, dimensions, angular tolerances, surface flatness, surface quality and coatings can be specified to match your drawings.`,
    `Industrial Inspection Cameras: A right-angle prism folds the viewing path in a compact camera module when a direct line of sight is restricted.

Industrial Borescopes: A right-angle prism in a side-viewing head redirects the viewing direction to inspect internal walls and surfaces.

Laser Beam Delivery: A right-angle prism turns a beam through 90° between optical stages, with its material and coating selected for the laser wavelength.

Laboratory Optical Instruments: A right-angle prism folds an illumination or detection path to fit the optical train inside a compact housing.`],
  ["penta-prisms", "Penta Prisms", "/products/prisms/penta.webp",
    `Penta prisms have a five-sided cross-section with two reflecting faces and separate entrance and exit faces.
Two internal reflections turn the beam through 90° while preserving image handedness, with the deviation relatively insensitive to small prism rotations in the deviation plane.
Material, aperture, dimensions, beam-deviation tolerance, surface flatness, surface quality and reflective or antireflection coatings can be specified to your drawings.`,
    `Surveying Optical Squares: A penta prism establishes a right-angle line of sight for setting out perpendicular survey lines.

Optical Alignment Equipment: A penta prism redirects a reference beam through 90° to establish an orthogonal alignment axis.

Dimensional Metrology Systems: A penta prism turns a measurement beam between perpendicular axes in optical tooling and squareness measurement setups.`],
  ["dove-prisms", "Dove Prisms", "/products/prisms/dove.webp",
    `Dove prisms have an elongated, truncated right-angle form with inclined entrance and exit faces and a long reflecting base.
A Dove prism inverts an image in one transverse direction, and rotating it about its longitudinal optical axis rotates the image through twice the prism rotation angle in a collimated optical path.
Material, aperture, length, face angles, surface quality, wavefront requirements and entrance or exit coatings can be specified to match your drawings.`,
    `Image Rotation Modules: A rotatable Dove prism adjusts image orientation in the collimated section of a camera or viewing optical relay.

Optical Image Derotators: A driven Dove prism counteracts image rotation in an imaging system by rotating at the corresponding half-angle rate.

Optical Research Interferometers: A Dove prism rotates the transverse image or beam profile in image-rotation experiments.`],
  ["corner-cube-prisms", "Corner Cube Prisms", "/products/prisms/corner-cube.webp",
    `Corner cube prisms are solid retroreflectors with an entrance face and three mutually perpendicular reflecting faces.
Three successive reflections return incident light in a direction parallel and opposite to the incoming beam within the usable acceptance angle, although the return beam can be laterally displaced.
Material, aperture, dimensions, dihedral-angle tolerances, return-beam deviation, surface quality and entrance or reflecting-face coatings can be specified to your drawings.`,
    `Surveying Total Stations: A corner cube prism serves as a cooperative target that returns the measurement beam toward the instrument for distance measurement.

Laser Displacement Interferometers: A corner cube prism mounted on a moving stage returns the measurement beam as stage travel changes the optical path length.

Fourier-Transform Spectrometers: A corner cube prism acts as a moving retroreflector in compatible interferometer designs to vary the optical path difference.

Optical Alignment Systems: A corner cube prism returns a reference beam toward its source while tolerating small changes in target orientation.`],
  ["roof-prisms", "Roof Prisms", "/products/prisms/roof.webp",
    `Roof prisms include two reflecting faces that meet at a right angle to form a roof-shaped section.
Successive reflections at the roof faces change image orientation within a viewing system, with the final image direction determined by the complete prism arrangement.
Material, dimensions, roof-angle tolerance, surface flatness, surface quality and coatings can be specified to match your drawings.`,
    `Binoculars & Monoculars: Roof prisms form part of an image-erecting prism assembly that presents an upright view in a compact optical layout.

Telescope Viewing Accessories: A roof prism in a matched erecting assembly corrects image orientation for terrestrial observation.

Optical Viewing Instruments: Roof prism elements redirect the viewing path and control image orientation in compact eyepiece and relay assemblies.`],
  ["powell-prisms", "Powell Prisms", "/products/beam-shaping/powell-lens.webp",
    `Powell lenses have a specially shaped aspheric cylindrical surface rather than the flat faces of a conventional prism.
They redistribute a matched input laser beam into a fan of light that forms a line with a more even intensity profile than a simple cylindrical line-forming lens.
Material, dimensions, aspheric profile, fan angle, input beam diameter, design wavelength and coating requirements can be specified for manufacturing review.`,
    `3D Machine Vision: A Powell lens projects a laser line across a part so a triangulation camera can measure its height profile.

Industrial Alignment Projectors: A Powell lens creates a visible reference line for positioning parts during assembly and setup.

Medical Imaging Positioning Systems: A Powell lens forms a laser reference line used by a positioning module to align a patient with the scan plane.

Flow Cytometers: A Powell lens shapes laser illumination into a line across the sample stream in an optical excitation module.`],
  ["beamsplitter-prisms", "Beamsplitter Prisms", "/products/prisms/beamsplitter.webp",
    `Beamsplitter prisms contain a beam-dividing optical interface within a prism or prism assembly.
They divide incident light into reflected and transmitted channels according to the specified interface coating and operating conditions.
Prism geometry, material, dimensions, operating wavelength range, reflection and transmission requirements, surface quality and coatings can be specified to your drawings.`,
    `Industrial Vision Systems: A beamsplitter prism routes illumination toward a target while allowing returned light to reach a camera in a shared-axis inspection module.

Laser Monitoring Modules: A beamsplitter prism directs part of the incident beam toward a photodetector for power monitoring.

Optical Interferometers: A beamsplitter prism divides and recombines light between reference and measurement paths with a coating matched to the system.

Imaging & Detection Instruments: A beamsplitter prism distributes collected light between separate viewing or detector channels.`],
  ["cube-beamsplitters", "Cube Beamsplitters", "/products/prisms/cube.webp",
    `Cube beamsplitters typically consist of two right-angle prisms joined at their hypotenuse faces, with a beam-dividing coating at the internal diagonal interface.
They provide transmitted and reflected output paths, usually separated by 90°, with the splitting behavior determined by the internal coating.
Material, cube size, wavelength range, splitting requirements, beam-deviation tolerance, surface quality and external antireflection coatings can be specified to your drawings.`,
    `Machine Vision Inspection: A cube beamsplitter couples illumination into the camera viewing axis for inspection of surfaces facing the imaging system.

Laser Instrumentation: A cube beamsplitter sends light into a monitoring channel while transmitting light along the main optical path.

Interferometric Measurement: A cube beamsplitter forms reference and measurement branches and recombines the returned beams in a compatible interferometer.

Camera & Detector Modules: A cube beamsplitter supplies two optical channels from a common input beam for simultaneous viewing or detection.`],
  ["cemented-prism-assemblies", "Cemented Prism Assemblies", "/homepage/categories/optical-prisms.png",
    `Cemented prism assemblies consist of two or more optical prisms bonded together at selected mating faces with optical adhesive.
The combined prism geometry and any interface coatings control how light is redirected or distributed through the assembly.
Prism materials, component geometry, interface coatings, adhesive requirements, relative alignment and external surface quality can be specified to match your drawings.`,
    `Imaging & Viewing Instruments: A cemented prism assembly combines successive reflections to route an image through a compact viewing or camera module.

Industrial Inspection Equipment: A cemented prism assembly redirects illumination or observation paths to fit the required inspection geometry.

Spectroscopy & Analytical Instruments: A cemented prism assembly routes light between illumination, sample and detection sections within a specified instrument layout.

Laser & Optical Measurement Systems: A cemented prism assembly combines multiple beam-routing surfaces into one component for the prescribed measurement path.`],
  ["cemented-prism-assemblies-variant-1", "Cemented Prism Assemblies", "/homepage/categories/optical-prisms.png",
    `Cemented prism assemblies consist of two or more optical prisms bonded together at selected mating faces with optical adhesive.
The combined prism geometry and any interface coatings control how light is redirected or distributed through the assembly.
Prism materials, component geometry, interface coatings, adhesive requirements, relative alignment and external surface quality can be specified to match your drawings.`,
    `Imaging & Viewing Instruments: A cemented prism assembly combines successive reflections to route an image through a compact viewing or camera module.

Industrial Inspection Equipment: A cemented prism assembly redirects illumination or observation paths to fit the required inspection geometry.

Spectroscopy & Analytical Instruments: A cemented prism assembly routes light between illumination, sample and detection sections within a specified instrument layout.

Laser & Optical Measurement Systems: A cemented prism assembly combines multiple beam-routing surfaces into one component for the prescribed measurement path.`],
  ["cemented-prism-assemblies-variant-2", "Cemented Prism Assemblies", "/homepage/categories/optical-prisms.png",
    `Cemented prism assemblies consist of two or more optical prisms bonded together at selected mating faces with optical adhesive.
The combined prism geometry and any interface coatings control how light is redirected or distributed through the assembly.
Prism materials, component geometry, interface coatings, adhesive requirements, relative alignment and external surface quality can be specified to match your drawings.`,
    `Imaging & Viewing Instruments: A cemented prism assembly combines successive reflections to route an image through a compact viewing or camera module.

Industrial Inspection Equipment: A cemented prism assembly redirects illumination or observation paths to fit the required inspection geometry.

Spectroscopy & Analytical Instruments: A cemented prism assembly routes light between illumination, sample and detection sections within a specified instrument layout.

Laser & Optical Measurement Systems: A cemented prism assembly combines multiple beam-routing surfaces into one component for the prescribed measurement path.`],
  ["air-spaced-prism-assemblies", "Air-Spaced Prism Assemblies", "/homepage/categories/optical-prisms.png",
    `Air-spaced prism assemblies contain two or more prism elements with a defined air gap between selected optical faces.
The air-gap interfaces and prism geometry control reflection and transmission to route light through the specified optical paths.
Prism materials, face angles, gap thickness, relative alignment, mounting requirements, surface quality and coatings can be specified to match your assembly drawings.`,
    `Projection Optical Engines: An air-spaced prism assembly routes illumination and image light through the optical paths defined by the projection design.

Imaging & Viewing Modules: An air-spaced prism assembly combines multiple reflections to arrange the viewing path within a compact instrument.

Optical Test Instruments: An air-spaced prism assembly provides specified reflecting and transmitting interfaces for routing beams between experimental or measurement channels.`],
  ["custom-shaped-prisms-variant-25", "Custom-Shaped Prisms", "/homepage/categories/optical-prisms.png",
    `Custom-shaped prisms have polished optical faces and an outer geometry defined by the required optical layout and mounting space.
Their face angles and surface treatments direct light along a prescribed path through refraction, reflection or a combination of both.
Material, outer profile, face angles, clear aperture, surface flatness, surface quality and coatings can be specified to match your drawings.`,
    `Industrial Inspection Modules: A custom-shaped prism redirects the camera viewing or illumination path around mechanical constraints in an inspection head.

Laser Beam Delivery Assemblies: A custom-shaped prism steers a beam between optical stages where standard prism shapes do not fit the required layout.

Spectroscopy & Analytical Equipment: A custom-shaped prism routes light between optical components inside an instrument with a defined packaging envelope.`],
  ["custom-shaped-prisms-variant-26", "Custom-Shaped Prisms", "/homepage/categories/optical-prisms.png",
    `Custom-shaped prisms have polished optical faces and an outer geometry defined by the required optical layout and mounting space.
Their face angles and surface treatments direct light along a prescribed path through refraction, reflection or a combination of both.
Material, outer profile, face angles, clear aperture, surface flatness, surface quality and coatings can be specified to match your drawings.`,
    `Industrial Inspection Modules: A custom-shaped prism redirects the camera viewing or illumination path around mechanical constraints in an inspection head.

Laser Beam Delivery Assemblies: A custom-shaped prism steers a beam between optical stages where standard prism shapes do not fit the required layout.

Spectroscopy & Analytical Equipment: A custom-shaped prism routes light between optical components inside an instrument with a defined packaging envelope.`],
  ["rectangular-prisms-optical-glass-blocks", "Rectangular Prisms", "/homepage/categories/optical-prisms.png",
    `Rectangular optical prisms are transparent glass blocks or bars with flat rectangular faces and nominally parallel opposing surfaces.
Light transmitted through a pair of parallel faces acquires additional optical path length and, at oblique incidence, a lateral displacement.
Material, length, cross-section, face parallelism, squareness, surface flatness, surface quality and coatings can be specified to your drawings.`,
    `Interferometer Optical Paths: A rectangular glass block introduces a specified glass path in one arm for optical path or dispersion compensation.

Beam Positioning Modules: A rectangular block shifts a transmitted beam laterally when used at a prescribed oblique angle between parallel optical faces.

Optical Test Benches: A rectangular optical block provides a defined thickness of glass for evaluating transmission and optical path effects.`],
  ["hexagonal-prisms-optical-rods", "Hexagonal Prisms", "/homepage/categories/optical-prisms.png",
    `Hexagonal optical rods have an elongated six-sided cross-section with flat end faces and longitudinal side faces.
In a light-guide configuration, repeated total internal reflections can transport and mix light between the end faces when the input angles and surrounding medium meet the required conditions.
Material, rod length, cross-section, end-face geometry, side-face finish and end-face coatings can be specified to match your drawings.`,
    `LED Illumination Modules: A hexagonal rod used as a light pipe mixes incoming rays before light is delivered to the illuminated area.

Projection & Display Illumination: A hexagonal integrating rod redistributes source light before downstream illumination optics in a matched light-guide design.

Optical Inspection Lighting: A hexagonal light-guide rod transports and mixes source light before the inspection illumination stage.`],
  ["cemented-prism-assemblies-unnumbered", "Cemented Prism Assemblies", "/homepage/categories/optical-prisms.png",
    `Cemented prism assemblies consist of two or more optical prisms bonded together at selected mating faces with optical adhesive.
The combined prism geometry and any interface coatings control how light is redirected or distributed through the assembly.
Prism materials, component geometry, interface coatings, adhesive requirements, relative alignment and external surface quality can be specified to match your drawings.`,
    `Imaging & Viewing Instruments: A cemented prism assembly combines successive reflections to route an image through a compact viewing or camera module.

Industrial Inspection Equipment: A cemented prism assembly redirects illumination or observation paths to fit the required inspection geometry.

Spectroscopy & Analytical Instruments: A cemented prism assembly routes light between illumination, sample and detection sections within a specified instrument layout.

Laser & Optical Measurement Systems: A cemented prism assembly combines multiple beam-routing surfaces into one component for the prescribed measurement path.`],
] as const;

const parseApplications = (value: string): PrismApplication[] => value.split("\n\n").map((item) => {
  const separator = item.indexOf(":");
  return { title: item.slice(0, separator), description: item.slice(separator + 1).trim() };
});

export const prismProductDetails: readonly PrismProductDetail[] = rawProducts.map(([slug, title, image, overview, applications]) => ({
  slug,
  title,
  image,
  overview: overview.split("\n"),
  applications: parseApplications(applications),
}));

export const prismSpecificationGrades = [
  { title: "Standard Grade", items: [
    ["Materials", "N-BK7, Quartz, CaF₂, MgF₂, ZnSe, ZnS,\nand other optical glass upon request"],
    ["Dimensions", "5–250 mm"], ["Angle Tolerance", "±3′"], ["Surface Flatness", "λ/4 @ 632.8 nm"],
    ["Surface Quality\n(Scratch–Dig)", "40–20"], ["Coating", "AR / HR, etc., to customer requirements"],
  ]},
  { title: "Precision Grade", items: [
    ["Materials", "N-BK7, Quartz, CaF₂, MgF₂, ZnSe, ZnS,\nand other optical glass upon request"],
    ["Dimensions", "5–250 mm"], ["Angle Tolerance", "±1″–±30″"], ["Surface Flatness", "λ/10 @ 632.8 nm"],
    ["Surface Quality\n(Scratch–Dig)", "20–10"], ["Coating", "AR / HR, etc., to customer requirements"],
  ]},
] as const;

export const getPrismProductDetail = (slug: string) => prismProductDetails.find((product) => product.slug === slug);

const prismGalleryCounts: Readonly<Record<string, number>> = {
  "right-angle-prisms": 6,
  "penta-prisms": 6,
  "dove-prisms": 6,
  "corner-cube-prisms": 6,
  "roof-prisms": 7,
  "powell-prisms": 6,
  "beamsplitter-prisms": 7,
  "cube-beamsplitters": 8,
  "cemented-prism-assemblies": 5,
  "cemented-prism-assemblies-variant-1": 6,
  "cemented-prism-assemblies-variant-2": 6,
  "air-spaced-prism-assemblies": 6,
  "custom-shaped-prisms-variant-25": 6,
  "custom-shaped-prisms-variant-26": 6,
  "rectangular-prisms-optical-glass-blocks": 5,
  "hexagonal-prisms-optical-rods": 6,
  "cemented-prism-assemblies-unnumbered": 6,
};

export const getPrismGalleryImages = (slug: string): readonly string[] => {
  const count = prismGalleryCounts[slug];
  if (!count) return [];

  return Array.from({ length: count }, (_, index) => {
    const position = index + 1;
    if (position === 1) return `/products/prisms/${slug}-gallery/01-main.webp`;
    if (position === count) {
      return `/products/prisms/${slug}-gallery/${String(position).padStart(2, "0")}-collection.webp`;
    }
    return `/products/prisms/${slug}-gallery/${String(position).padStart(2, "0")}.webp`;
  });
};
