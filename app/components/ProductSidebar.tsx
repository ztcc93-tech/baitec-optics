import { ArrowUpRight } from "./Icons";
import { productCatalog } from "../data/productCatalog";

export default function ProductSidebar({ active = "all" }: { active?: string }) {
  return <aside className="catalog-sidebar product-tree" aria-label="Product categories"><p className="catalog-label">Product categories</p><div className="product-tree-list">
    {productCatalog.map((category) => category.products.length === 0 ? <a className={`product-tree-direct ${active === category.id ? "is-active" : ""}`} href={category.href} key={category.id}><span>{category.number}</span><b>{category.shortName}</b><ArrowUpRight /></a> : <details key={category.id} open={active === "all" || active === category.id} className={active === category.id ? "is-active" : ""}><summary><span>{category.number}</span><a className="product-tree-heading" href={category.href}>{category.shortName}</a><i aria-hidden="true" /></summary><ul>{category.products.map((product) => <li key={product.slug}><a href={product.href}>{product.name}</a></li>)}</ul></details>)}
  </div><a className="catalog-quote" href="/contact">Custom requirement <ArrowUpRight /></a></aside>;
}
