import BeamShapingDetailPage from "../../../components/BeamShapingDetailPage";

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Dimensional Tolerance", "±0.1 mm"], ["Angle Tolerance", "<1 arcmin"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"],
  ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <BeamShapingDetailPage title="Powell Prisms" description="Precision Powell prisms for uniform laser line generation." image="/products/beam-shaping/powell-lens.webp" specifications={specifications} />; }
