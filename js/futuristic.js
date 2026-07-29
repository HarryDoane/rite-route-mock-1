/* Command-center concept extras: metric count-up + live clock readout */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Count-up metrics: <span data-count="45000" data-suffix="+">
  function animateCount(el) {
    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || "";
    var decimals = (el.dataset.count.split(".")[1] || "").length;
    if (reduceMotion) {
      el.textContent = target.toLocaleString("en-US", { minimumFractionDigits: decimals }) + suffix;
      return;
    }
    var start = performance.now();
    var dur = 1400;
    function frame(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toLocaleString("en-US", {
        minimumFractionDigits: decimals, maximumFractionDigits: decimals
      }) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  } else {
    counters.forEach(animateCount);
  }
})();

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
