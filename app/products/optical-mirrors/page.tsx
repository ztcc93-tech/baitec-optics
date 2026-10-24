import { getSeoMetadata } from "../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-mirrors");

import ProductCategoryFramework from "../../components/ProductCategoryFramework";
import { getCategory } from "../../data/productCatalog";
export default function Page(){ return <ProductCategoryFramework category={getCategory("mirrors")!} />; }
