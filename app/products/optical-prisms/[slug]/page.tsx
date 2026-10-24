import { getSeoMetadata } from "../../../data/seoMetadata";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getSeoMetadata("/products/optical-prisms/" + slug);
}

import PrismCatalogDetailPage from "../../../components/PrismCatalogDetailPage";
import { prismProductDetails } from "../../../data/prismProductDetails";
export function generateStaticParams(){ return prismProductDetails.map(({slug}) => ({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <PrismCatalogDetailPage slug={slug} />; }
