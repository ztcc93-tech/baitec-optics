import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type Props = {
  title: string;
  description: string;
  image: string;
  specifications: readonly (readonly [string, string])[];
};

export default function WindowDetailPage({ title, description, image, specifications }: Props) {
  return <main>
    <SiteHeader />
    <section className="compact-product-detail section">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><a href="/products/windows-flat-optics">Windows &amp; Flat Optics</a><span>/</span><b>{title}</b></div>
      <header className="compact-product-heading"><h1>{title}</h1><p>{description}</p></header>
      <div className="compact-product-grid">
        <div className="compact-product-photo"><img src={image} alt={title} /></div>
        <div className="compact-specifications">
          <h2>Typical Specifications</h2>
          <table className="specifications-table"><tbody>{specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table>
          <p className="specifications-note"><em>Other specifications, materials, and coatings are available upon request.</em></p>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
