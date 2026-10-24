import { getSeoMetadata } from "../../../data/seoMetadata";
export const metadata = getSeoMetadata("/products/optical-lenses/three-element-cemented-lenses");

import LensCatalogDetailPage from "../../../components/LensCatalogDetailPage";
export default function Page() { return <LensCatalogDetailPage slug="cemented-lenses" />; }
