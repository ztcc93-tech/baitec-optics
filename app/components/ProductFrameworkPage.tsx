import { notFound } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ProductSidebar from "./ProductSidebar";
import { ArrowUpRight } from "./Icons";
import type { CatalogCategory } from "../data/productCatalog";

export default function ProductFrameworkPage({ category, slug }: { category: CatalogCategory; slug: string }) {
  const product = category.products.find((item) => item.slug === slug);
  if (!product) notFound();
  return <main><SiteHeader />
    <section className="products-page-hero product-framework-hero"><div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><a href={category.href}>{category.shortName}</a><span>/</span><b>{product.name}</b></div><div className="products-page-heading"><div><p className="eyebrow"><span /> Custom manufactured · Build-to-print</p><h1>{product.name}<em>.</em></h1></div><p>Made to customer drawings with material, geometry, surface quality, coating and inspection requirements reviewed for each project.</p></div></section>
    <section className="product-catalog section"><ProductSidebar active={category.id} /><div className="catalog-main">
      <section className="framework-overview"><p className="kicker">Product framework</p><h2>Engineered around your application.</h2><p>This page is ready for verified product images and technical data. Until specifications are confirmed, Baitec Optics supplies this component on a custom, build-to-print basis.</p></section>
      <div className="framework-spec-grid"><article><span>01</span><h3>Geometry & dimensions</h3><p>Manufactured to your drawing, dimensional tolerance and edge requirements.</p></article><article><span>02</span><h3>Optical material</h3><p>Material selection reviewed against wavelength, environment and performance targets.</p></article><article><span>03</span><h3>Surface & coating</h3><p>Surface quality, flatness or power, and coating specified for the application.</p></article><article><span>04</span><h3>Inspection</h3><p>Inspection criteria and documentation agreed before production.</p></article></div>
      <section className="framework-custom-cta"><div><p className="kicker">Request engineering review</p><h2>Send us your drawing.</h2></div><div><p>Tell us the quantity, material, wavelength, critical tolerances and delivery target.</p><a className="button" href="/contact">Request a quote <ArrowUpRight /></a></div></section>
    </div></section><SiteFooter /></main>;
}
