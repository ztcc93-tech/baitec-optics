import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-lenses/plano-convex-lenses");

import PrismDetailPage from "../../../components/PrismDetailPage";
import { getLensGalleryImages } from "../../../data/lensProductDetails";

const images = getLensGalleryImages("plano-convex-lenses");

const overview = [
  "Plano-convex lenses have one flat surface and one convex spherical surface, providing positive optical power in air.",
  "They focus collimated light or collimate light from a point source placed at the appropriate focal position.",
  "Material, dimensions, surface radii, focal length and coating requirements can be specified to your drawings, subject to manufacturing review.",
] as const;

const applications = [
  { title: "Laser Processing & Beam Delivery", description: "Focusing collimated laser beams in marking, engraving and material-processing optical assemblies, with substrate and coating selected for the laser." },
  { title: "Medical & Laboratory Diagnostics", description: "Collecting fluorescence or focusing excitation light in diagnostic analyzer and fluorescence reader optical modules." },
  { title: "Spectroscopy & Chemical Analysis", description: "Collimating light from an entrance slit or focusing collected light within spectrometer and spectrophotometer optical paths." },
  { title: "Microscopy & Scientific Imaging", description: "Collecting and concentrating source light in microscope condenser and illumination assemblies." },
  { title: "Optical Sensors & Measurement", description: "Focusing received light onto photodetectors in optical sensing and measurement modules." },
] as const;

const specificationGrades = [
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

export default function Page() {
  return <PrismDetailPage
    title="Plano-Convex Lenses"
    description="Precision plano-convex lenses for collimation, focusing, and imaging."
    image={images[0]}
    images={images}
    categoryName="Optical Lenses"
    categoryHref="/products/optical-lenses"
    overview={overview}
    applications={applications}
    specificationGrades={specificationGrades}
    specifications={[]}
  />;
}
