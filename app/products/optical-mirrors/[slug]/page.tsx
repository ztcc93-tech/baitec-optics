import { getSeoMetadata } from "../../../data/seoMetadata";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getSeoMetadata("/products/optical-mirrors/" + slug);
}

import MirrorCatalogDetailPage from "../../../components/MirrorCatalogDetailPage";
import { getCategory } from "../../../data/productCatalog";
const category = getCategory("mirrors")!;
export function generateStaticParams(){ return category.products.map(({slug}) => ({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <MirrorCatalogDetailPage slug={slug} />; }
