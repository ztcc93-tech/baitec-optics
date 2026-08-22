import { ArrowUpRight } from "./Icons";

const navigation = [
  ["Home", "/#top"],
  ["About Us", "/about"],
  ["Workshop Equipment", "/workshop-equipment"],
  ["Contact Us", "/contact"],
];

const productCategories = [
  ["Optical Lenses", "/products/optical-lenses"],
  ["Optical Prisms", "/products/optical-prisms"],
  ["Windows & Flat Optics", "/products/windows-flat-optics"],
  ["Optical Mirrors", "/products/optical-mirrors"],
  ["Beam Shaping Optics", "/products/beam-shaping-optics"],
  ["Optical Filters", "/products/optical-filters"],
  ["Infrared Optics", "/products/infrared-optics"],
  ["OEM Optical Solutions", "/products/oem-optical-solutions"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Baitec Optics home">
        <img className="brand-logo" src="/baitec-logo.png" alt="Baitec Optics" />
      </a>
      <nav aria-label="Main navigation">
        {navigation.slice(0, 2).map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        <div className="nav-products">
          <a className="nav-products-trigger" href="/products">Products <span aria-hidden="true">⌄</span></a>
          <div className="nav-products-menu" aria-label="Product categories">
            {productCategories.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
        </div>
        {navigation.slice(2).map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>
      <a className="button button-small" href="/#contact">Request a quote <ArrowUpRight /></a>
    </header>
  );
}
