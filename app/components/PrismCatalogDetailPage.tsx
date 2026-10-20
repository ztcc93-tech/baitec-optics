import PrismDetailPage from "./PrismDetailPage";
import { getPrismGalleryImages, getPrismProductDetail, prismSpecificationGrades } from "../data/prismProductDetails";

const legacySpecifications = [] as const;
export default function PrismCatalogDetailPage({ slug }: { slug: string }) {
  const product = getPrismProductDetail(slug);
  if (!product) return null;
  const images = getPrismGalleryImages(slug);
  return <PrismDetailPage
    title={product.title}
    description="Precision optical prisms manufactured to customer specifications."
    image={images[0] ?? product.image}
    images={images}
    overview={product.overview}
    applications={product.applications}
    specificationGrades={prismSpecificationGrades}
    specifications={legacySpecifications}
  />;
}
