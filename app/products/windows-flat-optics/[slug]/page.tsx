import { getSeoMetadata } from "../../../data/seoMetadata";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getSeoMetadata("/products/windows-flat-optics/" + slug);
}

import WindowCatalogDetailPage from "../../../components/WindowCatalogDetailPage";
import { getCategory } from "../../../data/productCatalog";
const category = getCategory("windows")!;
export function generateStaticParams(){ return category.products.map(({slug}) => ({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <WindowCatalogDetailPage slug={slug} />; }
