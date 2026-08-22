import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const capabilities = [
  "Spherical and aspherical infrared lenses",
  "Plano-convex, plano-concave and meniscus lenses",
  "Infrared windows and protective windows",
  "Custom dimensions, surface accuracy and edge configurations",
  "AR, BBAR and other infrared optical coatings available",
];

export default function InfraredOpticsPage() {
  return <main>
    <SiteHeader />
    <section className="infrared-detail section">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Infrared Optics</b></div>
      <header className="infrared-heading">
        <p className="eyebrow"><span /> Infrared materials · Custom manufacturing</p>
        <h1>Infrared Optics</h1>
        <p>Custom infrared lenses and optical components manufactured to application-specific requirements.</p>
      </header>
      <div className="infrared-grid">
        <div className="infrared-image"><img src="/products/categories/07-infrared.webp" alt="Custom infrared optical components" /></div>
        <div className="infrared-copy">
          <section><h2>Custom Infrared Optics</h2><p>Baitec Optics manufactures custom infrared lenses and optical components using CaF₂, BaF₂, ZnSe, silicon, germanium, GaAs, sapphire and other infrared materials. Dimensions, surface quality, surface accuracy and coatings can be customized according to application requirements.</p></section>
          <section><h3>Infrared Optical Materials</h3><p>We manufacture custom infrared lenses and optical components from a wide range of crystalline and semiconductor materials.</p><h4>Available Materials</h4><p className="infrared-materials">CaF₂ <i /> BaF₂ <i /> ZnSe <i /> Silicon (Si) <i /> Germanium (Ge) <i /> GaAs <i /> Sapphire</p></section>
          <section><h3>Custom Manufacturing Capabilities</h3><ul>{capabilities.map((item)=><li key={item}>{item}</li>)}</ul></section>
          <p className="infrared-note"><em>Other specifications, materials and coatings are available upon request.</em></p>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
