"use strict";

const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
function updateNavigation() {
  const currentHash = navLinks.some(link => link.hash === window.location.hash)
    ? window.location.hash
    : "#about";
  for (const link of navLinks) {
    if (link.hash === currentHash) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

window.addEventListener("hashchange", updateNavigation);
updateNavigation();
