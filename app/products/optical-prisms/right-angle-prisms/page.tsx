import PrismDetailPage from "../../../components/PrismDetailPage";

const specifications = [
  ["Material", "H-K9L / N-BK7"],
  ["Dimensional Tolerance", "±0.1 mm"],
  ["Angle Tolerance", "45° ± 2 arcsec"],
  ["Surface Flatness", "λ/10 @ 632.8 nm"],
  ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"],
  ["Bevel", "<0.2 mm × 45°"],
  ["Coating", "Custom Coatings Available"],
];

export default function RightAnglePrismsPage() {
  return <PrismDetailPage title="Right-Angle Prisms" description="Precision right-angle prisms manufactured to customer specifications." image="/products/prisms/right-angle.webp" specifications={specifications} />;
}
