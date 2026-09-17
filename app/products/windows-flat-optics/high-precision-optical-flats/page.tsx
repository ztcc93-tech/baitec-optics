import WindowDetailPage from "../../../components/WindowDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom high-precision optical flats for interferometry, calibration, surface testing, metrology and reference applications.";
export const metadata = productMetadata("High-Precision Optical Flats", description, "/products/windows-flat-optics/high-precision-optical-flats", "/products/windows/high-precision-flat.webp");

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Diameter Tolerance", "+0.0 / −0.1 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Parallelism", "±2 arcsec"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "AR Coating"],
] as const;

export default function Page() { return <WindowDetailPage title="High-Precision Optical Flats" description={description} image="/products/windows/high-precision-flat.webp" specifications={specifications} />; }
