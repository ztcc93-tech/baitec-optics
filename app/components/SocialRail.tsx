import { MailIcon, PhoneIcon, WeChatIcon, WhatsAppIcon } from "./Icons";

export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Contact Baitec Optics">
      <a href="tel:+8616643709988" aria-label="Call Baitec Optics at +86 166 4370 9988"><PhoneIcon /><span className="social-tooltip">+86 166 4370 9988</span></a>
      <a href="mailto:sales@baitecoptics.com" aria-label="Email Baitec Optics at sales@baitecoptics.com"><MailIcon /><span className="social-tooltip">sales@baitecoptics.com</span></a>
      <a href="https://wa.me/8616643709988" target="_blank" rel="noreferrer" aria-label="Chat with Baitec Optics on WhatsApp"><WhatsAppIcon /><span className="social-tooltip social-qr"><img src="/contact/whatsapp-qr.png" alt="" /></span></a>
      <a href="/contact/wechat-qr.png" target="_blank" rel="noreferrer" aria-label="Open Baitec Optics WeChat QR code"><WeChatIcon /><span className="social-tooltip social-qr"><img src="/contact/wechat-qr.png" alt="" /></span></a>
    </aside>
  );
}
