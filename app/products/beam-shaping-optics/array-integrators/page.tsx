import BeamShapingDetailPage from "../../../components/BeamShapingDetailPage";

const specifications = [
  ["Material", "JGS1 / N-BK7 / JGS3 / H-K9L"], ["Dimensional Tolerance", "+0.00 / −0.05 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Power", "1 fringe"], ["Local Irregularity", "0.3 fringe"], ["Parallelism", "±2 arcsec"],
  ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"],
  ["Coating", "Custom AR Coatings Available"],
] as const;

export default function Page() { return <BeamShapingDetailPage title="Array Integrators" description="Precision array integrators for beam homogenization and illumination shaping." image="/products/beam-shaping/integrator-array.webp" specifications={specifications} />; }
