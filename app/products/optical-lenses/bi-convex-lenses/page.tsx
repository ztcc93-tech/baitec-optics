import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";

export default function Page() {
  return (
    <LensDetailPage
      title="Bi-Convex Lenses"
      description="Custom precision bi-convex lenses manufactured in optical glass, fused silica, and crystalline materials for imaging systems, beam focusing, light collimation, laser optics, and other optical applications."
      image="/products/lenses/bi-convex.webp"
      specifications={standardLensSpecifications}
    />
  );
}
