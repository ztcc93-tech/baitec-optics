import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";
import { productMetadata } from "../../seo";

const description = "Custom bi-concave lenses in optical glass or fused silica for beam expansion, laser beam divergence, image reduction and optical system prototyping.";
export const metadata = productMetadata("Bi-Concave Lenses", description, "/products/optical-lenses/bi-concave-lenses", "/products/lenses/bi-concave.webp");

export default function Page() { return <LensDetailPage title="Bi-Concave Lenses" description={description} image="/products/lenses/bi-concave.webp" specifications={standardLensSpecifications} />; }
