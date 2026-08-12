import { FacebookIcon, LinkedInIcon, MailIcon, PhoneIcon, WeChatIcon, WhatsAppIcon } from "./Icons";

const pendingLink = "/#contact";

export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Contact Baitec Optics">
      <a href={pendingLink} title="WeChat details available on request" aria-label="WeChat"><WeChatIcon /><span>WeChat</span></a>
      <a href={pendingLink} title="WhatsApp number to be added" aria-label="WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
      <a href={pendingLink} title="Telephone number to be added" aria-label="Phone"><PhoneIcon /><span>Phone</span></a>
      <a href="mailto:baitecoptics@gmail.com" title="Email Baitec Optics" aria-label="Email"><MailIcon /><span>Email</span></a>
      <a href={pendingLink} title="Facebook link to be added" aria-label="Facebook"><FacebookIcon /><span>Facebook</span></a>
      <a href={pendingLink} title="LinkedIn link to be added" aria-label="LinkedIn"><LinkedInIcon /><span>LinkedIn</span></a>
    </aside>
  );
}
