import { getSeoMetadata } from "./data/seoMetadata";
export const metadata = getSeoMetadata("/");

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { ArrowDown, ArrowUpRight } from "./components/Icons";

const products = [
  { number: "01", name: "Optical Lenses", summary: "Spherical, cylindrical and specialty lenses", image: "/homepage/categories/optical-lenses.png", href: "/products/optical-lenses" },
  { number: "02", name: "Optical Windows", summary: "Precision windows, flats and filters", image: "/homepage/categories/optical-windows.png", href: "/products/windows-flat-optics" },
  { number: "03", name: "Optical Prisms", summary: "Beam steering, rotation and splitting", image: "/homepage/categories/optical-prisms.png", href: "/products/optical-prisms" },
  { number: "04", name: "Optical Mirrors", summary: "Reflective optics for focusing and steering", image: "/homepage/categories/optical-mirrors.png", href: "/products/optical-mirrors" },
  { number: "05", name: "Optical Domes", summary: "Protective optics for wide-angle systems", image: "/homepage/categories/optical-domes.png", href: "/products/optical-domes" },
  { number: "06", name: "Infrared Optics", summary: "Components for infrared applications", image: "/homepage/categories/infrared-optics.png", href: "/products/infrared-optics" },
  { number: "07", name: "Custom Optics & OEM Optical Solutions", summary: "Build-to-print components and assemblies", image: "/homepage/categories/custom-oem-optics.png", href: "/products/oem-optical-solutions" },
];

const strengths = [
  ["01", "One-Stop Optical Fabrication", "Integrated fabrication for flat, cylindrical and spherical lenses and prisms."],
  ["02", "Built to Your Specifications", "Custom materials, dimensions, surface quality and coatings to your drawings."],
  ["03", "Flexible Production", "Prototypes, small batches and volume orders in visible and infrared materials."],
  ["04", "Consistent Quality & Reliable Lead Times", "Controlled production and inspection support consistent quality and reliable lead times."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> High-precision · Build-to-print optics</p>
          <h1>High precision.<br /><em>Built to your drawing.</em></h1>
          <p className="hero-text">Custom optical components engineered around your material, geometry, coating and inspection requirements—from prototype to production.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Request a quote <ArrowUpRight /></a>
            <a className="text-link" href="/products">Explore our optics <ArrowDown /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Precision optical components illustration">
          <picture>
            <source srcSet="/baitec-optics-hero.webp" type="image/webp" />
            <img src="/baitec-optics-hero.png" alt="Precision lenses, prism, optical window and dome" />
          </picture>
        </div>
      </section>

      <section className="products section" id="products">
        <div className="section-heading">
          <div><p className="kicker">High-precision custom optics</p><h2>Optics for ideas<br />that need clarity.</h2></div>
          <p>Choose a product family, then define the material, dimensions, tolerances, coating and inspection criteria your system requires.</p>
        </div>
        <div className="home-product-grid">
          {products.map((product) => (
            <a className="home-product-card" href={product.href} key={product.name}>
              <div className="home-product-image"><img src={product.image} alt={`${product.name} product range`} /><span>{product.number}</span></div>
              <div className="home-product-copy"><div><h3>{product.name}</h3><p>{product.summary}</p></div><ArrowUpRight /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="why-baitec-image"><img src="/homepage/high-precision-inspection.png" alt="High-precision optical inspection equipment" /></div>
        <div className="why-baitec-content"><p className="kicker">Why Choose Us</p><h2>Built for precision.<br />Ready for your project.</h2><div className="strength-list">
          {strengths.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div></div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact">
          <div><p className="kicker">Simple process</p><h2>From drawing to delivery.</h2></div>
          <p>A clear, responsive workflow keeps custom optical sourcing straightforward.</p>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Share your drawing</h3><p>Send specifications, quantity and application details.</p></article>
          <article><span>02</span><h3>Technical review</h3><p>We confirm feasibility, tolerances, lead time and quotation.</p></article>
          <article><span>03</span><h3>Production & QC</h3><p>Your optics are manufactured and inspected to agreed criteria.</p></article>
          <article><span>04</span><h3>Global delivery</h3><p>Secure packaging, export documentation and shipment support.</p></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div>
          <p className="kicker">Start a project</p>
          <h2>Have an optical drawing<br />ready to discuss?</h2>
        </div>
        <div>
          <p>Tell us what you need. Our team will review your specifications and respond with the next steps.</p>
          <a className="button button-light" href="mailto:sales@baitecoptics.com">sales@baitecoptics.com <ArrowUpRight /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
