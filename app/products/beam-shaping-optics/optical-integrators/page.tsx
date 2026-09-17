import BeamShapingDetailPage from "../../../components/BeamShapingDetailPage";
import { productMetadata } from "../../seo";

const description = "Custom optical integrators and light-pipe homogenizers for uniform illumination, projection, laser processing and inspection systems.";
export const metadata = productMetadata("Optical Integrators", description, "/products/beam-shaping-optics/optical-integrators", "/products/beam-shaping/optical-integrator.webp");

const specifications = [
  ["Material", "JGS1 / N-BK7 / JGS3 / H-K9L"], ["Diameter Tolerance", "+0.00 / −0.05 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Power", "1 fringe"], ["Local Irregularity", "0.3 fringe"], ["Parallelism", "±2 arcsec"],
  ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"],
  ["Coating", "Custom AR Coatings Available"],
] as const;

export default function Page() { return <BeamShapingDetailPage title="Optical Integrators" description={description} image="/products/beam-shaping/optical-integrator.webp" specifications={specifications} />; }
