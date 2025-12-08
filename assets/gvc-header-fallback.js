/**
 * GV CASA header logic fallback
 * Ensures the header background is white (with black text and logo)
 * when no hero/banner section is present on the page.
 */
document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector('#header-component');
  if (!header) return;

  // Detect hero/banner presence
  const hero = document.querySelector(
    '.shopify-section--slideshow, .banner--hero, .gvc-hero, .hero, [data-section-type="slideshow"], [data-section-type="hero"]'
  );

  // If no hero exists, enforce default (white) header
  if (!hero) {
    header.removeAttribute('transparent');
    header.classList.remove('color-inverse');
    header.classList.add('color-default');
    document.documentElement.style.setProperty('--header-logo-display', 'block');
    document.documentElement.style.setProperty('--header-logo-inverse-display', 'none');
  }
});
