import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { ArrowUpRight } from "../../components/Icons";
import ProductSidebar from "../../components/ProductSidebar";

const prismFamilies = [
  { number: "01", name: "Right-Angle Prisms", description: "90-degree beam deviation, image rotation and compact optical path folding.", image: "/products/prisms/right-angle.webp", href: "/products/optical-prisms/right-angle-prisms" },
  { number: "02", name: "Penta Prisms", description: "Fixed 90-degree beam deviation with minimal sensitivity to prism alignment.", image: "/products/prisms/penta.webp", href: "/products/optical-prisms/penta-prisms" },
  { number: "03", name: "Dove Prisms", description: "Image inversion and precise image rotation in compact optical systems.", image: "/products/prisms/dove.webp", href: "/products/optical-prisms/dove-prisms" },
  { number: "04", name: "Corner Cube Prisms", description: "Retroreflectors that return incident light toward its source across a wide range of angles.", image: "/products/prisms/corner-cube.webp", href: "/products/optical-prisms/corner-cube-prisms" },
  { number: "05", name: "Beamsplitter Prisms", description: "Cube assemblies for dividing or combining optical paths at a specified ratio.", image: "/products/prisms/beamsplitter.webp", href: "/products/optical-prisms/beamsplitter-prisms" },
  { number: "06", name: "Roof Prisms", description: "Beam deviation combined with image inversion for viewing and imaging systems.", image: "/products/prisms/roof.webp", href: "/products/optical-prisms/roof-prisms" },
  { number: "07", name: "Cube Prisms", description: "Precision cubic optics for beam steering, splitting and custom optical assemblies.", image: "/products/prisms/cube.webp", href: "/products/optical-prisms/cube-prisms" },
  { number: "08", name: "Linear Prisms", description: "Elongated prisms for line generation, beam deviation and specialized illumination systems.", image: "/products/prisms/linear.webp", href: "/products/optical-prisms/linear-prisms" },
];

export default function OpticalPrismsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="category-hero category-hero-compact">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>Optical Prisms</b></div>
        <div className="category-hero-grid">
          <div><p className="eyebrow"><span /> High-precision · Build-to-print</p><h1>Optical<br /><em>Prisms.</em></h1></div>
          <div className="category-intro">
            <p>Precision prisms manufactured around your geometry, material, coating and inspection requirements.</p>
            <div className="category-meta"><span>Geometry</span><b>Custom</b><span>Material</span><b>Optical glass & crystals</b><span>Coating</span><b>To specification</b></div>
          </div>
        </div>
      </section>
      <section className="product-detail-layout section">
        <ProductSidebar active="prisms" />
        <div className="lens-products detail-product-content">
          <p className="kicker lens-range-kicker">Optical prisms · Product range</p>
          <div className="lens-family-grid">
            {prismFamilies.map((prism, index) => (
              <article className="lens-family-card" id={`item-${index + 1}`} key={prism.name}>
                {prism.href && <a className="family-card-hit-area" href={prism.href} aria-label={`View ${prism.name} specifications`} />}
                <div className="lens-photo">{prism.href ? <a href={prism.href} aria-label={`View ${prism.name} specifications`}><img src={prism.image} alt={prism.name} /></a> : <img src={prism.image} alt={prism.name} />}</div>
                <div className="lens-family-copy"><span className="product-number">{prism.number}</span><h3>{prism.href ? <a href={prism.href}>{prism.name}</a> : prism.name}</h3><p>{prism.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="lens-cta section">
        <div><p className="kicker">Custom optics</p><h2>Have a prism drawing<br />ready to review?</h2></div>
        <div><p>Send us your drawing, quantity and application requirements. We will review manufacturability and respond with the next steps.</p><a className="button" href="mailto:sales@baitecoptics.com">sales@baitecoptics.com <ArrowUpRight /></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
