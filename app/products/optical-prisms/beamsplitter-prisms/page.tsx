import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-prisms/beamsplitter-prisms");

import PrismCatalogDetailPage from "../../../components/PrismCatalogDetailPage";

export default function Page() { return <PrismCatalogDetailPage slug="beamsplitter-prisms" />; }
