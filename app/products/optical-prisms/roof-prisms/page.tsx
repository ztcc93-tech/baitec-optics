import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom roof prisms for image erection and beam folding in binoculars, telescopes, viewing systems and compact optical instruments.";
export const metadata = productMetadata("Roof Prisms", description, "/products/optical-prisms/roof-prisms", "/products/prisms/roof.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "±2 arcsec"],
  ["Surface Power", "N ≤ 1 fringe"], ["Surface Irregularity", "ΔN ≤ 0.1 fringe"], ["Surface Quality", "20-10 Scratch-Dig"],
  ["Parallelism", "≤30 arcsec"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Roof Prisms" description={description} image="/products/prisms/roof.webp" specifications={specifications} />; }
