import PrismDetailPage from "./PrismDetailPage";
import { getLensGalleryImages, getLensProductDetail, lensSpecificationGrades } from "../data/lensProductDetails";

export default function LensCatalogDetailPage({ slug }: { slug: string }) {
  const product = getLensProductDetail(slug);
  if (!product) return null;
  const images = getLensGalleryImages(slug);

  return <PrismDetailPage
    title={product.title}
    description={product.description}
    image={images[0] ?? product.image}
    images={images}
    categoryName="Optical Lenses"
    categoryHref="/products/optical-lenses"
    overview={product.overview}
    applications={product.applications}
    specificationGrades={lensSpecificationGrades}
    specifications={[]}
  />;
}
