import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ProductSidebar from "./ProductSidebar";
import { ArrowUpRight } from "./Icons";
import type { CatalogCategory } from "../data/productCatalog";

export default function ProductCategoryFramework({ category }: { category: CatalogCategory }) {
  const showProductImages = category.id === "prisms" || category.id === "lenses" || category.id === "windows" || category.id === "mirrors" || category.id === "custom";
  const galleryPath = category.id === "lenses" ? "lenses" : category.id === "windows" ? "windows" : category.id === "mirrors" ? "mirrors" : category.id === "custom" ? "custom" : "prisms";
  return <main><SiteHeader />
    <section className="products-page-hero compact-category-hero">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>{category.name}</b></div>
      <div className="products-page-heading"><div><p className="eyebrow"><span /> {category.note}</p><h1>{category.name}<em>.</em></h1></div><p>Precision components manufactured to your drawing, material, tolerance, coating and inspection requirements.</p></div>
    </section>
    <section className="product-catalog section"><ProductSidebar active={category.id} /><div className="catalog-main">
      <div className="category-framework-heading"><p className="kicker">{category.products.length ? `${category.products.length} product families` : "Category framework"}</p><h2>{category.comingSoon ? "Products are being prepared." : "Select a product family."}</h2><p>{category.comingSoon ? "Send us your drawing now for a custom quotation. Product pages will be added as technical data and images are confirmed." : "Each page is ready for verified drawings, dimensions, tolerances, materials and coating data."}</p></div>
      {category.products.length > 0 && <div className={`framework-product-grid${showProductImages ? " framework-product-grid-with-images" : ""}`}>{category.products.map((product, index) => <a className="framework-product-card" href={product.href} key={product.slug}>{showProductImages && <div className="framework-product-image"><img src={`/products/${galleryPath}/${product.slug}-gallery/01-main.webp`} alt={product.name} /></div>}<div className="framework-product-card-copy"><span>{String(index + 1).padStart(2,"0")}</span><h3>{product.name}</h3><b>View product <ArrowUpRight /></b></div></a>)}</div>}
      <div className="framework-custom-cta"><div><p className="kicker">Build-to-print optics</p><h2>Need a custom variation?</h2></div><div><p>Upload or send your drawing, target material, coating and inspection criteria for engineering review.</p><a className="button" href="/contact">Send your inquiry <ArrowUpRight /></a></div></div>
    </div></section><SiteFooter /></main>;
}
