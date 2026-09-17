import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom corner cube prisms and retroreflectors for surveying, laser tracking, alignment, metrology and optical distance measurement.";
export const metadata = productMetadata("Corner Cube Prisms", description, "/products/optical-prisms/corner-cube-prisms", "/products/prisms/corner-cube.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "±2 arcsec"],
  ["Surface Power", "N ≤ 0.25 fringe"], ["Surface Irregularity", "ΔN ≤ 0.1 fringe"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Corner Cube Prisms" description={description} image="/products/prisms/corner-cube.webp" specifications={specifications} />; }
