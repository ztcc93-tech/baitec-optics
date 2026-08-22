import PrismDetailPage from "../../../components/PrismDetailPage";

const specifications = [
  ["Material", "H-K9L / N-BK7"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "≤2 arcsec"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"],
  ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Penta Prisms" description="Precision penta prisms manufactured to customer specifications." image="/products/prisms/penta.webp" specifications={specifications} />; }
