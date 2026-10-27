import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ProductImageGallery from "./ProductImageGallery";

type Specification = readonly [string, string];
type SpecificationGrade = {
  title: string;
  items: readonly Specification[];
};

type Props = {
  title: string;
  description: string;
  image: string;
  categoryName?: string;
  categoryHref?: string;
  images?: readonly string[];
  overview?: readonly string[];
  applications?: readonly { title: string; description: string }[];
  specificationGrades?: readonly SpecificationGrade[];
  specifications: readonly Specification[];
  showSpecificationsNote?: boolean;
  specificationsNote?: string;
};

export default function PrismDetailPage({ title, description, image, categoryName = "Optical Prisms", categoryHref = "/products/optical-prisms", images, overview, applications, specificationGrades, specifications, showSpecificationsNote = true, specificationsNote }: Props) {
  const productImage = images?.length ? <ProductImageGallery images={images} title={title} /> : <div className="compact-product-photo"><img src={image} alt={title} /></div>;
  const specificationsContent = <>
    <h2>Typical Specifications</h2>
    {specificationGrades?.length === 2 ? <div className="specifications-table-wrap"><table className="specifications-table grade-comparison-table"><thead><tr><th>Parameter</th><th>{specificationGrades[0].title}</th><th>{specificationGrades[1].title}</th></tr></thead><tbody>{specificationGrades[0].items.map(([label, standardValue], index) => <tr key={label}><th scope="row">{label}</th><td>{standardValue}</td><td>{specificationGrades[1].items[index][1]}</td></tr>)}</tbody></table></div> : <table className="specifications-table"><tbody>{specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table>}
    {showSpecificationsNote ? <p className="specifications-note"><em>{specificationsNote ?? "Other specifications, materials, and coatings are available upon request."}</em></p> : null}
  </>;
  const hasProductCopy = Boolean(overview?.length || applications?.length);
  const hasSpecifications = Boolean(specificationGrades?.length || specifications.length);

  return (
    <main>
      <SiteHeader />
      <section className={`compact-product-detail section${hasProductCopy ? " has-product-copy" : ""}`}>
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><a href={categoryHref}>{categoryName}</a><span>/</span><b>{title}</b></div>
        <header className="compact-product-heading"><h1>{title}</h1>{description ? <p>{description}</p> : null}</header>
        {hasProductCopy ? <>
          <div className="compact-product-grid product-intro-grid">
            {productImage}
            <div className="compact-specifications product-copy-column">
              {overview?.length ? <section className="product-copy-section"><h2>Product Overview</h2>{overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section> : null}
              {applications?.length ? <section className="product-copy-section product-applications"><h2>Applications</h2><ul>{applications.map(({ title: applicationTitle, description: applicationDescription }) => <li key={applicationTitle}><strong>{applicationTitle}:</strong> {applicationDescription}</li>)}</ul></section> : null}
            </div>
          </div>
          {hasSpecifications ? <div className="compact-specifications full-width-specifications">{specificationsContent}</div> : null}
        </> : hasSpecifications ? <div className="compact-product-grid">{productImage}<div className="compact-specifications">{specificationsContent}</div></div> : <div className="image-only-product-detail">{productImage}</div>}
      </section>
      <SiteFooter />
    </main>
  );
}
