!(function () {
  function t(t) {
    return t.querySelectorAll("iframe").length > 0;
  }
  function n() {
    return (
      "&parentPageUrl=" + window.location.origin + window.location.pathname
    );
  }
  function e(t) {
    var n = null;
    if (document.cookie && "" !== document.cookie)
      for (var e = document.cookie.split(";"), o = 0; o < e.length; o++) {
        var r = e[o].trim(),
          i = t + "=";
        if (r.substring(0, t.length + 1) === i) {
          n = r.substring(t.length + 1);
          break;
        }
      }
    return n;
  }
  function o(t) {
    return t ? "&parentHubspotUtk=" + t : "";
  }
  function r() {
    var t = window.location.search;
    return t ? "&" + t.substr(1) : "";
  }
  function i(t, n, e) {
    return "&ab=" + t + "&abStatus=" + n + "&contentId=" + e;
  }
  function a() {
    var t = new Date().getTime();
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (n) {
      var e = (t + 16 * Math.random()) % 16 | 0;
      t = Math.floor(t / 16);
      return ("x" === n ? e : (3 & e) | 8).toString(16);
    });
  }
  function s() {
    var t = window.crypto || window.msCrypto,
      n = new Uint16Array(8);
    t.getRandomValues(n);
    var e = function (t) {
      for (var n = t.toString(16); n.length < 4; ) n = "0" + n;
      return n;
    };
    return (
      e(n[0]) +
      e(n[1]) +
      e(n[2]) +
      e(n[3]) +
      e(n[4]) +
      e(n[5]) +
      e(n[6]) +
      e(n[7])
    );
  }
  function u() {
    var t = window.crypto || window.msCrypto;
    return void 0 !== t &&
      void 0 !== t.getRandomValues &&
      void 0 !== window.Uint16Array
      ? s()
      : a();
  }
  function c() {
    var t = window.__hsUserToken || e("hubspotutk");
    if (!t) {
      var n = u();
      t = n;
      window.__hsUserToken = n;
    }
    return t;
  }
  function d(t) {
    return (
      [
        "https://local.hubspot.com",
        "https://local.hubspotqa.com",
        "https://app.hubspotqa.com",
        "https://app.hubspot.com",
        "https://meetings.hubspot.com",
        "https://meetings.hubspotqa.com",
      ].indexOf(t) > -1
    );
  }
  var h,
    x = document.querySelectorAll(".meetings-iframe-container");
  for (h = 0; h < x.length; h++) {
    var l = x[h],
      p = l.dataset.src,
      g = l.dataset.title,
      m = document.createElement("iframe"),
      f = l.dataset.ab,
      w = l.dataset.abStatus,
      v = l.dataset.contentId,
      b = c();
    l.height = "100%";
    m.src = p + o(b) + n() + r() + i(f, w, v);
    g && (m.title = g);
    m.width = "100%";
    m.style.minWidth = "312px";
    m.style.minHeight = "516px";
    m.style.height = "756px";
    m.style.border = "none";
    if (!t(l)) {
      l.appendChild(m);
      window.addEventListener("message", y);
    }
    function y(t) {
      var n = t[t.message ? "message" : "data"];
      (d(t.origin) || t.origin.indexOf(window.origin) > -1) &&
        n.height &&
        (m.style.height = n.height + "px");
    }
  }
})();
