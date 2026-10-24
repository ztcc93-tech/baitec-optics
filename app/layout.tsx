import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SocialRail from "./components/SocialRail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baitec Optics | Custom Precision Optical Components",
  description: "Custom lenses, windows, prisms, domes and infrared optical components manufactured in Changchun, China.",
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://baitecoptics.com/#organization", name: "Baitec Optics", url: "https://baitecoptics.com", logo: "https://baitecoptics.com/baitec-logo.png", email: "sales@baitecoptics.com", telephone: "+86 166 4370 9988" }, { "@type": "WebSite", "@id": "https://baitecoptics.com/#website", url: "https://baitecoptics.com", name: "Baitec Optics", publisher: { "@id": "https://baitecoptics.com/#organization" } }] }) }} />
        {children}
        <SocialRail />
      </body>
    </html>
  );
}
