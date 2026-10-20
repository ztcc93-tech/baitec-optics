import CustomCatalogDetailPage from "../../../components/CustomCatalogDetailPage";
import { getCategory } from "../../../data/productCatalog";
const category = getCategory("custom")!;
export function generateStaticParams(){ return category.products.map(({slug}) => ({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <CustomCatalogDetailPage slug={slug} />; }
