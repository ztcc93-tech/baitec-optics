import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/windows-flat-optics/round-optical-windows");

import PrismDetailPage from "../../../components/PrismDetailPage";

const images = [
  "/products/windows/round-optical-windows-gallery/01-main.webp",
  "/products/windows/round-optical-windows-gallery/02.webp",
  "/products/windows/round-optical-windows-gallery/03.webp",
  "/products/windows/round-optical-windows-gallery/04.webp",
  "/products/windows/round-optical-windows-gallery/05.webp",
  "/products/windows/round-optical-windows-gallery/06-collection.webp",
] as const;

const overview = [
  "Round optical windows are circular plates with two polished, nominally parallel faces.",
  "They transmit light through a protective barrier without intentionally focusing or diverging the beam.",
  "Material, diameter, thickness, surface flatness, parallelism, and antireflection coatings can be specified to suit the drawing and operating wavelength.",
] as const;

const applications = [
  { title: "Industrial Cameras", description: "A window at the camera housing aperture protects internal optics from dust while allowing image capture." },
  { title: "Laser Processing Heads", description: "A replaceable cover window in the beam delivery head shields the focusing optics from process debris." },
  { title: "Optical Sensors", description: "A window in the sensor housing provides an optical entrance for emitted or received light." },
  { title: "Laboratory Instruments", description: "A window closes an optical access port while transmitting the measurement beam." },
] as const;

const specificationGrades = [
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

export default function Page() {
  return <PrismDetailPage
    title="Round Optical Windows"
    description="Custom round optical windows for protection and precision light transmission."
    image={images[0]}
    images={images}
    categoryName="Optical Windows"
    categoryHref="/products/windows-flat-optics"
    overview={overview}
    applications={applications}
    specificationGrades={specificationGrades}
    specifications={[]}
  />;
}
