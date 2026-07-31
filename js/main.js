/* Rite Route — shared behaviour: nav, header state, reveals, demo forms */

(function () {
  "use strict";

  // Mobile nav toggle
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Header shadow once the page scrolls
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll-reveal animations
  var revealed = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealed.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add("in"); });
  }

  // Hero still — fade it in once decoded (the slow Ken Burns drift is pure CSS).
  var heroImg = document.querySelector(".hero-v2__img");
  if (heroImg) {
    var revealHero = function () { heroImg.classList.add("is-loaded"); };
    if (heroImg.complete) { revealHero(); }
    else { heroImg.addEventListener("load", revealHero); }
  }

  // Demo form handling — forms are mockups until wired to a backend (see README)
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var success = form.querySelector(".form-success");
      if (success) success.classList.add("show");
      form.reset();
    });
  });
})();
