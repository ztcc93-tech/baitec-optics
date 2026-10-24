import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-prisms/penta-prisms");

import PrismCatalogDetailPage from "../../../components/PrismCatalogDetailPage";

export default function Page() { return <PrismCatalogDetailPage slug="penta-prisms" />; }
