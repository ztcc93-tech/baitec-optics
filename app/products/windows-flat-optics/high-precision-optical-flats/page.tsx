import WindowDetailPage from "../../../components/WindowDetailPage";

const specifications = [
  ["Material", "N-BK7 / H-K9L"], ["Diameter Tolerance", "+0.0 / −0.1 mm"], ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Flatness", "λ/4 @ 632.8 nm"], ["Parallelism", "±2 arcsec"], ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"], ["Bevel", "<0.2 mm × 45°"], ["Coating", "AR Coating"],
] as const;

export default function Page() { return <WindowDetailPage title="High-Precision Optical Flats" description="High-precision optical flats manufactured to customer specifications." image="/products/windows/high-precision-flat.webp" specifications={specifications} />; }
