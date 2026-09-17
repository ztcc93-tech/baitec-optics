import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";
import { productMetadata } from "../../seo";

const description = "Custom plano-convex lenses in optical glass, fused silica and crystalline materials for laser focusing, beam collimation, imaging and illumination systems.";
export const metadata = productMetadata("Plano-Convex Lenses", description, "/products/optical-lenses/plano-convex-lenses", "/products/lenses/plano-convex.webp");

export default function Page() { return <LensDetailPage title="Plano-Convex Lenses" description={description} image="/products/lenses/plano-convex.webp" specifications={standardLensSpecifications} />; }
