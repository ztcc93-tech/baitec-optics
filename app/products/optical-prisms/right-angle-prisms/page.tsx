import PrismDetailPage from "../../../components/PrismDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom right-angle prisms for 90-degree beam turning, image reflection, laser alignment, periscopes and optical instrument assemblies.";
export const metadata = productMetadata("Right-Angle Prisms", description, "/products/optical-prisms/right-angle-prisms", "/products/prisms/right-angle.webp");

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
  return <PrismDetailPage title="Right-Angle Prisms" description={description} image="/products/prisms/right-angle.webp" specifications={specifications} />;
}
