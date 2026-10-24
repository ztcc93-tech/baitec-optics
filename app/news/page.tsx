import { getSeoMetadata } from "../data/seoMetadata";
export const metadata = getSeoMetadata("/news");

import InfoPage from "../components/InfoPage";

export default function NewsPage() {
  return <InfoPage kicker="Updates" title="News" description="Company updates, exhibition information and practical notes on custom optical manufacturing will be published here." />;
}
