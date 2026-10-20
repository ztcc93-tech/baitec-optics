import MirrorDetailPage from "../../../components/MirrorDetailPage";

const specifications = [
  ["Material", "Sapphire / N-BK7 / H-K9L / Fused Silica"], ["Design Wavelength", "Customer Specified"],
  ["Focal Length Tolerance", "±1%"], ["Diameter Tolerance", "+0.0 / −0.1 mm"], ["Center Thickness Tolerance", "±0.2 mm"],
  ["Surface Figure", "λ/2 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"], ["Centration", "<1 arcmin"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <MirrorDetailPage title="Spherical Mirrors" description="Precision spherical mirrors manufactured to customer specifications." image="/products/mirrors/spherical-mirror.webp" specifications={specifications} />; }
