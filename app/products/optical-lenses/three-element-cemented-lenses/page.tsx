import LensDetailPage from "../../../components/LensDetailPage";
const specifications = [
  ["Material", "Customer-Specified Optical Glass"], ["Design Wavelength", "Customer Specified"], ["Focal Length Tolerance", "±1%"],
  ["Diameter Tolerance", "+0.0 / −0.1 mm"], ["Center Thickness Tolerance", "±0.1 mm"], ["Surface Figure", "λ/4 @ 632.8 nm"],
  ["Surface Quality", "40-20 Scratch-Dig"], ["Centration", "<1 arcmin"], ["Clear Aperture", ">90%"],
  ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;
export default function Page() { return <LensDetailPage title="Three-Element Cemented Lenses" description="Custom three-element cemented lens assemblies for chromatic and optical correction." image="/products/lenses/cemented-lens.webp" specifications={specifications} />; }
