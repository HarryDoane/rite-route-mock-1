/* Shipment journey: scroll-driven marker along the route line */
(function () {
  "use strict";

  var track = document.getElementById("j-track");
  var marker = document.getElementById("j-marker");
  var progress = document.getElementById("j-progress");
  if (!track || !marker || !progress) return;

  var waypoints = track.querySelectorAll("[data-wp]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    progress.style.height = "100%";
    marker.style.display = "none";
    waypoints.forEach(function (wp) { wp.classList.add("active"); });
    return;
  }

  var ticking = false;
  function update() {
    ticking = false;
    var rect = track.getBoundingClientRect();
    var focus = window.innerHeight * 0.55; // read line: just below viewport centre
    var p = (focus - rect.top) / rect.height;
    p = Math.max(0, Math.min(1, p));

    var y = p * rect.height;
    marker.style.top = y + "px";
    progress.style.height = (p * 100) + "%";

    waypoints.forEach(function (wp) {
      wp.classList.toggle("active", wp.offsetTop <= y + 20);
    });
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  // images decoding after DOMContentLoaded shift the track, and update() only
  // recomputes on scroll/resize — so the rail could sit stale until the user
  // moved. Recompute once everything has settled.
  window.addEventListener("load", onScroll);
  update();
})();
