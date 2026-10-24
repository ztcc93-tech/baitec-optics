import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-prisms/roof-prisms");

import PrismCatalogDetailPage from "../../../components/PrismCatalogDetailPage";

export default function Page() { return <PrismCatalogDetailPage slug="roof-prisms" />; }
