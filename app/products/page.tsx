import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowUpRight } from "../components/Icons";
import ProductSidebar from "../components/ProductSidebar";

const categories = [
  {
    id: "lenses",
    number: "01",
    name: "Optical Lenses",
    note: "Focusing · Imaging · Collimation",
    href: "/products/optical-lenses",
    image: "/products/categories/01-optical-lenses.webp",
    items: ["Plano-Convex", "Positive Meniscus", "Bi-Convex", "Three-Element Cemented", "Plano-Concave", "Bi-Concave", "Optical Domes"],
  },
  {
    id: "prisms",
    number: "02",
    name: "Optical Prisms",
    note: "Steering · Rotation · Splitting",
    href: "/products/optical-prisms",
    image: "/products/categories/02-optical-prisms.webp",
    items: ["Right-Angle", "Penta", "Dove", "Corner Cube", "Beamsplitter", "Roof", "Cube", "Linear Prisms"],
  },
  {
    id: "windows",
    number: "03",
    name: "Windows & Flat Optics",
    note: "Protection · Transmission · Reference",
    href: "/products/windows-flat-optics",
    image: "/products/categories/03-windows.webp",
    items: ["Round Windows", "Rectangular Windows", "Wedge Windows", "High-Precision Flats", "Infrared Windows"],
  },
  {
    id: "mirrors",
    number: "04",
    name: "Optical Mirrors",
    note: "Reflection · Focusing · Beam steering",
    href: "/products/optical-mirrors",
    image: "/products/categories/04-mirrors.webp",
    items: ["Spherical Mirrors", "Flat Mirrors"],
  },
  {
    id: "beam-shaping",
    number: "05",
    name: "Beam Shaping Optics",
    note: "Laser profiles · Illumination control",
    href: "/products/beam-shaping-optics",
    image: "/products/categories/05-beam-shaping.webp",
    items: ["Powell Prisms", "Optical Integrators", "Array Integrators"],
  },
  {
    id: "filters",
    number: "06",
    name: "Optical Filters",
    note: "Spectral selection · Attenuation",
    href: "/products/optical-filters",
    image: "/products/categories/06-filters.webp",
    items: ["Bandpass Filters", "Longpass Filters", "Shortpass Filters", "Neutral Density Filters"],
  },
  {
    id: "infrared",
    number: "07",
    name: "Infrared Optics",
    note: "IR materials · Precision processing",
    href: "/products/infrared-optics",
    image: "/products/categories/07-infrared.webp",
    items: [],
  },
  {
    id: "oem",
    number: "08",
    name: "OEM Optical Solutions",
    note: "Design · Processing · Coating",
    href: "/products/oem-optical-solutions",
    image: "/products/categories/08-oem-solutions.webp",
    items: [],
  },
];

const prismItemPaths = [
  "right-angle-prisms", "penta-prisms", "dove-prisms", "corner-cube-prisms",
  "beamsplitter-prisms", "roof-prisms", "cube-prisms", "linear-prisms",
];
const windowItemPaths = ["round-windows", "rectangular-windows", "wedge-windows", "high-precision-optical-flats", "infrared-windows"];
const mirrorItemPaths = ["spherical-mirrors", "flat-mirrors"];
const beamShapingItemPaths = ["powell-prisms", "optical-integrators", "array-integrators"];
const lensItemPaths = ["plano-convex-lenses", "positive-meniscus-lenses", "bi-convex-lenses", "three-element-cemented-lenses", "plano-concave-lenses", "bi-concave-lenses", "optical-domes"];

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="products-page-hero">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><b>Products</b></div>
        <div className="products-page-heading">
          <div><p className="eyebrow"><span /> Precision · Custom-made</p><h1>Product<br /><em>Families.</em></h1></div>
          <p>Explore our optical component range. Every product can be manufactured around your drawing, material, tolerance, coating and inspection requirements.</p>
        </div>
      </section>

      <section className="product-catalog section">
        <ProductSidebar />

        <div className="catalog-grid">
          {categories.map((category) => (
            <article className="catalog-card" id={category.id} key={category.id}>
              <a className="catalog-card-hit-area" href={category.href} aria-label={`View ${category.name}`} />
              {category.href ? (
                <a className="catalog-card-media" href={category.href} aria-label={`View ${category.name}`}>
                  {category.image ? <img src={category.image} alt={category.name} /> : <span>{category.mark}</span>}
                  <b>{category.number}</b>
                </a>
              ) : (
                <div className="catalog-card-media">
                  {category.image ? <img src={category.image} alt={category.name} /> : <span>{category.mark}</span>}
                  <b>{category.number}</b>
                </div>
              )}
              <div className="catalog-card-copy">
                <p>{category.note}</p>
                <h2>{category.href ? <a href={category.href}>{category.name}</a> : category.name}</h2>
                <ul>{category.items.map((item, index) => (
                  <li key={item}>{category.id === "lenses"
                    ? <a href={`/products/optical-lenses/${lensItemPaths[index]}`}>{item}</a>
                    : category.id === "prisms"
                      ? <a href={`/products/optical-prisms/${prismItemPaths[index]}`}>{item}</a>
                    : category.id === "windows"
                      ? <a href={`/products/windows-flat-optics/${windowItemPaths[index]}`}>{item}</a>
                    : category.id === "mirrors"
                      ? <a href={`/products/optical-mirrors/${mirrorItemPaths[index]}`}>{item}</a>
                    : category.id === "beam-shaping"
                      ? <a href={`/products/beam-shaping-optics/${beamShapingItemPaths[index]}`}>{item}</a>
                    : item}
                  </li>
                ))}</ul>
                {category.href && <a className="catalog-card-link" href={category.href}>View product range <ArrowUpRight /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lens-cta section">
        <div><p className="kicker">Build-to-print optics</p><h2>Can&apos;t find the exact<br />component you need?</h2></div>
        <div><p>Send us your drawing and application requirements. We support custom geometry, optical materials, coatings and inspection criteria.</p><a className="button" href="/contact">Discuss your project <ArrowUpRight /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
