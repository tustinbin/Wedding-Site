// Applies photo, background, and hub links from js/config.js.

(function () {
  var config = typeof WEDDING_CONFIG === "undefined" ? null : WEDDING_CONFIG;

  function ready() {
    document.body.classList.add("is-ready");
  }

  if (!config) {
    ready();
    return;
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
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.removeAttribute("aria-disabled");
    } else {
      anchor.removeAttribute("href");
      anchor.removeAttribute("target");
      anchor.removeAttribute("rel");
      anchor.setAttribute("aria-disabled", "true");
    }
  }

  function applyQr(img, soon, path) {
    var qr = photoSrc(path);
    if (img && qr) {
      img.hidden = false;
      img.src = qr;
      if (soon) soon.hidden = true;
    } else if (img) {
      img.hidden = true;
      img.removeAttribute("src");
      if (soon) soon.hidden = false;
    }
  }

  applyLink(document.getElementById("venmo-link"), usableUrl(config.venmoUrl));
  applyLink(document.getElementById("registry-link"), usableUrl(config.registryUrl));
  applyLink(document.getElementById("rsvp-link"), usableUrl(config.rsvpUrl));
  applyQr(
    document.getElementById("rsvp-qr"),
    document.getElementById("rsvp-soon"),
    config.rsvpQr
  );

  ready();
})();
