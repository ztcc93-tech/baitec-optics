import WindowDetailPage from "../../../components/WindowDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom round optical windows in optical glass or fused silica for sensor protection, imaging, laser systems and optical instrument housings.";
export const metadata = productMetadata("Round Optical Windows", description, "/products/windows-flat-optics/round-windows", "/products/windows/round-window.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Diameter Tolerance", "+0.0 / −0.1 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Parallelism", "±2 arcsec"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "AR Coating"],
] as const;

export default function Page() { return <WindowDetailPage title="Round Windows" description={description} image="/products/windows/round-window.webp" specifications={specifications} />; }
