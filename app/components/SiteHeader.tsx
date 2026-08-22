"use client";

import { useState } from "react";
import { ArrowUpRight } from "./Icons";

const navigation = [
  ["Home", "/#top"],
  ["About Us", "/about"],
  ["Workshop Equipment", "/workshop-equipment"],
  ["Contact Us", "/contact"],
];

const productCategories = [
  ["Optical Lenses", "/products/optical-lenses"],
  ["Optical Prisms", "/products/optical-prisms"],
  ["Windows & Flat Optics", "/products/windows-flat-optics"],
  ["Optical Mirrors", "/products/optical-mirrors"],
  ["Beam Shaping Optics", "/products/beam-shaping-optics"],
  ["Optical Filters", "/products/optical-filters"],
  ["Infrared Optics", "/products/infrared-optics"],
  ["OEM Optical Solutions", "/products/oem-optical-solutions"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Baitec Optics home">
        <img className="brand-logo" src="/baitec-logo.png" alt="Baitec Optics" />
      </a>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
        {navigation.slice(0, 2).map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <div className="nav-products">
          <a className="nav-products-trigger" href="/products">Products <span aria-hidden="true">⌄</span></a>
          <div className="nav-products-menu" aria-label="Product categories">
            {productCategories.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
        </div>
        {navigation.slice(2).map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="button button-small" href="/#contact">Request a quote <ArrowUpRight /></a>
    </header>
  );
}
