// Fills the page from js/config.js and hides links that are not ready yet.

(function () {
  var config = typeof WEDDING_CONFIG === "undefined" ? null : WEDDING_CONFIG;

  function ready() {
    document.body.classList.add("is-ready");
  }

  if (!config) {
    ready();
    return;
  }

  function text(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value || "";
  }

  function clean(value) {
    return String(value || "").trim();
  }

  function usableUrl(value) {
    var url = clean(value);
    if (!url || /^\[[^\]]+\]$/.test(url)) return "";
    if (!/^https?:\/\//i.test(url)) return "";
    return url;
  }

  function photoSrc(value) {
    var src = clean(value);
    if (!src || /^\[[^\]]+\]$/.test(src)) return "";
    if (/^(javascript|data):/i.test(src)) return "";
    return src;
  }

  var backgroundColor = clean(config.backgroundColor);
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(backgroundColor)) {
    document.documentElement.style.setProperty("--ivory", backgroundColor);
    var theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", backgroundColor);
  }

  var image = document.getElementById("engagement-photo");
  var placeholder = document.getElementById("photo-placeholder");
  var src = photoSrc(config.photoSrc);

  if (image && placeholder && src) {
    placeholder.hidden = true;
    image.alt = clean(config.photoAlt) || "Engagement photo";
    image.addEventListener("load", function () {
      image.hidden = false;
    });
    image.addEventListener("error", function () {
      image.hidden = true;
      image.removeAttribute("src");
      placeholder.hidden = false;
    });
    image.src = src;
  }

  function applyLink(anchor, url) {
    if (!anchor) return;
    if (url) {
      anchor.href = url;
      anchor.removeAttribute("aria-disabled");
    } else {
      anchor.removeAttribute("href");
      anchor.setAttribute("aria-disabled", "true");
    }
  }

  applyLink(document.getElementById("address-link"), usableUrl(config.addressFormUrl));

  ready();
})();
