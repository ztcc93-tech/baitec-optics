import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom optical cube prisms manufactured in N-BK7 or equivalent glass for beam splitting, beam combining, imaging and optical instrument assemblies.";
export const metadata = productMetadata("Cube Prisms", description, "/products/optical-prisms/cube-prisms", "/products/prisms/cube.webp");

const specifications = [
  ["Material", "H-K9L / JGS1"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "±3 arcsec"],
  ["Surface Power", "N ≤ 1 fringe"], ["Surface Irregularity", "ΔN ≤ 0.1 fringe"], ["Surface Quality", "20-10 Scratch-Dig"],
  ["Parallelism", "≤1 arcsec"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Cube Prisms" description={description} image="/products/prisms/cube.webp" specifications={specifications} />; }
