import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom linear prisms for laser line generation, beam deviation, illumination shaping, machine vision and optical inspection systems.";
export const metadata = productMetadata("Linear Prisms", description, "/products/optical-prisms/linear-prisms", "/products/prisms/linear.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "±3 arcsec"],
  ["Surface Power", "N ≤ 1 fringe"], ["Surface Irregularity", "ΔN ≤ 0.1 fringe"], ["Surface Quality", "20-10 Scratch-Dig"],
  ["Parallelism", "≤30 arcsec"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Linear Prisms" description={description} image="/products/prisms/linear.webp" specifications={specifications} />; }
