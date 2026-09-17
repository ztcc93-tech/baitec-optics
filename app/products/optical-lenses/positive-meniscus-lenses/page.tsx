import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";
import { productMetadata } from "../../seo";

const description = "Custom positive meniscus lenses in optical glass or fused silica for beam focusing, collimation, imaging systems and spherical aberration control.";
export const metadata = productMetadata("Positive Meniscus Lenses", description, "/products/optical-lenses/positive-meniscus-lenses", "/products/lenses/meniscus.webp");

export default function Page() { return <LensDetailPage title="Positive Meniscus Lenses" description={description} image="/products/lenses/meniscus.webp" specifications={standardLensSpecifications} />; }
