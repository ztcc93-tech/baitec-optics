import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";
import { productMetadata } from "../../seo";

const description = "Custom plano-concave lenses in optical glass or fused silica for beam expansion, laser divergence, Galilean beam expanders and optical system prototyping.";
export const metadata = productMetadata("Plano-Concave Lenses", description, "/products/optical-lenses/plano-concave-lenses", "/products/lenses/plano-concave.webp");

export default function Page() {
  return (
    <LensDetailPage
      title="Plano-Concave Lenses"
      description={description}
      image="/products/lenses/plano-concave.webp"
      specifications={standardLensSpecifications}
    />
  );
}
