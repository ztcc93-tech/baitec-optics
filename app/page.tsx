import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { ArrowDown, ArrowUpRight } from "./components/Icons";

const products = [
  { number: "01", name: "Optical Lenses", summary: "Precision imaging and beam control", items: ["Plano-Convex", "Positive Meniscus", "Bi-Convex", "Three-Element Cemented", "Plano-Concave", "Bi-Concave", "Optical Domes"], mark: "◒", href: "/products/optical-lenses" },
  { number: "02", name: "Optical Prisms", summary: "Beam steering, rotation and splitting", items: ["Right-Angle Prisms", "Penta Prisms", "Dove Prisms", "Corner Cube Prisms", "Beamsplitter Prisms", "Roof Prisms", "Cube Prisms", "Linear Prisms"], mark: "△", href: "/products/optical-prisms" },
  { number: "03", name: "Windows & Flat Optics", summary: "Protection, transmission and reference flats", items: ["Round Windows", "Rectangular Windows", "Wedge Windows", "High-Precision Optical Flats", "Infrared Windows"], mark: "▣", href: "/products/windows-flat-optics" },
  { number: "04", name: "Optical Mirrors", summary: "Reflective optics for focusing and steering", items: ["Spherical Mirrors", "Flat Mirrors"], mark: "◐", href: "/products/optical-mirrors" },
  { number: "05", name: "Beam Shaping Optics", summary: "Purpose-built profiles for laser and illumination", items: ["Powell Prisms", "Optical Integrators", "Array Integrators"], mark: "≈", href: "/products/beam-shaping-optics" },
  { number: "06", name: "Optical Filters", summary: "Precise spectral selection and attenuation", items: [], mark: "◎", href: "/products/optical-filters" },
  { number: "07", name: "Infrared Optics", summary: "Components engineered for infrared applications", items: [], mark: "◇", href: "/products/infrared-optics" },
  { number: "08", name: "OEM Optical Solutions", summary: "Engineering and production support for custom optics", items: [], mark: "✦", href: "/products/oem-optical-solutions" },
];

const productItemPaths: Record<string, string[]> = {
  "Optical Lenses": ["plano-convex-lenses", "positive-meniscus-lenses", "bi-convex-lenses", "three-element-cemented-lenses", "plano-concave-lenses", "bi-concave-lenses", "optical-domes"],
  "Optical Prisms": ["right-angle-prisms", "penta-prisms", "dove-prisms", "corner-cube-prisms", "beamsplitter-prisms", "roof-prisms", "cube-prisms", "linear-prisms"],
  "Windows & Flat Optics": ["round-windows", "rectangular-windows", "wedge-windows", "high-precision-optical-flats", "infrared-windows"],
  "Optical Mirrors": ["spherical-mirrors", "flat-mirrors"],
  "Beam Shaping Optics": ["powell-prisms", "optical-integrators", "array-integrators"],
};

const strengths = [
  ["01", "High-precision manufacturing", "Tight tolerances are supported by controlled polishing, experienced technicians and optical metrology."],
  ["02", "True build-to-print customization", "Material, geometry, coating and inspection criteria are developed around your drawing and application."],
  ["03", "Prototype to production", "Flexible support from early-stage samples and low-volume trials through repeat manufacturing."],
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
          <img src="/baitec-optics-hero.png" alt="Precision lenses, prism, optical window and dome" />
        </div>
      </section>

      <section className="products section" id="products">
        <div className="section-heading">
          <div><p className="kicker">High-precision custom optics</p><h2>Optics for ideas<br />that need clarity.</h2></div>
          <p>Choose a product family, then define the material, dimensions, tolerances, coating and inspection criteria your system requires.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <a className="card-hit-area" href={product.href} aria-label={`View ${product.name}`} />
              <div className="product-card-top">
                <span className="product-number">{product.number}</span>
                <span className="product-mark">{product.mark}</span>
                {product.href
                  ? <a className="card-arrow" href={product.href} aria-label={`View ${product.name}`}><ArrowUpRight /></a>
                  : <span className="card-arrow"><ArrowUpRight /></span>}
              </div>
              <div className="product-content">
                <div className="product-title"><h3>{product.href ? <a href={product.href}>{product.name}</a> : product.name}</h3><p>{product.summary}</p></div>
                {product.items.length > 0 && (
                  <ul>{product.items.map((item, index) => (
                    <li key={item}><a href={`${product.href}/${productItemPaths[product.name][index]}`}>{item}</a></li>
                  ))}</ul>
                )}
                <span className="custom-label">CUSTOM MADE</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="capability-intro">
          <p className="kicker">Why Baitec</p>
          <h2>Precision where it matters.<br />Custom where you need it.</h2>
          <p>We combine responsive engineering support with established optical manufacturing in Changchun—China&apos;s renowned optical industry base.</p>
          <a className="text-link" href="#contact">Discuss your project <ArrowUpRight /></a>
        </div>
        <div className="strength-list">
          {strengths.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
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
