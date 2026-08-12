import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import SocialRail from "../../components/SocialRail";
import { ArrowUpRight } from "../../components/Icons";
import ProductSidebar from "../../components/ProductSidebar";

const lensFamilies = [
  {
    number: "01",
    name: "Plano-Convex Lenses",
    description: "Positive focal-length lenses for collimation, focusing and imaging applications.",
    image: "/products/lenses/plano-convex.webp",
  },
  {
    number: "02",
    name: "Plano-Concave Lenses",
    description: "Negative focal-length lenses for beam expansion and optical system divergence.",
    image: "/products/lenses/plano-concave.webp",
  },
  {
    number: "03",
    name: "Bi-Convex Lenses",
    description: "Symmetrical positive lenses for finite conjugate imaging and efficient light concentration.",
    image: "/products/lenses/bi-convex.webp",
  },
  {
    number: "04",
    name: "Bi-Concave Lenses",
    description: "Symmetrical negative lenses for beam expansion and reducing image size.",
    image: "/products/lenses/bi-concave.webp",
  },
  {
    number: "05",
    name: "Meniscus Lenses",
    description: "Positive or negative curved lenses used to control aberration and improve system performance.",
    image: "/products/lenses/meniscus.webp",
  },
  {
    number: "06",
    name: "Optical Domes",
    description: "Protective hemispherical optics for wide-angle systems, sensors and harsh environments.",
    image: "/products/lenses/optical-dome.webp",
  },
  {
    number: "07",
    name: "Cemented Lenses",
    description: "Doublets, triplets and custom lens assemblies for chromatic and optical correction.",
    image: "/products/lenses/cemented-lens.webp",
  },
];

export default function OpticalLensesPage() {
  return (
    <main>
      <SiteHeader />
      <SocialRail />

      <section className="category-hero category-hero-compact">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Optical Lenses</b></div>
        <div className="category-hero-grid">
          <div>
            <p className="eyebrow"><span /> High-precision · Build-to-print</p>
            <h1>Optical<br /><em>Lenses.</em></h1>
          </div>
          <div className="category-intro">
            <p>Precision lenses manufactured around your drawing—from individual prototypes to repeat production.</p>
            <div className="category-meta">
              <span>Geometry</span><b>Custom</b>
              <span>Material</span><b>Optical glass & crystals</b>
              <span>Coating</span><b>To specification</b>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-layout section">
        <ProductSidebar active="lenses" />
        <div className="lens-products detail-product-content">
          <p className="kicker lens-range-kicker">Optical lenses · Product range</p>
          <div className="lens-family-grid">
            {lensFamilies.map((lens, index) => (
              <article className="lens-family-card" id={`item-${index + 1}`} key={lens.name}>
                <div className="lens-photo"><img src={lens.image} alt={lens.name} /></div>
                <div className="lens-family-copy">
                  <span className="product-number">{lens.number}</span>
                  <h3>{lens.name}</h3>
                  <p>{lens.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lens-cta section">
        <div><p className="kicker">Custom optics</p><h2>Have a lens drawing<br />ready to review?</h2></div>
        <div><p>Send us your drawing, quantity and application requirements. We will review manufacturability and respond with the next steps.</p><a className="button" href="mailto:baitecoptics@gmail.com">baitecoptics@gmail.com <ArrowUpRight /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
