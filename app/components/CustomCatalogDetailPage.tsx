import { customProductCopy } from "../data/customProductCopy";
import PrismDetailPage from "./PrismDetailPage";
import { getCustomGalleryImages, getCustomProductDetail } from "../data/customProductDetails";

export default function CustomCatalogDetailPage({ slug }: { slug: string }) {
  const product = getCustomProductDetail(slug);
  if (!product) return null;
  const images = getCustomGalleryImages(slug, product.imageCount);

  return <PrismDetailPage
    title={product.title}
    description=""
    image={images[0]}
    images={images}
    categoryName="Custom Optics & OEM Optical Solutions"
    categoryHref="/products/oem-optical-solutions"
    overview={customProductCopy[slug]?.overview}
    applications={product.applications ?? customProductCopy[slug]?.applications}
    specifications={product.specifications ?? []}
    showSpecificationsNote={false}
  />;
}
