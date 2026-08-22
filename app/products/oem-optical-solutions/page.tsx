import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "OEM Optical Design Services | Custom Optical Systems | Baitec Optics",
  description: "Baitec Optics provides OEM optical design services for imaging, projection, laser scanning, measurement and machine vision systems, with prototype and custom production support.",
  keywords: ["OEM optical design", "custom optical system design", "industrial lens design", "custom industrial lenses", "machine vision optics", "optical design services"],
};

const conventional = ["Microscopy Systems", "Telescopic and Long-Range Imaging Systems", "Camera and Imaging Lenses", "Projection Optical Systems"];

export default function OemOpticalSolutionsPage() {
  return <main>
    <SiteHeader />
    <section className="oem-detail section">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><b>OEM Optical Solutions</b></div>

      <div className="oem-intro-grid">
        <div className="oem-image"><img src="/products/categories/08-oem-solutions.webp" alt="Custom optical system design and industrial lens development" /></div>
        <div className="oem-intro-copy">
          <p className="eyebrow"><span /> OEM optical design</p>
          <h1>OEM Optical Design Services</h1>
          <h2>Custom Optical Systems and Industrial Lenses</h2>
          <p>Baitec Optics provides custom optical system design and specialized industrial lens development for OEM applications.</p>
          <p>Our optical design services are supported by experienced professionals with research, technical or educational backgrounds connected to the Changchun Institute of Optics, Fine Mechanics and Physics, Chinese Academy of Sciences (CIOMP) and Changchun University of Science and Technology (CUST).</p>
          <p>With over 15 years of practical optical design experience, we combine professional optical design software, careful engineering and comprehensive testing methods to develop solutions based on each customer’s technical requirements.</p>
        </div>
      </div>

      <section className="oem-scope">
        <h2>Design Scope</h2>
        <div className="oem-scope-grid">
          <article><h3>Conventional Optical Systems</h3><ul>{conventional.map((item)=><li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="oem-cooperation"><h2>Flexible OEM Cooperation</h2><p>We offer flexible cooperation based on the technical requirements and intended application of each project. Prototype and trial production services are available to support design verification before production.</p><p>All customer drawings, technical information and custom designs are treated as confidential.</p></section>
      <p className="oem-note"><em>Other optical system requirements and custom design projects are welcome.</em></p>
    </section>
    <SiteFooter />
  </main>;
}
