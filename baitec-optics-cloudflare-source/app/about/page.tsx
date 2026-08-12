import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SocialRail from "../components/SocialRail";
import { ArrowUpRight } from "../components/Icons";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <SocialRail />

      <section className="about-simple-hero">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><b>About Us</b></div>
        <div className="about-simple-intro">
          <p className="eyebrow"><span /> About Baitec Optics</p>
          <h1>Precision optics.<br /><em>Built with experience.</em></h1>
          <p>BAITEC OPTICS is a precision optical manufacturer based in Changchun, China, with more than 20 years of experience in optical fabrication.</p>
        </div>
        <div className="about-simple-facts">
          <div><b>2005</b><span>Founded</span></div>
          <div><b>20+</b><span>Years of optical expertise</span></div>
          <div><b>Custom</b><span>Prototype to production</span></div>
        </div>
      </section>

      <section className="about-simple-story section">
        <div>
          <p className="kicker">Our expertise</p>
          <h2>Custom optical manufacturing in Changchun.</h2>
        </div>
        <div className="about-simple-copy">
          <p>Founded in 2005, we specialize in the design and manufacture of custom optical components for demanding applications. Our product range includes prisms, spherical and aspherical optics, cylindrical lenses, optical windows, crystal components, infrared optics, optical integrators, Powell lenses, filters and super-polished optics.</p>
          <p>Our manufacturing capabilities cover rough grinding, precision processing, high-precision polishing, crystal processing and optical inspection. From prototypes and small batches to volume production, we manufacture complex optical components to customer drawings and technical requirements.</p>
        </div>
      </section>

      <section className="about-simple-quality section">
        <div>
          <p className="kicker">Quality management</p>
          <h2>ISO 9001:2015<br /><span>GJB 9001B-2009</span></h2>
        </div>
        <div>
          <p>BAITEC optical components are used in aerospace, scientific research, medical, electronic and advanced optical systems, serving customers across North America, Europe and Asia.</p>
          <a className="button" href="mailto:baitecoptics@gmail.com">Discuss your project <ArrowUpRight /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
