import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowUpRight } from "../components/Icons";

const workshopImages = [
  ["High-Speed Polishing", "/workshop/high-speed-polishing-1.webp"],
  ["High-Speed Polishing", "/workshop/high-speed-polishing-2.webp"],
  ["Low-Speed Polishing", "/workshop/low-speed-polishing.webp"],
  ["Milling Workshop", "/workshop/milling-workshop.webp"],
  ["Inspection Equipment", "/workshop/inspection-equipment-1.webp"],
  ["Inspection Equipment", "/workshop/inspection-equipment-2.webp"],
  ["Inspection Equipment", "/workshop/inspection-equipment-3.webp"],
  ["Inspection Laboratory", "/workshop/inspection-laboratory.webp"],
  ["Coating Workshop", "/workshop/coating-workshop.webp"],
  ["Cementing Workshop", "/workshop/cementing-workshop.webp"],
  ["Assembly Workshop", "/workshop/assembly-workshop-1.webp"],
  ["Assembly Workshop", "/workshop/assembly-workshop-2.webp"],
];

export default function WorkshopEquipmentPage() {
  return (
    <main>
      <SiteHeader />

      <section className="workshop-hero">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><b>Workshop & Equipment</b></div>
        <div className="workshop-hero-copy">
          <div><p className="eyebrow"><span /> Manufacturing & inspection</p><h1>Workshop<br /><em>& Equipment.</em></h1></div>
          <p>Inside our optical manufacturing, inspection and assembly environment in Changchun.</p>
        </div>
      </section>

      <section className="workshop-gallery section">
        <div className="workshop-gallery-heading">
          <p className="kicker">Factory view</p>
          <p>Polishing · Milling · Inspection · Coating · Cementing · Assembly</p>
        </div>
        <div className="workshop-grid">
          {workshopImages.map(([title, image], index) => (
            <figure className="workshop-card" key={`${title}-${index}`}>
              <img src={image} alt={`${title} at Baitec Optics`} />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><b>{title}</b></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="workshop-cta section">
        <div><p className="kicker">Custom manufacturing</p><h2>Discuss your optical<br />component requirements.</h2></div>
        <a className="button" href="mailto:sales@baitecoptics.com">Contact Baitec <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
