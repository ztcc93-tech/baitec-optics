import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import SocialRail from "../../components/SocialRail";
import { ArrowUpRight } from "../../components/Icons";
import ProductSidebar from "../../components/ProductSidebar";

const mirrorFamilies = [
  {
    number: "01",
    name: "Spherical Mirrors",
    description: "Concave and convex spherical mirrors for focusing, imaging and beam steering applications.",
    image: "/products/mirrors/spherical-mirror.webp",
  },
  {
    number: "02",
    name: "Flat Mirrors",
    description: "Precision flat mirrors with custom reflective coatings for beam folding and optical alignment.",
    image: "/products/mirrors/flat-mirror.webp",
  },
];

export default function OpticalMirrorsPage() {
  return (
    <main>
      <SiteHeader />
      <SocialRail />

      <section className="category-hero category-hero-compact">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Optical Mirrors</b></div>
        <div className="category-hero-grid">
          <div>
            <p className="eyebrow"><span /> Precision surfaces · Custom coatings</p>
            <h1>Optical<br /><em>Mirrors.</em></h1>
          </div>
          <div className="category-intro">
            <p>High-precision mirrors manufactured for reflection, focusing, imaging and beam steering systems.</p>
            <div className="category-meta">
              <span>Surface</span><b>Flat & spherical</b>
              <span>Material</span><b>Optical glass & crystals</b>
              <span>Coating</span><b>To specification</b>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-layout section">
        <ProductSidebar active="mirrors" />
        <div className="lens-products detail-product-content">
          <p className="kicker lens-range-kicker">Optical mirrors · Product range</p>
          <div className="lens-family-grid">
            {mirrorFamilies.map((mirror, index) => (
              <article className="lens-family-card" id={`item-${index + 1}`} key={mirror.name}>
                <div className="lens-photo"><img src={mirror.image} alt={mirror.name} /></div>
                <div className="lens-family-copy">
                  <span className="product-number">{mirror.number}</span>
                  <h3>{mirror.name}</h3>
                  <p>{mirror.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lens-cta section">
        <div><p className="kicker">Custom mirrors</p><h2>Have a mirror drawing<br />ready to review?</h2></div>
        <div><p>Send us your substrate, dimensions, surface figure, wavelength range, angle of incidence and coating requirements.</p><a className="button" href="mailto:baitecoptics@gmail.com">baitecoptics@gmail.com <ArrowUpRight /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
