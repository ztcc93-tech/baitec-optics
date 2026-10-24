import { getSeoMetadata } from "../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/oem-optical-solutions");

import ProductCategoryFramework from "../../components/ProductCategoryFramework";
import { getCategory } from "../../data/productCatalog";
export default function Page(){ return <ProductCategoryFramework category={getCategory("custom")!} />; }
