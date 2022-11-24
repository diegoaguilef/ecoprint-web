/* import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false
 */

document.addEventListener("turbo:load", function () {
  
    !(function (e, t) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return t(e);
              })
        : t(e);
    })("undefined" != typeof window ? window : this, function (e, t) {
      "use strict";
      var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
          return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
      function m(e, t, n) {
        var i,
          o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
      }
      function x(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? l[c.call(e)] || "object"
          : typeof e;
      }
      var b = "3.3.1",
        w = function (e, t) {
          return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (w.fn = w.prototype =
        {
          jquery: "3.3.1",
          constructor: w,
          length: 0,
          toArray: function () {
            return o.call(this);
          },
          get: function (e) {
            return null == e
              ? o.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return w.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              w.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(o.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: s,
          sort: n.sort,
          splice: n.splice,
        }),
        (w.extend = w.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
            for (
              "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || g(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (n = a[t]),
                    a !== (r = e[t]) &&
                      (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                        ? (i
                            ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                            : (o = n && w.isPlainObject(n) ? n : {}),
                          (a[t] = w.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        w.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== c.call(e)) &&
              (!(t = i(e)) ||
                ("function" ==
                  typeof (n = f.call(t, "constructor") && t.constructor) &&
                  p.call(n) === d))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e) {
            m(e);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (C(e)) {
              for (n = e.length; r < n; r++)
                if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? w.merge(n, "string" == typeof e ? [e] : e)
                  : s.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
              (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              s = [];
            if (C(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s);
          },
          guid: 1,
          support: h,
        }),
        "function" == typeof Symbol &&
          (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
          }
        );
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = x(e);
        return (
          !g(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      var E = (function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y,
          v,
          m,
          x,
          b = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          E = ae(),
          k = ae(),
          S = ae(),
          D = function (e, t) {
            return e === t && (f = !0), 0;
          },
          N = {}.hasOwnProperty,
          A = [],
          j = A.pop,
          q = A.push,
          L = A.push,
          H = A.slice,
          O = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          P =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          I =
            "\\[" +
            M +
            "*(" +
            R +
            ")(?:" +
            M +
            "*([*^$|!~]?=)" +
            M +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            R +
            "))|)" +
            M +
            "*\\]",
          W =
            ":(" +
            R +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            I +
            ")*)|.*)\\)|)",
          $ = new RegExp(M + "+", "g"),
          B = new RegExp(
            "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
            "g"
          ),
          F = new RegExp("^" + M + "*," + M + "*"),
          _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          X = new RegExp(W),
          U = new RegExp("^" + R + "$"),
          V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                M +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                M +
                "*(?:([+-]|)" +
                M +
                "*(\\d+)|))" +
                M +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                M +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                M +
                "*((?:-\\d)?\\d*)" +
                M +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          G = /^(?:input|select|textarea|button)$/i,
          Y = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ee = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n
              ? t
              : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function (e, t) {
            return t
              ? "\0" === e
                ? "\ufffd"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          re = function () {
            p();
          },
          ie = me(
            function (e) {
              return !0 === e.disabled && ("form" in e || "label" in e);
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          L.apply((A = H.call(w.childNodes)), w.childNodes),
            A[w.childNodes.length].nodeType;
        } catch (e) {
          L = {
            apply: A.length
              ? function (e, t) {
                  q.apply(e, H.call(t));
                }
              : function (e, t) {
                  var n = e.length,
                    r = 0;
                  while ((e[n++] = t[r++]));
                  e.length = n - 1;
                },
          };
        }
        function oe(e, t, r, i) {
          var o,
            s,
            l,
            c,
            f,
            h,
            v,
            m = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
          if (
            ((r = r || []),
            "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
          )
            return r;
          if (
            !i &&
            ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
          ) {
            if (11 !== T && (f = J.exec(e)))
              if ((o = f[1])) {
                if (9 === T) {
                  if (!(l = t.getElementById(o))) return r;
                  if (l.id === o) return r.push(l), r;
                } else if (
                  m &&
                  (l = m.getElementById(o)) &&
                  x(t, l) &&
                  l.id === o
                )
                  return r.push(l), r;
              } else {
                if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                if (
                  (o = f[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return L.apply(r, t.getElementsByClassName(o)), r;
              }
            if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
              if (1 !== T) (m = t), (v = e);
              else if ("object" !== t.nodeName.toLowerCase()) {
                (c = t.getAttribute("id"))
                  ? (c = c.replace(te, ne))
                  : t.setAttribute("id", (c = b)),
                  (s = (h = a(e)).length);
                while (s--) h[s] = "#" + c + " " + ve(h[s]);
                (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
              }
              if (v)
                try {
                  return L.apply(r, m.querySelectorAll(v)), r;
                } catch (e) {
                } finally {
                  c === b && t.removeAttribute("id");
                }
            }
          }
          return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
          var e = [];
          function t(n, i) {
            return (
              e.push(n + " ") > r.cacheLength && delete t[e.shift()],
              (t[n + " "] = i)
            );
          }
          return t;
        }
        function se(e) {
          return (e[b] = !0), e;
        }
        function ue(e) {
          var t = d.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function le(e, t) {
          var n = e.split("|"),
            i = n.length;
          while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) while ((n = n.nextSibling)) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function fe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function pe(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function de(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function he(e) {
          return se(function (t) {
            return (
              (t = +t),
              se(function (n, r) {
                var i,
                  o = e([], n.length, t),
                  a = o.length;
                while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function ge(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
          (o = oe.isXML =
            function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName;
            }),
          (p = oe.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a !== d && 9 === a.nodeType && a.documentElement
                ? ((d = a),
                  (h = d.documentElement),
                  (g = !o(d)),
                  w !== d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", re, !1)
                      : i.attachEvent && i.attachEvent("onunload", re)),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = b),
                      !d.getElementsByName || !d.getElementsByName(b).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                          var n =
                            "undefined" != typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            (i = t.getElementsByName(e)), (r = 0);
                            while ((o = i[r++]))
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" != typeof t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (y = []),
                  (n.qsa = Q.test(d.querySelectorAll)) &&
                    (ue(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        b +
                        "'></a><select id='" +
                        b +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          y.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          y.push("\\[" + M + "*(?:value|" + P + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length ||
                          y.push("~="),
                        e.querySelectorAll(":checked").length ||
                          y.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length ||
                          y.push(".#.+[+~]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          y.push("name" + M + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          y.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          y.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        y.push(",.*:");
                    })),
                  (n.matchesSelector = Q.test(
                    (m =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = m.call(e, "*")),
                        m.call(e, "[s!='']:x"),
                        v.push("!=", W);
                    }),
                  (y = y.length && new RegExp(y.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = Q.test(h.compareDocumentPosition)),
                  (x =
                    t || Q.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            while ((t = t.parentNode)) if (t === e) return !0;
                          return !1;
                        }),
                  (D = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === d || (e.ownerDocument === w && x(w, e))
                              ? -1
                              : t === d || (t.ownerDocument === w && x(w, t))
                              ? 1
                              : c
                              ? O(c, e) - O(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e === d
                            ? -1
                            : t === d
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? O(c, e) - O(c, t)
                            : 0;
                        if (i === o) return ce(e, t);
                        n = e;
                        while ((n = n.parentNode)) a.unshift(n);
                        n = t;
                        while ((n = n.parentNode)) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r
                          ? ce(a[r], s[r])
                          : a[r] === w
                          ? -1
                          : s[r] === w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
          (oe.matches = function (e, t) {
            return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== d && p(e),
              (t = t.replace(z, "='$1']")),
              n.matchesSelector &&
                g &&
                !S[t + " "] &&
                (!v || !v.test(t)) &&
                (!y || !y.test(t)))
            )
              try {
                var r = m.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {}
            return oe(t, d, null, [e]).length > 0;
          }),
          (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
          }),
          (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && N.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (oe.escape = function (e) {
            return (e + "").replace(te, ne);
          }),
          (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (oe.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(D),
              f)
            ) {
              while ((t = e[o++])) t === e[o] && (i = r.push(o));
              while (i--) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = oe.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else while ((t = e[r++])) n += i(t);
              return n;
            }),
          ((r = oe.selectors =
            {
              cacheLength: 50,
              createPseudo: se,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(Z, ee)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || oe.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && oe.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return V.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(Z, ee).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = E[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                      E(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            ("undefined" != typeof e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = oe.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          y = t.parentNode,
                          v = s && t.nodeName.toLowerCase(),
                          m = !u && !s,
                          x = !1;
                        if (y) {
                          if (o) {
                            while (g) {
                              p = t;
                              while ((p = p[g]))
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === v
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? y.firstChild : y.lastChild]), a && m)
                          ) {
                            (x =
                              (d =
                                (l =
                                  (c =
                                    (f = (p = y)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]) && l[2]),
                              (p = d && y.childNodes[d]);
                            while (
                              (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                c[e] = [T, d, x];
                                break;
                              }
                          } else if (
                            (m &&
                              (x = d =
                                (l =
                                  (c =
                                    (f = (p = t)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]),
                            !1 === x)
                          )
                            while (
                              (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                            )
                              if (
                                (s
                                  ? p.nodeName.toLowerCase() === v
                                  : 1 === p.nodeType) &&
                                ++x &&
                                (m &&
                                  ((c =
                                    (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, x]),
                                p === t)
                              )
                                break;
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      oe.error("unsupported pseudo: " + e);
                  return i[b]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? se(function (e, n) {
                            var r,
                              o = i(e, t),
                              a = o.length;
                            while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: se(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(B, "$1"));
                  return r[b]
                    ? se(function (e, t, n, i) {
                        var o,
                          a = r(e, null, i, []),
                          s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: se(function (e) {
                  return function (t) {
                    return oe(e, t).length > 0;
                  };
                }),
                contains: se(function (e) {
                  return (
                    (e = e.replace(Z, ee)),
                    function (t) {
                      return (
                        (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                      );
                    }
                  );
                }),
                lang: se(function (e) {
                  return (
                    U.test(e || "") || oe.error("unsupported lang: " + e),
                    (e = e.replace(Z, ee).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Y.test(e.nodeName);
                },
                input: function (e) {
                  return G.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: he(function () {
                  return [0];
                }),
                last: he(function (e, t) {
                  return [t - 1];
                }),
                eq: he(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: he(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: he(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: he(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq);
        for (t in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
          (r.setFilters = new ye()),
          (a = oe.tokenize =
            function (e, t) {
              var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c = k[e + " "];
              if (c) return t ? 0 : c.slice(0);
              (s = e), (u = []), (l = r.preFilter);
              while (s) {
                (n && !(i = F.exec(s))) ||
                  (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = _.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(B, " ") }),
                    (s = s.slice(n.length)));
                for (a in r.filter)
                  !(i = V[a].exec(s)) ||
                    (l[a] && !(i = l[a](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: a, matches: i }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            });
        function ve(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
        }
        function me(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            a = n && "parentNode" === o,
            s = C++;
          return t.first
            ? function (t, n, i) {
                while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
              }
            : function (t, n, u) {
                var l,
                  c,
                  f,
                  p = [T, s];
                if (u) {
                  while ((t = t[r]))
                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else
                  while ((t = t[r]))
                    if (1 === t.nodeType || a)
                      if (
                        ((f = t[b] || (t[b] = {})),
                        (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((l = c[o]) && l[0] === T && l[1] === s)
                          return (p[2] = l[2]);
                        if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                      }
                return !1;
              };
        }
        function xe(e) {
          return e.length > 1
            ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function be(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
          return n;
        }
        function we(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
            (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
          return a;
        }
        function Te(e, t, n, r, i, o) {
          return (
            r && !r[b] && (r = Te(r)),
            i && !i[b] && (i = Te(i, o)),
            se(function (o, a, s, u) {
              var l,
                c,
                f,
                p = [],
                d = [],
                h = a.length,
                g = o || be(t || "*", s.nodeType ? [s] : s, []),
                y = !e || (!o && t) ? g : we(g, p, e, s, u),
                v = n ? (i || (o ? e : h || r) ? [] : a) : y;
              if ((n && n(y, v, s, u), r)) {
                (l = we(v, d)), r(l, [], s, u), (c = l.length);
                while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
              }
              if (o) {
                if (i || e) {
                  if (i) {
                    (l = []), (c = v.length);
                    while (c--) (f = v[c]) && l.push((y[c] = f));
                    i(null, (v = []), l, u);
                  }
                  c = v.length;
                  while (c--)
                    (f = v[c]) &&
                      (l = i ? O(o, f) : p[c]) > -1 &&
                      (o[l] = !(a[l] = f));
                }
              } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
            })
          );
        }
        function Ce(e) {
          for (
            var t,
              n,
              i,
              o = e.length,
              a = r.relative[e[0].type],
              s = a || r.relative[" "],
              u = a ? 1 : 0,
              c = me(
                function (e) {
                  return e === t;
                },
                s,
                !0
              ),
              f = me(
                function (e) {
                  return O(t, e) > -1;
                },
                s,
                !0
              ),
              p = [
                function (e, n, r) {
                  var i =
                    (!a && (r || n !== l)) ||
                    ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                  return (t = null), i;
                },
              ];
            u < o;
            u++
          )
            if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
            else {
              if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                return Te(
                  u > 1 && xe(p),
                  u > 1 &&
                    ve(
                      e
                        .slice(0, u - 1)
                        .concat({ value: " " === e[u - 2].type ? "*" : "" })
                    ).replace(B, "$1"),
                  n,
                  u < i && Ce(e.slice(u, i)),
                  i < o && Ce((e = e.slice(i))),
                  i < o && ve(e)
                );
              }
              p.push(n);
            }
          return xe(p);
        }
        function Ee(e, t) {
          var n = t.length > 0,
            i = e.length > 0,
            o = function (o, a, s, u, c) {
              var f,
                h,
                y,
                v = 0,
                m = "0",
                x = o && [],
                b = [],
                w = l,
                C = o || (i && r.find.TAG("*", c)),
                E = (T += null == w ? 1 : Math.random() || 0.1),
                k = C.length;
              for (
                c && (l = a === d || a || c);
                m !== k && null != (f = C[m]);
                m++
              ) {
                if (i && f) {
                  (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                  while ((y = e[h++]))
                    if (y(f, a || d, s)) {
                      u.push(f);
                      break;
                    }
                  c && (T = E);
                }
                n && ((f = !y && f) && v--, o && x.push(f));
              }
              if (((v += m), n && m !== v)) {
                h = 0;
                while ((y = t[h++])) y(x, b, a, s);
                if (o) {
                  if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                  b = we(b);
                }
                L.apply(u, b),
                  c &&
                    !o &&
                    b.length > 0 &&
                    v + t.length > 1 &&
                    oe.uniqueSort(u);
              }
              return c && ((T = E), (l = w)), x;
            };
          return n ? se(o) : o;
        }
        return (
          (s = oe.compile =
            function (e, t) {
              var n,
                r = [],
                i = [],
                o = S[e + " "];
              if (!o) {
                t || (t = a(e)), (n = t.length);
                while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e;
              }
              return o;
            }),
          (u = oe.select =
            function (e, t, n, i) {
              var o,
                u,
                l,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a((e = p.selector || e));
              if (((n = n || []), 1 === d.length)) {
                if (
                  (u = d[0] = d[0].slice(0)).length > 2 &&
                  "ID" === (l = u[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])
                  )
                    return n;
                  p && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                  if (((l = u[o]), r.relative[(c = l.type)])) break;
                  if (
                    (f = r.find[c]) &&
                    (i = f(
                      l.matches[0].replace(Z, ee),
                      (K.test(u[0].type) && ge(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(o, 1), !(e = i.length && ve(u))))
                      return L.apply(n, i), n;
                    break;
                  }
                }
              }
              return (
                (p || s(e, d))(
                  i,
                  t,
                  !g,
                  n,
                  !t || (K.test(e) && ge(t.parentNode)) || t
                ),
                n
              );
            }),
          (n.sortStable = b.split("").sort(D).join("") === b),
          (n.detectDuplicates = !!f),
          p(),
          (n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
          })),
          ue(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            le("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            ue(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            le("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          ue(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            le(P, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
            }),
          oe
        );
      })(e);
      (w.find = E),
        (w.expr = E.selectors),
        (w.expr[":"] = w.expr.pseudos),
        (w.uniqueSort = w.unique = E.uniqueSort),
        (w.text = E.getText),
        (w.isXMLDoc = E.isXML),
        (w.contains = E.contains),
        (w.escapeSelector = E.escape);
      var k = function (e, t, n) {
          var r = [],
            i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
              if (i && w(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        S = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        D = w.expr.match.needsContext;
      function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function j(e, t, n) {
        return g(t)
          ? w.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? w.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? w.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : w.filter(t, e, n);
      }
      (w.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? w.find.matchesSelector(r, e)
              ? [r]
              : []
            : w.find.matches(
                e,
                w.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        w.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                w(e).filter(function () {
                  for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(j(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(j(this, e || [], !0));
          },
          is: function (e) {
            return !!j(
              this,
              "string" == typeof e && D.test(e) ? w(e) : e || [],
              !1
            ).length;
          },
        });
      var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : L.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof w ? t[0] : t),
              w.merge(
                this,
                w.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : r,
                  !0
                )
              ),
              A.test(i[1]) && w.isPlainObject(t))
            )
              for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : g(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(w)
          : w.makeArray(e, this);
      }).prototype = w.fn),
        (q = w(r));
      var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
      w.fn.extend({
        has: function (e) {
          var t = w(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && w(e);
          if (!D.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && w.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(w(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      });
      function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
      }
      w.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return k(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n);
          },
          next: function (e) {
            return P(e, "nextSibling");
          },
          prev: function (e) {
            return P(e, "previousSibling");
          },
          nextAll: function (e) {
            return k(e, "nextSibling");
          },
          prevAll: function (e) {
            return k(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n);
          },
          siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return S(e.firstChild);
          },
          contents: function (e) {
            return N(e, "iframe")
              ? e.contentDocument
              : (N(e, "template") && (e = e.content || e),
                w.merge([], e.childNodes));
          },
        },
        function (e, t) {
          w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (r = n),
              r && "string" == typeof r && (i = w.filter(r, i)),
              this.length > 1 &&
                (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
      var M = /[^\x20\t\r\n\f]+/g;
      function R(e) {
        var t = {};
        return (
          w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
              n = a.shift();
              while (++s < o.length)
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            }
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    w.each(n, function (n, r) {
                      g(r)
                        ? (e.unique && l.has(r)) || o.push(r)
                        : r && r.length && "string" !== x(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                w.each(arguments, function (e, t) {
                  var n;
                  while ((n = w.inArray(t, o, n)) > -1)
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? w.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      };
      function I(e) {
        return e;
      }
      function W(e) {
        throw e;
      }
      function $(e, t, n, r) {
        var i;
        try {
          e && g((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && g((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      w.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                w.Callbacks("memory"),
                w.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                w.Callbacks("once memory"),
                w.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                w.Callbacks("once memory"),
                w.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            r = "pending",
            i = {
              state: function () {
                return r;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return i.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return w
                  .Deferred(function (t) {
                    w.each(n, function (n, r) {
                      var i = g(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && g(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (t, r, i) {
                var o = 0;
                function a(t, n, r, i) {
                  return function () {
                    var s = this,
                      u = arguments,
                      l = function () {
                        var e, l;
                        if (!(t < o)) {
                          if ((e = r.apply(s, u)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (l =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            g(l)
                              ? i
                                ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                : (o++,
                                  l.call(
                                    e,
                                    a(o, n, I, i),
                                    a(o, n, W, i),
                                    a(o, n, I, n.notifyWith)
                                  ))
                              : (r !== I && ((s = void 0), (u = [e])),
                                (i || n.resolveWith)(s, u));
                        }
                      },
                      c = i
                        ? l
                        : function () {
                            try {
                              l();
                            } catch (e) {
                              w.Deferred.exceptionHook &&
                                w.Deferred.exceptionHook(e, c.stackTrace),
                                t + 1 >= o &&
                                  (r !== W && ((s = void 0), (u = [e])),
                                  n.rejectWith(s, u));
                            }
                          };
                    t
                      ? c()
                      : (w.Deferred.getStackHook &&
                          (c.stackTrace = w.Deferred.getStackHook()),
                        e.setTimeout(c));
                  };
                }
                return w
                  .Deferred(function (e) {
                    n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                      n[1][3].add(a(0, e, g(t) ? t : I)),
                      n[2][3].add(a(0, e, g(r) ? r : W));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? w.extend(e, i) : i;
              },
            },
            o = {};
          return (
            w.each(n, function (e, t) {
              var a = t[2],
                s = t[5];
              (i[t[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      r = s;
                    },
                    n[3 - e][2].disable,
                    n[3 - e][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                a.add(t[3].fire),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[t[0] + "With"] = a.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            i = o.call(arguments),
            a = w.Deferred(),
            s = function (e) {
              return function (n) {
                (r[e] = this),
                  (i[e] = arguments.length > 1 ? o.call(arguments) : n),
                  --t || a.resolveWith(r, i);
              };
            };
          if (
            t <= 1 &&
            ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then))
          )
            return a.then();
          while (n--) $(i[n], s(n), a.reject);
          return a.promise();
        },
      });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (w.Deferred.exceptionHook = function (t, n) {
        e.console &&
          e.console.warn &&
          t &&
          B.test(t.name) &&
          e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
      }),
        (w.readyException = function (t) {
          e.setTimeout(function () {
            throw t;
          });
        });
      var F = w.Deferred();
      (w.fn.ready = function (e) {
        return (
          F.then(e)["catch"](function (e) {
            w.readyException(e);
          }),
          this
        );
      }),
        w.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) ||
              ((w.isReady = !0),
              (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
          },
        }),
        (w.ready.then = F.then);
      function _() {
        r.removeEventListener("DOMContentLoaded", _),
          e.removeEventListener("load", _),
          w.ready();
      }
      "complete" === r.readyState ||
      ("loading" !== r.readyState && !r.documentElement.doScroll)
        ? e.setTimeout(w.ready)
        : (r.addEventListener("DOMContentLoaded", _),
          e.addEventListener("load", _));
      var z = function (e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === x(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a);
          } else if (
            void 0 !== r &&
            ((i = !0),
            g(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(w(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
      function V(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(X, "ms-").replace(U, V);
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = w.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else for (r in t) i[G(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in r
                  ? [t]
                  : t.match(M) || []).length;
                while (n--) delete r[t[n]];
              }
              (void 0 === t || w.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
          },
        });
      var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            ("null" === e
              ? null
              : e === +e + ""
              ? +e
              : Z.test(e)
              ? JSON.parse(e)
              : e))
        );
      }
      function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = te(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      w.extend({
        hasData: function (e) {
          return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        w.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
              ) {
                n = a.length;
                while (n--)
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = G(r.slice(5))), ne(o, r, i[r]));
                J.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : z(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t) {
                      if (void 0 !== (n = K.get(o, e))) return n;
                      if (void 0 !== (n = ne(o, e))) return n;
                    } else
                      this.each(function () {
                        K.set(this, e, t);
                      });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        w.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = J.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = J.access(e, t, w.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = w._queueHooks(e, t),
              a = function () {
                w.dequeue(e, t);
              };
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, a, o)),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        w.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? w.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = w.queue(this, e, t);
                    w._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              w.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = w.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --r || i.resolveWith(o, [o]);
              };
            "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
            while (a--)
              (n = J.get(o[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), i.promise(t);
          },
        });
      var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display &&
              w.contains(e.ownerDocument, e) &&
              "none" === w.css(e, "display"))
          );
        },
        se = function (e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i;
        };
      function ue(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return w.css(e, t, "");
              },
          u = s(),
          l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
          c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
          (u /= 2), (l = l || c[3]), (c = +u || 1);
          while (a--)
            w.style(e, t, c + l),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (c /= o);
          (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
          i
        );
      }
      var le = {};
      function ce(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = le[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = w.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (le[r] = i),
          i)
        );
      }
      function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = J.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && ae(r) && (i[o] = ce(r)))
              : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      w.fn.extend({
        show: function () {
          return fe(this, !0);
        },
        hide: function () {
          return fe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide();
              });
        },
      });
      var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      (ge.optgroup = ge.option),
        (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td);
      function ye(e, t) {
        var n;
        return (
          (n =
            "undefined" != typeof e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : "undefined" != typeof e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
        );
      }
      function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      var me = /<|&#?\w+;/;
      function xe(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            l,
            c,
            f = t.createDocumentFragment(),
            p = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if ((o = e[d]) || 0 === o)
            if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
            else if (me.test(o)) {
              (a = a || f.appendChild(t.createElement("div"))),
                (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                (u = ge[s] || ge._default),
                (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
                (c = u[0]);
              while (c--) a = a.lastChild;
              w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((l = w.contains(o.ownerDocument, o)),
            (a = ye(f.appendChild(o), "script")),
            l && ve(a),
            n)
          ) {
            c = 0;
            while ((o = a[c++])) he.test(o.type || "") && n.push(o);
          }
        return f;
      }
      !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
          t = r.createElement("input");
        t.setAttribute("type", "radio"),
          t.setAttribute("checked", "checked"),
          t.setAttribute("name", "t"),
          e.appendChild(t),
          (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
      })();
      var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
      function Ee() {
        return !0;
      }
      function ke() {
        return !1;
      }
      function Se() {
        try {
          return r.activeElement;
        } catch (e) {}
      }
      function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          "string" != typeof n && ((r = r || n), (n = void 0));
          for (s in t) De(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = ke;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function (e) {
              return w().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = w.guid++))),
          e.each(function () {
            w.event.add(this, t, i, r, n);
          })
        );
      }
      (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y = J.get(e);
          if (y) {
            n.handler && ((n = (o = n).handler), (i = o.selector)),
              i && w.find.matchesSelector(be, i),
              n.guid || (n.guid = w.guid++),
              (u = y.events) || (u = y.events = {}),
              (a = y.handle) ||
                (a = y.handle =
                  function (t) {
                    return "undefined" != typeof w &&
                      w.event.triggered !== t.type
                      ? w.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              (l = (t = (t || "").match(M) || [""]).length);
            while (l--)
              (d = g = (s = Ce.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d &&
                  ((f = w.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = w.event.special[d] || {}),
                  (c = w.extend(
                    {
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && w.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = u[d]) ||
                    (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  (w.event.global[d] = !0));
          }
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y = J.hasData(e) && J.get(e);
          if (y && (u = y.events)) {
            l = (t = (t || "").match(M) || [""]).length;
            while (l--)
              if (
                ((s = Ce.exec(t[l]) || []),
                (d = g = s[1]),
                (h = (s[2] || "").split(".").sort()),
                d)
              ) {
                (f = w.event.special[d] || {}),
                  (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                  (s =
                    s[2] &&
                    new RegExp(
                      "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    )),
                  (a = o = p.length);
                while (o--)
                  (c = p[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (p.splice(o, 1),
                      c.selector && p.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                    w.removeEvent(e, d, y.handle),
                  delete u[d]);
              } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
            w.isEmptyObject(u) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t = w.event.fix(e),
            n,
            r,
            i,
            o,
            a,
            s,
            u = new Array(arguments.length),
            l = (J.get(this, "events") || {})[t.type] || [],
            c = w.event.special[t.type] || {};
          for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
          if (
            ((t.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, t))
          ) {
            (s = w.event.handlers.call(this, t, l)), (n = 0);
            while ((o = s[n++]) && !t.isPropagationStopped()) {
              (t.currentTarget = o.elem), (r = 0);
              while (
                (a = o.handlers[r++]) &&
                !t.isImmediatePropagationStopped()
              )
                (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                  ((t.handleObj = a),
                  (t.data = a.data),
                  void 0 !==
                    (i = (
                      (w.event.special[a.origType] || {}).handle || a.handler
                    ).apply(o.elem, u)) &&
                    !1 === (t.result = i) &&
                    (t.preventDefault(), t.stopPropagation()));
            }
            return c.postDispatch && c.postDispatch.call(this, t), t.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? w(i, this).index(l) > -1
                      : w.find(i, this, null, [l]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: l, handlers: o });
              }
          return (
            (l = this),
            u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: g(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[w.expando] ? e : new w.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== Se() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === Se() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && N(this, "input"))
                return this.click(), !1;
            },
            _default: function (e) {
              return N(e.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (w.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
          if (!(this instanceof w.Event)) return new w.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ee
                  : ke),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && w.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
          constructor: w.Event,
          isDefaultPrevented: ke,
          isPropagationStopped: ke,
          isImmediatePropagationStopped: ke,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ee),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ee),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ee),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        w.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && we.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Te.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          w.event.addProp
        ),
        w.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            w.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || w.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        w.fn.extend({
          on: function (e, t, n, r) {
            return De(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                w(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = ke),
              this.each(function () {
                w.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ne =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
          ? w(e).children("tbody")[0] || e
          : e;
      }
      function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Oe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
          if (
            J.hasData(e) &&
            ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
          ) {
            delete a.handle, (a.events = {});
            for (i in l)
              for (n = 0, r = l[i].length; n < r; n++)
                w.event.add(t, i, l[i][n]);
          }
          K.hasData(e) &&
            ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
      }
      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
          o,
          s,
          u,
          l,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          y = t[0],
          v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
          return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
          });
        if (
          p &&
          ((i = xe(t, e[0].ownerDocument, !1, e, r)),
          (o = i.firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
            (l = i),
              f !== d &&
                ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
              n.call(e[f], l, f);
          if (u)
            for (
              c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0;
              f < u;
              f++
            )
              (l = s[f]),
                he.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  w.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? w._evalUrl && w._evalUrl(l.src)
                    : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
      }
      function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode &&
              (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
              r.parentNode.removeChild(r));
        return e;
      }
      w.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            u = w.contains(e.ownerDocument, e);
          if (
            !(
              h.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              w.isXMLDoc(e)
            )
          )
            for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
              Me(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || ye(e), a = a || ye(s), r = 0, i = o.length;
                r < i;
                r++
              )
                Pe(o[r], a[r]);
            else Pe(e, s);
          return (
            (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = w.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Y(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        w.fn.extend({
          detach: function (e) {
            return Ie(this, e, !0);
          },
          remove: function (e) {
            return Ie(this, e);
          },
          text: function (e) {
            return z(
              this,
              function (e) {
                return void 0 === e
                  ? w.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Re(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Le(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Re(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Le(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Re(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Re(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (w.cleanData(ye(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return w.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return z(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Ae.test(e) &&
                  !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = w.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Re(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 &&
                  (w.cleanData(ye(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        w.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            w.fn[e] = function (e) {
              for (
                var n, r = [], i = w(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  w(i[a])[t](n),
                  s.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
          var n = t.ownerDocument.defaultView;
          return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
      !(function () {
        function t() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              be.appendChild(l).appendChild(c);
            var t = e.getComputedStyle(c);
            (i = "1%" !== t.top),
              (u = 12 === n(t.marginLeft)),
              (c.style.right = "60%"),
              (s = 36 === n(t.right)),
              (o = 36 === n(t.width)),
              (c.style.position = "absolute"),
              (a = 36 === c.offsetWidth || "absolute"),
              be.removeChild(l),
              (c = null);
          }
        }
        function n(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          o,
          a,
          s,
          u,
          l = r.createElement("div"),
          c = r.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
          w.extend(h, {
            boxSizingReliable: function () {
              return t(), o;
            },
            pixelBoxStyles: function () {
              return t(), s;
            },
            pixelPosition: function () {
              return t(), i;
            },
            reliableMarginLeft: function () {
              return t(), u;
            },
            scrollboxSize: function () {
              return t(), a;
            },
          }));
      })();
      function Fe(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || $e(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              w.contains(e.ownerDocument, e) ||
              (a = w.style(e, t)),
            !h.pixelBoxStyles() &&
              We.test(a) &&
              Be.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function _e(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
      function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
          n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
      }
      function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
      }
      function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
            r
              ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
                "margin" !== n &&
                  (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
              : ((u += w.css(e, "padding" + oe[a], !0, i)),
                "padding" !== n
                  ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
                  : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u += Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            )),
          u
        );
      }
      function et(e, t, n) {
        var r = $e(e),
          i = Fe(e, t, r),
          o = "border-box" === w.css(e, "boxSizing", !1, r),
          a = o;
        if (We.test(i)) {
          if (!n) return i;
          i = "auto";
        }
        return (
          (a = a && (h.boxSizingReliable() || i === e.style[t])),
          ("auto" === i ||
            (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
            ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (i = parseFloat(i) || 0) +
            Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
            "px"
        );
      }
      w.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Fe(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = G(t),
              u = Xe.test(t),
              l = e.style;
            if (
              (u || (t = Je(s)),
              (a = w.cssHooks[t] || w.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : l[t];
            "string" == (o = typeof n) &&
              (i = ie.exec(n)) &&
              i[1] &&
              ((n = ue(e, t, i)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = G(t);
          return (
            Xe.test(t) || (t = Je(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        w.each(["height", "width"], function (e, t) {
          w.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !ze.test(w.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? et(e, t, r)
                  : se(e, Ue, function () {
                      return et(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = $e(e),
                a = "border-box" === w.css(e, "boxSizing", !1, o),
                s = r && Ze(e, t, r, a, o);
              return (
                a &&
                  h.scrollboxSize() === o.position &&
                  (s -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      Ze(e, t, "border", !1, o) -
                      0.5
                  )),
                s &&
                  (i = ie.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = w.css(e, t))),
                Ke(e, n, s)
              );
            },
          };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Fe(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  se(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (w.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
          css: function (e, t) {
            return z(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = $e(e), i = t.length; a < i; a++)
                    o[t[a]] = w.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        });
      function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
      }
      (w.Tween = tt),
        (tt.prototype = {
          constructor: tt,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || w.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (w.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = tt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    w.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : tt.propHooks._default.set(this),
              this
            );
          },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              w.fx.step[e.prop]
                ? w.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[w.cssProps[e.prop]] &&
                    !w.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : w.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (w.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
      var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
      function at() {
        rt &&
          (!1 === r.hidden && e.requestAnimationFrame
            ? e.requestAnimationFrame(at)
            : e.setTimeout(at, w.fx.interval),
          w.fx.tick());
      }
      function st() {
        return (
          e.setTimeout(function () {
            nt = void 0;
          }),
          (nt = Date.now())
        );
      }
      function ut(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function lt(e, t, n) {
        for (
          var r,
            i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function ct(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = J.get(e, "fxshow");
        n.queue ||
          (null == (a = w._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
          }));
        for (r in t)
          if (((i = t[r]), it.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || w.style(e, r);
          }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
          f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = w.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === w.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1);
          for (r in d)
            u ||
              (y
                ? "hidden" in y && (g = y.hidden)
                : (y = J.access(e, "fxshow", { display: l })),
              o && (y.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r]);
              })),
              (u = lt(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
      }
      function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((r = G(n)),
            (i = t[r]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = w.cssHooks[r]) && "expand" in a)
          ) {
            (o = a.expand(o)), delete e[r];
            for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
          } else t[r] = i;
      }
      function pt(e, t, n) {
        var r,
          i,
          o = 0,
          a = pt.prefilters.length,
          s = w.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (i) return !1;
            for (
              var t = nt || st(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                o = 0,
                a = l.tweens.length;
              o < a;
              o++
            )
              l.tweens[o].run(r);
            return (
              s.notifyWith(e, [l, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            );
          },
          l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(
              !0,
              { specialEasing: {}, easing: w.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = w.Tween(
                e,
                l.opts,
                t,
                n,
                l.opts.specialEasing[t] || l.opts.easing
              );
              return l.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) l.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                  : s.rejectWith(e, [l, t]),
                this
              );
            },
          }),
          c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
          if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
            return (
              g(r.stop) &&
                (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          w.map(c, lt, l),
          g(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (w.Animation = w.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, ie.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (w.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? w.extend({}, e)
              : {
                  complete: n || (!n && t) || (g(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !g(t) && t),
                };
          return (
            w.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in w.fx.speeds
                  ? (r.duration = w.fx.speeds[r.duration])
                  : (r.duration = w.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
            }),
            r
          );
        }),
        w.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ae)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e),
              o = w.speed(t, n, r),
              a = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = w.timers,
                  a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || w.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = J.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = w.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    w.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
          var n = w.fn[t];
          w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ut(t, !0), e, r, i);
          };
        }),
        w.each(
          {
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            w.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (w.timers = []),
        (w.fx.tick = function () {
          var e,
            t = 0,
            n = w.timers;
          for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
          w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
          rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
          rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
          return (
            (t = w.fx ? w.fx.speeds[t] || t : t),
            (n = n || "fx"),
            this.queue(n, function (n, r) {
              var i = e.setTimeout(n, t);
              r.stop = function () {
                e.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = r.createElement("input"),
            t = r
              .createElement("select")
              .appendChild(r.createElement("option"));
          (e.type = "checkbox"),
            (h.checkOn = "" !== e.value),
            (h.optSelected = t.selected),
            ((e = r.createElement("input")).value = "t"),
            (e.type = "radio"),
            (h.radioValue = "t" === e.value);
        })();
      var dt,
        ht = w.expr.attrHandle;
      w.fn.extend({
        attr: function (e, t) {
          return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            w.removeAttr(this, e);
          });
        },
      }),
        w.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" == typeof e.getAttribute
                ? w.prop(e, t, n)
                : ((1 === o && w.isXMLDoc(e)) ||
                    (i =
                      w.attrHooks[t.toLowerCase()] ||
                      (w.expr.match.bool.test(t) ? dt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void w.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = w.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!h.radioValue && "radio" === t && N(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(M);
            if (i && 1 === e.nodeType)
              while ((n = i[r++])) e.removeAttribute(n);
          },
        }),
        (dt = {
          set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ht[t] || w.find.attr;
          ht[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = ht[a]),
                (ht[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (ht[a] = o)),
              i
            );
          };
        });
      var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
      w.fn.extend({
        prop: function (e, t) {
          return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[w.propFix[e] || e];
          });
        },
      }),
        w.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && w.isXMLDoc(e)) ||
                  ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = w.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
          (w.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        w.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            w.propFix[this.toLowerCase()] = this;
          }
        );
      function vt(e) {
        return (e.match(M) || []).join(" ");
      }
      function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : "string" == typeof e
          ? e.match(M) || []
          : [];
      }
      w.fn.extend({
        addClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (g(e))
            return this.each(function (t) {
              w(this).addClass(e.call(this, t, mt(this)));
            });
          if ((t = xt(e)).length)
            while ((n = this[u++]))
              if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                a = 0;
                while ((o = t[a++]))
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (g(e))
            return this.each(function (t) {
              w(this).removeClass(e.call(this, t, mt(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length)
            while ((n = this[u++]))
              if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                a = 0;
                while ((o = t[a++]))
                  while (r.indexOf(" " + o + " ") > -1)
                    r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : g(e)
            ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
              })
            : this.each(function () {
                var t, i, o, a;
                if (r) {
                  (i = 0), (o = w(this)), (a = xt(e));
                  while ((t = a[i++]))
                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          t = " " + e + " ";
          while ((n = this[r++]))
            if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
      var bt = /\r/g;
      w.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          {
            if (arguments.length)
              return (
                (r = g(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, w(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = w.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      w.valHooks[this.type] ||
                      w.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                })
              );
            if (i)
              return (t =
                w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(bt, "")
                : null == n
                ? ""
                : n;
          }
        },
      }),
        w.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = w.find.attr(e, "value");
                return null != t ? t : vt(w.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                  ) {
                    if (((t = w(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                var n,
                  r,
                  i = e.options,
                  o = w.makeArray(t),
                  a = i.length;
                while (a--)
                  ((r = i[a]).selected =
                    w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        w.each(["radio", "checkbox"], function () {
          (w.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = w.inArray(w(e).val(), t) > -1);
            },
          }),
            h.checkOn ||
              (w.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (h.focusin = "onfocusin" in e);
      var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation();
        };
      w.extend(w.event, {
        trigger: function (t, n, i, o) {
          var a,
            s,
            u,
            l,
            c,
            p,
            d,
            h,
            v = [i || r],
            m = f.call(t, "type") ? t.type : t,
            x = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((s = h = u = i = i || r),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !wt.test(m + w.event.triggered) &&
              (m.indexOf(".") > -1 &&
                ((m = (x = m.split(".")).shift()), x.sort()),
              (c = m.indexOf(":") < 0 && "on" + m),
              (t = t[w.expando]
                ? t
                : new w.Event(m, "object" == typeof t && t)),
              (t.isTrigger = o ? 2 : 3),
              (t.namespace = x.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (n = null == n ? [t] : w.makeArray(n, [t])),
              (d = w.event.special[m] || {}),
              o || !d.trigger || !1 !== d.trigger.apply(i, n)))
          ) {
            if (!o && !d.noBubble && !y(i)) {
              for (
                l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                v.push(s), (u = s);
              u === (i.ownerDocument || r) &&
                v.push(u.defaultView || u.parentWindow || e);
            }
            a = 0;
            while ((s = v[a++]) && !t.isPropagationStopped())
              (h = s),
                (t.type = a > 1 ? l : d.bindType || m),
                (p =
                  (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
                  p.apply(s, n),
                (p = c && s[c]) &&
                  p.apply &&
                  Y(s) &&
                  ((t.result = p.apply(s, n)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = m),
              o ||
                t.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                !Y(i) ||
                (c &&
                  g(i[m]) &&
                  !y(i) &&
                  ((u = i[c]) && (i[c] = null),
                  (w.event.triggered = m),
                  t.isPropagationStopped() && h.addEventListener(m, Tt),
                  i[m](),
                  t.isPropagationStopped() && h.removeEventListener(m, Tt),
                  (w.event.triggered = void 0),
                  u && (i[c] = u))),
              t.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
          w.event.trigger(r, null, t);
        },
      }),
        w.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              w.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0);
          },
        }),
        h.focusin ||
          w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  i = J.access(r, t) - 1;
                i
                  ? J.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
      w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
          n = void 0;
        }
        return (
          (n && !n.getElementsByTagName("parsererror").length) ||
            w.error("Invalid XML: " + t),
          n
        );
      };
      var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
      function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          w.each(t, function (t, i) {
            n || St.test(e)
              ? r(e, i)
              : jt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
      }
      (w.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
          w.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
      }),
        w.fn.extend({
          serialize: function () {
            return w.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = w.prop(this, "elements");
              return e ? w.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !w(this).is(":disabled") &&
                  At.test(this.nodeName) &&
                  !Nt.test(e) &&
                  (this.checked || !pe.test(e))
                );
              })
              .map(function (e, t) {
                var n = w(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? w.map(n, function (e) {
                      return { name: t.name, value: e.replace(Dt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Dt, "\r\n") };
              })
              .get();
          },
        });
      var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
      Bt.href = Ct.href;
      function Ft(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(M) || [];
          if (g(n))
            while ((r = o[i++]))
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function _t(e, t, n, r) {
        var i = {},
          o = e === Wt;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            w.each(e[s] || [], function (e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || o || i[l]
                ? o
                  ? !(u = l)
                  : void 0
                : (t.dataTypes.unshift(l), a(l), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function zt(e, t) {
        var n,
          r,
          i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
      }
      function Xt(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.contents,
          u = e.dataTypes;
        while ("*" === u[0])
          u.shift(),
            void 0 === r &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
          for (i in s)
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
        if (u[0] in n) o = u[0];
        else {
          for (i in n) {
            if (!u[0] || e.converters[i + " " + u[0]]) {
              o = i;
              break;
            }
            a || (a = i);
          }
          o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
      }
      function Ut(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = {},
          c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (u = o),
            (o = c.shift()))
          )
            if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                  if (
                    (s = i.split(" "))[1] === o &&
                    (a = l[u + " " + s[0]] || l["* " + s[0]])
                  ) {
                    !0 === a
                      ? (a = l[i])
                      : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                    break;
                  }
              if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + u + " to " + o,
                    };
                  }
            }
        return { state: "success", data: t };
      }
      w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: Pt.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": $t,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": w.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h = w.ajaxSetup({}, n),
            g = h.context || h,
            y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
            v = w.Deferred(),
            m = w.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            T = {},
            C = "canceled",
            E = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (c) {
                  if (!s) {
                    s = {};
                    while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                  }
                  t = s[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return c ? a : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == c &&
                    ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                    (b[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == c && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (c) E.always(e[E.status]);
                  else for (t in e) x[t] = [x[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || C;
                return i && i.abort(t), k(0, t), this;
              },
            };
          if (
            (v.promise(E),
            (h.url = ((t || h.url || Ct.href) + "").replace(
              Rt,
              Ct.protocol + "//"
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
            null == h.crossDomain)
          ) {
            l = r.createElement("a");
            try {
              (l.href = h.url),
                (l.href = l.href),
                (h.crossDomain =
                  Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = w.param(h.data, h.traditional)),
            _t(It, h, n, E),
            c)
          )
            return E;
          (f = w.event && h.global) &&
            0 == w.active++ &&
            w.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Mt.test(h.type)),
            (o = h.url.replace(Lt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(qt, "+"))
              : ((d = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Ht, "$1")),
                  (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                (h.url = o + d)),
            h.ifModified &&
              (w.lastModified[o] &&
                E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
              w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              n.contentType) &&
              E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
                : h.accepts["*"]
            );
          for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
            return E.abort();
          if (
            ((C = "abort"),
            m.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            (i = _t(Wt, h, n, E)))
          ) {
            if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
              return E;
            h.async &&
              h.timeout > 0 &&
              (u = e.setTimeout(function () {
                E.abort("timeout");
              }, h.timeout));
            try {
              (c = !1), i.send(b, k);
            } catch (e) {
              if (c) throw e;
              k(-1, e);
            }
          } else k(-1, "No Transport");
          function k(t, n, r, s) {
            var l,
              p,
              d,
              b,
              T,
              C = n;
            c ||
              ((c = !0),
              u && e.clearTimeout(u),
              (i = void 0),
              (a = s || ""),
              (E.readyState = t > 0 ? 4 : 0),
              (l = (t >= 200 && t < 300) || 304 === t),
              r && (b = Xt(h, E, r)),
              (b = Ut(h, b, E, l)),
              l
                ? (h.ifModified &&
                    ((T = E.getResponseHeader("Last-Modified")) &&
                      (w.lastModified[o] = T),
                    (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                  204 === t || "HEAD" === h.type
                    ? (C = "nocontent")
                    : 304 === t
                    ? (C = "notmodified")
                    : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
              (E.status = t),
              (E.statusText = (n || C) + ""),
              l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
              E.statusCode(x),
              (x = void 0),
              f &&
                y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
              m.fireWith(g, [E, C]),
              f &&
                (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")));
          }
          return E;
        },
        getJSON: function (e, t, n) {
          return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return w.get(e, void 0, t, "script");
        },
      }),
        w.each(["get", "post"], function (e, t) {
          w[t] = function (e, n, r, i) {
            return (
              g(n) && ((i = i || r), (r = n), (n = void 0)),
              w.ajax(
                w.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  w.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (w._evalUrl = function (e) {
          return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        w.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (g(e) && (e = e.call(this[0])),
                (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return g(e)
              ? this.each(function (t) {
                  w(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = w(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
              w(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  w(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (w.expr.pseudos.hidden = function (e) {
          return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (w.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest();
          } catch (e) {}
        });
      var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
      (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
          var n, r;
          if (h.cors || (Gt && !t.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = t.xhr();
                if (
                  (s.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                (n = function (e) {
                  return function () {
                    n &&
                      ((n =
                        r =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Vt[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = n()),
                  (r = s.onerror = s.ontimeout = n("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          e.setTimeout(function () {
                            n && r();
                          });
                      }),
                  (n = n("abort"));
                try {
                  s.send((t.hasContent && t.data) || null);
                } catch (e) {
                  if (n) throw e;
                }
              },
              abort: function () {
                n && n();
              },
            };
        }),
        w.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return w.globalEval(e), e;
            },
          },
        }),
        w.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
          if (e.crossDomain) {
            var t, n;
            return {
              send: function (i, o) {
                (t = w("<script>")
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  r.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Yt.pop() || w.expando + "_" + Et++;
          return (this[e] = !0), e;
        },
      }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
          var i,
            o,
            a,
            s =
              !1 !== t.jsonp &&
              (Qt.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Qt.test(t.data) &&
                  "data");
          if (s || "jsonp" === t.dataTypes[0])
            return (
              (i = t.jsonpCallback =
                g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              s
                ? (t[s] = t[s].replace(Qt, "$1" + i))
                : !1 !== t.jsonp &&
                  (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
              (t.converters["script json"] = function () {
                return a || w.error(i + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = e[i]),
              (e[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? w(e).removeProp(i) : (e[i] = o),
                  t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
                  a && g(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (h.createHTMLDocument = (function () {
          var e = r.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            2 === e.childNodes.length
          );
        })()),
        (w.parseHTML = function (e, t, n) {
          if ("string" != typeof e) return [];
          "boolean" == typeof t && ((n = t), (t = !1));
          var i, o, a;
          return (
            t ||
              (h.createHTMLDocument
                ? (((i = (t =
                    r.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = r.location.href),
                  t.head.appendChild(i))
                : (t = r)),
            (o = A.exec(e)),
            (a = !n && []),
            o
              ? [t.createElement(o[1])]
              : ((o = xe([e], t, a)),
                a && a.length && w(a).remove(),
                w.merge([], o.childNodes))
          );
        }),
        (w.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
            g(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
              w
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        w.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            w.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (w.expr.pseudos.animated = function (e) {
          return w.grep(w.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (w.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = w.css(e, "position"),
              f = w(e),
              p = {};
            "static" === c && (e.style.position = "relative"),
              (s = f.offset()),
              (o = w.css(e, "top")),
              (u = w.css(e, "left")),
              (l =
                ("absolute" === c || "fixed" === c) &&
                (o + u).indexOf("auto") > -1)
                ? ((a = (r = f.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              g(t) && (t = t.call(e, n, w.extend({}, s))),
              null != t.top && (p.top = t.top - s.top + a),
              null != t.left && (p.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, p) : f.css(p);
          },
        }),
        w.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    w.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            if (r)
              return r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === w.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                (t = this.offset()),
                  (n = r.ownerDocument),
                  (e = r.offsetParent || n.documentElement);
                while (
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === w.css(e, "position")
                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                  (i.left += w.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - w.css(r, "marginTop", !0),
                left: t.left - i.left - w.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              var e = this.offsetParent;
              while (e && "static" === w.css(e, "position")) e = e.offsetParent;
              return e || be;
            });
          },
        }),
        w.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
              return z(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        w.each(["top", "left"], function (e, t) {
          w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n)
              return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
          });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
          w.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? w.css(t, n, s)
                      : w.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        w.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            w.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        w.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        w.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (w.proxy = function (e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
            return (
              (r = o.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(o.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || w.guid++),
              i
            );
        }),
        (w.holdReady = function (e) {
          e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
          var t = w.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return w;
          });
      var Jt = e.jQuery,
        Kt = e.$;
      return (
        (w.noConflict = function (t) {
          return (
            e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
          );
        }),
        t || (e.jQuery = e.$ = w),
        w
      );
    });

    /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */
    !(function (a, b, c, d) {
      "use strict";
      function e(a, b, c) {
        return setTimeout(j(a, c), b);
      }
      function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
      }
      function g(a, b, c) {
        var e;
        if (a)
          if (a.forEach) a.forEach(b, c);
          else if (a.length !== d)
            for (e = 0; e < a.length; ) b.call(c, a[e], e, a), e++;
          else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
      }
      function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function () {
          var c = new Error("get-stack-trace"),
            d =
              c && c.stack
                ? c.stack
                    .replace(/^[^\(]+?[\n$]/gm, "")
                    .replace(/^\s+at\s+/gm, "")
                    .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                : "Unknown Stack Trace",
            f = a.console && (a.console.warn || a.console.log);
          return f && f.call(a.console, e, d), b.apply(this, arguments);
        };
      }
      function i(a, b, c) {
        var d,
          e = b.prototype;
        (d = a.prototype = Object.create(e)),
          (d.constructor = a),
          (d._super = e),
          c && la(d, c);
      }
      function j(a, b) {
        return function () {
          return a.apply(b, arguments);
        };
      }
      function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
      }
      function l(a, b) {
        return a === d ? b : a;
      }
      function m(a, b, c) {
        g(q(b), function (b) {
          a.addEventListener(b, c, !1);
        });
      }
      function n(a, b, c) {
        g(q(b), function (b) {
          a.removeEventListener(b, c, !1);
        });
      }
      function o(a, b) {
        for (; a; ) {
          if (a == b) return !0;
          a = a.parentNode;
        }
        return !1;
      }
      function p(a, b) {
        return a.indexOf(b) > -1;
      }
      function q(a) {
        return a.trim().split(/\s+/g);
      }
      function r(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
          if ((c && a[d][c] == b) || (!c && a[d] === b)) return d;
          d++;
        }
        return -1;
      }
      function s(a) {
        return Array.prototype.slice.call(a, 0);
      }
      function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
          var g = b ? a[f][b] : a[f];
          r(e, g) < 0 && d.push(a[f]), (e[f] = g), f++;
        }
        return (
          c &&
            (d = b
              ? d.sort(function (a, c) {
                  return a[b] > c[b];
                })
              : d.sort()),
          d
        );
      }
      function u(a, b) {
        for (
          var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0;
          g < ma.length;

        ) {
          if (((c = ma[g]), (e = c ? c + f : b), e in a)) return e;
          g++;
        }
        return d;
      }
      function v() {
        return ua++;
      }
      function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a;
      }
      function x(a, b) {
        var c = this;
        (this.manager = a),
          (this.callback = b),
          (this.element = a.element),
          (this.target = a.options.inputTarget),
          (this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b);
          }),
          this.init();
      }
      function y(a) {
        var b,
          c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
      }
      function z(a, b, c) {
        var d = c.pointers.length,
          e = c.changedPointers.length,
          f = b & Ea && d - e === 0,
          g = b & (Ga | Ha) && d - e === 0;
        (c.isFirst = !!f),
          (c.isFinal = !!g),
          f && (a.session = {}),
          (c.eventType = b),
          A(a, c),
          a.emit("hammer.input", c),
          a.recognize(c),
          (a.session.prevInput = c);
      }
      function A(a, b) {
        var c = a.session,
          d = b.pointers,
          e = d.length;
        c.firstInput || (c.firstInput = D(b)),
          e > 1 && !c.firstMultiple
            ? (c.firstMultiple = D(b))
            : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
          g = c.firstMultiple,
          h = g ? g.center : f.center,
          i = (b.center = E(d));
        (b.timeStamp = ra()),
          (b.deltaTime = b.timeStamp - f.timeStamp),
          (b.angle = I(h, i)),
          (b.distance = H(h, i)),
          B(c, b),
          (b.offsetDirection = G(b.deltaX, b.deltaY));
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        (b.overallVelocityX = j.x),
          (b.overallVelocityY = j.y),
          (b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y),
          (b.scale = g ? K(g.pointers, d) : 1),
          (b.rotation = g ? J(g.pointers, d) : 0),
          (b.maxPointers = c.prevInput
            ? b.pointers.length > c.prevInput.maxPointers
              ? b.pointers.length
              : c.prevInput.maxPointers
            : b.pointers.length),
          C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), (b.target = k);
      }
      function B(a, b) {
        var c = b.center,
          d = a.offsetDelta || {},
          e = a.prevDelta || {},
          f = a.prevInput || {};
        (b.eventType !== Ea && f.eventType !== Ga) ||
          ((e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }),
          (d = a.offsetDelta = { x: c.x, y: c.y })),
          (b.deltaX = e.x + (c.x - d.x)),
          (b.deltaY = e.y + (c.y - d.y));
      }
      function C(a, b) {
        var c,
          e,
          f,
          g,
          h = a.lastInterval || b,
          i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
          var j = b.deltaX - h.deltaX,
            k = b.deltaY - h.deltaY,
            l = F(i, j, k);
          (e = l.x),
            (f = l.y),
            (c = qa(l.x) > qa(l.y) ? l.x : l.y),
            (g = G(j, k)),
            (a.lastInterval = b);
        } else (c = h.velocity), (e = h.velocityX), (f = h.velocityY), (g = h.direction);
        (b.velocity = c),
          (b.velocityX = e),
          (b.velocityY = f),
          (b.direction = g);
      }
      function D(a) {
        for (var b = [], c = 0; c < a.pointers.length; )
          (b[c] = {
            clientX: pa(a.pointers[c].clientX),
            clientY: pa(a.pointers[c].clientY),
          }),
            c++;
        return {
          timeStamp: ra(),
          pointers: b,
          center: E(b),
          deltaX: a.deltaX,
          deltaY: a.deltaY,
        };
      }
      function E(a) {
        var b = a.length;
        if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };
        for (var c = 0, d = 0, e = 0; b > e; )
          (c += a[e].clientX), (d += a[e].clientY), e++;
        return { x: pa(c / b), y: pa(d / b) };
      }
      function F(a, b, c) {
        return { x: b / a || 0, y: c / a || 0 };
      }
      function G(a, b) {
        return a === b
          ? Ia
          : qa(a) >= qa(b)
          ? 0 > a
            ? Ja
            : Ka
          : 0 > b
          ? La
          : Ma;
      }
      function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
          e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
      }
      function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
          e = b[c[1]] - a[c[1]];
        return (180 * Math.atan2(e, d)) / Math.PI;
      }
      function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
      }
      function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
      }
      function L() {
        (this.evEl = Ta),
          (this.evWin = Ua),
          (this.pressed = !1),
          x.apply(this, arguments);
      }
      function M() {
        (this.evEl = Xa),
          (this.evWin = Ya),
          x.apply(this, arguments),
          (this.store = this.manager.session.pointerEvents = []);
      }
      function N() {
        (this.evTarget = $a),
          (this.evWin = _a),
          (this.started = !1),
          x.apply(this, arguments);
      }
      function O(a, b) {
        var c = s(a.touches),
          d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
      }
      function P() {
        (this.evTarget = bb), (this.targetIds = {}), x.apply(this, arguments);
      }
      function Q(a, b) {
        var c = s(a.touches),
          d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length)
          return (d[c[0].identifier] = !0), [c, c];
        var e,
          f,
          g = s(a.changedTouches),
          h = [],
          i = this.target;
        if (
          ((f = c.filter(function (a) {
            return o(a.target, i);
          })),
          b === Ea)
        )
          for (e = 0; e < f.length; ) (d[f[e].identifier] = !0), e++;
        for (e = 0; e < g.length; )
          d[g[e].identifier] && h.push(g[e]),
            b & (Ga | Ha) && delete d[g[e].identifier],
            e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
      }
      function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        (this.touch = new P(this.manager, a)),
          (this.mouse = new L(this.manager, a)),
          (this.primaryTouch = null),
          (this.lastTouches = []);
      }
      function S(a, b) {
        a & Ea
          ? ((this.primaryTouch = b.changedPointers[0].identifier),
            T.call(this, b))
          : a & (Ga | Ha) && T.call(this, b);
      }
      function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
          var c = { x: b.clientX, y: b.clientY };
          this.lastTouches.push(c);
          var d = this.lastTouches,
            e = function () {
              var a = d.indexOf(c);
              a > -1 && d.splice(a, 1);
            };
          setTimeout(e, cb);
        }
      }
      function U(a) {
        for (
          var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0;
          d < this.lastTouches.length;
          d++
        ) {
          var e = this.lastTouches[d],
            f = Math.abs(b - e.x),
            g = Math.abs(c - e.y);
          if (db >= f && db >= g) return !0;
        }
        return !1;
      }
      function V(a, b) {
        (this.manager = a), this.set(b);
      }
      function W(a) {
        if (p(a, jb)) return jb;
        var b = p(a, kb),
          c = p(a, lb);
        return b && c ? jb : b || c ? (b ? kb : lb) : p(a, ib) ? ib : hb;
      }
      function X() {
        if (!fb) return !1;
        var b = {},
          c = a.CSS && a.CSS.supports;
        return (
          [
            "auto",
            "manipulation",
            "pan-y",
            "pan-x",
            "pan-x pan-y",
            "none",
          ].forEach(function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0;
          }),
          b
        );
      }
      function Y(a) {
        (this.options = la({}, this.defaults, a || {})),
          (this.id = v()),
          (this.manager = null),
          (this.options.enable = l(this.options.enable, !0)),
          (this.state = nb),
          (this.simultaneous = {}),
          (this.requireFail = []);
      }
      function Z(a) {
        return a & sb
          ? "cancel"
          : a & qb
          ? "end"
          : a & pb
          ? "move"
          : a & ob
          ? "start"
          : "";
      }
      function $(a) {
        return a == Ma
          ? "down"
          : a == La
          ? "up"
          : a == Ja
          ? "left"
          : a == Ka
          ? "right"
          : "";
      }
      function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
      }
      function aa() {
        Y.apply(this, arguments);
      }
      function ba() {
        aa.apply(this, arguments), (this.pX = null), (this.pY = null);
      }
      function ca() {
        aa.apply(this, arguments);
      }
      function da() {
        Y.apply(this, arguments), (this._timer = null), (this._input = null);
      }
      function ea() {
        aa.apply(this, arguments);
      }
      function fa() {
        aa.apply(this, arguments);
      }
      function ga() {
        Y.apply(this, arguments),
          (this.pTime = !1),
          (this.pCenter = !1),
          (this._timer = null),
          (this._input = null),
          (this.count = 0);
      }
      function ha(a, b) {
        return (
          (b = b || {}),
          (b.recognizers = l(b.recognizers, ha.defaults.preset)),
          new ia(a, b)
        );
      }
      function ia(a, b) {
        (this.options = la({}, ha.defaults, b || {})),
          (this.options.inputTarget = this.options.inputTarget || a),
          (this.handlers = {}),
          (this.session = {}),
          (this.recognizers = []),
          (this.oldCssProps = {}),
          (this.element = a),
          (this.input = y(this)),
          (this.touchAction = new V(this, this.options.touchAction)),
          ja(this, !0),
          g(
            this.options.recognizers,
            function (a) {
              var b = this.add(new a[0](a[1]));
              a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
            },
            this
          );
      }
      function ja(a, b) {
        var c = a.element;
        if (c.style) {
          var d;
          g(a.options.cssProps, function (e, f) {
            (d = u(c.style, f)),
              b
                ? ((a.oldCssProps[d] = c.style[d]), (c.style[d] = e))
                : (c.style[d] = a.oldCssProps[d] || "");
          }),
            b || (a.oldCssProps = {});
        }
      }
      function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), (d.gesture = c), c.target.dispatchEvent(d);
      }
      var la,
        ma = ["", "webkit", "Moz", "MS", "ms", "o"],
        na = b.createElement("div"),
        oa = "function",
        pa = Math.round,
        qa = Math.abs,
        ra = Date.now;
      la =
        "function" != typeof Object.assign
          ? function (a) {
              if (a === d || null === a)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var e = arguments[c];
                if (e !== d && null !== e)
                  for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]);
              }
              return b;
            }
          : Object.assign;
      var sa = h(
          function (a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length; )
              (!c || (c && a[e[f]] === d)) && (a[e[f]] = b[e[f]]), f++;
            return a;
          },
          "extend",
          "Use `assign`."
        ),
        ta = h(
          function (a, b) {
            return sa(a, b, !0);
          },
          "merge",
          "Use `assign`."
        ),
        ua = 1,
        va = /mobile|tablet|ip(ad|hone|od)|android/i,
        wa = "ontouchstart" in a,
        xa = u(a, "PointerEvent") !== d,
        ya = wa && va.test(navigator.userAgent),
        za = "touch",
        Aa = "pen",
        Ba = "mouse",
        Ca = "kinect",
        Da = 25,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 1,
        Ja = 2,
        Ka = 4,
        La = 8,
        Ma = 16,
        Na = Ja | Ka,
        Oa = La | Ma,
        Pa = Na | Oa,
        Qa = ["x", "y"],
        Ra = ["clientX", "clientY"];
      x.prototype = {
        handler: function () {},
        init: function () {
          this.evEl && m(this.element, this.evEl, this.domHandler),
            this.evTarget && m(this.target, this.evTarget, this.domHandler),
            this.evWin && m(w(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
          this.evEl && n(this.element, this.evEl, this.domHandler),
            this.evTarget && n(this.target, this.evTarget, this.domHandler),
            this.evWin && n(w(this.element), this.evWin, this.domHandler);
        },
      };
      var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
        Ta = "mousedown",
        Ua = "mousemove mouseup";
      i(L, x, {
        handler: function (a) {
          var b = Sa[a.type];
          b & Ea && 0 === a.button && (this.pressed = !0),
            b & Fa && 1 !== a.which && (b = Ga),
            this.pressed &&
              (b & Ga && (this.pressed = !1),
              this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a,
              }));
        },
      });
      var Va = {
          pointerdown: Ea,
          pointermove: Fa,
          pointerup: Ga,
          pointercancel: Ha,
          pointerout: Ha,
        },
        Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
        Xa = "pointerdown",
        Ya = "pointermove pointerup pointercancel";
      a.MSPointerEvent &&
        !a.PointerEvent &&
        ((Xa = "MSPointerDown"),
        (Ya = "MSPointerMove MSPointerUp MSPointerCancel")),
        i(M, x, {
          handler: function (a) {
            var b = this.store,
              c = !1,
              d = a.type.toLowerCase().replace("ms", ""),
              e = Va[d],
              f = Wa[a.pointerType] || a.pointerType,
              g = f == za,
              h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g)
              ? 0 > h && (b.push(a), (h = b.length - 1))
              : e & (Ga | Ha) && (c = !0),
              0 > h ||
                ((b[h] = a),
                this.callback(this.manager, e, {
                  pointers: b,
                  changedPointers: [a],
                  pointerType: f,
                  srcEvent: a,
                }),
                c && b.splice(h, 1));
          },
        });
      var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
        $a = "touchstart",
        _a = "touchstart touchmove touchend touchcancel";
      i(N, x, {
        handler: function (a) {
          var b = Za[a.type];
          if ((b === Ea && (this.started = !0), this.started)) {
            var c = O.call(this, a, b);
            b & (Ga | Ha) &&
              c[0].length - c[1].length === 0 &&
              (this.started = !1),
              this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a,
              });
          }
        },
      });
      var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
        bb = "touchstart touchmove touchend touchcancel";
      i(P, x, {
        handler: function (a) {
          var b = ab[a.type],
            c = Q.call(this, a, b);
          c &&
            this.callback(this.manager, b, {
              pointers: c[0],
              changedPointers: c[1],
              pointerType: za,
              srcEvent: a,
            });
        },
      });
      var cb = 2500,
        db = 25;
      i(R, x, {
        handler: function (a, b, c) {
          var d = c.pointerType == za,
            e = c.pointerType == Ba;
          if (
            !(
              e &&
              c.sourceCapabilities &&
              c.sourceCapabilities.firesTouchEvents
            )
          ) {
            if (d) S.call(this, b, c);
            else if (e && U.call(this, c)) return;
            this.callback(a, b, c);
          }
        },
        destroy: function () {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
      var eb = u(na.style, "touchAction"),
        fb = eb !== d,
        gb = "compute",
        hb = "auto",
        ib = "manipulation",
        jb = "none",
        kb = "pan-x",
        lb = "pan-y",
        mb = X();
      V.prototype = {
        set: function (a) {
          a == gb && (a = this.compute()),
            fb &&
              this.manager.element.style &&
              mb[a] &&
              (this.manager.element.style[eb] = a),
            (this.actions = a.toLowerCase().trim());
        },
        update: function () {
          this.set(this.manager.options.touchAction);
        },
        compute: function () {
          var a = [];
          return (
            g(this.manager.recognizers, function (b) {
              k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
            }),
            W(a.join(" "))
          );
        },
        preventDefaults: function (a) {
          var b = a.srcEvent,
            c = a.offsetDirection;
          if (this.manager.session.prevented) return void b.preventDefault();
          var d = this.actions,
            e = p(d, jb) && !mb[jb],
            f = p(d, lb) && !mb[lb],
            g = p(d, kb) && !mb[kb];
          if (e) {
            var h = 1 === a.pointers.length,
              i = a.distance < 2,
              j = a.deltaTime < 250;
            if (h && i && j) return;
          }
          return g && f
            ? void 0
            : e || (f && c & Na) || (g && c & Oa)
            ? this.preventSrc(b)
            : void 0;
        },
        preventSrc: function (a) {
          (this.manager.session.prevented = !0), a.preventDefault();
        },
      };
      var nb = 1,
        ob = 2,
        pb = 4,
        qb = 8,
        rb = qb,
        sb = 16,
        tb = 32;
      (Y.prototype = {
        defaults: {},
        set: function (a) {
          return (
            la(this.options, a),
            this.manager && this.manager.touchAction.update(),
            this
          );
        },
        recognizeWith: function (a) {
          if (f(a, "recognizeWith", this)) return this;
          var b = this.simultaneous;
          return (
            (a = _(a, this)),
            b[a.id] || ((b[a.id] = a), a.recognizeWith(this)),
            this
          );
        },
        dropRecognizeWith: function (a) {
          return f(a, "dropRecognizeWith", this)
            ? this
            : ((a = _(a, this)), delete this.simultaneous[a.id], this);
        },
        requireFailure: function (a) {
          if (f(a, "requireFailure", this)) return this;
          var b = this.requireFail;
          return (
            (a = _(a, this)),
            -1 === r(b, a) && (b.push(a), a.requireFailure(this)),
            this
          );
        },
        dropRequireFailure: function (a) {
          if (f(a, "dropRequireFailure", this)) return this;
          a = _(a, this);
          var b = r(this.requireFail, a);
          return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function () {
          return this.requireFail.length > 0;
        },
        canRecognizeWith: function (a) {
          return !!this.simultaneous[a.id];
        },
        emit: function (a) {
          function b(b) {
            c.manager.emit(b, a);
          }
          var c = this,
            d = this.state;
          qb > d && b(c.options.event + Z(d)),
            b(c.options.event),
            a.additionalEvent && b(a.additionalEvent),
            d >= qb && b(c.options.event + Z(d));
        },
        tryEmit: function (a) {
          return this.canEmit() ? this.emit(a) : void (this.state = tb);
        },
        canEmit: function () {
          for (var a = 0; a < this.requireFail.length; ) {
            if (!(this.requireFail[a].state & (tb | nb))) return !1;
            a++;
          }
          return !0;
        },
        recognize: function (a) {
          var b = la({}, a);
          return k(this.options.enable, [this, b])
            ? (this.state & (rb | sb | tb) && (this.state = nb),
              (this.state = this.process(b)),
              void (this.state & (ob | pb | qb | sb) && this.tryEmit(b)))
            : (this.reset(), void (this.state = tb));
        },
        process: function (a) {},
        getTouchAction: function () {},
        reset: function () {},
      }),
        i(aa, Y, {
          defaults: { pointers: 1 },
          attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
          },
          process: function (a) {
            var b = this.state,
              c = a.eventType,
              d = b & (ob | pb),
              e = this.attrTest(a);
            return d && (c & Ha || !e)
              ? b | sb
              : d || e
              ? c & Ga
                ? b | qb
                : b & ob
                ? b | pb
                : ob
              : tb;
          },
        }),
        i(ba, aa, {
          defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa },
          getTouchAction: function () {
            var a = this.options.direction,
              b = [];
            return a & Na && b.push(lb), a & Oa && b.push(kb), b;
          },
          directionTest: function (a) {
            var b = this.options,
              c = !0,
              d = a.distance,
              e = a.direction,
              f = a.deltaX,
              g = a.deltaY;
            return (
              e & b.direction ||
                (b.direction & Na
                  ? ((e = 0 === f ? Ia : 0 > f ? Ja : Ka),
                    (c = f != this.pX),
                    (d = Math.abs(a.deltaX)))
                  : ((e = 0 === g ? Ia : 0 > g ? La : Ma),
                    (c = g != this.pY),
                    (d = Math.abs(a.deltaY)))),
              (a.direction = e),
              c && d > b.threshold && e & b.direction
            );
          },
          attrTest: function (a) {
            return (
              aa.prototype.attrTest.call(this, a) &&
              (this.state & ob || (!(this.state & ob) && this.directionTest(a)))
            );
          },
          emit: function (a) {
            (this.pX = a.deltaX), (this.pY = a.deltaY);
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b),
              this._super.emit.call(this, a);
          },
        }),
        i(ca, aa, {
          defaults: { event: "pinch", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return [jb];
          },
          attrTest: function (a) {
            return (
              this._super.attrTest.call(this, a) &&
              (Math.abs(a.scale - 1) > this.options.threshold ||
                this.state & ob)
            );
          },
          emit: function (a) {
            if (1 !== a.scale) {
              var b = a.scale < 1 ? "in" : "out";
              a.additionalEvent = this.options.event + b;
            }
            this._super.emit.call(this, a);
          },
        }),
        i(da, Y, {
          defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
          getTouchAction: function () {
            return [hb];
          },
          process: function (a) {
            var b = this.options,
              c = a.pointers.length === b.pointers,
              d = a.distance < b.threshold,
              f = a.deltaTime > b.time;
            if (
              ((this._input = a), !d || !c || (a.eventType & (Ga | Ha) && !f))
            )
              this.reset();
            else if (a.eventType & Ea)
              this.reset(),
                (this._timer = e(
                  function () {
                    (this.state = rb), this.tryEmit();
                  },
                  b.time,
                  this
                ));
            else if (a.eventType & Ga) return rb;
            return tb;
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function (a) {
            this.state === rb &&
              (a && a.eventType & Ga
                ? this.manager.emit(this.options.event + "up", a)
                : ((this._input.timeStamp = ra()),
                  this.manager.emit(this.options.event, this._input)));
          },
        }),
        i(ea, aa, {
          defaults: { event: "rotate", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return [jb];
          },
          attrTest: function (a) {
            return (
              this._super.attrTest.call(this, a) &&
              (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
            );
          },
        }),
        i(fa, aa, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: Na | Oa,
            pointers: 1,
          },
          getTouchAction: function () {
            return ba.prototype.getTouchAction.call(this);
          },
          attrTest: function (a) {
            var b,
              c = this.options.direction;
            return (
              c & (Na | Oa)
                ? (b = a.overallVelocity)
                : c & Na
                ? (b = a.overallVelocityX)
                : c & Oa && (b = a.overallVelocityY),
              this._super.attrTest.call(this, a) &&
                c & a.offsetDirection &&
                a.distance > this.options.threshold &&
                a.maxPointers == this.options.pointers &&
                qa(b) > this.options.velocity &&
                a.eventType & Ga
            );
          },
          emit: function (a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a),
              this.manager.emit(this.options.event, a);
          },
        }),
        i(ga, Y, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10,
          },
          getTouchAction: function () {
            return [ib];
          },
          process: function (a) {
            var b = this.options,
              c = a.pointers.length === b.pointers,
              d = a.distance < b.threshold,
              f = a.deltaTime < b.time;
            if ((this.reset(), a.eventType & Ea && 0 === this.count))
              return this.failTimeout();
            if (d && f && c) {
              if (a.eventType != Ga) return this.failTimeout();
              var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
              (this.pTime = a.timeStamp),
                (this.pCenter = a.center),
                h && g ? (this.count += 1) : (this.count = 1),
                (this._input = a);
              var i = this.count % b.taps;
              if (0 === i)
                return this.hasRequireFailures()
                  ? ((this._timer = e(
                      function () {
                        (this.state = rb), this.tryEmit();
                      },
                      b.interval,
                      this
                    )),
                    ob)
                  : rb;
            }
            return tb;
          },
          failTimeout: function () {
            return (
              (this._timer = e(
                function () {
                  this.state = tb;
                },
                this.options.interval,
                this
              )),
              tb
            );
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function () {
            this.state == rb &&
              ((this._input.tapCount = this.count),
              this.manager.emit(this.options.event, this._input));
          },
        }),
        (ha.VERSION = "2.0.7"),
        (ha.defaults = {
          domEvents: !1,
          touchAction: gb,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [ea, { enable: !1 }],
            [ca, { enable: !1 }, ["rotate"]],
            [fa, { direction: Na }],
            [ba, { direction: Na }, ["swipe"]],
            [ga],
            [ga, { event: "doubletap", taps: 2 }, ["tap"]],
            [da],
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)",
          },
        });
      var ub = 1,
        vb = 2;
      (ia.prototype = {
        set: function (a) {
          return (
            la(this.options, a),
            a.touchAction && this.touchAction.update(),
            a.inputTarget &&
              (this.input.destroy(),
              (this.input.target = a.inputTarget),
              this.input.init()),
            this
          );
        },
        stop: function (a) {
          this.session.stopped = a ? vb : ub;
        },
        recognize: function (a) {
          var b = this.session;
          if (!b.stopped) {
            this.touchAction.preventDefaults(a);
            var c,
              d = this.recognizers,
              e = b.curRecognizer;
            (!e || (e && e.state & rb)) && (e = b.curRecognizer = null);
            for (var f = 0; f < d.length; )
              (c = d[f]),
                b.stopped === vb || (e && c != e && !c.canRecognizeWith(e))
                  ? c.reset()
                  : c.recognize(a),
                !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c),
                f++;
          }
        },
        get: function (a) {
          if (a instanceof Y) return a;
          for (var b = this.recognizers, c = 0; c < b.length; c++)
            if (b[c].options.event == a) return b[c];
          return null;
        },
        add: function (a) {
          if (f(a, "add", this)) return this;
          var b = this.get(a.options.event);
          return (
            b && this.remove(b),
            this.recognizers.push(a),
            (a.manager = this),
            this.touchAction.update(),
            a
          );
        },
        remove: function (a) {
          if (f(a, "remove", this)) return this;
          if ((a = this.get(a))) {
            var b = this.recognizers,
              c = r(b, a);
            -1 !== c && (b.splice(c, 1), this.touchAction.update());
          }
          return this;
        },
        on: function (a, b) {
          if (a !== d && b !== d) {
            var c = this.handlers;
            return (
              g(q(a), function (a) {
                (c[a] = c[a] || []), c[a].push(b);
              }),
              this
            );
          }
        },
        off: function (a, b) {
          if (a !== d) {
            var c = this.handlers;
            return (
              g(q(a), function (a) {
                b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
              }),
              this
            );
          }
        },
        emit: function (a, b) {
          this.options.domEvents && ka(a, b);
          var c = this.handlers[a] && this.handlers[a].slice();
          if (c && c.length) {
            (b.type = a),
              (b.preventDefault = function () {
                b.srcEvent.preventDefault();
              });
            for (var d = 0; d < c.length; ) c[d](b), d++;
          }
        },
        destroy: function () {
          this.element && ja(this, !1),
            (this.handlers = {}),
            (this.session = {}),
            this.input.destroy(),
            (this.element = null);
        },
      }),
        la(ha, {
          INPUT_START: Ea,
          INPUT_MOVE: Fa,
          INPUT_END: Ga,
          INPUT_CANCEL: Ha,
          STATE_POSSIBLE: nb,
          STATE_BEGAN: ob,
          STATE_CHANGED: pb,
          STATE_ENDED: qb,
          STATE_RECOGNIZED: rb,
          STATE_CANCELLED: sb,
          STATE_FAILED: tb,
          DIRECTION_NONE: Ia,
          DIRECTION_LEFT: Ja,
          DIRECTION_RIGHT: Ka,
          DIRECTION_UP: La,
          DIRECTION_DOWN: Ma,
          DIRECTION_HORIZONTAL: Na,
          DIRECTION_VERTICAL: Oa,
          DIRECTION_ALL: Pa,
          Manager: ia,
          Input: x,
          TouchAction: V,
          TouchInput: P,
          MouseInput: L,
          PointerEventInput: M,
          TouchMouseInput: R,
          SingleTouchInput: N,
          Recognizer: Y,
          AttrRecognizer: aa,
          Tap: ga,
          Pan: ba,
          Swipe: fa,
          Pinch: ca,
          Rotate: ea,
          Press: da,
          on: m,
          off: n,
          each: g,
          merge: ta,
          extend: sa,
          assign: la,
          inherit: i,
          bindFn: j,
          prefixed: u,
        });
      var wb =
        "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
      (wb.Hammer = ha),
        "function" == typeof define && define.amd
          ? define(function () {
              return ha;
            })
          : "undefined" != typeof module && module.exports
          ? (module.exports = ha)
          : (a[c] = ha);
    })(window, document, "Hammer");
    //# sourceMappingURL=hammer.min.js.map
    /*!
     * Masonry PACKAGED v4.2.2
     * Cascading grid layout library
     * https://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */

    !(function (t, e) {
      "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
            return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
    })(window, function (t, e) {
      "use strict";
      function i(i, r, a) {
        function h(t, e, n) {
          var o,
            r = "$()." + i + '("' + e + '")';
          return (
            t.each(function (t, h) {
              var u = a.data(h, i);
              if (!u)
                return void s(
                  i + " not initialized. Cannot call methods, i.e. " + r
                );
              var d = u[e];
              if (!d || "_" == e.charAt(0))
                return void s(r + " is not a valid method");
              var l = d.apply(u, n);
              o = void 0 === o ? l : o;
            }),
            void 0 !== o ? o : t
          );
        }
        function u(t, e) {
          t.each(function (t, n) {
            var o = a.data(n, i);
            o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
          });
        }
        (a = a || e || t.jQuery),
          a &&
            (r.prototype.option ||
              (r.prototype.option = function (t) {
                a.isPlainObject(t) &&
                  (this.options = a.extend(!0, this.options, t));
              }),
            (a.fn[i] = function (t) {
              if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e);
              }
              return u(this, t), this;
            }),
            n(a));
      }
      function n(t) {
        !t || (t && t.bridget) || (t.bridget = i);
      }
      var o = Array.prototype.slice,
        r = t.console,
        s =
          "undefined" == typeof r
            ? function () {}
            : function (t) {
                r.error(t);
              };
      return n(e || t.jQuery), i;
    }),
      (function (t, e) {
        "function" == typeof define && define.amd
          ? define("ev-emitter/ev-emitter", e)
          : "object" == typeof module && module.exports
          ? (module.exports = e())
          : (t.EvEmitter = e());
      })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.on = function (t, e) {
            if (t && e) {
              var i = (this._events = this._events || {}),
                n = (i[t] = i[t] || []);
              return -1 == n.indexOf(e) && n.push(e), this;
            }
          }),
          (e.once = function (t, e) {
            if (t && e) {
              this.on(t, e);
              var i = (this._onceEvents = this._onceEvents || {}),
                n = (i[t] = i[t] || {});
              return (n[e] = !0), this;
            }
          }),
          (e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
              var n = i.indexOf(e);
              return -1 != n && i.splice(n, 1), this;
            }
          }),
          (e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
              (i = i.slice(0)), (e = e || []);
              for (
                var n = this._onceEvents && this._onceEvents[t], o = 0;
                o < i.length;
                o++
              ) {
                var r = i[o],
                  s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e);
              }
              return this;
            }
          }),
          (e.allOff = function () {
            delete this._events, delete this._onceEvents;
          }),
          t
        );
      }),
      (function (t, e) {
        "function" == typeof define && define.amd
          ? define("get-size/get-size", e)
          : "object" == typeof module && module.exports
          ? (module.exports = e())
          : (t.getSize = e());
      })(window, function () {
        "use strict";
        function t(t) {
          var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
          return i && e;
        }
        function e() {}
        function i() {
          for (
            var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0,
              },
              e = 0;
            u > e;
            e++
          ) {
            var i = h[e];
            t[i] = 0;
          }
          return t;
        }
        function n(t) {
          var e = getComputedStyle(t);
          return (
            e ||
              a(
                "Style returned " +
                  e +
                  ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
              ),
            e
          );
        }
        function o() {
          if (!d) {
            d = !0;
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style.boxSizing = "border-box");
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            (s = 200 == Math.round(t(o.width))),
              (r.isBoxSizeOuter = s),
              i.removeChild(e);
          }
        }
        function r(e) {
          if (
            (o(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType)
          ) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            (a.width = e.offsetWidth), (a.height = e.offsetHeight);
            for (
              var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
              u > l;
              l++
            ) {
              var c = h[l],
                f = r[c],
                m = parseFloat(f);
              a[c] = isNaN(m) ? 0 : m;
            }
            var p = a.paddingLeft + a.paddingRight,
              g = a.paddingTop + a.paddingBottom,
              y = a.marginLeft + a.marginRight,
              v = a.marginTop + a.marginBottom,
              _ = a.borderLeftWidth + a.borderRightWidth,
              z = a.borderTopWidth + a.borderBottomWidth,
              E = d && s,
              b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return (
              x !== !1 && (a.height = x + (E ? 0 : g + z)),
              (a.innerWidth = a.width - (p + _)),
              (a.innerHeight = a.height - (g + z)),
              (a.outerWidth = a.width + y),
              (a.outerHeight = a.height + v),
              a
            );
          }
        }
        var s,
          a =
            "undefined" == typeof console
              ? e
              : function (t) {
                  console.error(t);
                },
          h = [
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
            "borderBottomWidth",
          ],
          u = h.length,
          d = !1;
        return r;
      }),
      (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
          ? define("desandro-matches-selector/matches-selector", e)
          : "object" == typeof module && module.exports
          ? (module.exports = e())
          : (t.matchesSelector = e());
      })(window, function () {
        "use strict";
        var t = (function () {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
              o = n + "MatchesSelector";
            if (t[o]) return o;
          }
        })();
        return function (e, i) {
          return e[t](i);
        };
      }),
      (function (t, e) {
        "function" == typeof define && define.amd
          ? define(
              "fizzy-ui-utils/utils",
              ["desandro-matches-selector/matches-selector"],
              function (i) {
                return e(t, i);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = e(t, require("desandro-matches-selector")))
          : (t.fizzyUIUtils = e(t, t.matchesSelector));
      })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        }),
          (i.modulo = function (t, e) {
            return ((t % e) + e) % e;
          });
        var n = Array.prototype.slice;
        (i.makeArray = function (t) {
          if (Array.isArray(t)) return t;
          if (null === t || void 0 === t) return [];
          var e = "object" == typeof t && "number" == typeof t.length;
          return e ? n.call(t) : [t];
        }),
          (i.removeFrom = function (t, e) {
            var i = t.indexOf(e);
            -1 != i && t.splice(i, 1);
          }),
          (i.getParent = function (t, i) {
            for (; t.parentNode && t != document.body; )
              if (((t = t.parentNode), e(t, i))) return t;
          }),
          (i.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t;
          }),
          (i.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
          }),
          (i.filterFindElements = function (t, n) {
            t = i.makeArray(t);
            var o = [];
            return (
              t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                  if (!n) return void o.push(t);
                  e(t, n) && o.push(t);
                  for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r]);
                }
              }),
              o
            );
          }),
          (i.debounceMethod = function (t, e, i) {
            i = i || 100;
            var n = t.prototype[e],
              o = e + "Timeout";
            t.prototype[e] = function () {
              var t = this[o];
              clearTimeout(t);
              var e = arguments,
                r = this;
              this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o];
              }, i);
            };
          }),
          (i.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e
              ? setTimeout(t)
              : document.addEventListener("DOMContentLoaded", t);
          }),
          (i.toDashed = function (t) {
            return t
              .replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i;
              })
              .toLowerCase();
          });
        var o = t.console;
        return (
          (i.htmlInit = function (e, n) {
            i.docReady(function () {
              var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                l = t.jQuery;
              u.forEach(function (t) {
                var i,
                  r = t.getAttribute(s) || t.getAttribute(d);
                try {
                  i = r && JSON.parse(r);
                } catch (a) {
                  return void (
                    o &&
                    o.error(
                      "Error parsing " + s + " on " + t.className + ": " + a
                    )
                  );
                }
                var h = new e(t, i);
                l && l.data(t, n, h);
              });
            });
          }),
          i
        );
      }),
      (function (t, e) {
        "function" == typeof define && define.amd
          ? define(
              "outlayer/item",
              ["ev-emitter/ev-emitter", "get-size/get-size"],
              e
            )
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("ev-emitter"), require("get-size")))
          : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
      })(window, function (t, e) {
        "use strict";
        function i(t) {
          for (var e in t) return !1;
          return (e = null), !0;
        }
        function n(t, e) {
          t &&
            ((this.element = t),
            (this.layout = e),
            (this.position = { x: 0, y: 0 }),
            this._create());
        }
        function o(t) {
          return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase();
          });
        }
        var r = document.documentElement.style,
          s =
            "string" == typeof r.transition ? "transition" : "WebkitTransition",
          a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
          h = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend",
          }[s],
          u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay",
          },
          d = (n.prototype = Object.create(t.prototype));
        (d.constructor = n),
          (d._create = function () {
            (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
              this.css({ position: "absolute" });
          }),
          (d.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
          }),
          (d.getSize = function () {
            this.size = e(this.element);
          }),
          (d.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
              var n = u[i] || i;
              e[n] = t[i];
            }
          }),
          (d.getPosition = function () {
            var t = getComputedStyle(this.element),
              e = this.layout._getOption("originLeft"),
              i = this.layout._getOption("originTop"),
              n = t[e ? "left" : "right"],
              o = t[i ? "top" : "bottom"],
              r = parseFloat(n),
              s = parseFloat(o),
              a = this.layout.size;
            -1 != n.indexOf("%") && (r = (r / 100) * a.width),
              -1 != o.indexOf("%") && (s = (s / 100) * a.height),
              (r = isNaN(r) ? 0 : r),
              (s = isNaN(s) ? 0 : s),
              (r -= e ? a.paddingLeft : a.paddingRight),
              (s -= i ? a.paddingTop : a.paddingBottom),
              (this.position.x = r),
              (this.position.y = s);
          }),
          (d.layoutPosition = function () {
            var t = this.layout.size,
              e = {},
              i = this.layout._getOption("originLeft"),
              n = this.layout._getOption("originTop"),
              o = i ? "paddingLeft" : "paddingRight",
              r = i ? "left" : "right",
              s = i ? "right" : "left",
              a = this.position.x + t[o];
            (e[r] = this.getXValue(a)), (e[s] = "");
            var h = n ? "paddingTop" : "paddingBottom",
              u = n ? "top" : "bottom",
              d = n ? "bottom" : "top",
              l = this.position.y + t[h];
            (e[u] = this.getYValue(l)),
              (e[d] = ""),
              this.css(e),
              this.emitEvent("layout", [this]);
          }),
          (d.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e
              ? (t / this.layout.size.width) * 100 + "%"
              : t + "px";
          }),
          (d.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e
              ? (t / this.layout.size.height) * 100 + "%"
              : t + "px";
          }),
          (d._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
              n = this.position.y,
              o = t == this.position.x && e == this.position.y;
            if ((this.setPosition(t, e), o && !this.isTransitioning))
              return void this.layoutPosition();
            var r = t - i,
              s = e - n,
              a = {};
            (a.transform = this.getTranslate(r, s)),
              this.transition({
                to: a,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              });
          }),
          (d.getTranslate = function (t, e) {
            var i = this.layout._getOption("originLeft"),
              n = this.layout._getOption("originTop");
            return (
              (t = i ? t : -t),
              (e = n ? e : -e),
              "translate3d(" + t + "px, " + e + "px, 0)"
            );
          }),
          (d.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition();
          }),
          (d.moveTo = d._transitionTo),
          (d.setPosition = function (t, e) {
            (this.position.x = parseFloat(t)),
              (this.position.y = parseFloat(e));
          }),
          (d._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
          }),
          (d.transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))
              return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
              (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
              this.css(t.from);
              var n = this.element.offsetHeight;
              n = null;
            }
            this.enableTransition(t.to),
              this.css(t.to),
              (this.isTransitioning = !0);
          });
        var l = "opacity," + o(a);
        (d.enableTransition = function () {
          if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            (t = "number" == typeof t ? t + "ms" : t),
              this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0,
              }),
              this.element.addEventListener(h, this, !1);
          }
        }),
          (d.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t);
          }),
          (d.onotransitionend = function (t) {
            this.ontransitionend(t);
          });
        var c = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
          if (t.target === this.element) {
            var e = this._transn,
              n = c[t.propertyName] || t.propertyName;
            if (
              (delete e.ingProperties[n],
              i(e.ingProperties) && this.disableTransition(),
              n in e.clean &&
                ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
              n in e.onEnd)
            ) {
              var o = e.onEnd[n];
              o.call(this), delete e.onEnd[n];
            }
            this.emitEvent("transitionEnd", [this]);
          }
        }),
          (d.disableTransition = function () {
            this.removeTransitionStyles(),
              this.element.removeEventListener(h, this, !1),
              (this.isTransitioning = !1);
          }),
          (d._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e);
          });
        var f = {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: "",
        };
        return (
          (d.removeTransitionStyles = function () {
            this.css(f);
          }),
          (d.stagger = function (t) {
            (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
          }),
          (d.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
              this.css({ display: "" }),
              this.emitEvent("remove", [this]);
          }),
          (d.remove = function () {
            return s && parseFloat(this.layout.options.transitionDuration)
              ? (this.once("transitionEnd", function () {
                  this.removeElem();
                }),
                void this.hide())
              : void this.removeElem();
          }),
          (d.reveal = function () {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
              e = {},
              i = this.getHideRevealTransitionEndProperty("visibleStyle");
            (e[i] = this.onRevealTransitionEnd),
              this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e,
              });
          }),
          (d.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal");
          }),
          (d.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i;
          }),
          (d.hide = function () {
            (this.isHidden = !0), this.css({ display: "" });
            var t = this.layout.options,
              e = {},
              i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            (e[i] = this.onHideTransitionEnd),
              this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e,
              });
          }),
          (d.onHideTransitionEnd = function () {
            this.isHidden &&
              (this.css({ display: "none" }), this.emitEvent("hide"));
          }),
          (d.destroy = function () {
            this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: "",
            });
          }),
          n
        );
      }),
      (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
          ? define(
              "outlayer/outlayer",
              [
                "ev-emitter/ev-emitter",
                "get-size/get-size",
                "fizzy-ui-utils/utils",
                "./item",
              ],
              function (i, n, o, r) {
                return e(t, i, n, o, r);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = e(
              t,
              require("ev-emitter"),
              require("get-size"),
              require("fizzy-ui-utils"),
              require("./item")
            ))
          : (t.Outlayer = e(
              t,
              t.EvEmitter,
              t.getSize,
              t.fizzyUIUtils,
              t.Outlayer.Item
            ));
      })(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
          var i = n.getQueryElement(t);
          if (!i)
            return void (
              h &&
              h.error(
                "Bad element for " +
                  this.constructor.namespace +
                  ": " +
                  (i || t)
              )
            );
          (this.element = i),
            u && (this.$element = u(this.element)),
            (this.options = n.extend({}, this.constructor.defaults)),
            this.option(e);
          var o = ++l;
          (this.element.outlayerGUID = o), (c[o] = this), this._create();
          var r = this._getOption("initLayout");
          r && this.layout();
        }
        function s(t) {
          function e() {
            t.apply(this, arguments);
          }
          return (
            (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            e
          );
        }
        function a(t) {
          if ("number" == typeof t) return t;
          var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
          if (!i.length) return 0;
          i = parseFloat(i);
          var o = m[n] || 1;
          return i * o;
        }
        var h = t.console,
          u = t.jQuery,
          d = function () {},
          l = 0,
          c = {};
        (r.namespace = "outlayer"),
          (r.Item = o),
          (r.defaults = {
            containerStyle: { position: "relative" },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
            visibleStyle: { opacity: 1, transform: "scale(1)" },
          });
        var f = r.prototype;
        n.extend(f, e.prototype),
          (f.option = function (t) {
            n.extend(this.options, t);
          }),
          (f._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e]
              ? this.options[e]
              : this.options[t];
          }),
          (r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer",
          }),
          (f._create = function () {
            this.reloadItems(),
              (this.stamps = []),
              this.stamp(this.options.stamp),
              n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize();
          }),
          (f.reloadItems = function () {
            this.items = this._itemize(this.element.children);
          }),
          (f._itemize = function (t) {
            for (
              var e = this._filterFindItemElements(t),
                i = this.constructor.Item,
                n = [],
                o = 0;
              o < e.length;
              o++
            ) {
              var r = e[o],
                s = new i(r, this);
              n.push(s);
            }
            return n;
          }),
          (f._filterFindItemElements = function (t) {
            return n.filterFindElements(t, this.options.itemSelector);
          }),
          (f.getItemElements = function () {
            return this.items.map(function (t) {
              return t.element;
            });
          }),
          (f.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
              e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), (this._isLayoutInited = !0);
          }),
          (f._init = f.layout),
          (f._resetLayout = function () {
            this.getSize();
          }),
          (f.getSize = function () {
            this.size = i(this.element);
          }),
          (f._getMeasurement = function (t, e) {
            var n,
              o = this.options[t];
            o
              ? ("string" == typeof o
                  ? (n = this.element.querySelector(o))
                  : o instanceof HTMLElement && (n = o),
                (this[t] = n ? i(n)[e] : o))
              : (this[t] = 0);
          }),
          (f.layoutItems = function (t, e) {
            (t = this._getItemsForLayout(t)),
              this._layoutItems(t, e),
              this._postLayout();
          }),
          (f._getItemsForLayout = function (t) {
            return t.filter(function (t) {
              return !t.isIgnored;
            });
          }),
          (f._layoutItems = function (t, e) {
            if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
              var i = [];
              t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
              }, this),
                this._processLayoutQueue(i);
            }
          }),
          (f._getItemLayoutPosition = function () {
            return { x: 0, y: 0 };
          }),
          (f._processLayoutQueue = function (t) {
            this.updateStagger(),
              t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e);
              }, this);
          }),
          (f.updateStagger = function () {
            var t = this.options.stagger;
            return null === t || void 0 === t
              ? void (this.stagger = 0)
              : ((this.stagger = a(t)), this.stagger);
          }),
          (f._positionItem = function (t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
          }),
          (f._postLayout = function () {
            this.resizeContainer();
          }),
          (f.resizeContainer = function () {
            var t = this._getOption("resizeContainer");
            if (t) {
              var e = this._getContainerSize();
              e &&
                (this._setContainerMeasure(e.width, !0),
                this._setContainerMeasure(e.height, !1));
            }
          }),
          (f._getContainerSize = d),
          (f._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
              var i = this.size;
              i.isBorderBox &&
                (t += e
                  ? i.paddingLeft +
                    i.paddingRight +
                    i.borderLeftWidth +
                    i.borderRightWidth
                  : i.paddingBottom +
                    i.paddingTop +
                    i.borderTopWidth +
                    i.borderBottomWidth),
                (t = Math.max(t, 0)),
                (this.element.style[e ? "width" : "height"] = t + "px");
            }
          }),
          (f._emitCompleteOnItems = function (t, e) {
            function i() {
              o.dispatchEvent(t + "Complete", null, [e]);
            }
            function n() {
              s++, s == r && i();
            }
            var o = this,
              r = e.length;
            if (!e || !r) return void i();
            var s = 0;
            e.forEach(function (e) {
              e.once(t, n);
            });
          }),
          (f.dispatchEvent = function (t, e, i) {
            var n = e ? [e].concat(i) : i;
            if ((this.emitEvent(t, n), u))
              if (((this.$element = this.$element || u(this.element)), e)) {
                var o = u.Event(e);
                (o.type = t), this.$element.trigger(o, i);
              } else this.$element.trigger(t, i);
          }),
          (f.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0);
          }),
          (f.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored;
          }),
          (f.stamp = function (t) {
            (t = this._find(t)),
              t &&
                ((this.stamps = this.stamps.concat(t)),
                t.forEach(this.ignore, this));
          }),
          (f.unstamp = function (t) {
            (t = this._find(t)),
              t &&
                t.forEach(function (t) {
                  n.removeFrom(this.stamps, t), this.unignore(t);
                }, this);
          }),
          (f._find = function (t) {
            return t
              ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
                (t = n.makeArray(t)))
              : void 0;
          }),
          (f._manageStamps = function () {
            this.stamps &&
              this.stamps.length &&
              (this._getBoundingRect(),
              this.stamps.forEach(this._manageStamp, this));
          }),
          (f._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
              e = this.size;
            this._boundingRect = {
              left: t.left + e.paddingLeft + e.borderLeftWidth,
              top: t.top + e.paddingTop + e.borderTopWidth,
              right: t.right - (e.paddingRight + e.borderRightWidth),
              bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
            };
          }),
          (f._manageStamp = d),
          (f._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
              n = this._boundingRect,
              o = i(t),
              r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom,
              };
            return r;
          }),
          (f.handleEvent = n.handleEvent),
          (f.bindResize = function () {
            t.addEventListener("resize", this), (this.isResizeBound = !0);
          }),
          (f.unbindResize = function () {
            t.removeEventListener("resize", this), (this.isResizeBound = !1);
          }),
          (f.onresize = function () {
            this.resize();
          }),
          n.debounceMethod(r, "onresize", 100),
          (f.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
          }),
          (f.needsResizeLayout = function () {
            var t = i(this.element),
              e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth;
          }),
          (f.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e;
          }),
          (f.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e));
          }),
          (f.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
              var i = this.items.slice(0);
              (this.items = e.concat(i)),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i);
            }
          }),
          (f.reveal = function (t) {
            if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
              var e = this.updateStagger();
              t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
              });
            }
          }),
          (f.hide = function (t) {
            if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
              var e = this.updateStagger();
              t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
              });
            }
          }),
          (f.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e);
          }),
          (f.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e);
          }),
          (f.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
              var i = this.items[e];
              if (i.element == t) return i;
            }
          }),
          (f.getItems = function (t) {
            t = n.makeArray(t);
            var e = [];
            return (
              t.forEach(function (t) {
                var i = this.getItem(t);
                i && e.push(i);
              }, this),
              e
            );
          }),
          (f.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e),
              e &&
                e.length &&
                e.forEach(function (t) {
                  t.remove(), n.removeFrom(this.items, t);
                }, this);
          }),
          (f.destroy = function () {
            var t = this.element.style;
            (t.height = ""),
              (t.position = ""),
              (t.width = ""),
              this.items.forEach(function (t) {
                t.destroy();
              }),
              this.unbindResize();
            var e = this.element.outlayerGUID;
            delete c[e],
              delete this.element.outlayerGUID,
              u && u.removeData(this.element, this.constructor.namespace);
          }),
          (r.data = function (t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e];
          }),
          (r.create = function (t, e) {
            var i = s(r);
            return (
              (i.defaults = n.extend({}, r.defaults)),
              n.extend(i.defaults, e),
              (i.compatOptions = n.extend({}, r.compatOptions)),
              (i.namespace = t),
              (i.data = r.data),
              (i.Item = s(o)),
              n.htmlInit(i, t),
              u && u.bridget && u.bridget(t, i),
              i
            );
          });
        var m = { ms: 1, s: 1e3 };
        return (r.Item = o), r;
      }),
      (function (t, e) {
        "function" == typeof define && define.amd
          ? define(["outlayer/outlayer", "get-size/get-size"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("outlayer"), require("get-size")))
          : (t.Masonry = e(t.Outlayer, t.getSize));
      })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var n = i.prototype;
        return (
          (n._resetLayout = function () {
            this.getSize(),
              this._getMeasurement("columnWidth", "outerWidth"),
              this._getMeasurement("gutter", "outerWidth"),
              this.measureColumns(),
              (this.colYs = []);
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            (this.maxY = 0), (this.horizontalColIndex = 0);
          }),
          (n.measureColumns = function () {
            if ((this.getContainerWidth(), !this.columnWidth)) {
              var t = this.items[0],
                i = t && t.element;
              this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
            }
            var n = (this.columnWidth += this.gutter),
              o = this.containerWidth + this.gutter,
              r = o / n,
              s = n - (o % n),
              a = s && 1 > s ? "round" : "floor";
            (r = Math[a](r)), (this.cols = Math.max(r, 1));
          }),
          (n.getContainerWidth = function () {
            var t = this._getOption("fitWidth"),
              i = t ? this.element.parentNode : this.element,
              n = e(i);
            this.containerWidth = n && n.innerWidth;
          }),
          (n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
              i = e && 1 > e ? "round" : "ceil",
              n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (
              var o = this.options.horizontalOrder
                  ? "_getHorizontalColPosition"
                  : "_getTopColPosition",
                r = this[o](n, t),
                s = { x: this.columnWidth * r.col, y: r.y },
                a = r.y + t.size.outerHeight,
                h = n + r.col,
                u = r.col;
              h > u;
              u++
            )
              this.colYs[u] = a;
            return s;
          }),
          (n._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
              i = Math.min.apply(Math, e);
            return { col: e.indexOf(i), y: i };
          }),
          (n._getTopColGroup = function (t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
              e[n] = this._getColGroupY(n, t);
            return e;
          }),
          (n._getColGroupY = function (t, e) {
            if (2 > e) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i);
          }),
          (n._getHorizontalColPosition = function (t, e) {
            var i = this.horizontalColIndex % this.cols,
              n = t > 1 && i + t > this.cols;
            i = n ? 0 : i;
            var o = e.size.outerWidth && e.size.outerHeight;
            return (
              (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
              { col: i, y: this._getColGroupY(i, t) }
            );
          }),
          (n._manageStamp = function (t) {
            var i = e(t),
              n = this._getElementOffset(t),
              o = this._getOption("originLeft"),
              r = o ? n.left : n.right,
              s = r + i.outerWidth,
              a = Math.floor(r / this.columnWidth);
            a = Math.max(0, a);
            var h = Math.floor(s / this.columnWidth);
            (h -= s % this.columnWidth ? 0 : 1),
              (h = Math.min(this.cols - 1, h));
            for (
              var u = this._getOption("originTop"),
                d = (u ? n.top : n.bottom) + i.outerHeight,
                l = a;
              h >= l;
              l++
            )
              this.colYs[l] = Math.max(d, this.colYs[l]);
          }),
          (n._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = { height: this.maxY };
            return (
              this._getOption("fitWidth") &&
                (t.width = this._getContainerFitWidth()),
              t
            );
          }),
          (n._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
            return (this.cols - t) * this.columnWidth - this.gutter;
          }),
          (n.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth;
          }),
          i
        );
      });
    /*!
     * Isotope PACKAGED v3.0.6
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * https://isotope.metafizzy.co
     * Copyright 2010-2018 Metafizzy
     */

    /**
     * Bridget makes jQuery widgets
     * v2.0.1
     * MIT license
     */

    /* jshint browser: true, strict: true, undef: true, unused: true */

    (function (window, factory) {
      // universal module definition
      /*jshint strict: false */ /* globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("jquery-bridget/jquery-bridget", ["jquery"], function (jQuery) {
          return factory(window, jQuery);
        });
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(window, require("jquery"));
      } else {
        // browser global
        window.jQueryBridget = factory(window, window.jQuery);
      }
    })(window, function factory(window, jQuery) {
      "use strict";

      // ----- utils ----- //

      var arraySlice = Array.prototype.slice;

      // helper function for logging errors
      // $.error breaks jQuery chaining
      var console = window.console;
      var logError =
        typeof console == "undefined"
          ? function () {}
          : function (message) {
              console.error(message);
            };

      // ----- jQueryBridget ----- //

      function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
          return;
        }

        // add option method -> $().plugin('option', {...})
        if (!PluginClass.prototype.option) {
          // option setter
          PluginClass.prototype.option = function (opts) {
            // bail out if not an object
            if (!$.isPlainObject(opts)) {
              return;
            }
            this.options = $.extend(true, this.options, opts);
          };
        }

        // make jQuery plugin
        $.fn[namespace] = function (arg0 /*, arg1 */) {
          if (typeof arg0 == "string") {
            // method call $().plugin( 'methodName', { options } )
            // shift arguments by 1
            var args = arraySlice.call(arguments, 1);
            return methodCall(this, arg0, args);
          }
          // just $().plugin({ options })
          plainCall(this, arg0);
          return this;
        };

        // $().plugin('methodName')
        function methodCall($elems, methodName, args) {
          var returnValue;
          var pluginMethodStr = "$()." + namespace + '("' + methodName + '")';

          $elems.each(function (i, elem) {
            // get instance
            var instance = $.data(elem, namespace);
            if (!instance) {
              logError(
                namespace +
                  " not initialized. Cannot call methods, i.e. " +
                  pluginMethodStr
              );
              return;
            }

            var method = instance[methodName];
            if (!method || methodName.charAt(0) == "_") {
              logError(pluginMethodStr + " is not a valid method");
              return;
            }

            // apply method, get return value
            var value = method.apply(instance, args);
            // set return value if value is returned, use only first value
            returnValue = returnValue === undefined ? value : returnValue;
          });

          return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall($elems, options) {
          $elems.each(function (i, elem) {
            var instance = $.data(elem, namespace);
            if (instance) {
              // set options & init
              instance.option(options);
              instance._init();
            } else {
              // initialize new instance
              instance = new PluginClass(elem, options);
              $.data(elem, namespace, instance);
            }
          });
        }

        updateJQuery($);
      }

      // ----- updateJQuery ----- //

      // set $.bridget for v1 backwards compatibility
      function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
          return;
        }
        $.bridget = jQueryBridget;
      }

      updateJQuery(jQuery || window.jQuery);

      // -----  ----- //

      return jQueryBridget;
    });

    /**
     * EvEmitter v1.1.0
     * Lil' event emitter
     * MIT License
     */

    /* jshint unused: true, undef: true, strict: true */

    (function (global, factory) {
      // universal module definition
      /* jshint strict: false */ /* globals define, module, window */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD - RequireJS
        define("ev-emitter/ev-emitter", factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory();
      } else {
        // Browser globals
        global.EvEmitter = factory();
      }
    })(typeof window != "undefined" ? window : this, function () {
      function EvEmitter() {}

      var proto = EvEmitter.prototype;

      proto.on = function (eventName, listener) {
        if (!eventName || !listener) {
          return;
        }
        // set events hash
        var events = (this._events = this._events || {});
        // set listeners array
        var listeners = (events[eventName] = events[eventName] || []);
        // only add once
        if (listeners.indexOf(listener) == -1) {
          listeners.push(listener);
        }

        return this;
      };

      proto.once = function (eventName, listener) {
        if (!eventName || !listener) {
          return;
        }
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = (this._onceEvents = this._onceEvents || {});
        // set onceListeners object
        var onceListeners = (onceEvents[eventName] =
          onceEvents[eventName] || {});
        // set flag
        onceListeners[listener] = true;

        return this;
      };

      proto.off = function (eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
          return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
          listeners.splice(index, 1);
        }

        return this;
      };

      proto.emitEvent = function (eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
          return;
        }
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];

        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          var isOnce = onceListeners && onceListeners[listener];
          if (isOnce) {
            // remove listener
            // remove before trigger to prevent recursion
            this.off(eventName, listener);
            // unset once flag
            delete onceListeners[listener];
          }
          // trigger listener
          listener.apply(this, args);
        }

        return this;
      };

      proto.allOff = function () {
        delete this._events;
        delete this._onceEvents;
      };

      return EvEmitter;
    });

    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */

    /* jshint browser: true, strict: true, undef: true, unused: true */
    /* globals console: false */

    (function (window, factory) {
      /* jshint strict: false */ /* globals define, module */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("get-size/get-size", factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory();
      } else {
        // browser global
        window.getSize = factory();
      }
    })(window, function factory() {
      "use strict";

      // -------------------------- helpers -------------------------- //

      // get a number from a string, not a percentage
      function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
      }

      function noop() {}

      var logError =
        typeof console == "undefined"
          ? noop
          : function (message) {
              console.error(message);
            };

      // -------------------------- measurements -------------------------- //

      var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];

      var measurementsLength = measurements.length;

      function getZeroSize() {
        var size = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0,
        };
        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          size[measurement] = 0;
        }
        return size;
      }

      // -------------------------- getStyle -------------------------- //

      /**
       * getStyle, get style of element, check for Firefox bug
       * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
       */
      function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
          logError(
            "Style returned " +
              style +
              ". Are you running this code in a hidden iframe on Firefox? " +
              "See https://bit.ly/getsizebug1"
          );
        }
        return style;
      }

      // -------------------------- setup -------------------------- //

      var isSetup = false;

      var isBoxSizeOuter;

      /**
       * setup
       * check isBoxSizerOuter
       * do on first getSize() rather than on page load for Firefox bug
       */
      function setup() {
        // setup once
        if (isSetup) {
          return;
        }
        isSetup = true;

        // -------------------------- box sizing -------------------------- //

        /**
         * Chrome & Safari measure the outer-width on style.width on border-box elems
         * IE11 & Firefox<29 measures the inner-width
         */
        var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";

        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;

        body.removeChild(div);
      }

      // -------------------------- getSize -------------------------- //

      function getSize(elem) {
        setup();

        // use querySeletor if elem is string
        if (typeof elem == "string") {
          elem = document.querySelector(elem);
        }

        // do not proceed on non-objects
        if (!elem || typeof elem != "object" || !elem.nodeType) {
          return;
        }

        var style = getStyle(elem);

        // if hidden, everything is 0
        if (style.display == "none") {
          return getZeroSize();
        }

        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;

        var isBorderBox = (size.isBorderBox = style.boxSizing == "border-box");

        // get all measurements
        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          var num = parseFloat(value);
          // any 'auto', 'medium' value will be 0
          size[measurement] = !isNaN(num) ? num : 0;
        }

        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;

        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width =
            styleWidth +
            // add padding and border unless it's already including it
            (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }

        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
          size.height =
            styleHeight +
            // add padding and border unless it's already including it
            (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }

        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);

        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;

        return size;
      }

      return getSize;
    });

    /**
     * matchesSelector v2.0.2
     * matchesSelector( element, '.selector' )
     * MIT license
     */

    /*jshint browser: true, strict: true, undef: true, unused: true */

    (function (window, factory) {
      /*global define: false, module: false */
      "use strict";
      // universal module definition
      if (typeof define == "function" && define.amd) {
        // AMD
        define("desandro-matches-selector/matches-selector", factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory();
      } else {
        // browser global
        window.matchesSelector = factory();
      }
    })(window, function factory() {
      "use strict";

      var matchesMethod = (function () {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) {
          return "matches";
        }
        // check un-prefixed
        if (ElemProto.matchesSelector) {
          return "matchesSelector";
        }
        // check vendor prefixes
        var prefixes = ["webkit", "moz", "ms", "o"];

        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var method = prefix + "MatchesSelector";
          if (ElemProto[method]) {
            return method;
          }
        }
      })();

      return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
      };
    });

    /**
     * Fizzy UI utils v2.0.7
     * MIT license
     */

    /*jshint browser: true, undef: true, unused: true, strict: true */

    (function (window, factory) {
      // universal module definition
      /*jshint strict: false */ /*globals define, module, require */
      if (typeof define == "function" && define.amd) {
        // AMD
        define("fizzy-ui-utils/utils", [
          "desandro-matches-selector/matches-selector",
        ], function (matchesSelector) {
          return factory(window, matchesSelector);
        });
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(window, require("desandro-matches-selector"));
      } else {
        // browser global
        window.fizzyUIUtils = factory(window, window.matchesSelector);
      }
    })(window, function factory(window, matchesSelector) {
      var utils = {};

      // ----- extend ----- //

      // extends objects
      utils.extend = function (a, b) {
        for (var prop in b) {
          a[prop] = b[prop];
        }
        return a;
      };

      // ----- modulo ----- //

      utils.modulo = function (num, div) {
        return ((num % div) + div) % div;
      };

      // ----- makeArray ----- //

      var arraySlice = Array.prototype.slice;

      // turn element or nodeList into an array
      utils.makeArray = function (obj) {
        if (Array.isArray(obj)) {
          // use object if already an array
          return obj;
        }
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) {
          return [];
        }

        var isArrayLike =
          typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) {
          // convert nodeList to array
          return arraySlice.call(obj);
        }

        // array of single index
        return [obj];
      };

      // ----- removeFrom ----- //

      utils.removeFrom = function (ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
          ary.splice(index, 1);
        }
      };

      // ----- getParent ----- //

      utils.getParent = function (elem, selector) {
        while (elem.parentNode && elem != document.body) {
          elem = elem.parentNode;
          if (matchesSelector(elem, selector)) {
            return elem;
          }
        }
      };

      // ----- getQueryElement ----- //

      // use element as selector string
      utils.getQueryElement = function (elem) {
        if (typeof elem == "string") {
          return document.querySelector(elem);
        }
        return elem;
      };

      // ----- handleEvent ----- //

      // enable .ontype to trigger from .addEventListener( elem, 'type' )
      utils.handleEvent = function (event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };

      // ----- filterFindElements ----- //

      utils.filterFindElements = function (elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];

        elems.forEach(function (elem) {
          // check that elem is an actual element
          if (!(elem instanceof HTMLElement)) {
            return;
          }
          // add elem if no selector
          if (!selector) {
            ffElems.push(elem);
            return;
          }
          // filter & find items if we have a selector
          // filter
          if (matchesSelector(elem, selector)) {
            ffElems.push(elem);
          }
          // find children
          var childElems = elem.querySelectorAll(selector);
          // concat childElems to filterFound array
          for (var i = 0; i < childElems.length; i++) {
            ffElems.push(childElems[i]);
          }
        });

        return ffElems;
      };

      // ----- debounceMethod ----- //

      utils.debounceMethod = function (_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";

        _class.prototype[methodName] = function () {
          var timeout = this[timeoutName];
          clearTimeout(timeout);

          var args = arguments;
          var _this = this;
          this[timeoutName] = setTimeout(function () {
            method.apply(_this, args);
            delete _this[timeoutName];
          }, threshold);
        };
      };

      // ----- docReady ----- //

      utils.docReady = function (callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") {
          // do async to allow for other scripts to run. metafizzy/flickity#441
          setTimeout(callback);
        } else {
          document.addEventListener("DOMContentLoaded", callback);
        }
      };

      // ----- htmlInit ----- //

      // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
      utils.toDashed = function (str) {
        return str
          .replace(/(.)([A-Z])/g, function (match, $1, $2) {
            return $1 + "-" + $2;
          })
          .toLowerCase();
      };

      var console = window.console;
      /**
       * allow user to initialize classes via [data-namespace] or .js-namespace class
       * htmlInit( Widget, 'widgetName' )
       * options are parsed from data-namespace-options
       */
      utils.htmlInit = function (WidgetClass, namespace) {
        utils.docReady(function () {
          var dashedNamespace = utils.toDashed(namespace);
          var dataAttr = "data-" + dashedNamespace;
          var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
          var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
          var elems = utils
            .makeArray(dataAttrElems)
            .concat(utils.makeArray(jsDashElems));
          var dataOptionsAttr = dataAttr + "-options";
          var jQuery = window.jQuery;

          elems.forEach(function (elem) {
            var attr =
              elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
            var options;
            try {
              options = attr && JSON.parse(attr);
            } catch (error) {
              // log error, do not initialize
              if (console) {
                console.error(
                  "Error parsing " +
                    dataAttr +
                    " on " +
                    elem.className +
                    ": " +
                    error
                );
              }
              return;
            }
            // initialize
            var instance = new WidgetClass(elem, options);
            // make available via $().data('namespace')
            if (jQuery) {
              jQuery.data(elem, namespace, instance);
            }
          });
        });
      };

      // -----  ----- //

      return utils;
    });

    /**
     * Outlayer Item
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /* globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD - RequireJS
        define("outlayer/item", [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory(require("ev-emitter"), require("get-size"));
      } else {
        // browser global
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
      }
    })(window, function factory(EvEmitter, getSize) {
      "use strict";

      // ----- helpers ----- //

      function isEmptyObj(obj) {
        for (var prop in obj) {
          return false;
        }
        prop = null;
        return true;
      }

      // -------------------------- CSS3 support -------------------------- //

      var docElemStyle = document.documentElement.style;

      var transitionProperty =
        typeof docElemStyle.transition == "string"
          ? "transition"
          : "WebkitTransition";
      var transformProperty =
        typeof docElemStyle.transform == "string"
          ? "transform"
          : "WebkitTransform";

      var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[transitionProperty];

      // cache all vendor properties that could have vendor prefix
      var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay",
      };

      // -------------------------- Item -------------------------- //

      function Item(element, layout) {
        if (!element) {
          return;
        }

        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
          x: 0,
          y: 0,
        };

        this._create();
      }

      // inherit EvEmitter
      var proto = (Item.prototype = Object.create(EvEmitter.prototype));
      proto.constructor = Item;

      proto._create = function () {
        // transition objects
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {},
        };

        this.css({
          position: "absolute",
        });
      };

      // trigger specified handler for event type
      proto.handleEvent = function (event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };

      proto.getSize = function () {
        this.size = getSize(this.element);
      };

      /**
       * apply CSS styles to element
       * @param {Object} style
       */
      proto.css = function (style) {
        var elemStyle = this.element.style;

        for (var prop in style) {
          // use vendor property if available
          var supportedProp = vendorProperties[prop] || prop;
          elemStyle[supportedProp] = style[prop];
        }
      };

      // measure position, and sets it
      proto.getPosition = function () {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        // convert percent to pixels
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) {
          x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf("%") != -1) {
          y = (y / 100) * layoutSize.height;
        }
        // clean up 'auto' or other non-integer values
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

        this.position.x = x;
        this.position.y = y;
      };

      // set settled position, apply padding
      proto.layoutPosition = function () {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");

        // x
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";

        var x = this.position.x + layoutSize[xPadding];
        // set in percentage or pixels
        style[xProperty] = this.getXValue(x);
        // reset other property
        style[xResetProperty] = "";

        // y
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";

        var y = this.position.y + layoutSize[yPadding];
        // set in percentage or pixels
        style[yProperty] = this.getYValue(y);
        // reset other property
        style[yResetProperty] = "";

        this.css(style);
        this.emitEvent("layout", [this]);
      };

      proto.getXValue = function (x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal
          ? (x / this.layout.size.width) * 100 + "%"
          : x + "px";
      };

      proto.getYValue = function (y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal
          ? (y / this.layout.size.height) * 100 + "%"
          : y + "px";
      };

      proto._transitionTo = function (x, y) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;

        var didNotMove = x == this.position.x && y == this.position.y;

        // save end position
        this.setPosition(x, y);

        // if did not move and not transitioning, just go to layout
        if (didNotMove && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }

        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);

        this.transition({
          to: transitionStyle,
          onTransitionEnd: {
            transform: this.layoutPosition,
          },
          isCleaning: true,
        });
      };

      proto.getTranslate = function (x, y) {
        // flip cooridinates if origin on right or bottom
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
      };

      // non transition + transform support
      proto.goTo = function (x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
      };

      proto.moveTo = proto._transitionTo;

      proto.setPosition = function (x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
      };

      // ----- transition ----- //

      /**
       * @param {Object} style - CSS
       * @param {Function} onTransitionEnd
       */

      // non transition, just trigger callback
      proto._nonTransition = function (args) {
        this.css(args.to);
        if (args.isCleaning) {
          this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
          args.onTransitionEnd[prop].call(this);
        }
      };

      /**
       * proper transition
       * @param {Object} args - arguments
       *   @param {Object} to - style to transition to
       *   @param {Object} from - style to start transition from
       *   @param {Boolean} isCleaning - removes transition styles after transition
       *   @param {Function} onTransitionEnd - callback
       */
      proto.transition = function (args) {
        // redirect to nonTransition if no transition duration
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(args);
          return;
        }

        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for (var prop in args.onTransitionEnd) {
          _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        // keep track of properties that are transitioning
        for (prop in args.to) {
          _transition.ingProperties[prop] = true;
          // keep track of properties to clean up when transition is done
          if (args.isCleaning) {
            _transition.clean[prop] = true;
          }
        }

        // set from styles
        if (args.from) {
          this.css(args.from);
          // force redraw. http://blog.alexmaccaw.com/css-transitions
          var h = this.element.offsetHeight;
          // hack for JSHint to hush about unused var
          h = null;
        }
        // enable transition
        this.enableTransition(args.to);
        // set styles that are transitioning
        this.css(args.to);

        this.isTransitioning = true;
      };

      // dash before all cap letters, including first for
      // WebkitTransform => -webkit-transform
      function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function ($1) {
          return "-" + $1.toLowerCase();
        });
      }

      var transitionProps = "opacity," + toDashedAll(transformProperty);

      proto.enableTransition = function (/* style */) {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if (this.isTransitioning) {
          return;
        }

        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // munge number to millisecond, to match stagger
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        // enable transition styles
        this.css({
          transitionProperty: transitionProps,
          transitionDuration: duration,
          transitionDelay: this.staggerDelay || 0,
        });
        // listen for transition end event
        this.element.addEventListener(transitionEndEvent, this, false);
      };

      // ----- events ----- //

      proto.onwebkitTransitionEnd = function (event) {
        this.ontransitionend(event);
      };

      proto.onotransitionend = function (event) {
        this.ontransitionend(event);
      };

      // properties that I munge to make my life easier
      var dashedVendorProperties = {
        "-webkit-transform": "transform",
      };

      proto.ontransitionend = function (event) {
        // disregard bubbled events from children
        if (event.target !== this.element) {
          return;
        }
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName =
          dashedVendorProperties[event.propertyName] || event.propertyName;

        // remove property that has completed transitioning
        delete _transition.ingProperties[propertyName];
        // check if any properties are still transitioning
        if (isEmptyObj(_transition.ingProperties)) {
          // all properties have completed transitioning
          this.disableTransition();
        }
        // clean style
        if (propertyName in _transition.clean) {
          // clean up style
          this.element.style[event.propertyName] = "";
          delete _transition.clean[propertyName];
        }
        // trigger onTransitionEnd callback
        if (propertyName in _transition.onEnd) {
          var onTransitionEnd = _transition.onEnd[propertyName];
          onTransitionEnd.call(this);
          delete _transition.onEnd[propertyName];
        }

        this.emitEvent("transitionEnd", [this]);
      };

      proto.disableTransition = function () {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
      };

      /**
       * removes style property from element
       * @param {Object} style
       **/
      proto._removeStyles = function (style) {
        // clean up transition styles
        var cleanStyle = {};
        for (var prop in style) {
          cleanStyle[prop] = "";
        }
        this.css(cleanStyle);
      };

      var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: "",
      };

      proto.removeTransitionStyles = function () {
        // remove transition
        this.css(cleanTransitionStyle);
      };

      // ----- stagger ----- //

      proto.stagger = function (delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
      };

      // ----- show/hide/remove ----- //

      // remove element from DOM
      proto.removeElem = function () {
        this.element.parentNode.removeChild(this.element);
        // remove display: none
        this.css({ display: "" });
        this.emitEvent("remove", [this]);
      };

      proto.remove = function () {
        // just remove element if no transition support or no transition
        if (
          !transitionProperty ||
          !parseFloat(this.layout.options.transitionDuration)
        ) {
          this.removeElem();
          return;
        }

        // start transition
        this.once("transitionEnd", function () {
          this.removeElem();
        });
        this.hide();
      };

      proto.reveal = function () {
        delete this.isHidden;
        // remove display: none
        this.css({ display: "" });

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty =
          this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

        this.transition({
          from: options.hiddenStyle,
          to: options.visibleStyle,
          isCleaning: true,
          onTransitionEnd: onTransitionEnd,
        });
      };

      proto.onRevealTransitionEnd = function () {
        // check if still visible
        // during transition, item may have been hidden
        if (!this.isHidden) {
          this.emitEvent("reveal");
        }
      };

      /**
       * get style property use for hide/reveal transition end
       * @param {String} styleProperty - hiddenStyle/visibleStyle
       * @returns {String}
       */
      proto.getHideRevealTransitionEndProperty = function (styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        // use opacity
        if (optionStyle.opacity) {
          return "opacity";
        }
        // get first property
        for (var prop in optionStyle) {
          return prop;
        }
      };

      proto.hide = function () {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({ display: "" });

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty =
          this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

        this.transition({
          from: options.visibleStyle,
          to: options.hiddenStyle,
          // keep hidden stuff hidden
          isCleaning: true,
          onTransitionEnd: onTransitionEnd,
        });
      };

      proto.onHideTransitionEnd = function () {
        // check if still hidden
        // during transition, item may have been un-hidden
        if (this.isHidden) {
          this.css({ display: "none" });
          this.emitEvent("hide");
        }
      };

      proto.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      };

      return Item;
    });

    /*!
     * Outlayer v2.1.1
     * the brains and guts of a layout library
     * MIT license
     */

    (function (window, factory) {
      "use strict";
      // universal module definition
      /* jshint strict: false */ /* globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD - RequireJS
        define("outlayer/outlayer", [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item",
        ], function (EvEmitter, getSize, utils, Item) {
          return factory(window, EvEmitter, getSize, utils, Item);
        });
      } else if (typeof module == "object" && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory(
          window,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        );
      } else {
        // browser global
        window.Outlayer = factory(
          window,
          window.EvEmitter,
          window.getSize,
          window.fizzyUIUtils,
          window.Outlayer.Item
        );
      }
    })(window, function factory(window, EvEmitter, getSize, utils, Item) {
      "use strict";

      // ----- vars ----- //

      var console = window.console;
      var jQuery = window.jQuery;
      var noop = function () {};

      // -------------------------- Outlayer -------------------------- //

      // globally unique identifiers
      var GUID = 0;
      // internal store of all Outlayer intances
      var instances = {};

      /**
       * @param {Element, String} element
       * @param {Object} options
       * @constructor
       */
      function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
          if (console) {
            console.error(
              "Bad element for " +
                this.constructor.namespace +
                ": " +
                (queryElement || element)
            );
          }
          return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) {
          this.$element = jQuery(this.element);
        }

        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);

        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[id] = this; // associate via id

        // kick it off
        this._create();

        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) {
          this.layout();
        }
      }

      // settings are for internal use only
      Outlayer.namespace = "outlayer";
      Outlayer.Item = Item;

      // default options
      Outlayer.defaults = {
        containerStyle: {
          position: "relative",
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      };

      var proto = Outlayer.prototype;
      // inherit EvEmitter
      utils.extend(proto, EvEmitter.prototype);

      /**
       * set options
       * @param {Object} opts
       */
      proto.option = function (opts) {
        utils.extend(this.options, opts);
      };

      /**
       * get backwards compatible option value, check old name
       */
      proto._getOption = function (option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined
          ? this.options[oldOption]
          : this.options[option];
      };

      Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      };

      proto._create = function () {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp(this.options.stamp);
        // set container style
        utils.extend(this.element.style, this.options.containerStyle);

        // bind resize method
        var canBindResize = this._getOption("resize");
        if (canBindResize) {
          this.bindResize();
        }
      };

      // goes through all children again and gets bricks in proper order
      proto.reloadItems = function () {
        // collection of item elements
        this.items = this._itemize(this.element.children);
      };

      /**
       * turn elements into Outlayer.Items to be used in layout
       * @param {Array or NodeList or HTMLElement} elems
       * @returns {Array} items - collection of new Outlayer Items
       */
      proto._itemize = function (elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;

        // create new Outlayer Items for collection
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
          var elem = itemElems[i];
          var item = new Item(elem, this);
          items.push(item);
        }

        return items;
      };

      /**
       * get item elements to be used in layout
       * @param {Array or NodeList or HTMLElement} elems
       * @returns {Array} items - item elements
       */
      proto._filterFindItemElements = function (elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
      };

      /**
       * getter method for getting item elements
       * @returns {Array} elems - collection of item elements
       */
      proto.getItemElements = function () {
        return this.items.map(function (item) {
          return item.element;
        });
      };

      // ----- init & layout ----- //

      /**
       * lays out all items
       */
      proto.layout = function () {
        this._resetLayout();
        this._manageStamps();

        // don't animate first layout
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant =
          layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);

        // flag for initalized
        this._isLayoutInited = true;
      };

      // _init is alias for layout
      proto._init = proto.layout;

      /**
       * logic before any new layout
       */
      proto._resetLayout = function () {
        this.getSize();
      };

      proto.getSize = function () {
        this.size = getSize(this.element);
      };

      /**
       * get measurement from option, for columnWidth, rowHeight, gutter
       * if option is String -> get element from selector string, & get size of element
       * if option is Element -> get size of element
       * else use option as a number
       *
       * @param {String} measurement
       * @param {String} size - width or height
       * @private
       */
      proto._getMeasurement = function (measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
          // default to 0
          this[measurement] = 0;
        } else {
          // use option as an element
          if (typeof option == "string") {
            elem = this.element.querySelector(option);
          } else if (option instanceof HTMLElement) {
            elem = option;
          }
          // use size of element, if element
          this[measurement] = elem ? getSize(elem)[size] : option;
        }
      };

      /**
       * layout a collection of item elements
       * @api public
       */
      proto.layoutItems = function (items, isInstant) {
        items = this._getItemsForLayout(items);

        this._layoutItems(items, isInstant);

        this._postLayout();
      };

      /**
       * get the items to be laid out
       * you may want to skip over some items
       * @param {Array} items
       * @returns {Array} items
       */
      proto._getItemsForLayout = function (items) {
        return items.filter(function (item) {
          return !item.isIgnored;
        });
      };

      /**
       * layout items
       * @param {Array} items
       * @param {Boolean} isInstant
       */
      proto._layoutItems = function (items, isInstant) {
        this._emitCompleteOnItems("layout", items);

        if (!items || !items.length) {
          // no items, emit event with empty array
          return;
        }

        var queue = [];

        items.forEach(function (item) {
          // get x/y object from method
          var position = this._getItemLayoutPosition(item);
          // enqueue
          position.item = item;
          position.isInstant = isInstant || item.isLayoutInstant;
          queue.push(position);
        }, this);

        this._processLayoutQueue(queue);
      };

      /**
       * get item layout position
       * @param {Outlayer.Item} item
       * @returns {Object} x and y position
       */
      proto._getItemLayoutPosition = function (/* item */) {
        return {
          x: 0,
          y: 0,
        };
      };

      /**
       * iterate over array and position each item
       * Reason being - separating this logic prevents 'layout invalidation'
       * thx @paul_irish
       * @param {Array} queue
       */
      proto._processLayoutQueue = function (queue) {
        this.updateStagger();
        queue.forEach(function (obj, i) {
          this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
      };

      // set stagger from option in milliseconds number
      proto.updateStagger = function () {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
          this.stagger = 0;
          return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
      };

      /**
       * Sets position of item in DOM
       * @param {Outlayer.Item} item
       * @param {Number} x - horizontal position
       * @param {Number} y - vertical position
       * @param {Boolean} isInstant - disables transitions
       */
      proto._positionItem = function (item, x, y, isInstant, i) {
        if (isInstant) {
          // if not transition, just set CSS
          item.goTo(x, y);
        } else {
          item.stagger(i * this.stagger);
          item.moveTo(x, y);
        }
      };

      /**
       * Any logic you want to do after each layout,
       * i.e. size the container
       */
      proto._postLayout = function () {
        this.resizeContainer();
      };

      proto.resizeContainer = function () {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) {
          return;
        }
        var size = this._getContainerSize();
        if (size) {
          this._setContainerMeasure(size.width, true);
          this._setContainerMeasure(size.height, false);
        }
      };

      /**
       * Sets width or height of container if returned
       * @returns {Object} size
       *   @param {Number} width
       *   @param {Number} height
       */
      proto._getContainerSize = noop;

      /**
       * @param {Number} measure - size of width or height
       * @param {Boolean} isWidth
       */
      proto._setContainerMeasure = function (measure, isWidth) {
        if (measure === undefined) {
          return;
        }

        var elemSize = this.size;
        // add padding and border width if border box
        if (elemSize.isBorderBox) {
          measure += isWidth
            ? elemSize.paddingLeft +
              elemSize.paddingRight +
              elemSize.borderLeftWidth +
              elemSize.borderRightWidth
            : elemSize.paddingBottom +
              elemSize.paddingTop +
              elemSize.borderTopWidth +
              elemSize.borderBottomWidth;
        }

        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
      };

      /**
       * emit eventComplete on a collection of items events
       * @param {String} eventName
       * @param {Array} items - Outlayer.Items
       */
      proto._emitCompleteOnItems = function (eventName, items) {
        var _this = this;
        function onComplete() {
          _this.dispatchEvent(eventName + "Complete", null, [items]);
        }

        var count = items.length;
        if (!items || !count) {
          onComplete();
          return;
        }

        var doneCount = 0;
        function tick() {
          doneCount++;
          if (doneCount == count) {
            onComplete();
          }
        }

        // bind callback
        items.forEach(function (item) {
          item.once(eventName, tick);
        });
      };

      /**
       * emits events via EvEmitter and jQuery events
       * @param {String} type - name of event
       * @param {Event} event - original event
       * @param {Array} args - extra arguments
       */
      proto.dispatchEvent = function (type, event, args) {
        // add original event to arguments
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);

        if (jQuery) {
          // set this.$element
          this.$element = this.$element || jQuery(this.element);
          if (event) {
            // create jQuery event
            var $event = jQuery.Event(event);
            $event.type = type;
            this.$element.trigger($event, args);
          } else {
            // just trigger with type if no event available
            this.$element.trigger(type, args);
          }
        }
      };

      // -------------------------- ignore & stamps -------------------------- //

      /**
       * keep item in collection, but do not lay it out
       * ignored items do not get skipped in layout
       * @param {Element} elem
       */
      proto.ignore = function (elem) {
        var item = this.getItem(elem);
        if (item) {
          item.isIgnored = true;
        }
      };

      /**
       * return item to layout collection
       * @param {Element} elem
       */
      proto.unignore = function (elem) {
        var item = this.getItem(elem);
        if (item) {
          delete item.isIgnored;
        }
      };

      /**
       * adds elements to stamps
       * @param {NodeList, Array, Element, or String} elems
       */
      proto.stamp = function (elems) {
        elems = this._find(elems);
        if (!elems) {
          return;
        }

        this.stamps = this.stamps.concat(elems);
        // ignore
        elems.forEach(this.ignore, this);
      };

      /**
       * removes elements to stamps
       * @param {NodeList, Array, or Element} elems
       */
      proto.unstamp = function (elems) {
        elems = this._find(elems);
        if (!elems) {
          return;
        }

        elems.forEach(function (elem) {
          // filter out removed stamp elements
          utils.removeFrom(this.stamps, elem);
          this.unignore(elem);
        }, this);
      };

      /**
       * finds child elements
       * @param {NodeList, Array, Element, or String} elems
       * @returns {Array} elems
       */
      proto._find = function (elems) {
        if (!elems) {
          return;
        }
        // if string, use argument as selector string
        if (typeof elems == "string") {
          elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
      };

      proto._manageStamps = function () {
        if (!this.stamps || !this.stamps.length) {
          return;
        }

        this._getBoundingRect();

        this.stamps.forEach(this._manageStamp, this);
      };

      // update boundingLeft / Top
      proto._getBoundingRect = function () {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
          left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
          top: boundingRect.top + size.paddingTop + size.borderTopWidth,
          right:
            boundingRect.right - (size.paddingRight + size.borderRightWidth),
          bottom:
            boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth),
        };
      };

      /**
       * @param {Element} stamp
       **/
      proto._manageStamp = noop;

      /**
       * get x/y position of element relative to container element
       * @param {Element} elem
       * @returns {Object} offset - has left, top, right, bottom
       */
      proto._getElementOffset = function (elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
          left: boundingRect.left - thisRect.left - size.marginLeft,
          top: boundingRect.top - thisRect.top - size.marginTop,
          right: thisRect.right - boundingRect.right - size.marginRight,
          bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom,
        };
        return offset;
      };

      // -------------------------- resize -------------------------- //

      // enable event handlers for listeners
      // i.e. resize -> onresize
      proto.handleEvent = utils.handleEvent;

      /**
       * Bind layout to window resizing
       */
      proto.bindResize = function () {
        window.addEventListener("resize", this);
        this.isResizeBound = true;
      };

      /**
       * Unbind layout to window resizing
       */
      proto.unbindResize = function () {
        window.removeEventListener("resize", this);
        this.isResizeBound = false;
      };

      proto.onresize = function () {
        this.resize();
      };

      utils.debounceMethod(Outlayer, "onresize", 100);

      proto.resize = function () {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if (!this.isResizeBound || !this.needsResizeLayout()) {
          return;
        }

        this.layout();
      };

      /**
       * check if layout is needed post layout
       * @returns Boolean
       */
      proto.needsResizeLayout = function () {
        var size = getSize(this.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
      };

      // -------------------------- methods -------------------------- //

      /**
       * add items to Outlayer instance
       * @param {Array or NodeList or Element} elems
       * @returns {Array} items - Outlayer.Items
       **/
      proto.addItems = function (elems) {
        var items = this._itemize(elems);
        // add items to collection
        if (items.length) {
          this.items = this.items.concat(items);
        }
        return items;
      };

      /**
       * Layout newly-appended item elements
       * @param {Array or NodeList or Element} elems
       */
      proto.appended = function (elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        // layout and reveal just the new items
        this.layoutItems(items, true);
        this.reveal(items);
      };

      /**
       * Layout prepended elements
       * @param {Array or NodeList or Element} elems
       */
      proto.prepended = function (elems) {
        var items = this._itemize(elems);
        if (!items.length) {
          return;
        }
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems(items, true);
        this.reveal(items);
        // layout previous items
        this.layoutItems(previousItems);
      };

      /**
       * reveal a collection of items
       * @param {Array of Outlayer.Items} items
       */
      proto.reveal = function (items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) {
          return;
        }
        var stagger = this.updateStagger();
        items.forEach(function (item, i) {
          item.stagger(i * stagger);
          item.reveal();
        });
      };

      /**
       * hide a collection of items
       * @param {Array of Outlayer.Items} items
       */
      proto.hide = function (items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) {
          return;
        }
        var stagger = this.updateStagger();
        items.forEach(function (item, i) {
          item.stagger(i * stagger);
          item.hide();
        });
      };

      /**
       * reveal item elements
       * @param {Array}, {Element}, {NodeList} items
       */
      proto.revealItemElements = function (elems) {
        var items = this.getItems(elems);
        this.reveal(items);
      };

      /**
       * hide item elements
       * @param {Array}, {Element}, {NodeList} items
       */
      proto.hideItemElements = function (elems) {
        var items = this.getItems(elems);
        this.hide(items);
      };

      /**
       * get Outlayer.Item, given an Element
       * @param {Element} elem
       * @param {Function} callback
       * @returns {Outlayer.Item} item
       */
      proto.getItem = function (elem) {
        // loop through items to get the one that matches
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (item.element == elem) {
            // return item
            return item;
          }
        }
      };

      /**
       * get collection of Outlayer.Items, given Elements
       * @param {Array} elems
       * @returns {Array} items - Outlayer.Items
       */
      proto.getItems = function (elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function (elem) {
          var item = this.getItem(elem);
          if (item) {
            items.push(item);
          }
        }, this);

        return items;
      };

      /**
       * remove element(s) from instance and DOM
       * @param {Array or NodeList or Element} elems
       */
      proto.remove = function (elems) {
        var removeItems = this.getItems(elems);

        this._emitCompleteOnItems("remove", removeItems);

        // bail if no items to remove
        if (!removeItems || !removeItems.length) {
          return;
        }

        removeItems.forEach(function (item) {
          item.remove();
          // remove item from collection
          utils.removeFrom(this.items, item);
        }, this);
      };

      // ----- destroy ----- //

      // remove and disable Outlayer instance
      proto.destroy = function () {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        // destroy items
        this.items.forEach(function (item) {
          item.destroy();
        });

        this.unbindResize();

        var id = this.element.outlayerGUID;
        delete instances[id]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if (jQuery) {
          jQuery.removeData(this.element, this.constructor.namespace);
        }
      };

      // -------------------------- data -------------------------- //

      /**
       * get Outlayer instance from element
       * @param {Element} elem
       * @returns {Outlayer}
       */
      Outlayer.data = function (elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
      };

      // -------------------------- create Outlayer class -------------------------- //

      /**
       * create a layout class
       * @param {String} namespace
       */
      Outlayer.create = function (namespace, options) {
        // sub-class Outlayer
        var Layout = subclass(Outlayer);
        // apply new options and compatOptions
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

        Layout.namespace = namespace;

        Layout.data = Outlayer.data;

        // sub-class Item
        Layout.Item = subclass(Item);

        // -------------------------- declarative -------------------------- //

        utils.htmlInit(Layout, namespace);

        // -------------------------- jQuery bridge -------------------------- //

        // make into jQuery plugin
        if (jQuery && jQuery.bridget) {
          jQuery.bridget(namespace, Layout);
        }

        return Layout;
      };

      function subclass(Parent) {
        function SubClass() {
          Parent.apply(this, arguments);
        }

        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;

        return SubClass;
      }

      // ----- helpers ----- //

      // how many milliseconds are in each unit
      var msUnits = {
        ms: 1,
        s: 1000,
      };

      // munge time-like parameter into millisecond number
      // '0.4s' -> 40
      function getMilliseconds(time) {
        if (typeof time == "number") {
          return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
          return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
      }

      // ----- fin ----- //

      // back in global
      Outlayer.Item = Item;

      return Outlayer;
    });

    /**
     * Isotope Item
     **/

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("isotope-layout/js/item", ["outlayer/outlayer"], factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(require("outlayer"));
      } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
      }
    })(window, function factory(Outlayer) {
      "use strict";

      // -------------------------- Item -------------------------- //

      // sub-class Outlayer Item
      function Item() {
        Outlayer.Item.apply(this, arguments);
      }

      var proto = (Item.prototype = Object.create(Outlayer.Item.prototype));

      var _create = proto._create;
      proto._create = function () {
        // assign id, used for original-order sorting
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
      };

      proto.updateSortData = function () {
        if (this.isIgnored) {
          return;
        }
        // default sorters
        this.sortData.id = this.id;
        // for backward compatibility
        this.sortData["original-order"] = this.id;
        this.sortData.random = Math.random();
        // go thru getSortData obj and apply the sorters
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
          var sorter = sorters[key];
          this.sortData[key] = sorter(this.element, this);
        }
      };

      var _destroy = proto.destroy;
      proto.destroy = function () {
        // call super
        _destroy.apply(this, arguments);
        // reset display, #741
        this.css({
          display: "",
        });
      };

      return Item;
    });

    /**
     * Isotope LayoutMode
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("isotope-layout/js/layout-mode", [
          "get-size/get-size",
          "outlayer/outlayer",
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(require("get-size"), require("outlayer"));
      } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
      }
    })(window, function factory(getSize, Outlayer) {
      "use strict";

      // layout mode class
      function LayoutMode(isotope) {
        this.isotope = isotope;
        // link properties
        if (isotope) {
          this.options = isotope.options[this.namespace];
          this.element = isotope.element;
          this.items = isotope.filteredItems;
          this.size = isotope.size;
        }
      }

      var proto = LayoutMode.prototype;

      /**
       * some methods should just defer to default Outlayer method
       * and reference the Isotope instance as `this`
       **/
      var facadeMethods = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];

      facadeMethods.forEach(function (methodName) {
        proto[methodName] = function () {
          return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
      });

      // -----  ----- //

      // for horizontal layout modes, check vertical size
      proto.needsVerticalResizeLayout = function () {
        // don't trigger if size did not change
        var size = getSize(this.isotope.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
      };

      // ----- measurements ----- //

      proto._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      };

      proto.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      };

      proto.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      };

      /**
       * get columnWidth or rowHeight
       * segment: 'column' or 'row'
       * size 'Width' or 'Height'
       **/
      proto.getSegmentSize = function (segment, size) {
        var segmentName = segment + size;
        var outerSize = "outer" + size;
        // columnWidth / outerWidth // rowHeight / outerHeight
        this._getMeasurement(segmentName, outerSize);
        // got rowHeight or columnWidth, we can chill
        if (this[segmentName]) {
          return;
        }
        // fall back to item of first element
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] =
          (firstItemSize && firstItemSize[outerSize]) ||
          // or size of container
          this.isotope.size["inner" + size];
      };

      proto.getFirstItemSize = function () {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
      };

      // ----- methods that should reference isotope ----- //

      proto.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      };

      proto.getSize = function () {
        this.isotope.getSize();
        this.size = this.isotope.size;
      };

      // -------------------------- create -------------------------- //

      LayoutMode.modes = {};

      LayoutMode.create = function (namespace, options) {
        function Mode() {
          LayoutMode.apply(this, arguments);
        }

        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;

        // default options
        if (options) {
          Mode.options = options;
        }

        Mode.prototype.namespace = namespace;
        // register in Isotope
        LayoutMode.modes[namespace] = Mode;

        return Mode;
      };

      return LayoutMode;
    });

    /*!
     * Masonry v4.2.1
     * Cascading grid layout library
     * https://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("masonry-layout/masonry", [
          "outlayer/outlayer",
          "get-size/get-size",
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(require("outlayer"), require("get-size"));
      } else {
        // browser global
        window.Masonry = factory(window.Outlayer, window.getSize);
      }
    })(window, function factory(Outlayer, getSize) {
      // -------------------------- masonryDefinition -------------------------- //

      // create an Outlayer layout class
      var Masonry = Outlayer.create("masonry");
      // isFitWidth -> fitWidth
      Masonry.compatOptions.fitWidth = "isFitWidth";

      var proto = Masonry.prototype;

      proto._resetLayout = function () {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();

        // reset column Y
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
          this.colYs.push(0);
        }

        this.maxY = 0;
        this.horizontalColIndex = 0;
      };

      proto.measureColumns = function () {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if (!this.columnWidth) {
          var firstItem = this.items[0];
          var firstItemElem = firstItem && firstItem.element;
          // columnWidth fall back to item of first element
          this.columnWidth =
            (firstItemElem && getSize(firstItemElem).outerWidth) ||
            // if first elem has no width, default to size of container
            this.containerWidth;
        }

        var columnWidth = (this.columnWidth += this.gutter);

        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - (containerWidth % columnWidth);
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? "round" : "floor";
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
      };

      proto.getContainerWidth = function () {
        // container is parent if fit width
        var isFitWidth = this._getOption("fitWidth");
        var container = isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
      };

      proto._getItemLayoutPosition = function (item) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        // use horizontal or top column position
        var colPosMethod = this.options.horizontalOrder
          ? "_getHorizontalColPosition"
          : "_getTopColPosition";
        var colPosition = this[colPosMethod](colSpan, item);
        // position the brick
        var position = {
          x: this.columnWidth * colPosition.col,
          y: colPosition.y,
        };
        // apply setHeight to necessary columns
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
          this.colYs[i] = setHeight;
        }

        return position;
      };

      proto._getTopColPosition = function (colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply(Math, colGroup);

        return {
          col: colGroup.indexOf(minimumY),
          y: minimumY,
        };
      };

      /**
       * @param {Number} colSpan - number of columns the element spans
       * @returns {Array} colGroup
       */
      proto._getTopColGroup = function (colSpan) {
        if (colSpan < 2) {
          // if brick spans only one column, use all the column Ys
          return this.colYs;
        }

        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for (var i = 0; i < groupCount; i++) {
          colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
      };

      proto._getColGroupY = function (col, colSpan) {
        if (colSpan < 2) {
          return this.colYs[col];
        }
        // make an array of colY values for that one group
        var groupColYs = this.colYs.slice(col, col + colSpan);
        // and get the max value of the array
        return Math.max.apply(Math, groupColYs);
      };

      // get column position based on horizontal index. #873
      proto._getHorizontalColPosition = function (colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        // shift to next row if item can't fit on current row
        col = isOver ? 0 : col;
        // don't let zero-size items take up space
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize
          ? col + colSpan
          : this.horizontalColIndex;

        return {
          col: col,
          y: this._getColGroupY(col, colSpan),
        };
      };

      proto._manageStamp = function (stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        // get the columns that this stamp affects
        var isOriginLeft = this._getOption("originLeft");
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        // set colYs to bottom of the stamp

        var isOriginTop = this._getOption("originTop");
        var stampMaxY =
          (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
          this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
      };

      proto._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
          height: this.maxY,
        };

        if (this._getOption("fitWidth")) {
          size.width = this._getContainerFitWidth();
        }

        return size;
      };

      proto._getContainerFitWidth = function () {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while (--i) {
          if (this.colYs[i] !== 0) {
            break;
          }
          unusedCols++;
        }
        // fit container to columns that have been used
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
      };

      proto.needsResizeLayout = function () {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
      };

      return Masonry;
    });

    /*!
     * Masonry layout mode
     * sub-classes Masonry
     * https://masonry.desandro.com
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("isotope-layout/js/layout-modes/masonry", [
          "../layout-mode",
          "masonry-layout/masonry",
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(
          require("../layout-mode"),
          require("masonry-layout")
        );
      } else {
        // browser global
        factory(window.Isotope.LayoutMode, window.Masonry);
      }
    })(window, function factory(LayoutMode, Masonry) {
      "use strict";

      // -------------------------- masonryDefinition -------------------------- //

      // create an Outlayer layout class
      var MasonryMode = LayoutMode.create("masonry");

      var proto = MasonryMode.prototype;

      var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true,
      };

      // inherit Masonry prototype
      for (var method in Masonry.prototype) {
        // do not inherit mode methods
        if (!keepModeMethods[method]) {
          proto[method] = Masonry.prototype[method];
        }
      }

      var measureColumns = proto.measureColumns;
      proto.measureColumns = function () {
        // set items, used if measuring first item
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
      };

      // point to mode options for fitWidth
      var _getOption = proto._getOption;
      proto._getOption = function (option) {
        if (option == "fitWidth") {
          return this.options.isFitWidth !== undefined
            ? this.options.isFitWidth
            : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
      };

      return MasonryMode;
    });

    /**
     * fitRows layout mode
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("isotope-layout/js/layout-modes/fit-rows", [
          "../layout-mode",
        ], factory);
      } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(require("../layout-mode"));
      } else {
        // browser global
        factory(window.Isotope.LayoutMode);
      }
    })(window, function factory(LayoutMode) {
      "use strict";

      var FitRows = LayoutMode.create("fitRows");

      var proto = FitRows.prototype;

      proto._resetLayout = function () {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth");
      };

      proto._getItemLayoutPosition = function (item) {
        item.getSize();

        var itemWidth = item.size.outerWidth + this.gutter;
        // if this element cannot fit in the current row
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
          this.x = 0;
          this.y = this.maxY;
        }

        var position = {
          x: this.x,
          y: this.y,
        };

        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;

        return position;
      };

      proto._getContainerSize = function () {
        return { height: this.maxY };
      };

      return FitRows;
    });

    /**
     * vertical layout mode
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define("isotope-layout/js/layout-modes/vertical", [
          "../layout-mode",
        ], factory);
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(require("../layout-mode"));
      } else {
        // browser global
        factory(window.Isotope.LayoutMode);
      }
    })(window, function factory(LayoutMode) {
      "use strict";

      var Vertical = LayoutMode.create("vertical", {
        horizontalAlignment: 0,
      });

      var proto = Vertical.prototype;

      proto._resetLayout = function () {
        this.y = 0;
      };

      proto._getItemLayoutPosition = function (item) {
        item.getSize();
        var x =
          (this.isotope.size.innerWidth - item.size.outerWidth) *
          this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return { x: x, y: y };
      };

      proto._getContainerSize = function () {
        return { height: this.y };
      };

      return Vertical;
    });

    /*!
     * Isotope v3.0.6
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * https://isotope.metafizzy.co
     * Copyright 2010-2018 Metafizzy
     */

    (function (window, factory) {
      // universal module definition
      /* jshint strict: false */ /*globals define, module, require */ if (
        typeof define == "function" &&
        define.amd
      ) {
        // AMD
        define([
          "outlayer/outlayer",
          "get-size/get-size",
          "desandro-matches-selector/matches-selector",
          "fizzy-ui-utils/utils",
          "isotope-layout/js/item",
          "isotope-layout/js/layout-mode",
          // include default layout modes
          "isotope-layout/js/layout-modes/masonry",
          "isotope-layout/js/layout-modes/fit-rows",
          "isotope-layout/js/layout-modes/vertical",
        ], function (
          Outlayer,
          getSize,
          matchesSelector,
          utils,
          Item,
          LayoutMode
        ) {
          return factory(
            window,
            Outlayer,
            getSize,
            matchesSelector,
            utils,
            Item,
            LayoutMode
          );
        });
      } else if (typeof module == "object" && module.exports) {
        // CommonJS
        module.exports = factory(
          window,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          // include default layout modes
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        );
      } else {
        // browser global
        window.Isotope = factory(
          window,
          window.Outlayer,
          window.getSize,
          window.matchesSelector,
          window.fizzyUIUtils,
          window.Isotope.Item,
          window.Isotope.LayoutMode
        );
      }
    })(
      window,
      function factory(
        window,
        Outlayer,
        getSize,
        matchesSelector,
        utils,
        Item,
        LayoutMode
      ) {
        // -------------------------- vars -------------------------- //

        var jQuery = window.jQuery;

        // -------------------------- helpers -------------------------- //

        var trim = String.prototype.trim
          ? function (str) {
              return str.trim();
            }
          : function (str) {
              return str.replace(/^\s+|\s+$/g, "");
            };

        // -------------------------- isotopeDefinition -------------------------- //

        // create an Outlayer layout class
        var Isotope = Outlayer.create("isotope", {
          layoutMode: "masonry",
          isJQueryFiltering: true,
          sortAscending: true,
        });

        Isotope.Item = Item;
        Isotope.LayoutMode = LayoutMode;

        var proto = Isotope.prototype;

        proto._create = function () {
          this.itemGUID = 0;
          // functions that sort items
          this._sorters = {};
          this._getSorters();
          // call super
          Outlayer.prototype._create.call(this);

          // create layout modes
          this.modes = {};
          // start filteredItems with all items
          this.filteredItems = this.items;
          // keep of track of sortBys
          this.sortHistory = ["original-order"];
          // create from registered layout modes
          for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
          }
        };

        proto.reloadItems = function () {
          // reset item ID counter
          this.itemGUID = 0;
          // call super
          Outlayer.prototype.reloadItems.call(this);
        };

        proto._itemize = function () {
          var items = Outlayer.prototype._itemize.apply(this, arguments);
          // assign ID for original-order
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
          }
          this._updateItemsSortData(items);
          return items;
        };

        // -------------------------- layout -------------------------- //

        proto._initLayoutMode = function (name) {
          var Mode = LayoutMode.modes[name];
          // set mode options
          // HACK extend initial options, back-fill in default options
          var initialOpts = this.options[name] || {};
          this.options[name] = Mode.options
            ? utils.extend(Mode.options, initialOpts)
            : initialOpts;
          // init layout mode instance
          this.modes[name] = new Mode(this);
        };

        proto.layout = function () {
          // if first time doing layout, do all magic
          if (!this._isLayoutInited && this._getOption("initLayout")) {
            this.arrange();
            return;
          }
          this._layout();
        };

        // private method to be used in layout() & magic()
        proto._layout = function () {
          // don't animate first layout
          var isInstant = this._getIsInstant();
          // layout flow
          this._resetLayout();
          this._manageStamps();
          this.layoutItems(this.filteredItems, isInstant);

          // flag for initalized
          this._isLayoutInited = true;
        };

        // filter + sort + layout
        proto.arrange = function (opts) {
          // set any options pass
          this.option(opts);
          this._getIsInstant();
          // filter, sort, and layout

          // filter
          var filtered = this._filter(this.items);
          this.filteredItems = filtered.matches;

          this._bindArrangeComplete();

          if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
          } else {
            this._hideReveal(filtered);
          }

          this._sort();
          this._layout();
        };
        // alias to _init for main plugin method
        proto._init = proto.arrange;

        proto._hideReveal = function (filtered) {
          this.reveal(filtered.needReveal);
          this.hide(filtered.needHide);
        };

        // HACK
        // Don't animate/transition first layout
        // Or don't animate/transition other layouts
        proto._getIsInstant = function () {
          var isLayoutInstant = this._getOption("layoutInstant");
          var isInstant =
            isLayoutInstant !== undefined
              ? isLayoutInstant
              : !this._isLayoutInited;
          this._isInstant = isInstant;
          return isInstant;
        };

        // listen for layoutComplete, hideComplete and revealComplete
        // to trigger arrangeComplete
        proto._bindArrangeComplete = function () {
          // listen for 3 events to trigger arrangeComplete
          var isLayoutComplete, isHideComplete, isRevealComplete;
          var _this = this;
          function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
              _this.dispatchEvent("arrangeComplete", null, [
                _this.filteredItems,
              ]);
            }
          }
          this.once("layoutComplete", function () {
            isLayoutComplete = true;
            arrangeParallelCallback();
          });
          this.once("hideComplete", function () {
            isHideComplete = true;
            arrangeParallelCallback();
          });
          this.once("revealComplete", function () {
            isRevealComplete = true;
            arrangeParallelCallback();
          });
        };

        // -------------------------- filter -------------------------- //

        proto._filter = function (items) {
          var filter = this.options.filter;
          filter = filter || "*";
          var matches = [];
          var hiddenMatched = [];
          var visibleUnmatched = [];

          var test = this._getFilterTest(filter);

          // test each item
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
              continue;
            }
            // add item to either matched or unmatched group
            var isMatched = test(item);
            // item.isFilterMatched = isMatched;
            // add to matches if its a match
            if (isMatched) {
              matches.push(item);
            }
            // add to additional group if item needs to be hidden or revealed
            if (isMatched && item.isHidden) {
              hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
              visibleUnmatched.push(item);
            }
          }

          // return collections of items to be manipulated
          return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched,
          };
        };

        // get a jQuery, function, or a matchesSelector test given the filter
        proto._getFilterTest = function (filter) {
          if (jQuery && this.options.isJQueryFiltering) {
            // use jQuery
            return function (item) {
              return jQuery(item.element).is(filter);
            };
          }
          if (typeof filter == "function") {
            // use filter as function
            return function (item) {
              return filter(item.element);
            };
          }
          // default, use filter as selector string
          return function (item) {
            return matchesSelector(item.element, filter);
          };
        };

        // -------------------------- sorting -------------------------- //

        /**
         * @params {Array} elems
         * @public
         */
        proto.updateSortData = function (elems) {
          // get items
          var items;
          if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
          } else {
            // update all items if no elems provided
            items = this.items;
          }

          this._getSorters();
          this._updateItemsSortData(items);
        };

        proto._getSorters = function () {
          var getSortData = this.options.getSortData;
          for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
          }
        };

        /**
         * @params {Array} items - of Isotope.Items
         * @private
         */
        proto._updateItemsSortData = function (items) {
          // do not update if no items
          var len = items && items.length;

          for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
          }
        };

        // ----- munge sorter ----- //

        // encapsulate this, as we just need mungeSorter
        // other functions in here are just for munging
        var mungeSorter = (function () {
          // add a magic layer to sorters for convienent shorthands
          // `.foo-bar` will use the text of .foo-bar querySelector
          // `[foo-bar]` will use attribute
          // you can also add parser
          // `.foo-bar parseInt` will parse that as a number
          function mungeSorter(sorter) {
            // if not a string, return function or whatever it is
            if (typeof sorter != "string") {
              return sorter;
            }
            // parse the sorter string
            var args = trim(sorter).split(" ");
            var query = args[0];
            // check if query looks like [an-attribute]
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            // use second argument as a parser
            var parser = Isotope.sortDataParsers[args[1]];
            // parse the value, if there was a parser
            sorter = parser
              ? function (elem) {
                  return elem && parser(getValue(elem));
                }
              : // otherwise just return value
                function (elem) {
                  return elem && getValue(elem);
                };

            return sorter;
          }

          // get an attribute getter, or get text of the querySelector
          function getValueGetter(attr, query) {
            // if query looks like [foo-bar], get attribute
            if (attr) {
              return function getAttribute(elem) {
                return elem.getAttribute(attr);
              };
            }

            // otherwise, assume its a querySelector, and get its text
            return function getChildText(elem) {
              var child = elem.querySelector(query);
              return child && child.textContent;
            };
          }

          return mungeSorter;
        })();

        // parsers used in getSortData shortcut strings
        Isotope.sortDataParsers = {
          parseInt: function (val) {
            return parseInt(val, 10);
          },
          parseFloat: function (val) {
            return parseFloat(val);
          },
        };

        // ----- sort method ----- //

        // sort filteredItem order
        proto._sort = function () {
          if (!this.options.sortBy) {
            return;
          }
          // keep track of sortBy History
          var sortBys = utils.makeArray(this.options.sortBy);
          if (!this._getIsSameSortBy(sortBys)) {
            // concat all sortBy and sortHistory, add to front, oldest goes in last
            this.sortHistory = sortBys.concat(this.sortHistory);
          }
          // sort magic
          var itemSorter = getItemSorter(
            this.sortHistory,
            this.options.sortAscending
          );
          this.filteredItems.sort(itemSorter);
        };

        // check if sortBys is same as start of sortHistory
        proto._getIsSameSortBy = function (sortBys) {
          for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
              return false;
            }
          }
          return true;
        };

        // returns a function used for sorting
        function getItemSorter(sortBys, sortAsc) {
          return function sorter(itemA, itemB) {
            // cycle through all sortKeys
            for (var i = 0; i < sortBys.length; i++) {
              var sortBy = sortBys[i];
              var a = itemA.sortData[sortBy];
              var b = itemB.sortData[sortBy];
              if (a > b || a < b) {
                // if sortAsc is an object, use the value given the sortBy key
                var isAscending =
                  sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                var direction = isAscending ? 1 : -1;
                return (a > b ? 1 : -1) * direction;
              }
            }
            return 0;
          };
        }

        // -------------------------- methods -------------------------- //

        // get layout mode
        proto._mode = function () {
          var layoutMode = this.options.layoutMode;
          var mode = this.modes[layoutMode];
          if (!mode) {
            // TODO console.error
            throw new Error("No layout mode: " + layoutMode);
          }
          // HACK sync mode's options
          // any options set after init for layout mode need to be synced
          mode.options = this.options[layoutMode];
          return mode;
        };

        proto._resetLayout = function () {
          // trigger original reset layout
          Outlayer.prototype._resetLayout.call(this);
          this._mode()._resetLayout();
        };

        proto._getItemLayoutPosition = function (item) {
          return this._mode()._getItemLayoutPosition(item);
        };

        proto._manageStamp = function (stamp) {
          this._mode()._manageStamp(stamp);
        };

        proto._getContainerSize = function () {
          return this._mode()._getContainerSize();
        };

        proto.needsResizeLayout = function () {
          return this._mode().needsResizeLayout();
        };

        // -------------------------- adding & removing -------------------------- //

        // HEADS UP overwrites default Outlayer appended
        proto.appended = function (elems) {
          var items = this.addItems(elems);
          if (!items.length) {
            return;
          }
          // filter, layout, reveal new items
          var filteredItems = this._filterRevealAdded(items);
          // add to filteredItems
          this.filteredItems = this.filteredItems.concat(filteredItems);
        };

        // HEADS UP overwrites default Outlayer prepended
        proto.prepended = function (elems) {
          var items = this._itemize(elems);
          if (!items.length) {
            return;
          }
          // start new layout
          this._resetLayout();
          this._manageStamps();
          // filter, layout, reveal new items
          var filteredItems = this._filterRevealAdded(items);
          // layout previous items
          this.layoutItems(this.filteredItems);
          // add to items and filteredItems
          this.filteredItems = filteredItems.concat(this.filteredItems);
          this.items = items.concat(this.items);
        };

        proto._filterRevealAdded = function (items) {
          var filtered = this._filter(items);
          this.hide(filtered.needHide);
          // reveal all new items
          this.reveal(filtered.matches);
          // layout new items, no transition
          this.layoutItems(filtered.matches, true);
          return filtered.matches;
        };

        /**
         * Filter, sort, and layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        proto.insert = function (elems) {
          var items = this.addItems(elems);
          if (!items.length) {
            return;
          }
          // append item elements
          var i, item;
          var len = items.length;
          for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
          }
          // filter new stuff
          var filteredInsertItems = this._filter(items).matches;
          // set flag
          for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
          }
          this.arrange();
          // reset flag
          for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
          }
          this.reveal(filteredInsertItems);
        };

        var _remove = proto.remove;
        proto.remove = function (elems) {
          elems = utils.makeArray(elems);
          var removeItems = this.getItems(elems);
          // do regular thing
          _remove.call(this, elems);
          // bail if no items to remove
          var len = removeItems && removeItems.length;
          // remove elems from filteredItems
          for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            // remove item from collection
            utils.removeFrom(this.filteredItems, item);
          }
        };

        proto.shuffle = function () {
          // update random sortData
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
          }
          this.options.sortBy = "random";
          this._sort();
          this._layout();
        };

        /**
         * trigger fn without transition
         * kind of hacky to have this in the first place
         * @param {Function} fn
         * @param {Array} args
         * @returns ret
         * @private
         */
        proto._noTransition = function (fn, args) {
          // save transitionDuration before disabling
          var transitionDuration = this.options.transitionDuration;
          // disable transition
          this.options.transitionDuration = 0;
          // do it
          var returnValue = fn.apply(this, args);
          // re-enable transition for reveal
          this.options.transitionDuration = transitionDuration;
          return returnValue;
        };

        // ----- helper methods ----- //

        /**
         * getter method for getting filtered item elements
         * @returns {Array} elems - collection of item elements
         */
        proto.getFilteredItemElements = function () {
          return this.filteredItems.map(function (item) {
            return item.element;
          });
        };

        // -----  ----- //

        return Isotope;
      }
    );

    /*!
     * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
     * Dual-licensed under the BSD or MIT licenses
     */
    (function ($, window, document, undefined) {
      var hasTouch = "ontouchstart" in document;

      /**
       * Detect CSS pointer-events property
       * events are normally disabled on the dragging element to avoid conflicts
       * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
       */
      var hasPointerEvents = (function () {
        var el = document.createElement("div"),
          docEl = document.documentElement;
        if (!("pointerEvents" in el.style)) {
          return false;
        }
        el.style.pointerEvents = "auto";
        el.style.pointerEvents = "x";
        docEl.appendChild(el);
        var supports =
          window.getComputedStyle &&
          window.getComputedStyle(el, "").pointerEvents === "auto";
        docEl.removeChild(el);
        return !!supports;
      })();

      var defaults = {
        listNodeName: "ol",
        itemNodeName: "li",
        rootClass: "dd",
        listClass: "dd-list",
        itemClass: "dd-item",
        dragClass: "dd-dragel",
        handleClass: "dd-handle",
        collapsedClass: "dd-collapsed",
        placeClass: "dd-placeholder",
        noDragClass: "dd-nodrag",
        emptyClass: "dd-empty",
        expandBtnHTML:
          '<button data-action="expand" type="button">Expand</button>',
        collapseBtnHTML:
          '<button data-action="collapse" type="button">Collapse</button>',
        group: 0,
        maxDepth: 5,
        threshold: 20,
      };

      function Plugin(element, options) {
        this.w = $(document);
        this.el = $(element);
        this.options = $.extend({}, defaults, options);
        this.init();
      }

      Plugin.prototype = {
        init: function () {
          var list = this;

          list.reset();

          list.el.data("nestable-group", this.options.group);

          list.placeEl = $('<div class="' + list.options.placeClass + '"/>');

          $.each(this.el.find(list.options.itemNodeName), function (k, el) {
            list.setParent($(el));
          });

          list.el.on("click", "button", function (e) {
            if (list.dragEl) {
              return;
            }
            var target = $(e.currentTarget),
              action = target.data("action"),
              item = target.parent(list.options.itemNodeName);
            if (action === "collapse") {
              list.collapseItem(item);
            }
            if (action === "expand") {
              list.expandItem(item);
            }
          });

          var onStartEvent = function (e) {
            var handle = $(e.target);
            if (!handle.hasClass(list.options.handleClass)) {
              if (handle.closest("." + list.options.noDragClass).length) {
                return;
              }
              handle = handle.closest("." + list.options.handleClass);
            }

            if (!handle.length || list.dragEl) {
              return;
            }

            list.isTouch = /^touch/.test(e.type);
            if (list.isTouch && e.touches.length !== 1) {
              return;
            }

            e.preventDefault();
            list.dragStart(e.touches ? e.touches[0] : e);
          };

          var onMoveEvent = function (e) {
            if (list.dragEl) {
              e.preventDefault();
              list.dragMove(e.touches ? e.touches[0] : e);
            }
          };

          var onEndEvent = function (e) {
            if (list.dragEl) {
              e.preventDefault();
              list.dragStop(e.touches ? e.touches[0] : e);
            }
          };

          if (hasTouch) {
            list.el[0].addEventListener("touchstart", onStartEvent, false);
            window.addEventListener("touchmove", onMoveEvent, false);
            window.addEventListener("touchend", onEndEvent, false);
            window.addEventListener("touchcancel", onEndEvent, false);
          }

          list.el.on("mousedown", onStartEvent);
          list.w.on("mousemove", onMoveEvent);
          list.w.on("mouseup", onEndEvent);
        },

        serialize: function () {
          var data,
            depth = 0,
            list = this;
          step = function (level, depth) {
            var array = [],
              items = level.children(list.options.itemNodeName);
            items.each(function () {
              var li = $(this),
                item = $.extend({}, li.data()),
                sub = li.children(list.options.listNodeName);
              if (sub.length) {
                item.children = step(sub, depth + 1);
              }
              array.push(item);
            });
            return array;
          };
          data = step(list.el.find(list.options.listNodeName).first(), depth);
          return data;
        },

        serialise: function () {
          return this.serialize();
        },

        reset: function () {
          this.mouse = {
            offsetX: 0,
            offsetY: 0,
            startX: 0,
            startY: 0,
            lastX: 0,
            lastY: 0,
            nowX: 0,
            nowY: 0,
            distX: 0,
            distY: 0,
            dirAx: 0,
            dirX: 0,
            dirY: 0,
            lastDirX: 0,
            lastDirY: 0,
            distAxX: 0,
            distAxY: 0,
          };
          this.isTouch = false;
          this.moving = false;
          this.dragEl = null;
          this.dragRootEl = null;
          this.dragDepth = 0;
          this.hasNewRoot = false;
          this.pointEl = null;
        },

        expandItem: function (li) {
          li.removeClass(this.options.collapsedClass);
          li.children('[data-action="expand"]').hide();
          li.children('[data-action="collapse"]').show();
          li.children(this.options.listNodeName).show();
        },

        collapseItem: function (li) {
          var lists = li.children(this.options.listNodeName);
          if (lists.length) {
            li.addClass(this.options.collapsedClass);
            li.children('[data-action="collapse"]').hide();
            li.children('[data-action="expand"]').show();
            li.children(this.options.listNodeName).hide();
          }
        },

        expandAll: function () {
          var list = this;
          list.el.find(list.options.itemNodeName).each(function () {
            list.expandItem($(this));
          });
        },

        collapseAll: function () {
          var list = this;
          list.el.find(list.options.itemNodeName).each(function () {
            list.collapseItem($(this));
          });
        },

        setParent: function (li) {
          if (li.children(this.options.listNodeName).length) {
            li.prepend($(this.options.expandBtnHTML));
            li.prepend($(this.options.collapseBtnHTML));
          }
          li.children('[data-action="expand"]').hide();
        },

        unsetParent: function (li) {
          li.removeClass(this.options.collapsedClass);
          li.children("[data-action]").remove();
          li.children(this.options.listNodeName).remove();
        },

        dragStart: function (e) {
          var mouse = this.mouse,
            target = $(e.target),
            dragItem = target.closest(this.options.itemNodeName);

          this.placeEl.css("height", dragItem.height());

          mouse.offsetX =
            e.offsetX !== undefined
              ? e.offsetX
              : e.pageX - target.offset().left;
          mouse.offsetY =
            e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;
          mouse.startX = mouse.lastX = e.pageX;
          mouse.startY = mouse.lastY = e.pageY;

          this.dragRootEl = this.el;

          this.dragEl = $(
            document.createElement(this.options.listNodeName)
          ).addClass(this.options.listClass + " " + this.options.dragClass);
          this.dragEl.css("width", dragItem.width());

          dragItem.after(this.placeEl);
          dragItem[0].parentNode.removeChild(dragItem[0]);
          dragItem.appendTo(this.dragEl);

          $(document.body).append(this.dragEl);
          this.dragEl.css({
            left: e.pageX - mouse.offsetX,
            top: e.pageY - mouse.offsetY,
          });
          // total depth of dragging item
          var i,
            depth,
            items = this.dragEl.find(this.options.itemNodeName);
          for (i = 0; i < items.length; i++) {
            depth = $(items[i]).parents(this.options.listNodeName).length;
            if (depth > this.dragDepth) {
              this.dragDepth = depth;
            }
          }
        },

        dragStop: function (e) {
          var el = this.dragEl.children(this.options.itemNodeName).first();
          el[0].parentNode.removeChild(el[0]);
          this.placeEl.replaceWith(el);

          this.dragEl.remove();
          this.el.trigger("change");
          if (this.hasNewRoot) {
            this.dragRootEl.trigger("change");
          }
          this.reset();
        },

        dragMove: function (e) {
          var list,
            parent,
            prev,
            next,
            depth,
            opt = this.options,
            mouse = this.mouse;

          this.dragEl.css({
            left: e.pageX - mouse.offsetX,
            top: e.pageY - mouse.offsetY,
          });

          // mouse position last events
          mouse.lastX = mouse.nowX;
          mouse.lastY = mouse.nowY;
          // mouse position this events
          mouse.nowX = e.pageX;
          mouse.nowY = e.pageY;
          // distance mouse moved between events
          mouse.distX = mouse.nowX - mouse.lastX;
          mouse.distY = mouse.nowY - mouse.lastY;
          // direction mouse was moving
          mouse.lastDirX = mouse.dirX;
          mouse.lastDirY = mouse.dirY;
          // direction mouse is now moving (on both axis)
          mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;
          mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;
          // axis mouse is now moving on
          var newAx = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;

          // do nothing on first move
          if (!mouse.moving) {
            mouse.dirAx = newAx;
            mouse.moving = true;
            return;
          }

          // calc distance moved on this axis (and direction)
          if (mouse.dirAx !== newAx) {
            mouse.distAxX = 0;
            mouse.distAxY = 0;
          } else {
            mouse.distAxX += Math.abs(mouse.distX);
            if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {
              mouse.distAxX = 0;
            }
            mouse.distAxY += Math.abs(mouse.distY);
            if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {
              mouse.distAxY = 0;
            }
          }
          mouse.dirAx = newAx;

          /**
           * move horizontal
           */
          if (mouse.dirAx && mouse.distAxX >= opt.threshold) {
            // reset move distance on x-axis for new phase
            mouse.distAxX = 0;
            prev = this.placeEl.prev(opt.itemNodeName);
            // increase horizontal level if previous sibling exists and is not collapsed
            if (
              mouse.distX > 0 &&
              prev.length &&
              !prev.hasClass(opt.collapsedClass)
            ) {
              // cannot increase level when item above is collapsed
              list = prev.find(opt.listNodeName).last();
              // check if depth limit has reached
              depth = this.placeEl.parents(opt.listNodeName).length;
              if (depth + this.dragDepth <= opt.maxDepth) {
                // create new sub-level if one doesn't exist
                if (!list.length) {
                  list = $("<" + opt.listNodeName + "/>").addClass(
                    opt.listClass
                  );
                  list.append(this.placeEl);
                  prev.append(list);
                  this.setParent(prev);
                } else {
                  // else append to next level up
                  list = prev.children(opt.listNodeName).last();
                  list.append(this.placeEl);
                }
              }
            }
            // decrease horizontal level
            if (mouse.distX < 0) {
              // we can't decrease a level if an item preceeds the current one
              next = this.placeEl.next(opt.itemNodeName);
              if (!next.length) {
                parent = this.placeEl.parent();
                this.placeEl.closest(opt.itemNodeName).after(this.placeEl);
                if (!parent.children().length) {
                  this.unsetParent(parent.parent());
                }
              }
            }
          }

          var isEmpty = false;

          // find list item under cursor
          if (!hasPointerEvents) {
            this.dragEl[0].style.visibility = "hidden";
          }
          this.pointEl = $(
            document.elementFromPoint(
              e.pageX - document.body.scrollLeft,
              e.pageY -
                (window.pageYOffset || document.documentElement.scrollTop)
            )
          );
          if (!hasPointerEvents) {
            this.dragEl[0].style.visibility = "visible";
          }
          if (this.pointEl.hasClass(opt.handleClass)) {
            this.pointEl = this.pointEl.parent(opt.itemNodeName);
          }
          if (this.pointEl.hasClass(opt.emptyClass)) {
            isEmpty = true;
          } else if (
            !this.pointEl.length ||
            !this.pointEl.hasClass(opt.itemClass)
          ) {
            return;
          }

          // find parent list of item under cursor
          var pointElRoot = this.pointEl.closest("." + opt.rootClass),
            isNewRoot =
              this.dragRootEl.data("nestable-id") !==
              pointElRoot.data("nestable-id");

          /**
           * move vertical
           */
          if (!mouse.dirAx || isNewRoot || isEmpty) {
            // check if groups match if dragging over new root
            if (isNewRoot && opt.group !== pointElRoot.data("nestable-group")) {
              return;
            }
            // check depth limit
            depth =
              this.dragDepth -
              1 +
              this.pointEl.parents(opt.listNodeName).length;
            if (depth > opt.maxDepth) {
              return;
            }
            var before =
              e.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
            parent = this.placeEl.parent();
            // if empty create new list to replace empty placeholder
            if (isEmpty) {
              list = $(document.createElement(opt.listNodeName)).addClass(
                opt.listClass
              );
              list.append(this.placeEl);
              this.pointEl.replaceWith(list);
            } else if (before) {
              this.pointEl.before(this.placeEl);
            } else {
              this.pointEl.after(this.placeEl);
            }
            if (!parent.children().length) {
              this.unsetParent(parent.parent());
            }
            if (!this.dragRootEl.find(opt.itemNodeName).length) {
              this.dragRootEl.append('<div class="' + opt.emptyClass + '"/>');
            }
            // parent root list has changed
            if (isNewRoot) {
              this.dragRootEl = pointElRoot;
              this.hasNewRoot = this.el[0] !== this.dragRootEl[0];
            }
          }
        },
      };

      $.fn.nestable = function (params) {
        var lists = this,
          retval = this;

        lists.each(function () {
          var plugin = $(this).data("nestable");

          if (!plugin) {
            $(this).data("nestable", new Plugin(this, params));
            $(this).data("nestable-id", new Date().getTime());
          } else {
            if (
              typeof params === "string" &&
              typeof plugin[params] === "function"
            ) {
              retval = plugin[params]();
            }
          }
        });

        return retval || lists;
      };
    })(window.jQuery || window.Zepto, window, document);

    var app;

    app = [];

    app.bg = {
      init: function () {
        return $(".bg").each(function () {
          var bg, img, src;
          bg = $(this);
          src = bg.find("img").attr("src");
          bg.css({
            "background-image": "url(" + src + ")",
          });
          img = new Image();
          img.src = src;
          return (img.onload = function () {
            return bg.addClass("bg-loaded");
          });
        });
      },
    };

    app.carousel = {
      current: 0,
      duration: 6000,
      time: 0,
      timeout: false,
      init: function () {
        var el;
        el = $(".carousel");
        app.carousel.go(el, 0, true);
        app.carousel.setBar(el);
        app.carousel.eventSwipe(el);
        return $(".carousel-thumbnail").click(function () {
          var parent;
          parent = $(this).closest(".carousel");
          return app.carousel.go(parent, $(this).index());
        });
      },
      next: function (el) {
        var next;
        next =
          el.find(".section__thumbs .carousel-thumbnail.current").index() + 1;
        if (!el.find(".carousel-content").eq(next).length) {
          next = 0;
        }
        return this.go(el, next);
      },
      prev: function (el) {
        var prev;
        prev =
          el.find(".section__thumbs .carousel-thumbnail.current").index() - 1;
        if (!el.find(".carousel-content").eq(prev).length) {
          prev = 0;
        }
        return this.go(el, prev);
      },
      go: function (el, to, firstime) {
        var current, delay;
        if (firstime == null) {
          firstime = false;
        }
        this.time = 0;
        this.current = to;
        delay = 50;
        if (firstime) {
          delay = 0;
        }
        el.find(".current").addClass("out").removeClass("current");
        el.find(".carousel-thumbnail")
          .find(".section__thumb__bar")
          .css({
            width: 0 + "%",
          });
        el.find(".carousel-thumbnail").eq(to).addClass("current");
        setTimeout(function () {
          el.find(".out").removeClass("out");
          return el.find(".carousel-content").eq(to).addClass("current");
        }, delay);
        current = el.find(".carousel-thumbnail.current").index();
        if (el.find(".carousel-content video").length) {
          el.find("video")[current].pause();
          el.find("video")[current].currentTime = 0;
          el.find("video")[current].play();
        }
        return this.autoplay(el);
      },
      autoplay: function (el) {
        clearTimeout(app.carousel.timeout);
        return (app.carousel.timeout = setTimeout(function () {
          return app.carousel.next(el);
        }, this.duration));
      },
      setBar: function (el) {
        return setInterval(function () {
          var bar, width;
          app.carousel.time += 50;
          bar = el
            .find(".carousel-thumbnail.current")
            .find(".section__thumb__bar");
          width = (app.carousel.time * 100) / app.carousel.duration;
          if (width > 100) {
            width = 100;
          }
          return bar.css({
            width: width + "%",
          });
        }, 50);
      },
      eventSwipe: function (carousel) {
        carousel.hammer().bind("swipeleft", function (e) {
          return app.carousel.next($(this));
        });
        return carousel.hammer().bind("swiperight", function (e) {
          return app.carousel.prev($(this));
        });
      },
    };

    app.common = {
      init: function () {
        var value_int,
          value_int_final,
          value_int_formatting,
          value_int_point,
          value_text;
        value_text = $("body #value_product").text();
        value_int = parseInt(value_text);
        value_int_formatting = value_int.toLocaleString("en");
        value_int_point = value_int_formatting.replace(",", ".");
        value_int_final = "$" + value_int_point;
        return $("body #value_product").text(value_int_final);
      },
    };

    app.faq = {
      init: function () {
        return $(".faq").each(function () {
          var faq;
          faq = $(this);
          faq.find(".faq__item:not(.faq__open) .faq__answer").hide();
          return faq.find(".faq__question").click(function () {
            var index;
            index = $(this).parent().index();
            return app.faq.open(faq, index);
          });
        });
      },
      open: function (faq, index) {
        return faq.find(".faq__item").each(function () {
          if ($(this).index() === index) {
            $(this).find(".faq__answer").slideToggle();
            return $(this).toggleClass("faq__open");
          } else {
            $(this).find(".faq__answer").slideUp();
            return $(this).removeClass("faq__open");
          }
        });
      },
    };

    app.header = {
      init: function () {
        app.header.nav.events();
        return $(".header__icon--hamburger").click(function () {
          if (!$("header").hasClass("header--nav-in")) {
            $("header").addClass("header--nav-in");
            return $("header").addClass("header--color");
          } else {
            $("header").removeClass("header--nav-in");
            $("header").addClass("header-nav-out");
            return setTimeout(function () {
              return $("header").removeClass("header--nav-in header-nav-out");
            }, 200);
          }
        });
      },
      onScroll: function (scroll) {
        if (scroll > 10) {
          return $("header").addClass("header--color");
        } else {
          if (!$("header").hasClass("header--nav-in")) {
            return $("header").removeClass("header--color");
          }
        }
      },
      nav: {
        events: function () {
          $(".header__ham").on("click", function (e) {
            return app.header.nav.toggle();
          });
          $(".header__nav__close, .header__nav__bg").on("click", function () {
            return app.header.nav.out();
          });
          $(".header__nav__nav li").each(function () {
            if ($(this).find("ul").length || $(this).is("[supernav]")) {
              return $(this)
                .children("a")
                .append("<span class='fa fa-angle-right'></span>");
            }
          });
          $(".header__nav__nav a").on("click", function (e) {
            return app.header.nav.enterLvl($(this), e);
          });
          return $(".header__nav__back").on("click", function () {
            return app.header.nav.backLvl();
          });
        },
        toggle: function () {
          if (!$("header").is(".header--nav-in")) {
            return this["in"]();
          } else {
            return this.out();
          }
        },
        in: function () {
          if (!$("header").hasClass("header--nav-out")) {
            return $("header").addClass("header--nav-in");
          }
        },
        out: function () {
          if (!$("header").hasClass("header--nav-out")) {
            $("header").addClass("header--nav-out");
            return setTimeout(function () {
              $("header").removeClass("header--nav-out");
              $("header").removeClass("header--nav-in");
              return app.header.nav.backLvl();
            }, 500);
          }
        },
        enterLvl: function (el, e) {
          if (el.siblings("ul").length && $(window).width() < 1090) {
            e.preventDefault();
            el.siblings("ul").addClass("ul--in");
            return $(".header__nav").addClass("header__nav--ul-in");
          }
        },
        backLvl: function () {
          if ($(".header__nav--ul-in").length) {
            $(".header__nav").removeClass("header__nav--ul-in");
            $(".header__nav__nav ul.ul--in").addClass("ul--out");
            return setTimeout(function () {
              return $(".header__nav__nav ul.ul--in").removeClass(
                "ul--in ul--out"
              );
            }, 500);
          }
        },
      },
    };

    app.isMobile = function () {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    };

    app.isotope = {
      init: function () {
        var $grid,
          $quicksearch,
          buttonFilter,
          buttonFilters,
          concatValues,
          debounce,
          qsRegex;
        buttonFilters = {};
        buttonFilter = void 0;
        qsRegex = void 0;
        $grid = $(".grid").isotope({
          itemSelector: ".section__card",
          layoutMode: "masonry",
          filter: function () {
            var $this, buttonResult, searchResult;
            $this = $(this);
            searchResult = qsRegex ? $this.text().match(qsRegex) : true;
            buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
            return searchResult && buttonResult;
          },
        });
        concatValues = function (obj) {
          var prop, value;
          value = "";
          for (prop in obj) {
            value += obj[prop];
          }
          return value;
        };
        debounce = function (fn, threshold) {
          var timeout;
          timeout = void 0;
          threshold = threshold || 100;
          return function () {
            var _this, args, delayed;
            delayed = function () {
              fn.apply(_this, args);
            };
            clearTimeout(timeout);
            args = arguments;
            _this = this;
            timeout = setTimeout(delayed, threshold);
          };
        };
        $(".filters-select").change(function () {
          var $buttonGroup, $this, filterGroup;
          $this = $(this);
          $buttonGroup = $this.parents(".button-group");
          filterGroup = $buttonGroup.attr("data-filter-group");
          buttonFilters[filterGroup] = $this.val();
          buttonFilter = concatValues(buttonFilters);
          $grid.isotope();
          app.scroll.dscroll;
        });
        $(".section__filters").on("click", ".section__tag", function () {
          var $buttonGroup, $this, filterGroup;
          $this = $(this);
          $buttonGroup = $this.parents(".button-group");
          filterGroup = $buttonGroup.attr("data-filter-group");
          buttonFilters[filterGroup] = $this.attr("data-filter");
          buttonFilter = concatValues(buttonFilters);
          $grid.isotope();
          app.scroll.dscroll;
          $(this)
            .parents(".section__filters")
            .find(".current")
            .removeClass("current");
          $(this).addClass("current");
        });
        $quicksearch = $(".quicksearch").keyup(
          debounce(function () {
            qsRegex = new RegExp($quicksearch.val(), "gi");
            $grid.isotope();
          })
        );
        return $(".button-group").each(function (i, buttonGroup) {
          var $buttonGroup;
          $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
          });
        });
      },
    };

    app.modal = {
      init: function () {
        $(".modal__close").click(function () {
          return app.modal.close($(this).closest(".modal"));
        });
        return $("[data-modal-login]").click(function (e) {
          e.preventDefault();
          return app.modal.open(".modal--login");
        });
      },
      open: function (elementclass) {
        return $(elementclass).addClass("modal--in");
      },
      close: function (modal) {
        if (modal == null) {
          modal = false;
        }
        if (!modal) {
          modal = $(".modal");
        }
        modal.addClass("modal--out");
        return setTimeout(function () {
          return $(".modal.modal--out").removeClass("modal--in modal--out");
        }, 200);
      },
    };

    app.scroll = {
      init: function () {
        var hash;
        app.scroll.trigger();
        app.scroll.checkGoto();
        setInterval(function () {
          return app.scroll.trigger();
        }, 500);
        $(window).scroll(function () {
          app.scroll.trigger();
          return app.scroll.checkGoto();
        });
        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            $("header").addClass("header--min");
            return $("header").addClass("header--color");
          } else {
            $("header").removeClass("header--min");
            return $("header").removeClass("header--color");
          }
        });
        $("[data-goto]").click(function (e) {
          e.preventDefault();
          app.scroll.goto($(this).attr("data-goto"));
          return console.log("data");
        });
        hash = window.location.hash.replace("#", "");
        if (hash !== "") {
          return app.scroll.goto($(".section--" + hash));
        }
      },
      trigger: function () {
        app.scroll.dscroll();
        app.scroll.parallax();
        return app.scroll.sticky();
      },
      dscroll: function () {
        var element_top_delay, element_top_prev, scroll;
        scroll = $(window).scrollTop();
        if ($(".dscroll").length) {
          element_top_prev = 0;
          element_top_delay = 0;
          return $(".dscroll:visible").each(function () {
            var delay, element, element_top;
            element = $(this);
            element_top = element.offset().top;
            if (scroll + $(window).height() > element_top) {
              element.addClass("dscroll--in");
              if (
                element_top >= element_top_prev - 25 &&
                element_top <= element_top_prev + 25
              ) {
                element_top_delay++;
                delay = element_top_delay * 0.2;
                element.css({
                  "-webkit-animation-delay": delay + "s",
                  "animation-delay": delay + "s",
                });
              } else {
                element_top_delay = 0;
              }
              element_top_prev = element_top;
            }
            if (scroll + $(window).height() <= element_top) {
              return element.removeClass("dscroll--in");
            }
          });
        }
      },
      parallax: function () {
        var scroll;
        scroll = $(window).scrollTop();
        if ($("[parallax]").length) {
          return $("[parallax]").each(function () {
            var valX, valY, vals, x, y;
            vals = $(this).attr("parallax").split(",");
            x = parseFloat(vals[0]);
            y = parseFloat(vals[1]);
            valX = scroll * x;
            valY = scroll * y;
            return $(this).css({
              "-webkit-transform": "translate(" + valX + "px," + valY + "px)",
              "-ms-transform": "translate(" + valX + "px," + valY + "px)",
              transform: "translate(" + valX + "px," + valY + "px)",
            });
          });
        }
      },
      sticky: function () {
        var scroll;
        scroll = $(window).scrollTop();
        if ($("[sticky]").length) {
          return $("[sticky]").each(function () {
            var element, element_top, sticky_top;
            sticky_top = scroll + $("header").height() + 60;
            element = $(this);
            element_top = element.offset().top;
            if (sticky_top > element_top) {
              return element.addClass("sticked");
            } else {
              return element.removeClass("sticked");
            }
          });
        }
      },
      goto: function (to, add, seconds) {
        var from, top;
        if (add == null) {
          add = 0;
        }
        if (seconds == null) {
          seconds = 1000;
        }
        from = $("[data-goto='" + to + "']");
        if (!add) {
          add = $("header").height() + 80;
          if (from.closest("[sticky]").length) {
            add += from.closest("[sticky]").height();
          }
        }
        if ($(to).length) {
          top = $(to).offset().top - add;
          return $("body,html").animate(
            {
              scrollTop: top,
            },
            seconds
          );
        }
      },
      checkGoto: function () {
        var $index, scroll;
        scroll = $(window).scrollTop();
        $index = -1;
        $("[data-goto]").each(function () {
          var add, from, to;
          from = $(this);
          to = $($(this).attr("data-goto"));
          add = $("header").height() + 120;
          if (from.closest("[sticky]").length) {
            add += from.closest("[sticky]").height();
          }
          if (to.length) {
            if (scroll + add + 2 >= to.offset().top) {
              $("[data-goto].contener__tag--current").removeClass(
                "contener__tag--current"
              );
              from.addClass("contener__tag--current");
              return ($index = to.index());
            }
          }
        });
        if ($index > 2) {
          return $(".contener__nav__sticky").scrollLeft(500);
        } else {
          return $(".contener__nav__sticky").scrollLeft(0);
        }
      },
    };

    app.shares = {
      init: function () {
        if (!app.isMobile()) {
          $(".share-whatsapp").parents(".section__social__logo").remove();
        }
        return $(".share").click(function (e) {
          e.preventDefault();
          console.log("shares");
          return app.shares.go($(this));
        });
      },
      go: function (element) {
        var share_text, share_url;
        if (!share_url) {
          share_url = encodeURIComponent(element.attr("href"));
        }
        share_text = encodeURIComponent($("h1").text());
        if (element.attr("data-text")) {
          share_text = encodeURIComponent(element.attr("data-text"));
        }
        if (element.is(".share-whatsapp")) {
          window.location.href =
            "whatsapp://send?text=" +
            share_text +
            encodeURIComponent(" ") +
            share_url;
        }
        if (!app.isMobile()) {
          if (element.is(".share-facebook")) {
            app.shares.popup(
              "https://www.facebook.com/sharer/sharer.php?u=" + share_url,
              500,
              310
            );
          }
          if (element.is(".share-twitter")) {
            app.shares.popup(
              "https://twitter.com/intent/tweet?source=webclient&text=" +
                share_text +
                "&url=" +
                share_url,
              500,
              310
            );
          }
          if (element.is(".share-linkedin")) {
            return app.shares.popup(
              "http://www.linkedin.com/shareArticle?mini=true&url=" + share_url,
              500,
              310
            );
          }
        } else {
          if (element.is(".share-facebook")) {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=" + share_url
            );
          }
          if (element.is(".share-twitter")) {
            window.open(
              "https://twitter.com/intent/tweet?source=webclient&text=" +
                share_text +
                "&url=" +
                share_url
            );
          }
          if (element.is(".share-linkedin")) {
            return app.shares.popup(
              "http://www.linkedin.com/shareArticle?mini=true&url=" + share_url
            );
          }
        }
      },
      popup: function (url, w, h) {
        var left, top;
        left = $(window).width() / 2 - w / 2;
        top = $(window).height() / 2 - h / 2;
        return window.open(
          url,
          "Compartir",
          "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
            w +
            ", height=" +
            h +
            ", top=" +
            top +
            ", left=" +
            left
        );
      },
    };

    (function (factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "hammerjs"], factory);
      } else if (typeof exports === "object") {
        factory(require("jquery"), require("hammerjs"));
      } else {
        factory(jQuery, Hammer);
      }
    })(function ($, Hammer) {
      var hammerify;
      hammerify = function (el, options) {
        var $el;
        $el = $(el);
        if (!$el.data("hammer")) {
          $el.data("hammer", new Hammer($el[0], options));
        }
      };
      $.fn.hammer = function (options) {
        return this.each(function () {
          hammerify(this, options);
        });
      };
      Hammer.Manager.prototype.emit = (function (originalEmit) {
        return function (type, data) {
          originalEmit.call(this, type, data);
          $(this.element).trigger({
            type: type,
            gesture: data,
          });
        };
      })(Hammer.Manager.prototype.emit);
    });

    app.slider = {
      init: function () {
        $(".slider").each(function () {
          app.slider.createElements($(this));
          app.slider.go($(this), 0);
          app.slider.autoplay($(this));
          return app.slider.eventSwipe($(this));
        });
        $(document).on("click", ".slider .slider-nav-left", function () {
          return app.slider.prev($(this).closest(".slider"));
        });
        $(document).on("click", ".slider .slider-nav-right", function () {
          return app.slider.next($(this).closest(".slider"));
        });
        $(document).on("click", ".slider .slider-bullet", function () {
          return app.slider.go($(this).closest(".slider"), $(this).index());
        });
        return $(document).on(
          "click",
          ".section__thumbs .col-md-12",
          function () {
            var parent;
            parent = $(this).closest(".slides");
            app.thumb.go(parent, $(this).index());
            return app.slider.go($(this).closest(".slider"), $(this).index());
          }
        );
      },
      eventSwipe: function (slider) {
        slider.hammer().bind("swipeleft", function (e) {
          return app.slider.next($(this));
        });
        return slider.hammer().bind("swiperight", function (e) {
          return app.slider.prev($(this));
        });
      },
      create: function (data) {
        var d, j, len, slider, slides;
        slides = "";
        for (j = 0, len = data.length; j < len; j++) {
          d = data[j];
          slides += "<div class='slide'>" + d + "</div>";
        }
        slider = "<div class='slider slider-cover'>" + slides + "</div>";
        return slider;
      },
      createElements: function (slider) {
        var html;
        if (!slider.find("slider-slides").length) {
          slider.find(".slide").wrapAll("<div class='slider-slides' />");
        }
        if (slider.find(".slide").length > 1) {
          html = "";
          html += "<div class='slider-navigation'>";
          html +=
            "<div class='slider-nav slider-nav-left'><span class='fa fa-angle-left'></span></div>";
          html +=
            "<div class='slider-nav slider-nav-right'><span class='fa fa-angle-right'></span></div>";
          html += "</div>";
          html +=
            "<div class='slider-bullets'><div class='slider-bullets-limit'></div></div>";
          slider.append(html);
          return slider.find(".slide").each(function () {
            return slider
              .find(".slider-bullets .slider-bullets-limit")
              .append("<div class='slider-bullet'></div>");
          });
        }
      },
      next: function (slider) {
        var current, goto;
        current = slider.find(".slide.slide-current").index();
        goto = current + 1;
        if (goto >= slider.find(".slide").length) {
          goto = 0;
        }
        return app.slider.go(slider, goto, "right");
      },
      prev: function (slider) {
        var current, goto;
        current = slider.find(".slide.slide-current").index();
        goto = current - 1;
        if (goto < 0) {
          goto = slider.find(".slide").length - 1;
        }
        return app.slider.go(slider, goto, "left");
      },
      go: function (slider, goto, dir) {
        var current;
        if (dir == null) {
          dir = false;
        }
        current = slider.find(".slide.slide-current").index();
        if (!slider.hasClass("slider-animate") && current !== goto) {
          if (!dir && current >= 0) {
            dir = current < goto ? "right" : "left";
          }
          slider.removeClass("slider-dir-left slider-dir-right");
          slider.addClass("slider-animate");
          if (dir) {
            slider.addClass("slider-dir-" + dir);
          }
          slider
            .find(".slide.slide-current")
            .addClass("slide-out")
            .removeClass("slide-current");
          slider.find(".slide").eq(goto).addClass("slide-current");
          slider
            .find(".slider-bullet")
            .removeClass("slider-bullet-current")
            .eq(goto)
            .addClass("slider-bullet-current");
          setTimeout(function () {
            slider.find(".slide-out").removeClass("slide-out");
            return slider.removeClass("slider-animate");
          }, 500);
          if (slider.find("video").length) {
            return slider.find("video")[0].play();
          }
        }
      },
      autoplay: function (slider) {
        var play, play_timeout;
        play_timeout = false;
        play = function () {
          var el;
          clearTimeout(play_timeout);
          el = $(".slides");
          if ($(slider).hasClass("slider--news") === true) {
            return (play_timeout = setTimeout(function () {
              slider.each(function () {
                app.slider.next($(this));
                return app.thumb.next($(this));
              });
              return play();
            }, 15000));
          } else {
            return (play_timeout = setTimeout(function () {
              slider.each(function () {
                app.slider.next($(this));
                return app.thumb.next($(this));
              });
              return play();
            }, 10000));
          }
        };
        return play();
      },
    };

    app.tabs = {
      init: function () {
        return $(".tabs").each(function () {
          var tab;
          tab = $(this);
          if (!tab.find(".tab--current").length) {
            app.tabs.open(tab, 0);
          }
          return tab.find(".tabs__header .tab").click(function (e) {
            var index;
            e.preventDefault();
            index = $(this).index();
            return app.tabs.open(tab, index);
          });
        });
      },
      open: function (tab, index) {
        tab.find(".tabs__header .tab").removeClass("tab--current");
        tab.find(".tabs__header .tab").eq(index).addClass("tab--current");
        tab.find(".tabs__body .tab").removeClass("tab--current");
        tab.find(".tabs__body .tab").eq(index).addClass("tab--current");
        if (app.scroll) {
          return app.scroll.dscroll();
        }
      },
    };

    $(document).ready(function () {
      var component, properties, results;
      results = [];
      for (component in app) {
        properties = app[component];
        if (properties.init) {
          results.push(properties.init());
        } else {
          results.push(void 0);
        }
      }
      return results;
    });
  });
