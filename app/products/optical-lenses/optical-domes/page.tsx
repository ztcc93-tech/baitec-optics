import LensDetailPage from "../../../components/LensDetailPage";
const specifications = [
  ["Material", "Sapphire / Fused Silica / N-BK7 / H-K9L"], ["Outer Diameter Tolerance", "+0.0 / −0.1 mm"],
  ["Wall Thickness Tolerance", "±0.1 mm"], ["Surface Figure", "λ/4 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Concentricity", "<0.05 mm"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;
export default function Page() { return <LensDetailPage title="Optical Domes" description="Precision optical domes for wide-angle systems, sensors, and harsh environments." image="/products/lenses/optical-dome.webp" specifications={specifications} />; }
