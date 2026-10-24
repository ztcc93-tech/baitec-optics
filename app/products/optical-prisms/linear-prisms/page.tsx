import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-prisms/linear-prisms");

import PrismCatalogDetailPage from "../../../components/PrismCatalogDetailPage";

export default function Page() { return <PrismCatalogDetailPage slug="hexagonal-prisms-optical-rods" />; }
