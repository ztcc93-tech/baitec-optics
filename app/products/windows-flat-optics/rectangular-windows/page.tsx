import WindowDetailPage from "../../../components/WindowDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom rectangular and square optical windows in optical glass or fused silica for sensors, cameras, laser systems and protective enclosures.";
export const metadata = productMetadata("Rectangular Optical Windows", description, "/products/windows-flat-optics/rectangular-windows", "/products/windows/rectangular-window.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Dimensional Tolerance", "+0.0 / −0.1 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Parallelism", "±2 arcsec"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "AR Coating"],
] as const;

export default function Page() { return <WindowDetailPage title="Rectangular Windows" description={description} image="/products/windows/rectangular-window.webp" specifications={specifications} />; }
