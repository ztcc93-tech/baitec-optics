import MirrorDetailPage from "../../../components/MirrorDetailPage";

const specifications = [
  ["Material", "Sapphire / N-BK7 / H-K9L / Fused Silica"], ["Design Wavelength", "Customer Specified"],
  ["Dimensional Tolerance", "+0.0 / −0.1 mm"], ["Thickness Tolerance", "±0.2 mm"], ["Surface Flatness", "λ/2 @ 632.8 nm"],
  ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"],
  ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <MirrorDetailPage title="Flat Mirrors" description="Precision flat mirrors manufactured with custom reflective coatings." image="/products/mirrors/flat-mirror.webp" specifications={specifications} />; }
