import PrismDetailPage from "../../../components/PrismDetailPage";

const specifications = [
  ["Material", "H-K9L / JGS1"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "±3 arcsec"],
  ["Surface Power", "N ≤ 1 fringe"], ["Surface Irregularity", "ΔN ≤ 0.1 fringe"], ["Surface Quality", "20-10 Scratch-Dig"],
  ["Parallelism", "≤1 arcsec"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Cube Prisms" description="Precision cube prisms manufactured to customer specifications." image="/products/prisms/cube.webp" specifications={specifications} />; }
