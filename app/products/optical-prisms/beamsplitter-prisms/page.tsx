import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom beamsplitter prisms with application-specific splitting ratios and coatings for interferometry, imaging, laser systems and optical instruments.";
export const metadata = productMetadata("Beamsplitter Prisms", description, "/products/optical-prisms/beamsplitter-prisms", "/products/prisms/beamsplitter.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "±2 arcsec"],
  ["Surface Power", "N ≤ 1 fringe"], ["Surface Irregularity", "ΔN ≤ 0.1 fringe"], ["Surface Quality", "20-10 Scratch-Dig"],
  ["Parallelism", "≤30 arcsec"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Beamsplitter Prisms" description={description} image="/products/prisms/beamsplitter.webp" specifications={specifications} />; }
