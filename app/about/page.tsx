import { getSeoMetadata } from "../data/seoMetadata";
export const metadata = getSeoMetadata("/about");

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
          <p>Baitec Optics connects international customers with more than 20 years of precision optical manufacturing expertise in Changchun, China.</p>
        </div>
      </section>

      <section className="about-simple-story section">
        <p className="kicker">Our expertise</p>
        <h2>Custom optical manufacturing in Changchun.</h2>
        <div className="about-simple-copy">
          <p>Baitec Optics Co., Ltd. is in Changchun, China, one of the country’s leading centers for optical research and precision manufacturing. Our company has over 20 years of experience in manufacturing custom high-precision optical components. We provide integrated support covering technical communication, manufacturability review, production coordination, quality inspection and international delivery.</p>
          <p>Our main products include optical lenses, prisms, windows, mirrors and custom optical components. We process a wide range of optical glasses, fused silica, crystalline materials and infrared materials, including N-BK7, CaF₂, MgF₂, ZnSe, ZnS and Si.</p>
          <p>Our manufacturing capabilities cover rough grinding, fine grinding, precision polishing, crystal processing, centering, cementing and optical inspection. From prototype development and low-volume customization to repeat orders and volume production, we manufacture optical components according to customer drawings, technical specifications and application requirements. Our experienced manufacturing team can also evaluate complex geometries, demanding tolerances and non-standard material combinations.</p>
          <p>Manufacturing and quality control are carried out under ISO 9001:2015 quality management system. Dedicated production and inspection facilities help ensure product accuracy, consistency and batch-to-batch repeatability. Inspection reports, material certificates and coating data can be provided according to project requirements.</p>
          <p>Our optical components are used in laser systems, aerospace, scientific research, medical equipment, electronics, industrial sensing and other advanced optical applications. Building on extensive experience serving customers across North America, Europe and Asia, Baitec Optics is committed to bringing Changchun’s precision optical manufacturing capabilities to customers worldwide.</p>
        </div>
        <a className="button about-simple-button" href="mailto:sales@baitecoptics.com">Discuss your project <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
