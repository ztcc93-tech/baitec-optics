import PrismDetailPage from "./PrismDetailPage";
import { getWindowGalleryImages, getWindowProductDetail, windowSpecificationGrades } from "../data/windowProductDetails";

export default function WindowCatalogDetailPage({ slug }: { slug: string }) {
  const product = getWindowProductDetail(slug);
  if (!product) return null;
  const images = getWindowGalleryImages(slug, product.imageCount);

  return <PrismDetailPage
    title={product.title}
    description={product.description}
    image={images[0]}
    images={images}
    categoryName="Optical Windows"
    categoryHref="/products/windows-flat-optics"
    overview={product.overview}
    applications={product.applications}
    specificationGrades={windowSpecificationGrades}
    specifications={[]}
  />;
}
