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

  // Live UTC clock in the network panel header
  var clock = document.getElementById("net-clock");
  if (clock) {
    function tick() {
      var d = new Date();
      clock.textContent = d.toISOString().slice(11, 19) + " UTC";
    }
    tick();
    setInterval(tick, 1000);
  }
})();
