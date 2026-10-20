import ProductCategoryFramework from "../../components/ProductCategoryFramework";
import { getCategory } from "../../data/productCatalog";
export default function Page(){ return <ProductCategoryFramework category={getCategory("custom")!} />; }
