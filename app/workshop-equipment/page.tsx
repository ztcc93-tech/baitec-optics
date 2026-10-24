import { getSeoMetadata } from "../data/seoMetadata";
export const metadata = getSeoMetadata("/workshop-equipment");

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowUpRight } from "../components/Icons";

const processSteps = [
  { number: "01", title: "Shaping & Milling", image: "/workshop/new/milling-workshop.webp", copy: "Optical blanks are prepared and shaped to establish the required geometry before fine surface processing." },
  { number: "02", title: "Precision Polishing", image: "/workshop/new/precision-polishing-1.webp", copy: "Controlled polishing stages refine optical surfaces toward the specified figure, flatness and finish." },
  { number: "03", title: "Optical Coating", image: "/workshop/new/coating-workshop.webp", copy: "Prepared components can receive application-specific optical coatings according to the required wavelength range." },
  { number: "04", title: "Cementing & Assembly", image: "/workshop/new/cementing-workshop.webp", copy: "Multi-element optics are aligned, bonded or assembled to meet the structure defined by the customer drawing." },
  { number: "05", title: "Inspection & Verification", image: "/workshop/new/inspection-laboratory.webp", copy: "Dimensions and optical characteristics are checked against the agreed specification before final release." },
];

const equipment = [
  { title: "Surface Figure Interferometer", image: "/workshop/new/surface-figure-interferometer.webp", copy: "Used to evaluate optical surface figure and wavefront-related characteristics during inspection." },
  { title: "Transmission Lens Centration Tester", image: "/workshop/new/centration-tester.webp", copy: "Supports centration inspection for transmissive optical components and lens assemblies." },
  { title: "Photoelectric Autocollimator", image: "/workshop/new/photoelectric-autocollimator.webp", copy: "Used for angular measurement and alignment checks on precision optical components." },
  { title: "Digital Thickness Measurement", image: "/workshop/new/digital-thickness.webp", copy: "Provides dimensional verification for component thickness and related drawing requirements." },
];

export default function WorkshopEquipmentPage() {
  return (
    <main className="workshop-page">
      <SiteHeader />
      <section className="workshop-new-hero">
        <div className="workshop-new-hero-copy">
          <div className="breadcrumb workshop-dark-breadcrumb"><a href="/">Home</a><span>/</span><b>Workshop & Equipment</b></div>
          <p className="eyebrow"><span /> Manufacturing · Inspection · Assembly</p>
          <h1>Where precision<br /><em>takes shape.</em></h1>
          <p className="workshop-hero-lead">A closer look at the production environment, processing stages and inspection equipment supporting custom optical components.</p>
          <div className="workshop-capability-row"><span>Optical fabrication</span><span>Process control</span><span>Quality verification</span></div>
        </div>
        <figure className="workshop-new-hero-image"><img src="/workshop/new/precision-polishing-hero.webp" alt="Precision optical polishing workshop" /><figcaption>Precision polishing workshop</figcaption></figure>
      </section>
      <section className="workshop-intro section">
        <div><p className="kicker">Inside the workshop</p><h2>Built around the complete manufacturing workflow.</h2></div>
        <div><p>From initial shaping and polishing through coating, assembly and final inspection, each stage is organized around the specifications defined in the customer drawing.</p><p>Our role is to connect manufacturing and verification so that material, geometry, surface requirements and coatings are considered as one complete optical component.</p></div>
      </section>
      <section className="workshop-environment section">
        <div className="workshop-environment-main"><img src="/workshop/new/workshop-overview.webp" alt="Baitec Optics production workshop" /><div><span>01</span><b>Production Environment</b><p>Dedicated areas support shaping, polishing and related optical processing stages.</p></div></div>
        <div className="workshop-environment-side">
          <figure><img src="/workshop/new/precision-polishing-2.webp" alt="Optical polishing equipment" /><figcaption>Polishing workshop</figcaption></figure>
          <figure><img src="/workshop/new/quality-control.webp" alt="Optical quality control area" /><figcaption>Quality control area</figcaption></figure>
        </div>
      </section>
      <section className="workshop-process section">
        <div className="workshop-section-heading"><div><p className="kicker">Typical process</p><h2>From optical blank<br />to verified component.</h2></div><p>The exact route varies by material, geometry, tolerance and coating requirement. The sequence below shows the main stages represented in our workshop.</p></div>
        <div className="workshop-process-list">{processSteps.map((step) => <article key={step.number}><div className="workshop-process-image"><img src={step.image} alt={step.title} /></div><div className="workshop-process-copy"><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}</div>
      </section>
      <section className="workshop-equipment-section section">
        <div className="workshop-section-heading workshop-equipment-heading"><div><p className="kicker">Inspection equipment</p><h2>Measure what<br />the drawing defines.</h2></div><p>Inspection methods are selected around the characteristics that matter for each component, from dimensions and centration to surface figure and angular alignment.</p></div>
        <div className="workshop-equipment-grid">{equipment.map((item, index) => <article key={item.title}><div className="workshop-equipment-image"><img src={item.image} alt={item.title} /></div><div><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div>
        <div className="workshop-inspection-strip"><img src="/workshop/new/inspection-station-1.webp" alt="Optical component dimensional inspection" /><img src="/workshop/new/inspection-station-3.webp" alt="Optical surface visual inspection" /><img src="/workshop/new/assembly-workshop.webp" alt="Optical assembly workshop" /></div>
      </section>
      <section className="workshop-new-cta section">
        <div><p className="kicker">Build-to-print optics</p><h2>Start with your drawing.</h2><p>Send the material, dimensions, tolerances, coating and inspection requirements for manufacturing review.</p></div>
        <a className="button" href="/contact">Send your inquiry <ArrowUpRight /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
