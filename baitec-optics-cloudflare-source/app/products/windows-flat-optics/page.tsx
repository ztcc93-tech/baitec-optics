import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import SocialRail from "../../components/SocialRail";
import { ArrowUpRight } from "../../components/Icons";
import ProductSidebar from "../../components/ProductSidebar";

const windowFamilies = [
  {
    number: "01",
    name: "Round Windows",
    description: "Circular protective windows manufactured for high transmission and controlled wavefront distortion.",
    image: "/products/windows/round-window.webp",
  },
  {
    number: "02",
    name: "Rectangular Windows",
    description: "Rectangular and square windows produced to custom dimensions, tolerances and coating requirements.",
    image: "/products/windows/rectangular-window.webp",
  },
  {
    number: "03",
    name: "Wedge Windows",
    description: "Precision wedged windows designed to prevent back reflections and eliminate unwanted interference effects.",
    image: "/products/windows/wedge-window.webp",
  },
  {
    number: "04",
    name: "High-Precision Optical Flats",
    description: "High-flatness reference surfaces for measurement, calibration, interferometry and precision optical systems.",
    image: "/products/windows/high-precision-flat.webp",
  },
  {
    number: "05",
    name: "Infrared Windows",
    description: "Infrared-transmitting windows available in materials such as ZnSe, ZnS, silicon, sapphire and fluoride crystals.",
    image: "/products/windows/infrared-window.webp",
  },
];

export default function WindowsFlatOpticsPage() {
  return (
    <main>
      <SiteHeader />
      <SocialRail />

      <section className="category-hero category-hero-compact">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Windows & Flat Optics</b></div>
        <div className="category-hero-grid">
          <div>
            <p className="eyebrow"><span /> Protection · Transmission · Reference</p>
            <h1>Windows &<br /><em>Flat Optics.</em></h1>
          </div>
          <div className="category-intro">
            <p>Precision windows and flat optics manufactured for protection, transmission, measurement and infrared systems.</p>
            <div className="category-meta">
              <span>Geometry</span><b>Round, rectangular & wedge</b>
              <span>Material</span><b>Glass & optical crystals</b>
              <span>Coating</span><b>To specification</b>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-layout section">
        <ProductSidebar active="windows" />
        <div className="lens-products detail-product-content">
          <p className="kicker lens-range-kicker">Windows & flat optics · Product range</p>
          <div className="lens-family-grid">
            {windowFamilies.map((product, index) => (
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
        <div><p className="kicker">Custom flat optics</p><h2>Have a window drawing<br />ready to review?</h2></div>
        <div><p>Send us your dimensions, substrate, flatness, surface quality, wavelength range and coating requirements.</p><a className="button" href="mailto:baitecoptics@gmail.com">baitecoptics@gmail.com <ArrowUpRight /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
