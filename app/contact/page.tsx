import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import InquiryForm from "../components/InquiryForm";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="contact-page-hero">
        <div className="breadcrumb contact-breadcrumb"><a href="/">Home</a><span>/</span><b>Contact Us</b></div>
        <div className="contact-page-heading">
          <p className="eyebrow"><span /> Contact Baitec Optics</p>
          <h1>Tell us about<br /><em>your optical project.</em></h1>
          <p>Share your requirements with us. We will review your inquiry and get back to you by email.</p>
        </div>
      </section>

      <section className="contact-form-section section">
        <div className="contact-form-intro">
          <p className="kicker">Inquiry form</p>
          <h2>Start a conversation.</h2>
          <p>You can also contact us directly at <a href="mailto:sales@baitecoptics.com">sales@baitecoptics.com</a></p>
        </div>

        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}
