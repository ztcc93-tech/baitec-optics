import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-lenses/bi-convex-lenses");

import LensCatalogDetailPage from "../../../components/LensCatalogDetailPage";
export default function Page() { return <LensCatalogDetailPage slug="bi-convex-lenses" />; }
