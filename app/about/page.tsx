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
          <p>Baitec Optics Co., Ltd. is located in Changchun, China, one of the country’s leading centers for optical research and precision manufacturing. Our team company, Baitai Precision Optical Instrument Technology Co., Ltd., was established in 2005 and has over 20 years of experience in manufacturing custom high-precision optical components. By bringing together Baitec’s international customer service and Baitai’s engineering and production capabilities, we provide integrated support covering technical communication, manufacturability review, production coordination, quality inspection and international delivery.</p>
          <p>Our main products include optical lenses, prisms, windows, mirrors and custom optical components. We process a wide range of optical glasses, fused silica, crystalline materials and infrared materials, including N-BK7, CaF₂, MgF₂, ZnSe, ZnS and Si.</p>
          <p>Our manufacturing capabilities cover rough grinding, fine grinding, precision polishing, crystal processing, centering, cementing and optical inspection. From prototype development and low-volume customization to repeat orders and volume production, we manufacture optical components according to customer drawings, technical specifications and application requirements. Our experienced manufacturing team can also evaluate complex geometries, demanding tolerances and non-standard material combinations.</p>
          <p>Manufacturing and quality control are carried out under Baitai’s ISO 9001:2015 quality management system. Dedicated production and inspection facilities help ensure product accuracy, consistency and batch-to-batch repeatability. Inspection reports, material certificates and coating data can be provided according to project requirements.</p>
          <p>Our optical components are used in laser systems, aerospace, scientific research, medical equipment, electronics, industrial sensing and other advanced optical applications. Building on extensive experience serving customers across North America, Europe and Asia, Baitec Optics is committed to bringing Changchun’s precision optical manufacturing capabilities to customers worldwide.</p>
        </div>
        <a className="button about-simple-button" href="mailto:sales@baitecoptics.com">Discuss your project <ArrowUpRight /></a>
      </section>

      <section className="about-certificates section" aria-labelledby="quality-certification-title">
        <div className="about-certificates-heading">
          <div>
            <p className="kicker">Quality management</p>
            <h2 id="quality-certification-title">ISO 9001:2015 Certification</h2>
          </div>
          <p>Baitai’s quality management system is certified to GB/T 19001-2016 / ISO 9001:2015 for the manufacture of high-precision optical glass and crystal components.</p>
        </div>

        <div className="certificate-grid">
          <article className="certificate-card">
            <img src="/certificates/iso-9001-2015-en.webp" alt="English ISO 9001:2015 certificate for Changchun Baitai Precision Optical Instrument Technology Co., Ltd." width="1075" height="1521" loading="lazy" />
            <div>
              <h3>English Certificate</h3>
            </div>
          </article>

          <article className="certificate-card">
            <img src="/certificates/iso-9001-2015-cn.webp" alt="Chinese ISO 9001:2015 certificate for Changchun Baitai Precision Optical Instrument Technology Co., Ltd." width="1075" height="1521" loading="lazy" />
            <div>
              <h3>Chinese Certificate</h3>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
