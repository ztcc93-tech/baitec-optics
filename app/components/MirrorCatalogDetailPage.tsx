import PrismDetailPage from "./PrismDetailPage";
import { getMirrorGalleryImages, getMirrorProductDetail } from "../data/mirrorProductDetails";

export default function MirrorCatalogDetailPage({ slug }: { slug: string }) {
  const product = getMirrorProductDetail(slug);
  if (!product) return null;
  const images = getMirrorGalleryImages(slug, product.imageCount);

  return <PrismDetailPage
    title={product.title}
    description={product.description}
    image={images[0]}
    images={images}
    categoryName="Optical Mirrors"
    categoryHref="/products/optical-mirrors"
    overview={product.overview}
    applications={product.applications}
    specifications={[]}
  />;
}
