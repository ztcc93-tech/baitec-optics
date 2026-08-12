import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SocialRail from "./SocialRail";
import { ArrowUpRight } from "./Icons";

export default function InfoPage({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <main>
      <SiteHeader />
      <SocialRail />
      <section className="info-page">
        <div>
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <a className="button" href="/#contact">Contact our team <ArrowUpRight /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
