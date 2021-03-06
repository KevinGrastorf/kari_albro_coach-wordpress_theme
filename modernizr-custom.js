/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-borderimage-borderradius-boxshadow-cssanimations-csscalc-cssgrid_cssgridlegacy-cssmask-flexbox-flexboxlegacy-json-mediaqueries-unicode-setclasses !*/
! function(e, n, t) {
  function r(e, n) {
    return typeof e === n
  }

  function s() {
    var e, n, t, s, o, i, a;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), x.push((s ? "" : "no-") + a.join("-"))
      }
  }

  function o(e) {
    var n = b.className,
      t = Modernizr._config.classPrefix || "";
    if (w && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), w ? b.className.baseVal = n : b.className = n)
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : w ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
  }

  function a() {
    var e = n.body;
    return e || (e = i(w ? "svg" : "body"), e.fake = !0), e
  }

  function l(e, t, r, s) {
    var o, l, d, u, f = "modernizr",
      c = i("div"),
      p = a();
    if (parseInt(r, 10))
      for (; r--;) d = i("div"), d.id = s ? s[r] : f + (r + 1), c.appendChild(d);
    return o = i("style"), o.type = "text/css", o.id = "s" + f, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), c.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), l = t(c, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = u, b.offsetHeight) : c.parentNode.removeChild(c), !!l
  }

  function d(e, n) {
    return !!~("" + e).indexOf(n)
  }

  function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
      return n + t.toUpperCase()
    }).replace(/^-/, "")
  }

  function f(e, n) {
    return function() {
      return e.apply(n, arguments)
    }
  }

  function c(e, n, t) {
    var s;
    for (var o in e)
      if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? f(s, t || n) : s);
    return !1
  }

  function p(e) {
    return e.replace(/([A-Z])/g, function(e, n) {
      return "-" + n.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function m(n, t, r) {
    var s;
    if ("getComputedStyle" in e) {
      s = getComputedStyle.call(e, n, t);
      var o = e.console;
      if (null !== s) r && (s = s.getPropertyValue(r));
      else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
      }
    } else s = !t && n.currentStyle && n.currentStyle[r];
    return s
  }

  function g(n, r) {
    var s = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--;)
        if (e.CSS.supports(p(n[s]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; s--;) o.push("(" + p(n[s]) + ":" + r + ")");
      return o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
        return "absolute" == m(e, null, "position")
      })
    }
    return t
  }

  function y(e, n, s, o) {
    function a() {
      f && (delete E.style, delete E.modElem)
    }
    if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
      var l = g(e, s);
      if (!r(l, "undefined")) return l
    }
    for (var f, c, p, m, y, h = ["modernizr", "tspan", "samp"]; !E.style && h.length;) f = !0, E.modElem = i(h.shift()), E.style = E.modElem.style;
    for (p = e.length, c = 0; p > c; c++)
      if (m = e[c], y = E.style[m], d(m, "-") && (m = u(m)), E.style[m] !== t) {
        if (o || r(s, "undefined")) return a(), "pfx" == n ? m : !0;
        try {
          E.style[m] = s
        } catch (v) {}
        if (E.style[m] != y) return a(), "pfx" == n ? m : !0
      }
    return a(), !1
  }

  function h(e, n, t, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + N.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined") ? y(a, n, s, o) : (a = (e + " " + P.join(i + " ") + i).split(" "), c(a, n, t))
  }

  function v(e, n, r) {
    return h(e, t, t, n, r)
  }
  var x = [],
    C = [],
    S = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        C.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function(e) {
        C.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = S, Modernizr = new Modernizr, Modernizr.addTest("json", "JSON" in e && "parse" in JSON && "stringify" in JSON);
  var b = n.documentElement,
    w = "svg" === b.nodeName.toLowerCase(),
    T = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  S._prefixes = T, Modernizr.addTest("csscalc", function() {
    var e = "width:",
      n = "calc(10px);",
      t = i("a");
    return t.style.cssText = e + T.join(n + e), !!t.style.length
  });
  var _ = S.testStyles = l;
  Modernizr.addTest("unicode", function() {
    var e, n = i("span"),
      t = i("span");
    return _("#modernizr{font-family:Arial,sans;font-size:300em;}", function(r) {
      n.innerHTML = w ? "妇" : "&#5987;", t.innerHTML = w ? "☆" : "&#9734;", r.appendChild(n), r.appendChild(t), e = "offsetWidth" in n && n.offsetWidth !== t.offsetWidth
    }), e
  });
  var z = "Moz O ms Webkit",
    N = S._config.usePrefixes ? z.split(" ") : [];
  S._cssomPrefixes = N;
  var P = S._config.usePrefixes ? z.toLowerCase().split(" ") : [];
  S._domPrefixes = P;
  var k = {
    elem: i("modernizr")
  };
  Modernizr._q.push(function() {
    delete k.elem
  });
  var E = {
    style: k.elem.style
  };
  Modernizr._q.unshift(function() {
    delete E.style
  }), S.testAllProps = h, S.testAllProps = v, Modernizr.addTest("cssanimations", v("animationName", "a", !0)), Modernizr.addTest("backgroundsize", v("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", v("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", v("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), Modernizr.addTest("cssgridlegacy", v("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", v("grid-template-rows", "none", !0)), Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), Modernizr.addTest("cssmask", v("maskRepeat", "repeat-x", !0));
  var j = function() {
    var n = e.matchMedia || e.msMatchMedia;
    return n ? function(e) {
      var t = n(e);
      return t && t.matches || !1
    } : function(n) {
      var t = !1;
      return l("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
        t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
      }), t
    }
  }();
  S.mq = j, Modernizr.addTest("mediaqueries", j("only all")), s(), o(x), delete S.addTest, delete S.addAsyncTest;
  for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
  e.Modernizr = Modernizr
}(window, document);
