import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowUpRight } from "../components/Icons";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-simple-hero">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><b>About Us</b></div>
        <div className="about-simple-intro">
          <p className="eyebrow"><span /> About Baitec Optics</p>
          <h1>Precision optics.<br /><em>Built with experience.</em></h1>
          <p>Baitec Optics is a precision optical manufacturer based in Changchun, China, with more than 20 years of experience in optical fabrication.</p>
        </div>
        <div className="about-simple-facts">
          <div><b>2005</b><span>Founded</span></div>
          <div><b>20+</b><span>Years of optical expertise</span></div>
          <div><b>Custom</b><span>Prototype to production</span></div>
        </div>
      </section>

      <section className="about-simple-story section">
        <p className="kicker">Our expertise</p>
        <h2>Custom optical manufacturing in Changchun.</h2>
        <div className="about-simple-copy">
          <p>Founded in 2005, we specialize in the design and manufacture of custom optical components for demanding applications. Our product range includes prisms, spherical and aspherical optics, cylindrical lenses, optical windows, crystal components, infrared optics, optical integrators, Powell lenses, filters and super-polished optics.</p>
          <p>Our manufacturing capabilities cover rough grinding, precision processing, high-precision polishing, crystal processing and optical inspection. From prototypes and small batches to volume production, we manufacture complex optical components to customer drawings and technical requirements.</p>
          <p>Baitec Optics operates under ISO 9001:2015 and GJB 9001B-2009 quality systems. Our optical components are used in aerospace, scientific research, medical, electronic and advanced optical systems, serving customers across North America, Europe and Asia.</p>
        </div>
        <a className="button about-simple-button" href="mailto:sales@baitecoptics.com">Discuss your project <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
