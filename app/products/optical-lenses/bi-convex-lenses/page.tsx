import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";
import { productMetadata } from "../../seo";

const description = "Custom bi-convex lenses in optical glass, fused silica and crystalline materials for imaging systems, beam focusing, collimation and laser optics.";
export const metadata = productMetadata("Bi-Convex Lenses", description, "/products/optical-lenses/bi-convex-lenses", "/products/lenses/bi-convex.webp");

export default function Page() {
  return (
    <LensDetailPage
      title="Bi-Convex Lenses"
      description={description}
      image="/products/lenses/bi-convex.webp"
      specifications={standardLensSpecifications}
    />
  );
}
