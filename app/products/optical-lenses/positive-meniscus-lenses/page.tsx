import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-lenses/positive-meniscus-lenses");

import LensCatalogDetailPage from "../../../components/LensCatalogDetailPage";
export default function Page() { return <LensCatalogDetailPage slug="meniscus-lenses" />; }
