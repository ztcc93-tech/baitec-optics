"use client";

import { useEffect, useState } from "react";

type Props = {
  images: readonly string[];
  title: string;
};

export default function ProductImageGallery({ images, title }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isPaused || images.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [images.length, isPaused]);

  const showPrevious = () => setActiveImage((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveImage((current) => (current + 1) % images.length);

  useEffect(() => {
    if (!isExpanded) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded, images.length]);

  return (
    <div className="product-image-gallery product-banner" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="compact-product-photo">
        <button className="product-banner-open" type="button" onClick={() => setIsExpanded(true)} aria-label="Enlarge product image">
          <img src={images[activeImage]} alt={`${title} – view ${activeImage + 1}`} />
        </button>
        <button className="product-banner-arrow product-banner-arrow-left" type="button" onClick={showPrevious} aria-label="Previous product image">‹</button>
        <button className="product-banner-arrow product-banner-arrow-right" type="button" onClick={showNext} aria-label="Next product image">›</button>
        <div className="product-banner-dots" aria-label={`${title} product images`}>
          {images.map((image, index) => (
            <button
              className={index === activeImage ? "is-active" : ""}
              type="button"
              key={image}
              onClick={() => setActiveImage(index)}
              aria-label={`Show ${title} image ${index + 1}`}
              aria-pressed={index === activeImage}
            />
          ))}
        </div>
      </div>
      {isExpanded && (
        <div className="product-lightbox" role="dialog" aria-modal="true" aria-label={`${title} enlarged image`} onClick={() => setIsExpanded(false)}>
          <button className="product-lightbox-close" type="button" onClick={() => setIsExpanded(false)} aria-label="Close enlarged image">×</button>
          <button className="product-lightbox-arrow product-lightbox-arrow-left" type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous product image">‹</button>
          <img src={images[activeImage]} alt={`${title} – enlarged view ${activeImage + 1}`} onClick={(event) => event.stopPropagation()} />
          <button className="product-lightbox-arrow product-lightbox-arrow-right" type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next product image">›</button>
          <span className="product-lightbox-count">{activeImage + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}
