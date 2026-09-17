import LensDetailPage from "../../../components/LensDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom optical domes in sapphire, fused silica and optical glass for wide-angle imaging, sensor protection, surveillance and harsh-environment optical systems.";
export const metadata = productMetadata("Optical Domes", description, "/products/optical-lenses/optical-domes", "/products/lenses/optical-dome.webp");

const specifications = [
  ["Material", "Sapphire / Fused Silica / N-BK7 / H-K9L"], ["Outer Diameter Tolerance", "+0.0 / −0.1 mm"],
  ["Wall Thickness Tolerance", "±0.1 mm"], ["Surface Figure", "λ/4 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Concentricity", "<0.05 mm"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;
export default function Page() { return <LensDetailPage title="Optical Domes" description={description} image="/products/lenses/optical-dome.webp" specifications={specifications} />; }
