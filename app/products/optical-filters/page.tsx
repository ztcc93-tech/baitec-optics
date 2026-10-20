import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Custom Optical Filters | Baitec Optics",
  description: "Custom optical filters manufactured in optical glass and fused silica with controlled surface accuracy, parallelism, clear aperture and optical coatings.",
};

const specifications = [
  ["Material", "JGS1 / N-BK7 / JGS3 / H-K9L"],
  ["Diameter Tolerance", "+0.00 / −0.05 mm"],
  ["Thickness Tolerance", "±0.1 mm"],
  ["Surface Power", "≤1 fringe"],
  ["Surface Irregularity", "≤0.3 fringe"],
  ["Parallelism", "≤2 arcsec"],
  ["Surface Quality", "40-20 Scratch-Dig"],
  ["Clear Aperture", ">90%"],
  ["Edge Bevel", "<0.2 mm × 45°"],
  ["Coating", "AR"],
];

export default function OpticalFiltersPage() {
  return <main>
    <SiteHeader />
    <section className="compact-product-detail section">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Optical Filters</b></div>
      <header className="compact-product-heading"><h1>Optical Filters</h1><p>Custom optical filters manufactured to customer specifications.</p></header>
      <div className="compact-product-grid">
        <div className="compact-product-photo"><img src="/products/categories/06-filters.webp" alt="Custom optical filters" /></div>
        <div className="compact-specifications">
          <h2>Typical Specifications</h2>
          <table className="specifications-table"><tbody>{specifications.map(([label,value])=><tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table>
          <p className="specifications-note"><em>Other specifications, materials, and coatings are available upon request.</em></p>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
