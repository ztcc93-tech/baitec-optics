import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ProductSidebar from "./ProductSidebar";

type Props = { active:string; title:string; eyebrow:string; image:string; intro:string; paragraphs:string[] };

export default function ProductShowcasePage({ active, title, eyebrow, image, intro, paragraphs }: Props) {
  return <main>
    <SiteHeader />
    <section className="showcase-product section">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>{title}</b></div>
      <div className="showcase-product-heading"><p className="eyebrow"><span /> {eyebrow}</p><h1>{title}</h1><p>{intro}</p></div>
      <div className="showcase-product-layout">
        <ProductSidebar active={active} />
        <article className="showcase-product-content"><img src={image} alt={title} /><div>{paragraphs.map((p)=><p key={p}>{p}</p>)}</div></article>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
