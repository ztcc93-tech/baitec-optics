import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom penta prisms for fixed 90-degree beam deviation in surveying, alignment, metrology and optical instrument systems.";
export const metadata = productMetadata("Penta Prisms", description, "/products/optical-prisms/penta-prisms", "/products/prisms/penta.webp");

const specifications = [
  ["Material", "H-K9L / N-BK7"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "≤2 arcsec"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"],
  ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <PrismDetailPage title="Penta Prisms" description={description} image="/products/prisms/penta.webp" specifications={specifications} />; }
