export type CatalogProduct = { name: string; slug: string; href: string };
export type CatalogCategory = {
  id: string; number: string; name: string; shortName: string; note: string;
  href: string; image: string; products: CatalogProduct[]; comingSoon?: boolean;
};

const products = (base: string, entries: [string, string][]): CatalogProduct[] =>
  entries.map(([name, slug]) => ({ name, slug, href: `${base}/${slug}` }));

export const productCatalog: CatalogCategory[] = [
  { id: "lenses", number: "01", name: "Optical Lenses", shortName: "Optical Lenses", note: "Focusing · Imaging · Collimation", href: "/products/optical-lenses", image: "/homepage/categories/optical-lenses.png", products: products("/products/optical-lenses", [
    ["Plano-Convex Lenses","plano-convex-lenses"], ["Large Plano-Concave Lenses","large-plano-concave-lenses"], ["Bi-Convex Lenses","bi-convex-lenses"], ["Bi-Concave Lenses","bi-concave-lenses"], ["Meniscus Lenses","meniscus-lenses"], ["Plano-Convex Cylindrical Lenses","plano-convex-cylindrical-lenses"], ["Cemented Lenses","cemented-lenses"], ["Toroidal Lenses","toroidal-lenses"], ["Thick Plano-Convex Lenses","thick-plano-convex-lenses"], ["Meniscus Cylindrical Lenses","meniscus-cylindrical-lenses"], ["Large Meniscus Cylindrical Lenses","large-meniscus-cylindrical-lenses"], ["Large Plano-Convex Cylindrical Lenses","large-plano-convex-cylindrical-lenses"], ["Large Plano-Concave Cylindrical Lenses","large-plano-concave-cylindrical-lenses"], ["Small Axicon Lenses","small-axicon-lenses"],
  ])},
  { id: "windows", number: "02", name: "Optical Windows", shortName: "Optical Windows", note: "Protection · Transmission · Reference", href: "/products/windows-flat-optics", image: "/homepage/categories/optical-windows.png", products: products("/products/windows-flat-optics", [
    ["Round Optical Windows","round-optical-windows"], ["Rectangular Optical Windows","rectangular-optical-windows"], ["Wedged Optical Windows","wedged-optical-windows"], ["Octagonal Optical Windows","octagonal-optical-windows"], ["Optical Filters","optical-filters"], ["Aerospace Optical Windows","aerospace-optical-windows"],
  ])},
  { id: "domes", number: "03", name: "Optical Domes", shortName: "Optical Domes", note: "Protection · Wide-angle transmission", href: "/products/optical-domes", image: "/homepage/categories/optical-domes.png", products: products("/products/optical-domes", [["K9 / BK7 Optical Dome", "k9-bk7-optical-dome"]]) },
  { id: "prisms", number: "04", name: "Optical Prisms", shortName: "Optical Prisms", note: "Steering · Rotation · Splitting", href: "/products/optical-prisms", image: "/homepage/categories/optical-prisms.png", products: products("/products/optical-prisms", [
    ["Right-Angle Prism","right-angle-prisms"], ["Penta Prisms","penta-prisms"], ["Dove Prisms","dove-prisms"], ["Corner Cube Prisms","corner-cube-prisms"], ["Roof Prisms","roof-prisms"], ["Powell Prisms","powell-prisms"], ["Beamsplitter Prisms","beamsplitter-prisms"], ["Cube Beamsplitters","cube-beamsplitters"], ["Cemented Prism Assemblies","cemented-prism-assemblies"], ["Air-Spaced Prism Assemblies","air-spaced-prism-assemblies"], ["Custom-Shaped Prisms","custom-shaped-prisms-variant-25"], ["Rectangular Prisms","rectangular-prisms-optical-glass-blocks"], ["Hexagonal Prisms","hexagonal-prisms-optical-rods"], ])},
  { id: "mirrors", number: "05", name: "Optical Mirrors", shortName: "Optical Mirrors", note: "Reflection · Focusing · Beam steering", href: "/products/optical-mirrors", image: "/homepage/categories/optical-mirrors.png", products: products("/products/optical-mirrors", [
    ["Spherical Concave Mirrors","spherical-concave-mirrors"], ["Spherical Convex Mirrors","spherical-convex-mirrors"], ["Cylindrical Convex Mirrors","cylindrical-convex-mirrors"], ["Mounted Hollow Corner Cube Retroreflectors","corner-retroreflectors"], ["Hollow Corner Cube Retroreflectors","hollow-corner-cube-retroreflectors"], ["Cylindrical Concave Mirrors","cylindrical-concave-mirrors"],
  ])},
  { id: "infrared", number: "06", name: "Infrared Optics", shortName: "Infrared Optics", note: "IR materials · Precision processing", href: "/products/infrared-optics", image: "/homepage/categories/infrared-optics.png", products: products("/products/infrared-optics", [["ZnSe Optical Windows", "znse-optical-windows"]]) },
  { id: "custom", number: "07", name: "Custom Optics & OEM Optical Solutions", shortName: "Custom Optics & OEM", note: "Design · Processing · Coating", href: "/products/oem-optical-solutions", image: "/homepage/categories/custom-oem-optics.png", products: products("/products/oem-optical-solutions", [
    ["Optical Homogenizer","optical-homogenizer-integrator"], ["Medium Optical Homogenizer","medium-optical-homogenizer-integrator"], ["Small Optical Homogenizer","small-optical-homogenizer-integrator"], ["Mini Optical Homogenizer","miniature-optical-homogenizer-integrator"], ["Irregular Prism","special-material-irregular-shaped-prism"], ["Custom Prism","custom-optical-prism"], ["Precision Optical Cone","custom-precision-optical-cone"], ["Custom Corner Cube","custom-corner-cube-prism"], ["Spherical Lens","custom-spherical-lens"], ["Optical Encoder Disc","optical-encoder-disc"], ["Quartz Tube","quartz-glass-tube"],
  ])},
];

export const getCategory = (id: string) => productCatalog.find((category) => category.id === id);
export const totalCatalogProducts = productCatalog.reduce((sum, category) => sum + category.products.length, 0);
