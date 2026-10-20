import WindowDetailPage from "../../../components/WindowDetailPage";

const specifications = [
  ["Material", "H-K9L / N-BK7 / Fused Silica"], ["Dimensional Tolerance", "±0.1 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Wedge Angle", "Custom, typically 0.5°–3°"], ["Wedge Angle Tolerance", "±3 arcmin"], ["Surface Flatness", "λ/10 @ 632.8 nm"],
  ["Transmitted Wavefront Error", "≤λ/4 @ 632.8 nm"], ["Surface Quality", "40-20 Scratch-Dig"], ["Clear Aperture", ">90%"],
  ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom Coatings Available"],
] as const;

export default function Page() { return <WindowDetailPage title="Wedge Windows" description="Precision wedge windows manufactured to customer specifications." image="/products/windows/wedge-window.webp" specifications={specifications} />; }
