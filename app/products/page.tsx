import { getSeoMetadata } from "../data/seoMetadata";
export const metadata = getSeoMetadata("/products");

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowUpRight } from "../components/Icons";
import ProductSidebar from "../components/ProductSidebar";
import { productCatalog, totalCatalogProducts } from "../data/productCatalog";

export default function ProductsPage() { return <main><SiteHeader />
  <section className="products-page-hero"><div className="breadcrumb"><a href="/">Home</a><span>/</span><b>Products</b></div><div className="products-page-heading"><div><p className="eyebrow"><span /> {totalCatalogProducts} products · Custom-made</p><h1>Product<br /><em>Families.</em></h1></div><p>Explore our first product catalog. Every component can be manufactured around your drawing, material, tolerance, coating and inspection requirements.</p></div></section>
  <section className="product-catalog section"><ProductSidebar /><div className="catalog-grid">{productCatalog.map((category) => <article className="catalog-card" id={category.id} key={category.id}><a className="catalog-card-hit-area" href={category.href} aria-label={`View ${category.name}`} /><a className="catalog-card-media" href={category.href}><img src={category.image} alt={category.name} /><b>{category.number}</b></a><div className="catalog-card-copy"><p>{category.note}</p><h2><a href={category.href}>{category.name}</a></h2><ul>{category.products.slice(0,6).map((product) => <li key={product.slug}><a href={product.href}>{product.name}</a></li>)}</ul><a className="catalog-card-link" href={category.href}>{category.products.length ? `View ${category.products.length} products` : "View category"} <ArrowUpRight /></a></div></article>)}</div></section>
  <section className="lens-cta section"><div><p className="kicker">Build-to-print optics</p><h2>Can&apos;t find the exact<br />component you need?</h2></div><div><p>Send us your drawing and application requirements. We support custom geometry, optical materials, coatings and inspection criteria.</p><a className="button" href="/contact">Discuss your project <ArrowUpRight /></a></div></section><SiteFooter /></main>; }
