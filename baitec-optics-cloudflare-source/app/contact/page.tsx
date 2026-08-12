import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SocialRail from "../components/SocialRail";
import { ArrowUpRight } from "../components/Icons";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <SocialRail />

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
          <p>You can also contact us directly at <a href="mailto:baitecoptics@gmail.com">baitecoptics@gmail.com</a></p>
        </div>

        <form className="contact-form" action="mailto:baitecoptics@gmail.com" method="post" encType="text/plain">
          <label>
            <span>Email <b>*</b></span>
            <input type="email" name="Email" autoComplete="email" placeholder="your@email.com" required />
          </label>
          <label>
            <span>Name <b>*</b></span>
            <input type="text" name="Name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Inquiry <b>*</b></span>
            <textarea name="Inquiry" rows={8} placeholder="Please tell us about the optical component, specifications and quantity you require." required />
          </label>
          <button className="button contact-submit" type="submit">Send inquiry <ArrowUpRight /></button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
