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

      <p className="footer-tagline">Precision optical components from Changchun to the world.</p>
      <p className="footer-copyright">© 2026 Baitec Optics</p>
    </footer>
  );
}
