import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowUpRight } from "../components/Icons";

const faqs = [
  {
    question: "Can you manufacture optical components from our drawings?",
    answer: "Yes. Custom manufacturing is our core service. We can work from your drawings, samples, or technical requirements.",
  },
  {
    question: "What types of optical components can you produce?",
    answer: "We offer lenses, windows, domes, prisms, mirrors, and other custom optical components.",
  },
  {
    question: "What materials and coatings are available?",
    answer: "Options include optical glass, quartz, sapphire, and infrared materials. Coatings can be specified for your wavelength range and application.",
  },
  {
    question: "Do you accept prototypes and small-batch orders?",
    answer: "Yes. We support prototypes, small batches, and volume production. Minimum order quantity depends on the design.",
  },
  {
    question: "What do you need to provide a quotation?",
    answer: "Please send your drawing or specifications, including material, dimensions, tolerances, coating requirements, and quantity.",
  },
  {
    question: "What is the lead time?",
    answer: "Lead time depends on the material, specifications, coating, and quantity. We will confirm the production schedule when providing a quotation.",
  },
];

export default function FAQPage() {
  return (
    <main className="faq-page">
      <SiteHeader />

      <section className="faq-hero">
        <div className="breadcrumb"><a href="/">Home</a><span>/</span><b>FAQ</b></div>
        <div className="faq-hero-grid">
          <div>
            <p className="eyebrow"><span /> Custom optics support</p>
            <h1>Questions before<br /><em>you request a quote.</em></h1>
          </div>
          <div className="faq-hero-note">
            <p>Send us your drawing or specifications for a manufacturing review.</p>
            <a href="/contact">Discuss your project <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <div className="faq-question">
                <span>Q.</span>
                <h3>{faq.question}</h3>
              </div>
              <p><span>A.</span>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-cta section">
        <div>
          <p className="kicker">Ready for review</p>
          <h2>Send us your drawing.</h2>
          <p>Include the material, dimensions, tolerances, coating requirements and quantity for a more efficient quotation.</p>
        </div>
        <a className="button" href="/contact">Request a quote <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
