import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import SocialRail from "../../components/SocialRail";
import { ArrowUpRight } from "../../components/Icons";
import ProductSidebar from "../../components/ProductSidebar";

const beamShapingFamilies = [
  {
    number: "01",
    name: "Powell Lenses",
    description: "Laser line generators designed to convert a collimated beam into a uniform straight line.",
    image: "/products/beam-shaping/powell-lens.webp",
  },
  {
    number: "02",
    name: "Optical Integrators",
    description: "Multi-faceted optics for homogenizing illumination and producing a more uniform intensity profile.",
    image: "/products/beam-shaping/optical-integrator.webp",
  },
  {
    number: "03",
    name: "Integrator Arrays",
    description: "Custom lenslet and hexagonal arrays for beam homogenization, illumination shaping and imaging systems.",
    image: "/products/beam-shaping/integrator-array.webp",
  },
];

export default function BeamShapingOpticsPage() {
  return (
    <main>
      <SiteHeader />
      <SocialRail />

      <section className="category-hero category-hero-compact">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Beam Shaping Optics</b></div>
        <div className="category-hero-grid">
          <div>
            <p className="eyebrow"><span /> Uniform profiles · Custom geometry</p>
            <h1>Beam Shaping<br /><em>Optics.</em></h1>
          </div>
          <div className="category-intro">
            <p>Beam shaping components manufactured for laser line generation, homogenization and controlled illumination.</p>
            <div className="category-meta">
              <span>Profile</span><b>Line & homogenized</b>
              <span>Geometry</span><b>Custom</b>
              <span>Coating</span><b>To specification</b>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-layout section">
        <ProductSidebar active="beam-shaping" />
        <div className="lens-products detail-product-content">
          <p className="kicker lens-range-kicker">Beam shaping optics · Product range</p>
          <div className="lens-family-grid">
            {beamShapingFamilies.map((product, index) => (
              <article className="lens-family-card" id={`item-${index + 1}`} key={product.name}>
                <div className="lens-photo"><img src={product.image} alt={product.name} /></div>
                <div className="lens-family-copy">
                  <span className="product-number">{product.number}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lens-cta section">
        <div><p className="kicker">Custom beam shaping</p><h2>Have an optical design<br />ready to review?</h2></div>
        <div><p>Send us your wavelength, input beam, target profile, dimensions and coating requirements for a manufacturability review.</p><a className="button" href="mailto:baitecoptics@gmail.com">baitecoptics@gmail.com <ArrowUpRight /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
