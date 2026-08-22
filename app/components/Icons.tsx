type IconProps = { className?: string };

export function ArrowUpRight({ className = "ui-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function ArrowDown({ className = "ui-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M7 14l5 5 5-5" /></svg>;
}

export function WeChatIcon({ className = "social-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M9.1 4C4.6 4 1 6.8 1 10.3c0 2 1.2 3.8 3.1 5l-.8 2.5 2.9-1.4c.9.2 1.8.3 2.8.3h.5a5.7 5.7 0 0 1-.3-1.8c0-3.5 3.2-6.4 7.3-6.6C15.4 5.8 12.5 4 9.1 4Zm-2.7 4.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/><path fill="currentColor" stroke="none" d="M23 14.9c0-3-3-5.5-6.6-5.5s-6.5 2.5-6.5 5.5 2.9 5.5 6.5 5.5c.8 0 1.5-.1 2.2-.3l2.4 1.2-.6-2.1c1.6-1 2.6-2.5 2.6-4.3Zm-8.8-1a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm4.5 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" /></svg>;
}

export function WhatsAppIcon({ className = "social-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.1 7.6c.3-.5.6-.5.9-.5h.4l1 2.3c.1.3.1.5-.1.8l-.7.9c-.2.2-.1.4 0 .6.8 1.4 1.9 2.4 3.3 3.1.3.1.5.2.7-.1l.9-1.1c.2-.3.5-.3.8-.2l2.2 1c.3.1.5.3.5.5 0 .5-.3 1.5-.8 2-.5.6-1.4.9-2.3.7-1.5-.3-3.4-1.1-5.2-2.7-1.5-1.4-2.6-3.1-3-4.4-.3-1.1.1-2.1.5-2.6l.9-.3Z" /></svg>;
}

export function MailIcon({ className = "social-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6" /></svg>;
}

export function PhoneIcon({ className = "social-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 7.8 8.5 10c1.2 2.5 3 4.3 5.5 5.5l2.2-1.5 4.3 2.8-.5 2.6c-.2 1-1.1 1.6-2.1 1.5C9.8 20 4 14.2 3.1 6.1 3 5.1 3.6 4.2 4.6 4l2.6-.5Z" /></svg>;
}

export function FacebookIcon({ className = "social-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M14 8.3V6.8c0-.8.5-1 1-1h2.7V2h-3.5C10.8 2 10 4.5 10 6.3v2H7v4h3V22h4v-9.7h3.4l.5-4H14Z" /></svg>;
}

export function LinkedInIcon({ className = "social-icon" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M4.5 3A2.5 2.5 0 1 0 4.5 8a2.5 2.5 0 0 0 0-5ZM2.5 9.5h4V22h-4V9.5ZM9 9.5h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2V22h-4v-6c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H9V9.5Z" /></svg>;
}
