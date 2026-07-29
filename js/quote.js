/* Hero freight quote card.
   Two jobs: switch the FTL/LTL tab, and echo the typed lane back as freight
   notation so the shipper sees their own lane written the way a broker writes
   it. No backend — the form hands off to contact.html with the lane as query
   params, so nothing is lost when it submits. */
(function () {
  "use strict";

  var card = document.getElementById("quote");
  if (!card) return;

  var modes = card.querySelectorAll(".quote-card__mode");
  var modeField = document.getElementById("q-mode");
  var from = document.getElementById("q-from");
  var to = document.getElementById("q-to");
  var date = document.getElementById("q-date");
  var laneText = document.getElementById("lane-text");

  var MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  function currentMode() {
    var active = card.querySelector('.quote-card__mode[aria-checked="true"]');
    return active ? active.getAttribute("data-mode") : "FTL";
  }

  function formatDate(value) {
    // date inputs give YYYY-MM-DD; parse the parts directly to avoid the
    // timezone shift you get from new Date("YYYY-MM-DD")
    var parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
    if (!parts) return "";
    var month = MONTHS[parseInt(parts[2], 10) - 1];
    if (!month) return "";
    // non-breaking space so "7 AUG" never splits across lines
    return parseInt(parts[3], 10) + " " + month;
  }

  function render() {
    var a = (from.value || "").trim().toUpperCase();
    var b = (to.value || "").trim().toUpperCase();
    var when = formatDate(date.value);
    var mode = currentMode();

    if (!a && !b) {
      laneText.textContent = "Enter a lane to price it";
      return;
    }

    var bits = [
      "<b>" + (a || "—") + "</b>",
      '<span class="lane-strip__arrow">→</span>',
      "<b>" + (b || "—") + "</b>",
      "· " + mode + (mode === "FTL" ? " dry van" : " partial")
    ];
    // nowrap keeps "pickup 7 AUG" from splitting across lines
    if (when) bits.push('· <span style="white-space:nowrap">pickup ' + when + "</span>");
    laneText.innerHTML = bits.join(" ");
  }

  Array.prototype.forEach.call(modes, function (btn) {
    btn.addEventListener("click", function () {
      Array.prototype.forEach.call(modes, function (b) {
        b.setAttribute("aria-checked", b === btn ? "true" : "false");
      });
      if (modeField) modeField.value = btn.getAttribute("data-mode");
      render();
    });
  });

  [from, to, date].forEach(function (el) {
    if (el) el.addEventListener("input", render);
  });

  render();
})();
