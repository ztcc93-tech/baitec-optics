import { FacebookIcon } from "./Icons";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <figure className="footer-qr-item footer-qr-wechat">
        <img src="/contact/wechat-qr.png" alt="Baitec Optics WeChat QR code" />
        <figcaption>WeChat</figcaption>
      </figure>

      <div className="footer-center">
        <div className="footer-brand-block">
          <a className="brand brand-light" href="/#top"><img className="brand-logo" src="/baitec-logo.png" alt="Baitec Optics" /></a>
          <p className="footer-company">Changchun Baitec Optics Co., Ltd.</p>
        </div>
        <address className="footer-contact-details">
          <div><span>Telephone</span><a href="tel:+8616643709988">+86 166 4370 9988</a></div>
          <div><span>Email</span><a href="mailto:sales@baitecoptics.com">sales@baitecoptics.com</a></div>
          <div><span>WeChat ID</span><b>16643709988</b></div>
          <div><span>WhatsApp</span><a href="https://wa.me/8616643709988">+86 166 4370 9988</a></div>
          <div className="footer-address"><span>Address</span><b>No. 2566 Changsha Road, Changchun Economic and Technological Development Zone, Changchun, Jilin, China</b></div>
        </address>

      </div>

      <figure className="footer-qr-item footer-qr-whatsapp">
        <img src="/contact/whatsapp-qr.png" alt="Baitec Optics WhatsApp QR code" />
        <figcaption>WhatsApp</figcaption>
      </figure>

      <nav className="footer-socials" aria-label="Follow Baitec Optics">
        <a href="https://www.facebook.com/profile.php?id=61596018083563" target="_blank" rel="noopener noreferrer" aria-label="Baitec Optics on Facebook" title="Facebook"><FacebookIcon /></a>
        <a href="https://www.instagram.com/baitecoptics/" target="_blank" rel="noopener noreferrer" aria-label="Baitec Optics on Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://www.youtube.com/channel/UCNEjN8LAYhjhbcIgEH_wKdw" target="_blank" rel="noopener noreferrer" aria-label="Baitec Optics on YouTube" title="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.1a2.8 2.8 0 0 0-2-2C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.9 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg></a>
      </nav>

      <p className="footer-tagline">Precision optical components from Changchun to the world.</p>
      <p className="footer-copyright">© 2026 Baitec Optics</p>
    </footer>
  );
}
