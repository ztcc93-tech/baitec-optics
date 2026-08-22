import WindowDetailPage from "../../../components/WindowDetailPage";

const specifications = [
  ["Material", "ZnSe"], ["Dimensional Tolerance", "+0.0 / −0.1 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Parallelism", "≤2 arcmin"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "Custom AR Coatings Available"],
] as const;

export default function Page() { return <WindowDetailPage title="Infrared Windows" description="Precision ZnSe infrared windows manufactured to customer specifications." image="/products/windows/infrared-window.webp" specifications={specifications} />; }
