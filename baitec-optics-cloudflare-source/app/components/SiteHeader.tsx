import { ArrowUpRight } from "./Icons";

const navigation = [
  ["Top", "/#top"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Workshop Equipment", "/workshop-equipment"],
  ["News", "/news"],
  ["Contact Us", "/contact"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Baitec Optics home">
        <img className="brand-logo" src="/baitec-logo.png" alt="Baitec Optics" />
      </a>
      <nav aria-label="Main navigation">
        {navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>
      <a className="button button-small" href="/#contact">Request a quote <ArrowUpRight /></a>
    </header>
  );
}
