(function (t) {
  function e(e) {
    for (
      var i, r, o = e[0], l = e[1], c = e[2], d = 0, p = [];
      d < o.length;
      d++
    )
      (r = o[d]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]),
        (n[r] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    u && u(e);
    while (p.length) p.shift()();
    return a.push.apply(a, c || []), s();
  }
  function s() {
    for (var t, e = 0; e < a.length; e++) {
      for (var s = a[e], i = !0, o = 1; o < s.length; o++) {
        var l = s[o];
        0 !== n[l] && (i = !1);
      }
      i && (a.splice(e--, 1), (t = r((r.s = s[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    a = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = t),
    (r.c = i),
    (r.d = function (t, e, s) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            s,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return s;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var u = l;
  a.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "0069": function (t, e, s) {
    "use strict";
    s("2189");
  },
  "009b": function (t, e, s) {},
  "021f": function (t, e, s) {
    "use strict";
    s("3129");
  },
  "022d": function (t, e, s) {},
  "04a5": function (t, e, s) {},
  "04f3": function (t, e, s) {},
  "05be": function (t, e, s) {},
  "0643": function (t, e, s) {},
  "0756": function (t, e, s) {},
  "088c": function (t, e, s) {
    "use strict";
    s("0a9f");
  },
  "0a9f": function (t, e, s) {},
  "0c44": function (t, e, s) {},
  "0d56": function (t, e, s) {
    "use strict";
    s("8abf");
  },
  "0de1": function (t, e, s) {},
  "0f13": function (t, e, s) {},
  "116a": function (t, e, s) {
    "use strict";
    s("c362");
  },
  1174: function (t, e, s) {},
  "11ae": function (t, e, s) {
    "use strict";
    s("2066");
  },
  1267: function (t, e, s) {
    "use strict";
    s("1d7e");
  },
  "12fb": function (t, e, s) {
    "use strict";
    s("5cbe");
  },
  "146c": function (t, e, s) {
    "use strict";
    s("d733");
  },
  "16eb": function (t, e, s) {
    "use strict";
    s("f3da");
  },
  "170b": function (t, e, s) {
    "use strict";
    s("ee92");
  },
  "18dd": function (t, e, s) {
    "use strict";
    s("9aff");
  },
  1991: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-input", {
          ref: "input",
          staticClass: "k-block-type-list-input",
          attrs: { marks: t.marks, value: t.content.text, type: "list" },
          on: {
            input: function (e) {
              return t.update({ text: e });
            },
          },
        });
      },
      n = [],
      a = {
        computed: {
          marks() {
            return this.field("text", {}).marks;
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      r = a,
      o = s("2877"),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  "19d7": function (t, e, s) {
    "use strict";
    s("7740");
  },
  "1a51": function (t, e, s) {},
  "1a8b": function (t, e, s) {},
  "1aeb": function (t, e, s) {},
  "1b3b": function (t, e, s) {
    "use strict";
    s("6ae1");
  },
  "1bde": function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-block-type-code-editor" },
          [
            s("k-input", {
              ref: "code",
              attrs: {
                buttons: !1,
                placeholder: t.placeholder,
                spellcheck: !1,
                value: t.content.code,
                type: "textarea",
              },
              on: {
                input: function (e) {
                  return t.update({ code: e });
                },
              },
            }),
            t.languages.length
              ? s(
                  "div",
                  { staticClass: "k-block-type-code-editor-language" },
                  [
                    s("k-icon", { attrs: { type: "code" } }),
                    s("k-input", {
                      ref: "language",
                      attrs: {
                        empty: !1,
                        options: t.languages,
                        value: t.content.language,
                        type: "select",
                      },
                      on: {
                        input: function (e) {
                          return t.update({ language: e });
                        },
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      n = [],
      a = {
        computed: {
          placeholder() {
            return this.field("code", {}).placeholder;
          },
          languages() {
            return this.field("language", { options: [] }).options;
          },
        },
        methods: {
          focus() {
            this.$refs.code.focus();
          },
        },
      },
      r = a,
      o = (s("ae1b"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  "1c4e": function (t, e, s) {
    "use strict";
    s("c08c");
  },
  "1d7e": function (t, e, s) {},
  "1e3b": function (t, e, s) {
    "use strict";
    s("4200");
  },
  "1e4a": function (t, e, s) {},
  "200d": function (t, e, s) {
    "use strict";
    s("9d48");
  },
  2066: function (t, e, s) {},
  "20f8": function (t, e, s) {},
  "217b": function (t, e, s) {
    "use strict";
    s("8a02");
  },
  2189: function (t, e, s) {},
  "21dc": function (t, e, s) {
    "use strict";
    s("f9c1");
  },
  "224d": function (t, e, s) {
    "use strict";
    s("5e2d");
  },
  2283: function (t, e, s) {},
  2429: function (t, e, s) {},
  "24c1": function (t, e, s) {
    "use strict";
    s("8216");
  },
  2609: function (t, e, s) {},
  "26c3": function (t, e, s) {},
  "27c1": function (t, e, s) {
    "use strict";
    s("2429");
  },
  "2a08": function (t, e, s) {},
  "310e": function (t, e, s) {
    "use strict";
    s("bad3");
  },
  3129: function (t, e, s) {},
  3273: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "ul",
          { on: { dblclick: t.open } },
          [
            0 === t.content.images.length
              ? [s("li"), s("li"), s("li"), s("li"), s("li")]
              : t._l(t.content.images, function (t) {
                  return s("li", { key: t.id }, [
                    s("img", { attrs: { src: t.url, alt: t.alt } }),
                  ]);
                }),
          ],
          2
        );
      },
      n = [],
      a = {},
      r = a,
      o = (s("1b3b"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  3342: function (t, e, s) {
    "use strict";
    s("efe1");
  },
  "35cb": function (t, e, s) {
    "use strict";
    s("c130");
  },
  "367b": function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-block-title", {
          attrs: { content: t.content, fieldset: t.fieldset },
          on: {
            dblclick: function (e) {
              return t.$emit("open");
            },
          },
        });
      },
      n = [],
      a = {},
      r = a,
      o = (s("5f34"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  3787: function (t, e, s) {
    "use strict";
    s("3ee0");
  },
  "38b6": function (t, e, s) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            class: "k-field k-field-name-" + t.name,
            attrs: {
              "data-disabled": t.disabled,
              "data-translate": t.translate,
            },
            on: {
              focusin: function (e) {
                return t.$emit("focus", e);
              },
              focusout: function (e) {
                return t.$emit("blur", e);
              },
            },
          },
          [
            t._t("header", [
              s(
                "header",
                { staticClass: "k-field-header" },
                [
                  t._t("label", [
                    s(
                      "label",
                      { staticClass: "k-field-label", attrs: { for: t.input } },
                      [
                        t._v(t._s(t.labelText) + " "),
                        t.required
                          ? s(
                              "abbr",
                              { attrs: { title: t.$t("field.required") } },
                              [t._v("*")]
                            )
                          : t._e(),
                      ]
                    ),
                  ]),
                  t._t("options"),
                  t._t("counter", [
                    t.counter
                      ? s(
                          "k-counter",
                          t._b(
                            {
                              staticClass: "k-field-counter",
                              attrs: { required: t.required },
                            },
                            "k-counter",
                            t.counter,
                            !1
                          )
                        )
                      : t._e(),
                  ]),
                ],
                2
              ),
            ]),
            t._t("default"),
            t._t("footer", [
              t.help || t.$slots.help
                ? s(
                    "footer",
                    { staticClass: "k-field-footer" },
                    [
                      t._t("help", [
                        t.help
                          ? s("k-text", {
                              staticClass: "k-field-help",
                              attrs: { theme: "help" },
                              domProps: { innerHTML: t._s(t.help) },
                            })
                          : t._e(),
                      ]),
                    ],
                    2
                  )
                : t._e(),
            ]),
          ],
          2
        );
      },
      n = [],
      a = {
        inheritAttrs: !1,
        props: {
          counter: [Boolean, Object],
          disabled: Boolean,
          endpoints: Object,
          help: String,
          input: [String, Number],
          label: String,
          name: [String, Number],
          required: Boolean,
          translate: Boolean,
          type: String,
        },
        computed: {
          labelText() {
            return this.label || " ";
          },
        },
      },
      r = a,
      o = (s("a134"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["a"] = l.exports;
  },
  "39c8": function (t, e, s) {},
  "3a85": function (t, e, s) {
    "use strict";
    s("1a51");
  },
  "3b07": function (t, e, s) {},
  "3c20": function (t, e, s) {},
  "3cf3": function (t, e, s) {
    "use strict";
    s("e2d7");
  },
  "3dcf": function (t, e, s) {},
  "3e1e": function (t, e, s) {},
  "3ee0": function (t, e, s) {},
  4041: function (t, e, s) {
    "use strict";
    s("009b");
  },
  "40a6": function (t, e, s) {},
  "414d": function (t, e, s) {
    "use strict";
    s("86ab");
  },
  4200: function (t, e, s) {},
  "42e4": function (t, e, s) {
    "use strict";
    s("39c8");
  },
  4333: function (t, e, s) {
    "use strict";
    s("1aeb");
  },
  "43bf": function (t, e, s) {},
  4433: function (t, e, s) {
    "use strict";
    s("04a5");
  },
  "455b": function (t, e, s) {
    "use strict";
    s("9d40");
  },
  "49b6": function (t, e, s) {},
  "4a4b": function (t, e, s) {
    "use strict";
    s("3c20");
  },
  "4bcb": function (t, e, s) {},
  "4c2e": function (t, e, s) {},
  "4cb2": function (t, e, s) {
    "use strict";
    s("a2eb");
  },
  "4d5b": function (t, e, s) {},
  "4e0b": function (t, e, s) {},
  "4f8f": function (t, e, s) {},
  "526c": function (t, e, s) {},
  5332: function (t, e, s) {
    "use strict";
    s("e863");
  },
  "53c5": function (t, e, s) {
    "use strict";
    s("0f13");
  },
  "53fd": function (t, e, s) {},
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.$store.state.system.info.isBroken
          ? s("div", { staticClass: "k-panel" }, [
              s(
                "main",
                { staticClass: "k-panel-view" },
                [
                  s("k-error-view", [
                    t.debug
                      ? s("p", [
                          t._v(
                            " " + t._s(t.$store.state.system.info.error) + " "
                          ),
                        ])
                      : s("p", [t._v(" The Panel cannot connect to the API ")]),
                  ]),
                ],
                1
              ),
            ])
          : s(
              "div",
              {
                staticClass: "k-panel",
                attrs: {
                  "data-dragging": t.$store.state.drag,
                  "data-loading": t.$store.state.isLoading,
                  "data-route": t.$route.name,
                  "data-topbar": t.inside,
                  "data-translation": t.translation,
                  "data-translation-default": t.defaultTranslation,
                  tabindex: "0",
                },
              },
              [
                s("keep-alive", [s("k-icons")], 1),
                t.inside
                  ? s(
                      "header",
                      { staticClass: "k-panel-header" },
                      [
                        s("k-topbar", {
                          on: {
                            register: function (e) {
                              return t.$refs.registration.open();
                            },
                            search: function (e) {
                              return t.$refs.search.open();
                            },
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                s(
                  "main",
                  { staticClass: "k-panel-view" },
                  [s("router-view")],
                  1
                ),
                t.inside ? s("k-form-buttons") : t._e(),
                t.inside
                  ? s("k-search", {
                      ref: "search",
                      attrs: { type: t.searchType, types: t.searchTypes },
                    })
                  : t._e(),
                s("k-error-dialog"),
                t.fatal
                  ? [
                      s("div", { staticClass: "k-fatal" }, [
                        s(
                          "div",
                          { staticClass: "k-fatal-box" },
                          [
                            s("k-headline", [
                              t._v(
                                "The JSON response of the API could not be parsed:"
                              ),
                            ]),
                            s("iframe", {
                              ref: "fatal",
                              staticClass: "k-fatal-iframe",
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]
                  : t._e(),
                t.offline
                  ? s("div", { staticClass: "k-offline-warning" }, [
                      s("p", [t._v("The Panel is currently offline")]),
                    ])
                  : t._e(),
                t.inside
                  ? s("k-registration", { ref: "registration" })
                  : t._e(),
              ],
              2
            );
      },
      n = [],
      a = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "svg",
          {
            staticClass: "k-icons",
            attrs: {
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              overflow: "hidden",
            },
          },
          [
            s(
              "defs",
              t._l(t.$options.icons, function (e, i) {
                return s("symbol", {
                  key: i,
                  attrs: { id: "icon-" + i, viewBox: "0 0 16 16" },
                  domProps: { innerHTML: t._s(e) },
                });
              }),
              0
            ),
          ]
        );
      },
      r = [],
      o = { icons: window.panel.plugins.icons },
      l = o,
      c = s("2877"),
      u = Object(c["a"])(l, a, r, !1, null, null, null),
      d = u.exports,
      p = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: {
            fields: t.fields,
            "submit-button": t.$t("license.register"),
          },
          on: { submit: t.submit },
          model: {
            value: t.registration,
            callback: function (e) {
              t.registration = e;
            },
            expression: "registration",
          },
        });
      },
      h = [],
      m = {
        props: {
          cancelButton: { type: [String, Boolean], default: !0 },
          icon: String,
          submitButton: { type: [String, Boolean], default: !0 },
          size: String,
          theme: String,
        },
        methods: {
          close() {
            this.$refs.dialog.close(), this.$emit("close");
          },
          error(t) {
            this.$refs.dialog.error(t);
          },
          open() {
            this.$refs.dialog.open(), this.$emit("open");
          },
          success(t) {
            this.$refs.dialog.close(),
              t.route && this.$go(t.route),
              t.message &&
                this.$store.dispatch("notification/success", t.message),
              t.event &&
                ("string" === typeof t.event && (t.event = [t.event]),
                t.event.forEach((t) => {
                  this.$events.$emit(t);
                })),
              (!1 !== Object.prototype.hasOwnProperty.call(t, "emit") &&
                !1 === t.emit) ||
                this.$emit("success");
          },
        },
      },
      f = {
        mixins: [m],
        data() {
          return { registration: { license: null, email: null } };
        },
        computed: {
          fields() {
            return {
              license: {
                label: this.$t("license.register.label"),
                type: "text",
                required: !0,
                counter: !1,
                placeholder: "K3-",
                help: this.$t("license.register.help"),
              },
              email: {
                label: this.$t("email"),
                type: "email",
                required: !0,
                counter: !1,
              },
            };
          },
        },
        methods: {
          async submit() {
            try {
              await this.$api.system.register(this.registration),
                this.$store.dispatch(
                  "system/register",
                  this.registration.license
                ),
                this.success({ message: this.$t("license.register.success") });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      g = f,
      b = Object(c["a"])(g, p, h, !1, null, null, null),
      k = b.exports;
    const v = window.panel || {},
      $ = {
        assets: "@/assets",
        api: "/api",
        site: Object({ NODE_ENV: "production", BASE_URL: "/" })
          .VUE_APP_DEV_SERVER,
        url: "/",
        debug: !0,
        translation: "en",
        search: { limit: 10 },
      };
    var y,
      _,
      w,
      x,
      O = { ...$, ...v },
      C = (t) => {
        const e = async ({
          endpoint: e,
          query: s,
          limit: i,
          fields: n,
          map: a,
        }) => {
          const r = await t.$api.get(e, {
            q: s,
            limit: i || 10,
            select: ["id", ...n, "panelIcon", "panelImage"],
          });
          return r.data.map((t) => ({
            id: t.id,
            icon: { ...t.panelIcon, back: "black", color: "#fff" },
            image: { ...t.panelImage, back: "pattern", cover: !0 },
            ...a(t),
          }));
        };
        return {
          pages: {
            label: t.$t("pages"),
            icon: "page",
            search: async (s) =>
              e({
                ...s,
                endpoint: "site/search",
                fields: ["title"],
                map: (e) => ({
                  title: e.title,
                  link: t.$api.pages.link(e.id),
                  info: e.id,
                }),
              }),
          },
          files: {
            label: t.$t("files"),
            icon: "image",
            search: async (s) =>
              e({
                ...s,
                endpoint: "files/search",
                fields: ["filename", "parent"],
                map: (e) => ({
                  title: e.filename,
                  link: t.$api.files.link(
                    t.$api.pages.url(e.parent.id),
                    e.filename
                  ),
                  info: e.id,
                }),
              }),
          },
          users: {
            label: t.$t("users"),
            icon: "users",
            search: async (s) =>
              e({
                ...s,
                endpoint: "users/search",
                fields: ["name", "email"],
                map: (e) => ({
                  title: e.name || e.email,
                  link: t.$api.users.link(e.id),
                  info: e.email,
                  icon: { back: "black", type: "user" },
                }),
              }),
          },
        };
      },
      S = {
        name: "App",
        components: { "k-icons": d, "k-registration": k },
        data() {
          return { offline: !1, dragging: !1, debug: O.debug };
        },
        computed: {
          inside() {
            return !(
              this.$route.meta.outside || !this.$store.state.user.current
            );
          },
          defaultTranslation() {
            return (
              !!this.$store.state.languages.current &&
              this.$store.state.languages.current ===
                this.$store.state.languages.default
            );
          },
          fatal() {
            return this.$store.state.fatal;
          },
          searchType() {
            return "users" === this.$store.state.view ? "users" : "pages";
          },
          searchTypes() {
            return C(this);
          },
          translation() {
            return (
              !!this.$store.state.languages.current &&
              this.$store.state.languages.current.code
            );
          },
        },
        watch: {
          fatal(t) {
            null !== t &&
              this.$nextTick(() => {
                try {
                  let e = this.$refs.fatal.contentWindow.document;
                  e.open(), e.write(t), e.close();
                } catch (e) {
                  console.error(e);
                }
              });
          },
        },
        created() {
          this.$events.$on("offline", this.isOffline),
            this.$events.$on("online", this.isOnline),
            this.$events.$on("drop", this.drop);
        },
        destroyed() {
          this.$events.$off("offline", this.isOffline),
            this.$events.$off("online", this.isOnline),
            this.$events.$off("drop", this.drop);
        },
        methods: {
          drop() {
            this.$store.dispatch("drag", null);
          },
          isOnline() {
            this.offline = !1;
          },
          isOffline() {
            !1 === this.$store.state.system.info.isLocal && (this.offline = !0);
          },
        },
      },
      E = S,
      j = (s("5c0b"), Object(c["a"])(E, i, n, !1, null, null, null)),
      T = j.exports,
      L = (t) => ({
        async login(e) {
          const s = {
            long: e.remember || !1,
            email: e.email,
            password: e.password,
          };
          return await t.post("auth/login", s);
        },
        async logout() {
          return t.post("auth/logout");
        },
        async user(e) {
          return t.get("auth", e);
        },
        async verifyCode(e) {
          return await t.post("auth/code", { code: e });
        },
      }),
      I = s("a026"),
      A = (t) => ({
        breadcrumb(e, s) {
          let i = null,
            n = [];
          switch (s) {
            case "UserFile":
              n.push({
                label: e.parent.username,
                link: t.users.link(e.parent.id),
              }),
                (i = "users/" + e.parent.id);
              break;
            case "SiteFile":
              i = "site";
              break;
            case "PageFile":
              (n = e.parents.map((e) => ({
                label: e.title,
                link: t.pages.link(e.id),
              }))),
                (i = t.pages.url(e.parent.id));
              break;
          }
          return (
            n.push({ label: e.filename, link: this.link(i, e.filename) }), n
          );
        },
        async changeName(e, s, i) {
          return t.patch(e + "/files/" + s + "/name", { name: i });
        },
        async delete(e, s) {
          return t.delete(e + "/files/" + s);
        },
        async get(e, s, i) {
          let n = await t.get(e + "/files/" + s, i);
          return !0 === Array.isArray(n.content) && (n.content = {}), n;
        },
        link(t, e, s) {
          return "/" + this.url(t, e, s);
        },
        async options(e, s, i, n = !0) {
          const a = await t.get(this.url(e, s), { select: "options" }),
            r = a.options;
          let o = [];
          return (
            "list" === i &&
              (o.push({
                click: "download",
                icon: "open",
                text: I["a"].i18n.translate("open"),
              }),
              o.push("-")),
            o.push({
              click: "rename",
              icon: "title",
              text: I["a"].i18n.translate("rename"),
              disabled: !r.changeName,
            }),
            o.push({
              click: "replace",
              icon: "upload",
              text: I["a"].i18n.translate("replace"),
              disabled: !r.replace,
            }),
            "list" === i &&
              (o.push("-"),
              o.push({
                click: "sort",
                icon: "sort",
                text: I["a"].i18n.translate("file.sort"),
                disabled: !(r.update && n),
              })),
            o.push("-"),
            o.push({
              click: "remove",
              icon: "trash",
              text: I["a"].i18n.translate("delete"),
              disabled: !r.delete,
            }),
            o
          );
        },
        async update(e, s, i) {
          return t.patch(e + "/files/" + s, i);
        },
        url(t, e, s) {
          let i = t + "/files/" + e;
          return s && (i += "/" + s), i;
        },
      }),
      B = (t) => ({
        async create(e) {
          return await t.post("languages", e);
        },
        async delete(e) {
          return t.delete("languages/" + e);
        },
        async get(e) {
          return await t.get("languages/" + e);
        },
        async list() {
          return await t.get("languages");
        },
        async update(e, s) {
          return t.patch("languages/" + e, s);
        },
      }),
      M = (t) => ({
        async blueprint(e) {
          return t.get("pages/" + this.id(e) + "/blueprint");
        },
        async blueprints(e, s) {
          return t.get("pages/" + this.id(e) + "/blueprints", { section: s });
        },
        breadcrumb(t, e = !0) {
          var s = t.parents.map((t) => ({
            label: t.title,
            link: this.link(t.id),
          }));
          return (
            !0 === e && s.push({ label: t.title, link: this.link(t.id) }), s
          );
        },
        async changeSlug(e, s) {
          return t.patch("pages/" + this.id(e) + "/slug", { slug: s });
        },
        async changeStatus(e, s, i) {
          return t.patch("pages/" + this.id(e) + "/status", {
            status: s,
            position: i,
          });
        },
        async changeTemplate(e, s) {
          return t.patch("pages/" + this.id(e) + "/template", { template: s });
        },
        async changeTitle(e, s) {
          return t.patch("pages/" + this.id(e) + "/title", { title: s });
        },
        async children(e, s) {
          return t.post("pages/" + this.id(e) + "/children/search", s);
        },
        async create(e, s) {
          return null === e || "/" === e
            ? t.post("site/children", s)
            : t.post("pages/" + this.id(e) + "/children", s);
        },
        async delete(e, s) {
          return t.delete("pages/" + this.id(e), s);
        },
        async duplicate(e, s, i) {
          return t.post("pages/" + this.id(e) + "/duplicate", {
            slug: s,
            children: i.children || !1,
            files: i.files || !1,
          });
        },
        async get(e, s) {
          let i = await t.get("pages/" + this.id(e), s);
          return !0 === Array.isArray(i.content) && (i.content = {}), i;
        },
        id(t) {
          return t.replace(/\//g, "+");
        },
        async files(e, s) {
          return t.post("pages/" + this.id(e) + "/files/search", s);
        },
        link(t) {
          return "/" + this.url(t);
        },
        async options(e, s = "view", i = !0) {
          const n = await t.get(this.url(e), { select: "options" }),
            a = n.options;
          let r = [];
          return (
            "list" === s &&
              (r.push({
                click: "preview",
                icon: "open",
                text: I["a"].i18n.translate("open"),
                disabled: !1 === a.preview,
              }),
              r.push("-")),
            r.push({
              click: "rename",
              icon: "title",
              text: I["a"].i18n.translate("rename"),
              disabled: !a.changeTitle,
            }),
            r.push({
              click: "duplicate",
              icon: "copy",
              text: I["a"].i18n.translate("duplicate"),
              disabled: !a.duplicate,
            }),
            r.push("-"),
            r.push({
              click: "url",
              icon: "url",
              text: I["a"].i18n.translate("page.changeSlug"),
              disabled: !a.changeSlug,
            }),
            r.push({
              click: "status",
              icon: "preview",
              text: I["a"].i18n.translate("page.changeStatus"),
              disabled: !a.changeStatus,
            }),
            "list" === s &&
              r.push({
                click: "sort",
                icon: "sort",
                text: I["a"].i18n.translate("page.sort"),
                disabled: !(a.sort && i),
              }),
            r.push({
              click: "template",
              icon: "template",
              text: I["a"].i18n.translate("page.changeTemplate"),
              disabled: !a.changeTemplate,
            }),
            r.push("-"),
            r.push({
              click: "remove",
              icon: "trash",
              text: I["a"].i18n.translate("delete"),
              disabled: !a.delete,
            }),
            r
          );
        },
        async preview(t) {
          const e = await this.get(this.id(t), { select: "previewUrl" });
          return e.previewUrl;
        },
        async search(e, s) {
          return e
            ? t.post(
                "pages/" +
                  this.id(e) +
                  "/children/search?select=id,title,hasChildren",
                s
              )
            : t.post("site/children/search?select=id,title,hasChildren", s);
        },
        async update(e, s) {
          return t.patch("pages/" + this.id(e), s);
        },
        url(t, e) {
          let s = null === t ? "pages" : "pages/" + t.replace(/\//g, "+");
          return e && (s += "/" + e), s;
        },
      }),
      D = (t) => ({
        running: 0,
        async request(e, s, i = !1) {
          (s = Object.assign(s || {}, {
            credentials: "same-origin",
            cache: "no-store",
            headers: {
              "x-requested-with": "xmlhttprequest",
              "content-type": "application/json",
              ...s.headers,
            },
          })),
            t.methodOverwrite &&
              "GET" !== s.method &&
              "POST" !== s.method &&
              ((s.headers["x-http-method-override"] = s.method),
              (s.method = "POST")),
            (s = t.onPrepare(s));
          const n = e + "/" + JSON.stringify(s);
          t.onStart(n, i), this.running++;
          const a = await fetch(
              [t.endpoint, e].join(
                t.endpoint.endsWith("/") || e.startsWith("/") ? "" : "/"
              ),
              s
            ),
            r = await a.text();
          try {
            let e;
            try {
              e = JSON.parse(r);
            } catch (o) {
              return void t.onParserError(r);
            }
            if (a.status < 200 || a.status > 299) throw e;
            if (e.status && "error" === e.status) throw e;
            let s = e;
            return (
              e.data && e.type && "model" === e.type && (s = e.data),
              this.running--,
              t.onComplete(n),
              t.onSuccess(e),
              s
            );
          } catch (o) {
            throw (this.running--, t.onComplete(n), t.onError(o), o);
          }
        },
        async get(t, e, s, i = !1) {
          return (
            e &&
              (t +=
                "?" +
                Object.keys(e)
                  .filter((t) => void 0 !== e[t] && null !== e[t])
                  .map((t) => t + "=" + e[t])
                  .join("&")),
            this.request(t, Object.assign(s || {}, { method: "GET" }), i)
          );
        },
        async post(t, e, s, i = "POST", n = !1) {
          return this.request(
            t,
            Object.assign(s || {}, { method: i, body: JSON.stringify(e) }),
            n
          );
        },
        async patch(t, e, s, i = !1) {
          return this.post(t, e, s, "PATCH", i);
        },
        async delete(t, e, s, i = !1) {
          return this.post(t, e, s, "DELETE", i);
        },
      }),
      N = (t) => ({
        async list(e) {
          return t.get("roles", e);
        },
        async get(e) {
          return t.get("roles/" + e);
        },
        async options(t) {
          const e = await this.list(t);
          return e.data.map((t) => ({
            info:
              t.description ||
              `(${I["a"].i18n.translate("role.description.placeholder")})`,
            text: t.title,
            value: t.name,
          }));
        },
      }),
      P = (t) => ({
        async get(e = { view: "panel" }) {
          return t.get("system", e);
        },
        async install(e) {
          const s = await t.post("system/install", e);
          return s.user;
        },
        async register(e) {
          return t.post("system/register", e);
        },
      }),
      R = (t) => ({
        async blueprint() {
          return t.get("site/blueprint");
        },
        async blueprints() {
          return t.get("site/blueprints");
        },
        async changeTitle(e) {
          return t.patch("site/title", { title: e });
        },
        async children(e) {
          return t.post("site/children/search", e);
        },
        async get(e = { view: "panel" }) {
          return t.get("site", e);
        },
        async options() {
          const e = await t.get("site", { select: "options" }),
            s = e.options;
          let i = [];
          return (
            i.push({
              click: "rename",
              icon: "title",
              text: I["a"].i18n.translate("rename"),
              disabled: !s.changeTitle,
            }),
            i
          );
        },
        async update(e) {
          return t.post("site", e);
        },
      }),
      q = (t) => ({
        async list() {
          return t.get("translations");
        },
        async get(e) {
          return t.get("translations/" + e);
        },
        async options() {
          const t = await this.list(),
            e = t.data.map((t) => ({ value: t.id, text: t.name }));
          return e;
        },
      }),
      F = (t) => ({
        async blueprint(e) {
          return t.get("users/" + e + "/blueprint");
        },
        async blueprints(e, s) {
          return t.get("users/" + e + "/blueprints", { section: s });
        },
        breadcrumb(t) {
          return [{ link: "/users/" + t.id, label: t.username }];
        },
        async changeEmail(e, s) {
          return t.patch("users/" + e + "/email", { email: s });
        },
        async changeLanguage(e, s) {
          return t.patch("users/" + e + "/language", { language: s });
        },
        async changeName(e, s) {
          return t.patch("users/" + e + "/name", { name: s });
        },
        async changePassword(e, s) {
          return t.patch("users/" + e + "/password", { password: s });
        },
        async changeRole(e, s) {
          return t.patch("users/" + e + "/role", { role: s });
        },
        async create(e) {
          return t.post("users", e);
        },
        async delete(e) {
          return t.delete("users/" + e);
        },
        async deleteAvatar(e) {
          return t.delete("users/" + e + "/avatar");
        },
        link(t, e) {
          return "/" + this.url(t, e);
        },
        async list(e) {
          return t.post(this.url(null, "search"), e);
        },
        async get(e, s) {
          return t.get("users/" + e, s);
        },
        async options(e) {
          const s = await t.get(this.url(e), { select: "options" }),
            i = s.options;
          let n = [];
          return (
            n.push({
              click: "rename",
              icon: "title",
              text: I["a"].i18n.translate("user.changeName"),
              disabled: !i.changeName,
            }),
            n.push({
              click: "email",
              icon: "email",
              text: I["a"].i18n.translate("user.changeEmail"),
              disabled: !i.changeEmail,
            }),
            n.push({
              click: "role",
              icon: "bolt",
              text: I["a"].i18n.translate("user.changeRole"),
              disabled: !i.changeRole,
            }),
            n.push({
              click: "password",
              icon: "key",
              text: I["a"].i18n.translate("user.changePassword"),
              disabled: !i.changePassword,
            }),
            n.push({
              click: "language",
              icon: "globe",
              text: I["a"].i18n.translate("user.changeLanguage"),
              disabled: !i.changeLanguage,
            }),
            n.push({
              click: "remove",
              icon: "trash",
              text: I["a"].i18n.translate("user.delete"),
              disabled: !i.delete,
            }),
            n
          );
        },
        async roles(e) {
          const s = await t.get(this.url(e, "roles"));
          return s.data.map((t) => ({
            info:
              t.description ||
              `(${I["a"].i18n.translate("role.description.placeholder")})`,
            text: t.title,
            value: t.name,
          }));
        },
        async search(e) {
          return t.post("users/search", e);
        },
        async update(e, s) {
          return t.patch("users/" + e, s);
        },
        url(t, e) {
          let s = t ? "users/" + t : "users";
          return e && (s += "/" + e), s;
        },
      }),
      U = (t = {}) => {
        const e = {
            endpoint: "/api",
            methodOverwrite: !0,
            onPrepare(t) {
              return t;
            },
            onStart() {},
            onComplete() {},
            onSuccess() {},
            onError(t) {
              throw (window.console.log(t.message), t);
            },
          },
          s = { ...e, ...(t.config || {}) };
        let i = { ...s, ...D(s), ...t };
        return (
          (i.auth = L(i)),
          (i.files = A(i)),
          (i.languages = B(i)),
          (i.pages = M(i)),
          (i.roles = N(i)),
          (i.system = P(i)),
          (i.site = R(i)),
          (i.translations = q(i)),
          (i.users = F(i)),
          (i.files.rename = i.files.changeName),
          (i.pages.slug = i.pages.changeSlug),
          (i.pages.status = i.pages.changeStatus),
          (i.pages.template = i.pages.changeTemplate),
          (i.pages.title = i.pages.changeTitle),
          (i.site.title = i.site.changeTitle),
          (i.system.info = i.system.get),
          i
        );
      },
      H = {
        install(t, e) {
          (t.prototype.$api = t.$api =
            U({
              config: {
                endpoint: O.api,
                onComplete: (s) => {
                  (t.$api.requests = t.$api.requests.filter((t) => t !== s)),
                    0 === t.$api.requests.length && e.dispatch("isLoading", !1);
                },
                onError: (t) => {
                  O.debug && window.console.error(t),
                    403 !== t.code ||
                      ("Unauthenticated" !== t.message &&
                        "access.panel" !== t.key) ||
                      e.dispatch("user/logout", !0);
                },
                onParserError: (t) => {
                  throw (
                    (e.dispatch("fatal", t),
                    new Error(
                      "The JSON response from the API could not be parsed"
                    ))
                  );
                },
                onPrepare: (t) => (
                  e.state.languages.current &&
                    (t.headers["x-language"] = e.state.languages.current.code),
                  (t.headers["x-csrf"] = window.panel.csrf),
                  t
                ),
                onStart: (s, i = !1) => {
                  !1 === i && e.dispatch("isLoading", !0),
                    t.$api.requests.push(s);
                },
                onSuccess: () => {
                  clearInterval(t.$api.ping),
                    (t.$api.ping = setInterval(t.$api.auth.user, 3e5));
                },
              },
              ping: null,
              requests: [],
            })),
            (t.$api.ping = setInterval(t.$api.auth.user, 3e5));
        },
      },
      z = {
        install(t) {
          t.filter("t", function (t) {
            return t;
          });
        },
      },
      K = {
        install(t) {
          t.prototype.$events = new t({
            data() {
              return { entered: null };
            },
            created() {
              window.addEventListener("online", this.online),
                window.addEventListener("offline", this.offline),
                window.addEventListener("dragenter", this.dragenter, !1),
                window.addEventListener("dragover", this.prevent, !1),
                window.addEventListener("dragexit", this.prevent, !1),
                window.addEventListener("dragleave", this.dragleave, !1),
                window.addEventListener("drop", this.drop, !1),
                window.addEventListener("keydown", this.keydown, !1),
                window.addEventListener("keyup", this.keyup, !1),
                document.addEventListener("click", this.click, !1);
            },
            destroyed() {
              window.removeEventListener("online", this.online),
                window.removeEventListener("offline", this.offline),
                window.removeEventListener("dragenter", this.dragenter, !1),
                window.removeEventListener("dragover", this.prevent, !1),
                window.removeEventListener("dragexit", this.prevent, !1),
                window.removeEventListener("dragleave", this.dragleave, !1),
                window.removeEventListener("drop", this.drop, !1),
                window.removeEventListener("keydown", this.keydown, !1),
                window.removeEventListener("keyup", this.keyup, !1),
                document.removeEventListener("click", this.click, !1);
            },
            methods: {
              click(t) {
                this.$emit("click", t);
              },
              drop(t) {
                this.prevent(t), this.$emit("drop", t);
              },
              dragenter(t) {
                (this.entered = t.target),
                  this.prevent(t),
                  this.$emit("dragenter", t);
              },
              dragleave(t) {
                this.prevent(t),
                  this.entered === t.target && this.$emit("dragleave", t);
              },
              keydown(t) {
                let e = ["keydown"];
                (t.metaKey || t.ctrlKey) && e.push("cmd"),
                  !0 === t.altKey && e.push("alt"),
                  !0 === t.shiftKey && e.push("shift");
                let s = this.$helper.string.lcfirst(t.key);
                const i = {
                  escape: "esc",
                  arrowUp: "up",
                  arrowDown: "down",
                  arrowLeft: "left",
                  arrowRight: "right",
                };
                i[s] && (s = i[s]),
                  !1 === ["alt", "control", "shift", "meta"].includes(s) &&
                    e.push(s),
                  this.$emit(e.join("."), t),
                  this.$emit("keydown", t);
              },
              keyup(t) {
                this.$emit("keyup", t);
              },
              online(t) {
                this.$emit("online", t);
              },
              offline(t) {
                this.$emit("offline", t);
              },
              prevent(t) {
                t.stopPropagation(), t.preventDefault();
              },
            },
          });
        },
      },
      G = s("1dce"),
      W = s.n(G),
      Y = function (t) {
        if (void 0 !== t) return JSON.parse(JSON.stringify(t));
      },
      V = (t, e) => {
        var s = null;
        return function () {
          var i = this,
            n = arguments;
          clearTimeout(s),
            (s = setTimeout(function () {
              t.apply(i, n);
            }, e));
        };
      },
      J = (t) => void 0 !== I["a"].options.components[t],
      Z = (t) =>
        !!t.dataTransfer &&
        !!t.dataTransfer.types &&
        !0 === t.dataTransfer.types.includes("Files") &&
        !1 === t.dataTransfer.types.includes("text/plain"),
      X = (t, e) => {
        t = String(t);
        let s = "";
        e = (e || 2) - t.length;
        while (s.length < e) s += "0";
        return s + t;
      },
      Q = (t = "3/2") => {
        const e = String(t).split("/");
        if (2 !== e.length) return "100%";
        const s = Number(e[0]),
          i = Number(e[1]);
        let n = 100;
        return 0 !== s && 0 !== i && (n = (100 / s) * i), n + "%";
      },
      tt =
        (s("86c7"),
        (t, e = [], s = "") => {
          const i = "-";
          return (
            (s = "a-z0-9" + s),
            (t = t.trim().toLowerCase()),
            e.forEach((e) => {
              e &&
                Object.keys(e).forEach((s) => {
                  const i = "/" !== s.substr(0, 1),
                    n = s.substring(1, s.length - 1),
                    a = i ? s : n;
                  t = t.replace(new RegExp(RegExp.escape(a), "g"), e[s]);
                });
            }),
            (t = t.replace("/[^\t\n\r -~]/", "")),
            (t = t.replace(new RegExp("[^" + s + "]", "ig"), i)),
            (t = t.replace(
              new RegExp("[" + RegExp.escape(i) + "]{2,}", "g"),
              i
            )),
            (t = t.replace("/", i)),
            (t = t.replace(new RegExp("^[^" + s + "]+", "g"), "")),
            (t = t.replace(new RegExp("[^" + s + "]+$", "g"), "")),
            t
          );
        }),
      et = (t) => {
        t = t || {};
        var e = t.desc ? -1 : 1,
          s = -e,
          i = /^0/,
          n = /\s+/g,
          a = /^\s+|\s+$/g,
          r = /[^\x00-\x80]/,
          o = /^0x[0-9a-f]+$/i,
          l =
            /(0x[\da-fA-F]+|(^[\+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|\d+)/g,
          c =
            /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
          u = t.insensitive
            ? function (t) {
                return d("" + t).replace(a, "");
              }
            : function (t) {
                return ("" + t).replace(a, "");
              };
        function d(t) {
          return t.toLocaleLowerCase ? t.toLocaleLowerCase() : t.toLowerCase();
        }
        function p(t) {
          return t
            .replace(l, "\0$1\0")
            .replace(/\0$/, "")
            .replace(/^\0/, "")
            .split("\0");
        }
        function h(t, e) {
          return (
            ((!t.match(i) || 1 === e) && parseFloat(t)) ||
            t.replace(n, " ").replace(a, "") ||
            0
          );
        }
        return function (t, i) {
          var n = u(t),
            a = u(i);
          if (!n && !a) return 0;
          if (!n && a) return s;
          if (n && !a) return e;
          var l = p(n),
            d = p(a),
            m = parseInt(n.match(o), 16) || (1 !== l.length && Date.parse(n)),
            f =
              parseInt(a.match(o), 16) ||
              (m && a.match(c) && Date.parse(a)) ||
              null;
          if (f) {
            if (m < f) return s;
            if (m > f) return e;
          }
          for (
            var g = l.length, b = d.length, k = 0, v = Math.max(g, b);
            k < v;
            k++
          ) {
            var $ = h(l[k] || "", g),
              y = h(d[k] || "", b);
            if (isNaN($) !== isNaN(y)) return isNaN($) ? e : s;
            if (r.test($ + y) && $.localeCompare) {
              var _ = $.localeCompare(y);
              if (_ > 0) return e;
              if (_ < 0) return s;
              if (k === v - 1) return 0;
            } else {
              if ($ < y) return s;
              if ($ > y) return e;
            }
          }
          return 0;
        };
      },
      st = {
        camelToKebab(t) {
          return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        },
        escapeHTML(t) {
          const e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;",
          };
          return String(t).replace(/[&<>"'`=/]/g, (t) => e[t]);
        },
        hasEmoji(t) {
          if ("string" !== typeof t) return !1;
          const e = t.match(
            /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c\ude32-\ude3a]|[\ud83c\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/i
          );
          return null !== e && null !== e.length;
        },
        lcfirst(t) {
          const e = String(t);
          return e.charAt(0).toLowerCase() + e.substr(1);
        },
        random(t) {
          let e = "";
          const s =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            i = s.length;
          for (var n = 0; n < t; n++)
            e += s.charAt(Math.floor(Math.random() * i));
          return e;
        },
        stripHTML(t) {
          const e = String(t);
          return e.replace(/(<([^>]+)>)/gi, "");
        },
        template(t, e = {}) {
          const s = "{{[ ]{0,}",
            i = "[ ]{0,}}}";
          return (
            Object.keys(e).forEach((n) => {
              (t = t.replace(new RegExp(`${s}${n}${i}`, "gi"), e[n] || "…")),
                !0 === Array.isArray(e[n]) &&
                  (t = t.replace(
                    new RegExp(`${s}${n}.count${i}|${s}${n}.length${i}`, "gi"),
                    e[n].length || 0
                  ));
            }),
            t.replace(/{{.*}}/gi, "…")
          );
        },
        ucfirst(t) {
          const e = String(t);
          return e.charAt(0).toUpperCase() + e.substr(1);
        },
        ucwords(t) {
          const e = String(t);
          return e
            .split(/ /g)
            .map((t) => this.ucfirst(t))
            .join(" ");
        },
      },
      it = (t, e) => {
        const s = {
            url: "/",
            field: "file",
            method: "POST",
            accept: "text",
            attributes: {},
            complete: function () {},
            error: function () {},
            success: function () {},
            progress: function () {},
          },
          i = Object.assign(s, e),
          n = new FormData();
        n.append(i.field, t, t.name),
          i.attributes &&
            Object.keys(i.attributes).forEach((t) => {
              n.append(t, i.attributes[t]);
            });
        const a = new XMLHttpRequest(),
          r = (e) => {
            if (!e.lengthComputable || !i.progress) return;
            let s = Math.max(0, Math.min(100, (e.loaded / e.total) * 100));
            i.progress(a, t, Math.ceil(s));
          };
        a.upload.addEventListener("loadstart", r),
          a.upload.addEventListener("progress", r),
          a.addEventListener("load", (e) => {
            let s = null;
            try {
              s = JSON.parse(e.target.response);
            } catch (n) {
              s = {
                status: "error",
                message: "The file could not be uploaded",
              };
            }
            s.status && "error" === s.status
              ? i.error(a, t, s)
              : (i.success(a, t, s), i.progress(a, t, 100));
          }),
          a.addEventListener("error", (e) => {
            const s = JSON.parse(e.target.response);
            i.error(a, t, s), i.progress(a, t, 100);
          }),
          a.open("POST", i.url, !0),
          i.headers &&
            Object.keys(i.headers).forEach((t) => {
              const e = i.headers[t];
              a.setRequestHeader(t, e);
            }),
          a.send(n);
      },
      nt = function () {
        var t,
          e,
          s = "";
        for (t = 0; t < 32; t++)
          (e = (16 * Math.random()) | 0),
            (8 != t && 12 != t && 16 != t && 20 != t) || (s += "-"),
            (s += (12 == t ? 4 : 16 == t ? (3 & e) | 8 : e).toString(16));
        return s;
      },
      at = {
        datetime(t, e, s, i, n = "day") {
          let a = t.$library.dayjs.utc(e);
          return (
            a.isValid() || (a = t.$library.dayjs.utc(e, "HH:mm:ss")),
            s
              ? !e ||
                !a.isValid() ||
                ((s = t.$library.dayjs.utc(s)), a.isSame(s, n) || a[i](s, n))
              : e && a.isValid()
          );
        },
      },
      rt = {
        install(t) {
          (Array.prototype.sortBy = function (e) {
            const s = t.prototype.$helper.sort(),
              i = e.split(" "),
              n = i[0],
              a = i[1] || "asc";
            return this.sort((t, e) => {
              const i = String(t[n]).toLowerCase(),
                r = String(e[n]).toLowerCase();
              return "desc" === a ? s(r, i) : s(i, r);
            });
          }),
            (t.prototype.$helper = {
              clone: Y,
              isComponent: J,
              isUploadEvent: Z,
              debounce: V,
              pad: X,
              ratio: Q,
              slug: tt,
              sort: et,
              string: st,
              upload: it,
              uuid: nt,
              validate: at,
            }),
            (t.prototype.$esc = st.escapeHTML);
        },
      },
      ot = (s("64e4"), {}),
      lt = Object(c["a"])(ot, y, _, !1, null, null, null),
      ct =
        (lt.exports,
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "k-overlay",
            {
              ref: "overlay",
              attrs: { autofocus: t.autofocus, centered: !0 },
              on: {
                ready: function (e) {
                  return t.$emit("ready");
                },
              },
            },
            [
              s(
                "div",
                {
                  ref: "dialog",
                  staticClass: "k-dialog",
                  class: t.$vnode.data.staticClass,
                  attrs: { "data-size": t.size },
                  on: {
                    mousedown: function (t) {
                      t.stopPropagation();
                    },
                  },
                },
                [
                  t.notification
                    ? s(
                        "div",
                        {
                          staticClass: "k-dialog-notification",
                          attrs: { "data-theme": t.notification.type },
                        },
                        [
                          s("p", [t._v(t._s(t.notification.message))]),
                          s("k-button", {
                            attrs: { icon: "cancel" },
                            on: {
                              click: function (e) {
                                t.notification = null;
                              },
                            },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                  s(
                    "div",
                    { staticClass: "k-dialog-body" },
                    [t._t("default")],
                    2
                  ),
                  t.$slots["footer"] || t.cancelButton || t.submitButton
                    ? s(
                        "footer",
                        { staticClass: "k-dialog-footer" },
                        [
                          t._t("footer", [
                            s("k-button-group", [
                              s(
                                "span",
                                [
                                  t.cancelButton
                                    ? s(
                                        "k-button",
                                        {
                                          staticClass: "k-dialog-button-cancel",
                                          attrs: { icon: "cancel" },
                                          on: { click: t.cancel },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(t.cancelButtonLabel) +
                                              " "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                              s(
                                "span",
                                [
                                  t.submitButtonConfig
                                    ? s(
                                        "k-button",
                                        {
                                          staticClass: "k-dialog-button-submit",
                                          attrs: {
                                            icon: t.icon,
                                            theme: t.theme,
                                          },
                                          on: { click: t.submit },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(t.submitButtonLabel) +
                                              " "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ],
                        2
                      )
                    : t._e(),
                ]
              ),
            ]
          );
        }),
      ut = [],
      dt = {
        props: {
          autofocus: { type: Boolean, default: !0 },
          cancelButton: { type: [String, Boolean], default: !0 },
          icon: { type: String, default: "check" },
          size: { type: String, default: "default" },
          submitButton: { type: [String, Boolean], default: !0 },
          theme: String,
          visible: Boolean,
        },
        data() {
          return { notification: null };
        },
        computed: {
          cancelButtonLabel() {
            return (
              !1 !== this.cancelButton &&
              (!0 === this.cancelButton || 0 === this.cancelButton.length
                ? this.$t("cancel")
                : this.cancelButton)
            );
          },
          submitButtonConfig() {
            return void 0 !== this.$attrs["button"]
              ? this.$attrs["button"]
              : void 0 === this.submitButton || this.submitButton;
          },
          submitButtonLabel() {
            return !0 === this.submitButton || 0 === this.submitButton.length
              ? this.$t("confirm")
              : this.submitButton;
          },
        },
        created() {
          this.$events.$on("keydown.esc", this.close, !1);
        },
        destroyed() {
          this.$events.$off("keydown.esc", this.close, !1);
        },
        mounted() {
          this.visible && this.$nextTick(this.open);
        },
        methods: {
          open() {
            this.$store.dispatch("dialog", !0),
              (this.notification = null),
              this.$refs.overlay.open(),
              this.$emit("open"),
              this.$events.$on("keydown.esc", this.close);
          },
          close() {
            (this.notification = null),
              this.$refs.overlay && this.$refs.overlay.close(),
              this.$emit("close"),
              this.$events.$off("keydown.esc", this.close),
              this.$store.dispatch("dialog", !1);
          },
          cancel() {
            this.$emit("cancel"), this.close();
          },
          focus() {
            if (this.$refs.dialog && this.$refs.dialog.querySelector) {
              const t = this.$refs.dialog.querySelector(
                ".k-dialog-button-cancel"
              );
              t && "function" === typeof t.focus && t.focus();
            }
          },
          error(t) {
            this.notification = { message: t, type: "error" };
          },
          submit() {
            this.$emit("submit");
          },
          success(t) {
            this.notification = { message: t, type: "success" };
          },
        },
      },
      pt = dt,
      ht = (s("a5f3"), Object(c["a"])(pt, ct, ut, !1, null, null, null)),
      mt = ht.exports,
      ft = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.notification
          ? s(
              "k-dialog",
              {
                ref: "dialog",
                staticClass: "k-error-dialog",
                attrs: { "cancel-button": !1, visible: !0 },
                on: {
                  close: t.exit,
                  submit: function (e) {
                    return t.$refs.dialog.close();
                  },
                },
              },
              [
                s("k-text", [t._v(t._s(t.notification.message))]),
                t.notification.details &&
                Object.keys(t.notification.details).length
                  ? s(
                      "dl",
                      { staticClass: "k-error-details" },
                      [
                        t._l(t.notification.details, function (e, i) {
                          return [
                            s("dt", { key: "detail-label-" + i }, [
                              t._v(" " + t._s(e.label) + " "),
                            ]),
                            s(
                              "dd",
                              { key: "detail-message-" + i },
                              [
                                "object" === typeof e.message
                                  ? [
                                      s(
                                        "ul",
                                        t._l(e.message, function (e, i) {
                                          return s("li", { key: i }, [
                                            t._v(" " + t._s(e) + " "),
                                          ]);
                                        }),
                                        0
                                      ),
                                    ]
                                  : [t._v(" " + t._s(e.message) + " ")],
                              ],
                              2
                            ),
                          ];
                        }),
                      ],
                      2
                    )
                  : t._e(),
              ],
              1
            )
          : t._e();
      },
      gt = [],
      bt = {
        mixins: [m],
        computed: {
          notification() {
            let t = this.$store.state.notification;
            return "error" === t.type ? t : null;
          },
        },
        methods: {
          enter() {
            this.$nextTick(() => {
              this.$el &&
                this.$el.querySelector &&
                this.$el.querySelector(".k-dialog-footer .k-button").focus();
            });
          },
          exit() {
            this.$store.dispatch("notification/close");
          },
        },
      },
      kt = bt,
      vt = (s("7737"), Object(c["a"])(kt, ft, gt, !1, null, null, null)),
      $t = vt.exports,
      yt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-remove-dialog", {
          ref: "dialog",
          attrs: {
            text: t.$t("file.delete.confirm", { filename: t.$esc(t.filename) }),
          },
          on: { submit: t.submit },
        });
      },
      _t = [],
      wt = {
        mixins: [m],
        data() {
          return { id: null, parent: null, filename: null };
        },
        methods: {
          async open(t, e) {
            try {
              const s = await this.$api.files.get(t, e);
              (this.id = s.id),
                (this.filename = s.filename),
                (this.parent = t),
                this.$refs.dialog.open();
            } catch (s) {
              this.$store.dispatch("notification/error", s);
            }
          },
          async submit() {
            try {
              await this.$api.files.delete(this.parent, this.filename),
                this.$store.dispatch("content/remove", "files/" + this.id),
                this.$store.dispatch("notification/success", ":)"),
                this.$events.$emit("file.delete", this.id),
                this.$emit("success"),
                this.$refs.dialog.close();
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      xt = wt,
      Ot = Object(c["a"])(xt, yt, _t, !1, null, null, null),
      Ct = Ot.exports,
      St = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("rename") },
          on: {
            input: function (e) {
              t.file.name = t.sluggify(t.file.name);
            },
            submit: t.submit,
          },
          model: {
            value: t.file,
            callback: function (e) {
              t.file = e;
            },
            expression: "file",
          },
        });
      },
      Et = [],
      jt = {
        mixins: [m],
        data() {
          return {
            parent: null,
            file: { id: null, name: null, filename: null, extension: null },
          };
        },
        computed: {
          fields() {
            return {
              name: {
                label: this.$t("name"),
                type: "text",
                required: !0,
                icon: "title",
                after: "." + this.file.extension,
                preselect: !0,
              },
            };
          },
          slugs() {
            return this.$store.state.languages.default
              ? this.$store.state.languages.default.rules
              : this.system.slugs;
          },
          system() {
            return this.$store.state.system.info;
          },
        },
        methods: {
          async open(t, e) {
            try {
              (this.file = await this.$api.files.get(t, e, {
                select: ["id", "filename", "name", "extension"],
              })),
                (this.parent = t),
                this.$refs.dialog.open();
            } catch (s) {
              this.$store.dispatch("notification/error", s);
            }
          },
          sluggify(t) {
            return this.$helper.slug(
              t,
              [this.slugs, this.system.ascii],
              "@._-"
            );
          },
          async submit() {
            if (
              ((this.file.name = this.file.name.trim()),
              0 !== this.file.name.length)
            )
              try {
                const t = await this.$api.files.changeName(
                  this.parent,
                  this.file.filename,
                  this.file.name
                );
                this.$store.dispatch("content/move", [
                  "files/" + this.file.id,
                  "files/" + t.id,
                ]),
                  this.$store.dispatch("notification/success", ":)"),
                  this.$emit("success", t),
                  this.$events.$emit("file.changeName", t),
                  this.$refs.dialog.close();
              } catch (t) {
                this.$refs.dialog.error(t.message);
              }
            else
              this.$refs.dialog.error(this.$t("error.file.changeName.empty"));
          },
        },
      },
      Tt = jt,
      Lt = Object(c["a"])(Tt, St, Et, !1, null, null, null),
      It = Lt.exports,
      At = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("change") },
          on: { submit: t.submit },
          model: {
            value: t.form,
            callback: function (e) {
              t.form = e;
            },
            expression: "form",
          },
        });
      },
      Bt = [],
      Mt = {
        mixins: [m],
        data() {
          return {
            file: { id: null },
            form: { position: null },
            siblings: [],
            api: null,
          };
        },
        computed: {
          fields() {
            return {
              position: {
                name: "position",
                label: this.$t("file.sort"),
                type: "select",
                empty: !1,
                options: this.sortingOptions,
              },
            };
          },
          sortingOptions() {
            let t = [],
              e = 0;
            return (
              this.siblings.forEach((s) => {
                if (s.id === this.file.id || s.num < 1) return !1;
                e++,
                  t.push({ value: e, text: e }),
                  t.push({ value: s.id, text: s.filename, disabled: !0 });
              }),
              t.push({ value: e + 1, text: e + 1 }),
              t
            );
          },
        },
        methods: {
          async open(t, e, s) {
            try {
              this.file = e;
              const i = await this.$api.post(t + "/files/search");
              (this.siblings = i.data),
                (this.form.position =
                  this.siblings.findIndex((t) => t.id === e.id) + 1),
                (this.api = s),
                this.$refs.dialog.open();
            } catch (i) {
              this.$store.dispatch("notification/error", i);
            }
          },
          async submit() {
            try {
              const t = this.siblings.findIndex((t) => t.id === this.file.id),
                e = this.form.position - 1,
                s = this.$helper.clone(this.siblings);
              s.splice(t, 1),
                s.splice(e, 0, this.file),
                await this.$api.patch(this.api + "/files/sort", {
                  files: s.map((t) => t.id),
                  index: 0,
                }),
                this.success({ message: ":)", event: "file.sort" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Dt = Mt,
      Nt = Object(c["a"])(Dt, At, Bt, !1, null, null, null),
      Pt = Nt.exports,
      Rt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-files-dialog",
            attrs: { size: "medium" },
            on: {
              cancel: function (e) {
                return t.$emit("cancel");
              },
              submit: t.submit,
            },
          },
          [
            t.issue
              ? [
                  s("k-box", {
                    attrs: { text: t.issue, html: !1, theme: "negative" },
                  }),
                ]
              : [
                  t.options.search
                    ? s("k-input", {
                        staticClass: "k-dialog-search",
                        attrs: {
                          autofocus: !0,
                          placeholder: t.$t("search") + " …",
                          type: "text",
                          icon: "search",
                        },
                        model: {
                          value: t.search,
                          callback: function (e) {
                            t.search = e;
                          },
                          expression: "search",
                        },
                      })
                    : t._e(),
                  t.models.length
                    ? [
                        s(
                          "k-list",
                          t._l(t.models, function (e) {
                            return s(
                              "k-list-item",
                              {
                                key: e.id,
                                attrs: {
                                  text: e.text,
                                  info: e.info,
                                  image: e.image,
                                  icon: e.icon,
                                },
                                on: {
                                  click: function (s) {
                                    return t.toggle(e);
                                  },
                                },
                              },
                              [
                                t.isSelected(e)
                                  ? s("k-button", {
                                      attrs: {
                                        slot: "options",
                                        autofocus: !0,
                                        icon: t.checkedIcon,
                                        tooltip: t.$t("remove"),
                                        theme: "positive",
                                      },
                                      slot: "options",
                                    })
                                  : s("k-button", {
                                      attrs: {
                                        slot: "options",
                                        autofocus: !0,
                                        tooltip: t.$t("select"),
                                        icon: "circle-outline",
                                      },
                                      slot: "options",
                                    }),
                              ],
                              1
                            );
                          }),
                          1
                        ),
                        s(
                          "k-pagination",
                          t._b(
                            {
                              staticClass: "k-dialog-pagination",
                              attrs: {
                                details: !0,
                                dropdown: !1,
                                align: "center",
                              },
                              on: { paginate: t.paginate },
                            },
                            "k-pagination",
                            t.pagination,
                            !1
                          )
                        ),
                      ]
                    : s("k-empty", { attrs: { icon: "image" } }, [
                        t._v(" " + t._s(t.$t("dialog.files.empty")) + " "),
                      ]),
                ],
          ],
          2
        );
      },
      qt = [],
      Ft = {
        data() {
          return {
            models: [],
            issue: null,
            selected: {},
            options: {
              endpoint: null,
              max: null,
              multiple: !0,
              parent: null,
              selected: [],
              search: !0,
            },
            search: null,
            pagination: { limit: 20, page: 1, total: 0 },
          };
        },
        computed: {
          multiple() {
            return !0 === this.options.multiple && 1 !== this.options.max;
          },
          checkedIcon() {
            return !0 === this.multiple ? "check" : "circle-filled";
          },
        },
        watch: {
          search() {
            this.updateSearch();
          },
        },
        created() {
          this.updateSearch = V(this.updateSearch, 200);
        },
        methods: {
          fetch() {
            const t = {
              page: this.pagination.page,
              search: this.search,
              ...(this.fetchData || {}),
            };
            return this.$api
              .get(this.options.endpoint, t)
              .then((t) => {
                (this.models = t.data),
                  (this.pagination = t.pagination),
                  this.onFetched && this.onFetched(t);
              })
              .catch((t) => {
                (this.models = []), (this.issue = t.message);
              });
          },
          open(t, e) {
            (this.pagination.page = 0), (this.search = null);
            let s = !0;
            Array.isArray(t)
              ? ((this.models = t), (s = !1))
              : ((this.models = []), (e = t)),
              (this.options = { ...this.options, ...e }),
              (this.selected = {}),
              this.options.selected.forEach((t) => {
                this.$set(this.selected, t, { id: t });
              }),
              s
                ? this.fetch().then(() => {
                    this.$refs.dialog.open();
                  })
                : this.$refs.dialog.open();
          },
          paginate(t) {
            (this.pagination.page = t.page),
              (this.pagination.limit = t.limit),
              this.fetch();
          },
          submit() {
            this.$emit("submit", Object.values(this.selected)),
              this.$refs.dialog.close();
          },
          isSelected(t) {
            return void 0 !== this.selected[t.id];
          },
          toggle(t) {
            (!1 !== this.options.multiple && 1 !== this.options.max) ||
              (this.selected = {}),
              !0 !== this.isSelected(t)
                ? (this.options.max &&
                    this.options.max <= Object.keys(this.selected).length) ||
                  this.$set(this.selected, t.id, t)
                : this.$delete(this.selected, t.id);
          },
          updateSearch() {
            (this.pagination.page = 0), this.fetch();
          },
        },
      },
      Ut = { mixins: [Ft] },
      Ht = Ut,
      zt = (s("bf53"), Object(c["a"])(Ht, Rt, qt, !1, null, null, null)),
      Kt = zt.exports,
      Gt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          t._g(t._b({ ref: "dialog" }, "k-dialog", t.$props, !1), t.$listeners),
          [
            s("k-form", {
              ref: "form",
              attrs: { fields: t.fields, novalidate: t.novalidate },
              on: {
                input: function (e) {
                  return t.$emit("input", e);
                },
                submit: function (e) {
                  return t.$emit("submit", e);
                },
              },
              model: {
                value: t.value,
                callback: function (e) {
                  t.value = e;
                },
                expression: "value",
              },
            }),
          ],
          1
        );
      },
      Wt = [],
      Yt = {
        mixins: [m],
        props: {
          fields: {
            type: [Array, Object],
            default() {
              return [];
            },
          },
          novalidate: { type: Boolean, default: !0 },
          size: { type: String, default: "medium" },
          submitButton: {
            type: [String, Boolean],
            default() {
              return this.$t("save");
            },
          },
          theme: { type: String, default: "positive" },
          value: {
            type: Object,
            default() {
              return {};
            },
          },
        },
      },
      Vt = Yt,
      Jt = Object(c["a"])(Vt, Gt, Wt, !1, null, null, null),
      Zt = Jt.exports,
      Xt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("language.create") },
          on: { submit: t.submit },
          model: {
            value: t.language,
            callback: function (e) {
              t.language = e;
            },
            expression: "language",
          },
        });
      },
      Qt = [],
      te = {
        mixins: [m],
        data() {
          return {
            language: { name: "", code: "", direction: "ltr", locale: "" },
          };
        },
        computed: {
          fields() {
            return {
              name: {
                label: this.$t("language.name"),
                type: "text",
                required: !0,
                icon: "title",
              },
              code: {
                label: this.$t("language.code"),
                type: "text",
                required: !0,
                counter: !1,
                icon: "globe",
                width: "1/2",
              },
              direction: {
                label: this.$t("language.direction"),
                type: "select",
                required: !0,
                empty: !1,
                options: [
                  { value: "ltr", text: this.$t("language.direction.ltr") },
                  { value: "rtl", text: this.$t("language.direction.rtl") },
                ],
                width: "1/2",
              },
              locale: { label: this.$t("language.locale"), type: "text" },
            };
          },
          system() {
            return this.$store.state.system.info;
          },
        },
        watch: {
          "language.name"(t) {
            this.onNameChanges(t);
          },
          "language.code"(t) {
            (this.language.code = this.$helper.slug(t, [this.system.ascii])),
              this.onCodeChanges(this.language.code);
          },
        },
        methods: {
          onCodeChanges(t) {
            if (!t) return (this.language.locale = null);
            if (t.length >= 2)
              if (-1 !== t.indexOf("-")) {
                let e = t.split("-"),
                  s = [e[0], e[1].toUpperCase()];
                this.language.locale = s.join("_");
              } else {
                let e = this.$store.state.system.info.locales || [];
                e && e[t]
                  ? (this.language.locale = e[t])
                  : (this.language.locale = null);
              }
          },
          onNameChanges(t) {
            this.language.code = this.$helper
              .slug(t, [this.language.rules, this.system.ascii])
              .substr(0, 2);
          },
          open() {
            (this.language = { name: "", code: "", direction: "ltr" }),
              this.$refs.dialog.open();
          },
          async submit() {
            this.language.locale &&
              (this.language.locale = this.language.locale.trim() || null);
            try {
              await this.$api.languages.create({
                name: this.language.name,
                code: this.language.code,
                direction: this.language.direction,
                locale: this.language.locale,
              }),
                this.$store.dispatch("languages/load"),
                this.success({ message: ":)", event: "language.create" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      ee = te,
      se = Object(c["a"])(ee, Xt, Qt, !1, null, null, null),
      ie = se.exports,
      ne = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-remove-dialog", {
          ref: "dialog",
          attrs: {
            text: t.$t("language.delete.confirm", {
              name: t.$esc(t.language.name),
            }),
          },
          on: { submit: t.submit },
        });
      },
      ae = [],
      re = {
        mixins: [m],
        data() {
          return { language: { name: null } };
        },
        methods: {
          async open(t) {
            try {
              (this.language = await this.$api.languages.get(t)),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              await this.$api.languages.delete(this.language.code),
                this.$store.dispatch("languages/load"),
                this.success({
                  message: this.$t("language.deleted"),
                  event: "language.delete",
                });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      oe = re,
      le = Object(c["a"])(oe, ne, ae, !1, null, null, null),
      ce = le.exports,
      ue = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, size: "medium" },
          on: { submit: t.submit },
          model: {
            value: t.language,
            callback: function (e) {
              t.language = e;
            },
            expression: "language",
          },
        });
      },
      de = [],
      pe = {
        mixins: [ie],
        computed: {
          fields() {
            let t = ie.computed.fields.apply(this);
            return (
              (t.code.disabled = !0),
              "object" === typeof this.language.locale &&
                (t.locale = {
                  label: t.locale.label,
                  type: "info",
                  text: this.$t("language.locale.warning"),
                }),
              t
            );
          },
        },
        methods: {
          onCodeChanges() {
            return !1;
          },
          onNameChanges() {
            return !1;
          },
          async open(t) {
            try {
              this.language = await this.$api.languages.get(t);
              const e = Object.keys(this.language.locale);
              1 === e.length &&
                (this.language.locale = this.language.locale[e[0]]),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            if (0 === this.language.name.length)
              return this.$refs.dialog.error(this.$t("error.language.name"));
            "string" === typeof this.language.locale &&
              (this.language.locale = this.language.locale.trim() || null);
            try {
              await this.$api.languages.update(this.language.code, {
                name: this.language.name,
                direction: this.language.direction,
                locale: this.language.locale,
              }),
                this.$store.dispatch("languages/load"),
                this.success({
                  message: this.$t("language.updated"),
                  event: "language.update",
                });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      he = pe,
      me = Object(c["a"])(he, ue, de, !1, null, null, null),
      fe = me.exports,
      ge = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: {
            fields: t.fields,
            "submit-button": t.$t("page.draft.create"),
          },
          on: { submit: t.submit, close: t.reset },
          model: {
            value: t.page,
            callback: function (e) {
              t.page = e;
            },
            expression: "page",
          },
        });
      },
      be = [],
      ke = {
        mixins: [m],
        data() {
          return {
            parent: null,
            section: null,
            templates: [],
            page: this.emptyForm(),
          };
        },
        computed: {
          fields() {
            let t = {
              title: {
                label: this.$t("title"),
                type: "text",
                required: !0,
                icon: "title",
              },
              slug: {
                label: this.$t("slug"),
                type: "text",
                required: !0,
                counter: !1,
                icon: "url",
              },
            };
            return (
              (this.templates.length > 1 || O.debug) &&
                (t.template = {
                  name: "template",
                  label: this.$t("template"),
                  type: "select",
                  disabled: 1 === this.templates.length,
                  required: !0,
                  icon: "code",
                  empty: !1,
                  options: this.templates,
                }),
              t
            );
          },
          slugs() {
            return this.$store.state.languages.default
              ? this.$store.state.languages.default.rules
              : this.system.slugs;
          },
          system() {
            return this.$store.state.system.info;
          },
        },
        watch: {
          "page.title"(t) {
            this.page.slug = this.$helper.slug(t, [
              this.slugs,
              this.system.ascii,
            ]);
          },
        },
        methods: {
          emptyForm() {
            return { title: "", slug: "", template: null };
          },
          async open(t, e, s) {
            (this.parent = t), (this.section = s);
            try {
              const t = await this.$api.get(e, { section: s });
              (this.templates = t.map((t) => ({
                value: t.name,
                text: t.title,
              }))),
                this.templates[0] &&
                  (this.page.template = this.templates[0].value),
                this.$refs.dialog.open();
            } catch (i) {
              this.$store.dispatch("notification/error", i);
            }
          },
          async submit() {
            if (
              ((this.page.title = this.page.title.trim()),
              0 === this.page.title.length)
            )
              return void this.$refs.dialog.error(
                this.$t("error.page.changeTitle.empty")
              );
            const t = {
              template: this.page.template,
              slug: this.page.slug,
              content: { title: this.page.title },
            };
            try {
              const e = await this.$api.post(this.parent + "/children", t);
              this.success({
                route: this.$api.pages.link(e.id),
                message: ":)",
                event: "page.create",
              });
            } catch (e) {
              this.$refs.dialog.error(e.message);
            }
          },
          reset() {
            this.page = this.emptyForm();
          },
        },
      },
      ve = ke,
      $e = Object(c["a"])(ve, ge, be, !1, null, null, null),
      ye = $e.exports,
      _e = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("duplicate") },
          on: { submit: t.submit },
          model: {
            value: t.page,
            callback: function (e) {
              t.page = e;
            },
            expression: "page",
          },
        });
      },
      we = [],
      xe = {
        mixins: [m],
        data() {
          return {
            page: {
              children: !1,
              files: !1,
              hasChildren: !1,
              hasDrafts: !1,
              hasFiles: !1,
              id: null,
              slug: "",
            },
          };
        },
        computed: {
          fields() {
            const t = this.page.hasChildren || this.page.hasDrafts,
              e = this.page.hasFiles;
            let s = {
              slug: {
                label: this.$t("slug"),
                type: "text",
                required: !0,
                counter: !1,
                spellcheck: !1,
                icon: "url",
              },
            };
            return (
              e &&
                (s.files = {
                  label: this.$t("page.duplicate.files"),
                  type: "toggle",
                  required: !0,
                  width: t ? "1/2" : null,
                }),
              t &&
                (s.children = {
                  label: this.$t("page.duplicate.pages"),
                  type: "toggle",
                  required: !0,
                  width: e ? "1/2" : null,
                }),
              s
            );
          },
          slugs() {
            return this.$store.state.languages.default
              ? this.$store.state.languages.default.rules
              : this.system.slugs;
          },
          system() {
            return this.$store.state.system.info;
          },
        },
        watch: {
          "page.slug"(t) {
            this.page.slug = this.$helper.slug(t, [
              this.slugs,
              this.system.ascii,
            ]);
          },
        },
        methods: {
          async open(t) {
            try {
              const e = await this.$api.pages.get(t, {
                language: "@default",
                select: "id,slug,hasChildren,hasDrafts,hasFiles,title",
              });
              (this.page.id = e.id),
                (this.page.slug =
                  e.slug +
                  "-" +
                  this.$helper.slug(this.$t("page.duplicate.appendix"))),
                (this.page.hasChildren = e.hasChildren),
                (this.page.hasDrafts = e.hasDrafts),
                (this.page.hasFiles = e.hasFiles),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              const t = await this.$api.pages.duplicate(
                this.page.id,
                this.page.slug,
                { children: this.page.children, files: this.page.files }
              );
              this.success({
                route: this.$api.pages.link(t.id),
                message: ":)",
                event: "page.duplicate",
              });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Oe = xe,
      Ce = Object(c["a"])(Oe, _e, we, !1, null, null, null),
      Se = Ce.exports,
      Ee = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-remove-dialog",
          {
            ref: "dialog",
            attrs: { size: t.hasSubpages ? "medium" : "small" },
            on: { submit: t.submit, close: t.reset },
          },
          [
            t.page.hasChildren || t.page.hasDrafts
              ? [
                  s("k-text", {
                    domProps: {
                      innerHTML: t._s(
                        t.$t("page.delete.confirm", {
                          title: t.$esc(t.page.title),
                        })
                      ),
                    },
                  }),
                  s(
                    "div",
                    { staticClass: "k-page-remove-warning" },
                    [
                      s("k-box", {
                        attrs: { theme: "negative" },
                        domProps: {
                          innerHTML: t._s(t.$t("page.delete.confirm.subpages")),
                        },
                      }),
                    ],
                    1
                  ),
                  t.hasSubpages
                    ? s("k-form", {
                        attrs: { fields: t.fields },
                        on: { submit: t.submit },
                        model: {
                          value: t.model,
                          callback: function (e) {
                            t.model = e;
                          },
                          expression: "model",
                        },
                      })
                    : t._e(),
                ]
              : [
                  s("k-text", {
                    domProps: {
                      innerHTML: t._s(
                        t.$t("page.delete.confirm", {
                          title: t.$esc(t.page.title),
                        })
                      ),
                    },
                    on: {
                      keydown: function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : t.submit(e);
                      },
                    },
                  }),
                ],
          ],
          2
        );
      },
      je = [],
      Te = {
        mixins: [m],
        data() {
          return {
            page: { title: null, hasChildren: !1, hasDrafts: !1 },
            model: this.emptyForm(),
          };
        },
        computed: {
          hasSubpages() {
            return this.page.hasChildren || this.page.hasDrafts;
          },
          fields() {
            return {
              check: {
                label: this.$t("page.delete.confirm.title"),
                type: "text",
                counter: !1,
              },
            };
          },
        },
        methods: {
          emptyForm() {
            return { check: null };
          },
          async open(t) {
            try {
              (this.page = await this.$api.pages.get(t, {
                select: "id, title, hasChildren, hasDrafts, parent",
              })),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            if (this.hasSubpages && this.model.check !== this.page.title)
              return this.$refs.dialog.error(
                this.$t("error.page.delete.confirm")
              );
            try {
              await this.$api.pages.delete(this.page.id, { force: !0 }),
                this.$store.dispatch("content/remove", "pages/" + this.page.id);
              const t = { message: ":)", event: "page.delete" };
              this.$route.params.path &&
                this.page.id === this.$route.params.path.replace(/\+/g, "/") &&
                (this.page.parent
                  ? (t.route = this.$api.pages.link(this.page.parent.id))
                  : (t.route = "/pages")),
                this.success(t);
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
          reset() {
            this.model = this.emptyForm();
          },
        },
      },
      Le = Te,
      Ie = (s("12fb"), Object(c["a"])(Le, Ee, je, !1, null, null, null)),
      Ae = Ie.exports,
      Be = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-page-rename-dialog",
            attrs: {
              autofocus: !1,
              "submit-button": t.$t("change"),
              size: "medium",
              theme: "positive",
            },
            on: {
              ready: t.onReady,
              submit: function (e) {
                return t.$refs.form.submit();
              },
            },
          },
          [
            s(
              "k-form",
              { ref: "form", on: { submit: t.submit } },
              [
                s(
                  "k-text-field",
                  t._b(
                    {
                      ref: "title",
                      model: {
                        value: t.title,
                        callback: function (e) {
                          t.title = e;
                        },
                        expression: "title",
                      },
                    },
                    "k-text-field",
                    t.fields.title,
                    !1
                  )
                ),
                s(
                  "k-text-field",
                  t._b(
                    {
                      ref: "slug",
                      attrs: { value: t.slug },
                      on: {
                        input: function (e) {
                          return t.sluggify(e);
                        },
                      },
                    },
                    "k-text-field",
                    t.fields.slug,
                    !1
                  ),
                  [
                    s(
                      "k-button",
                      {
                        attrs: {
                          slot: "options",
                          disabled: t.fields.slug.disabled,
                          icon: "wand",
                        },
                        on: {
                          click: function (e) {
                            return t.sluggify(t.title);
                          },
                        },
                        slot: "options",
                      },
                      [
                        t._v(
                          " " + t._s(t.$t("page.changeSlug.fromTitle")) + " "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Me = [],
      De = {
        mixins: [m],
        data() {
          return {
            page: { id: null, parent: null, title: null },
            permissions: {},
            select: "title",
            slug: null,
            title: null,
            url: null,
          };
        },
        computed: {
          fields() {
            return {
              title: {
                label: this.$t("title"),
                type: "text",
                required: !0,
                icon: "title",
                disabled: !1 === this.permissions.changeTitle,
              },
              slug: {
                name: "slug",
                label: this.$t("slug"),
                type: "text",
                required: !0,
                icon: "url",
                help: "/" + this.url,
                counter: !1,
                disabled: !1 === this.permissions.changeSlug,
              },
            };
          },
          slugs() {
            return this.$store.state.languages.current
              ? this.$store.state.languages.current.rules
              : this.system.slugs;
          },
          system() {
            return this.$store.state.system.info;
          },
        },
        methods: {
          onReady() {
            this.$refs[this.select] && this.$refs[this.select].select();
          },
          async open(t, e, s = "title") {
            try {
              (this.page = await this.$api.pages.get(t, { view: "panel" })),
                (this.select = s),
                (this.title = this.page.title),
                this.sluggify(this.page.slug),
                (this.permissions = e),
                this.$refs.dialog.open();
            } catch (i) {
              this.$store.dispatch("notification/error", i);
            }
          },
          sluggify(t) {
            (t = t.trim()),
              (this.slug = this.$helper.slug(t, [
                this.slugs,
                this.system.ascii,
              ])),
              this.page.parents
                ? (this.url = this.page.parents
                    .map((t) => t.slug)
                    .concat([this.slug])
                    .join("/"))
                : (this.url = this.slug);
          },
          async submit() {
            if (
              ((this.title = this.title.trim()),
              this.title === this.page.title && this.slug === this.page.slug)
            )
              return (
                this.$refs.dialog.close(),
                void this.$store.dispatch("notification/success", ":)")
              );
            if (0 === this.title.length)
              return this.$refs.dialog.error(
                this.$t("error.page.changeTitle.empty")
              );
            if (0 === this.slug.length)
              return this.$refs.dialog.error(
                this.$t("error.page.slug.invalid")
              );
            try {
              let t = { message: ":)", event: [] };
              if (
                (this.title !== this.page.title &&
                  (await this.$api.pages.changeTitle(this.page.id, this.title),
                  t.event.push("page.changeTitle")),
                this.slug !== this.page.slug)
              ) {
                const e = await this.$api.pages.changeSlug(
                  this.page.id,
                  this.slug
                );
                this.$store.dispatch("content/move", [
                  "pages/" + this.page.id,
                  "pages/" + e.id,
                ]),
                  t.event.push("page.changeSlug"),
                  !this.$route.params.path ||
                    this.page.id !==
                      this.$route.params.path.replace(/\+/g, "/") ||
                    (this.$store.state.languages.current &&
                      !0 !== this.$store.state.languages.current.default) ||
                    ((t.route = this.$api.pages.link(e.id)),
                    (t.emit = !1),
                    delete t.event);
              }
              this.success(t);
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Ne = De,
      Pe = (s("5f52"), Object(c["a"])(Ne, Be, Me, !1, null, null, null)),
      Re = Pe.exports,
      qe = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("change") },
          on: { submit: t.submit },
          model: {
            value: t.form,
            callback: function (e) {
              t.form = e;
            },
            expression: "form",
          },
        });
      },
      Fe = [],
      Ue = {
        mixins: [m],
        data() {
          return {
            page: { id: null, siblings: [] },
            isBlocked: !1,
            isIncomplete: !1,
            form: { status: null, position: null },
            states: {},
          };
        },
        computed: {
          fields() {
            let t = {
              status: {
                name: "status",
                label: this.$t("page.changeStatus.select"),
                type: "radio",
                required: !0,
                options: Object.keys(this.states).map((t) => ({
                  value: t,
                  text: this.states[t].label,
                  info: this.states[t].text,
                })),
              },
            };
            return (
              "listed" === this.form.status &&
                "default" === this.page.blueprint.num &&
                (t.position = {
                  name: "position",
                  label: this.$t("page.changeStatus.position"),
                  type: "select",
                  empty: !1,
                  options: this.sortingOptions,
                }),
              t
            );
          },
          sortingOptions() {
            let t = [],
              e = 0;
            return (
              this.page.siblings.forEach((s) => {
                if (s.id === this.page.id || s.num < 1) return !1;
                e++,
                  t.push({ value: e, text: e }),
                  t.push({ value: s.id, text: s.title, disabled: !0 });
              }),
              t.push({ value: e + 1, text: e + 1 }),
              t
            );
          },
        },
        methods: {
          async open(t) {
            try {
              const s = await this.$api.pages.get(t, {
                select: ["id", "status", "num", "errors", "blueprint"],
              });
              if (!1 === s.blueprint.options.changeStatus)
                return this.$store.dispatch("notification/error", {
                  message: this.$t("error.page.changeStatus.permission"),
                });
              if ("draft" === s.status && Object.keys(s.errors).length > 0)
                return this.$store.dispatch("notification/error", {
                  message: this.$t("error.page.changeStatus.incomplete"),
                  details: s.errors,
                });
              if ("default" === s.blueprint.num)
                try {
                  const e = await this.$api.pages.get(t, {
                    select: ["siblings"],
                  });
                  this.setup({ ...s, siblings: e.siblings });
                } catch (e) {
                  this.$store.dispatch("notification/error", e);
                }
              else this.setup({ ...s, siblings: [] });
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          setup(t) {
            (this.page = t),
              (this.form.position = t.num || t.siblings.length + 1),
              (this.form.status = t.status),
              (this.states = t.blueprint.status),
              this.$refs.dialog.open();
          },
          async submit() {
            try {
              await this.$api.pages.changeStatus(
                this.page.id,
                this.form.status,
                this.form.position || 1
              ),
                this.success({ message: ":)", event: "page.changeStatus" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      He = Ue,
      ze = Object(c["a"])(He, qe, Fe, !1, null, null, null),
      Ke = ze.exports,
      Ge = {
        extends: Ke,
        computed: {
          fields() {
            return {
              position: {
                name: "position",
                label: this.$t("page.changeStatus.position"),
                type: "select",
                empty: !1,
                options: this.sortingOptions,
              },
            };
          },
        },
        methods: {
          async open(t) {
            try {
              const e = await this.$api.pages.get(t, {
                select: [
                  "id",
                  "status",
                  "num",
                  "errors",
                  "blueprint",
                  "siblings",
                ],
              });
              this.setup(e);
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              await this.$api.pages.status(
                this.page.id,
                "listed",
                this.form.position || 1
              ),
                this.success({ message: ":)", event: "page.sort" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      We = Ge,
      Ye = Object(c["a"])(We, w, x, !1, null, null, null),
      Ve = Ye.exports,
      Je = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("change") },
          on: { submit: t.submit },
          model: {
            value: t.page,
            callback: function (e) {
              t.page = e;
            },
            expression: "page",
          },
        });
      },
      Ze = [],
      Xe = {
        mixins: [m],
        data() {
          return { blueprints: [], page: { id: null, template: null } };
        },
        computed: {
          fields() {
            return {
              template: {
                label: this.$t("template"),
                type: "select",
                required: !0,
                empty: !1,
                options: this.page.blueprints,
                icon: "template",
              },
            };
          },
        },
        methods: {
          async open(t) {
            try {
              const e = await this.$api.pages.get(t, {
                select: ["id", "template", "blueprints"],
              });
              if (e.blueprints.length <= 1)
                return this.$store.dispatch("notification/error", {
                  message: this.$t("error.page.changeTemplate.invalid", {
                    slug: e.id,
                  }),
                });
              (this.page = e),
                (this.page.blueprints = this.page.blueprints.map((t) => ({
                  text: t.title,
                  value: t.name,
                }))),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            this.$events.$emit("keydown.cmd.s");
            try {
              await this.$api.pages.changeTemplate(
                this.page.id,
                this.page.template
              ),
                this.success({ message: ":)", event: "page.changeTemplate" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Qe = Xe,
      ts = Object(c["a"])(Qe, Je, Ze, !1, null, null, null),
      es = ts.exports,
      ss = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-pages-dialog",
            attrs: { size: "medium" },
            on: {
              cancel: function (e) {
                return t.$emit("cancel");
              },
              submit: t.submit,
            },
          },
          [
            t.issue
              ? [
                  s("k-box", {
                    attrs: { text: t.issue, html: !1, theme: "negative" },
                  }),
                ]
              : [
                  t.model
                    ? s(
                        "header",
                        { staticClass: "k-pages-dialog-navbar" },
                        [
                          s("k-button", {
                            attrs: {
                              disabled: !t.model.id,
                              tooltip: t.$t("back"),
                              icon: "angle-left",
                            },
                            on: { click: t.back },
                          }),
                          s("k-headline", [t._v(t._s(t.model.title))]),
                        ],
                        1
                      )
                    : t._e(),
                  t.options.search
                    ? s("k-input", {
                        staticClass: "k-dialog-search",
                        attrs: {
                          autofocus: !0,
                          placeholder: t.$t("search") + " …",
                          type: "text",
                          icon: "search",
                        },
                        model: {
                          value: t.search,
                          callback: function (e) {
                            t.search = e;
                          },
                          expression: "search",
                        },
                      })
                    : t._e(),
                  t.models.length
                    ? [
                        s(
                          "k-list",
                          t._l(t.models, function (e) {
                            return s(
                              "k-list-item",
                              {
                                key: e.id,
                                attrs: {
                                  text: e.text,
                                  info: e.info,
                                  image: e.image,
                                  icon: e.icon,
                                },
                                on: {
                                  click: function (s) {
                                    return t.toggle(e);
                                  },
                                },
                              },
                              [
                                s(
                                  "template",
                                  { slot: "options" },
                                  [
                                    t.isSelected(e)
                                      ? s("k-button", {
                                          attrs: {
                                            slot: "options",
                                            autofocus: !0,
                                            icon: t.checkedIcon,
                                            tooltip: t.$t("remove"),
                                            theme: "positive",
                                          },
                                          slot: "options",
                                        })
                                      : s("k-button", {
                                          attrs: {
                                            slot: "options",
                                            autofocus: !0,
                                            tooltip: t.$t("select"),
                                            icon: "circle-outline",
                                          },
                                          slot: "options",
                                        }),
                                    t.model
                                      ? s("k-button", {
                                          attrs: {
                                            disabled: !e.hasChildren,
                                            tooltip: t.$t("open"),
                                            icon: "angle-right",
                                          },
                                          on: {
                                            click: function (s) {
                                              return (
                                                s.stopPropagation(), t.go(e)
                                              );
                                            },
                                          },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                              2
                            );
                          }),
                          1
                        ),
                        s(
                          "k-pagination",
                          t._b(
                            {
                              staticClass: "k-dialog-pagination",
                              attrs: {
                                details: !0,
                                dropdown: !1,
                                align: "center",
                              },
                              on: { paginate: t.paginate },
                            },
                            "k-pagination",
                            t.pagination,
                            !1
                          )
                        ),
                      ]
                    : s("k-empty", { attrs: { icon: "page" } }, [
                        t._v(" " + t._s(t.$t("dialog.pages.empty")) + " "),
                      ]),
                ],
          ],
          2
        );
      },
      is = [],
      ns = {
        mixins: [Ft],
        data() {
          const t = Ft.data();
          return {
            ...t,
            model: { title: null, parent: null },
            options: { ...t.options, parent: null },
          };
        },
        computed: {
          fetchData() {
            return { parent: this.options.parent };
          },
        },
        methods: {
          back() {
            (this.options.parent = this.model.parent),
              (this.pagination.page = 1),
              this.fetch();
          },
          go(t) {
            (this.options.parent = t.id),
              (this.pagination.page = 1),
              this.fetch();
          },
          onFetched(t) {
            this.model = t.model;
          },
        },
      },
      as = ns,
      rs = (s("ac27"), Object(c["a"])(as, ss, is, !1, null, null, null)),
      os = rs.exports,
      ls = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-text-dialog",
          t._g(
            t._b({ ref: "dialog" }, "k-text-dialog", t.$props, !1),
            t.$listeners
          ),
          [t._t("default")],
          2
        );
      },
      cs = [],
      us = {
        mixins: [m],
        props: {
          icon: { type: String, default: "trash" },
          submitButton: {
            type: [String, Boolean],
            default() {
              return this.$t("delete");
            },
          },
          text: String,
          theme: { type: String, default: "negative" },
        },
      },
      ds = us,
      ps = Object(c["a"])(ds, ls, cs, !1, null, null, null),
      hs = ps.exports,
      ms = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("rename") },
          on: { submit: t.submit },
          model: {
            value: t.site,
            callback: function (e) {
              t.site = e;
            },
            expression: "site",
          },
        });
      },
      fs = [],
      gs = {
        mixins: [m],
        data() {
          return { site: { id: null, title: null } };
        },
        computed: {
          fields() {
            return {
              title: {
                label: this.$t("title"),
                type: "text",
                required: !0,
                icon: "title",
                preselect: !0,
              },
            };
          },
        },
        methods: {
          async open() {
            try {
              (this.site = await this.$api.site.get({ select: ["title"] })),
                this.$refs.dialog.open();
            } catch (t) {
              this.$store.dispatch("notification/error", t);
            }
          },
          async submit() {
            if (
              ((this.site.title = this.site.title.trim()),
              0 !== this.site.title.length)
            )
              try {
                await this.$api.site.changeTitle(this.site.title),
                  this.$store.dispatch("system/title", this.site.title),
                  this.success({ message: ":)", event: "site.changeTitle" });
              } catch (t) {
                this.$refs.dialog.error(t.message);
              }
            else
              this.$refs.dialog.error(this.$t("error.site.changeTitle.empty"));
          },
        },
      },
      bs = gs,
      ks = Object(c["a"])(bs, ms, fs, !1, null, null, null),
      vs = ks.exports,
      $s = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          t._g(t._b({ ref: "dialog" }, "k-dialog", t.$props, !1), t.$listeners),
          [
            t._t("default", [
              s("k-text", { domProps: { innerHTML: t._s(t.text) } }),
            ]),
          ],
          2
        );
      },
      ys = [],
      _s = { mixins: [m], props: { text: String } },
      ws = _s,
      xs = Object(c["a"])(ws, $s, ys, !1, null, null, null),
      Os = xs.exports,
      Cs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("create") },
          on: { submit: t.create, close: t.reset },
          model: {
            value: t.user,
            callback: function (e) {
              t.user = e;
            },
            expression: "user",
          },
        });
      },
      Ss = [],
      Es = {
        mixins: [m],
        data() {
          return { user: this.emptyForm(), languages: [], roles: [] };
        },
        computed: {
          fields() {
            return {
              name: { label: this.$t("name"), type: "text", icon: "user" },
              email: {
                label: this.$t("email"),
                type: "email",
                icon: "email",
                link: !1,
                required: !0,
              },
              password: {
                label: this.$t("password"),
                type: "password",
                icon: "key",
              },
              language: {
                label: this.$t("language"),
                type: "select",
                icon: "globe",
                options: this.languages,
                required: !0,
                empty: !1,
              },
              role: {
                label: this.$t("role"),
                type: 1 === this.roles.length ? "hidden" : "radio",
                required: !0,
                options: this.roles,
              },
            };
          },
        },
        methods: {
          async create() {
            try {
              await this.$api.users.create(this.user),
                this.success({ message: ":)", event: "user.create" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
          emptyForm() {
            return {
              name: "",
              email: "",
              password: "",
              language: this.$store.state.system.info.defaultLanguage || "en",
              role: this.$user.role.name,
            };
          },
          async open() {
            try {
              (this.roles = await this.$api.roles.options({
                canBe: "created",
              })),
                "admin" !== this.$user.role.name &&
                  (this.roles = this.roles.filter((t) => "admin" !== t.value));
            } catch (t) {
              this.$store.dispatch("notification/error", t);
            }
            try {
              this.languages = await this.$api.translations.options();
            } catch (t) {
              this.$store.dispatch("notification/error", t);
            }
            this.$refs.dialog.open();
          },
          reset() {
            this.user = this.emptyForm();
          },
        },
      },
      js = Es,
      Ts = Object(c["a"])(js, Cs, Ss, !1, null, null, null),
      Ls = Ts.exports,
      Is = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("change") },
          on: { submit: t.submit },
          model: {
            value: t.user,
            callback: function (e) {
              t.user = e;
            },
            expression: "user",
          },
        });
      },
      As = [],
      Bs = {
        mixins: [m],
        data() {
          return { user: { id: null, email: null } };
        },
        computed: {
          fields() {
            return {
              email: {
                label: this.$t("email"),
                preselect: !0,
                required: !0,
                type: "email",
              },
            };
          },
        },
        methods: {
          async open(t) {
            try {
              (this.user = await this.$api.users.get(t, {
                select: ["id", "email"],
              })),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              await this.$api.users.changeEmail(this.user.id, this.user.email),
                this.$store.dispatch("content/revert", "users/" + this.user.id),
                this.$user.id === this.user.id &&
                  this.$store.dispatch("user/email", this.user.email);
              let t = { message: ":)", event: "user.changeEmail" };
              this.success(t);
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Ms = Bs,
      Ds = Object(c["a"])(Ms, Is, As, !1, null, null, null),
      Ns = Ds.exports,
      Ps = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("change") },
          on: { submit: t.submit },
          model: {
            value: t.user,
            callback: function (e) {
              t.user = e;
            },
            expression: "user",
          },
        });
      },
      Rs = [],
      qs = {
        mixins: [m],
        data() {
          return { user: { language: "en" }, languages: [] };
        },
        computed: {
          fields() {
            return {
              language: {
                label: this.$t("language"),
                type: "select",
                icon: "globe",
                options: this.languages,
                required: !0,
                empty: !1,
              },
            };
          },
        },
        async created() {
          this.languages = await this.$api.translations.options();
        },
        methods: {
          async open(t) {
            try {
              (this.user = await this.$api.users.get(t, { view: "compact" })),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              (this.user = await this.$api.users.changeLanguage(
                this.user.id,
                this.user.language
              )),
                this.$user.id === this.user.id &&
                  this.$store.dispatch("user/language", this.user.language),
                this.success({ message: ":)", event: "user.changeLanguage" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Fs = qs,
      Us = Object(c["a"])(Fs, Ps, Rs, !1, null, null, null),
      Hs = Us.exports,
      zs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("change") },
          on: { submit: t.submit },
          model: {
            value: t.values,
            callback: function (e) {
              t.values = e;
            },
            expression: "values",
          },
        });
      },
      Ks = [],
      Gs = {
        mixins: [m],
        data() {
          return {
            user: null,
            values: { password: null, passwordConfirmation: null },
          };
        },
        computed: {
          fields() {
            return {
              password: {
                label: this.$t("user.changePassword.new"),
                type: "password",
                icon: "key",
              },
              passwordConfirmation: {
                label: this.$t("user.changePassword.new.confirm"),
                icon: "key",
                type: "password",
              },
            };
          },
        },
        methods: {
          async open(t) {
            try {
              (this.user = await this.$api.users.get(t)),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            if (!this.values.password || this.values.password.length < 8)
              return (
                this.$refs.dialog.error(this.$t("error.user.password.invalid")),
                !1
              );
            if (this.values.password !== this.values.passwordConfirmation)
              return (
                this.$refs.dialog.error(this.$t("error.user.password.notSame")),
                !1
              );
            try {
              await this.$api.users.changePassword(
                this.user.id,
                this.values.password
              ),
                this.success({ message: ":)", event: "user.changePassword" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Ws = Gs,
      Ys = Object(c["a"])(Ws, zs, Ks, !1, null, null, null),
      Vs = Ys.exports,
      Js = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-remove-dialog", {
          ref: "dialog",
          attrs: {
            text: t.$t("user.delete.confirm", { email: t.$esc(t.user.email) }),
          },
          on: { submit: t.submit },
        });
      },
      Zs = [],
      Xs = {
        mixins: [m],
        data() {
          return { user: { email: null } };
        },
        methods: {
          async open(t) {
            try {
              (this.user = await this.$api.users.get(t)),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              await this.$api.users.delete(this.user.id),
                this.$store.dispatch("content/remove", "users/" + this.user.id),
                this.success({ message: ":)", event: "user.delete" }),
                "User" === this.$route.name && this.$go("/users");
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      Qs = Xs,
      ti = Object(c["a"])(Qs, Js, Zs, !1, null, null, null),
      ei = ti.exports,
      si = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("rename") },
          on: { submit: t.submit },
          model: {
            value: t.user,
            callback: function (e) {
              t.user = e;
            },
            expression: "user",
          },
        });
      },
      ii = [],
      ni = {
        mixins: [m],
        data() {
          return { user: { id: null, name: null } };
        },
        computed: {
          fields() {
            return {
              name: {
                label: this.$t("name"),
                type: "text",
                icon: "user",
                preselect: !0,
              },
            };
          },
        },
        methods: {
          async open(t) {
            try {
              (this.user = await this.$api.users.get(t, {
                select: ["id", "name"],
              })),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            this.user.name = this.user.name.trim();
            try {
              await this.$api.users.changeName(this.user.id, this.user.name),
                this.$user.id === this.user.id &&
                  this.$store.dispatch("user/name", this.user.name),
                this.success({ message: ":)", event: "user.changeName" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      ai = ni,
      ri = Object(c["a"])(ai, si, ii, !1, null, null, null),
      oi = ri.exports,
      li = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: { fields: t.fields, "submit-button": t.$t("user.changeRole") },
          on: { submit: t.submit },
          model: {
            value: t.user,
            callback: function (e) {
              t.user = e;
            },
            expression: "user",
          },
        });
      },
      ci = [],
      ui = {
        mixins: [m],
        data() {
          return { roles: [], user: { id: null, role: "visitor" } };
        },
        computed: {
          fields() {
            return {
              role: {
                label: this.$t("user.changeRole.select"),
                type: "radio",
                required: !0,
                options: this.roles,
              },
            };
          },
        },
        methods: {
          async open(t) {
            this.id = t;
            try {
              (this.user = await this.$api.users.get(t)),
                (this.user.role = this.user.role.name),
                (this.roles = await this.$api.users.roles(t)),
                "admin" !== this.$user.role.name &&
                  (this.roles = this.roles.filter((t) => "admin" !== t.value)),
                this.$refs.dialog.open();
            } catch (e) {
              this.$store.dispatch("notification/error", e);
            }
          },
          async submit() {
            try {
              await this.$api.users.changeRole(this.user.id, this.user.role),
                this.$user.id === this.user.id &&
                  this.$store.dispatch("user/load"),
                this.success({ message: ":)", event: "user.changeRole" });
            } catch (t) {
              this.$refs.dialog.error(t.message);
            }
          },
        },
      },
      di = ui,
      pi = Object(c["a"])(di, li, ci, !1, null, null, null),
      hi = pi.exports,
      mi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-users-dialog",
            attrs: { size: "medium" },
            on: {
              cancel: function (e) {
                return t.$emit("cancel");
              },
              submit: t.submit,
            },
          },
          [
            t.issue
              ? [
                  s("k-box", {
                    attrs: { text: t.issue, html: !1, theme: "negative" },
                  }),
                ]
              : [
                  t.options.search
                    ? s("k-input", {
                        staticClass: "k-dialog-search",
                        attrs: {
                          autofocus: !0,
                          placeholder: t.$t("search") + " …",
                          type: "text",
                          icon: "search",
                        },
                        model: {
                          value: t.search,
                          callback: function (e) {
                            t.search = e;
                          },
                          expression: "search",
                        },
                      })
                    : t._e(),
                  t.models.length
                    ? [
                        s(
                          "k-list",
                          t._l(t.models, function (e) {
                            return s(
                              "k-list-item",
                              {
                                key: e.email,
                                attrs: {
                                  text: e.text,
                                  info: e.info !== e.text ? e.info : null,
                                  image: e.image,
                                  icon: e.icon,
                                },
                                on: {
                                  click: function (s) {
                                    return t.toggle(e);
                                  },
                                },
                              },
                              [
                                t.isSelected(e)
                                  ? s("k-button", {
                                      attrs: {
                                        slot: "options",
                                        autofocus: !0,
                                        icon: t.checkedIcon,
                                        tooltip: t.$t("remove"),
                                        theme: "positive",
                                      },
                                      slot: "options",
                                    })
                                  : s("k-button", {
                                      attrs: {
                                        slot: "options",
                                        autofocus: !0,
                                        tooltip: t.$t("select"),
                                        icon: "circle-outline",
                                      },
                                      slot: "options",
                                    }),
                              ],
                              1
                            );
                          }),
                          1
                        ),
                        s(
                          "k-pagination",
                          t._b(
                            {
                              staticClass: "k-dialog-pagination",
                              attrs: {
                                details: !0,
                                dropdown: !1,
                                align: "center",
                              },
                              on: { paginate: t.paginate },
                            },
                            "k-pagination",
                            t.pagination,
                            !1
                          )
                        ),
                      ]
                    : s("k-empty", { attrs: { icon: "users" } }, [
                        t._v(" " + t._s(t.$t("dialog.users.empty")) + " "),
                      ]),
                ],
          ],
          2
        );
      },
      fi = [],
      gi = { mixins: [Ft] },
      bi = gi,
      ki = (s("7568"), Object(c["a"])(bi, mi, fi, !1, null, null, null)),
      vi = ki.exports,
      $i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-overlay",
          {
            ref: "overlay",
            attrs: { dimmed: !1 },
            on: { close: t.onClose, open: t.onOpen },
          },
          [
            s(
              "div",
              {
                staticClass: "k-drawer",
                attrs: { "data-nested": t.nested },
                on: {
                  mousedown: function (e) {
                    t.click = !0;
                  },
                  mouseup: t.mouseup,
                },
              },
              [
                s(
                  "div",
                  {
                    staticClass: "k-drawer-box",
                    on: {
                      mousedown: function (e) {
                        e.stopPropagation(), (t.click = !1);
                      },
                    },
                  },
                  [
                    s("header", { staticClass: "k-drawer-header" }, [
                      1 === t.breadcrumb.length
                        ? s(
                            "h2",
                            { staticClass: "k-drawer-title" },
                            [
                              s("k-icon", { attrs: { type: t.icon } }),
                              t._v(" " + t._s(t.title) + " "),
                            ],
                            1
                          )
                        : s(
                            "ul",
                            { staticClass: "k-drawer-breadcrumb" },
                            t._l(t.breadcrumb, function (e) {
                              return s(
                                "li",
                                { key: e.id },
                                [
                                  s(
                                    "k-button",
                                    {
                                      attrs: { icon: e.icon },
                                      on: {
                                        click: function (s) {
                                          return t.goTo(e.id);
                                        },
                                      },
                                    },
                                    [t._v(" " + t._s(e.title) + " ")]
                                  ),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                      t.hasTabs
                        ? s(
                            "nav",
                            { staticClass: "k-drawer-tabs" },
                            t._l(t.tabs, function (e) {
                              return s(
                                "k-button",
                                {
                                  key: e.name,
                                  staticClass: "k-drawer-tab",
                                  attrs: { current: t.tab == e.name },
                                  on: {
                                    click: function (s) {
                                      return (
                                        s.stopPropagation(),
                                        t.$emit("tab", e.name)
                                      );
                                    },
                                  },
                                },
                                [t._v(" " + t._s(e.label) + " ")]
                              );
                            }),
                            1
                          )
                        : t._e(),
                      s(
                        "nav",
                        { staticClass: "k-drawer-options" },
                        [
                          t._t("options"),
                          s("k-button", {
                            staticClass: "k-drawer-option",
                            attrs: { icon: "check" },
                            on: { click: t.close },
                          }),
                        ],
                        2
                      ),
                    ]),
                    s(
                      "div",
                      { staticClass: "k-drawer-body" },
                      [t._t("default")],
                      2
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      yi = [],
      _i = {
        inheritAttrs: !1,
        props: { icon: String, tab: String, tabs: Object, title: String },
        data() {
          return { click: !1 };
        },
        computed: {
          breadcrumb() {
            return this.$store.state.drawers.open;
          },
          hasTabs() {
            return this.tabs && Object.keys(this.tabs).length > 1;
          },
          index() {
            return this.breadcrumb.findIndex((t) => t.id === this._uid);
          },
          nested() {
            return this.index > 0;
          },
        },
        watch: {
          index() {
            -1 === this.index && this.close();
          },
        },
        destroyed() {
          this.$store.dispatch("drawers/close", this._uid);
        },
        methods: {
          close() {
            this.$refs.overlay.close();
          },
          goTo(t) {
            if (t === this._uid) return !0;
            this.$store.dispatch("drawers/goto", t);
          },
          mouseup() {
            !0 === this.click && this.close(), (this.click = !1);
          },
          onClose() {
            this.$store.dispatch("drawers/close", this._uid),
              this.$emit("close");
          },
          onOpen() {
            this.$store.dispatch("drawers/open", {
              id: this._uid,
              icon: this.icon,
              title: this.title,
            }),
              this.$emit("open");
          },
          open() {
            this.$refs.overlay.open();
          },
        },
      },
      wi = _i,
      xi = (s("5332"), Object(c["a"])(wi, $i, yi, !1, null, null, null)),
      Oi = xi.exports,
      Ci = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-drawer", {
          ref: "drawer",
          staticClass: "k-form-drawer",
          attrs: { icon: t.icon, tabs: t.tabs, tab: t.tab, title: t.title },
          on: {
            close: function (e) {
              return t.$emit("close");
            },
            open: function (e) {
              return t.$emit("open");
            },
            tab: function (e) {
              t.tab = e;
            },
          },
          scopedSlots: t._u(
            [
              {
                key: "options",
                fn: function () {
                  return [t._t("options")];
                },
                proxy: !0,
              },
              {
                key: "default",
                fn: function () {
                  return [
                    0 === Object.keys(t.fields).length
                      ? s("k-box", { attrs: { theme: "info" } }, [
                          t._v(" " + t._s(t.empty) + " "),
                        ])
                      : s("k-form", {
                          ref: "form",
                          attrs: {
                            autofocus: !0,
                            fields: t.fields,
                            value: t.$helper.clone(t.value),
                          },
                          on: {
                            input: function (e) {
                              return t.$emit("input", e);
                            },
                          },
                        }),
                  ];
                },
                proxy: !0,
              },
            ],
            null,
            !0
          ),
        });
      },
      Si = [],
      Ei = {
        inheritAttrs: !1,
        props: {
          empty: {
            type: String,
            default() {
              return "Missing field setup";
            },
          },
          icon: String,
          tabs: Object,
          title: String,
          type: String,
          value: Object,
        },
        data() {
          return { tab: null };
        },
        computed: {
          fields() {
            const t = this.tab || null,
              e = this.tabs,
              s = e[t] || this.firstTab,
              i = s.fields || {};
            return i;
          },
          firstTab() {
            return Object.values(this.tabs)[0];
          },
        },
        methods: {
          close() {
            this.$refs.drawer.close();
          },
          focus(t) {
            this.$refs.form &&
              "function" === typeof this.$refs.form.focus &&
              this.$refs.form.focus(t);
          },
          open(t, e = !0) {
            this.$refs.drawer.open(),
              (this.tab = t || this.firstTab.name),
              !1 !== e &&
                setTimeout(() => {
                  let t =
                    Object.values(this.fields).filter(
                      (t) => !0 === t.autofocus
                    )[0] || null;
                  this.focus(t);
                }, 1);
          },
        },
      },
      ji = Ei,
      Ti = Object(c["a"])(ji, Ci, Si, !1, null, null, null),
      Li = Ti.exports,
      Ii = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dropdown",
          { staticClass: "k-autocomplete" },
          [
            t._t("default"),
            s(
              "k-dropdown-content",
              t._g({ ref: "dropdown", attrs: { autofocus: !0 } }, t.$listeners),
              t._l(t.matches, function (e, i) {
                return s(
                  "k-dropdown-item",
                  t._b(
                    {
                      key: i,
                      on: {
                        mousedown: function (s) {
                          return t.onSelect(e);
                        },
                        keydown: [
                          function (s) {
                            return !s.type.indexOf("key") &&
                              t._k(s.keyCode, "tab", 9, s.key, "Tab")
                              ? null
                              : (s.preventDefault(), t.onSelect(e));
                          },
                          function (s) {
                            return !s.type.indexOf("key") &&
                              t._k(s.keyCode, "enter", 13, s.key, "Enter")
                              ? null
                              : (s.preventDefault(), t.onSelect(e));
                          },
                          function (e) {
                            return (!e.type.indexOf("key") &&
                              t._k(e.keyCode, "left", 37, e.key, [
                                "Left",
                                "ArrowLeft",
                              ])) ||
                              ("button" in e && 0 !== e.button)
                              ? null
                              : (e.preventDefault(), t.close(e));
                          },
                          function (e) {
                            return !e.type.indexOf("key") &&
                              t._k(
                                e.keyCode,
                                "backspace",
                                void 0,
                                e.key,
                                void 0
                              )
                              ? null
                              : (e.preventDefault(), t.close(e));
                          },
                          function (e) {
                            return !e.type.indexOf("key") &&
                              t._k(e.keyCode, "delete", [8, 46], e.key, [
                                "Backspace",
                                "Delete",
                                "Del",
                              ])
                              ? null
                              : (e.preventDefault(), t.close(e));
                          },
                        ],
                      },
                    },
                    "k-dropdown-item",
                    e,
                    !1
                  ),
                  [
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.html ? e.text : t.$esc(e.text)),
                      },
                    }),
                  ]
                );
              }),
              1
            ),
            t._v(" " + t._s(t.query) + " "),
          ],
          2
        );
      },
      Ai = [],
      Bi = {
        props: {
          html: { type: Boolean, default: !1 },
          limit: { type: Number, default: 10 },
          skip: {
            type: Array,
            default() {
              return [];
            },
          },
          options: Array,
          query: String,
        },
        data() {
          return { matches: [], selected: { text: null } };
        },
        methods: {
          close() {
            this.$refs.dropdown.close();
          },
          onSelect(t) {
            this.$emit("select", t), this.$refs.dropdown.close();
          },
          search(t) {
            if (t.length < 1) return;
            const e = new RegExp(RegExp.escape(t), "ig");
            (this.matches = this.options
              .filter(
                (t) =>
                  !!t.text &&
                  -1 === this.skip.indexOf(t.value) &&
                  null !== t.text.match(e)
              )
              .slice(0, this.limit)),
              this.$emit("search", t, this.matches),
              this.$refs.dropdown.open();
          },
        },
      },
      Mi = Bi,
      Di = Object(c["a"])(Mi, Ii, Ai, !1, null, null, null),
      Ni = Di.exports,
      Pi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "k-calendar-input" }, [
          s(
            "nav",
            [
              s("k-button", {
                attrs: { icon: "angle-left" },
                on: { click: t.prev },
              }),
              s(
                "span",
                { staticClass: "k-calendar-selects" },
                [
                  s("k-select-input", {
                    attrs: {
                      options: t.months,
                      disabled: t.disabled,
                      required: !0,
                    },
                    model: {
                      value: t.view.month,
                      callback: function (e) {
                        t.$set(t.view, "month", t._n(e));
                      },
                      expression: "view.month",
                    },
                  }),
                  s("k-select-input", {
                    attrs: {
                      options: t.years,
                      disabled: t.disabled,
                      required: !0,
                    },
                    model: {
                      value: t.view.year,
                      callback: function (e) {
                        t.$set(t.view, "year", t._n(e));
                      },
                      expression: "view.year",
                    },
                  }),
                ],
                1
              ),
              s("k-button", {
                attrs: { icon: "angle-right" },
                on: { click: t.next },
              }),
            ],
            1
          ),
          s("table", { staticClass: "k-calendar-table" }, [
            s("thead", [
              s(
                "tr",
                t._l(t.weekdays, function (e) {
                  return s("th", { key: "weekday_" + e }, [
                    t._v(" " + t._s(e) + " "),
                  ]);
                }),
                0
              ),
            ]),
            s(
              "tbody",
              t._l(t.numberOfWeeks, function (e) {
                return s(
                  "tr",
                  { key: "week_" + e },
                  t._l(t.days(e), function (e, i) {
                    return s(
                      "td",
                      {
                        key: "day_" + i,
                        staticClass: "k-calendar-day",
                        attrs: {
                          "aria-current": !!t.isToday(e) && "date",
                          "aria-selected": !!t.isSelected(e) && "date",
                          "data-between": t.isBetween(e),
                          "data-first": t.isFirst(e),
                          "data-last": t.isLast(e),
                        },
                      },
                      [
                        e
                          ? s(
                              "k-button",
                              {
                                attrs: { disabled: t.isDisabled(e) },
                                on: {
                                  click: function (s) {
                                    return t.select(e);
                                  },
                                },
                              },
                              [t._v(" " + t._s(e) + " ")]
                            )
                          : t._e(),
                      ],
                      1
                    );
                  }),
                  0
                );
              }),
              0
            ),
            s("tfoot", [
              s("tr", [
                s(
                  "td",
                  { staticClass: "k-calendar-today", attrs: { colspan: "7" } },
                  [
                    s(
                      "k-button",
                      {
                        on: {
                          click: function (e) {
                            return t.select("today");
                          },
                        },
                      },
                      [t._v(" " + t._s(t.$t("today")) + " ")]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      Ri = [],
      qi = {
        props: {
          disabled: Boolean,
          multiple: Boolean,
          max: String,
          min: String,
          value: [Array, String],
        },
        data() {
          return this.toData(this.value);
        },
        computed: {
          numberOfDays() {
            return this.viewDt.daysInMonth();
          },
          numberOfWeeks() {
            return Math.ceil((this.numberOfDays + this.firstWeekday - 1) / 7);
          },
          firstWeekday() {
            const t = this.viewDt.day();
            return t > 0 ? t : 7;
          },
          weekdays() {
            return [
              this.$t("days.mon"),
              this.$t("days.tue"),
              this.$t("days.wed"),
              this.$t("days.thu"),
              this.$t("days.fri"),
              this.$t("days.sat"),
              this.$t("days.sun"),
            ];
          },
          monthnames() {
            return [
              this.$t("months.january"),
              this.$t("months.february"),
              this.$t("months.march"),
              this.$t("months.april"),
              this.$t("months.may"),
              this.$t("months.june"),
              this.$t("months.july"),
              this.$t("months.august"),
              this.$t("months.september"),
              this.$t("months.october"),
              this.$t("months.november"),
              this.$t("months.december"),
            ];
          },
          months() {
            var t = [];
            return (
              this.monthnames.forEach((e, s) => {
                const i = this.toDate(1, s);
                t.push({
                  value: s,
                  text: e,
                  disabled:
                    i.isBefore(this.view.min, "month") ||
                    i.isAfter(this.view.max, "month"),
                });
              }),
              t
            );
          },
          years() {
            var t = [];
            const e = this.view.min
                ? this.view.min.get("year")
                : this.view.year - 20,
              s = this.view.max
                ? this.view.max.get("year")
                : this.view.year + 20;
            for (var i = e; i <= s; i++)
              t.push({ value: i, text: this.$helper.pad(i) });
            return t;
          },
          viewDt() {
            const t = `${this.view.year}-${this.view.month + 1}-01 00:00:00`;
            return this.$library.dayjs.utc(t);
          },
        },
        watch: {
          value(t) {
            const e = this.toData(t);
            (this.datetimes = e.datetimes), (this.view = e.view);
          },
        },
        methods: {
          days(t) {
            let e = [];
            const s = 7 * (t - 1) + 1;
            for (let i = s; i < s + 7; i++) {
              let t = i - (this.firstWeekday - 1);
              t <= 0 || t > this.numberOfDays ? e.push("") : e.push(t);
            }
            return e;
          },
          isBetween(t) {
            if ("" === t || 0 == this.multiple || this.datetimes.length < 2)
              return !1;
            const e = this.toDate(t);
            return (
              this.isFirst(t) ||
              this.isLast(t) ||
              (e.isAfter(this.datetimes[0], "day") &&
                e.isBefore(this.datetimes[1], "day"))
            );
          },
          isDisabled(t) {
            const e = this.toDate(t);
            return (
              e.isBefore(this.view.min, "day") ||
              e.isAfter(this.view.max, "day")
            );
          },
          isFirst(t) {
            if ("" === t || 0 == this.multiple || this.datetimes.length < 2)
              return !1;
            const e = this.toDate(t);
            return e.isSame(this.datetimes[0], "day");
          },
          isLast(t) {
            if ("" === t || 0 == this.multiple || this.datetimes.length < 2)
              return !1;
            const e = this.toDate(t);
            return e.isSame(this.datetimes[1], "day");
          },
          isSelected(t) {
            if ("" === t) return !1;
            const e = this.toDate(t);
            return this.datetimes.some((t) => e.isSame(t, "day"));
          },
          isToday(t) {
            return this.toDate(t).isSame(this.toToday(), "day");
          },
          next() {
            let t = this.viewDt.clone().add(1, "month");
            this.show(t);
          },
          prev() {
            let t = this.viewDt.clone().subtract(1, "month");
            this.show(t);
          },
          mergeTime(t, e) {
            return t
              .clone()
              .set("second", e.get("second"))
              .set("minute", e.get("minute"))
              .set("hour", e.get("hour"));
          },
          select(t) {
            const e = this.datetimes[0] || this.toToday();
            if ("today" === t) {
              const t = this.mergeTime(this.$library.dayjs(), e);
              (this.datetimes = [t]), this.show(t);
            } else {
              let s = this.toDate(t);
              (s = this.mergeTime(s, e)),
                !1 === this.multiple ||
                0 === this.datetimes.length ||
                2 === this.datetimes.length ||
                s.isBefore(this.datetimes[0])
                  ? (this.datetimes = [s])
                  : this.datetimes.push(s);
            }
            const s = this.multiple
              ? this.datetimes.map((t) => this.toISO(t))
              : this.toISO(this.datetimes[0]);
            this.$emit("input", s);
          },
          show(t) {
            (this.view.year = t.year()), (this.view.month = t.month());
          },
          toData(t) {
            const e = this.toToday(),
              s = this.toDatetimes(t);
            return {
              datetimes: s,
              view: {
                month: (s[0] || e).month(),
                year: (s[0] || e).year(),
                min: this.min ? this.$library.dayjs.utc(this.min) : null,
                max: this.max ? this.$library.dayjs.utc(this.max) : null,
              },
            };
          },
          toDate(t, e = this.view.month, s = this.view.year) {
            return this.$library.dayjs.utc(`${s}-${e + 1}-${t} 00:00:00`);
          },
          toDatetimes(t) {
            return t
              ? "string" === typeof t
                ? [this.$library.dayjs.utc(t)]
                : t.map((t) => this.$library.dayjs.utc(t))
              : [];
          },
          toISO(t) {
            return t.format("YYYY-MM-DD HH:mm:ss");
          },
          toToday() {
            return this.$library.dayjs.utc();
          },
        },
      },
      Fi = qi,
      Ui = (s("ee15"), Object(c["a"])(Fi, Pi, Ri, !1, null, null, null)),
      Hi = Ui.exports,
      zi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          { staticClass: "k-counter", attrs: { "data-invalid": !t.valid } },
          [
            s("span", [t._v(t._s(t.count))]),
            t.min && t.max
              ? s("span", { staticClass: "k-counter-rules" }, [
                  t._v("(" + t._s(t.min) + "–" + t._s(t.max) + ")"),
                ])
              : t.min
              ? s("span", { staticClass: "k-counter-rules" }, [
                  t._v("≥ " + t._s(t.min)),
                ])
              : t.max
              ? s("span", { staticClass: "k-counter-rules" }, [
                  t._v("≤ " + t._s(t.max)),
                ])
              : t._e(),
          ]
        );
      },
      Ki = [],
      Gi = {
        props: {
          count: Number,
          min: Number,
          max: Number,
          required: { type: Boolean, default: !1 },
        },
        computed: {
          valid() {
            return (
              (!1 === this.required && 0 === this.count) ||
              ((!0 !== this.required || 0 !== this.count) &&
                !(this.min && this.count < this.min) &&
                !(this.max && this.count > this.max))
            );
          },
        },
      },
      Wi = Gi,
      Yi = (s("fc0f"), Object(c["a"])(Wi, zi, Ki, !1, null, null, null)),
      Vi = Yi.exports,
      Ji = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "form",
          {
            ref: "form",
            staticClass: "k-form",
            attrs: { method: "POST", autocomplete: "off", novalidate: "" },
            on: {
              submit: function (e) {
                return e.preventDefault(), t.onSubmit(e);
              },
            },
          },
          [
            t._t("header"),
            t._t("default", [
              s(
                "k-fieldset",
                t._g(
                  {
                    ref: "fields",
                    attrs: {
                      disabled: t.disabled,
                      fields: t.fields,
                      novalidate: t.novalidate,
                    },
                    model: {
                      value: t.value,
                      callback: function (e) {
                        t.value = e;
                      },
                      expression: "value",
                    },
                  },
                  t.listeners
                )
              ),
            ]),
            t._t("footer"),
            s("input", {
              ref: "submitter",
              staticClass: "k-form-submitter",
              attrs: { type: "submit" },
            }),
          ],
          2
        );
      },
      Zi = [],
      Xi = {
        props: {
          disabled: Boolean,
          config: Object,
          fields: {
            type: [Array, Object],
            default() {
              return {};
            },
          },
          novalidate: { type: Boolean, default: !1 },
          value: {
            type: Object,
            default() {
              return {};
            },
          },
        },
        data() {
          return {
            errors: {},
            listeners: { ...this.$listeners, submit: this.onSubmit },
          };
        },
        methods: {
          focus(t) {
            this.$refs.fields &&
              this.$refs.fields.focus &&
              this.$refs.fields.focus(t);
          },
          onSubmit() {
            this.$emit("submit", this.value);
          },
          submit() {
            this.$refs.submitter.click();
          },
        },
      },
      Qi = Xi,
      tn = (s("5d33"), Object(c["a"])(Qi, Ji, Zi, !1, null, null, null)),
      en = tn.exports,
      sn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "nav",
          { staticClass: "k-form-buttons", attrs: { "data-theme": t.mode } },
          [
            "unlock" === t.mode
              ? s("k-view", [
                  s("p", { staticClass: "k-form-lock-info" }, [
                    t._v(" " + t._s(t.$t("lock.isUnlocked")) + " "),
                  ]),
                  s(
                    "span",
                    { staticClass: "k-form-lock-buttons" },
                    [
                      s(
                        "k-button",
                        {
                          staticClass: "k-form-button",
                          attrs: { icon: "download" },
                          on: { click: t.onDownload },
                        },
                        [t._v(" " + t._s(t.$t("download")) + " ")]
                      ),
                      s(
                        "k-button",
                        {
                          staticClass: "k-form-button",
                          attrs: { icon: "check" },
                          on: { click: t.onResolve },
                        },
                        [t._v(" " + t._s(t.$t("confirm")) + " ")]
                      ),
                    ],
                    1
                  ),
                ])
              : "lock" === t.mode
              ? s(
                  "k-view",
                  [
                    s(
                      "p",
                      { staticClass: "k-form-lock-info" },
                      [
                        s("k-icon", { attrs: { type: "lock" } }),
                        s("span", {
                          domProps: {
                            innerHTML: t._s(
                              t.$t("lock.isLocked", {
                                email: t.$esc(t.form.lock.email),
                              })
                            ),
                          },
                        }),
                      ],
                      1
                    ),
                    t.form.lock.unlockable
                      ? s(
                          "k-button",
                          {
                            staticClass: "k-form-button",
                            attrs: { icon: "unlock" },
                            on: { click: t.setUnlock },
                          },
                          [t._v(" " + t._s(t.$t("lock.unlock")) + " ")]
                        )
                      : s("k-icon", {
                          staticClass: "k-form-lock-loader",
                          attrs: { type: "loader" },
                        }),
                  ],
                  1
                )
              : "changes" === t.mode
              ? s(
                  "k-view",
                  [
                    s(
                      "k-button",
                      {
                        staticClass: "k-form-button",
                        attrs: { disabled: t.isDisabled, icon: "undo" },
                        on: {
                          click: function (e) {
                            return t.$refs.revert.open();
                          },
                        },
                      },
                      [t._v(" " + t._s(t.$t("revert")) + " ")]
                    ),
                    s(
                      "k-button",
                      {
                        staticClass: "k-form-button",
                        attrs: { disabled: t.isDisabled, icon: "check" },
                        on: { click: t.onSave },
                      },
                      [t._v(" " + t._s(t.$t("save")) + " ")]
                    ),
                  ],
                  1
                )
              : t._e(),
            s(
              "k-dialog",
              {
                ref: "revert",
                attrs: {
                  "submit-button": t.$t("revert"),
                  icon: "undo",
                  theme: "negative",
                },
                on: { submit: t.onRevert },
              },
              [
                s("k-text", {
                  domProps: { innerHTML: t._s(t.$t("revert.confirm")) },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      nn = [],
      an = {
        data() {
          return { supportsLocking: !0 };
        },
        computed: {
          api() {
            return {
              lock: [this.$route.path + "/lock", null, null, !0],
              unlock: [this.$route.path + "/unlock", null, null, !0],
            };
          },
          hasChanges() {
            return this.$store.getters["content/hasChanges"]();
          },
          form() {
            return {
              lock: this.$store.state.content.status.lock,
              unlock: this.$store.state.content.status.unlock,
            };
          },
          id() {
            return this.$store.state.content.current;
          },
          isDisabled() {
            return !1 === this.$store.state.content.status.enabled;
          },
          isLocked() {
            return null !== this.form.lock;
          },
          isUnlocked() {
            return null !== this.form.unlock;
          },
          mode() {
            return !0 === this.isUnlocked
              ? "unlock"
              : !0 === this.isLocked
              ? "lock"
              : !0 === this.hasChanges
              ? "changes"
              : null;
          },
        },
        watch: {
          hasChanges(t, e) {
            if (!1 === e && !0 === t)
              return (
                this.$store.dispatch("heartbeat/remove", this.getLock),
                void this.$store.dispatch("heartbeat/add", [this.setLock, 30])
              );
            this.id && !0 === e && !1 === t && this.removeLock();
          },
          id() {
            this.id &&
              !1 === this.hasChanges &&
              this.$store.dispatch("heartbeat/add", [this.getLock, 10]);
          },
        },
        created() {
          this.$events.$on("keydown.cmd.s", this.onSave);
        },
        destroyed() {
          this.$events.$off("keydown.cmd.s", this.onSave);
        },
        methods: {
          getLock() {
            return this.$api
              .get(...this.api.lock)
              .then((t) => {
                if (!1 === t.supported)
                  return (
                    (this.supportsLocking = !1),
                    void this.$store.dispatch("heartbeat/remove", this.getLock)
                  );
                !1 === t.locked
                  ? (this.isLocked &&
                      this.form.lock.user !==
                        this.$store.state.user.current.id &&
                      this.$events.$emit("model.reload"),
                    this.$store.dispatch("content/lock", null))
                  : this.$store.dispatch("content/lock", t.locked);
              })
              .catch(() => {});
          },
          setLock() {
            !0 === this.supportsLocking &&
              this.$api.patch(...this.api.lock).catch((t) => {
                if ("error.lock.notImplemented" === t.key)
                  return (
                    (this.supportsLocking = !1),
                    this.$store.dispatch("heartbeat/remove", this.setLock),
                    !1
                  );
                this.$store.dispatch("content/revert", this.id),
                  this.$store.dispatch("heartbeat/remove", this.setLock),
                  this.$store.dispatch("heartbeat/add", [this.getLock, 10]);
              });
          },
          removeLock() {
            !0 === this.supportsLocking &&
              (this.$store.dispatch("heartbeat/remove", this.setLock),
              this.$api
                .delete(...this.api.lock)
                .then(() => {
                  this.$store.dispatch("content/lock", null),
                    this.$store.dispatch("heartbeat/add", [this.getLock, 10]);
                })
                .catch(() => {}));
          },
          setUnlock() {
            !0 === this.supportsLocking &&
              (this.$store.dispatch("heartbeat/remove", this.setLock),
              this.$api
                .patch(...this.api.unlock)
                .then(() => {
                  this.$store.dispatch("content/lock", null),
                    this.$store.dispatch("heartbeat/add", [this.getLock, 10]);
                })
                .catch(() => {}));
          },
          removeUnlock() {
            !0 === this.supportsLocking &&
              (this.$store.dispatch("heartbeat/remove", this.setLock),
              this.$api
                .delete(...this.api.unlock)
                .then(() => {
                  this.$store.dispatch("content/unlock", null),
                    this.$store.dispatch("heartbeat/add", [this.getLock, 10]);
                })
                .catch(() => {}));
          },
          onDownload() {
            let t = "";
            Object.keys(this.form.unlock).forEach((e) => {
              (t += e + ": \n\n" + this.form.unlock[e]), (t += "\n\n----\n\n");
            });
            let e = document.createElement("a");
            e.setAttribute(
              "href",
              "data:text/plain;charset=utf-8," + encodeURIComponent(t)
            ),
              e.setAttribute("download", this.id + ".txt"),
              (e.style.display = "none"),
              document.body.appendChild(e),
              e.click(),
              document.body.removeChild(e);
          },
          onResolve() {
            this.$store.dispatch("content/revert"), this.removeUnlock();
          },
          onRevert() {
            this.$store.dispatch("content/revert"), this.$refs.revert.close();
          },
          onSave(t) {
            return (
              !!t &&
              (t.preventDefault && t.preventDefault(),
              !1 === this.hasChanges ||
                void this.$store
                  .dispatch("content/save")
                  .then(() => {
                    this.$events.$emit("model.update"),
                      this.$store.dispatch("notification/success", ":)");
                  })
                  .catch((t) => {
                    403 !== t.code &&
                      (t.details && Object.keys(t.details).length > 0
                        ? this.$store.dispatch("notification/error", {
                            message: this.$t("error.form.incomplete"),
                            details: t.details,
                          })
                        : this.$store.dispatch("notification/error", {
                            message: this.$t("error.form.notSaved"),
                            details: [
                              {
                                label: "Exception: " + t.exception,
                                message: t.message,
                              },
                            ],
                          }));
                  }))
            );
          },
        },
      },
      rn = an,
      on = (s("18dd"), Object(c["a"])(rn, sn, nn, !1, null, null, null)),
      ln = on.exports,
      cn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.hasChanges
          ? s(
              "k-dropdown",
              { staticClass: "k-form-indicator" },
              [
                s(
                  "k-button",
                  { staticClass: "k-topbar-button", on: { click: t.toggle } },
                  [
                    s("k-icon", {
                      staticClass: "k-form-indicator-icon",
                      attrs: { type: "edit" },
                    }),
                  ],
                  1
                ),
                s(
                  "k-dropdown-content",
                  { ref: "list", attrs: { align: "right" } },
                  [
                    s("p", { staticClass: "k-form-indicator-info" }, [
                      t._v(" " + t._s(t.$t("lock.unsaved")) + ": "),
                    ]),
                    s("hr"),
                    t._l(t.entries, function (e) {
                      return s(
                        "k-dropdown-item",
                        {
                          key: e.id,
                          attrs: { icon: e.icon },
                          nativeOn: {
                            click: function (s) {
                              return s.stopPropagation(), t.go(e.target);
                            },
                          },
                        },
                        [t._v(" " + t._s(e.label) + " ")]
                      );
                    }),
                  ],
                  2
                ),
              ],
              1
            )
          : t._e();
      },
      un = [],
      dn = {
        data() {
          return { isOpen: !1, entries: [] };
        },
        computed: {
          store() {
            return this.$store.state.content.models;
          },
          models() {
            const t = Object.keys(this.store).filter((t) => !!this.store[t]);
            let e = t.map((t) => ({ id: t, ...this.store[t] }));
            return e.filter((t) => Object.keys(t.changes).length > 0);
          },
          hasChanges() {
            return this.models.length > 0;
          },
        },
        methods: {
          go(t) {
            if (
              t.language &&
              this.$store.state.languages.current.code !== t.language
            ) {
              const e = this.$store.state.languages.all.filter(
                (e) => e.code === t.language
              )[0];
              this.$store.dispatch("languages/current", e);
            }
            this.$go(t.link);
          },
          load() {
            const t = this.models.map((t) =>
              this.$api
                .get(t.api, { view: "compact" }, null, !0)
                .then((e) => {
                  let s;
                  if (
                    ((s =
                      !0 === t.id.startsWith("pages/")
                        ? {
                            icon: "page",
                            label: e.title,
                            target: { link: this.$api.pages.link(e.id) },
                          }
                        : !0 === t.id.startsWith("files/")
                        ? {
                            icon: "image",
                            label: e.filename,
                            target: { link: e.link },
                          }
                        : !0 === t.id.startsWith("users/")
                        ? {
                            icon: "user",
                            label: e.email,
                            target: { link: this.$api.users.link(e.id) },
                          }
                        : {
                            icon: "home",
                            label: e.title,
                            target: { link: "/site" },
                          }),
                    this.$store.state.languages.current)
                  ) {
                    const e = t.id.split("/").pop();
                    (s.label = s.label + " (" + e + ")"),
                      (s.target.language = e);
                  }
                  return s;
                })
                .catch(
                  () => (this.$store.dispatch("content/remove", t.id), null)
                )
            );
            return Promise.all(t).then((t) => {
              (this.entries = t.filter((t) => null !== t)),
                0 === this.entries.length &&
                  this.$store.dispatch(
                    "notification/success",
                    this.$t("lock.unsaved.empty")
                  );
            });
          },
          toggle() {
            !1 === this.$refs.list.isOpen
              ? this.load().then(() => {
                  this.$refs.list && this.$refs.list.toggle();
                })
              : this.$refs.list.toggle();
          },
        },
      },
      pn = dn,
      hn = (s("9e26"), Object(c["a"])(pn, cn, un, !1, null, null, null)),
      mn = hn.exports,
      fn = s("38b6"),
      gn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "fieldset",
          { staticClass: "k-fieldset" },
          [
            s(
              "k-grid",
              [
                t._l(t.fields, function (e, i) {
                  return [
                    "hidden" !== e.type && t.meetsCondition(e)
                      ? s(
                          "k-column",
                          { key: e.signature, attrs: { width: e.width } },
                          [
                            s(
                              "k-error-boundary",
                              [
                                t.hasFieldType(e.type)
                                  ? s(
                                      "k-" + e.type + "-field",
                                      t._b(
                                        {
                                          ref: i,
                                          refInFor: !0,
                                          tag: "component",
                                          attrs: {
                                            name: i,
                                            novalidate: t.novalidate,
                                            disabled: t.disabled || e.disabled,
                                          },
                                          on: {
                                            input: function (s) {
                                              return t.$emit(
                                                "input",
                                                t.value,
                                                e,
                                                i
                                              );
                                            },
                                            focus: function (s) {
                                              return t.$emit("focus", s, e, i);
                                            },
                                            invalid: function (s, n) {
                                              return t.onInvalid(s, n, e, i);
                                            },
                                            submit: function (s) {
                                              return t.$emit("submit", s, e, i);
                                            },
                                          },
                                          model: {
                                            value: t.value[i],
                                            callback: function (e) {
                                              t.$set(t.value, i, e);
                                            },
                                            expression: "value[fieldName]",
                                          },
                                        },
                                        "component",
                                        e,
                                        !1
                                      )
                                    )
                                  : s(
                                      "k-box",
                                      { attrs: { theme: "negative" } },
                                      [
                                        s(
                                          "k-text",
                                          { attrs: { size: "small" } },
                                          [
                                            t._v(" The field type "),
                                            s("strong", [
                                              t._v('"' + t._s(i) + '"'),
                                            ]),
                                            t._v(" does not exist "),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : t._e(),
                  ];
                }),
              ],
              2
            ),
          ],
          1
        );
      },
      bn = [],
      kn = {
        props: {
          config: Object,
          disabled: Boolean,
          fields: {
            type: [Array, Object],
            default() {
              return [];
            },
          },
          novalidate: { type: Boolean, default: !1 },
          value: {
            type: Object,
            default() {
              return {};
            },
          },
        },
        data() {
          return { errors: {} };
        },
        methods: {
          focus(t) {
            if (t)
              return void (
                this.hasField(t) &&
                "function" === typeof this.$refs[t][0].focus &&
                this.$refs[t][0].focus()
              );
            const e = Object.keys(this.$refs)[0];
            this.focus(e);
          },
          hasFieldType(t) {
            return this.$helper.isComponent(`k-${t}-field`);
          },
          hasField(t) {
            return this.$refs[t] && this.$refs[t][0];
          },
          meetsCondition(t) {
            if (!t.when) return !0;
            let e = !0;
            return (
              Object.keys(t.when).forEach((s) => {
                const i = this.value[s.toLowerCase()],
                  n = t.when[s];
                i !== n && (e = !1);
              }),
              e
            );
          },
          onInvalid(t, e, s, i) {
            (this.errors[i] = e), this.$emit("invalid", this.errors);
          },
          hasErrors() {
            return Object.keys(this.errors).length;
          },
        },
      },
      vn = kn,
      $n = (s("862b"), Object(c["a"])(vn, gn, bn, !1, null, null, null)),
      yn = $n.exports,
      _n = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-input",
            attrs: {
              "data-disabled": t.disabled,
              "data-invalid": !t.novalidate && t.isInvalid,
              "data-theme": t.theme,
              "data-type": t.type,
            },
          },
          [
            t.$slots.before || t.before
              ? s(
                  "span",
                  { staticClass: "k-input-before", on: { click: t.focus } },
                  [t._t("before", [t._v(t._s(t.before))])],
                  2
                )
              : t._e(),
            s(
              "span",
              {
                staticClass: "k-input-element",
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.focus(e);
                  },
                },
              },
              [
                t._t("default", [
                  s(
                    "k-" + t.type + "-input",
                    t._g(
                      t._b(
                        {
                          ref: "input",
                          tag: "component",
                          attrs: { value: t.value },
                        },
                        "component",
                        t.inputProps,
                        !1
                      ),
                      t.listeners
                    )
                  ),
                ]),
              ],
              2
            ),
            t.$slots.after || t.after
              ? s(
                  "span",
                  { staticClass: "k-input-after", on: { click: t.focus } },
                  [t._t("after", [t._v(t._s(t.after))])],
                  2
                )
              : t._e(),
            t.$slots.icon || t.icon
              ? s(
                  "span",
                  { staticClass: "k-input-icon", on: { click: t.focus } },
                  [t._t("icon", [s("k-icon", { attrs: { type: t.icon } })])],
                  2
                )
              : t._e(),
          ]
        );
      },
      wn = [],
      xn = {
        inheritAttrs: !1,
        props: {
          after: String,
          autofocus: Boolean,
          before: String,
          disabled: Boolean,
          type: String,
          icon: [String, Boolean],
          invalid: Boolean,
          theme: String,
          novalidate: { type: Boolean, default: !1 },
          value: {
            type: [String, Boolean, Number, Object, Array],
            default: null,
          },
        },
        data() {
          return {
            isInvalid: this.invalid,
            listeners: {
              ...this.$listeners,
              invalid: (t, e) => {
                (this.isInvalid = t), this.$emit("invalid", t, e);
              },
            },
          };
        },
        computed: {
          inputProps() {
            return { ...this.$props, ...this.$attrs };
          },
        },
        methods: {
          blur(t) {
            t &&
              t.relatedTarget &&
              !1 === this.$el.contains(t.relatedTarget) &&
              this.trigger(null, "blur");
          },
          focus(t) {
            this.trigger(t, "focus");
          },
          select(t) {
            this.trigger(t, "select");
          },
          trigger(t, e) {
            if (
              t &&
              t.target &&
              "INPUT" === t.target.tagName &&
              "function" === typeof t.target[e]
            )
              return void t.target[e]();
            if (this.$refs.input && "function" === typeof this.$refs.input[e])
              return void this.$refs.input[e]();
            const s = this.$el.querySelector("input, select, textarea");
            s && "function" === typeof s[e] && s[e]();
          },
        },
      },
      On = xn,
      Cn = (s("c7c8"), Object(c["a"])(On, _n, wn, !1, null, null, null)),
      Sn = Cn.exports,
      En = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "form",
          {
            staticClass: "k-login-form",
            on: {
              submit: function (e) {
                return e.preventDefault(), t.login(e);
              },
            },
          },
          [
            s("h1", { staticClass: "k-offscreen" }, [
              t._v(" " + t._s(t.$t("login")) + " "),
            ]),
            t.issue
              ? s(
                  "div",
                  {
                    staticClass: "k-login-alert",
                    on: {
                      click: function (e) {
                        t.issue = null;
                      },
                    },
                  },
                  [
                    s("span", [t._v(t._s(t.issue))]),
                    s("k-icon", { attrs: { type: "alert" } }),
                  ],
                  1
                )
              : t._e(),
            s(
              "div",
              { staticClass: "k-login-fields" },
              [
                !0 === t.canToggle
                  ? s(
                      "button",
                      {
                        staticClass: "k-login-toggler",
                        attrs: { type: "button" },
                        on: { click: t.toggleForm },
                      },
                      [t._v(" " + t._s(t.toggleText) + " ")]
                    )
                  : t._e(),
                s("k-fieldset", {
                  ref: "fieldset",
                  attrs: { novalidate: !0, fields: t.fields },
                  model: {
                    value: t.user,
                    callback: function (e) {
                      t.user = e;
                    },
                    expression: "user",
                  },
                }),
              ],
              1
            ),
            s(
              "div",
              { staticClass: "k-login-buttons" },
              [
                !1 === t.isResetForm
                  ? s(
                      "span",
                      { staticClass: "k-login-checkbox" },
                      [
                        s("k-checkbox-input", {
                          attrs: {
                            value: t.user.remember,
                            label: t.$t("login.remember"),
                          },
                          on: {
                            input: function (e) {
                              t.user.remember = e;
                            },
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                s(
                  "k-button",
                  {
                    staticClass: "k-login-button",
                    attrs: { icon: "check", type: "submit" },
                  },
                  [
                    t._v(
                      " " +
                        t._s(t.$t("login" + (t.isResetForm ? ".reset" : ""))) +
                        " "
                    ),
                    t.isLoading ? [t._v(" … ")] : t._e(),
                  ],
                  2
                ),
              ],
              1
            ),
          ]
        );
      },
      jn = [],
      Tn = {
        data() {
          return {
            currentForm: null,
            isLoading: !1,
            issue: "",
            user: { email: "", password: "", remember: !1 },
          };
        },
        computed: {
          canToggle() {
            let t = this.$store.state.system.info.loginMethods;
            return (
              null !== this.codeMode &&
              !0 === t.includes("password") &&
              (!0 === t.includes("password-reset") || !0 === t.includes("code"))
            );
          },
          codeMode() {
            let t = this.$store.state.system.info.loginMethods;
            return !0 === t.includes("password-reset")
              ? "password-reset"
              : !0 === t.includes("code")
              ? "code"
              : null;
          },
          fields() {
            let t = {
              email: {
                autofocus: !0,
                label: this.$t("email"),
                type: "email",
                required: !0,
                link: !1,
              },
            };
            return (
              "email-password" === this.form &&
                (t.password = {
                  label: this.$t("password"),
                  type: "password",
                  minLength: 8,
                  required: !0,
                  autocomplete: "current-password",
                  counter: !1,
                }),
              t
            );
          },
          form() {
            return this.currentForm
              ? this.currentForm
              : "password" === this.$store.state.system.info.loginMethods[0]
              ? "email-password"
              : "email";
          },
          isResetForm() {
            return "password-reset" === this.codeMode && "email" === this.form;
          },
          toggleText() {
            return this.$t(
              "login.toggleText." +
                this.codeMode +
                "." +
                this.formOpposite(this.form)
            );
          },
        },
        methods: {
          formOpposite(t) {
            return "email-password" === t ? "email" : "email-password";
          },
          async login() {
            (this.issue = null), (this.isLoading = !0);
            let t = Object.assign({}, this.user);
            "email" === this.currentForm && (t.password = null),
              !0 === this.isResetForm && (t.remember = !1);
            try {
              const e = await this.$api.auth.login(t);
              e.challenge
                ? this.$store.dispatch("user/pending", {
                    email: t.email,
                    challenge: e.challenge,
                  })
                : (this.$store.dispatch("user/login", e.user),
                  await this.$store.dispatch("system/load", !0),
                  this.$store.dispatch(
                    "notification/success",
                    this.$t("welcome")
                  ));
            } catch (e) {
              this.issue = e.message;
            } finally {
              this.isLoading = !1;
            }
          },
          toggleForm() {
            (this.currentForm = this.formOpposite(this.form)),
              this.$refs.fieldset.focus("email");
          },
        },
      },
      Ln = Tn,
      In = Object(c["a"])(Ln, En, jn, !1, null, null, null),
      An = In.exports,
      Bn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "form",
          {
            staticClass: "k-login-form k-login-code-form",
            on: {
              submit: function (e) {
                return e.preventDefault(), t.login(e);
              },
            },
          },
          [
            s("h1", { staticClass: "k-offscreen" }, [
              t._v(" " + t._s(t.$t("login")) + " "),
            ]),
            t.issue
              ? s(
                  "div",
                  {
                    staticClass: "k-login-alert",
                    on: {
                      click: function (e) {
                        t.issue = null;
                      },
                    },
                  },
                  [
                    s("span", [t._v(t._s(t.issue))]),
                    s("k-icon", { attrs: { type: "alert" } }),
                  ],
                  1
                )
              : t._e(),
            s("k-user-info", {
              attrs: { user: t.$store.state.user.pendingEmail },
            }),
            s("k-text-field", {
              attrs: {
                autofocus: !0,
                counter: !1,
                help: t.$t(
                  "login.code.text." + t.$store.state.user.pendingChallenge
                ),
                label: t.$t("login.code.label." + t.mode),
                novalidate: !0,
                placeholder: t.$t(
                  "login.code.placeholder." +
                    t.$store.state.user.pendingChallenge
                ),
                required: !0,
                autocomplete: "one-time-code",
                icon: "unlock",
                name: "code",
              },
              model: {
                value: t.code,
                callback: function (e) {
                  t.code = e;
                },
                expression: "code",
              },
            }),
            s(
              "div",
              { staticClass: "k-login-buttons" },
              [
                s(
                  "k-button",
                  {
                    staticClass: "k-login-button k-login-back-button",
                    attrs: { icon: "angle-left" },
                    on: { click: t.back },
                  },
                  [
                    t._v(" " + t._s(t.$t("back")) + " "),
                    t.isLoadingBack ? [t._v(" … ")] : t._e(),
                  ],
                  2
                ),
                s(
                  "k-button",
                  {
                    staticClass: "k-login-button",
                    attrs: { icon: "check", type: "submit" },
                  },
                  [
                    t._v(
                      " " +
                        t._s(
                          t.$t(
                            "login" +
                              ("password-reset" === t.mode ? ".reset" : "")
                          )
                        ) +
                        " "
                    ),
                    t.isLoadingLogin ? [t._v(" … ")] : t._e(),
                  ],
                  2
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Mn = [],
      Dn = {
        data() {
          return { code: "", isLoadingBack: !1, isLoadingLogin: !1, issue: "" };
        },
        computed: {
          mode() {
            return !0 ===
              this.$store.state.system.info.loginMethods.includes(
                "password-reset"
              )
              ? "password-reset"
              : "login";
          },
        },
        methods: {
          async back() {
            (this.isLoadingBack = !0),
              await this.$store.dispatch("user/logout"),
              (this.isLoadingBack = !1);
          },
          async login() {
            (this.issue = null), (this.isLoadingLogin = !0);
            try {
              const t = await this.$api.auth.verifyCode(this.code);
              "password-reset" === this.mode &&
                this.$store.dispatch("user/visit", "/reset-password"),
                this.$store.dispatch("user/login", t.user),
                await this.$store.dispatch("system/load", !0),
                this.$store.dispatch(
                  "notification/success",
                  this.$t("welcome")
                );
            } catch (t) {
              this.issue = t.message;
            } finally {
              this.isLoadingLogin = !1;
            }
          },
        },
      },
      Nn = Dn,
      Pn = (s("e1f3"), Object(c["a"])(Nn, Bn, Mn, !1, null, null, null)),
      Rn = Pn.exports,
      qn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-upload" },
          [
            s("input", {
              ref: "input",
              attrs: {
                accept: t.options.accept,
                multiple: t.options.multiple,
                "aria-hidden": "true",
                type: "file",
                tabindex: "-1",
              },
              on: {
                change: t.select,
                click: function (t) {
                  t.stopPropagation();
                },
              },
            }),
            s(
              "k-dialog",
              {
                ref: "dialog",
                attrs: {
                  "cancel-button": !1,
                  "submit-button": !1,
                  size: "medium",
                },
              },
              [
                t.errors.length > 0
                  ? [
                      s("k-headline", [t._v(t._s(t.$t("upload.errors")))]),
                      s(
                        "ul",
                        { staticClass: "k-upload-error-list" },
                        t._l(t.errors, function (e, i) {
                          return s("li", { key: "error-" + i }, [
                            s("p", { staticClass: "k-upload-error-filename" }, [
                              t._v(" " + t._s(e.file.name) + " "),
                            ]),
                            s("p", { staticClass: "k-upload-error-message" }, [
                              t._v(" " + t._s(e.message) + " "),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]
                  : [
                      s("k-headline", [t._v(t._s(t.$t("upload.progress")))]),
                      s(
                        "ul",
                        { staticClass: "k-upload-list" },
                        t._l(t.files, function (e, i) {
                          return s(
                            "li",
                            { key: "file-" + i },
                            [
                              s("k-progress", { ref: e.name, refInFor: !0 }),
                              s(
                                "p",
                                { staticClass: "k-upload-list-filename" },
                                [t._v(" " + t._s(e.name) + " ")]
                              ),
                              s("p", [t._v(t._s(t.errors[e.name]))]),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ],
                s(
                  "template",
                  { slot: "footer" },
                  [
                    t.errors.length > 0
                      ? [
                          s(
                            "k-button-group",
                            [
                              s(
                                "k-button",
                                {
                                  attrs: { icon: "check" },
                                  on: {
                                    click: function (e) {
                                      return t.$refs.dialog.close();
                                    },
                                  },
                                },
                                [t._v(" " + t._s(t.$t("confirm")) + " ")]
                              ),
                            ],
                            1
                          ),
                        ]
                      : t._e(),
                  ],
                  2
                ),
              ],
              2
            ),
          ],
          1
        );
      },
      Fn = [],
      Un = {
        props: {
          url: { type: String },
          accept: { type: String, default: "*" },
          attributes: { type: Object },
          multiple: { type: Boolean, default: !0 },
          max: { type: Number },
        },
        data() {
          return {
            options: this.$props,
            completed: {},
            errors: [],
            files: [],
            total: 0,
          };
        },
        methods: {
          open(t) {
            this.params(t),
              setTimeout(() => {
                this.$refs.input.click();
              }, 1);
          },
          params(t) {
            this.options = Object.assign({}, this.$props, t);
          },
          select(t) {
            this.upload(t.target.files);
          },
          drop(t, e) {
            this.params(e), this.upload(t);
          },
          upload(t) {
            this.$refs.dialog.open(),
              (this.files = [...t]),
              (this.completed = {}),
              (this.errors = []),
              (this.hasErrors = !1),
              this.options.max &&
                (this.files = this.files.slice(0, this.options.max)),
              (this.total = this.files.length),
              this.files.forEach((t) => {
                this.$helper.upload(t, {
                  url: this.options.url,
                  attributes: this.options.attributes,
                  headers: { "X-CSRF": window.panel.csrf },
                  progress: (t, e, s) => {
                    this.$refs[e.name] &&
                      this.$refs[e.name][0] &&
                      this.$refs[e.name][0].set(s);
                  },
                  success: (t, e, s) => {
                    this.complete(e, s.data);
                  },
                  error: (t, e, s) => {
                    this.errors.push({ file: e, message: s.message }),
                      this.complete(e, s.data);
                  },
                });
              });
          },
          complete(t, e) {
            if (
              ((this.completed[t.name] = e),
              Object.keys(this.completed).length == this.total)
            ) {
              if (((this.$refs.input.value = ""), this.errors.length > 0))
                return (
                  this.$forceUpdate(), void this.$emit("error", this.files)
                );
              setTimeout(() => {
                this.$refs.dialog.close(),
                  this.$emit(
                    "success",
                    this.files,
                    Object.values(this.completed)
                  );
              }, 250);
            }
          },
        },
      },
      Hn = Un,
      zn = (s("5aee"), Object(c["a"])(Hn, qn, Fn, !1, null, null, null)),
      Kn = zn.exports,
      Gn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            ref: "editor",
            staticClass: "k-writer",
            attrs: {
              "data-empty": t.isEmpty,
              "data-placeholder": t.placeholder,
              spellcheck: t.spellcheck,
            },
          },
          [
            t.editor
              ? [
                  t.toolbar.visible
                    ? s("k-writer-toolbar", {
                        ref: "toolbar",
                        style: {
                          bottom: t.toolbar.position.bottom + "px",
                          left: t.toolbar.position.left + "px",
                        },
                        attrs: {
                          editor: t.editor,
                          "active-marks": t.toolbar.marks,
                          "active-nodes": t.toolbar.nodes,
                        },
                        on: {
                          command: function (e) {
                            return t.editor.command(e);
                          },
                        },
                      })
                    : t._e(),
                  s("k-writer-link-dialog", {
                    ref: "linkDialog",
                    on: {
                      close: function (e) {
                        return t.editor.focus();
                      },
                      submit: function (e) {
                        return t.editor.command("toggleLink", e);
                      },
                    },
                  }),
                ]
              : t._e(),
          ],
          2
        );
      },
      Wn = [],
      Yn = (s("bf19"), s("5313")),
      Vn = s("576a"),
      Jn = s("304a"),
      Zn = s("7f06"),
      Xn = s("0010"),
      Qn = s("f95e"),
      ta = s("665f");
    function ea(t, e) {
      const { from: s, to: i } = t.selection;
      let n = [];
      t.doc.nodesBetween(s, i, (t) => {
        n = [...n, ...t.marks];
      });
      const a = n.find((t) => t.type.name === e.name);
      return a ? a.attrs : {};
    }
    function sa(t, e, s) {
      let i = [];
      return (
        s.doc.nodesBetween(t, e, (t, e) => {
          i = [
            ...i,
            ...t.marks.map((s) => ({ start: e, end: e + t.nodeSize, mark: s })),
          ];
        }),
        i
      );
    }
    var ia = function (t, e, s) {
      return new Qn["a"](t, (t, i, n, a) => {
        const r = s instanceof Function ? s(i) : s,
          { tr: o } = t,
          l = i.length - 1;
        let c = a,
          u = n;
        if (i[l]) {
          const s = n + i[0].indexOf(i[l - 1]),
            r = s + i[l - 1].length - 1,
            d = s + i[l - 1].lastIndexOf(i[l]),
            p = d + i[l].length,
            h = sa(n, a, t)
              .filter((t) => {
                const { excluded: s } = t.mark.type;
                return s.find((t) => t.name === e.name);
              })
              .filter((t) => t.end > s);
          if (h.length) return !1;
          p < r && o.delete(p, r),
            d > s && o.delete(s, d),
            (u = s),
            (c = u + i[l].length);
        }
        return o.addMark(u, c, e.create(r)), o.removeStoredMark(e), o;
      });
    };
    function na(t, e) {
      const { from: s, $from: i, to: n, empty: a } = t.selection;
      return a
        ? !!e.isInSet(t.storedMarks || i.marks())
        : !!t.doc.rangeHasMark(s, n, e);
    }
    var aa = function (t, e, s) {
      const i = (n, a) => {
        const r = [];
        return (
          n.forEach((n) => {
            if (n.isText) {
              const { text: i, marks: o } = n;
              let l,
                c = 0;
              const u = !!o.filter((t) => "link" === t.type.name)[0];
              while (!u && null !== (l = t.exec(i)))
                if (a && a.type.allowsMarkType(e) && l[1]) {
                  const t = l.index,
                    i = t + l[0].length,
                    a = t + l[0].indexOf(l[1]),
                    o = a + l[1].length,
                    u = s instanceof Function ? s(l) : s;
                  t > 0 && r.push(n.cut(c, t)),
                    r.push(n.cut(a, o).mark(e.create(u).addToSet(n.marks))),
                    (c = i);
                }
              c < i.length && r.push(n.cut(c));
            } else r.push(n.copy(i(n.content, n)));
          }),
          Jn["c"].fromArray(r)
        );
      };
      return new Yn["d"]({
        props: {
          transformPasted: (t) =>
            new Jn["j"](i(t.content), t.openStart, t.openEnd),
        },
      });
    };
    function ra(t = 0, e = 0, s = 0) {
      return Math.min(Math.max(parseInt(t, 10), e), s);
    }
    var oa = function (t, e, s) {
        return new Qn["a"](t, (t, i, n, a) => {
          const r = s instanceof Function ? s(i) : s,
            { tr: o } = t;
          return i[0] && o.replaceWith(n - 1, a, e.create(r)), o;
        });
      },
      la = (t, e) => {
        for (let s = t.depth; s > 0; s--) {
          const i = t.node(s);
          if (e(i))
            return {
              pos: s > 0 ? t.before(s) : 0,
              start: t.start(s),
              depth: s,
              node: i,
            };
        }
      },
      ca =
        (t) =>
        ({ $from: e }) =>
          la(e, t),
      ua = (t) => t instanceof Yn["c"],
      da = (t, e) =>
        (Array.isArray(t) && t.indexOf(e.type) > -1) || e.type === t,
      pa = (t) => (e) => {
        if (ua(e)) {
          const { node: s, $from: i } = e;
          if (da(t, s)) return { node: s, pos: i.pos, depth: i.depth };
        }
      },
      ha = (t, e, s = {}) => {
        const i = (t) => t.type === e,
          n = pa(e)(t.selection) || ca(i)(t.selection);
        return Object.keys(s).length && n
          ? n.node.hasMarkup(e, { ...n.node.attrs, ...s })
          : !!n;
      };
    function ma(t = null, e = null) {
      if (!t || !e) return !1;
      const s = t.parent.childAfter(t.parentOffset);
      if (!s.node) return !1;
      const i = s.node.marks.find((t) => t.type === e);
      if (!i) return !1;
      let n = t.index(),
        a = t.start() + s.offset,
        r = n + 1,
        o = a + s.node.nodeSize;
      while (n > 0 && i.isInSet(t.parent.child(n - 1).marks))
        (n -= 1), (a -= t.parent.child(n).nodeSize);
      while (r < t.parent.childCount && i.isInSet(t.parent.child(r).marks))
        (o += t.parent.child(r).nodeSize), (r += 1);
      return { from: a, to: o };
    }
    var fa = function (t) {
        return (e, s) => {
          const { tr: i, selection: n } = e;
          let { from: a, to: r } = n;
          const { $from: o, empty: l } = n;
          if (l) {
            const e = ma(o, t);
            (a = e.from), (r = e.to);
          }
          return i.removeMark(a, r, t), s(i);
        };
      },
      ga = function (t, e, s) {
        const i = (n) => {
          const a = [];
          return (
            n.forEach((n) => {
              if (n.isText) {
                const { text: i } = n;
                let r,
                  o = 0;
                do {
                  if (((r = t.exec(i)), r)) {
                    const t = r.index,
                      i = t + r[0].length,
                      l = s instanceof Function ? s(r[0]) : s;
                    t > 0 && a.push(n.cut(o, t)),
                      a.push(n.cut(t, i).mark(e.create(l).addToSet(n.marks))),
                      (o = i);
                  }
                } while (r);
                o < i.length && a.push(n.cut(o));
              } else a.push(n.copy(i(n.content)));
            }),
            Jn["c"].fromArray(a)
          );
        };
        return new Yn["d"]({
          props: {
            transformPasted: (t) =>
              new Jn["j"](i(t.content), t.openStart, t.openEnd),
          },
        });
      },
      ba = function (t, e, s = {}) {
        return (i, n, a) => {
          const r = ha(i, t, s);
          return r
            ? Object(Xn["d"])(e)(i, n, a)
            : Object(Xn["d"])(t, s)(i, n, a);
        };
      };
    function ka(t, e) {
      return (
        t.type === e.nodes.bulletList ||
        t.type === e.nodes.orderedList ||
        t.type === e.nodes.todoList
      );
    }
    function va(t, e) {
      return (s, i, n) => {
        const { schema: a, selection: r } = s,
          { $from: o, $to: l } = r,
          c = o.blockRange(l);
        if (!c) return !1;
        const u = ca((t) => ka(t, a))(r);
        if (c.depth >= 1 && u && c.depth - u.depth <= 1) {
          if (u.node.type === t) return Object(ta["b"])(e)(s, i, n);
          if (ka(u.node, a) && t.validContent(u.node.content)) {
            const { tr: e } = s;
            return e.setNodeMarkup(u.pos, t), i && i(e), !1;
          }
        }
        return Object(ta["e"])(t)(s, i, n);
      };
    }
    var $a = function (t, e) {
        return (s, i) => {
          const { tr: n, selection: a, doc: r } = s,
            { ranges: o, empty: l } = a;
          if (l) {
            const { from: s, to: i } = ma(a.$from, t);
            r.rangeHasMark(s, i, t) && n.removeMark(s, i, t),
              n.addMark(s, i, t.create(e));
          } else
            o.forEach((s) => {
              const { $to: i, $from: a } = s;
              r.rangeHasMark(a.pos, i.pos, t) && n.removeMark(a.pos, i.pos, t),
                n.addMark(a.pos, i.pos, t.create(e));
            });
          return i(n);
        };
      },
      ya = {
        chainCommands: Xn["b"],
        exitCode: Xn["c"],
        setBlockType: Xn["d"],
        toggleMark: Xn["e"],
        wrappingInputRule: Qn["e"],
        textblockTypeInputRule: Qn["c"],
        addListNodes: ta["a"],
        wrapInList: ta["e"],
        splitListItem: ta["d"],
        liftListItem: ta["b"],
        sinkListItem: ta["c"],
        getMarkAttrs: ea,
        markInputRule: ia,
        markIsActive: na,
        markPasteRule: aa,
        minMax: ra,
        nodeIsActive: ha,
        nodeInputRule: oa,
        pasteRule: ga,
        removeMark: fa,
        toggleBlockType: ba,
        toggleList: va,
        updateMark: $a,
      };
    class _a {
      emit(t, ...e) {
        this._callbacks = this._callbacks || {};
        const s = this._callbacks[t];
        return s && s.forEach((t) => t.apply(this, e)), this;
      }
      off(t, e) {
        if (arguments.length) {
          const s = this._callbacks ? this._callbacks[t] : null;
          s &&
            (e
              ? (this._callbacks[t] = s.filter((t) => t !== e))
              : delete this._callbacks[t]);
        } else this._callbacks = {};
        return this;
      }
      on(t, e) {
        return (
          (this._callbacks = this._callbacks || {}),
          (this._callbacks[t] = this._callbacks[t] || []),
          this._callbacks[t].push(e),
          this
        );
      }
    }
    class wa {
      constructor(t = [], e) {
        t.forEach((t) => {
          t.bindEditor(e), t.init();
        }),
          (this.extensions = t);
      }
      commands({ schema: t, view: e }) {
        return this.extensions
          .filter((t) => t.commands)
          .reduce((s, i) => {
            const { name: n, type: a } = i,
              r = {},
              o = i.commands({
                schema: t,
                utils: ya,
                ...(["node", "mark"].includes(a)
                  ? { type: t[a + "s"][n] }
                  : {}),
              }),
              l = (t, s) => {
                r[t] = (t) => {
                  if ("function" !== typeof s || !e.editable) return !1;
                  e.focus();
                  const i = s(t);
                  return "function" === typeof i
                    ? i(e.state, e.dispatch, e)
                    : i;
                };
              };
            return (
              "object" === typeof o
                ? Object.entries(o).forEach(([t, e]) => {
                    l(t, e);
                  })
                : l(n, o),
              { ...s, ...r }
            );
          }, {});
      }
      buttons(t = "mark") {
        const e = {};
        return (
          this.extensions
            .filter((e) => e.type === t)
            .filter((t) => t.button)
            .forEach((t) => {
              Array.isArray(t.button)
                ? t.button.forEach((s, i) => {
                    e[t.name + "-" + i] = s;
                  })
                : (e[t.name] = t.button);
            }),
          e
        );
      }
      getAllowedExtensions(t) {
        return t instanceof Array || !t
          ? t instanceof Array
            ? this.extensions.filter((e) => !t.includes(e.name))
            : this.extensions
          : [];
      }
      getFromExtensions(t, e, s = this.extensions) {
        return s
          .filter((t) => ["extension"].includes(t.type))
          .filter((e) => e[t])
          .map((s) => s[t]({ ...e, utils: ya }));
      }
      getFromNodesAndMarks(t, e, s = this.extensions) {
        return s
          .filter((t) => ["node", "mark"].includes(t.type))
          .filter((e) => e[t])
          .map((s) =>
            s[t]({ ...e, type: e.schema[s.type + "s"][s.name], utils: ya })
          );
      }
      inputRules({ schema: t, excludedExtensions: e }) {
        const s = this.getAllowedExtensions(e),
          i = this.getFromExtensions("inputRules", { schema: t }, s),
          n = this.getFromNodesAndMarks("inputRules", { schema: t }, s);
        return [...i, ...n].reduce((t, e) => [...t, ...e], []);
      }
      keymaps({ schema: t }) {
        const e = this.getFromExtensions("keys", { schema: t }),
          s = this.getFromNodesAndMarks("keys", { schema: t });
        return [...e, ...s].map((t) => Object(Zn["a"])(t));
      }
      get marks() {
        return this.extensions
          .filter((t) => "mark" === t.type)
          .reduce((t, { name: e, schema: s }) => ({ ...t, [e]: s }), {});
      }
      get nodes() {
        return this.extensions
          .filter((t) => "node" === t.type)
          .reduce((t, { name: e, schema: s }) => ({ ...t, [e]: s }), {});
      }
      get options() {
        const { view: t } = this;
        return this.extensions.reduce(
          (e, s) => ({
            ...e,
            [s.name]: new Proxy(s.options, {
              set(e, s, i) {
                const n = e[s] !== i;
                return (
                  Object.assign(e, { [s]: i }), n && t.updateState(t.state), !0
                );
              },
            }),
          }),
          {}
        );
      }
      pasteRules({ schema: t, excludedExtensions: e }) {
        const s = this.getAllowedExtensions(e),
          i = this.getFromExtensions("pasteRules", { schema: t }, s),
          n = this.getFromNodesAndMarks("pasteRules", { schema: t }, s);
        return [...i, ...n].reduce((t, e) => [...t, ...e], []);
      }
      plugins({ schema: t }) {
        const e = this.getFromExtensions("plugins", { schema: t }),
          s = this.getFromNodesAndMarks("plugins", { schema: t });
        return [...e, ...s]
          .reduce((t, e) => [...t, ...e], [])
          .map((t) => (t instanceof Yn["d"] ? t : new Yn["d"](t)));
      }
    }
    class xa {
      constructor(t = {}) {
        this.options = { ...this.defaults, ...t };
      }
      init() {
        return null;
      }
      bindEditor(t = null) {
        this.editor = t;
      }
      get name() {
        return null;
      }
      get type() {
        return "extension";
      }
      get defaults() {
        return {};
      }
      plugins() {
        return [];
      }
      inputRules() {
        return [];
      }
      pasteRules() {
        return [];
      }
      keys() {
        return {};
      }
    }
    class Oa extends xa {
      constructor(t = {}) {
        super(t);
      }
      get type() {
        return "node";
      }
      get schema() {
        return null;
      }
      commands() {
        return {};
      }
    }
    class Ca extends Oa {
      get defaults() {
        return { inline: !1 };
      }
      get name() {
        return "doc";
      }
      get schema() {
        return { content: this.options.inline ? "paragraph+" : "block+" };
      }
    }
    class Sa extends Oa {
      commands({ utils: t, type: e }) {
        return { paragraph: () => t.setBlockType(e) };
      }
      get schema() {
        return {
          content: "inline*",
          group: "block",
          draggable: !1,
          parseDOM: [{ tag: "p" }],
          toDOM: () => ["p", 0],
        };
      }
      get name() {
        return "paragraph";
      }
    }
    class Ea extends Oa {
      get name() {
        return "text";
      }
      get schema() {
        return { group: "inline" };
      }
    }
    class ja extends _a {
      constructor(t = {}) {
        super(),
          (this.defaults = {
            autofocus: !1,
            content: "",
            disableInputRules: !1,
            disablePasteRules: !1,
            editable: !0,
            element: null,
            extensions: [],
            emptyDocument: { type: "doc", content: [] },
            events: {},
            inline: !1,
            parseOptions: {},
            topNode: "doc",
            useBuiltInExtensions: !0,
          }),
          this.init(t);
      }
      blur() {
        this.view.dom.blur();
      }
      get builtInExtensions() {
        return this.options.useBuiltInExtensions
          ? [new Ca({ inline: this.options.inline }), new Ea(), new Sa()]
          : [];
      }
      buttons(t) {
        return this.extensions.buttons(t);
      }
      clearContent(t = !1) {
        this.setContent(this.options.emptyDocument, t);
      }
      command(t, ...e) {
        this.commands[t] && this.commands[t](...e);
      }
      createCommands() {
        return this.extensions.commands({
          schema: this.schema,
          view: this.view,
        });
      }
      createDocument(t, e = this.options.parseOptions) {
        if (null === t)
          return this.schema.nodeFromJSON(this.options.emptyDocument);
        if ("object" === typeof t)
          try {
            return this.schema.nodeFromJSON(t);
          } catch (s) {
            return (
              window.console.warn(
                "Invalid content.",
                "Passed value:",
                t,
                "Error:",
                s
              ),
              this.schema.nodeFromJSON(this.options.emptyDocument)
            );
          }
        if ("string" === typeof t) {
          const s = `<div>${t}</div>`,
            i = new window.DOMParser(),
            n = i.parseFromString(s, "text/html").body.firstElementChild;
          return Jn["a"].fromSchema(this.schema).parse(n, e);
        }
        return !1;
      }
      createEvents() {
        const t = this.options.events || {};
        return (
          Object.entries(t).forEach(([t, e]) => {
            this.on(t, e);
          }),
          t
        );
      }
      createExtensions() {
        return new wa(
          [...this.builtInExtensions, ...this.options.extensions],
          this
        );
      }
      createFocusEvents() {
        const t = (t, e, s = !0) => {
          (this.focused = s),
            this.emit(s ? "focus" : "blur", {
              event: e,
              state: t.state,
              view: t,
            });
          const i = this.state.tr.setMeta("focused", s);
          this.view.dispatch(i);
        };
        return new Yn["d"]({
          props: {
            attributes: { tabindex: 0 },
            handleDOMEvents: {
              focus: (e, s) => {
                t(e, s, !0);
              },
              blur: (e, s) => {
                t(e, s, !1);
              },
            },
          },
        });
      }
      createInputRules() {
        return this.extensions.inputRules({
          schema: this.schema,
          excludedExtensions: this.options.disableInputRules,
        });
      }
      createKeymaps() {
        return this.extensions.keymaps({ schema: this.schema });
      }
      createMarks() {
        return this.extensions.marks;
      }
      createNodes() {
        return this.extensions.nodes;
      }
      createPasteRules() {
        return this.extensions.pasteRules({
          schema: this.schema,
          excludedExtensions: this.options.disablePasteRules,
        });
      }
      createPlugins() {
        return this.extensions.plugins({ schema: this.schema });
      }
      createSchema() {
        return new Jn["i"]({
          topNode: this.options.topNode,
          nodes: this.nodes,
          marks: this.marks,
        });
      }
      createState() {
        return Yn["b"].create({
          schema: this.schema,
          doc: this.createDocument(this.options.content),
          plugins: [
            ...this.plugins,
            Object(Qn["b"])({ rules: this.inputRules }),
            ...this.pasteRules,
            ...this.keymaps,
            Object(Zn["a"])({ Backspace: Qn["d"] }),
            Object(Zn["a"])(Xn["a"]),
            this.createFocusEvents(),
          ],
        });
      }
      createView() {
        return new Vn["a"](this.element, {
          dispatchTransaction: this.dispatchTransaction.bind(this),
          editable: () => this.options.editable,
          handlePaste: (...t) => {
            this.emit("paste", ...t);
          },
          handleDrop: (...t) => {
            this.emit("drop", ...t);
          },
          state: this.createState(),
        });
      }
      destroy() {
        this.view && this.view.destroy();
      }
      dispatchTransaction(t) {
        const e = this.state,
          s = this.state.apply(t);
        this.view.updateState(s),
          (this.selection = {
            from: this.state.selection.from,
            to: this.state.selection.to,
          }),
          this.setActiveNodesAndMarks();
        const i = {
          editor: this,
          getHTML: this.getHTML.bind(this),
          getJSON: this.getJSON.bind(this),
          state: this.state,
          transaction: t,
        };
        this.emit("transaction", i),
          (!t.docChanged && t.getMeta("preventUpdate")) ||
            this.emit("update", i);
        const { from: n, to: a } = this.state.selection,
          r = !e || !e.selection.eq(s.selection);
        this.emit(s.selection.empty ? "deselect" : "select", {
          ...i,
          from: n,
          hasChanged: r,
          to: a,
        });
      }
      focus(t = null) {
        if ((this.view.focused && null === t) || !1 === t) return;
        const { from: e, to: s } = this.selectionAtPosition(t);
        this.setSelection(e, s), setTimeout(() => this.view.focus(), 10);
      }
      getHTML() {
        const t = document.createElement("div"),
          e = Jn["b"]
            .fromSchema(this.schema)
            .serializeFragment(this.state.doc.content);
        return (
          t.appendChild(e),
          this.options.inline && t.querySelector("p")
            ? t.querySelector("p").innerHTML
            : t.innerHTML
        );
      }
      getJSON() {
        return this.state.doc.toJSON();
      }
      getMarkAttrs(t = null) {
        return this.activeMarkAttrs[t];
      }
      getSchemaJSON() {
        return JSON.parse(
          JSON.stringify({ nodes: this.nodes, marks: this.marks })
        );
      }
      init(t = {}) {
        (this.options = { ...this.defaults, ...t }),
          (this.element = this.options.element),
          (this.focused = !1),
          (this.selection = { from: 0, to: 0 }),
          (this.events = this.createEvents()),
          (this.extensions = this.createExtensions()),
          (this.nodes = this.createNodes()),
          (this.marks = this.createMarks()),
          (this.schema = this.createSchema()),
          (this.keymaps = this.createKeymaps()),
          (this.inputRules = this.createInputRules()),
          (this.pasteRules = this.createPasteRules()),
          (this.plugins = this.createPlugins()),
          (this.view = this.createView()),
          (this.commands = this.createCommands()),
          this.setActiveNodesAndMarks(),
          !1 !== this.options.autofocus && this.focus(this.options.autofocus),
          this.emit("init", { view: this.view, state: this.state }),
          (this.extensions.view = this.view);
      }
      isEditable() {
        return this.options.editable;
      }
      isEmpty() {
        if (this.state) return 0 === this.state.doc.textContent.length;
      }
      get isActive() {
        return Object.entries({
          ...this.activeMarks,
          ...this.activeNodes,
        }).reduce((t, [e, s]) => ({ ...t, [e]: (t = {}) => s(t) }), {});
      }
      removeMark(t) {
        if (this.schema.marks[t])
          return ya.removeMark(this.schema.marks[t])(
            this.state,
            this.view.dispatch
          );
      }
      selectionAtPosition(t = null) {
        if (this.selection && null === t) return this.selection;
        if ("start" === t || !0 === t) return { from: 0, to: 0 };
        if ("end" === t) {
          const { doc: t } = this.state;
          return { from: t.content.size, to: t.content.size };
        }
        return { from: t, to: t };
      }
      setActiveNodesAndMarks() {
        (this.activeMarks = Object.values(this.schema.marks)
          .filter((t) => ya.markIsActive(this.state, t))
          .map((t) => t.name)),
          (this.activeMarkAttrs = Object.entries(this.schema.marks).reduce(
            (t, [e, s]) => ({ ...t, [e]: ya.getMarkAttrs(this.state, s) }),
            {}
          )),
          (this.activeNodes = Object.values(this.schema.nodes)
            .filter((t) => ya.nodeIsActive(this.state, t))
            .map((t) => t.name));
      }
      setContent(t = {}, e = !1, s) {
        const { doc: i, tr: n } = this.state,
          a = this.createDocument(t, s),
          r = Yn["g"].create(i, 0, i.content.size),
          o = n
            .setSelection(r)
            .replaceSelectionWith(a, !1)
            .setMeta("preventUpdate", !e);
        this.view.dispatch(o);
      }
      setSelection(t = 0, e = 0) {
        const { doc: s, tr: i } = this.state,
          n = ya.minMax(t, 0, s.content.size),
          a = ya.minMax(e, 0, s.content.size),
          r = Yn["g"].create(s, n, a),
          o = i.setSelection(r);
        this.view.dispatch(o);
      }
      get state() {
        return this.view ? this.view.state : null;
      }
      toggleMark(t) {
        if (this.schema.marks[t])
          return ya.toggleMark(this.schema.marks[t])(
            this.state,
            this.view.dispatch
          );
      }
      updateMark(t, e) {
        if (this.schema.marks[t])
          return ya.updateMark(this.schema.marks[t], e)(
            this.state,
            this.view.dispatch
          );
      }
    }
    var Ta = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-form-dialog", {
          ref: "dialog",
          attrs: {
            fields: t.fields,
            "submit-button": t.$t("confirm"),
            size: "medium",
          },
          on: {
            close: function (e) {
              return t.$emit("close");
            },
            submit: t.submit,
          },
          model: {
            value: t.link,
            callback: function (e) {
              t.link = e;
            },
            expression: "link",
          },
        });
      },
      La = [],
      Ia = {
        data() {
          return { link: { href: null, title: null, target: !1 } };
        },
        computed: {
          fields() {
            return {
              href: { label: this.$t("url"), type: "text", icon: "url" },
              title: { label: this.$t("title"), type: "text", icon: "title" },
              target: {
                label: this.$t("open.newWindow"),
                type: "toggle",
                text: [this.$t("no"), this.$t("yes")],
              },
            };
          },
        },
        methods: {
          open(t) {
            (this.link = { title: null, target: !1, ...t }),
              (this.link.target = Boolean(this.link.target)),
              this.$refs.dialog.open();
          },
          submit() {
            this.$emit("submit", {
              ...this.link,
              target: this.link.target ? "_blank" : null,
            }),
              this.$refs.dialog.close();
          },
        },
      },
      Aa = Ia,
      Ba = Object(c["a"])(Aa, Ta, La, !1, null, null, null),
      Ma = Ba.exports;
    class Da extends xa {
      constructor(t = {}) {
        super(t);
      }
      command() {
        return () => {};
      }
      remove() {
        this.editor.removeMark(this.name);
      }
      get schema() {
        return null;
      }
      get type() {
        return "mark";
      }
      toggle() {
        return this.editor.toggleMark(this.name);
      }
      update(t) {
        this.editor.updateMark(this.name, t);
      }
    }
    class Na extends Da {
      get button() {
        return { icon: "code", label: I["a"].$t("toolbar.button.code") };
      }
      commands() {
        return () => this.toggle();
      }
      inputRules({ type: t, utils: e }) {
        return [e.markInputRule(/(?:`)([^`]+)(?:`)$/, t)];
      }
      keys() {
        return { "Mod-`": () => this.toggle() };
      }
      get name() {
        return "code";
      }
      pasteRules({ type: t, utils: e }) {
        return [e.markPasteRule(/(?:`)([^`]+)(?:`)/g, t)];
      }
      get schema() {
        return {
          excludes: "_",
          parseDOM: [{ tag: "code" }],
          toDOM: () => ["code", 0],
        };
      }
    }
    class Pa extends Da {
      get button() {
        return { icon: "bold", label: I["a"].$t("toolbar.button.bold") };
      }
      commands() {
        return () => this.toggle();
      }
      inputRules({ type: t, utils: e }) {
        return [e.markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, t)];
      }
      keys() {
        return { "Mod-b": () => this.toggle() };
      }
      get name() {
        return "bold";
      }
      pasteRules({ type: t, utils: e }) {
        return [e.markPasteRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)/g, t)];
      }
      get schema() {
        return {
          parseDOM: [
            { tag: "strong" },
            {
              tag: "b",
              getAttrs: (t) => "normal" !== t.style.fontWeight && null,
            },
            {
              style: "font-weight",
              getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
            },
          ],
          toDOM: () => ["strong", 0],
        };
      }
    }
    class Ra extends Da {
      get button() {
        return { icon: "italic", label: I["a"].$t("toolbar.button.italic") };
      }
      commands() {
        return () => this.toggle();
      }
      inputRules({ type: t, utils: e }) {
        return [
          e.markInputRule(/(?:^|[^_])(_([^_]+)_)$/, t),
          e.markInputRule(/(?:^|[^*])(\*([^*]+)\*)$/, t),
        ];
      }
      keys() {
        return { "Mod-i": () => this.toggle() };
      }
      get name() {
        return "italic";
      }
      pasteRules({ type: t, utils: e }) {
        return [
          e.markPasteRule(/_([^_]+)_/g, t),
          e.markPasteRule(/\*([^*]+)\*/g, t),
        ];
      }
      get schema() {
        return {
          parseDOM: [
            { tag: "i" },
            { tag: "em" },
            { style: "font-style=italic" },
          ],
          toDOM: () => ["em", 0],
        };
      }
    }
    class qa extends Da {
      get button() {
        return { icon: "url", label: I["a"].$t("toolbar.button.link") };
      }
      commands() {
        return {
          link: () => {
            this.editor.emit("link", this.editor);
          },
          insertLink: (t = {}) => {
            if (t.href) return this.update(t);
          },
          removeLink: () => this.remove(),
          toggleLink: (t = {}) => {
            t.href && t.href.length > 0
              ? this.editor.command("insertLink", t)
              : this.editor.command("removeLink");
          },
        };
      }
      get defaults() {
        return { target: null };
      }
      get name() {
        return "link";
      }
      pasteRules({ type: t, utils: e }) {
        return [
          e.pasteRule(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=,]*)/gi,
            t,
            (t) => ({ href: t })
          ),
        ];
      }
      plugins() {
        return [
          {
            props: {
              handleClick: (t, e, s) => {
                const i = this.editor.getMarkAttrs("link");
                i.href &&
                  !0 === s.altKey &&
                  s.target instanceof HTMLAnchorElement &&
                  (s.stopPropagation(), window.open(i.href, i.target));
              },
            },
          },
        ];
      }
      get schema() {
        return {
          attrs: {
            href: { default: null },
            target: { default: null },
            title: { default: null },
          },
          inclusive: !1,
          parseDOM: [
            {
              tag: "a[href]",
              getAttrs: (t) => ({
                href: t.getAttribute("href"),
                target: t.getAttribute("target"),
                title: t.getAttribute("title"),
              }),
            },
          ],
          toDOM: (t) => [
            "a",
            { ...t.attrs, rel: "noopener noreferrer nofollow" },
            0,
          ],
        };
      }
    }
    class Fa extends Da {
      get button() {
        return {
          icon: "strikethrough",
          label: I["a"].$t("toolbar.button.strike"),
        };
      }
      commands() {
        return () => this.toggle();
      }
      inputRules({ type: t, utils: e }) {
        return [e.markInputRule(/~([^~]+)~$/, t)];
      }
      keys() {
        return { "Mod-d": () => this.toggle() };
      }
      get name() {
        return "strike";
      }
      pasteRules({ type: t, utils: e }) {
        return [e.markPasteRule(/~([^~]+)~/g, t)];
      }
      get schema() {
        return {
          parseDOM: [
            { tag: "s" },
            { tag: "del" },
            { tag: "strike" },
            { style: "text-decoration", getAttrs: (t) => "line-through" === t },
          ],
          toDOM: () => ["s", 0],
        };
      }
    }
    class Ua extends Da {
      get button() {
        return {
          icon: "underline",
          label: I["a"].$t("toolbar.button.underline"),
        };
      }
      commands() {
        return () => this.toggle();
      }
      keys() {
        return { "Mod-u": () => this.toggle() };
      }
      get name() {
        return "underline";
      }
      get schema() {
        return {
          parseDOM: [
            { tag: "u" },
            { style: "text-decoration", getAttrs: (t) => "underline" === t },
          ],
          toDOM: () => ["u", 0],
        };
      }
    }
    class Ha extends Oa {
      get button() {
        return { icon: "list-bullet", label: I["a"].$t("toolbar.button.ul") };
      }
      commands({ type: t, schema: e, utils: s }) {
        return () => s.toggleList(t, e.nodes.listItem);
      }
      inputRules({ type: t, utils: e }) {
        return [e.wrappingInputRule(/^\s*([-+*])\s$/, t)];
      }
      keys({ type: t, schema: e, utils: s }) {
        return { "Shift-Ctrl-8": s.toggleList(t, e.nodes.listItem) };
      }
      get name() {
        return "bulletList";
      }
      get schema() {
        return {
          content: "listItem+",
          group: "block",
          parseDOM: [{ tag: "ul" }],
          toDOM: () => ["ul", 0],
        };
      }
    }
    class za extends Oa {
      commands({ utils: t, type: e }) {
        return () => this.createHardBreak(t, e);
      }
      createHardBreak(t, e) {
        return t.chainCommands(
          t.exitCode,
          (t, s) => (
            s(t.tr.replaceSelectionWith(e.create()).scrollIntoView()), !0
          )
        );
      }
      get defaults() {
        return { enter: !1, text: !1 };
      }
      keys({ utils: t, type: e }) {
        const s = this.createHardBreak(t, e);
        let i = { "Mod-Enter": s, "Shift-Enter": s };
        return this.options.enter && (i["Enter"] = s), i;
      }
      get name() {
        return "hardBreak";
      }
      get schema() {
        return {
          inline: !0,
          group: "inline",
          selectable: !1,
          parseDOM: [{ tag: "br" }],
          toDOM: () => ["br"],
        };
      }
    }
    class Ka extends Oa {
      get button() {
        return this.options.levels.map((t) => ({
          command: "h" + t,
          icon: "title",
          label: "Heading " + t,
        }));
      }
      commands({ type: t, schema: e, utils: s }) {
        let i = {
          toggleHeading: (i) => s.toggleBlockType(t, e.nodes.paragraph, i),
        };
        return (
          this.options.levels.forEach((e) => {
            i["h" + e] = () => s.setBlockType(t, { level: e });
          }),
          i
        );
      }
      get defaults() {
        return { levels: [1, 2, 3] };
      }
      inputRules({ type: t, utils: e }) {
        return this.options.levels.map((s) =>
          e.textblockTypeInputRule(new RegExp(`^(#{1,${s}})\\s$`), t, () => ({
            level: s,
          }))
        );
      }
      keys({ type: t, utils: e }) {
        return this.options.levels.reduce(
          (s, i) => ({
            ...s,
            ["Shift-Ctrl-" + i]: e.setBlockType(t, { level: i }),
          }),
          {}
        );
      }
      get name() {
        return "heading";
      }
      get schema() {
        return {
          attrs: { level: { default: 1 } },
          content: "inline*",
          group: "block",
          defining: !0,
          draggable: !1,
          parseDOM: this.options.levels.map((t) => ({
            tag: "h" + t,
            attrs: { level: t },
          })),
          toDOM: (t) => ["h" + t.attrs.level, 0],
        };
      }
    }
    class Ga extends Oa {
      commands({ type: t }) {
        return () => (e, s) => s(e.tr.replaceSelectionWith(t.create()));
      }
      inputRules({ type: t, utils: e }) {
        return [e.nodeInputRule(/^(?:---|___\s|\*\*\*\s)$/, t)];
      }
      get name() {
        return "horizontalRule";
      }
      get schema() {
        return {
          group: "block",
          parseDOM: [{ tag: "hr" }],
          toDOM: () => ["hr"],
        };
      }
    }
    class Wa extends Oa {
      keys({ type: t, utils: e }) {
        return {
          Enter: e.splitListItem(t),
          "Shift-Tab": e.liftListItem(t),
          Tab: e.sinkListItem(t),
        };
      }
      get name() {
        return "listItem";
      }
      get schema() {
        return {
          content: "paragraph block*",
          defining: !0,
          draggable: !1,
          parseDOM: [{ tag: "li" }],
          toDOM: () => ["li", 0],
        };
      }
    }
    class Ya extends Oa {
      get button() {
        return { icon: "list-numbers", label: I["a"].$t("toolbar.button.ol") };
      }
      commands({ type: t, schema: e, utils: s }) {
        return () => s.toggleList(t, e.nodes.listItem);
      }
      inputRules({ type: t, utils: e }) {
        return [
          e.wrappingInputRule(
            /^(\d+)\.\s$/,
            t,
            (t) => ({ order: +t[1] }),
            (t, e) => e.childCount + e.attrs.order === +t[1]
          ),
        ];
      }
      keys({ type: t, schema: e, utils: s }) {
        return { "Shift-Ctrl-9": s.toggleList(t, e.nodes.listItem) };
      }
      get name() {
        return "orderedList";
      }
      get schema() {
        return {
          attrs: { order: { default: 1 } },
          content: "listItem+",
          group: "block",
          parseDOM: [
            {
              tag: "ol",
              getAttrs: (t) => ({
                order: t.hasAttribute("start") ? +t.getAttribute("start") : 1,
              }),
            },
          ],
          toDOM: (t) =>
            1 === t.attrs.order
              ? ["ol", 0]
              : ["ol", { start: t.attrs.order }, 0],
        };
      }
    }
    var Va = s("8726");
    class Ja extends xa {
      commands() {
        return {
          undo: () => Va["d"],
          redo: () => Va["b"],
          undoDepth: () => Va["e"],
          redoDepth: () => Va["c"],
        };
      }
      get defaults() {
        return { depth: "", newGroupDelay: "" };
      }
      keys() {
        return {
          "Mod-z": Va["d"],
          "Mod-y": Va["b"],
          "Shift-Mod-z": Va["b"],
          "Mod-я": Va["d"],
          "Shift-Mod-я": Va["b"],
        };
      }
      get name() {
        return "history";
      }
      plugins() {
        return [
          Object(Va["a"])({
            depth: this.options.depth,
            newGroupDelay: this.options.newGroupDelay,
          }),
        ];
      }
    }
    class Za extends xa {
      constructor(t = {}) {
        super(t);
      }
      close() {
        (this.visible = !1), this.emit();
      }
      emit() {
        this.editor.emit("toolbar", {
          marks: this.marks,
          nodes: this.nodes,
          position: this.position,
          visible: this.visible,
        });
      }
      init() {
        (this.position = { left: 0, bottom: 0 }),
          (this.visible = !1),
          this.editor.on("blur", () => {
            this.close();
          }),
          this.editor.on("deselect", () => {
            this.close();
          }),
          this.editor.on("select", ({ hasChanged: t }) => {
            !1 !== t ? this.open() : this.emit();
          });
      }
      get marks() {
        return this.editor.activeMarks;
      }
      get nodes() {
        return this.editor.activeNodes;
      }
      open() {
        (this.visible = !0), this.reposition(), this.emit();
      }
      reposition() {
        const { from: t, to: e } = this.editor.selection,
          s = this.editor.view.coordsAtPos(t),
          i = this.editor.view.coordsAtPos(e, !0),
          n = this.editor.element.getBoundingClientRect();
        let a = (s.left + i.left) / 2 - n.left,
          r = Math.round(n.bottom - s.top);
        return (this.position = { bottom: r, left: a });
      }
      get type() {
        return "toolbar";
      }
    }
    var Xa,
      Qa,
      tr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-writer-toolbar" },
          [
            Object.keys(t.nodeButtons).length > 1 && t.activeNode
              ? s(
                  "k-dropdown",
                  {
                    nativeOn: {
                      mousedown: function (t) {
                        t.preventDefault();
                      },
                    },
                  },
                  [
                    s("k-button", {
                      staticClass:
                        "k-writer-toolbar-button k-writer-toolbar-nodes",
                      attrs: { icon: t.activeNode.icon },
                      on: {
                        click: function (e) {
                          return t.$refs.nodes.toggle();
                        },
                      },
                    }),
                    s(
                      "k-dropdown-content",
                      { ref: "nodes" },
                      t._l(t.nodeButtons, function (e, i) {
                        return s(
                          "k-dropdown-item",
                          {
                            key: i,
                            attrs: { icon: e.icon },
                            on: {
                              click: function (s) {
                                return t.command(e.command || i);
                              },
                            },
                          },
                          [t._v(" " + t._s(e.label) + " ")]
                        );
                      }),
                      1
                    ),
                  ],
                  1
                )
              : t._e(),
            t._l(t.markButtons, function (e, i) {
              return s("k-button", {
                key: i,
                class: {
                  "k-writer-toolbar-button": !0,
                  "k-writer-toolbar-button-active": t.activeMarks.includes(i),
                },
                attrs: { icon: e.icon },
                on: {
                  mousedown: function (s) {
                    return s.preventDefault(), t.command(e.command || i);
                  },
                },
              });
            }),
          ],
          2
        );
      },
      er = [],
      sr = {
        props: {
          activeMarks: {
            type: Array,
            default() {
              return [];
            },
          },
          activeNodes: {
            type: Array,
            default() {
              return [];
            },
          },
          editor: { type: Object, required: !0 },
          marks: { type: Array },
        },
        computed: {
          activeNode() {
            const t = Object.keys(this.nodeButtons).find((t) =>
              this.activeNodes.includes(t)
            );
            return !!t && this.nodeButtons[t];
          },
          markButtons() {
            return this.buttons("mark");
          },
          nodeButtons() {
            return this.buttons("node");
          },
        },
        methods: {
          buttons(t) {
            const e = this.editor.buttons(t);
            let s = this.sorting;
            (!1 !== s && !1 !== Array.isArray(s)) || (s = Object.keys(e));
            let i = {};
            return (
              s.forEach((t) => {
                e[t] && (i[t] = e[t]);
              }),
              i
            );
          },
          command(t, ...e) {
            this.$emit("command", t, ...e);
          },
        },
      },
      ir = sr,
      nr = (s("6a16"), Object(c["a"])(ir, tr, er, !1, null, null, null)),
      ar = nr.exports,
      rr = {
        components: { "k-writer-link-dialog": Ma, "k-writer-toolbar": ar },
        props: {
          autofocus: Boolean,
          breaks: Boolean,
          code: Boolean,
          disabled: Boolean,
          emptyDocument: {
            type: Object,
            default() {
              return { type: "doc", content: [] };
            },
          },
          headings: [Array, Boolean],
          inline: { type: Boolean, default: !1 },
          marks: { type: [Array, Boolean], default: !0 },
          nodes: {
            type: [Array, Boolean],
            default() {
              return ["heading", "bulletList", "orderedList"];
            },
          },
          placeholder: String,
          spellcheck: Boolean,
          extensions: Array,
          value: { type: String, default: "" },
        },
        data() {
          return { editor: null, html: this.value, isEmpty: !0, toolbar: !1 };
        },
        watch: {
          value(t, e) {
            t !== e &&
              t !== this.html &&
              ((this.html = t), this.editor.setContent(this.html));
          },
        },
        mounted() {
          (this.editor = new ja({
            autofocus: this.autofocus,
            content: this.value,
            editable: !this.disabled,
            element: this.$el,
            emptyDocument: this.emptyDocument,
            events: {
              link: (t) => {
                this.$refs.linkDialog.open(t.getMarkAttrs("link"));
              },
              toolbar: (t) => {
                (this.toolbar = t),
                  this.toolbar.visible &&
                    this.$nextTick(() => {
                      this.onToolbarOpen();
                    });
              },
              update: (t) => {
                (this.html = t.editor.getHTML()),
                  (this.isEmpty = t.editor.isEmpty()),
                  this.isEmpty &&
                    (0 === t.editor.activeNodes.length ||
                      t.editor.activeNodes.includes("paragraph")) &&
                    (this.html = ""),
                  this.$emit("input", this.html);
              },
            },
            extensions: [
              ...this.createMarks(),
              ...this.createNodes(),
              new Ja(),
              new Za(),
              ...(this.extensions || []),
            ],
            inline: this.inline,
          })),
            (this.isEmpty = this.editor.isEmpty());
        },
        beforeDestroy() {
          this.editor.destroy();
        },
        methods: {
          filterExtensions(t, e, s) {
            !1 === e
              ? (e = [])
              : (!0 !== e && !1 !== Array.isArray(e)) || (e = Object.keys(t));
            let i = [];
            return (
              e.forEach((e) => {
                t[e] && i.push(t[e]);
              }),
              "function" === typeof s && (i = s(e, i)),
              i
            );
          },
          command(t, ...e) {
            this.editor.command(t, ...e);
          },
          createMarks() {
            return this.filterExtensions(
              {
                bold: new Pa(),
                italic: new Ra(),
                strike: new Fa(),
                underline: new Ua(),
                code: new Na(),
                link: new qa(),
              },
              this.marks
            );
          },
          createNodes() {
            const t = new za({ text: !0, enter: this.inline });
            return !0 === this.inline
              ? [t]
              : this.filterExtensions(
                  {
                    bulletList: new Ha(),
                    orderedList: new Ya(),
                    heading: new Ka(),
                    horizontalRule: new Ga(),
                    listItem: new Wa(),
                  },
                  this.nodes,
                  (e, s) => (
                    (e.includes("bulletList") || e.includes("orderedList")) &&
                      s.push(new Wa()),
                    s.push(t),
                    s
                  )
                );
          },
          getHTML() {
            return this.editor.getHTML();
          },
          focus() {
            this.editor.focus();
          },
          onToolbarOpen() {
            if (this.$refs.toolbar) {
              const t = this.$el.clientWidth,
                e = this.$refs.toolbar.$el.clientWidth;
              let s = this.toolbar.position.left;
              s - e / 2 < 0 && (s = s + (e / 2 - s) - 20),
                s + e / 2 > t && (s = s - (s + e / 2 - t) + 20),
                s !== this.toolbar.position.left &&
                  (this.$refs.toolbar.$el.style.left = s + "px");
            }
          },
        },
      },
      or = rr,
      lr = (s("4041"), Object(c["a"])(or, Gn, Wn, !1, null, null, null)),
      cr = lr.exports,
      ur = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "label",
          {
            staticClass: "k-checkbox-input",
            on: {
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            s("input", {
              ref: "input",
              staticClass: "k-checkbox-input-native",
              attrs: { id: t.id, disabled: t.disabled, type: "checkbox" },
              domProps: { checked: t.value },
              on: {
                change: function (e) {
                  return t.onChange(e.target.checked);
                },
              },
            }),
            s(
              "span",
              {
                staticClass: "k-checkbox-input-icon",
                attrs: { "aria-hidden": "true" },
              },
              [
                s(
                  "svg",
                  {
                    attrs: {
                      width: "12",
                      height: "10",
                      viewBox: "0 0 12 10",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    s("path", {
                      attrs: {
                        d: "M1 5l3.3 3L11 1",
                        "stroke-width": "2",
                        fill: "none",
                        "fill-rule": "evenodd",
                      },
                    }),
                  ]
                ),
              ]
            ),
            s("span", {
              staticClass: "k-checkbox-input-label",
              domProps: { innerHTML: t._s(t.label) },
            }),
          ]
        );
      },
      dr = [],
      pr = s("b5ae"),
      hr = {
        inheritAttrs: !1,
        props: {
          autofocus: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          id: [Number, String],
          label: String,
          required: { type: Boolean, default: !1 },
          value: Boolean,
        },
        watch: {
          value() {
            this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          onChange(t) {
            this.$emit("input", t);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select() {
            this.focus();
          },
        },
        validations() {
          return { value: { required: !this.required || pr["required"] } };
        },
      },
      mr = hr,
      fr = (s("42e4"), Object(c["a"])(mr, ur, dr, !1, null, null, null)),
      gr = fr.exports,
      br = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "ul",
          {
            staticClass: "k-checkboxes-input",
            style: "--columns:" + t.columns,
          },
          t._l(t.options, function (e, i) {
            return s(
              "li",
              { key: i },
              [
                s("k-checkbox-input", {
                  attrs: {
                    id: t.id + "-" + i,
                    label: e.text,
                    value: -1 !== t.selected.indexOf(e.value),
                  },
                  on: {
                    input: function (s) {
                      return t.onInput(e.value, s);
                    },
                  },
                }),
              ],
              1
            );
          }),
          0
        );
      },
      kr = [],
      vr = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          columns: Number,
          disabled: Boolean,
          id: {
            type: [Number, String],
            default() {
              return this._uid;
            },
          },
          max: Number,
          min: Number,
          options: Array,
          required: Boolean,
          value: {
            type: [Array, Object],
            default() {
              return [];
            },
          },
        },
        data() {
          return { selected: this.valueToArray(this.value) };
        },
        watch: {
          value(t) {
            this.selected = this.valueToArray(t);
          },
          selected() {
            this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus() {
            this.$el.querySelector("input").focus();
          },
          onInput(t, e) {
            if (!0 === e) this.selected.push(t);
            else {
              const e = this.selected.indexOf(t);
              -1 !== e && this.selected.splice(e, 1);
            }
            this.$emit("input", this.selected);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select() {
            this.focus();
          },
          valueToArray(t) {
            return !0 === Array.isArray(t)
              ? t
              : "string" === typeof t
              ? String(t).split(",")
              : "object" === typeof t
              ? Object.values(t)
              : void 0;
          },
        },
        validations() {
          return {
            selected: {
              required: !this.required || pr["required"],
              min: !this.min || Object(pr["minLength"])(this.min),
              max: !this.max || Object(pr["maxLength"])(this.max),
            },
          };
        },
      },
      $r = vr,
      yr = Object(c["a"])($r, br, kr, !1, null, null, null),
      _r = yr.exports,
      wr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-text-input",
          t._b(
            {
              ref: "input",
              class: "k-" + t.type + "-input",
              attrs: { placeholder: t.display, spellcheck: !1, type: "text" },
              on: {
                blur: t.onBlur,
                input: t.onInput,
                invalid: t.onInvalid,
                focus: function (e) {
                  return t.$emit("focus");
                },
                keydown: [
                  function (e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"])
                      ? null
                      : (e.stopPropagation(), e.preventDefault(), t.onDown(e));
                  },
                  function (e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                      ? null
                      : (e.stopPropagation(), e.preventDefault(), t.onUp(e));
                  },
                  function (e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "enter", 13, e.key, "Enter")
                      ? null
                      : t.onEnter(e);
                  },
                  function (e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "tab", 9, e.key, "Tab")
                      ? null
                      : t.onTab(e);
                  },
                ],
              },
              model: {
                value: t.input,
                callback: function (e) {
                  t.input = e;
                },
                expression: "input",
              },
            },
            "k-text-input",
            t.$props,
            !1
          )
        );
      },
      xr = [],
      Or = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          display: { type: String, default: "DD.MM.YYYY" },
          id: [String, Number],
          max: String,
          min: String,
          required: Boolean,
          step: {
            type: Object,
            default() {
              return { size: 1, unit: "day" };
            },
          },
          type: { type: String, default: "date" },
          value: String,
        },
        data() {
          return { input: this.toFormat(this.value), selected: null };
        },
        computed: {
          map() {
            return {
              day: ["D", "DD"],
              month: ["M", "MM", "MMM", "MMMM"],
              year: ["YY", "YYYY"],
            };
          },
          parsed() {
            if (this.input)
              for (let t = 0; t < this.patterns.length; t++) {
                const e = this.$library.dayjs.utc(this.input, this.patterns[t]);
                if (e.isValid()) return e;
              }
            return null;
          },
          parts() {
            return String(this.input).split(/\W/);
          },
          patterns() {
            let t = [],
              e = [];
            for (let s = 0; s < this.tokens.length; s++) {
              const i = this.toTokens(this.tokens[s]);
              if (i) {
                let s = [];
                0 === t.length
                  ? (s = i.map((t) => [t]))
                  : i.forEach((t) => {
                      s = s.concat(e.map((e) => e.concat([t])));
                    }),
                  (t = t.concat(s)),
                  (e = s),
                  (s = []);
              }
            }
            return t.map((t) => t.join(this.separator)).reverse();
          },
          separator() {
            return this.display.match(/[\W]/)[0];
          },
          tokens() {
            return this.display.split(/\W/);
          },
        },
        watch: {
          value(t) {
            (this.input = this.toFormat(t)), this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid();
        },
        methods: {
          emit(t) {
            const e = this.toFormat(this.parsed, "YYYY-MM-DD HH:mm:ss") || "";
            this.$emit(t, e);
          },
          focus() {
            this.$refs.input.focus();
          },
          manipulate(t) {
            let e;
            if (this.parsed) {
              let s = this.step.unit,
                i = this.step.size;
              if (
                ((this.selected = this.toCursorIndex()), null !== this.selected)
              ) {
                const e = this.tokens[this.selected];
                "a" === e.toLowerCase()
                  ? ((s = "hour"),
                    (i = 12),
                    (t =
                      "pm" === this.parts[this.selected] ? "subtract" : "add"))
                  : ((s = this.toUnit(e)), s !== this.step.unit && (i = 1));
              }
              e = this.parsed.clone()[t](i, s);
            } else
              (e = this.toNearest(this.$library.dayjs())),
                (this.selected = this.toIndex());
            (this.input = this.toFormat(e)),
              this.emit("update"),
              this.$nextTick(() => {
                this.select();
              });
          },
          onBlur() {
            this.parsed || (this.input = null),
              (this.selected = null),
              this.emit("update");
          },
          onDown() {
            this.manipulate("subtract");
          },
          onEnter() {
            this.onBlur(), this.emit("enter");
          },
          onInput() {
            this.emit("input");
          },
          onInvalid(t, e) {
            this.$emit("invalid", t || this.$v.$invalid, e || this.$v);
          },
          onTab(t) {
            const e = this.toCursorIndex();
            null === this.selected
              ? (this.selected = e || 0)
              : e !== this.selected
              ? (this.selected = e)
              : this.selected++,
              this.selected >= this.parts.length
                ? (this.selected = null)
                : (t.preventDefault(), t.stopPropagation(), this.select());
          },
          onUp() {
            this.manipulate("add");
          },
          select() {
            if (null !== this.selected) {
              const t = this.toRange(this.selected);
              this.selected > 0 && t.start++,
                this.$refs.input.$refs.input.setSelectionRange(t.start, t.end);
            }
          },
          toCursorIndex() {
            if (
              0 === this.$refs.input.$refs.input.selectionStart &&
              this.$refs.input.$refs.input.selectionEnd ===
                String(this.input).length
            )
              return null;
            for (let t = 0; t < this.parts.length; t++) {
              const e = this.toRange(t);
              if (
                e.start <= this.$refs.input.$refs.input.selectionStart &&
                e.end >= this.$refs.input.$refs.input.selectionEnd
              )
                return t;
            }
          },
          toDatetime(t) {
            return this.$library.dayjs.utc(t);
          },
          toFormat(t, e = this.display) {
            return t
              ? ("string" == typeof t && (t = this.toDatetime(t)),
                !1 === t.isValid() ? null : this.toNearest(t).format(e))
              : null;
          },
          toNearest(t, e = this.step.unit, s = this.step.size) {
            "day" === e && (e = "date");
            const i = t.get(e),
              n = Math.round(i / s) * s;
            return t.set(e, n).startOf(e);
          },
          toIndex(t = this.step.unit) {
            const e = this.map[t];
            for (let s = 0; s < e.length; s++) {
              const t = this.tokens.indexOf(e[s]);
              if (-1 !== t) return t;
            }
          },
          toRange(t) {
            return {
              start: this.parts.slice(0, t).join(this.separator).length,
              end: this.parts.slice(0, t + 1).join(this.separator).length,
            };
          },
          toTokens(t) {
            const e = Object.values(this.map),
              s = e.filter((e) => e.includes(t));
            return s[0];
          },
          toUnit(t, e = !0) {
            const s = Object.keys(this.map),
              i = Object.values(this.map);
            let n = i.findIndex((e) => e.includes(t));
            const a = this.step.unit;
            return !0 === e && n < s.indexOf(a) ? a : s[n];
          },
        },
        validations() {
          return {
            value: {
              min:
                !this.min ||
                ((t) =>
                  this.$helper.validate.datetime(
                    this,
                    t,
                    this.min,
                    "isAfter",
                    this.step.unit
                  )),
              max:
                !this.max ||
                ((t) =>
                  this.$helper.validate.datetime(
                    this,
                    t,
                    this.max,
                    "isBefore",
                    this.step.unit
                  )),
              required: !this.required || pr["required"],
            },
          };
        },
      },
      Cr = Or,
      Sr = Object(c["a"])(Cr, wr, xr, !1, null, null, null),
      Er = Sr.exports,
      jr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-datetime-input" },
          [
            s(
              "k-date-input",
              t._b(
                {
                  ref: "dateInput",
                  on: {
                    input: function (e) {
                      return t.onInput(e, "date");
                    },
                    update: function (e) {
                      return t.onUpdate(e, "date");
                    },
                    enter: function (e) {
                      return t.onEnter(e, "date");
                    },
                    focus: function (e) {
                      return t.$emit("focus");
                    },
                  },
                },
                "k-date-input",
                t.dateOptions,
                !1
              )
            ),
            t.time
              ? [
                  s(
                    "k-time-input",
                    t._b(
                      {
                        ref: "timeInput",
                        on: {
                          input: function (e) {
                            return t.onInput(e, "time");
                          },
                          update: function (e) {
                            return t.onUpdate(e, "time");
                          },
                          enter: function (e) {
                            return t.onEnter(e, "time");
                          },
                          focus: function (e) {
                            return t.$emit("focus");
                          },
                        },
                      },
                      "k-time-input",
                      t.timeOptions,
                      !1
                    )
                  ),
                ]
              : t._e(),
          ],
          2
        );
      },
      Tr = [],
      Lr = {
        inheritAttrs: !1,
        props: {
          ...Er.props,
          time: {
            type: [Boolean, Object],
            default() {
              return {};
            },
          },
          value: String,
        },
        data() {
          return { input: this.toDatetime(this.value) };
        },
        computed: {
          dateOptions() {
            return {
              autofocus: this.autofocus,
              disabled: this.disabled,
              display: this.display,
              id: this.id,
              required: this.required,
              value: this.value,
            };
          },
          timeOptions() {
            return {
              ...this.time,
              disabled: this.disabled,
              required: this.required,
              value: this.value
                ? this.toDatetime(this.value).format("HH:mm:ss")
                : null,
            };
          },
        },
        watch: {
          value() {
            (this.input = this.toDatetime(this.value)), this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid();
        },
        methods: {
          emit(t, e = this.input) {
            e
              ? this.$emit(t, e.format("YYYY-MM-DD HH:mm:ss"))
              : this.$emit(t, "");
          },
          focus() {
            this.$refs.dateInput.focus();
          },
          onUpdate(t, e) {
            const s = this.toDatetime(this.value);
            (e = this.toDatetime(t, e, s)), this.emit("update", e);
          },
          onEnter(t, e) {
            this.onUpdate(e, t), this.emit("enter");
          },
          onInput(t, e) {
            (this.input = this.toDatetime(t, e, this.input)),
              this.emit("input");
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          toDatetime(t, e, s) {
            if (!t) return null;
            let i = this.$library.dayjs.utc(t);
            return (
              "time" === e && (i = this.$library.dayjs.utc(t, "HH:mm:ss")),
              !1 === i.isValid()
                ? null
                : e && s
                ? "date" === e
                  ? s
                      .clone()
                      .utc()
                      .set("year", i.get("year"))
                      .set("month", i.get("month"))
                      .set("date", i.get("date"))
                  : "time" === e
                  ? s
                      .clone()
                      .utc()
                      .set("hour", i.get("hour"))
                      .set("minute", i.get("minute"))
                      .set("second", i.get("second"))
                  : void 0
                : i
            );
          },
        },
        validations() {
          return {
            value: {
              min:
                !this.min ||
                ((t) =>
                  this.$helper.validate.datetime(
                    this,
                    t,
                    this.min,
                    "isAfter",
                    this.step.unit
                  )),
              max:
                !this.max ||
                ((t) =>
                  this.$helper.validate.datetime(
                    this,
                    t,
                    this.max,
                    "isBefore",
                    this.step.unit
                  )),
              required: !this.required || pr["required"],
            },
          };
        },
      },
      Ir = Lr,
      Ar = (s("4433"), Object(c["a"])(Ir, jr, Tr, !1, null, null, null)),
      Br = Ar.exports,
      Mr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "input",
          t._g(
            t._b(
              {
                ref: "input",
                staticClass: "k-text-input",
                attrs: { dir: t.direction },
              },
              "input",
              {
                autocomplete: t.autocomplete,
                autofocus: t.autofocus,
                disabled: t.disabled,
                id: t.id,
                minlength: t.minlength,
                name: t.name,
                pattern: t.pattern,
                placeholder: t.placeholder,
                required: t.required,
                spellcheck: t.spellcheck,
                type: t.type,
                value: t.value,
              },
              !1
            ),
            t.listeners
          )
        );
      },
      Dr = [],
      Nr = function (t) {
        const e = t.$store.state.languages.default || null,
          s = t.$store.state.languages.current || null,
          i = t.$store.state.system.info.multilang || !1,
          n = t.$store.state.system.info.user
            ? t.$store.state.system.info.user.language
            : null,
          a = s ? s.direction : null;
        if (
          i &&
          s &&
          !1 === t.disabled &&
          (s.direction !== e.direction || n !== s.code)
        )
          return a;
      },
      Pr = {
        inheritAttrs: !1,
        class: "k-text-input",
        props: {
          autocomplete: { type: [Boolean, String], default: "off" },
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          maxlength: Number,
          minlength: Number,
          name: [Number, String],
          pattern: String,
          placeholder: String,
          preselect: Boolean,
          required: Boolean,
          spellcheck: { type: [Boolean, String], default: "off" },
          type: { type: String, default: "text" },
          value: String,
        },
        data() {
          return {
            listeners: {
              ...this.$listeners,
              input: (t) => this.onInput(t.target.value),
            },
          };
        },
        computed: {
          direction() {
            return Nr(this);
          },
        },
        watch: {
          value() {
            this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(),
            this.$props.autofocus && this.focus(),
            this.$props.preselect && this.select();
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          onInput(t) {
            this.$emit("input", t);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select() {
            this.$refs.input.select();
          },
        },
        validations() {
          const t = (t) =>
            (!this.required && !t) ||
            !this.$refs.input.validity.patternMismatch;
          return {
            value: {
              required: !this.required || pr["required"],
              minLength:
                !this.minlength || Object(pr["minLength"])(this.minlength),
              maxLength:
                !this.maxlength || Object(pr["maxLength"])(this.maxlength),
              email: "email" !== this.type || pr["email"],
              url: "url" !== this.type || pr["url"],
              pattern: !this.pattern || t,
            },
          };
        },
      },
      Rr = Pr,
      qr = (s("cb8f"), Object(c["a"])(Rr, Mr, Dr, !1, null, null, null)),
      Fr = qr.exports,
      Ur = {
        extends: Fr,
        props: {
          ...Fr.props,
          autocomplete: { type: String, default: "email" },
          placeholder: {
            type: String,
            default() {
              return this.$t("email.placeholder");
            },
          },
          type: { type: String, default: "email" },
        },
      },
      Hr = Ur,
      zr = Object(c["a"])(Hr, Xa, Qa, !1, null, null, null),
      Kr = zr.exports,
      Gr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-writer",
          t._b(
            {
              ref: "input",
              staticClass: "k-list-input",
              attrs: {
                extensions: t.extensions,
                nodes: ["bulletList", "orderedList"],
                value: t.list,
              },
              on: { input: t.onInput },
            },
            "k-writer",
            t.$props,
            !1
          )
        );
      },
      Wr = [];
    class Yr extends Ca {
      get schema() {
        return { content: "bulletList|orderedList" };
      }
    }
    var Vr,
      Jr,
      Zr,
      Xr,
      Qr,
      to,
      eo,
      so,
      io = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          marks: { type: [Array, Boolean], default: !0 },
          value: String,
        },
        data() {
          return { list: this.value, html: this.value };
        },
        computed: {
          extensions() {
            return [new Yr({ inline: !0 })];
          },
        },
        watch: {
          value(t) {
            t !== this.html && ((this.list = t), (this.html = t));
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          onInput(t) {
            let e = new DOMParser().parseFromString(t, "text/html"),
              s = e.querySelector("ul, ol");
            if (!s) return void this.$emit("input", (this.list = ""));
            let i = s.textContent.trim();
            0 !== i.length
              ? ((this.list = t),
                (this.html = t.replace(/(<p>|<\/p>)/gi, "")),
                this.$emit("input", this.html))
              : this.$emit("input", (this.list = ""));
          },
        },
      },
      no = io,
      ao = (s("82c9"), Object(c["a"])(no, Gr, Wr, !1, null, null, null)),
      ro = ao.exports,
      oo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-draggable",
          {
            staticClass: "k-multiselect-input",
            attrs: {
              list: t.state,
              options: t.dragOptions,
              "data-layout": t.layout,
              element: "k-dropdown",
            },
            on: { end: t.onInput },
            nativeOn: {
              click: function (e) {
                return t.$refs.dropdown.toggle(e);
              },
            },
          },
          [
            t._l(t.sorted, function (e) {
              return s(
                "k-tag",
                {
                  key: e.value,
                  ref: e.value,
                  refInFor: !0,
                  attrs: { removable: !0 },
                  on: {
                    remove: function (s) {
                      return t.remove(e);
                    },
                  },
                  nativeOn: {
                    click: function (t) {
                      t.stopPropagation();
                    },
                    keydown: [
                      function (e) {
                        return (!e.type.indexOf("key") &&
                          t._k(e.keyCode, "left", 37, e.key, [
                            "Left",
                            "ArrowLeft",
                          ])) ||
                          ("button" in e && 0 !== e.button)
                          ? null
                          : t.navigate("prev");
                      },
                      function (e) {
                        return (!e.type.indexOf("key") &&
                          t._k(e.keyCode, "right", 39, e.key, [
                            "Right",
                            "ArrowRight",
                          ])) ||
                          ("button" in e && 2 !== e.button)
                          ? null
                          : t.navigate("next");
                      },
                      function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "down", 40, e.key, [
                            "Down",
                            "ArrowDown",
                          ])
                          ? null
                          : t.$refs.dropdown.open(e);
                      },
                    ],
                  },
                },
                [s("span", { domProps: { innerHTML: t._s(e.text) } })]
              );
            }),
            s(
              "k-dropdown-content",
              {
                ref: "dropdown",
                attrs: { slot: "footer" },
                on: { open: t.onOpen, close: t.onClose },
                nativeOn: {
                  keydown: function (e) {
                    return !e.type.indexOf("key") &&
                      t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                      ? null
                      : (e.stopPropagation(), t.close(e));
                  },
                },
                slot: "footer",
              },
              [
                t.search
                  ? s(
                      "k-dropdown-item",
                      {
                        staticClass: "k-multiselect-search",
                        attrs: { icon: "search" },
                      },
                      [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.q,
                              expression: "q",
                            },
                          ],
                          ref: "search",
                          attrs: {
                            placeholder: t.search.min
                              ? t.$t("search.min", { min: t.search.min })
                              : t.$t("search") + " …",
                          },
                          domProps: { value: t.q },
                          on: {
                            keydown: function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "esc", 27, e.key, [
                                  "Esc",
                                  "Escape",
                                ])
                                ? null
                                : (e.stopPropagation(), t.escape(e));
                            },
                            input: function (e) {
                              e.target.composing || (t.q = e.target.value);
                            },
                          },
                        }),
                      ]
                    )
                  : t._e(),
                s(
                  "div",
                  { staticClass: "k-multiselect-options" },
                  [
                    t._l(t.visible, function (e) {
                      return s(
                        "k-dropdown-item",
                        {
                          key: e.value,
                          class: {
                            "k-multiselect-option": !0,
                            selected: t.isSelected(e),
                            disabled: !t.more,
                          },
                          attrs: {
                            icon: t.isSelected(e) ? "check" : "circle-outline",
                          },
                          on: {
                            click: function (s) {
                              return s.preventDefault(), t.select(e);
                            },
                          },
                          nativeOn: {
                            keydown: [
                              function (s) {
                                return !s.type.indexOf("key") &&
                                  t._k(s.keyCode, "enter", 13, s.key, "Enter")
                                  ? null
                                  : (s.preventDefault(),
                                    s.stopPropagation(),
                                    t.select(e));
                              },
                              function (s) {
                                return !s.type.indexOf("key") &&
                                  t._k(s.keyCode, "space", 32, s.key, [
                                    " ",
                                    "Spacebar",
                                  ])
                                  ? null
                                  : (s.preventDefault(),
                                    s.stopPropagation(),
                                    t.select(e));
                              },
                            ],
                          },
                        },
                        [
                          s("span", {
                            domProps: { innerHTML: t._s(e.display) },
                          }),
                          s("span", {
                            staticClass: "k-multiselect-value",
                            domProps: { innerHTML: t._s(e.info) },
                          }),
                        ]
                      );
                    }),
                    0 === t.filtered.length
                      ? s(
                          "k-dropdown-item",
                          {
                            staticClass: "k-multiselect-option",
                            attrs: { disabled: !0 },
                          },
                          [t._v(" " + t._s(t.emptyLabel) + " ")]
                        )
                      : t._e(),
                  ],
                  2
                ),
                t.visible.length < t.filtered.length
                  ? s(
                      "k-button",
                      {
                        staticClass: "k-multiselect-more",
                        on: {
                          click: function (e) {
                            e.stopPropagation(), (t.limit = !1);
                          },
                        },
                      },
                      [
                        t._v(
                          " " +
                            t._s(t.$t("search.all")) +
                            " (" +
                            t._s(t.filtered.length) +
                            ") "
                        ),
                      ]
                    )
                  : t._e(),
              ],
              1
            ),
          ],
          2
        );
      },
      lo = [],
      co = {
        inheritAttrs: !1,
        props: {
          id: [Number, String],
          disabled: Boolean,
          max: Number,
          min: Number,
          layout: String,
          options: {
            type: Array,
            default() {
              return [];
            },
          },
          required: Boolean,
          search: [Object, Boolean],
          separator: { type: String, default: "," },
          sort: Boolean,
          value: {
            type: Array,
            required: !0,
            default() {
              return [];
            },
          },
        },
        data() {
          return { state: this.value, q: null, limit: !0, scrollTop: 0 };
        },
        computed: {
          draggable() {
            return this.state.length > 1 && !this.sort;
          },
          dragOptions() {
            return { disabled: !this.draggable, draggable: ".k-tag", delay: 1 };
          },
          emptyLabel() {
            return this.q
              ? this.$t("search.results.none")
              : this.$t("options.none");
          },
          filtered() {
            return this.q && this.q.length >= (this.search.min || 0)
              ? this.options
                  .filter((t) => this.isFiltered(t))
                  .map((t) => ({
                    ...t,
                    display: this.toHighlightedString(t.text),
                    info: this.toHighlightedString(t.value),
                  }))
              : this.options.map((t) => ({
                  ...t,
                  display: t.text,
                  info: t.value,
                }));
          },
          more() {
            return !this.max || this.state.length < this.max;
          },
          regex() {
            return new RegExp(`(${RegExp.escape(this.q)})`, "ig");
          },
          sorted() {
            if (!1 === this.sort) return this.state;
            let t = this.state;
            const e = (t) => this.options.findIndex((e) => e.value === t.value);
            return t.sort((t, s) => e(t) - e(s));
          },
          visible() {
            return this.limit
              ? this.filtered.slice(
                  0,
                  this.search.display || this.filtered.length
                )
              : this.filtered;
          },
        },
        watch: {
          value(t) {
            (this.state = t), this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(),
            this.$events.$on("click", this.close),
            this.$events.$on("keydown.cmd.s", this.close);
        },
        destroyed() {
          this.$events.$off("click", this.close),
            this.$events.$off("keydown.cmd.s", this.close);
        },
        methods: {
          add(t) {
            !0 === this.more && (this.state.push(t), this.onInput());
          },
          blur() {
            this.close();
          },
          close() {
            !0 === this.$refs.dropdown.isOpen &&
              (this.$refs.dropdown.close(), (this.limit = !0));
          },
          escape() {
            this.q ? (this.q = null) : this.close();
          },
          focus() {
            this.$refs.dropdown.open();
          },
          index(t) {
            return this.state.findIndex((e) => e.value === t.value);
          },
          isFiltered(t) {
            return (
              String(t.text).match(this.regex) ||
              String(t.value).match(this.regex)
            );
          },
          isSelected(t) {
            return -1 !== this.index(t);
          },
          navigate(t) {
            let e = document.activeElement;
            switch (t) {
              case "prev":
                e &&
                  e.previousSibling &&
                  e.previousSibling.focus &&
                  e.previousSibling.focus();
                break;
              case "next":
                e &&
                  e.nextSibling &&
                  e.nextSibling.focus &&
                  e.nextSibling.focus();
                break;
            }
          },
          onClose() {
            !1 === this.$refs.dropdown.isOpen &&
              (document.activeElement === this.$parent.$el && (this.q = null),
              this.$parent.$el.focus());
          },
          onInput() {
            this.$emit("input", this.sorted);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onOpen() {
            this.$nextTick(() => {
              this.$refs.search &&
                this.$refs.search.focus &&
                this.$refs.search.focus(),
                (this.$refs.dropdown.$el.querySelector(
                  ".k-multiselect-options"
                ).scrollTop = this.scrollTop);
            });
          },
          remove(t) {
            this.state.splice(this.index(t), 1), this.onInput();
          },
          select(t) {
            (this.scrollTop = this.$refs.dropdown.$el.querySelector(
              ".k-multiselect-options"
            ).scrollTop),
              (t = { text: t.text, value: t.value }),
              this.isSelected(t) ? this.remove(t) : this.add(t);
          },
          toHighlightedString(t) {
            return (
              (t = this.$helper.string.stripHTML(t)),
              t.replace(this.regex, "<b>$1</b>")
            );
          },
        },
        validations() {
          return {
            state: {
              required: !this.required || pr["required"],
              minLength: !this.min || Object(pr["minLength"])(this.min),
              maxLength: !this.max || Object(pr["maxLength"])(this.max),
            },
          };
        },
      },
      uo = co,
      po = (s("11ae"), Object(c["a"])(uo, oo, lo, !1, null, null, null)),
      ho = po.exports,
      mo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "input",
          t._g(
            t._b(
              {
                ref: "input",
                staticClass: "k-number-input",
                attrs: { step: t.stepNumber, type: "number" },
                domProps: { value: t.number },
                on: {
                  keydown: [
                    function (e) {
                      return !e.type.indexOf("key") &&
                        t._k(e.keyCode, "s", void 0, e.key, void 0)
                        ? null
                        : e.ctrlKey
                        ? t.clean(e)
                        : null;
                    },
                    function (e) {
                      return !e.type.indexOf("key") &&
                        t._k(e.keyCode, "s", void 0, e.key, void 0)
                        ? null
                        : e.metaKey
                        ? t.clean(e)
                        : null;
                    },
                  ],
                },
              },
              "input",
              {
                autofocus: t.autofocus,
                disabled: t.disabled,
                id: t.id,
                max: t.max,
                min: t.min,
                name: t.name,
                placeholder: t.placeholder,
                required: t.required,
              },
              !1
            ),
            t.listeners
          )
        );
      },
      fo = [],
      go = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          max: Number,
          min: Number,
          name: [Number, String],
          placeholder: String,
          preselect: Boolean,
          required: Boolean,
          step: Number,
          value: { type: [Number, String], default: null },
        },
        data() {
          return {
            number: this.format(this.value),
            stepNumber: this.format(this.step),
            timeout: null,
            listeners: {
              ...this.$listeners,
              input: (t) => this.onInput(t.target.value),
              blur: this.onBlur,
            },
          };
        },
        watch: {
          value(t) {
            this.number = t;
          },
          number: {
            immediate: !0,
            handler() {
              this.onInvalid();
            },
          },
        },
        mounted() {
          this.$props.autofocus && this.focus(),
            this.$props.preselect && this.select();
        },
        methods: {
          decimals() {
            const t = Number(this.step || 0);
            return Math.floor(t) === t
              ? 0
              : -1 !== t.toString().indexOf("e")
              ? parseInt(
                  t.toFixed(16).split(".")[1].split("").reverse().join("")
                ).toString().length
              : t.toString().split(".")[1].length || 0;
          },
          format(t) {
            if (isNaN(t) || "" === t) return "";
            const e = this.decimals();
            return (
              (t = e
                ? parseFloat(t).toFixed(e)
                : Number.isInteger(this.step)
                ? parseInt(t)
                : parseFloat(t)),
              t
            );
          },
          clean() {
            this.number = this.format(this.number);
          },
          emit(t) {
            (t = parseFloat(t)),
              isNaN(t) && (t = ""),
              t !== this.value && this.$emit("input", t);
          },
          focus() {
            this.$refs.input.focus();
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onInput(t) {
            (this.number = t), this.emit(t);
          },
          onBlur() {
            this.clean(), this.emit(this.number);
          },
          select() {
            this.$refs.input.select();
          },
        },
        validations() {
          return {
            value: {
              required: !this.required || pr["required"],
              min: !this.min || Object(pr["minValue"])(this.min),
              max: !this.max || Object(pr["maxValue"])(this.max),
            },
          };
        },
      },
      bo = go,
      ko = (s("6018"), Object(c["a"])(bo, mo, fo, !1, null, null, null)),
      vo = ko.exports,
      $o = {
        extends: Fr,
        props: {
          ...Fr.props,
          autocomplete: { type: String, default: "new-password" },
          type: { type: String, default: "password" },
        },
      },
      yo = $o,
      _o = Object(c["a"])(yo, Vr, Jr, !1, null, null, null),
      wo = _o.exports,
      xo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "ul",
          { staticClass: "k-radio-input", style: "--columns:" + t.columns },
          t._l(t.options, function (e, i) {
            return s(
              "li",
              { key: i },
              [
                s("input", {
                  staticClass: "k-radio-input-native",
                  attrs: { id: t.id + "-" + i, name: t.id, type: "radio" },
                  domProps: { value: e.value, checked: t.value === e.value },
                  on: {
                    change: function (s) {
                      return t.onInput(e.value);
                    },
                  },
                }),
                e.info
                  ? s("label", { attrs: { for: t.id + "-" + i } }, [
                      s("span", {
                        staticClass: "k-radio-input-text",
                        domProps: { innerHTML: t._s(e.text) },
                      }),
                      s("span", { staticClass: "k-radio-input-info" }, [
                        t._v(t._s(e.info)),
                      ]),
                    ])
                  : s("label", {
                      attrs: { for: t.id + "-" + i },
                      domProps: { innerHTML: t._s(e.text) },
                    }),
                e.icon ? s("k-icon", { attrs: { type: e.icon } }) : t._e(),
              ],
              1
            );
          }),
          0
        );
      },
      Oo = [],
      Co = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          columns: Number,
          disabled: Boolean,
          id: {
            type: [Number, String],
            default() {
              return this._uid;
            },
          },
          options: Array,
          required: Boolean,
          value: [String, Number, Boolean],
        },
        watch: {
          value() {
            this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus() {
            this.$el.querySelector("input").focus();
          },
          onInput(t) {
            this.$emit("input", t);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select() {
            this.focus();
          },
        },
        validations() {
          return { value: { required: !this.required || pr["required"] } };
        },
      },
      So = Co,
      Eo = (s("893d"), Object(c["a"])(So, xo, Oo, !1, null, null, null)),
      jo = Eo.exports,
      To = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("label", { staticClass: "k-range-input" }, [
          s(
            "input",
            t._g(
              t._b(
                {
                  ref: "input",
                  staticClass: "k-range-input-native",
                  style:
                    "--min: " +
                    t.min +
                    "; --max: " +
                    t.max +
                    "; --value: " +
                    t.position,
                  attrs: { type: "range" },
                  domProps: { value: t.position },
                },
                "input",
                {
                  autofocus: t.autofocus,
                  disabled: t.disabled,
                  id: t.id,
                  max: t.max,
                  min: t.min,
                  name: t.name,
                  required: t.required,
                  step: t.step,
                },
                !1
              ),
              t.listeners
            )
          ),
          t.tooltip
            ? s("span", { staticClass: "k-range-input-tooltip" }, [
                t.tooltip.before
                  ? s("span", { staticClass: "k-range-input-tooltip-before" }, [
                      t._v(t._s(t.tooltip.before)),
                    ])
                  : t._e(),
                s("span", { staticClass: "k-range-input-tooltip-text" }, [
                  t._v(t._s(t.label)),
                ]),
                t.tooltip.after
                  ? s("span", { staticClass: "k-range-input-tooltip-after" }, [
                      t._v(t._s(t.tooltip.after)),
                    ])
                  : t._e(),
              ])
            : t._e(),
        ]);
      },
      Lo = [],
      Io = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [String, Number],
          default: [Number, String],
          max: { type: Number, default: 100 },
          min: { type: Number, default: 0 },
          name: [String, Number],
          required: Boolean,
          step: { type: Number, default: 1 },
          tooltip: {
            type: [Boolean, Object],
            default() {
              return { before: null, after: null };
            },
          },
          value: [Number, String],
        },
        data() {
          return {
            listeners: {
              ...this.$listeners,
              input: (t) => this.onInput(t.target.value),
            },
          };
        },
        computed: {
          baseline() {
            return this.min < 0 ? 0 : this.min;
          },
          label() {
            return this.required || this.value || 0 === this.value
              ? this.format(this.position)
              : "–";
          },
          position() {
            return this.value || 0 === this.value
              ? this.value
              : this.default || this.baseline;
          },
        },
        watch: {
          position() {
            this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          format(t) {
            const e = document.lang ? document.lang.replace("_", "-") : "en",
              s = this.step.toString().split("."),
              i = s.length > 1 ? s[1].length : 0;
            return new Intl.NumberFormat(e, {
              minimumFractionDigits: i,
            }).format(t);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onInput(t) {
            this.$emit("input", t);
          },
        },
        validations() {
          return {
            position: {
              required: !this.required || pr["required"],
              min: !this.min || Object(pr["minValue"])(this.min),
              max: !this.max || Object(pr["maxValue"])(this.max),
            },
          };
        },
      },
      Ao = Io,
      Bo = (s("b5d2"), Object(c["a"])(Ao, To, Lo, !1, null, null, null)),
      Mo = Bo.exports,
      Do = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          {
            staticClass: "k-select-input",
            attrs: {
              "data-disabled": t.disabled,
              "data-empty": "" === t.selected,
            },
          },
          [
            s(
              "select",
              t._g(
                {
                  ref: "input",
                  staticClass: "k-select-input-native",
                  attrs: {
                    id: t.id,
                    autofocus: t.autofocus,
                    "aria-label": t.ariaLabel,
                    disabled: t.disabled,
                    name: t.name,
                    required: t.required,
                  },
                  domProps: { value: t.selected },
                },
                t.listeners
              ),
              [
                t.hasEmptyOption
                  ? s(
                      "option",
                      { attrs: { disabled: t.required, value: "" } },
                      [t._v(" " + t._s(t.emptyOption) + " ")]
                    )
                  : t._e(),
                t._l(t.options, function (e) {
                  return s(
                    "option",
                    {
                      key: e.value,
                      attrs: { disabled: e.disabled },
                      domProps: { value: e.value },
                    },
                    [t._v(" " + t._s(e.text) + " ")]
                  );
                }),
              ],
              2
            ),
            t._v(" " + t._s(t.label) + " "),
          ]
        );
      },
      No = [],
      Po = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          ariaLabel: String,
          default: String,
          disabled: Boolean,
          empty: { type: [Boolean, String], default: !0 },
          id: [Number, String],
          name: [Number, String],
          placeholder: String,
          options: { type: Array, default: () => [] },
          required: Boolean,
          value: { type: [String, Number, Boolean], default: "" },
        },
        data() {
          return {
            selected: this.value,
            listeners: {
              ...this.$listeners,
              click: (t) => this.onClick(t),
              change: (t) => this.onInput(t.target.value),
              input: () => {},
            },
          };
        },
        computed: {
          emptyOption() {
            return this.placeholder || "—";
          },
          hasEmptyOption() {
            return !1 !== this.empty && !(this.required && this.default);
          },
          label() {
            const t = this.text(this.selected);
            return "" === this.selected || null === this.selected || null === t
              ? this.emptyOption
              : t;
          },
        },
        watch: {
          value(t) {
            (this.selected = t), this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          onClick(t) {
            t.stopPropagation(), this.$emit("click", t);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onInput(t) {
            (this.selected = t), this.$emit("input", this.selected);
          },
          select() {
            this.focus();
          },
          text(t) {
            let e = null;
            return (
              this.options.forEach((s) => {
                s.value == t && (e = s.text);
              }),
              e
            );
          },
        },
        validations() {
          return { selected: { required: !this.required || pr["required"] } };
        },
      },
      Ro = Po,
      qo = (s("6a18"), Object(c["a"])(Ro, Do, No, !1, null, null, null)),
      Fo = qo.exports,
      Uo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-draggable",
          {
            ref: "box",
            staticClass: "k-tags-input",
            attrs: {
              list: t.tags,
              "data-layout": t.layout,
              options: t.dragOptions,
              dir: t.direction,
            },
            on: { end: t.onInput },
          },
          [
            t._l(t.tags, function (e, i) {
              return s(
                "k-tag",
                {
                  key: i,
                  ref: e.value,
                  refInFor: !0,
                  attrs: { removable: !t.disabled, name: "tag" },
                  on: {
                    remove: function (s) {
                      return t.remove(e);
                    },
                  },
                  nativeOn: {
                    click: function (t) {
                      t.stopPropagation();
                    },
                    blur: function (e) {
                      return t.selectTag(null);
                    },
                    focus: function (s) {
                      return t.selectTag(e);
                    },
                    keydown: [
                      function (e) {
                        return (!e.type.indexOf("key") &&
                          t._k(e.keyCode, "left", 37, e.key, [
                            "Left",
                            "ArrowLeft",
                          ])) ||
                          ("button" in e && 0 !== e.button)
                          ? null
                          : t.navigate("prev");
                      },
                      function (e) {
                        return (!e.type.indexOf("key") &&
                          t._k(e.keyCode, "right", 39, e.key, [
                            "Right",
                            "ArrowRight",
                          ])) ||
                          ("button" in e && 2 !== e.button)
                          ? null
                          : t.navigate("next");
                      },
                    ],
                    dblclick: function (s) {
                      return t.edit(e);
                    },
                  },
                },
                [s("span", { domProps: { innerHTML: t._s(e.text) } })]
              );
            }),
            s(
              "span",
              {
                staticClass: "k-tags-input-element",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                s(
                  "k-autocomplete",
                  {
                    ref: "autocomplete",
                    attrs: { html: !0, options: t.options, skip: t.skip },
                    on: {
                      select: t.addTag,
                      leave: function (e) {
                        return t.$refs.input.focus();
                      },
                    },
                  },
                  [
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: t.newTag,
                          expression: "newTag",
                          modifiers: { trim: !0 },
                        },
                      ],
                      ref: "input",
                      attrs: {
                        id: t.id,
                        autofocus: t.autofocus,
                        disabled:
                          t.disabled || (t.max && t.tags.length >= t.max),
                        name: t.name,
                        autocomplete: "off",
                        type: "text",
                      },
                      domProps: { value: t.newTag },
                      on: {
                        input: [
                          function (e) {
                            e.target.composing ||
                              (t.newTag = e.target.value.trim());
                          },
                          function (e) {
                            return t.type(e.target.value);
                          },
                        ],
                        blur: [
                          t.blurInput,
                          function (e) {
                            return t.$forceUpdate();
                          },
                        ],
                        keydown: [
                          function (e) {
                            return !e.type.indexOf("key") &&
                              t._k(e.keyCode, "s", void 0, e.key, void 0)
                              ? null
                              : e.metaKey
                              ? t.blurInput(e)
                              : null;
                          },
                          function (e) {
                            return (!e.type.indexOf("key") &&
                              t._k(e.keyCode, "left", 37, e.key, [
                                "Left",
                                "ArrowLeft",
                              ])) ||
                              ("button" in e && 0 !== e.button) ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              e.metaKey
                              ? null
                              : t.leaveInput(e);
                          },
                          function (e) {
                            return (!e.type.indexOf("key") &&
                              t._k(e.keyCode, "enter", 13, e.key, "Enter")) ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              e.metaKey
                              ? null
                              : t.enter(e);
                          },
                          function (e) {
                            return (!e.type.indexOf("key") &&
                              t._k(e.keyCode, "tab", 9, e.key, "Tab")) ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              e.metaKey
                              ? null
                              : t.tab(e);
                          },
                          function (e) {
                            return (!e.type.indexOf("key") &&
                              t._k(
                                e.keyCode,
                                "backspace",
                                void 0,
                                e.key,
                                void 0
                              )) ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              e.metaKey
                              ? null
                              : t.leaveInput(e);
                          },
                        ],
                      },
                    }),
                  ]
                ),
              ],
              1
            ),
          ],
          2
        );
      },
      Ho = [],
      zo = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          accept: { type: String, default: "all" },
          disabled: Boolean,
          icon: { type: [String, Boolean], default: "tag" },
          id: [Number, String],
          layout: String,
          max: Number,
          min: Number,
          name: [Number, String],
          options: {
            type: Array,
            default() {
              return [];
            },
          },
          required: Boolean,
          separator: { type: String, default: "," },
          value: {
            type: Array,
            default() {
              return [];
            },
          },
        },
        data() {
          return {
            tags: this.prepareTags(this.value),
            selected: null,
            newTag: null,
            tagOptions: this.options.map(
              (t) => (
                this.icon && this.icon.length > 0 && (t.icon = this.icon), t
              ),
              this
            ),
          };
        },
        computed: {
          direction() {
            return Nr(this);
          },
          dragOptions() {
            return { delay: 1, disabled: !this.draggable, draggable: ".k-tag" };
          },
          draggable() {
            return this.tags.length > 1;
          },
          skip() {
            return this.tags.map((t) => t.value);
          },
        },
        watch: {
          value(t) {
            (this.tags = this.prepareTags(t)), this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          addString(t) {
            if (t)
              if (((t = t.trim()), t.includes(this.separator)))
                t.split(this.separator).forEach((t) => {
                  this.addString(t);
                });
              else if (0 !== t.length)
                if ("options" === this.accept) {
                  const e = this.options.filter((e) => e.text === t)[0];
                  if (!e) return;
                  this.addTag(e);
                } else this.addTag({ text: t, value: t });
          },
          addTag(t) {
            this.addTagToIndex(t),
              this.$refs.autocomplete.close(),
              this.$refs.input.focus();
          },
          addTagToIndex(t) {
            if ("options" === this.accept) {
              const e = this.options.filter((e) => e.value === t.value)[0];
              if (!e) return;
            }
            -1 === this.index(t) &&
              (!this.max || this.tags.length < this.max) &&
              (this.tags.push(t), this.onInput()),
              (this.newTag = null);
          },
          blurInput(t) {
            let e = t.relatedTarget || t.explicitOriginalTarget;
            (this.$refs.autocomplete.$el &&
              this.$refs.autocomplete.$el.contains(e)) ||
              (this.$refs.input.value.length &&
                (this.addTagToIndex(this.$refs.input.value),
                this.$refs.autocomplete.close()));
          },
          edit(t) {
            (this.newTag = t.text), this.$refs.input.select(), this.remove(t);
          },
          enter(t) {
            if (!this.newTag || 0 === this.newTag.length) return !0;
            t.preventDefault(), this.addString(this.newTag);
          },
          focus() {
            this.$refs.input.focus();
          },
          get(t) {
            let e = null,
              s = null;
            switch (t) {
              case "prev":
                if (!this.selected) return;
                if (((s = this.index(this.selected)), (e = s - 1), e < 0))
                  return;
                break;
              case "next":
                if (!this.selected) return;
                if (
                  ((s = this.index(this.selected)),
                  (e = s + 1),
                  e >= this.tags.length)
                )
                  return;
                break;
              case "first":
                e = 0;
                break;
              case "last":
                e = this.tags.length - 1;
                break;
              default:
                e = t;
                break;
            }
            let i = this.tags[e];
            if (i) {
              let t = this.$refs[i.value];
              if (t && t[0]) return { ref: t[0], tag: i, index: e };
            }
            return !1;
          },
          index(t) {
            return this.tags.findIndex((e) => e.value === t.value);
          },
          onInput() {
            this.$emit("input", this.tags);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          leaveInput(t) {
            0 === t.target.selectionStart &&
              t.target.selectionStart === t.target.selectionEnd &&
              0 !== this.tags.length &&
              (this.$refs.autocomplete.close(),
              this.navigate("last"),
              t.preventDefault());
          },
          navigate(t) {
            var e = this.get(t);
            e
              ? (e.ref.focus(), this.selectTag(e.tag))
              : "next" === t &&
                (this.$refs.input.focus(), this.selectTag(null));
          },
          prepareTags(t) {
            return !1 === Array.isArray(t)
              ? []
              : t.map((t) =>
                  "string" === typeof t ? { text: t, value: t } : t
                );
          },
          remove(t) {
            const e = this.get("prev"),
              s = this.get("next");
            this.tags.splice(this.index(t), 1),
              this.onInput(),
              e
                ? (this.selectTag(e.tag), e.ref.focus())
                : s
                ? this.selectTag(s.tag)
                : (this.selectTag(null), this.$refs.input.focus());
          },
          select() {
            this.focus();
          },
          selectTag(t) {
            this.selected = t;
          },
          tab(t) {
            this.newTag &&
              this.newTag.length > 0 &&
              (t.preventDefault(), this.addString(this.newTag));
          },
          type(t) {
            (this.newTag = t), this.$refs.autocomplete.search(t);
          },
        },
        validations() {
          return {
            tags: {
              required: !this.required || pr["required"],
              minLength: !this.min || Object(pr["minLength"])(this.min),
              maxLength: !this.max || Object(pr["maxLength"])(this.max),
            },
          };
        },
      },
      Ko = zo,
      Go = (s("27c1"), Object(c["a"])(Ko, Uo, Ho, !1, null, null, null)),
      Wo = Go.exports,
      Yo = {
        extends: Fr,
        props: {
          ...Fr.props,
          autocomplete: { type: String, default: "tel" },
          type: { type: String, default: "tel" },
        },
      },
      Vo = Yo,
      Jo = Object(c["a"])(Vo, Zr, Xr, !1, null, null, null),
      Zo = Jo.exports,
      Xo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-textarea-input",
            attrs: { "data-theme": t.theme, "data-over": t.over },
          },
          [
            s(
              "div",
              { staticClass: "k-textarea-input-wrapper" },
              [
                t.buttons && !t.disabled
                  ? s("k-toolbar", {
                      ref: "toolbar",
                      attrs: {
                        buttons: t.buttons,
                        disabled: t.disabled,
                        uploads: t.uploads,
                      },
                      on: { command: t.onCommand },
                      nativeOn: {
                        mousedown: function (t) {
                          t.preventDefault();
                        },
                      },
                    })
                  : t._e(),
                s(
                  "textarea",
                  t._b(
                    {
                      ref: "input",
                      staticClass: "k-textarea-input-native",
                      attrs: {
                        "data-font": t.font,
                        "data-size": t.size,
                        dir: t.direction,
                      },
                      on: {
                        click: t.onClick,
                        focus: t.onFocus,
                        input: t.onInput,
                        keydown: [
                          function (e) {
                            return !e.type.indexOf("key") &&
                              t._k(e.keyCode, "enter", 13, e.key, "Enter")
                              ? null
                              : e.metaKey
                              ? t.onSubmit(e)
                              : null;
                          },
                          function (e) {
                            return !e.type.indexOf("key") &&
                              t._k(e.keyCode, "enter", 13, e.key, "Enter")
                              ? null
                              : e.ctrlKey
                              ? t.onSubmit(e)
                              : null;
                          },
                          function (e) {
                            return e.metaKey ? t.onShortcut(e) : null;
                          },
                          function (e) {
                            return e.ctrlKey ? t.onShortcut(e) : null;
                          },
                        ],
                        dragover: t.onOver,
                        dragleave: t.onOut,
                        drop: t.onDrop,
                      },
                    },
                    "textarea",
                    {
                      autofocus: t.autofocus,
                      disabled: t.disabled,
                      id: t.id,
                      minlength: t.minlength,
                      name: t.name,
                      placeholder: t.placeholder,
                      required: t.required,
                      spellcheck: t.spellcheck,
                      value: t.value,
                    },
                    !1
                  )
                ),
              ],
              1
            ),
            s("k-toolbar-email-dialog", {
              ref: "emailDialog",
              on: {
                cancel: t.cancel,
                submit: function (e) {
                  return t.insert(e);
                },
              },
            }),
            s("k-toolbar-link-dialog", {
              ref: "linkDialog",
              on: {
                cancel: t.cancel,
                submit: function (e) {
                  return t.insert(e);
                },
              },
            }),
            s("k-files-dialog", {
              ref: "fileDialog",
              on: {
                cancel: t.cancel,
                submit: function (e) {
                  return t.insertFile(e);
                },
              },
            }),
            t.uploads
              ? s("k-upload", {
                  ref: "fileUpload",
                  on: { success: t.insertUpload },
                })
              : t._e(),
          ],
          1
        );
      },
      Qo = [],
      tl = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          buttons: { type: [Boolean, Array], default: !0 },
          disabled: Boolean,
          endpoints: Object,
          font: String,
          id: [Number, String],
          name: [Number, String],
          maxlength: Number,
          minlength: Number,
          placeholder: String,
          preselect: Boolean,
          required: Boolean,
          size: String,
          spellcheck: { type: [Boolean, String], default: "off" },
          theme: String,
          uploads: [Boolean, Object, Array],
          value: String,
        },
        data() {
          return { over: !1 };
        },
        computed: {
          direction() {
            return Nr(this);
          },
        },
        watch: {
          value() {
            this.onInvalid(),
              this.$nextTick(() => {
                this.resize();
              });
          },
        },
        mounted() {
          this.$nextTick(() => {
            this.$library.autosize(this.$refs.input);
          }),
            this.onInvalid(),
            this.$props.autofocus && this.focus(),
            this.$props.preselect && this.select();
        },
        methods: {
          cancel() {
            this.$refs.input.focus();
          },
          dialog(t) {
            if (!this.$refs[t + "Dialog"]) throw "Invalid toolbar dialog";
            this.$refs[t + "Dialog"].open(this.$refs.input, this.selection());
          },
          focus() {
            this.$refs.input.focus();
          },
          insert(t) {
            const e = this.$refs.input,
              s = e.value;
            setTimeout(() => {
              if (
                (e.focus(),
                document.execCommand("insertText", !1, t),
                e.value === s)
              ) {
                const s =
                  e.value.slice(0, e.selectionStart) +
                  t +
                  e.value.slice(e.selectionEnd);
                (e.value = s), this.$emit("input", s);
              }
            }),
              this.resize();
          },
          insertFile(t) {
            t &&
              t.length > 0 &&
              this.insert(t.map((t) => t.dragText).join("\n\n"));
          },
          insertUpload(t, e) {
            this.insert(e.map((t) => t.dragText).join("\n\n")),
              this.$events.$emit("model.update");
          },
          onClick() {
            this.$refs.toolbar && this.$refs.toolbar.close();
          },
          onCommand(t, e) {
            "function" === typeof this[t]
              ? "function" === typeof e
                ? this[t](e(this.$refs.input, this.selection()))
                : this[t](e)
              : window.console.warn(t + " is not a valid command");
          },
          onDrop(t) {
            if (this.uploads && this.$helper.isUploadEvent(t))
              return this.$refs.fileUpload.drop(t.dataTransfer.files, {
                url: O.api + "/" + this.endpoints.field + "/upload",
                multiple: !1,
              });
            const e = this.$store.state.drag;
            e && "text" === e.type && (this.focus(), this.insert(e.data));
          },
          onFocus(t) {
            this.$emit("focus", t);
          },
          onInput(t) {
            this.$emit("input", t.target.value);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onOut() {
            this.$refs.input.blur(), (this.over = !1);
          },
          onOver(t) {
            if (this.uploads && this.$helper.isUploadEvent(t))
              return (
                (t.dataTransfer.dropEffect = "copy"),
                this.focus(),
                void (this.over = !0)
              );
            const e = this.$store.state.drag;
            e &&
              "text" === e.type &&
              ((t.dataTransfer.dropEffect = "copy"),
              this.focus(),
              (this.over = !0));
          },
          onShortcut(t) {
            !1 !== this.buttons &&
              "Meta" !== t.key &&
              "Control" !== t.key &&
              this.$refs.toolbar &&
              this.$refs.toolbar.shortcut(t.key, t);
          },
          onSubmit(t) {
            return this.$emit("submit", t);
          },
          prepend(t) {
            this.insert(t + " " + this.selection());
          },
          resize() {
            this.$library.autosize.update(this.$refs.input);
          },
          select() {
            this.$refs.select();
          },
          selectFile() {
            this.$refs.fileDialog.open({
              endpoint: this.endpoints.field + "/files",
              multiple: !1,
            });
          },
          selection() {
            const t = this.$refs.input,
              e = t.selectionStart,
              s = t.selectionEnd;
            return t.value.substring(e, s);
          },
          uploadFile() {
            this.$refs.fileUpload.open({
              url: O.api + "/" + this.endpoints.field + "/upload",
              multiple: !1,
            });
          },
          wrap(t) {
            this.insert(t + this.selection() + t);
          },
        },
        validations() {
          return {
            value: {
              required: !this.required || pr["required"],
              minLength:
                !this.minlength || Object(pr["minLength"])(this.minlength),
              maxLength:
                !this.maxlength || Object(pr["maxLength"])(this.maxlength),
            },
          };
        },
      },
      el = tl,
      sl = (s("cca8"), Object(c["a"])(el, Xo, Qo, !1, null, null, null)),
      il = sl.exports,
      nl = {
        extends: Er,
        props: {
          display: { type: String, default: "HH:mm" },
          max: String,
          min: String,
          step: {
            type: Object,
            default() {
              return { size: 5, unit: "minute" };
            },
          },
          type: { type: String, default: "time" },
        },
        computed: {
          is12HourFormat() {
            return this.display.toLowerCase().includes("a");
          },
          map() {
            return {
              second: ["s", "ss"],
              minute: ["m", "mm"],
              hour: this.is12HourFormat ? ["h", "hh"] : ["H", "HH"],
            };
          },
          patterns() {
            let t = Er.computed.patterns.apply(this);
            return (
              this.is12HourFormat && (t = t.map((t) => t + "a").concat(t)), t
            );
          },
        },
        methods: {
          emit(t) {
            const e = this.toFormat(this.parsed, "HH:mm:ss") || "";
            this.$emit(t, e);
          },
          toDatetime(t) {
            return this.$library.dayjs.utc(t, "HH:mm:ss");
          },
        },
      },
      al = nl,
      rl = Object(c["a"])(al, Qr, to, !1, null, null, null),
      ol = rl.exports,
      ll = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "label",
          {
            staticClass: "k-toggle-input",
            attrs: { "data-disabled": t.disabled },
          },
          [
            s("input", {
              ref: "input",
              staticClass: "k-toggle-input-native",
              attrs: { id: t.id, disabled: t.disabled, type: "checkbox" },
              domProps: { checked: t.value },
              on: {
                change: function (e) {
                  return t.onInput(e.target.checked);
                },
              },
            }),
            s("span", {
              staticClass: "k-toggle-input-label",
              domProps: { innerHTML: t._s(t.label) },
            }),
          ]
        );
      },
      cl = [],
      ul = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          text: {
            type: [Array, String],
            default() {
              return [this.$t("off"), this.$t("on")];
            },
          },
          required: Boolean,
          value: Boolean,
        },
        computed: {
          label() {
            return Array.isArray(this.text)
              ? this.value
                ? this.text[1]
                : this.text[0]
              : this.text;
          },
        },
        watch: {
          value() {
            this.onInvalid();
          },
        },
        mounted() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          onEnter(t) {
            "Enter" === t.key && this.$refs.input.click();
          },
          onInput(t) {
            this.$emit("input", t);
          },
          onInvalid() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select() {
            this.$refs.input.focus();
          },
        },
        validations() {
          return { value: { required: !this.required || pr["required"] } };
        },
      },
      dl = ul,
      pl = (s("bb41"), Object(c["a"])(dl, ll, cl, !1, null, null, null)),
      hl = pl.exports,
      ml = {
        extends: Fr,
        props: {
          ...Fr.props,
          autocomplete: { type: String, default: "url" },
          type: { type: String, default: "url" },
        },
      },
      fl = ml,
      gl = Object(c["a"])(fl, eo, so, !1, null, null, null),
      bl = gl.exports,
      kl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b({ staticClass: "k-blocks-field" }, "k-field", t.$props, !1),
          [
            t.hasFieldsets
              ? s(
                  "k-dropdown",
                  { attrs: { slot: "options" }, slot: "options" },
                  [
                    s("k-button", {
                      attrs: { icon: "dots" },
                      on: {
                        click: function (e) {
                          return t.$refs.options.toggle();
                        },
                      },
                    }),
                    s(
                      "k-dropdown-content",
                      { ref: "options", attrs: { align: "right" } },
                      [
                        s(
                          "k-dropdown-item",
                          {
                            attrs: { disabled: t.isFull, icon: "add" },
                            on: {
                              click: function (e) {
                                return t.$refs.blocks.choose(t.value.length);
                              },
                            },
                          },
                          [t._v(" " + t._s(t.$t("add")) + " ")]
                        ),
                        s(
                          "k-dropdown-item",
                          {
                            attrs: { disabled: t.isEmpty, icon: "trash" },
                            on: {
                              click: function (e) {
                                return t.$refs.blocks.confirmToRemoveAll();
                              },
                            },
                          },
                          [t._v(" " + t._s(t.$t("delete.all")) + " ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : t._e(),
            s(
              "k-blocks",
              t._g(
                {
                  ref: "blocks",
                  attrs: {
                    compact: !1,
                    empty: t.empty,
                    endpoints: t.endpoints,
                    fieldsets: t.fieldsets,
                    "fieldset-groups": t.fieldsetGroups,
                    group: t.group,
                    max: t.max,
                    value: t.value,
                  },
                  on: {
                    close: function (e) {
                      t.opened = e;
                    },
                    open: function (e) {
                      t.opened = e;
                    },
                  },
                },
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      vl = [],
      $l = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          empty: String,
          fieldsets: Object,
          fieldsetGroups: Object,
          group: String,
          max: { type: Number, default: null },
          value: {
            type: Array,
            default() {
              return [];
            },
          },
        },
        data() {
          return { opened: [] };
        },
        computed: {
          hasFieldsets() {
            return Object.keys(this.fieldsets).length;
          },
          isEmpty() {
            return 0 === this.value.length;
          },
          isFull() {
            return null !== this.max && this.value.length >= this.max;
          },
        },
      },
      yl = $l,
      _l = (s("ae14"), Object(c["a"])(yl, kl, vl, !1, null, null, null)),
      wl = _l.exports,
      xl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-checkboxes-field",
              attrs: { counter: t.counterOptions },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "checkboxes" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      Ol = [],
      Cl = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ..._r.props,
          counter: { type: Boolean, default: !0 },
        },
        computed: {
          counterOptions() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count:
                  this.value && Array.isArray(this.value)
                    ? this.value.length
                    : 0,
                min: this.min,
                max: this.max,
              }
            );
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Sl = Cl,
      El = Object(c["a"])(Sl, xl, Ol, !1, null, null, null),
      jl = El.exports,
      Tl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-date-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: {
                      id: t._uid,
                      type: t.inputType,
                      value: t.value,
                      theme: "field",
                    },
                    scopedSlots: t._u(
                      [
                        t.calendar
                          ? {
                              key: "icon",
                              fn: function () {
                                return [
                                  s(
                                    "k-dropdown",
                                    [
                                      s("k-button", {
                                        staticClass: "k-input-icon-button",
                                        attrs: {
                                          icon: t.icon,
                                          tooltip: t.$t("date.select"),
                                          tabindex: "-1",
                                        },
                                        on: { click: t.onFocus },
                                      }),
                                      s(
                                        "k-dropdown-content",
                                        {
                                          ref: "calendar",
                                          attrs: { align: "right" },
                                        },
                                        [
                                          s("k-calendar", {
                                            attrs: {
                                              value: t.datetime,
                                              min: t.min,
                                              max: t.max,
                                            },
                                            on: { input: t.onSelect },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ];
                              },
                              proxy: !0,
                            }
                          : null,
                      ],
                      null,
                      !0
                    ),
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.listeners
              )
            ),
          ],
          1
        );
      },
      Ll = [],
      Il = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...Br.props,
          calendar: { type: Boolean, default: !0 },
          icon: { type: String, default: "calendar" },
        },
        data() {
          return { datetime: this.value };
        },
        computed: {
          inputType() {
            return !1 === this.time ? "date" : "datetime";
          },
          listeners() {
            return {
              ...this.$listeners,
              enter: this.onSelect,
              focus: this.onFocus,
              input: this.onInput,
              update: this.onUpdate,
            };
          },
        },
        watch: {
          value(t) {
            this.datetime = t;
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          onUpdate(t) {
            this.$emit("input", t);
          },
          onFocus() {
            this.$refs.calendar && this.$refs.calendar.open();
          },
          onInput(t) {
            this.datetime = t;
          },
          onSelect(t) {
            this.onUpdate(t),
              this.$refs.calendar && this.$refs.calendar.close();
          },
        },
      },
      Al = Il,
      Bl = Object(c["a"])(Al, Tl, Ll, !1, null, null, null),
      Ml = Bl.exports,
      Dl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-email-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "email" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              ),
              [
                t.link
                  ? s("k-button", {
                      staticClass: "k-input-icon-button",
                      attrs: {
                        slot: "icon",
                        icon: t.icon,
                        link: t.mailto,
                        tooltip: t.$t("open"),
                        tabindex: "-1",
                        target: "_blank",
                      },
                      slot: "icon",
                    })
                  : t._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      Nl = [],
      Pl = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...Kr.props,
          link: { type: Boolean, default: !0 },
          icon: { type: String, default: "email" },
        },
        computed: {
          mailto() {
            return this.value && this.value.length > 0
              ? "mailto:" + this.value
              : null;
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Rl = Pl,
      ql = Object(c["a"])(Rl, Dl, Nl, !1, null, null, null),
      Fl = ql.exports,
      Ul = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b({ staticClass: "k-files-field" }, "k-field", t.$props, !1),
          [
            t.more && !t.disabled
              ? s(
                  "template",
                  { slot: "options" },
                  [
                    s(
                      "k-button-group",
                      { staticClass: "k-field-options" },
                      [
                        t.uploads
                          ? [
                              s(
                                "k-dropdown",
                                [
                                  s(
                                    "k-button",
                                    {
                                      ref: "pickerToggle",
                                      staticClass: "k-field-options-button",
                                      attrs: { icon: t.btnIcon },
                                      on: { click: t.prompt },
                                    },
                                    [t._v(" " + t._s(t.btnLabel) + " ")]
                                  ),
                                  s(
                                    "k-dropdown-content",
                                    {
                                      ref: "picker",
                                      attrs: { align: "right" },
                                    },
                                    [
                                      s(
                                        "k-dropdown-item",
                                        {
                                          attrs: { icon: "check" },
                                          on: { click: t.open },
                                        },
                                        [t._v(" " + t._s(t.$t("select")) + " ")]
                                      ),
                                      s(
                                        "k-dropdown-item",
                                        {
                                          attrs: { icon: "upload" },
                                          on: { click: t.upload },
                                        },
                                        [t._v(" " + t._s(t.$t("upload")) + " ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : [
                              s(
                                "k-button",
                                {
                                  staticClass: "k-field-options-button",
                                  attrs: { icon: "check" },
                                  on: { click: t.open },
                                },
                                [t._v(" " + t._s(t.$t("select")) + " ")]
                              ),
                            ],
                      ],
                      2
                    ),
                  ],
                  1
                )
              : t._e(),
            t.selected.length
              ? [
                  s(
                    "k-draggable",
                    {
                      attrs: {
                        element: t.elements.list,
                        list: t.selected,
                        "data-size": t.size,
                        handle: !0,
                        "data-invalid": t.isInvalid,
                      },
                      on: { end: t.onInput },
                    },
                    t._l(t.selected, function (e, i) {
                      return s(
                        t.elements.item,
                        {
                          key: e.id,
                          tag: "component",
                          attrs: {
                            sortable: !t.disabled && t.selected.length > 1,
                            text: e.text,
                            link: t.link ? e.link : null,
                            info: e.info,
                            image: e.image,
                            icon: e.icon,
                          },
                        },
                        [
                          t.disabled
                            ? t._e()
                            : s("k-button", {
                                attrs: {
                                  slot: "options",
                                  tooltip: t.$t("remove"),
                                  icon: "remove",
                                },
                                on: {
                                  click: function (e) {
                                    return t.remove(i);
                                  },
                                },
                                slot: "options",
                              }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ]
              : s(
                  "k-empty",
                  {
                    attrs: {
                      layout: t.layout,
                      "data-invalid": t.isInvalid,
                      icon: "image",
                    },
                    on: { click: t.prompt },
                  },
                  [t._v(" " + t._s(t.empty || t.$t("field.files.empty")) + " ")]
                ),
            s("k-files-dialog", { ref: "selector", on: { submit: t.select } }),
            s("k-upload", {
              ref: "fileUpload",
              on: { success: t.selectUpload },
            }),
          ],
          2
        );
      },
      Hl = [],
      zl = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          empty: String,
          info: String,
          link: Boolean,
          layout: { type: String, default: "list" },
          max: Number,
          multiple: Boolean,
          parent: String,
          search: Boolean,
          size: String,
          text: String,
          value: {
            type: Array,
            default() {
              return [];
            },
          },
        },
        data() {
          return { selected: this.value };
        },
        computed: {
          btnIcon() {
            return !this.multiple && this.selected.length > 0
              ? "refresh"
              : "add";
          },
          btnLabel() {
            return !this.multiple && this.selected.length > 0
              ? this.$t("change")
              : this.$t("add");
          },
          elements() {
            const t = {
              cards: { list: "k-cards", item: "k-card" },
              list: { list: "k-list", item: "k-list-item" },
            };
            return t[this.layout] ? t[this.layout] : t["list"];
          },
          isInvalid() {
            return (
              !(!this.required || 0 !== this.selected.length) ||
              !!(this.min && this.selected.length < this.min) ||
              !!(this.max && this.selected.length > this.max)
            );
          },
          more() {
            return !this.max || this.max > this.selected.length;
          },
        },
        watch: {
          value(t) {
            this.selected = t;
          },
        },
        methods: {
          focus() {},
          onInput() {
            this.$emit("input", this.selected);
          },
          remove(t) {
            this.selected.splice(t, 1), this.onInput();
          },
          removeById(t) {
            (this.selected = this.selected.filter((e) => e.id !== t)),
              this.onInput();
          },
          select(t) {
            0 !== t.length
              ? ((this.selected = this.selected.filter(
                  (e) => t.filter((t) => t.id === e.id).length > 0
                )),
                t.forEach((t) => {
                  0 === this.selected.filter((e) => t.id === e.id).length &&
                    this.selected.push(t);
                }),
                this.onInput())
              : (this.selected = []);
          },
        },
      },
      Kl = {
        mixins: [zl],
        props: { uploads: [Boolean, Object, Array] },
        created() {
          this.$events.$on("file.delete", this.removeById);
        },
        destroyed() {
          this.$events.$off("file.delete", this.removeById);
        },
        methods: {
          prompt(t) {
            if ((t.stopPropagation(), this.disabled)) return !1;
            this.more && this.uploads
              ? this.$refs.picker.toggle()
              : this.open();
          },
          open() {
            if (this.disabled) return !1;
            this.$refs.selector.open({
              endpoint: this.endpoints.field,
              max: this.max,
              multiple: this.multiple,
              search: this.search,
              selected: this.selected.map((t) => t.id),
            });
          },
          selectUpload(t, e) {
            !1 === this.multiple && (this.selected = []),
              e.forEach((t) => {
                this.selected.push(t);
              }),
              this.onInput(),
              this.$events.$emit("model.update");
          },
          upload() {
            this.$refs.fileUpload.open({
              url: O.api + "/" + this.endpoints.field + "/upload",
              multiple: this.multiple,
              accept: this.uploads.accept,
            });
          },
        },
      },
      Gl = Kl,
      Wl = (s("4a4b"), Object(c["a"])(Gl, Ul, Hl, !1, null, null, null)),
      Yl = Wl.exports,
      Vl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "k-field k-gap-field" });
      },
      Jl = [],
      Zl = {},
      Xl = Object(c["a"])(Zl, Vl, Jl, !1, null, null, null),
      Ql = Xl.exports,
      tc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-headline-field" },
          [
            s(
              "k-headline",
              { attrs: { "data-numbered": t.numbered, size: "large" } },
              [t._v(" " + t._s(t.label) + " ")]
            ),
            t.help
              ? s(
                  "footer",
                  { staticClass: "k-field-footer" },
                  [
                    t.help
                      ? s("k-text", {
                          staticClass: "k-field-help",
                          attrs: { theme: "help" },
                          domProps: { innerHTML: t._s(t.help) },
                        })
                      : t._e(),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      ec = [],
      sc = { props: { help: String, label: String, numbered: Boolean } },
      ic = sc,
      nc = (s("19d7"), Object(c["a"])(ic, tc, ec, !1, null, null, null)),
      ac = nc.exports,
      rc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-field k-info-field" },
          [
            s("k-headline", [t._v(t._s(t.label))]),
            s(
              "k-box",
              { attrs: { theme: t.theme } },
              [s("k-text", { domProps: { innerHTML: t._s(t.text) } })],
              1
            ),
            t.help
              ? s(
                  "footer",
                  { staticClass: "k-field-footer" },
                  [
                    t.help
                      ? s("k-text", {
                          staticClass: "k-field-help",
                          attrs: { theme: "help" },
                          domProps: { innerHTML: t._s(t.help) },
                        })
                      : t._e(),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      oc = [],
      lc = {
        props: {
          help: String,
          label: String,
          text: String,
          theme: { type: String, default: "info" },
        },
      },
      cc = lc,
      uc = (s("ddfd"), Object(c["a"])(cc, rc, oc, !1, null, null, null)),
      dc = uc.exports,
      pc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b({ staticClass: "k-layout-field" }, "k-field", t.$props, !1),
          [
            s(
              "k-block-layouts",
              t._b(
                {
                  on: {
                    input: function (e) {
                      return t.$emit("input", e);
                    },
                  },
                },
                "k-block-layouts",
                t.$props,
                !1
              )
            ),
          ],
          1
        );
      },
      hc = [],
      mc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          [
            t.rows.length
              ? [
                  s(
                    "k-draggable",
                    t._b(
                      { staticClass: "k-layouts", on: { sort: t.save } },
                      "k-draggable",
                      t.draggableOptions,
                      !1
                    ),
                    t._l(t.rows, function (e, i) {
                      return s(
                        "k-layout",
                        t._b(
                          {
                            key: e.id,
                            attrs: {
                              disabled: t.disabled,
                              endpoints: t.endpoints,
                              "fieldset-groups": t.fieldsetGroups,
                              fieldsets: t.fieldsets,
                              "is-selected": t.selected === e.id,
                              settings: t.settings,
                            },
                            on: {
                              append: function (e) {
                                return t.selectLayout(i + 1);
                              },
                              duplicate: function (s) {
                                return t.duplicateLayout(i, e);
                              },
                              prepend: function (e) {
                                return t.selectLayout(i);
                              },
                              remove: function (s) {
                                return t.removeLayout(e);
                              },
                              select: function (s) {
                                t.selected = e.id;
                              },
                              updateAttrs: function (e) {
                                return t.updateAttrs(i, e);
                              },
                              updateColumn: function (s) {
                                return t.updateColumn(
                                  Object.assign(
                                    {},
                                    { layout: e, layoutIndex: i },
                                    s
                                  )
                                );
                              },
                            },
                          },
                          "k-layout",
                          e,
                          !1
                        )
                      );
                    }),
                    1
                  ),
                  t.disabled
                    ? t._e()
                    : s("k-button", {
                        staticClass: "k-layout-add-button",
                        attrs: { icon: "add" },
                        on: {
                          click: function (e) {
                            return t.selectLayout(t.rows.length);
                          },
                        },
                      }),
                ]
              : [
                  s(
                    "k-empty",
                    {
                      staticClass: "k-layout-empty",
                      attrs: { icon: "dashboard" },
                      on: {
                        click: function (e) {
                          return t.selectLayout(0);
                        },
                      },
                    },
                    [
                      t._v(
                        " " + t._s(t.empty || t.$t("field.layout.empty")) + " "
                      ),
                    ]
                  ),
                ],
            s(
              "k-dialog",
              {
                ref: "selector",
                staticClass: "k-layout-selector",
                attrs: {
                  "cancel-button": !1,
                  "submit-button": !1,
                  size: "medium",
                },
              },
              [
                s("k-headline", [t._v(t._s(t.$t("field.layout.select")))]),
                s(
                  "ul",
                  t._l(t.layouts, function (e, i) {
                    return s(
                      "li",
                      { key: i, staticClass: "k-layout-selector-option" },
                      [
                        s(
                          "k-grid",
                          {
                            nativeOn: {
                              click: function (s) {
                                return t.addLayout(e);
                              },
                            },
                          },
                          t._l(e, function (t, e) {
                            return s("k-column", {
                              key: e,
                              attrs: { width: t },
                            });
                          }),
                          1
                        ),
                      ],
                      1
                    );
                  }),
                  0
                ),
              ],
              1
            ),
          ],
          2
        );
      },
      fc = [],
      gc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "section",
          {
            staticClass: "k-layout",
            attrs: { "data-selected": t.isSelected, tabindex: "0" },
            on: {
              click: function (e) {
                return t.$emit("select");
              },
            },
          },
          [
            s(
              "k-grid",
              { staticClass: "k-layout-columns" },
              t._l(t.columns, function (e, i) {
                return s(
                  "k-layout-column",
                  t._b(
                    {
                      key: e.id,
                      attrs: {
                        endpoints: t.endpoints,
                        "fieldset-groups": t.fieldsetGroups,
                        fieldsets: t.fieldsets,
                      },
                      on: {
                        input: function (s) {
                          return t.$emit("updateColumn", {
                            column: e,
                            columnIndex: i,
                            blocks: s,
                          });
                        },
                      },
                    },
                    "k-layout-column",
                    e,
                    !1
                  )
                );
              }),
              1
            ),
            t.disabled
              ? t._e()
              : s(
                  "nav",
                  { staticClass: "k-layout-toolbar" },
                  [
                    t.settings
                      ? s("k-button", {
                          staticClass: "k-layout-toolbar-button",
                          attrs: {
                            tooltip: t.$t("settings"),
                            icon: "settings",
                          },
                          on: {
                            click: function (e) {
                              return t.$refs.drawer.open();
                            },
                          },
                        })
                      : t._e(),
                    s(
                      "k-dropdown",
                      [
                        s("k-button", {
                          staticClass: "k-layout-toolbar-button",
                          attrs: { icon: "angle-down" },
                          on: {
                            click: function (e) {
                              return t.$refs.options.toggle();
                            },
                          },
                        }),
                        s(
                          "k-dropdown-content",
                          { ref: "options", attrs: { align: "right" } },
                          [
                            s(
                              "k-dropdown-item",
                              {
                                attrs: { icon: "angle-up" },
                                on: {
                                  click: function (e) {
                                    return t.$emit("prepend");
                                  },
                                },
                              },
                              [t._v(" " + t._s(t.$t("insert.before")) + " ")]
                            ),
                            s(
                              "k-dropdown-item",
                              {
                                attrs: { icon: "angle-down" },
                                on: {
                                  click: function (e) {
                                    return t.$emit("append");
                                  },
                                },
                              },
                              [t._v(" " + t._s(t.$t("insert.after")) + " ")]
                            ),
                            s("hr"),
                            t.settings
                              ? s(
                                  "k-dropdown-item",
                                  {
                                    attrs: { icon: "settings" },
                                    on: {
                                      click: function (e) {
                                        return t.$refs.drawer.open();
                                      },
                                    },
                                  },
                                  [t._v(" " + t._s(t.$t("settings")) + " ")]
                                )
                              : t._e(),
                            s(
                              "k-dropdown-item",
                              {
                                attrs: { icon: "copy" },
                                on: {
                                  click: function (e) {
                                    return t.$emit("duplicate");
                                  },
                                },
                              },
                              [t._v(" " + t._s(t.$t("duplicate")) + " ")]
                            ),
                            s("hr"),
                            s(
                              "k-dropdown-item",
                              {
                                attrs: { icon: "trash" },
                                on: {
                                  click: function (e) {
                                    return t.$refs.confirmRemoveDialog.open();
                                  },
                                },
                              },
                              [
                                t._v(
                                  " " + t._s(t.$t("field.layout.delete")) + " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    s("k-sort-handle"),
                  ],
                  1
                ),
            t.settings
              ? s("k-form-drawer", {
                  ref: "drawer",
                  staticClass: "k-layout-drawer",
                  attrs: {
                    tabs: t.tabs,
                    title: t.$t("settings"),
                    value: t.attrs,
                    icon: "settings",
                  },
                  on: {
                    input: function (e) {
                      return t.$emit("updateAttrs", e);
                    },
                  },
                })
              : t._e(),
            s("k-remove-dialog", {
              ref: "confirmRemoveDialog",
              attrs: { text: t.$t("field.layout.delete.confirm") },
              on: {
                submit: function (e) {
                  return t.$emit("remove");
                },
              },
            }),
          ],
          1
        );
      },
      bc = [],
      kc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-column k-layout-column",
            attrs: { id: t.id, "data-width": t.width, tabindex: "0" },
            on: {
              dblclick: function (e) {
                return t.$refs.blocks.choose(t.blocks.length);
              },
            },
          },
          [
            s("k-blocks", {
              ref: "blocks",
              attrs: {
                endpoints: t.endpoints,
                "fieldset-groups": t.fieldsetGroups,
                fieldsets: t.fieldsets,
                value: t.blocks,
                group: "layout",
              },
              on: {
                input: function (e) {
                  return t.$emit("input", e);
                },
              },
              nativeOn: {
                dblclick: function (t) {
                  t.stopPropagation();
                },
              },
            }),
          ],
          1
        );
      },
      vc = [],
      $c = {
        props: {
          blocks: Array,
          endpoints: Object,
          fieldsetGroups: Object,
          fieldsets: Object,
          id: String,
          isSelected: Boolean,
          width: String,
        },
      },
      yc = $c,
      _c = (s("e791"), Object(c["a"])(yc, kc, vc, !1, null, null, null)),
      wc = _c.exports,
      xc = {
        components: { "k-layout-column": wc },
        props: {
          attrs: [Array, Object],
          columns: Array,
          disabled: Boolean,
          endpoints: Object,
          fieldsetGroups: Object,
          fieldsets: Object,
          id: String,
          isSelected: Boolean,
          settings: Object,
        },
        computed: {
          tabs() {
            let t = this.settings.tabs;
            return (
              Object.entries(t).forEach(([e, s]) => {
                Object.entries(s.fields).forEach(([s]) => {
                  t[e].fields[s].endpoints = {
                    field: this.endpoints.field + "/fields/" + s,
                    section: this.endpoints.section,
                    model: this.endpoints.model,
                  };
                });
              }),
              t
            );
          },
        },
      },
      Oc = xc,
      Cc = (s("170b"), Object(c["a"])(Oc, gc, bc, !1, null, null, null)),
      Sc = Cc.exports,
      Ec = {
        components: { "k-layout": Sc },
        props: {
          disabled: Boolean,
          empty: String,
          endpoints: Object,
          fieldsetGroups: Object,
          fieldsets: Object,
          layouts: Array,
          max: Number,
          settings: Object,
          value: Array,
        },
        data() {
          return {
            currentLayout: null,
            nextIndex: null,
            rows: this.value,
            selected: null,
          };
        },
        computed: {
          draggableOptions() {
            return { id: this._uid, handle: !0, list: this.rows };
          },
        },
        watch: {
          value() {
            this.rows = this.value;
          },
        },
        methods: {
          async addLayout(t) {
            let e = await this.$api.post(this.endpoints.field + "/layout", {
              columns: t,
            });
            this.rows.splice(this.nextIndex, 0, e),
              this.layouts.length > 1 && this.$refs.selector.close(),
              this.save();
          },
          duplicateLayout(t, e) {
            let s = { ...this.$helper.clone(e), id: this.$helper.uuid() };
            (s.columns = s.columns.map(
              (t) => (
                (t.id = this.$helper.uuid()),
                (t.blocks = t.blocks.map(
                  (t) => ((t.id = this.$helper.uuid()), t)
                )),
                t
              )
            )),
              this.rows.splice(t + 1, 0, s),
              this.save();
          },
          removeLayout(t) {
            const e = this.rows.findIndex((e) => e.id === t.id);
            -1 !== e && this.$delete(this.rows, e), this.save();
          },
          save() {
            this.$emit("input", this.rows);
          },
          selectLayout(t) {
            (this.nextIndex = t),
              1 !== this.layouts.length
                ? this.$refs.selector.open()
                : this.addLayout(this.layouts[0]);
          },
          updateColumn(t) {
            (this.rows[t.layoutIndex].columns[t.columnIndex].blocks = t.blocks),
              this.save();
          },
          updateAttrs(t, e) {
            (this.rows[t].attrs = e), this.save();
          },
        },
      },
      jc = Ec,
      Tc = (s("a659"), Object(c["a"])(jc, mc, fc, !1, null, null, null)),
      Lc = Tc.exports,
      Ic = {
        components: { "k-block-layouts": Lc },
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          empty: String,
          fieldsetGroups: Object,
          fieldsets: Object,
          layouts: {
            type: Array,
            default() {
              return [["1/1"]];
            },
          },
          settings: Object,
          value: {
            type: Array,
            default() {
              return [];
            },
          },
        },
      },
      Ac = Ic,
      Bc = Object(c["a"])(Ac, pc, hc, !1, null, null, null),
      Mc = Bc.exports,
      Dc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("hr", { staticClass: "k-line-field" });
      },
      Nc = [],
      Pc = {},
      Rc = Pc,
      qc = (s("718c"), Object(c["a"])(Rc, Dc, Nc, !1, null, null, null)),
      Fc = qc.exports,
      Uc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-list-field",
              attrs: { input: t._uid, counter: !1 },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._b(
                {
                  ref: "input",
                  attrs: {
                    id: t._uid,
                    marks: t.marks,
                    value: t.value,
                    type: "list",
                    theme: "field",
                  },
                  on: {
                    input: function (e) {
                      return t.$emit("input", e);
                    },
                  },
                },
                "k-input",
                t.$props,
                !1
              )
            ),
          ],
          1
        );
      },
      Hc = [],
      zc = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          marks: [Array, Boolean],
          value: String,
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Kc = zc,
      Gc = (s("116a"), Object(c["a"])(Kc, Uc, Hc, !1, null, null, null)),
      Wc = Gc.exports,
      Yc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-multiselect-field",
              attrs: { input: t._uid, counter: t.counterOptions },
              on: { blur: t.blur },
              nativeOn: {
                keydown: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                    ? null
                    : (e.preventDefault(), t.focus(e));
                },
              },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "multiselect" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      Vc = [],
      Jc = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...ho.props,
          counter: { type: Boolean, default: !0 },
          icon: { type: String, default: "angle-down" },
        },
        computed: {
          counterOptions() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count:
                  this.value && Array.isArray(this.value)
                    ? this.value.length
                    : 0,
                min: this.min,
                max: this.max,
              }
            );
          },
        },
        mounted() {
          this.$refs.input.$el.setAttribute("tabindex", 0);
        },
        methods: {
          blur(t) {
            this.$refs.input.blur(t);
          },
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Zc = Jc,
      Xc = Object(c["a"])(Zc, Yc, Vc, !1, null, null, null),
      Qc = Xc.exports,
      tu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-number-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "number" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      eu = [],
      su = {
        inheritAttrs: !1,
        props: { ...fn["a"].props, ...Sn.props, ...vo.props },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      iu = su,
      nu = Object(c["a"])(iu, tu, eu, !1, null, null, null),
      au = nu.exports,
      ru = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b({ staticClass: "k-pages-field" }, "k-field", t.$props, !1),
          [
            s(
              "k-button-group",
              {
                staticClass: "k-field-options",
                attrs: { slot: "options" },
                slot: "options",
              },
              [
                t.more && !t.disabled
                  ? s(
                      "k-button",
                      {
                        staticClass: "k-field-options-button",
                        attrs: { icon: t.btnIcon },
                        on: { click: t.open },
                      },
                      [t._v(" " + t._s(t.btnLabel) + " ")]
                    )
                  : t._e(),
              ],
              1
            ),
            t.selected.length
              ? [
                  s(
                    "k-draggable",
                    {
                      attrs: {
                        element: t.elements.list,
                        handle: !0,
                        list: t.selected,
                        "data-size": t.size,
                        "data-invalid": t.isInvalid,
                      },
                      on: { end: t.onInput },
                    },
                    t._l(t.selected, function (e, i) {
                      return s(
                        t.elements.item,
                        {
                          key: e.id,
                          tag: "component",
                          attrs: {
                            sortable: !t.disabled && t.selected.length > 1,
                            text: e.text,
                            info: e.info,
                            link: t.link ? e.link : null,
                            icon: e.icon,
                            image: e.image,
                          },
                        },
                        [
                          t.disabled
                            ? t._e()
                            : s("k-button", {
                                attrs: { slot: "options", icon: "remove" },
                                on: {
                                  click: function (e) {
                                    return t.remove(i);
                                  },
                                },
                                slot: "options",
                              }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ]
              : s(
                  "k-empty",
                  {
                    attrs: {
                      layout: t.layout,
                      "data-invalid": t.isInvalid,
                      icon: "page",
                    },
                    on: { click: t.open },
                  },
                  [t._v(" " + t._s(t.empty || t.$t("field.pages.empty")) + " ")]
                ),
            s("k-pages-dialog", { ref: "selector", on: { submit: t.select } }),
          ],
          2
        );
      },
      ou = [],
      lu = {
        mixins: [zl],
        methods: {
          open() {
            if (this.disabled) return !1;
            this.$refs.selector.open({
              endpoint: this.endpoints.field,
              max: this.max,
              multiple: this.multiple,
              search: this.search,
              selected: this.selected.map((t) => t.id),
            });
          },
        },
      },
      cu = lu,
      uu = (s("7e85"), Object(c["a"])(cu, ru, ou, !1, null, null, null)),
      du = uu.exports,
      pu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-password-field",
              attrs: { input: t._uid, counter: t.counterOptions },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            t._t("options", null, { slot: "options" }),
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "password" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          2
        );
      },
      hu = [],
      mu = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...wo.props,
          counter: { type: Boolean, default: !0 },
          minlength: { type: Number, default: 8 },
          icon: { type: String, default: "key" },
        },
        computed: {
          counterOptions() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count: this.value ? String(this.value).length : 0,
                min: this.minlength,
                max: this.maxlength,
              }
            );
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      fu = mu,
      gu = Object(c["a"])(fu, pu, hu, !1, null, null, null),
      bu = gu.exports,
      ku = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b({ staticClass: "k-radio-field" }, "k-field", t.$props, !1),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "radio" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      vu = [],
      $u = {
        inheritAttrs: !1,
        props: { ...fn["a"].props, ...Sn.props, ...jo.props },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      yu = $u,
      _u = Object(c["a"])(yu, ku, vu, !1, null, null, null),
      wu = _u.exports,
      xu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-range-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "range" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      Ou = [],
      Cu = {
        inheritAttrs: !1,
        props: { ...fn["a"].props, ...Sn.props, ...Mo.props },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Su = Cu,
      Eu = Object(c["a"])(Su, xu, Ou, !1, null, null, null),
      ju = Eu.exports,
      Tu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-select-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "select" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      Lu = [],
      Iu = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...Fo.props,
          icon: { type: String, default: "angle-down" },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Au = Iu,
      Bu = Object(c["a"])(Au, Tu, Lu, !1, null, null, null),
      Mu = Bu.exports,
      Du = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-structure-field",
              nativeOn: {
                click: function (t) {
                  t.stopPropagation();
                },
              },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "template",
              { slot: "options" },
              [
                t.more && null === t.currentIndex
                  ? s(
                      "k-button",
                      {
                        ref: "add",
                        attrs: { id: t._uid, icon: "add" },
                        on: { click: t.add },
                      },
                      [t._v(" " + t._s(t.$t("add")) + " ")]
                    )
                  : t._e(),
              ],
              1
            ),
            null !== t.currentIndex
              ? [
                  s("div", {
                    staticClass: "k-structure-backdrop",
                    on: { click: t.escape },
                  }),
                  s(
                    "section",
                    { staticClass: "k-structure-form" },
                    [
                      s("k-form", {
                        ref: "form",
                        staticClass: "k-structure-form-fields",
                        attrs: { fields: t.formFields },
                        on: { input: t.onInput, submit: t.submit },
                        model: {
                          value: t.currentModel,
                          callback: function (e) {
                            t.currentModel = e;
                          },
                          expression: "currentModel",
                        },
                      }),
                      s(
                        "footer",
                        { staticClass: "k-structure-form-buttons" },
                        [
                          s(
                            "k-button",
                            {
                              staticClass: "k-structure-form-cancel-button",
                              attrs: { icon: "cancel" },
                              on: { click: t.close },
                            },
                            [t._v(" " + t._s(t.$t("cancel")) + " ")]
                          ),
                          "new" !== t.currentIndex
                            ? s("k-pagination", {
                                attrs: {
                                  dropdown: !1,
                                  total: t.items.length,
                                  limit: 1,
                                  page: t.currentIndex + 1,
                                  details: !0,
                                  validate: t.beforePaginate,
                                },
                                on: { paginate: t.paginate },
                              })
                            : t._e(),
                          s(
                            "k-button",
                            {
                              staticClass: "k-structure-form-submit-button",
                              attrs: { icon: "check" },
                              on: { click: t.submit },
                            },
                            [
                              t._v(
                                " " +
                                  t._s(
                                    t.$t(
                                      "new" !== t.currentIndex
                                        ? "confirm"
                                        : "add"
                                    )
                                  ) +
                                  " "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              : 0 === t.items.length
              ? s(
                  "k-empty",
                  {
                    attrs: { "data-invalid": t.isInvalid, icon: "list-bullet" },
                    on: { click: t.add },
                  },
                  [
                    t._v(
                      " " + t._s(t.empty || t.$t("field.structure.empty")) + " "
                    ),
                  ]
                )
              : [
                  s(
                    "table",
                    {
                      staticClass: "k-structure-table",
                      attrs: {
                        "data-invalid": t.isInvalid,
                        "data-sortable": t.isSortable,
                      },
                    },
                    [
                      s("thead", [
                        s(
                          "tr",
                          [
                            s(
                              "th",
                              { staticClass: "k-structure-table-index" },
                              [t._v(" # ")]
                            ),
                            t._l(t.columns, function (e, i) {
                              return s(
                                "th",
                                {
                                  key: i + "-header",
                                  staticClass: "k-structure-table-column",
                                  style: "width:" + t.width(e.width),
                                  attrs: { "data-align": e.align },
                                },
                                [t._v(" " + t._s(e.label) + " ")]
                              );
                            }),
                            t.disabled ? t._e() : s("th"),
                          ],
                          2
                        ),
                      ]),
                      s(
                        "k-draggable",
                        {
                          attrs: {
                            list: t.items,
                            "data-disabled": t.disabled,
                            options: t.dragOptions,
                            handle: !0,
                            dir: t.direction,
                            element: "tbody",
                          },
                          on: { end: t.onInput },
                        },
                        t._l(t.paginatedItems, function (e, i) {
                          return s(
                            "tr",
                            {
                              key: i,
                              on: {
                                click: function (t) {
                                  t.stopPropagation();
                                },
                              },
                            },
                            [
                              s(
                                "td",
                                { staticClass: "k-structure-table-index" },
                                [
                                  t.isSortable ? s("k-sort-handle") : t._e(),
                                  s(
                                    "span",
                                    {
                                      staticClass:
                                        "k-structure-table-index-number",
                                    },
                                    [t._v(t._s(t.indexOf(i)))]
                                  ),
                                ],
                                1
                              ),
                              t._l(t.columns, function (n, a) {
                                return s(
                                  "td",
                                  {
                                    key: a,
                                    staticClass: "k-structure-table-column",
                                    style: "width:" + t.width(n.width),
                                    attrs: {
                                      title: n.label,
                                      "data-align": n.align,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.jump(i, a);
                                      },
                                    },
                                  },
                                  [
                                    !1 === t.columnIsEmpty(e[a])
                                      ? [
                                          t.previewExists(n.type)
                                            ? s(
                                                "k-" +
                                                  n.type +
                                                  "-field-preview",
                                                {
                                                  tag: "component",
                                                  attrs: {
                                                    value: e[a],
                                                    column: n,
                                                    field: t.fields[a],
                                                  },
                                                  on: {
                                                    input: function (e) {
                                                      return t.update(i, a, e);
                                                    },
                                                  },
                                                }
                                              )
                                            : [
                                                s(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "k-structure-table-text",
                                                  },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(n.before) +
                                                        " " +
                                                        t._s(
                                                          t.displayText(
                                                            t.fields[a],
                                                            e[a]
                                                          ) || "–"
                                                        ) +
                                                        " " +
                                                        t._s(n.after) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                        ]
                                      : t._e(),
                                  ],
                                  2
                                );
                              }),
                              t.disabled
                                ? t._e()
                                : s(
                                    "td",
                                    {
                                      staticClass: "k-structure-table-options",
                                    },
                                    [
                                      t.duplicate &&
                                      t.more &&
                                      null === t.currentIndex
                                        ? [
                                            s("k-button", {
                                              key: i,
                                              ref: "actionsToggle",
                                              refInFor: !0,
                                              staticClass:
                                                "k-structure-table-options-button",
                                              attrs: { icon: "dots" },
                                              on: {
                                                click: function (e) {
                                                  t.$refs[
                                                    i + "-actions"
                                                  ][0].toggle();
                                                },
                                              },
                                            }),
                                            s(
                                              "k-dropdown-content",
                                              {
                                                ref: i + "-actions",
                                                refInFor: !0,
                                                attrs: { align: "right" },
                                              },
                                              [
                                                s(
                                                  "k-dropdown-item",
                                                  {
                                                    attrs: { icon: "copy" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.duplicateItem(
                                                          i
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.$t("duplicate")
                                                        ) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                                s(
                                                  "k-dropdown-item",
                                                  {
                                                    attrs: { icon: "remove" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.confirmRemove(
                                                          i
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(t.$t("remove")) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        : [
                                            s("k-button", {
                                              staticClass:
                                                "k-structure-table-options-button",
                                              attrs: {
                                                tooltip: t.$t("remove"),
                                                icon: "remove",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.confirmRemove(i);
                                                },
                                              },
                                            }),
                                          ],
                                    ],
                                    2
                                  ),
                            ],
                            2
                          );
                        }),
                        0
                      ),
                    ],
                    1
                  ),
                  t.limit
                    ? s(
                        "k-pagination",
                        t._b(
                          { on: { paginate: t.paginateItems } },
                          "k-pagination",
                          t.pagination,
                          !1
                        )
                      )
                    : t._e(),
                  t.disabled
                    ? t._e()
                    : s(
                        "k-dialog",
                        {
                          ref: "remove",
                          attrs: {
                            "submit-button": t.$t("delete"),
                            theme: "negative",
                          },
                          on: { submit: t.remove },
                        },
                        [
                          s("k-text", [
                            t._v(t._s(t.$t("field.structure.delete.confirm"))),
                          ]),
                        ],
                        1
                      ),
                ],
          ],
          2
        );
      },
      Nu = [],
      Pu = s("9fc0"),
      Ru = {
        mixins: [Pu["a"]],
        inheritAttrs: !1,
        props: {
          columns: Object,
          duplicate: { type: Boolean, default: !0 },
          empty: String,
          fields: Object,
          limit: Number,
          max: Number,
          min: Number,
          prepend: { type: Boolean, default: !1 },
          sortable: { type: Boolean, default: !0 },
          sortBy: String,
          value: {
            type: Array,
            default() {
              return [];
            },
          },
        },
        data() {
          return {
            autofocus: null,
            items: this.makeItems(this.value),
            currentIndex: null,
            currentModel: null,
            trash: null,
            page: 1,
          };
        },
        computed: {
          direction() {
            return Nr(this);
          },
          dragOptions() {
            return {
              disabled: !this.isSortable,
              fallbackClass: "k-sortable-row-fallback",
            };
          },
          formFields() {
            let t = {};
            return (
              Object.keys(this.fields).forEach((e) => {
                let s = this.fields[e];
                (s.section = this.name),
                  (s.endpoints = {
                    field: this.endpoints.field + "+" + e,
                    section: this.endpoints.section,
                    model: this.endpoints.model,
                  }),
                  null === this.autofocus &&
                    !0 === s.autofocus &&
                    (this.autofocus = e),
                  (t[e] = s);
              }),
              t
            );
          },
          more() {
            return (
              !0 !== this.disabled &&
              !(this.max && this.items.length >= this.max)
            );
          },
          isInvalid() {
            return (
              !0 !== this.disabled &&
              (!!(this.min && this.items.length < this.min) ||
                !!(this.max && this.items.length > this.max))
            );
          },
          isSortable() {
            return (
              !this.sortBy &&
              !this.limit &&
              !0 !== this.disabled &&
              !(this.items.length <= 1) &&
              !1 !== this.sortable
            );
          },
          pagination() {
            let t = 0;
            return (
              this.limit && (t = (this.page - 1) * this.limit),
              {
                page: this.page,
                offset: t,
                limit: this.limit,
                total: this.items.length,
                align: "center",
                details: !0,
              }
            );
          },
          paginatedItems() {
            return this.limit
              ? this.items.slice(
                  this.pagination.offset,
                  this.pagination.offset + this.limit
                )
              : this.items;
          },
        },
        watch: {
          value(t) {
            t != this.items && (this.items = this.makeItems(t));
          },
        },
        methods: {
          add() {
            if (!0 === this.disabled) return !1;
            if (null !== this.currentIndex) return this.escape(), !1;
            let t = {};
            Object.keys(this.fields).forEach((e) => {
              const s = this.fields[e];
              null !== s.default
                ? (t[e] = this.$helper.clone(s.default))
                : (t[e] = null);
            }),
              (this.currentIndex = "new"),
              (this.currentModel = t),
              this.createForm();
          },
          addItem(t) {
            !0 === this.prepend ? this.items.unshift(t) : this.items.push(t);
          },
          beforePaginate() {
            return this.save(this.currentModel);
          },
          close() {
            (this.currentIndex = null),
              (this.currentModel = null),
              this.$events.$off("keydown.esc", this.escape),
              this.$events.$off("keydown.cmd.s", this.submit),
              this.$store.dispatch("content/enable");
          },
          columnIsEmpty(t) {
            return (
              void 0 === t ||
              null === t ||
              "" === t ||
              ("object" === typeof t &&
                0 === Object.keys(t).length &&
                t.constructor === Object) ||
              (void 0 !== t.length && 0 === t.length)
            );
          },
          confirmRemove(t) {
            this.close(),
              (this.trash = t + this.pagination.offset),
              this.$refs.remove.open();
          },
          createForm(t) {
            this.$events.$on("keydown.esc", this.escape),
              this.$events.$on("keydown.cmd.s", this.submit),
              this.$store.dispatch("content/disable"),
              this.$nextTick(() => {
                this.$refs.form && this.$refs.form.focus(t || this.autofocus);
              });
          },
          duplicateItem(t) {
            this.addItem(this.items[t + this.pagination.offset]),
              this.onInput();
          },
          escape() {
            if ("new" === this.currentIndex) {
              let t = Object.values(this.currentModel),
                e = !0;
              if (
                (t.forEach((t) => {
                  !1 === this.columnIsEmpty(t) && (e = !1);
                }),
                !0 === e)
              )
                return void this.close();
            }
            this.submit();
          },
          focus() {
            this.$refs.add && this.$refs.add.focus && this.$refs.add.focus();
          },
          indexOf(t) {
            return this.limit ? (this.page - 1) * this.limit + t + 1 : t + 1;
          },
          isActive(t) {
            return this.currentIndex === t;
          },
          jump(t, e) {
            this.open(t + this.pagination.offset, e);
          },
          makeItems(t) {
            return !1 === Array.isArray(t) ? [] : this.sort(t);
          },
          onInput() {
            this.$emit("input", this.items);
          },
          open(t, e) {
            (this.currentIndex = t),
              (this.currentModel = this.$helper.clone(this.items[t])),
              this.createForm(e);
          },
          paginate(t) {
            this.open(t.offset);
          },
          paginateItems(t) {
            this.page = t.page;
          },
          remove() {
            if (null === this.trash) return !1;
            this.items.splice(this.trash, 1),
              (this.trash = null),
              this.$refs.remove.close(),
              this.onInput(),
              0 === this.paginatedItems.length && this.page > 1 && this.page--,
              (this.items = this.sort(this.items));
          },
          sort(t) {
            return this.sortBy ? t.sortBy(this.sortBy) : t;
          },
          save() {
            return null !== this.currentIndex && void 0 !== this.currentIndex
              ? this.validate(this.currentModel)
                  .then(
                    () => (
                      "new" === this.currentIndex
                        ? this.addItem(this.currentModel)
                        : (this.items[this.currentIndex] = this.currentModel),
                      (this.items = this.sort(this.items)),
                      this.onInput(),
                      !0
                    )
                  )
                  .catch((t) => {
                    throw (
                      (this.$store.dispatch("notification/error", {
                        message: this.$t("error.form.incomplete"),
                        details: t,
                      }),
                      t)
                    );
                  })
              : Promise.resolve();
          },
          submit() {
            this.save()
              .then(this.close)
              .catch(() => {});
          },
          validate(t) {
            return this.$api
              .post(this.endpoints.field + "/validate", t)
              .then((t) => {
                if (t.length > 0) throw t;
                return !0;
              });
          },
          update(t, e, s) {
            (this.items[t][e] = s), this.onInput();
          },
        },
      },
      qu = Ru,
      Fu = (s("088c"), Object(c["a"])(qu, Du, Nu, !1, null, null, null)),
      Uu = Fu.exports,
      Hu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-tags-field",
              attrs: { input: t._uid, counter: t.counterOptions },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "tags" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      zu = [],
      Ku = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...Wo.props,
          counter: { type: Boolean, default: !0 },
        },
        computed: {
          counterOptions() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count:
                  this.value && Array.isArray(this.value)
                    ? this.value.length
                    : 0,
                min: this.min,
                max: this.max,
              }
            );
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Gu = Ku,
      Wu = Object(c["a"])(Gu, Hu, zu, !1, null, null, null),
      Yu = Wu.exports,
      Vu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-tel-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "tel" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      Ju = [],
      Zu = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...Zo.props,
          icon: { type: String, default: "phone" },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Xu = Zu,
      Qu = Object(c["a"])(Xu, Vu, Ju, !1, null, null, null),
      td = Qu.exports,
      ed = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-text-field",
              attrs: { input: t._uid, counter: t.counterOptions },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            t._t("options", null, { slot: "options" }),
            s(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          2
        );
      },
      sd = [],
      id = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...Fr.props,
          counter: { type: Boolean, default: !0 },
        },
        computed: {
          counterOptions() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count: this.value ? String(this.value).length : 0,
                min: this.minlength,
                max: this.maxlength,
              }
            );
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
          select() {
            this.$refs.input.select();
          },
        },
      },
      nd = id,
      ad = (s("b746"), Object(c["a"])(nd, ed, sd, !1, null, null, null)),
      rd = ad.exports,
      od = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-textarea-field",
              attrs: { input: t._uid, counter: t.counterOptions },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, type: "textarea", theme: "field" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      ld = [],
      cd = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...il.props,
          counter: { type: Boolean, default: !0 },
        },
        computed: {
          counterOptions() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count: this.value ? this.value.length : 0,
                min: this.minlength,
                max: this.maxlength,
              }
            );
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      ud = cd,
      dd = Object(c["a"])(ud, od, ld, !1, null, null, null),
      pd = dd.exports,
      hd = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-time-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "time" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.listeners
              )
            ),
          ],
          1
        );
      },
      md = [],
      fd = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...ol.props,
          icon: { type: String, default: "clock" },
        },
        computed: {
          listeners() {
            return {
              ...this.$listeners,
              update: (t) => this.$emit("input", t),
              input: () => {},
            };
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      gd = fd,
      bd = Object(c["a"])(gd, hd, md, !1, null, null, null),
      kd = bd.exports,
      vd = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-toggle-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "toggle" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            ),
          ],
          1
        );
      },
      $d = [],
      yd = {
        inheritAttrs: !1,
        props: { ...fn["a"].props, ...Sn.props, ...hl.props },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      _d = yd,
      wd = Object(c["a"])(_d, vd, $d, !1, null, null, null),
      xd = wd.exports,
      Od = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            { staticClass: "k-url-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, theme: "field", type: "url" },
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              ),
              [
                t.link
                  ? s("k-button", {
                      staticClass: "k-input-icon-button",
                      attrs: {
                        slot: "icon",
                        icon: t.icon,
                        link: t.value,
                        tooltip: t.$t("open"),
                        tabindex: "-1",
                        target: "_blank",
                      },
                      slot: "icon",
                    })
                  : t._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      Cd = [],
      Sd = {
        inheritAttrs: !1,
        props: {
          ...fn["a"].props,
          ...Sn.props,
          ...bl.props,
          link: { type: Boolean, default: !0 },
          icon: { type: String, default: "url" },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      Ed = Sd,
      jd = Object(c["a"])(Ed, Od, Cd, !1, null, null, null),
      Td = jd.exports,
      Ld = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b({ staticClass: "k-users-field" }, "k-field", t.$props, !1),
          [
            s(
              "k-button-group",
              {
                staticClass: "k-field-options",
                attrs: { slot: "options" },
                slot: "options",
              },
              [
                t.more && !t.disabled
                  ? s(
                      "k-button",
                      {
                        staticClass: "k-field-options-button",
                        attrs: { icon: t.btnIcon },
                        on: { click: t.open },
                      },
                      [t._v(" " + t._s(t.btnLabel) + " ")]
                    )
                  : t._e(),
              ],
              1
            ),
            t.selected.length
              ? [
                  s(
                    "k-draggable",
                    {
                      attrs: {
                        element: t.elements.list,
                        list: t.selected,
                        handle: !0,
                        "data-invalid": t.isInvalid,
                      },
                      on: { end: t.onInput },
                    },
                    t._l(t.selected, function (e, i) {
                      return s(
                        t.elements.item,
                        {
                          key: e.email,
                          tag: "component",
                          attrs: {
                            sortable: !t.disabled && t.selected.length > 1,
                            text: e.text,
                            info: e.info,
                            link: t.link ? t.$api.users.link(e.id) : null,
                            image: e.image,
                            icon: e.icon,
                          },
                        },
                        [
                          t.disabled
                            ? t._e()
                            : s("k-button", {
                                attrs: { slot: "options", icon: "remove" },
                                on: {
                                  click: function (e) {
                                    return t.remove(i);
                                  },
                                },
                                slot: "options",
                              }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ]
              : s(
                  "k-empty",
                  {
                    attrs: { "data-invalid": t.isInvalid, icon: "users" },
                    on: { click: t.open },
                  },
                  [t._v(" " + t._s(t.empty || t.$t("field.users.empty")) + " ")]
                ),
            s("k-users-dialog", { ref: "selector", on: { submit: t.select } }),
          ],
          2
        );
      },
      Id = [],
      Ad = {
        mixins: [zl],
        methods: {
          open() {
            if (this.disabled) return !1;
            this.$refs.selector.open({
              endpoint: this.endpoints.field,
              max: this.max,
              multiple: this.multiple,
              search: this.search,
              selected: this.selected.map((t) => t.id),
            });
          },
        },
      },
      Bd = Ad,
      Md = (s("7f6e"), Object(c["a"])(Bd, Ld, Id, !1, null, null, null)),
      Dd = Md.exports,
      Nd = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-field",
          t._b(
            {
              staticClass: "k-writer-field",
              attrs: { input: t._uid, counter: !1 },
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            s(
              "k-input",
              t._b(
                {
                  attrs: {
                    after: t.after,
                    before: t.before,
                    icon: t.icon,
                    theme: "field",
                  },
                },
                "k-input",
                t.$props,
                !1
              ),
              [
                s(
                  "k-writer",
                  t._b(
                    {
                      ref: "input",
                      staticClass: "k-writer-field-input",
                      attrs: { value: t.value },
                      on: {
                        input: function (e) {
                          return t.$emit("input", e);
                        },
                      },
                    },
                    "k-writer",
                    t.$props,
                    !1
                  )
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Pd = [],
      Rd = {
        inheritAttrs: !1,
        props: { ...fn["a"].props, ...Sn.props, ...cr.props },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      qd = Rd,
      Fd = (s("1267"), Object(c["a"])(qd, Nd, Pd, !1, null, null, null)),
      Ud = Fd.exports,
      Hd = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("nav", { staticClass: "k-toolbar" }, [
          s("div", { staticClass: "k-toolbar-wrapper" }, [
            s(
              "div",
              { staticClass: "k-toolbar-buttons" },
              [
                t._l(t.layout, function (e, i) {
                  return [
                    e.divider
                      ? [
                          s("span", {
                            key: i,
                            staticClass: "k-toolbar-divider",
                          }),
                        ]
                      : e.dropdown
                      ? [
                          s(
                            "k-dropdown",
                            { key: i },
                            [
                              s("k-button", {
                                key: i,
                                staticClass: "k-toolbar-button",
                                attrs: {
                                  icon: e.icon,
                                  tooltip: e.label,
                                  tabindex: "-1",
                                },
                                on: {
                                  click: function (e) {
                                    t.$refs[i + "-dropdown"][0].toggle();
                                  },
                                },
                              }),
                              s(
                                "k-dropdown-content",
                                { ref: i + "-dropdown", refInFor: !0 },
                                t._l(e.dropdown, function (e, i) {
                                  return s(
                                    "k-dropdown-item",
                                    {
                                      key: i,
                                      attrs: { icon: e.icon },
                                      on: {
                                        click: function (s) {
                                          return t.command(e.command, e.args);
                                        },
                                      },
                                    },
                                    [t._v(" " + t._s(e.label) + " ")]
                                  );
                                }),
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      : [
                          s("k-button", {
                            key: i,
                            staticClass: "k-toolbar-button",
                            attrs: {
                              icon: e.icon,
                              tooltip: e.label,
                              tabindex: "-1",
                            },
                            on: {
                              click: function (s) {
                                return t.command(e.command, e.args);
                              },
                            },
                          }),
                        ],
                  ];
                }),
              ],
              2
            ),
          ]),
        ]);
      },
      zd = [];
    const Kd = function (t) {
      this.command("insert", (e, s) => {
        let i = [];
        return (
          s.split("\n").forEach((e, s) => {
            let n = "ol" === t ? s + 1 + "." : "-";
            i.push(n + " " + e);
          }),
          i.join("\n")
        );
      });
    };
    var Gd,
      Wd,
      Yd = {
        layout: [
          "headlines",
          "bold",
          "italic",
          "|",
          "link",
          "email",
          "file",
          "|",
          "code",
          "ul",
          "ol",
        ],
        props: {
          buttons: { type: [Boolean, Array], default: !0 },
          uploads: [Boolean, Object, Array],
        },
        data() {
          let t = {},
            e = {},
            s = [],
            i = this.commands();
          return !1 === this.buttons
            ? t
            : (Array.isArray(this.buttons) && (s = this.buttons),
              !0 !== Array.isArray(this.buttons) && (s = this.$options.layout),
              s.forEach((s, n) => {
                if ("|" === s) t["divider-" + n] = { divider: !0 };
                else if (i[s]) {
                  let n = i[s];
                  (t[s] = n), n.shortcut && (e[n.shortcut] = s);
                }
              }),
              { layout: t, shortcuts: e });
        },
        methods: {
          command(t, e) {
            "function" === typeof t
              ? t.apply(this)
              : this.$emit("command", t, e);
          },
          close() {
            Object.keys(this.$refs).forEach((t) => {
              const e = this.$refs[t][0];
              e.close && "function" === typeof e.close && e.close();
            });
          },
          fileCommandSetup() {
            let t = {
              label: this.$t("toolbar.button.file"),
              icon: "attachment",
            };
            return (
              !1 === this.uploads
                ? (t.command = "selectFile")
                : (t.dropdown = {
                    select: {
                      label: this.$t("toolbar.button.file.select"),
                      icon: "check",
                      command: "selectFile",
                    },
                    upload: {
                      label: this.$t("toolbar.button.file.upload"),
                      icon: "upload",
                      command: "uploadFile",
                    },
                  }),
              t
            );
          },
          commands() {
            return {
              headlines: {
                label: this.$t("toolbar.button.headings"),
                icon: "title",
                dropdown: {
                  h1: {
                    label: this.$t("toolbar.button.heading.1"),
                    icon: "title",
                    command: "prepend",
                    args: "#",
                  },
                  h2: {
                    label: this.$t("toolbar.button.heading.2"),
                    icon: "title",
                    command: "prepend",
                    args: "##",
                  },
                  h3: {
                    label: this.$t("toolbar.button.heading.3"),
                    icon: "title",
                    command: "prepend",
                    args: "###",
                  },
                },
              },
              bold: {
                label: this.$t("toolbar.button.bold"),
                icon: "bold",
                command: "wrap",
                args: "**",
                shortcut: "b",
              },
              italic: {
                label: this.$t("toolbar.button.italic"),
                icon: "italic",
                command: "wrap",
                args: "*",
                shortcut: "i",
              },
              link: {
                label: this.$t("toolbar.button.link"),
                icon: "url",
                shortcut: "k",
                command: "dialog",
                args: "link",
              },
              email: {
                label: this.$t("toolbar.button.email"),
                icon: "email",
                shortcut: "e",
                command: "dialog",
                args: "email",
              },
              file: this.fileCommandSetup(),
              code: {
                label: this.$t("toolbar.button.code"),
                icon: "code",
                command: "wrap",
                args: "`",
              },
              ul: {
                label: this.$t("toolbar.button.ul"),
                icon: "list-bullet",
                command() {
                  return Kd.apply(this, ["ul"]);
                },
              },
              ol: {
                label: this.$t("toolbar.button.ol"),
                icon: "list-numbers",
                command() {
                  return Kd.apply(this, ["ol"]);
                },
              },
            };
          },
          shortcut(t, e) {
            if (this.shortcuts[t]) {
              const s = this.layout[this.shortcuts[t]];
              if (!s) return !1;
              e.preventDefault(), this.command(s.command, s.args);
            }
          },
        },
      },
      Vd = Yd,
      Jd = (s("df0d"), Object(c["a"])(Vd, Hd, zd, !1, null, null, null)),
      Zd = Jd.exports,
      Xd = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { "submit-button": t.$t("insert") },
            on: {
              close: t.cancel,
              submit: function (e) {
                return t.$refs.form.submit();
              },
            },
          },
          [
            s("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.value,
                callback: function (e) {
                  t.value = e;
                },
                expression: "value",
              },
            }),
          ],
          1
        );
      },
      Qd = [],
      tp = {
        data() {
          return {
            value: { email: null, text: null },
            fields: {
              email: { label: this.$t("email"), type: "email" },
              text: { label: this.$t("link.text"), type: "text" },
            },
          };
        },
        computed: {
          kirbytext() {
            return this.$store.state.system.info.kirbytext;
          },
        },
        methods: {
          open(t, e) {
            (this.value.text = e), this.$refs.dialog.open();
          },
          cancel() {
            this.$emit("cancel");
          },
          createKirbytext() {
            const t = this.value.email || "";
            return this.value.text && this.value.text.length > 0
              ? `(email: ${t} text: ${this.value.text})`
              : `(email: ${t})`;
          },
          createMarkdown() {
            const t = this.value.email || "";
            return this.value.text && this.value.text.length > 0
              ? `[${this.value.text}](mailto:${t})`
              : `<${t}>`;
          },
          submit() {
            this.$emit(
              "submit",
              this.kirbytext ? this.createKirbytext() : this.createMarkdown()
            ),
              (this.value = { email: null, text: null }),
              this.$refs.dialog.close();
          },
        },
      },
      ep = tp,
      sp = Object(c["a"])(ep, Xd, Qd, !1, null, null, null),
      ip = sp.exports,
      np = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { "submit-button": t.$t("insert") },
            on: {
              close: t.cancel,
              submit: function (e) {
                return t.$refs.form.submit();
              },
            },
          },
          [
            s("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.value,
                callback: function (e) {
                  t.value = e;
                },
                expression: "value",
              },
            }),
          ],
          1
        );
      },
      ap = [],
      rp = {
        data() {
          return {
            value: { url: null, text: null },
            fields: {
              url: {
                label: this.$t("link"),
                type: "text",
                placeholder: this.$t("url.placeholder"),
                icon: "url",
              },
              text: { label: this.$t("link.text"), type: "text" },
            },
          };
        },
        computed: {
          kirbytext() {
            return this.$store.state.system.info.kirbytext;
          },
        },
        methods: {
          open(t, e) {
            (this.value.text = e), this.$refs.dialog.open();
          },
          cancel() {
            this.$emit("cancel");
          },
          createKirbytext() {
            return this.value.text.length > 0
              ? `(link: ${this.value.url} text: ${this.value.text})`
              : `(link: ${this.value.url})`;
          },
          createMarkdown() {
            return this.value.text.length > 0
              ? `[${this.value.text}](${this.value.url})`
              : `<${this.value.url}>`;
          },
          submit() {
            this.$emit(
              "submit",
              this.kirbytext ? this.createKirbytext() : this.createMarkdown()
            ),
              (this.value = { url: null, text: null }),
              this.$refs.dialog.close();
          },
        },
      },
      op = rp,
      lp = Object(c["a"])(op, np, ap, !1, null, null, null),
      cp = lp.exports,
      up = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("p", { staticClass: "k-date-field-preview" }, [
            t._v(" " + t._s(t.text) + " "),
          ]),
        ]);
      },
      dp = [],
      pp = {
        props: { field: Object, value: String },
        computed: {
          text() {
            const t = Er.methods.toDatetime.call(this, this.value);
            return t.format(this.field.display);
          },
        },
      },
      hp = pp,
      mp = (s("96a5"), Object(c["a"])(hp, up, dp, !1, null, null, null)),
      fp = mp.exports,
      gp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "p",
          { staticClass: "k-url-field-preview" },
          [
            t._v(" " + t._s(t.column.before) + " "),
            s(
              "k-link",
              {
                attrs: { to: t.link, target: "_blank" },
                nativeOn: {
                  click: function (t) {
                    t.stopPropagation();
                  },
                },
              },
              [t._v(" " + t._s(t.value) + " ")]
            ),
            t._v(" " + t._s(t.column.after) + " "),
          ],
          1
        );
      },
      bp = [],
      kp = {
        props: {
          column: {
            type: Object,
            default() {
              return {};
            },
          },
          value: String,
        },
        computed: {
          link() {
            return this.value;
          },
        },
      },
      vp = kp,
      $p = (s("977f"), Object(c["a"])(vp, gp, bp, !1, null, null, null)),
      yp = $p.exports,
      _p = {
        extends: yp,
        computed: {
          link() {
            return this.value && this.value.length > 0
              ? "mailto:" + this.value
              : null;
          },
        },
      },
      wp = _p,
      xp = Object(c["a"])(wp, Gd, Wd, !1, null, null, null),
      Op = xp.exports,
      Cp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.value
          ? s(
              "ul",
              { staticClass: "k-files-field-preview" },
              t._l(t.value, function (e) {
                return s(
                  "li",
                  { key: e.url },
                  [
                    s(
                      "k-link",
                      {
                        attrs: { title: e.filename, to: e.link },
                        nativeOn: {
                          click: function (t) {
                            t.stopPropagation();
                          },
                        },
                      },
                      [
                        "image" === e.type
                          ? s(
                              "k-image",
                              t._b({}, "k-image", t.imageOptions(e), !1)
                            )
                          : s("k-icon", t._b({}, "k-icon", e.icon, !1)),
                      ],
                      1
                    ),
                  ],
                  1
                );
              }),
              0
            )
          : t._e();
      },
      Sp = [],
      Ep = function (t, e = "list", s = "1/1") {
        if (!t || 0 === t.length) return !1;
        let i = null,
          n = null;
        if (
          (t.list
            ? ((i = t[e].url), (n = t[e].srcset))
            : ((i = t.url), (n = t.srcset)),
          !i)
        )
          return !1;
        let a = { src: i, srcset: n, back: t.back || "black", cover: t.cover };
        return (
          "cards" === e && ((a.ratio = t.ratio || "3/2"), (a.sizes = jp(s))), a
        );
      };
    function jp(t) {
      switch (t) {
        case "1/2":
        case "2/4":
          return "(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 44em, 27em";
        case "1/3":
          return "(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 29.333em, 27em";
        case "1/4":
          return "(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 22em, 27em";
        case "2/3":
          return "(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 27em, 27em";
        case "3/4":
          return "(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 66em, 27em";
        default:
          return "(min-width: 30em) and (max-width: 65em) 59em, (min-width: 65em) 88em, 27em";
      }
    }
    var Tp,
      Lp,
      Ip = {
        props: { value: Array, field: Object },
        methods: {
          imageOptions(t) {
            const e = Ep(t.image);
            return e.src
              ? {
                  ...e,
                  back: "pattern",
                  cover: !1,
                  ...(this.field.image || {}),
                }
              : { src: t.url };
          },
        },
      },
      Ap = Ip,
      Bp = (s("21dc"), Object(c["a"])(Ap, Cp, Sp, !1, null, null, null)),
      Mp = Bp.exports,
      Dp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "k-list-field-preview",
          domProps: { innerHTML: t._s(t.value) },
        });
      },
      Np = [],
      Pp = { inheritAttrs: !1, props: { value: String } },
      Rp = Pp,
      qp = (s("200d"), Object(c["a"])(Rp, Dp, Np, !1, null, null, null)),
      Fp = qp.exports,
      Up = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.value
          ? s(
              "ul",
              { staticClass: "k-pages-field-preview" },
              t._l(t.value, function (e) {
                return s("li", { key: e.id }, [
                  s(
                    "figure",
                    [
                      s(
                        "k-link",
                        {
                          attrs: { title: e.id, to: t.$api.pages.link(e.id) },
                          nativeOn: {
                            click: function (t) {
                              t.stopPropagation();
                            },
                          },
                        },
                        [
                          s("k-icon", {
                            staticClass: "k-pages-field-preview-image",
                            attrs: { type: "page", back: "pattern" },
                          }),
                          s("figcaption", [t._v(" " + t._s(e.text) + " ")]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]);
              }),
              0
            )
          : t._e();
      },
      Hp = [],
      zp = { props: { value: Array } },
      Kp = zp,
      Gp = (s("d0c1"), Object(c["a"])(Kp, Up, Hp, !1, null, null, null)),
      Wp = Gp.exports,
      Yp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("p", { staticClass: "k-time-field-preview" }, [
            t._v(" " + t._s(t.text) + " "),
          ]),
        ]);
      },
      Vp = [],
      Jp = {
        props: { field: Object, value: String },
        computed: {
          text() {
            const t = ol.methods.toDatetime.call(this, this.value);
            return t.format(this.field.display);
          },
        },
      },
      Zp = Jp,
      Xp = (s("f9aa"), Object(c["a"])(Zp, Yp, Vp, !1, null, null, null)),
      Qp = Xp.exports,
      th = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-input", {
          staticClass: "k-toggle-field-preview",
          attrs: { text: t.text, type: "toggle" },
          on: {
            input: function (e) {
              return t.$emit("input", e);
            },
          },
          model: {
            value: t.value,
            callback: function (e) {
              t.value = e;
            },
            expression: "value",
          },
        });
      },
      eh = [],
      sh = {
        props: { field: Object, value: Boolean, column: Object },
        computed: {
          text() {
            return !1 !== this.column.text ? this.field.text : null;
          },
        },
      },
      ih = sh,
      nh = (s("1c4e"), Object(c["a"])(ih, th, eh, !1, null, null, null)),
      ah = nh.exports,
      rh = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.value
          ? s(
              "ul",
              { staticClass: "k-users-field-preview" },
              t._l(t.value, function (e) {
                return s("li", { key: e.email }, [
                  s(
                    "figure",
                    [
                      s(
                        "k-link",
                        {
                          attrs: {
                            title: e.email,
                            to: t.$api.users.link(e.id),
                          },
                          nativeOn: {
                            click: function (t) {
                              t.stopPropagation();
                            },
                          },
                        },
                        [
                          e.avatar
                            ? s("k-image", {
                                staticClass: "k-users-field-preview-avatar",
                                attrs: { src: e.avatar.url, back: "pattern" },
                              })
                            : s("k-icon", {
                                staticClass: "k-users-field-preview-avatar",
                                attrs: { type: "user", back: "pattern" },
                              }),
                          s("figcaption", [t._v(" " + t._s(e.username) + " ")]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]);
              }),
              0
            )
          : t._e();
      },
      oh = [],
      lh = { props: { value: Array } },
      ch = lh,
      uh = (s("3a85"), Object(c["a"])(ch, rh, oh, !1, null, null, null)),
      dh = uh.exports,
      ph = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "k-writer-field-preview",
          domProps: { innerHTML: t._s(t.value) },
        });
      },
      hh = [],
      mh = { inheritAttrs: !1, props: { value: String } },
      fh = mh,
      gh = (s("5e9a"), Object(c["a"])(fh, ph, hh, !1, null, null, null)),
      bh = gh.exports,
      kh = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          {
            staticClass: "k-aspect-ratio",
            style: { paddingBottom: t.ratioPadding },
            attrs: { "data-cover": t.cover },
          },
          [t._t("default")],
          2
        );
      },
      vh = [],
      $h = {
        props: { cover: Boolean, ratio: String },
        computed: {
          ratioPadding() {
            return this.$helper.ratio(this.ratio);
          },
        },
      },
      yh = $h,
      _h = (s("8d8b"), Object(c["a"])(yh, kh, vh, !1, null, null, null)),
      wh = _h.exports,
      xh = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "k-bar" }, [
          t.$slots.left
            ? s(
                "div",
                {
                  staticClass: "k-bar-slot",
                  attrs: { "data-position": "left" },
                },
                [t._t("left")],
                2
              )
            : t._e(),
          t.$slots.center
            ? s(
                "div",
                {
                  staticClass: "k-bar-slot",
                  attrs: { "data-position": "center" },
                },
                [t._t("center")],
                2
              )
            : t._e(),
          t.$slots.right
            ? s(
                "div",
                {
                  staticClass: "k-bar-slot",
                  attrs: { "data-position": "right" },
                },
                [t._t("right")],
                2
              )
            : t._e(),
        ]);
      },
      Oh = [],
      Ch = {},
      Sh = Ch,
      Eh = (s("6f7b"), Object(c["a"])(Sh, xh, Oh, !1, null, null, null)),
      jh = Eh.exports,
      Th = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          t._g(
            { staticClass: "k-box", attrs: { "data-theme": t.theme } },
            t.$listeners
          ),
          [
            t._t("default", [
              t.html
                ? s("k-text", { domProps: { innerHTML: t._s(t.text) } })
                : s("k-text", [t._v(" " + t._s(t.text) + " ")]),
            ]),
          ],
          2
        );
      },
      Lh = [],
      Ih = {
        props: {
          theme: { type: String, default: "none" },
          text: String,
          html: { type: Boolean, default: !0 },
        },
      },
      Ah = Ih,
      Bh = (s("7dc7"), Object(c["a"])(Ah, Th, Lh, !1, null, null, null)),
      Mh = Bh.exports,
      Dh = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "figure",
          t._g({ staticClass: "k-card" }, t.$listeners),
          [
            t.sortable ? s("k-sort-handle") : t._e(),
            s(
              t.wrapper,
              { tag: "component", attrs: { to: t.link, target: t.target } },
              [
                t.imageOptions
                  ? s(
                      "k-image",
                      t._b(
                        { staticClass: "k-card-image" },
                        "k-image",
                        t.imageOptions,
                        !1
                      )
                    )
                  : s(
                      "span",
                      {
                        staticClass: "k-card-icon",
                        style: "padding-bottom:" + t.ratioPadding,
                      },
                      [s("k-icon", t._b({}, "k-icon", t.icon, !1))],
                      1
                    ),
                s("figcaption", { staticClass: "k-card-content" }, [
                  s("span", {
                    staticClass: "k-card-text",
                    attrs: { "data-noinfo": !t.info },
                    domProps: { innerHTML: t._s(t.text) },
                  }),
                  t.info
                    ? s("span", {
                        staticClass: "k-card-info",
                        domProps: { innerHTML: t._s(t.info) },
                      })
                    : t._e(),
                ]),
              ],
              1
            ),
            s(
              "nav",
              { staticClass: "k-card-options" },
              [
                t._t("options", [
                  t.flag
                    ? s(
                        "k-button",
                        t._b(
                          {
                            staticClass: "k-card-options-button",
                            on: { click: t.flag.click },
                          },
                          "k-button",
                          t.flag,
                          !1
                        )
                      )
                    : t.statusIcon
                    ? s(
                        "k-status-icon",
                        t._b(
                          { staticClass: "k-card-options-button" },
                          "k-status-icon",
                          t.statusIcon,
                          !1
                        )
                      )
                    : t._e(),
                  t.options
                    ? s("k-button", {
                        staticClass: "k-card-options-button",
                        attrs: { tooltip: t.$t("options"), icon: "dots" },
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(), t.$refs.dropdown.toggle()
                            );
                          },
                        },
                      })
                    : t._e(),
                  s("k-dropdown-content", {
                    ref: "dropdown",
                    staticClass: "k-card-options-dropdown",
                    attrs: { options: t.options, align: "right" },
                    on: {
                      action: function (e) {
                        return t.$emit("action", e);
                      },
                    },
                  }),
                ]),
              ],
              2
            ),
          ],
          1
        );
      },
      Nh = [],
      Ph = {
        inheritAttrs: !1,
        props: {
          column: String,
          flag: Object,
          icon: {
            type: Object,
            default() {
              return { type: "file", back: "black" };
            },
          },
          image: [Object, Boolean],
          info: String,
          link: [String, Function],
          options: [Array, Function],
          sortable: Boolean,
          statusIcon: Object,
          target: String,
          text: String,
        },
        computed: {
          wrapper() {
            return this.link ? "k-link" : "div";
          },
          ratioPadding() {
            return this.icon && this.icon.ratio
              ? this.$helper.ratio(this.icon.ratio)
              : this.$helper.ratio("3/2");
          },
          imageOptions() {
            return Ep(this.image, "cards", this.column);
          },
        },
      },
      Rh = Ph,
      qh = (s("c119"), Object(c["a"])(Rh, Dh, Nh, !1, null, null, null)),
      Fh = qh.exports,
      Uh = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-cards" },
          [
            t._t(
              "default",
              t._l(t.cards, function (e, i) {
                return s(
                  "k-card",
                  t._g(t._b({ key: i }, "k-card", e, !1), t.$listeners)
                );
              })
            ),
          ],
          2
        );
      },
      Hh = [],
      zh = { props: { cards: Array } },
      Kh = zh,
      Gh = (s("f56d"), Object(c["a"])(Kh, Uh, Hh, !1, null, null, null)),
      Wh = Gh.exports,
      Yh = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-collection", attrs: { "data-layout": t.layout } },
          [
            s(
              "k-draggable",
              {
                attrs: {
                  list: t.items,
                  options: t.dragOptions,
                  element: t.elements.list,
                  "data-size": t.size,
                  handle: !0,
                },
                on: {
                  change: function (e) {
                    return t.$emit("change", e);
                  },
                  end: t.onEnd,
                },
              },
              t._l(t.items, function (e, i) {
                return s(
                  t.elements.item,
                  t._b(
                    {
                      key: i,
                      tag: "component",
                      class: { "k-draggable-item": e.sortable },
                      on: {
                        action: function (s) {
                          return t.$emit("action", e, s);
                        },
                        dragstart: function (s) {
                          return t.onDragStart(s, e.dragText);
                        },
                      },
                    },
                    "component",
                    e,
                    !1
                  )
                );
              }),
              1
            ),
            t.hasFooter
              ? s(
                  "footer",
                  { staticClass: "k-collection-footer" },
                  [
                    t.help
                      ? s("k-text", {
                          staticClass: "k-collection-help",
                          attrs: { theme: "help" },
                          domProps: { innerHTML: t._s(t.help) },
                        })
                      : t._e(),
                    s(
                      "div",
                      { staticClass: "k-collection-pagination" },
                      [
                        t.hasPagination
                          ? s(
                              "k-pagination",
                              t._b(
                                {
                                  on: {
                                    paginate: function (e) {
                                      return t.$emit("paginate", e);
                                    },
                                  },
                                },
                                "k-pagination",
                                t.paginationOptions,
                                !1
                              )
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      Vh = [],
      Jh = {
        props: {
          help: String,
          items: {
            type: [Array, Object],
            default() {
              return [];
            },
          },
          layout: { type: String, default: "list" },
          size: String,
          sortable: Boolean,
          pagination: {
            type: [Boolean, Object],
            default() {
              return !1;
            },
          },
        },
        computed: {
          hasPagination() {
            return (
              !1 !== this.pagination &&
              !0 !== this.paginationOptions.hide &&
              !(this.pagination.total <= this.pagination.limit)
            );
          },
          hasFooter() {
            return !(!this.hasPagination && !this.help);
          },
          dragOptions() {
            return {
              sort: this.sortable,
              disabled: !1 === this.sortable,
              draggable: ".k-draggable-item",
            };
          },
          elements() {
            const t = {
              cards: { list: "k-cards", item: "k-card" },
              list: { list: "k-list", item: "k-list-item" },
            };
            return t[this.layout] ? t[this.layout] : t["list"];
          },
          paginationOptions() {
            const t =
              "object" !== typeof this.pagination ? {} : this.pagination;
            return {
              limit: 10,
              details: !0,
              keys: !1,
              total: 0,
              hide: !1,
              ...t,
            };
          },
        },
        watch: {
          $props() {
            this.$forceUpdate();
          },
        },
        over: null,
        methods: {
          onEnd() {
            this.over && this.over.removeAttribute("data-over"),
              this.$emit("sort", this.items);
          },
          onDragStart(t, e) {
            this.$store.dispatch("drag", { type: "text", data: e });
          },
        },
      },
      Zh = Jh,
      Xh = (s("8c28"), Object(c["a"])(Zh, Yh, Vh, !1, null, null, null)),
      Qh = Xh.exports,
      tm = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-column",
            attrs: { "data-width": t.width, "data-sticky": t.sticky },
          },
          [s("div", [t._t("default")], 2)]
        );
      },
      em = [],
      sm = { props: { width: String, sticky: Boolean } },
      im = sm,
      nm = (s("c9cb"), Object(c["a"])(im, tm, em, !1, null, null, null)),
      am = nm.exports,
      rm = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-dropzone",
            attrs: { "data-dragging": t.dragging, "data-over": t.over },
            on: {
              dragenter: t.onEnter,
              dragleave: t.onLeave,
              dragover: t.onOver,
              drop: t.onDrop,
            },
          },
          [t._t("default")],
          2
        );
      },
      om = [],
      lm = {
        props: { disabled: { type: Boolean, default: !1 } },
        data() {
          return { files: [], dragging: !1, over: !1 };
        },
        methods: {
          cancel() {
            this.reset();
          },
          reset() {
            (this.dragging = !1), (this.over = !1);
          },
          onDrop(t) {
            return !0 === this.disabled || !1 === this.$helper.isUploadEvent(t)
              ? this.reset()
              : (this.$events.$emit("dropzone.drop"),
                (this.files = t.dataTransfer.files),
                this.$emit("drop", this.files),
                void this.reset());
          },
          onEnter(t) {
            !1 === this.disabled &&
              this.$helper.isUploadEvent(t) &&
              (this.dragging = !0);
          },
          onLeave() {
            this.reset();
          },
          onOver(t) {
            !1 === this.disabled &&
              this.$helper.isUploadEvent(t) &&
              ((t.dataTransfer.dropEffect = "copy"), (this.over = !0));
          },
        },
      },
      cm = lm,
      um = (s("414d"), Object(c["a"])(cm, rm, om, !1, null, null, null)),
      dm = um.exports,
      pm = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          t.element,
          t._g(
            {
              tag: "component",
              staticClass: "k-empty",
              attrs: {
                "data-layout": t.layout,
                type: "button" === t.element && "button",
              },
            },
            t.$listeners
          ),
          [
            t.icon ? s("k-icon", { attrs: { type: t.icon } }) : t._e(),
            s("p", [t._t("default")], 2),
          ],
          1
        );
      },
      hm = [],
      mm = {
        props: {
          text: String,
          icon: String,
          layout: { type: String, default: "list" },
        },
        computed: {
          element() {
            return void 0 !== this.$listeners["click"] ? "button" : "div";
          },
        },
      },
      fm = mm,
      gm = (s("ba8f"), Object(c["a"])(fm, pm, hm, !1, null, null, null)),
      bm = gm.exports,
      km = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-file-preview" },
          [
            s("k-view", { staticClass: "k-file-preview-layout" }, [
              s(
                "div",
                { staticClass: "k-file-preview-image" },
                [
                  s(
                    "k-link",
                    {
                      staticClass: "k-file-preview-image-link",
                      attrs: {
                        to: t.file.url,
                        title: t.$t("open"),
                        target: "_blank",
                      },
                    },
                    [
                      t.file.panelImage &&
                      t.file.panelImage.cards &&
                      t.file.panelImage.cards.url
                        ? s("k-image", {
                            attrs: {
                              src: t.file.panelImage.cards.url,
                              srcset: t.file.panelImage.cards.srcset,
                              back: "none",
                            },
                          })
                        : t.file.panelIcon
                        ? s("k-icon", {
                            staticClass: "k-file-preview-icon",
                            style: { color: t.file.panelIcon.color },
                            attrs: { type: t.file.panelIcon.type },
                          })
                        : s("span", {
                            staticClass: "k-file-preview-placeholder",
                          }),
                    ],
                    1
                  ),
                ],
                1
              ),
              s("div", { staticClass: "k-file-preview-details" }, [
                s("ul", [
                  s("li", [
                    s("h3", [t._v(t._s(t.$t("template")))]),
                    s("p", [t._v(t._s(t.file.template || "—"))]),
                  ]),
                  s("li", [
                    s("h3", [t._v(t._s(t.$t("mime")))]),
                    s("p", [t._v(t._s(t.file.mime))]),
                  ]),
                  s("li", [
                    s("h3", [t._v(t._s(t.$t("url")))]),
                    s(
                      "p",
                      [
                        s(
                          "k-link",
                          {
                            attrs: {
                              to: t.file.url,
                              tabindex: "-1",
                              target: "_blank",
                            },
                          },
                          [t._v(" /" + t._s(t.file.id) + " ")]
                        ),
                      ],
                      1
                    ),
                  ]),
                  s("li", [
                    s("h3", [t._v(t._s(t.$t("size")))]),
                    s("p", [t._v(t._s(t.file.niceSize))]),
                  ]),
                  s("li", [
                    s("h3", [t._v(t._s(t.$t("dimensions")))]),
                    t.file.dimensions &&
                    (t.file.dimensions.width || t.file.dimensions.height)
                      ? s("p", [
                          t._v(
                            " " +
                              t._s(t.file.dimensions.width) +
                              "×" +
                              t._s(t.file.dimensions.height) +
                              " " +
                              t._s(t.$t("pixel")) +
                              " "
                          ),
                        ])
                      : s("p", [t._v(" — ")]),
                  ]),
                  s("li", [
                    s("h3", [t._v(t._s(t.$t("orientation")))]),
                    t.file.dimensions && t.file.dimensions.orientation
                      ? s("p", [
                          t._v(
                            " " +
                              t._s(
                                t.$t(
                                  "orientation." + t.file.dimensions.orientation
                                )
                              ) +
                              " "
                          ),
                        ])
                      : s("p", [t._v(" — ")]),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      vm = [],
      $m = { props: { file: Object } },
      ym = $m,
      _m = (s("696b"), Object(c["a"])(ym, km, vm, !1, null, null, null)),
      wm = _m.exports,
      xm = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-grid", attrs: { "data-gutter": t.gutter } },
          [t._t("default")],
          2
        );
      },
      Om = [],
      Cm = { props: { gutter: String } },
      Sm = Cm,
      Em = (s("5b23"), Object(c["a"])(Sm, xm, Om, !1, null, null, null)),
      jm = Em.exports,
      Tm = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "header",
          { staticClass: "k-header", attrs: { "data-editable": t.editable } },
          [
            s(
              "k-headline",
              { attrs: { tag: "h1", size: "huge" } },
              [
                t.editable && t.$listeners.edit
                  ? s(
                      "span",
                      {
                        staticClass: "k-headline-editable",
                        on: {
                          click: function (e) {
                            return t.$emit("edit");
                          },
                        },
                      },
                      [
                        t._t("default"),
                        s("k-icon", { attrs: { type: "edit" } }),
                      ],
                      2
                    )
                  : t._t("default"),
              ],
              2
            ),
            t.$slots.left || t.$slots.right
              ? s(
                  "k-bar",
                  { staticClass: "k-header-buttons" },
                  [
                    t._t("left", null, { slot: "left" }),
                    t._t("right", null, { slot: "right" }),
                  ],
                  2
                )
              : t._e(),
            s("k-tabs", {
              attrs: { tab: t.tab, tabs: t.tabsWithBadges, theme: "notice" },
            }),
          ],
          1
        );
      },
      Lm = [],
      Im = {
        props: {
          editable: Boolean,
          tab: String,
          tabs: {
            type: Array,
            default() {
              return [];
            },
          },
        },
        computed: {
          tabsWithBadges() {
            const t = Object.keys(this.$store.getters["content/changes"]());
            return this.tabs.map((e) => {
              let s = [];
              return (
                Object.values(e.columns).forEach((t) => {
                  Object.values(t.sections).forEach((t) => {
                    "fields" === t.type &&
                      Object.keys(t.fields).forEach((t) => {
                        s.push(t);
                      });
                  });
                }),
                (e.badge = s.filter((e) => t.includes(e.toLowerCase())).length),
                e
              );
            });
          },
        },
      },
      Am = Im,
      Bm = (s("53c5"), Object(c["a"])(Am, Tm, Lm, !1, null, null, null)),
      Mm = Bm.exports,
      Dm = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "ul",
          { staticClass: "k-list" },
          [
            t._t(
              "default",
              t._l(t.items, function (e, i) {
                return s(
                  "k-list-item",
                  t._g(t._b({ key: i }, "k-list-item", e, !1), t.$listeners)
                );
              })
            ),
          ],
          2
        );
      },
      Nm = [],
      Pm = { props: { items: Array } },
      Rm = Pm,
      qm = (s("c857"), Object(c["a"])(Rm, Dm, Nm, !1, null, null, null)),
      Fm = qm.exports,
      Um = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          t.element,
          t._g({ tag: "component", staticClass: "k-list-item" }, t.$listeners),
          [
            t.sortable ? s("k-sort-handle") : t._e(),
            s(
              "k-link",
              {
                staticClass: "k-list-item-content",
                attrs: { to: t.link, target: t.target },
              },
              [
                t.image
                  ? s(
                      "span",
                      { staticClass: "k-list-item-image" },
                      [
                        t._t("image", [
                          t.imageOptions
                            ? s(
                                "k-image",
                                t._b({}, "k-image", t.imageOptions, !1)
                              )
                            : s("k-icon", t._b({}, "k-icon", t.icon, !1)),
                        ]),
                      ],
                      2
                    )
                  : t._e(),
                s(
                  "span",
                  { staticClass: "k-list-item-text" },
                  [
                    t._t("default", [
                      s("em", { domProps: { innerHTML: t._s(t.text) } }),
                      t.info
                        ? s("small", { domProps: { innerHTML: t._s(t.info) } })
                        : t._e(),
                    ]),
                  ],
                  2
                ),
              ]
            ),
            s(
              "nav",
              { staticClass: "k-list-item-options" },
              [
                t._t("options", [
                  t.flag
                    ? s(
                        "k-button",
                        t._b(
                          {
                            staticClass: "k-list-item-status",
                            on: { click: t.flag.click },
                          },
                          "k-button",
                          t.flag,
                          !1
                        )
                      )
                    : t.statusIcon
                    ? s(
                        "k-status-icon",
                        t._b(
                          { staticClass: "k-list-item-status" },
                          "k-status-icon",
                          t.statusIcon,
                          !1
                        )
                      )
                    : t._e(),
                  t.options
                    ? s("k-button", {
                        staticClass: "k-list-item-toggle",
                        attrs: {
                          tooltip: t.$t("options"),
                          icon: "dots",
                          alt: "Options",
                        },
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(), t.$refs.options.toggle()
                            );
                          },
                        },
                      })
                    : t._e(),
                  s("k-dropdown-content", {
                    ref: "options",
                    attrs: { options: t.options, align: "right" },
                    on: {
                      action: function (e) {
                        return t.$emit("action", e);
                      },
                    },
                  }),
                ]),
              ],
              2
            ),
          ],
          1
        );
      },
      Hm = [],
      zm = {
        inheritAttrs: !1,
        props: {
          element: { type: String, default: "li" },
          image: [Object, Boolean],
          icon: {
            type: Object,
            default() {
              return { type: "file", back: "black" };
            },
          },
          sortable: Boolean,
          text: String,
          target: String,
          info: String,
          link: [String, Function],
          flag: Object,
          options: [Array, Function],
          statusIcon: Object,
        },
        computed: {
          imageOptions() {
            return Ep(this.image);
          },
        },
      },
      Km = zm,
      Gm = (s("fa6a"), Object(c["a"])(Km, Um, Hm, !1, null, null, null)),
      Wm = Gm.exports,
      Ym = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isOpen
          ? s("portal", [
              s(
                "div",
                t._g(
                  {
                    ref: "overlay",
                    staticClass: "k-overlay",
                    class: t.$vnode.data.staticClass,
                    attrs: {
                      "data-centered": t.loading || t.centered,
                      "data-dimmed": t.dimmed,
                      "data-loading": t.loading,
                    },
                    on: { mousedown: t.close },
                  },
                  t.$listeners
                ),
                [
                  t.loading
                    ? s("k-loader", { staticClass: "k-overlay-loader" })
                    : t._t("default", null, {
                        close: t.close,
                        isOpen: t.isOpen,
                      }),
                ],
                2
              ),
            ])
          : t._e();
      },
      Vm = [],
      Jm = {
        inheritAttrs: !0,
        props: {
          autofocus: { type: Boolean, default: !0 },
          centered: { type: Boolean, default: !1 },
          dimmed: { type: Boolean, default: !0 },
          loading: { type: Boolean, default: !1 },
        },
        data() {
          return { isOpen: !1, scrollTop: 0 };
        },
        methods: {
          close() {
            (this.isOpen = !1),
              this.$emit("close"),
              this.restoreScrollPosition(),
              this.$events.$off("keydown.esc", this.close),
              document.removeEventListener("focus", this.focustrap);
          },
          focus() {
            let t = this.$refs.overlay.querySelector(
              "\n        [autofocus],\n        [data-autofocus]\n      "
            );
            null === t &&
              (t = this.$refs.overlay.querySelector(
                "\n          input,\n          textarea,\n          select,\n          button\n        "
              )),
              t && "function" === typeof t.focus
                ? t.focus()
                : this.$slots.default[0] &&
                  this.$slots.default[0].context &&
                  "function" === typeof this.$slots.default[0].context.focus &&
                  this.$slots.default[0].context.focus();
          },
          focustrap(t) {
            this.$refs.overlay &&
              !1 === this.$refs.overlay.contains(t.target) &&
              this.focus();
          },
          open() {
            this.storeScrollPosition(),
              (this.isOpen = !0),
              this.$emit("open"),
              this.$events.$on("keydown.esc", this.close),
              setTimeout(() => {
                !0 === this.autofocus && this.focus(),
                  document
                    .querySelector(".k-overlay > *")
                    .addEventListener("mousedown", (t) => t.stopPropagation()),
                  this.$emit("ready");
              }, 1);
          },
          restoreScrollPosition() {
            const t = document.querySelector(".k-panel-view");
            t && t.scrollTop && (t.scrollTop = this.scrollTop);
          },
          storeScrollPosition() {
            const t = document.querySelector(".k-panel-view");
            t && t.scrollTop
              ? (this.scrollTop = t.scrollTop)
              : (this.scrollTop = 0);
          },
        },
      },
      Zm = Jm,
      Xm = (s("f7f5"), Object(c["a"])(Zm, Ym, Vm, !1, null, null, null)),
      Qm = Xm.exports,
      tf = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.tabs && t.tabs.length > 1
          ? s(
              "div",
              { staticClass: "k-tabs", attrs: { "data-theme": t.theme } },
              [
                s(
                  "nav",
                  [
                    t._l(t.visibleTabs, function (e) {
                      return s(
                        "k-button",
                        {
                          key: e.name,
                          staticClass: "k-tab-button",
                          attrs: {
                            link: "#" + e.name,
                            current: t.current === e.name,
                            icon: e.icon,
                            tooltip: e.label,
                          },
                        },
                        [
                          t._v(" " + t._s(e.label || e.text || e.name) + " "),
                          e.badge
                            ? s("span", { staticClass: "k-tabs-badge" }, [
                                t._v(" " + t._s(e.badge) + " "),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t.invisibleTabs.length
                      ? s("k-button", {
                          staticClass: "k-tab-button k-tabs-dropdown-button",
                          attrs: { text: t.$t("more"), icon: "dots" },
                          on: {
                            click: function (e) {
                              return e.stopPropagation(), t.$refs.more.toggle();
                            },
                          },
                        })
                      : t._e(),
                  ],
                  2
                ),
                t.invisibleTabs.length
                  ? s(
                      "k-dropdown-content",
                      {
                        ref: "more",
                        staticClass: "k-tabs-dropdown",
                        attrs: { align: "right" },
                      },
                      t._l(t.invisibleTabs, function (e) {
                        return s(
                          "k-dropdown-item",
                          {
                            key: "more-" + e.name,
                            attrs: {
                              link: "#" + e.name,
                              current: t.tab === e.name,
                              icon: e.icon,
                              tooltip: e.label,
                            },
                          },
                          [t._v(" " + t._s(e.label || e.name) + " ")]
                        );
                      }),
                      1
                    )
                  : t._e(),
              ],
              1
            )
          : t._e();
      },
      ef = [],
      sf = {
        props: { tab: String, tabs: Array, theme: String },
        data() {
          return { size: null, visibleTabs: this.tabs, invisibleTabs: [] };
        },
        computed: {
          current() {
            const t =
              this.tabs.find((t) => t.name === this.tab) || this.tabs[0] || {};
            return t.name;
          },
        },
        watch: {
          tabs(t) {
            (this.visibleTabs = t), (this.invisibleTabs = []), this.resize(!0);
          },
        },
        created() {
          window.addEventListener("resize", this.resize);
        },
        destroyed() {
          window.removeEventListener("resize", this.resize);
        },
        methods: {
          resize(t) {
            if (this.tabs && !(this.tabs.length <= 1)) {
              if (this.tabs.length <= 3)
                return (
                  (this.visibleTabs = this.tabs), void (this.invisibleTabs = [])
                );
              if (window.innerWidth >= 700) {
                if ("large" === this.size && !t) return;
                (this.visibleTabs = this.tabs),
                  (this.invisibleTabs = []),
                  (this.size = "large");
              } else {
                if ("small" === this.size && !t) return;
                (this.visibleTabs = this.tabs.slice(0, 2)),
                  (this.invisibleTabs = this.tabs.slice(2)),
                  (this.size = "small");
              }
            }
          },
        },
      },
      nf = sf,
      af = (s("8f7d"), Object(c["a"])(nf, tf, ef, !1, null, null, null)),
      rf = af.exports,
      of = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-view", attrs: { "data-align": t.align } },
          [t._t("default")],
          2
        );
      },
      lf = [],
      cf = { props: { align: String } },
      uf = cf,
      df = (s("daa8"), Object(c["a"])(uf, of, lf, !1, null, null, null)),
      pf = df.exports,
      hf = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "draggable",
          t._g(
            t._b(
              {
                staticClass: "k-draggable",
                attrs: {
                  "component-data": t.data,
                  tag: t.element,
                  list: t.list,
                  move: t.move,
                },
              },
              "draggable",
              t.dragOptions,
              !1
            ),
            t.listeners
          ),
          [t._t("default"), t._t("footer", null, { slot: "footer" })],
          2
        );
      },
      mf = [],
      ff = s("b76a"),
      gf = s.n(ff),
      bf = {
        components: { draggable: gf.a },
        props: {
          data: Object,
          element: String,
          handle: [String, Boolean],
          list: [Array, Object],
          move: Function,
          options: Object,
        },
        data() {
          return {
            listeners: {
              ...this.$listeners,
              start: (t) => {
                this.$store.dispatch("drag", {}),
                  this.$listeners.start && this.$listeners.start(t);
              },
              end: (t) => {
                this.$store.dispatch("drag", null),
                  this.$listeners.end && this.$listeners.end(t);
              },
            },
          };
        },
        computed: {
          dragOptions() {
            let t = !1;
            return (
              (t = !0 === this.handle ? ".k-sort-handle" : this.handle),
              {
                fallbackClass: "k-sortable-fallback",
                fallbackOnBody: !0,
                forceFallback: !0,
                ghostClass: "k-sortable-ghost",
                handle: t,
                scroll: document.querySelector(".k-panel-view"),
                ...this.options,
              }
            );
          },
        },
      },
      kf = bf,
      vf = Object(c["a"])(kf, hf, mf, !1, null, null, null),
      $f = vf.exports,
      yf = {
        data() {
          return { error: null };
        },
        errorCaptured(t) {
          return O.debug && window.console.warn(t), (this.error = t), !1;
        },
        render(t) {
          return this.error
            ? this.$slots.error
              ? this.$slots.error[0]
              : this.$scopedSlots.error
              ? this.$scopedSlots.error({ error: this.error })
              : t(
                  "k-box",
                  { attrs: { theme: "negative" } },
                  this.error.message || this.error
                )
            : this.$slots.default[0];
        },
      },
      _f = yf,
      wf = Object(c["a"])(_f, Tp, Lp, !1, null, null, null),
      xf = wf.exports,
      Of = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          t.tag,
          t._g(
            {
              tag: "component",
              staticClass: "k-headline",
              attrs: { "data-theme": t.theme, "data-size": t.size },
            },
            t.$listeners
          ),
          [
            t.link
              ? s("k-link", { attrs: { to: t.link } }, [t._t("default")], 2)
              : t._t("default"),
          ],
          2
        );
      },
      Cf = [],
      Sf = {
        props: {
          link: String,
          size: { type: String },
          tag: { type: String, default: "h2" },
          theme: { type: String },
        },
      },
      Ef = Sf,
      jf = (s("f8a7"), Object(c["a"])(Ef, Of, Cf, !1, null, null, null)),
      Tf = jf.exports,
      Lf = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          {
            class: "k-icon k-icon-" + t.type,
            attrs: {
              "aria-label": t.alt,
              role: t.alt ? "img" : null,
              "aria-hidden": !t.alt,
              "data-back": t.back,
              "data-size": t.size,
            },
          },
          [
            t.isEmoji
              ? s("span", { staticClass: "k-icon-emoji" }, [t._v(t._s(t.type))])
              : s(
                  "svg",
                  {
                    style: { color: t.color },
                    attrs: { viewBox: "0 0 16 16" },
                  },
                  [s("use", { attrs: { "xlink:href": "#icon-" + t.type } })]
                ),
          ]
        );
      },
      If = [],
      Af = {
        props: {
          alt: String,
          color: String,
          back: String,
          size: String,
          type: String,
        },
        computed: {
          isEmoji() {
            return this.$helper.string.hasEmoji(this.type);
          },
        },
      },
      Bf = Af,
      Mf = (s("3342"), Object(c["a"])(Bf, Lf, If, !1, null, null, null)),
      Df = Mf.exports,
      Nf = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          t._g(
            {
              staticClass: "k-image",
              attrs: {
                "data-ratio": t.ratio,
                "data-back": t.back,
                "data-cover": t.cover,
              },
            },
            t.$listeners
          ),
          [
            s(
              "span",
              { style: "padding-bottom:" + t.ratioPadding },
              [
                t.loaded
                  ? s("img", {
                      key: t.src,
                      attrs: {
                        alt: t.alt || "",
                        src: t.src,
                        srcset: t.srcset,
                        sizes: t.sizes,
                      },
                      on: {
                        dragstart: function (t) {
                          t.preventDefault();
                        },
                      },
                    })
                  : t._e(),
                t.loaded || t.error
                  ? t._e()
                  : s("k-loader", {
                      attrs: { position: "center", theme: "light" },
                    }),
                !t.loaded && t.error
                  ? s("k-icon", {
                      staticClass: "k-image-error",
                      attrs: { type: "cancel" },
                    })
                  : t._e(),
              ],
              1
            ),
          ]
        );
      },
      Pf = [],
      Rf = {
        props: {
          alt: String,
          back: String,
          cover: Boolean,
          ratio: String,
          sizes: String,
          src: String,
          srcset: String,
        },
        data() {
          return {
            loaded: { type: Boolean, default: !1 },
            error: { type: Boolean, default: !1 },
          };
        },
        computed: {
          ratioPadding() {
            return this.$helper.ratio(this.ratio || "1/1");
          },
        },
        created() {
          let t = new Image();
          (t.onload = () => {
            (this.loaded = !0), this.$emit("load");
          }),
            (t.onerror = () => {
              (this.error = !0), this.$emit("error");
            }),
            (t.src = this.src);
        },
      },
      qf = Rf,
      Ff = (s("0d56"), Object(c["a"])(qf, Nf, Pf, !1, null, null, null)),
      Uf = Ff.exports,
      Hf = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-icon", {
          staticClass: "k-loader",
          attrs: { type: "loader" },
        });
      },
      zf = [],
      Kf = (s("3cf3"), {}),
      Gf = Object(c["a"])(Kf, Hf, zf, !1, null, null, null),
      Wf = Gf.exports,
      Yf = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "progress",
          {
            staticClass: "k-progress",
            attrs: { max: "100" },
            domProps: { value: t.state },
          },
          [t._v(" " + t._s(t.state) + "% ")]
        );
      },
      Vf = [],
      Jf = {
        props: { value: { type: Number, default: 0 } },
        data() {
          return { state: this.value };
        },
        methods: {
          set(t) {
            this.state = t;
          },
        },
      },
      Zf = Jf,
      Xf = (s("9799"), Object(c["a"])(Zf, Yf, Vf, !1, null, null, null)),
      Qf = Xf.exports,
      tg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-icon", {
          staticClass: "k-sort-handle",
          attrs: { type: t.icon, "aria-hidden": "true" },
        });
      },
      eg = [],
      sg = { props: { icon: { type: String, default: "sort" } } },
      ig = sg,
      ng = (s("35cb"), Object(c["a"])(ig, tg, eg, !1, null, null, null)),
      ag = ng.exports,
      rg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-button",
          {
            class: "k-status-icon k-status-icon-" + t.status,
            attrs: {
              disabled: t.disabled,
              icon: t.icon,
              responsive: t.responsive,
              tooltip: t.title,
            },
            on: { click: t.onClick },
          },
          [t.text ? [t._v(" " + t._s(t.text) + " ")] : t._e()],
          2
        );
      },
      og = [],
      lg = {
        props: {
          click: { type: Function, default: () => {} },
          disabled: Boolean,
          responsive: Boolean,
          status: String,
          text: String,
          tooltip: String,
        },
        computed: {
          icon() {
            return "draft" === this.status
              ? "circle-outline"
              : "unlisted" === this.status
              ? "circle-half"
              : "circle";
          },
          title() {
            let t = this.tooltip || this.text;
            return this.disabled && (t += ` (${this.$t("disabled")})`), t;
          },
        },
        methods: {
          onClick() {
            this.click(), this.$emit("click");
          },
        },
      },
      cg = lg,
      ug = (s("dd70"), Object(c["a"])(cg, rg, og, !1, null, null, null)),
      dg = ug.exports,
      pg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-text",
            attrs: {
              "data-align": t.align,
              "data-size": t.size,
              "data-theme": t.theme,
            },
          },
          [t._t("default")],
          2
        );
      },
      hg = [],
      mg = { props: { align: String, size: String, theme: String } },
      fg = mg,
      gg = (s("b0d6"), Object(c["a"])(fg, pg, hg, !1, null, null, null)),
      bg = gg.exports,
      kg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-user-info" },
          [
            t.user.avatar
              ? s("k-image", {
                  attrs: { cover: !0, src: t.user.avatar.url, ratio: "1/1" },
                })
              : s("k-icon", { attrs: { type: "user" } }),
            t._v(" " + t._s(t.user.name || t.user.email || t.user) + " "),
          ],
          1
        );
      },
      vg = [],
      $g = { props: { user: [Object, String] } },
      yg = $g,
      _g = (s("217b"), Object(c["a"])(yg, kg, vg, !1, null, null, null)),
      wg = _g.exports,
      xg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          t.component,
          t._g(
            t._b(
              { ref: "button", tag: "component" },
              "component",
              t.$props,
              !1
            ),
            t.$listeners
          ),
          [t._t("default")],
          2
        );
      },
      Og = [],
      Cg = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          current: [String, Boolean],
          disabled: Boolean,
          icon: String,
          id: [String, Number],
          link: String,
          responsive: Boolean,
          rel: String,
          role: String,
          target: String,
          tabindex: String,
          theme: String,
          tooltip: String,
          type: { type: String, default: "button" },
        },
        computed: {
          component() {
            return !0 === this.disabled
              ? "k-button-disabled"
              : this.link
              ? "k-button-link"
              : "k-button-native";
          },
        },
        methods: {
          focus() {
            this.$refs.button.focus && this.$refs.button.focus();
          },
          tab() {
            this.$refs.button.tab && this.$refs.button.tab();
          },
          untab() {
            this.$refs.button.untab && this.$refs.button.untab();
          },
        },
      },
      Sg = Cg,
      Eg = (s("3787"), Object(c["a"])(Sg, xg, Og, !1, null, null, null)),
      jg = Eg.exports,
      Tg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          {
            staticClass: "k-button",
            attrs: {
              id: t.id,
              "data-disabled": !0,
              "data-responsive": t.responsive,
              "data-theme": t.theme,
              title: t.tooltip,
            },
          },
          [
            t.icon
              ? s("k-icon", {
                  staticClass: "k-button-icon",
                  attrs: { type: t.icon, alt: t.tooltip },
                })
              : t._e(),
            t.$slots.default
              ? s(
                  "span",
                  { staticClass: "k-button-text" },
                  [t._t("default")],
                  2
                )
              : t._e(),
          ],
          1
        );
      },
      Lg = [],
      Ig = {
        inheritAttrs: !1,
        props: {
          icon: String,
          id: [String, Number],
          responsive: Boolean,
          theme: String,
          tooltip: String,
        },
      },
      Ag = Ig,
      Bg = (s("16eb"), Object(c["a"])(Ag, Tg, Lg, !1, null, null, null)),
      Mg = Bg.exports,
      Dg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-button-group" },
          [t._t("default")],
          2
        );
      },
      Ng = [],
      Pg = {},
      Rg = Pg,
      qg = (s("a567"), Object(c["a"])(Rg, Dg, Ng, !1, null, null, null)),
      Fg = qg.exports,
      Ug = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-link",
          t._g(
            {
              staticClass: "k-button",
              attrs: {
                id: t.id,
                "aria-current": t.current,
                autofocus: t.autofocus,
                "data-theme": t.theme,
                "data-responsive": t.responsive,
                rel: t.rel,
                role: t.role,
                tabindex: t.tabindex,
                target: t.target,
                title: t.tooltip,
                to: t.link,
              },
            },
            t.$listeners
          ),
          [
            t.icon
              ? s("k-icon", {
                  staticClass: "k-button-icon",
                  attrs: { type: t.icon, alt: t.tooltip },
                })
              : t._e(),
            t.$slots.default
              ? s(
                  "span",
                  { staticClass: "k-button-text" },
                  [t._t("default")],
                  2
                )
              : t._e(),
          ],
          1
        );
      },
      Hg = [],
      zg = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          current: [String, Boolean],
          icon: String,
          id: [String, Number],
          link: String,
          rel: String,
          responsive: Boolean,
          role: String,
          target: String,
          tabindex: String,
          theme: String,
          tooltip: String,
        },
      },
      Kg = zg,
      Gg = Object(c["a"])(Kg, Ug, Hg, !1, null, null, null),
      Wg = Gg.exports,
      Yg = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "button",
          t._g(
            {
              staticClass: "k-button",
              attrs: {
                id: t.id,
                "aria-current": t.current,
                autofocus: t.autofocus,
                "data-theme": t.theme,
                "data-responsive": t.responsive,
                role: t.role,
                tabindex: t.tabindex,
                title: t.tooltip,
                type: t.type,
              },
            },
            t.$listeners
          ),
          [
            t.icon
              ? s("k-icon", {
                  staticClass: "k-button-icon",
                  attrs: { type: t.icon, alt: t.tooltip },
                })
              : t._e(),
            t.$slots.default
              ? s(
                  "span",
                  { staticClass: "k-button-text" },
                  [t._t("default")],
                  2
                )
              : t._e(),
          ],
          1
        );
      },
      Vg = [],
      Jg = {
        mounted() {
          this.$el.addEventListener("keyup", this.onTab, !0),
            this.$el.addEventListener("blur", this.onUntab, !0);
        },
        destroyed() {
          this.$el.removeEventListener("keyup", this.onTab, !0),
            this.$el.removeEventListener("blur", this.onUntab, !0);
        },
        methods: {
          focus() {
            this.$el.focus && this.$el.focus();
          },
          onTab(t) {
            9 === t.keyCode && this.$el.setAttribute("data-tabbed", !0);
          },
          onUntab() {
            this.$el.removeAttribute("data-tabbed");
          },
          tab() {
            this.$el.focus(), this.$el.setAttribute("data-tabbed", !0);
          },
          untab() {
            this.$el.removeAttribute("data-tabbed");
          },
        },
      },
      Zg = {
        mixins: [Jg],
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          current: [String, Boolean],
          icon: String,
          id: [String, Number],
          responsive: Boolean,
          role: String,
          tabindex: String,
          theme: String,
          tooltip: String,
          type: { type: String, default: "button" },
        },
      },
      Xg = Zg,
      Qg = Object(c["a"])(Xg, Yg, Vg, !1, null, null, null),
      tb = Qg.exports,
      eb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          {
            staticClass: "k-dropdown",
            on: {
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [t._t("default")],
          2
        );
      },
      sb = [],
      ib = {},
      nb = ib,
      ab = (s("f95f"), Object(c["a"])(nb, eb, sb, !1, null, null, null)),
      rb = ab.exports,
      ob = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isOpen
          ? s(
              "div",
              {
                staticClass: "k-dropdown-content",
                attrs: { "data-align": t.align, "data-dropup": t.dropup },
              },
              [
                t._t("default", [
                  t._l(t.items, function (e, i) {
                    return [
                      "-" === e
                        ? s("hr", { key: t._uid + "-item-" + i })
                        : s(
                            "k-dropdown-item",
                            t._b(
                              {
                                key: t._uid + "-item-" + i,
                                ref: t._uid + "-item-" + i,
                                refInFor: !0,
                                on: {
                                  click: function (s) {
                                    return t.$emit("action", e.click);
                                  },
                                },
                              },
                              "k-dropdown-item",
                              e,
                              !1
                            ),
                            [t._v(" " + t._s(e.text) + " ")]
                          ),
                    ];
                  }),
                ]),
              ],
              2
            )
          : t._e();
      },
      lb = [];
    let cb = null;
    var ub,
      db,
      pb = {
        props: {
          options: [Array, Function],
          align: { type: String, default: "left" },
        },
        data() {
          return { current: -1, dropup: !1, isOpen: !1, items: [] };
        },
        methods: {
          async fetchOptions(t) {
            if (!this.options) return t(this.items);
            if ("string" === typeof this.options) {
              const e = await fetch(this.options),
                s = await e.json();
              return t(s);
            }
            "function" === typeof this.options
              ? this.options(t)
              : Array.isArray(this.options) && t(this.options);
          },
          open() {
            this.reset(),
              cb && cb !== this && cb.close(),
              this.fetchOptions((t) => {
                this.$events.$on("keydown", this.navigate),
                  this.$events.$on("click", this.close),
                  (this.items = t),
                  (this.isOpen = !0),
                  (cb = this),
                  this.onOpen(),
                  this.$emit("open");
              });
          },
          reset() {
            (this.current = -1),
              this.$events.$off("keydown", this.navigate),
              this.$events.$off("click", this.close);
          },
          close() {
            this.reset(), (this.isOpen = cb = !1), this.$emit("close");
          },
          toggle() {
            this.isOpen ? this.close() : this.open();
          },
          focus(t = 0) {
            this.$children[t] &&
              this.$children[t].focus &&
              ((this.current = t), this.$children[t].focus());
          },
          onOpen() {
            (this.dropup = !1),
              this.$nextTick(() => {
                const t = document.querySelector(".k-panel-view");
                if (t && this.$el) {
                  let e = t.clientHeight - 40,
                    s = this.$el.getBoundingClientRect().top || 0,
                    i = this.$el.clientHeight;
                  this.dropup = s + i > e;
                }
              });
          },
          navigate(t) {
            switch (t.code) {
              case "Escape":
              case "ArrowLeft":
                this.close(), this.$emit("leave", t.code);
                break;
              case "ArrowUp":
                t.preventDefault();
                while (1) {
                  if ((this.current--, this.current < 0)) {
                    this.close(), this.$emit("leave", t.code);
                    break;
                  }
                  if (
                    this.$children[this.current] &&
                    !1 === this.$children[this.current].disabled
                  ) {
                    this.focus(this.current);
                    break;
                  }
                }
                break;
              case "ArrowDown":
                t.preventDefault();
                while (1) {
                  if (
                    (this.current++, this.current > this.$children.length - 1)
                  ) {
                    const t = this.$children.filter((t) => !1 === t.disabled);
                    this.current = this.$children.indexOf(t[t.length - 1]);
                    break;
                  }
                  if (
                    this.$children[this.current] &&
                    !1 === this.$children[this.current].disabled
                  ) {
                    this.focus(this.current);
                    break;
                  }
                }
                break;
              case "Tab":
                while (1) {
                  if (
                    (this.current++, this.current > this.$children.length - 1)
                  ) {
                    this.close(), this.$emit("leave", t.code);
                    break;
                  }
                  if (
                    this.$children[this.current] &&
                    !1 === this.$children[this.current].disabled
                  )
                    break;
                }
                break;
            }
          },
        },
      },
      hb = pb,
      mb = (s("98a1"), Object(c["a"])(hb, ob, lb, !1, null, null, null)),
      fb = mb.exports,
      gb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-button",
          t._g(
            t._b(
              { ref: "button", staticClass: "k-dropdown-item" },
              "k-button",
              t.$props,
              !1
            ),
            t.listeners
          ),
          [t._t("default")],
          2
        );
      },
      bb = [],
      kb = {
        inheritAttrs: !1,
        props: {
          disabled: Boolean,
          icon: String,
          image: [String, Object],
          link: String,
          target: String,
          theme: String,
          upload: String,
          current: [String, Boolean],
        },
        data() {
          return {
            listeners: {
              ...this.$listeners,
              click: (t) => {
                this.$parent.close(), this.$emit("click", t);
              },
            },
          };
        },
        methods: {
          focus() {
            this.$refs.button.focus();
          },
          tab() {
            this.$refs.button.tab();
          },
        },
      },
      vb = kb,
      $b = (s("580a"), Object(c["a"])(vb, gb, bb, !1, null, null, null)),
      yb = $b.exports,
      _b = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.to && !t.disabled
          ? s(
              "a",
              t._g(
                {
                  ref: "link",
                  staticClass: "k-link",
                  attrs: {
                    href: t.href,
                    rel: t.relAttr,
                    tabindex: t.tabindex,
                    target: t.target,
                    title: t.title,
                  },
                },
                t.listeners
              ),
              [t._t("default")],
              2
            )
          : s(
              "span",
              {
                staticClass: "k-link",
                attrs: { title: t.title, "data-disabled": "" },
              },
              [t._t("default")],
              2
            );
      },
      wb = [],
      xb = {
        mixins: [Jg],
        props: {
          disabled: Boolean,
          rel: String,
          tabindex: [String, Number],
          target: String,
          title: String,
          to: [String, Function],
        },
        data() {
          return {
            relAttr:
              "_blank" === this.target ? "noreferrer noopener" : this.rel,
            listeners: { ...this.$listeners, click: this.onClick },
          };
        },
        computed: {
          href() {
            return "function" === typeof this.to
              ? ""
              : void 0 === this.$route || "/" !== this.to[0] || this.target
              ? this.to
              : (this.$router.options.url || "") + this.to;
          },
        },
        methods: {
          isRoutable(t) {
            return (
              void 0 !== this.$route &&
              !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
              !t.defaultPrevented &&
              (void 0 === t.button || 0 === t.button) &&
              !this.target
            );
          },
          onClick(t) {
            if (!0 === this.disabled) return t.preventDefault(), !1;
            "function" === typeof this.to && (t.preventDefault(), this.to()),
              this.isRoutable(t) && (t.preventDefault(), this.$go(this.to)),
              this.$emit("click", t);
          },
        },
      },
      Ob = xb,
      Cb = (s("cc79"), Object(c["a"])(Ob, _b, wb, !1, null, null, null)),
      Sb = Cb.exports,
      Eb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.languages.length
          ? s(
              "k-dropdown",
              [
                s(
                  "k-button",
                  {
                    attrs: { responsive: !0, icon: "globe" },
                    on: {
                      click: function (e) {
                        return t.$refs.languages.toggle();
                      },
                    },
                  },
                  [t._v(" " + t._s(t.language.name) + " ")]
                ),
                t.languages
                  ? s(
                      "k-dropdown-content",
                      { ref: "languages" },
                      [
                        s(
                          "k-dropdown-item",
                          {
                            on: {
                              click: function (e) {
                                return t.change(t.defaultLanguage);
                              },
                            },
                          },
                          [t._v(" " + t._s(t.defaultLanguage.name) + " ")]
                        ),
                        s("hr"),
                        t._l(t.languages, function (e) {
                          return s(
                            "k-dropdown-item",
                            {
                              key: e.code,
                              on: {
                                click: function (s) {
                                  return t.change(e);
                                },
                              },
                            },
                            [t._v(" " + t._s(e.name) + " ")]
                          );
                        }),
                      ],
                      2
                    )
                  : t._e(),
              ],
              1
            )
          : t._e();
      },
      jb = [],
      Tb = {
        computed: {
          defaultLanguage() {
            return this.$store.state.languages.default;
          },
          language() {
            return this.$store.state.languages.current;
          },
          languages() {
            return this.$store.state.languages.all.filter(
              (t) => !1 === t.default
            );
          },
        },
        methods: {
          change(t) {
            this.$store.dispatch("languages/current", t),
              this.$emit("change", t);
          },
        },
      },
      Lb = Tb,
      Ib = Object(c["a"])(Lb, Eb, jb, !1, null, null, null),
      Ab = Ib.exports,
      Bb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.show
          ? s(
              "nav",
              { staticClass: "k-pagination", attrs: { "data-align": t.align } },
              [
                t.show
                  ? s("k-button", {
                      attrs: {
                        disabled: !t.hasPrev,
                        tooltip: t.prevLabel,
                        icon: "angle-left",
                      },
                      on: { click: t.prev },
                    })
                  : t._e(),
                t.details
                  ? [
                      t.dropdown
                        ? [
                            s(
                              "k-dropdown",
                              [
                                s(
                                  "k-button",
                                  {
                                    staticClass: "k-pagination-details",
                                    attrs: { disabled: !t.hasPages },
                                    on: {
                                      click: function (e) {
                                        return t.$refs.dropdown.toggle();
                                      },
                                    },
                                  },
                                  [
                                    t.total > 1
                                      ? [t._v(" " + t._s(t.detailsText) + " ")]
                                      : t._e(),
                                    t._v(t._s(t.total) + " "),
                                  ],
                                  2
                                ),
                                s(
                                  "k-dropdown-content",
                                  {
                                    ref: "dropdown",
                                    staticClass: "k-pagination-selector",
                                    on: {
                                      open: function (e) {
                                        t.$nextTick(function () {
                                          return t.$refs.page.focus();
                                        });
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      "div",
                                      { staticClass: "k-pagination-settings" },
                                      [
                                        s(
                                          "label",
                                          {
                                            attrs: { for: "k-pagination-page" },
                                          },
                                          [
                                            s("span", [
                                              t._v(t._s(t.pageLabel) + ":"),
                                            ]),
                                            s(
                                              "select",
                                              {
                                                ref: "page",
                                                attrs: {
                                                  id: "k-pagination-page",
                                                },
                                              },
                                              t._l(t.pages, function (e) {
                                                return s(
                                                  "option",
                                                  {
                                                    key: e,
                                                    domProps: {
                                                      selected: t.page === e,
                                                      value: e,
                                                    },
                                                  },
                                                  [t._v(" " + t._s(e) + " ")]
                                                );
                                              }),
                                              0
                                            ),
                                          ]
                                        ),
                                        s("k-button", {
                                          attrs: { icon: "check" },
                                          on: {
                                            click: function (e) {
                                              return t.goTo(t.$refs.page.value);
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        : [
                            s(
                              "span",
                              { staticClass: "k-pagination-details" },
                              [
                                t.total > 1
                                  ? [t._v(t._s(t.detailsText))]
                                  : t._e(),
                                t._v(t._s(t.total) + " "),
                              ],
                              2
                            ),
                          ],
                    ]
                  : t._e(),
                t.show
                  ? s("k-button", {
                      attrs: {
                        disabled: !t.hasNext,
                        tooltip: t.nextLabel,
                        icon: "angle-right",
                      },
                      on: { click: t.next },
                    })
                  : t._e(),
              ],
              2
            )
          : t._e();
      },
      Mb = [],
      Db = {
        props: {
          align: { type: String, default: "left" },
          details: { type: Boolean, default: !1 },
          dropdown: { type: Boolean, default: !0 },
          keys: { type: Boolean, default: !1 },
          limit: { type: Number, default: 10 },
          page: { type: Number, default: 1 },
          pageLabel: {
            type: String,
            default() {
              return this.$t("pagination.page");
            },
          },
          total: { type: Number, default: 0 },
          prevLabel: {
            type: String,
            default() {
              return this.$t("prev");
            },
          },
          nextLabel: {
            type: String,
            default() {
              return this.$t("next");
            },
          },
          validate: {
            type: Function,
            default() {
              return Promise.resolve();
            },
          },
        },
        data() {
          return { currentPage: this.page };
        },
        computed: {
          show() {
            return this.pages > 1;
          },
          start() {
            return (this.currentPage - 1) * this.limit + 1;
          },
          end() {
            let t = this.start - 1 + this.limit;
            return t > this.total ? this.total : t;
          },
          detailsText() {
            return 1 === this.limit
              ? this.start + " / "
              : this.start + "-" + this.end + " / ";
          },
          pages() {
            return Math.ceil(this.total / this.limit);
          },
          hasPrev() {
            return this.start > 1;
          },
          hasNext() {
            return this.end < this.total;
          },
          hasPages() {
            return this.total > this.limit;
          },
          offset() {
            return this.start - 1;
          },
        },
        watch: {
          page(t) {
            this.currentPage = parseInt(t);
          },
        },
        created() {
          !0 === this.keys &&
            window.addEventListener("keydown", this.navigate, !1);
        },
        destroyed() {
          window.removeEventListener("keydown", this.navigate, !1);
        },
        methods: {
          goTo(t) {
            this.validate(t)
              .then(() => {
                t < 1 && (t = 1),
                  t > this.pages && (t = this.pages),
                  (this.currentPage = t),
                  this.$refs.dropdown && this.$refs.dropdown.close(),
                  this.$emit("paginate", {
                    page: this.currentPage,
                    start: this.start,
                    end: this.end,
                    limit: this.limit,
                    offset: this.offset,
                  });
              })
              .catch(() => {});
          },
          prev() {
            this.goTo(this.currentPage - 1);
          },
          next() {
            this.goTo(this.currentPage + 1);
          },
          navigate(t) {
            switch (t.code) {
              case "ArrowLeft":
                this.prev();
                break;
              case "ArrowRight":
                this.next();
                break;
            }
          },
        },
      },
      Nb = Db,
      Pb = (s("a66d"), Object(c["a"])(Nb, Bb, Mb, !1, null, null, null)),
      Rb = Pb.exports,
      qb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-button-group",
          { staticClass: "k-prev-next" },
          [
            s(
              "k-button",
              t._b(
                { attrs: { icon: "angle-left" } },
                "k-button",
                t.button(t.prev),
                !1
              )
            ),
            s(
              "k-button",
              t._b(
                { attrs: { icon: "angle-right" } },
                "k-button",
                t.button(t.next),
                !1
              )
            ),
          ],
          1
        );
      },
      Fb = [],
      Ub = {
        props: {
          prev: { type: [Boolean, Object], default: !1 },
          next: { type: [Boolean, Object], default: !1 },
        },
        methods: {
          button(t) {
            return t || { disabled: !0, link: "#" };
          },
        },
      },
      Hb = Ub,
      zb = (s("7a7d"), Object(c["a"])(Hb, qb, Fb, !1, null, null, null)),
      Kb = zb.exports,
      Gb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-overlay", { ref: "overlay" }, [
          s("div", { staticClass: "k-search", attrs: { role: "search" } }, [
            s(
              "div",
              { staticClass: "k-search-input" },
              [
                s(
                  "k-dropdown",
                  { staticClass: "k-search-types" },
                  [
                    s(
                      "k-button",
                      {
                        attrs: { icon: t.currentType.icon },
                        on: {
                          click: function (e) {
                            return t.$refs.types.toggle();
                          },
                        },
                      },
                      [t._v(" " + t._s(t.currentType.label) + ": ")]
                    ),
                    s(
                      "k-dropdown-content",
                      { ref: "types" },
                      t._l(t.types, function (e, i) {
                        return s(
                          "k-dropdown-item",
                          {
                            key: i,
                            attrs: { icon: e.icon },
                            on: {
                              click: function (e) {
                                return t.changeType(i);
                              },
                            },
                          },
                          [t._v(" " + t._s(e.label) + " ")]
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.q,
                      expression: "q",
                    },
                  ],
                  ref: "input",
                  attrs: {
                    placeholder: t.$t("search") + " …",
                    "aria-label": t.$t("search"),
                    autofocus: !0,
                    type: "text",
                  },
                  domProps: { value: t.q },
                  on: {
                    input: [
                      function (e) {
                        e.target.composing || (t.q = e.target.value);
                      },
                      function (e) {
                        t.hasResults = !0;
                      },
                    ],
                    keydown: [
                      function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "down", 40, e.key, [
                            "Down",
                            "ArrowDown",
                          ])
                          ? null
                          : (e.preventDefault(), t.onDown(e));
                      },
                      function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                          ? null
                          : (e.preventDefault(), t.onUp(e));
                      },
                      function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "tab", 9, e.key, "Tab")
                          ? null
                          : (e.preventDefault(), t.onTab(e));
                      },
                      function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : t.onEnter(e);
                      },
                      function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                          ? null
                          : t.close(e);
                      },
                    ],
                  },
                }),
                s("k-button", {
                  staticClass: "k-search-close",
                  attrs: {
                    icon: t.isLoading ? "loader" : "cancel",
                    tooltip: t.$t("close"),
                  },
                  on: { click: t.close },
                }),
              ],
              1
            ),
            !t.q || (t.hasResults && !t.items.length)
              ? t._e()
              : s("div", { staticClass: "k-search-results" }, [
                  t.items.length
                    ? s(
                        "ul",
                        {
                          on: {
                            mouseout: function (e) {
                              t.selected = -1;
                            },
                          },
                        },
                        t._l(t.items, function (e, i) {
                          return s(
                            "li",
                            {
                              key: e.id,
                              attrs: { "data-selected": t.selected === i },
                              on: {
                                mouseover: function (e) {
                                  t.selected = i;
                                },
                              },
                            },
                            [
                              s(
                                "k-link",
                                {
                                  attrs: { to: e.link },
                                  on: { click: t.close },
                                },
                                [
                                  s(
                                    "span",
                                    { staticClass: "k-search-item-image" },
                                    [
                                      t.imageOptions(e.image)
                                        ? s(
                                            "k-image",
                                            t._b(
                                              {},
                                              "k-image",
                                              t.imageOptions(e.image),
                                              !1
                                            )
                                          )
                                        : s(
                                            "k-icon",
                                            t._b({}, "k-icon", e.icon, !1)
                                          ),
                                    ],
                                    1
                                  ),
                                  s(
                                    "span",
                                    { staticClass: "k-search-item-info" },
                                    [
                                      s("strong", [t._v(t._s(e.title))]),
                                      s("small", [t._v(t._s(e.info))]),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          );
                        }),
                        0
                      )
                    : t.hasResults
                    ? t._e()
                    : s("p", { staticClass: "k-search-empty" }, [
                        t._v(" " + t._s(t.$t("search.results.none")) + " "),
                      ]),
                ]),
          ]),
        ]);
      },
      Wb = [],
      Yb = {
        props: {
          types: {
            type: Object,
            default() {
              return {};
            },
          },
          type: { type: String },
        },
        data() {
          return {
            isLoading: !1,
            hasResults: !0,
            items: [],
            currentType: this.getType(this.type),
            q: null,
            selected: -1,
          };
        },
        watch: {
          q() {
            this.search(this.q);
          },
          currentType() {
            this.search(this.q);
          },
          type() {
            this.currentType = this.getType(this.type);
          },
          types() {
            this.currentType = this.getType(this.type);
          },
        },
        created() {
          (this.search = V(this.search, 250)),
            this.$events.$on("keydown.cmd.shift.f", this.open);
        },
        destroyed() {
          this.$events.$off("keydown.cmd.shift.f", this.open);
        },
        methods: {
          changeType(t) {
            (this.currentType = this.getType(t)),
              this.$nextTick(() => {
                this.$refs.input.focus();
              });
          },
          close() {
            this.$refs.overlay.close(),
              (this.hasResults = !0),
              (this.items = []),
              (this.q = null);
          },
          getType(t) {
            return this.types[t] || this.types[Object.keys(this.types)[0]];
          },
          imageOptions(t) {
            return Ep(t);
          },
          navigate(t) {
            this.$go(t.link), this.close();
          },
          onDown() {
            this.selected < this.items.length - 1 && this.selected++;
          },
          onEnter() {
            let t = this.items[this.selected] || this.items[0];
            t && this.navigate(t);
          },
          onTab() {
            const t = this.items[this.selected];
            t && this.navigate(t);
          },
          onUp() {
            this.selected >= 0 && this.selected--;
          },
          open() {
            this.$refs.overlay.open();
          },
          async search(t) {
            (this.isLoading = !0), this.$refs.types && this.$refs.types.close();
            try {
              if ("" === t) throw new Error();
              this.items = await this.currentType.search({
                query: t,
                limit: O.search.limit,
              });
            } catch (e) {
              this.items = [];
            } finally {
              (this.selected = -1),
                (this.isLoading = !1),
                (this.hasResults = this.items.length > 0);
            }
          },
        },
      },
      Vb = Yb,
      Jb = (s("4cb2"), Object(c["a"])(Vb, Gb, Wb, !1, null, null, null)),
      Zb = Jb.exports,
      Xb = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          {
            ref: "button",
            staticClass: "k-tag",
            attrs: { tabindex: "0" },
            on: {
              keydown: function (e) {
                return !e.type.indexOf("key") &&
                  t._k(e.keyCode, "delete", [8, 46], e.key, [
                    "Backspace",
                    "Delete",
                    "Del",
                  ])
                  ? null
                  : (e.preventDefault(), t.remove(e));
              },
            },
          },
          [
            s("span", { staticClass: "k-tag-text" }, [t._t("default")], 2),
            t.removable
              ? s(
                  "span",
                  { staticClass: "k-tag-toggle", on: { click: t.remove } },
                  [t._v("×")]
                )
              : t._e(),
          ]
        );
      },
      Qb = [],
      tk = {
        props: { removable: Boolean },
        methods: {
          remove() {
            this.removable && this.$emit("remove");
          },
          focus() {
            this.$refs.button.focus();
          },
        },
      },
      ek = tk,
      sk = (s("021f"), Object(c["a"])(ek, Xb, Qb, !1, null, null, null)),
      ik = sk.exports,
      nk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.user && t.view
          ? s(
              "div",
              { staticClass: "k-topbar" },
              [
                s("k-view", [
                  s(
                    "div",
                    { staticClass: "k-topbar-wrapper" },
                    [
                      s(
                        "k-dropdown",
                        { staticClass: "k-topbar-menu" },
                        [
                          s(
                            "k-button",
                            {
                              staticClass:
                                "k-topbar-button k-topbar-menu-button",
                              attrs: { tooltip: t.$t("menu"), icon: "bars" },
                              on: {
                                click: function (e) {
                                  return t.$refs.menu.toggle();
                                },
                              },
                            },
                            [s("k-icon", { attrs: { type: "angle-down" } })],
                            1
                          ),
                          s(
                            "k-dropdown-content",
                            { ref: "menu", staticClass: "k-topbar-menu" },
                            [
                              s(
                                "ul",
                                [
                                  t._l(t.views, function (e, i) {
                                    return [
                                      !1 !== t.viewEntryInMenu(i, e)
                                        ? s(
                                            "li",
                                            {
                                              key: "menu-item-" + i,
                                              attrs: {
                                                "aria-current":
                                                  t.$store.state.view === i,
                                              },
                                            },
                                            [
                                              s(
                                                "k-dropdown-item",
                                                {
                                                  attrs: {
                                                    disabled:
                                                      "disabled" ===
                                                      t.viewEntryInMenu(i, e),
                                                    icon: e.icon,
                                                    link: e.link,
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(t.menuTitle(e, i)) +
                                                      " "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ];
                                  }),
                                  s("li", [s("hr")]),
                                  s(
                                    "li",
                                    {
                                      attrs: {
                                        "aria-current":
                                          "account" === t.$route.meta.view,
                                      },
                                    },
                                    [
                                      s(
                                        "k-dropdown-item",
                                        {
                                          attrs: {
                                            icon: "account",
                                            link: "/account",
                                          },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(t.$t("view.account")) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  s("li", [s("hr")]),
                                  s(
                                    "li",
                                    [
                                      s(
                                        "k-dropdown-item",
                                        {
                                          attrs: {
                                            icon: "logout",
                                            link: "/logout",
                                          },
                                        },
                                        [t._v(" " + t._s(t.$t("logout")) + " ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                2
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      t.view
                        ? s(
                            "k-link",
                            {
                              staticClass:
                                "k-topbar-button k-topbar-view-button",
                              attrs: { to: t.view.link },
                            },
                            [
                              s("k-icon", { attrs: { type: t.view.icon } }),
                              t._v(" " + t._s(t.breadcrumbTitle) + " "),
                            ],
                            1
                          )
                        : t._e(),
                      t.$store.state.breadcrumb.length > 1
                        ? s(
                            "k-dropdown",
                            { staticClass: "k-topbar-breadcrumb-menu" },
                            [
                              s(
                                "k-button",
                                {
                                  staticClass: "k-topbar-button",
                                  on: {
                                    click: function (e) {
                                      return t.$refs.crumb.toggle();
                                    },
                                  },
                                },
                                [
                                  t._v(" … "),
                                  s("k-icon", {
                                    attrs: { type: "angle-down" },
                                  }),
                                ],
                                1
                              ),
                              s(
                                "k-dropdown-content",
                                { ref: "crumb" },
                                [
                                  s(
                                    "k-dropdown-item",
                                    {
                                      attrs: {
                                        icon: t.view.icon,
                                        link: t.view.link,
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.$t(
                                              "view." + t.$store.state.view,
                                              t.view.label
                                            )
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  t._l(
                                    t.$store.state.breadcrumb,
                                    function (e, i) {
                                      return s(
                                        "k-dropdown-item",
                                        {
                                          key: "crumb-" + i + "-dropdown",
                                          attrs: {
                                            icon: t.view.icon,
                                            link: e.link,
                                          },
                                        },
                                        [t._v(" " + t._s(e.label) + " ")]
                                      );
                                    }
                                  ),
                                ],
                                2
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      s(
                        "nav",
                        { staticClass: "k-topbar-crumbs" },
                        t._l(t.$store.state.breadcrumb, function (e, i) {
                          return s(
                            "k-link",
                            { key: "crumb-" + i, attrs: { to: e.link } },
                            [t._v(" " + t._s(e.label) + " ")]
                          );
                        }),
                        1
                      ),
                      s(
                        "div",
                        { staticClass: "k-topbar-signals" },
                        [
                          s(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.$store.state.isLoading,
                                  expression: "$store.state.isLoading",
                                },
                              ],
                              staticClass: "k-topbar-loader",
                            },
                            [
                              s("svg", { attrs: { viewBox: "0 0 16 18" } }, [
                                s("path", {
                                  attrs: {
                                    fill: "white",
                                    d: "M8,0 L16,4.50265232 L16,13.5112142 L8,18.0138665 L0,13.5112142 L0,4.50265232 L8,0 Z M2.10648757,5.69852516 L2.10648757,12.3153414 L8,15.632396 L13.8935124,12.3153414 L13.8935124,5.69852516 L8,2.38147048 L2.10648757,5.69852516 Z",
                                  },
                                }),
                              ]),
                            ]
                          ),
                          t.notification
                            ? [
                                s(
                                  "k-button",
                                  {
                                    staticClass:
                                      "k-topbar-notification k-topbar-signals-button",
                                    attrs: { theme: "positive" },
                                    on: {
                                      click: function (e) {
                                        return t.$store.dispatch(
                                          "notification/close"
                                        );
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      " " + t._s(t.notification.message) + " "
                                    ),
                                  ]
                                ),
                              ]
                            : t.unregistered
                            ? [
                                s(
                                  "div",
                                  { staticClass: "k-registration" },
                                  [
                                    s("p", [
                                      t._v(t._s(t.$t("license.unregistered"))),
                                    ]),
                                    s(
                                      "k-button",
                                      {
                                        staticClass: "k-topbar-signals-button",
                                        attrs: {
                                          responsive: !0,
                                          tooltip: t.$t("license.unregistered"),
                                          icon: "key",
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.$emit("register");
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(t.$t("license.register")) +
                                            " "
                                        ),
                                      ]
                                    ),
                                    s(
                                      "k-button",
                                      {
                                        staticClass: "k-topbar-signals-button",
                                        attrs: {
                                          responsive: !0,
                                          link: "https://getkirby.com/buy",
                                          target: "_blank",
                                          icon: "cart",
                                        },
                                      },
                                      [
                                        t._v(
                                          " " + t._s(t.$t("license.buy")) + " "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            : t._e(),
                          [s("k-form-indicator")],
                          s("k-button", {
                            staticClass: "k-topbar-signals-button",
                            attrs: { tooltip: t.$t("search"), icon: "search" },
                            on: {
                              click: function (e) {
                                return t.$emit("search");
                              },
                            },
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            )
          : t._e();
      },
      ak = [],
      rk = {
        site: { link: "/site", icon: "page", menu: !0 },
        users: { link: "/users", icon: "users", menu: !0 },
        settings: { link: "/settings", icon: "settings", menu: !0 },
        account: { link: "/account", icon: "users", menu: !1 },
        resetPassword: { link: "/reset-password", icon: "key", menu: !1 },
        ...window.panel.plugins.views,
      },
      ok = {
        computed: {
          breadcrumbTitle() {
            let t = this.$t("view." + this.$store.state.view, this.view.label);
            return (
              ("site" === this.$store.state.view &&
                this.$store.state.system.info.title) ||
              t
            );
          },
          view() {
            return rk[this.$store.state.view];
          },
          views() {
            return rk;
          },
          user() {
            return this.$store.state.user.current;
          },
          notification() {
            return this.$store.state.notification.type &&
              "error" !== this.$store.state.notification.type
              ? this.$store.state.notification
              : null;
          },
          unregistered() {
            return !this.$store.state.system.info.license;
          },
        },
        methods: {
          menuTitle(t, e) {
            let s = this.$t("view." + e, t.label);
            return ("site" === e && this.$store.state.system.info.site) || s;
          },
          viewEntryInMenu(t, e) {
            let s = e.menu;
            return (
              "function" === typeof s && (s = s(this)),
              [!0, !1, "disabled"].indexOf(s) >= 0
                ? s
                : !1 !== this.$permissions.access[t] || "disabled"
            );
          },
        },
      },
      lk = ok,
      ck = (s("1e3b"), Object(c["a"])(lk, nk, ak, !1, null, null, null)),
      uk = ck.exports,
      dk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return 0 === t.tabs.length
          ? s("k-box", { attrs: { text: t.empty, theme: "info" } })
          : s(
              "k-grid",
              { staticClass: "k-sections", attrs: { gutter: "large" } },
              t._l(t.currentTab.columns, function (e, i) {
                return s(
                  "k-column",
                  {
                    key: t.parent + "-column-" + i,
                    attrs: { width: e.width, sticky: e.sticky },
                  },
                  [
                    t._l(e.sections, function (n, a) {
                      return [
                        t.meetsCondition(n)
                          ? [
                              t.exists(n.type)
                                ? s(
                                    "k-" + n.type + "-section",
                                    t._b(
                                      {
                                        key:
                                          t.parent +
                                          "-column-" +
                                          i +
                                          "-section-" +
                                          a +
                                          "-" +
                                          t.blueprint,
                                        tag: "component",
                                        class:
                                          "k-section k-section-name-" + n.name,
                                        attrs: {
                                          name: n.name,
                                          parent: t.parent,
                                          blueprint: t.blueprint,
                                          column: e.width,
                                        },
                                        on: {
                                          submit: function (e) {
                                            return t.$emit("submit", e);
                                          },
                                        },
                                      },
                                      "component",
                                      n,
                                      !1
                                    )
                                  )
                                : [
                                    s("k-box", {
                                      key:
                                        t.parent +
                                        "-column-" +
                                        i +
                                        "-section-" +
                                        a,
                                      attrs: {
                                        text: t.$t(
                                          "error.section.type.invalid",
                                          { type: n.type }
                                        ),
                                        theme: "negative",
                                      },
                                    }),
                                  ],
                            ]
                          : t._e(),
                      ];
                    }),
                  ],
                  2
                );
              }),
              1
            );
      },
      pk = [],
      hk = {
        props: {
          empty: String,
          blueprint: String,
          parent: String,
          tab: String,
          tabs: Array,
        },
        computed: {
          currentTab() {
            return (
              this.tabs.find((t) => t.name === this.tab) || this.tabs[0] || {}
            );
          },
          content() {
            return this.$store.getters["content/values"]();
          },
        },
        methods: {
          exists(t) {
            return this.$helper.isComponent(`k-${t}-section`);
          },
          meetsCondition(t) {
            if (!t.when) return !0;
            let e = !0;
            return (
              Object.keys(t.when).forEach((s) => {
                const i = this.content[s.toLowerCase()],
                  n = t.when[s];
                i !== n && (e = !1);
              }),
              e
            );
          },
        },
      },
      mk = hk,
      fk = (s("6bcd"), Object(c["a"])(mk, dk, pk, !1, null, null, null)),
      gk = fk.exports,
      bk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "section",
          { staticClass: "k-info-section" },
          [
            s("k-headline", { staticClass: "k-info-section-headline" }, [
              t._v(" " + t._s(t.headline) + " "),
            ]),
            s(
              "k-box",
              { attrs: { theme: t.theme } },
              [s("k-text", { domProps: { innerHTML: t._s(t.text) } })],
              1
            ),
          ],
          1
        );
      },
      kk = [],
      vk = {
        props: {
          blueprint: String,
          help: String,
          name: String,
          parent: String,
        },
        methods: {
          load() {
            return this.$api.get(this.parent + "/sections/" + this.name);
          },
        },
      },
      $k = {
        mixins: [vk],
        data() {
          return { headline: null, text: null, theme: null };
        },
        created() {
          this.load().then((t) => {
            (this.headline = t.options.headline),
              (this.text = t.options.text),
              (this.theme = t.options.theme || "info");
          });
        },
      },
      yk = $k,
      _k = (s("4333"), Object(c["a"])(yk, bk, kk, !1, null, null, null)),
      wk = _k.exports,
      xk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return !1 === t.isLoading
          ? s(
              "section",
              {
                staticClass: "k-pages-section",
                attrs: { "data-processing": t.isProcessing },
              },
              [
                s(
                  "header",
                  { staticClass: "k-section-header" },
                  [
                    s("k-headline", { attrs: { link: t.options.link } }, [
                      t._v(" " + t._s(t.headline) + " "),
                      t.options.min
                        ? s(
                            "abbr",
                            { attrs: { title: t.$t("section.required") } },
                            [t._v("*")]
                          )
                        : t._e(),
                    ]),
                    t.add
                      ? s(
                          "k-button-group",
                          [
                            s(
                              "k-button",
                              {
                                attrs: { icon: "add" },
                                on: { click: t.create },
                              },
                              [t._v(" " + t._s(t.$t("add")) + " ")]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                  ],
                  1
                ),
                t.error
                  ? [
                      s(
                        "k-box",
                        { attrs: { theme: "negative" } },
                        [
                          s("k-text", { attrs: { size: "small" } }, [
                            s("strong", [
                              t._v(
                                " " +
                                  t._s(
                                    t.$t("error.section.notLoaded", {
                                      name: t.name,
                                    })
                                  ) +
                                  ": "
                              ),
                            ]),
                            t._v(" " + t._s(t.error) + " "),
                          ]),
                        ],
                        1
                      ),
                    ]
                  : [
                      t.data.length
                        ? s("k-collection", {
                            attrs: {
                              layout: t.options.layout,
                              help: t.help,
                              items: t.data,
                              pagination: t.pagination,
                              sortable: !t.isProcessing && t.options.sortable,
                              size: t.options.size,
                              "data-invalid": t.isInvalid,
                            },
                            on: {
                              change: t.sort,
                              paginate: t.paginate,
                              action: t.action,
                            },
                          })
                        : [
                            s(
                              "k-empty",
                              {
                                attrs: {
                                  layout: t.options.layout,
                                  "data-invalid": t.isInvalid,
                                  icon: "page",
                                },
                                on: { click: t.create },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t.options.empty || t.$t("pages.empty")
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                            s(
                              "footer",
                              { staticClass: "k-collection-footer" },
                              [
                                t.help
                                  ? s("k-text", {
                                      staticClass: "k-collection-help",
                                      attrs: { theme: "help" },
                                      domProps: { innerHTML: t._s(t.help) },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ],
                      s("k-page-create-dialog", { ref: "create" }),
                      s("k-page-duplicate-dialog", { ref: "duplicate" }),
                      s("k-page-rename-dialog", {
                        ref: "rename",
                        on: { success: t.update },
                      }),
                      s("k-page-sort-dialog", {
                        ref: "sort",
                        on: { success: t.update },
                      }),
                      s("k-page-status-dialog", {
                        ref: "status",
                        on: { success: t.update },
                      }),
                      s("k-page-template-dialog", {
                        ref: "template",
                        on: { success: t.update },
                      }),
                      s("k-page-remove-dialog", {
                        ref: "remove",
                        on: { success: t.update },
                      }),
                    ],
              ],
              2
            )
          : t._e();
      },
      Ok = [],
      Ck = {
        inheritAttrs: !1,
        props: {
          blueprint: String,
          column: String,
          parent: String,
          name: String,
        },
        data() {
          return {
            data: [],
            error: null,
            isLoading: !1,
            isProcessing: !1,
            options: {
              empty: null,
              headline: null,
              help: null,
              layout: "list",
              link: null,
              max: null,
              min: null,
              size: null,
              sortable: null,
            },
            pagination: { page: null },
          };
        },
        computed: {
          headline() {
            return this.options.headline || " ";
          },
          help() {
            return this.options.help;
          },
          isInvalid() {
            return (
              !!(this.options.min && this.data.length < this.options.min) ||
              !!(this.options.max && this.data.length > this.options.max)
            );
          },
          language() {
            return this.$store.state.languages.current;
          },
          paginationId() {
            return "kirby$pagination$" + this.parent + "/" + this.name;
          },
        },
        watch: {
          language() {
            this.reload();
          },
        },
        methods: {
          items(t) {
            return t;
          },
          async load(t) {
            t || (this.isLoading = !0),
              (this.isProcessing = !0),
              null === this.pagination.page &&
                (this.pagination.page =
                  localStorage.getItem(this.paginationId) || 1);
            try {
              const t = await this.$api.get(
                this.parent + "/sections/" + this.name,
                { page: this.pagination.page }
              );
              (this.options = t.options),
                (this.pagination = t.pagination),
                (this.data = this.items(t.data));
            } catch (e) {
              this.error = e.message;
            } finally {
              (this.isProcessing = !1), (this.isLoading = !1);
            }
          },
          paginate(t) {
            localStorage.setItem(this.paginationId, t.page),
              (this.pagination = t),
              this.reload();
          },
          async reload() {
            await this.load(!0);
          },
        },
      },
      Sk = {
        mixins: [Ck],
        computed: {
          add() {
            return this.options.add && this.$permissions.pages.create;
          },
        },
        created() {
          this.load(),
            this.$events.$on("page.changeStatus", this.reload),
            this.$events.$on("page.sort", this.reload);
        },
        destroyed() {
          this.$events.$off("page.changeStatus", this.reload),
            this.$events.$off("page.sort", this.reload);
        },
        methods: {
          create() {
            this.add &&
              this.$refs.create.open(
                this.options.link || this.parent,
                this.parent + "/blueprints",
                this.name
              );
          },
          action(t, e) {
            switch (e) {
              case "duplicate":
                this.$refs.duplicate.open(t.id);
                break;
              case "preview": {
                let e = window.open("", "_blank");
                (e.document.write = "..."),
                  this.$api.pages
                    .preview(t.id)
                    .then((t) => {
                      e.location.href = t;
                    })
                    .catch((t) => {
                      this.$store.dispatch("notification/error", t);
                    });
                break;
              }
              case "rename":
                this.$refs.rename.open(t.id, t.permissions, "title");
                break;
              case "url":
                this.$refs.rename.open(t.id, t.permissions, "slug");
                break;
              case "sort":
                this.$refs.sort.open(t.id);
                break;
              case "status":
                this.$refs.status.open(t.id);
                break;
              case "template":
                this.$refs.template.open(t.id);
                break;
              case "remove":
                if (this.data.length <= this.options.min) {
                  const t = this.options.min > 1 ? "plural" : "singular";
                  this.$store.dispatch("notification/error", {
                    message: this.$t("error.section.pages.min." + t, {
                      section: this.options.headline || this.name,
                      min: this.options.min,
                    }),
                  });
                  break;
                }
                this.$refs.remove.open(t.id);
                break;
              default:
                throw new Error("Invalid action");
            }
          },
          items(t) {
            return t.map((t) => {
              const e = !1 !== t.permissions.changeStatus;
              return (
                (t.statusIcon = {
                  status: t.status,
                  tooltip: this.$t("page.status"),
                  disabled: !e,
                  click: () => {
                    this.action(t, "status");
                  },
                }),
                (t.sortable = t.permissions.sort && this.options.sortable),
                (t.column = this.column),
                (t.options = async (e) => {
                  try {
                    const s = await this.$api.pages.options(
                      t.id,
                      "list",
                      t.sortable
                    );
                    e(s);
                  } catch (s) {
                    this.$store.dispatch("notification/error", s);
                  }
                }),
                t
              );
            });
          },
          async sort(t) {
            let e = null;
            if ((t.added && (e = "added"), t.moved && (e = "moved"), e)) {
              this.isProcessing = !0;
              const i = t[e].element,
                n = t[e].newIndex + 1 + this.pagination.offset;
              try {
                await this.$api.pages.status(i.id, "listed", n),
                  this.$store.dispatch("notification/success", ":)"),
                  this.$events.$emit("page.sort", i);
              } catch (s) {
                this.$store.dispatch("notification/error", {
                  message: s.message,
                  details: s.details,
                }),
                  await this.reload();
              } finally {
                this.isProcessing = !1;
              }
            }
          },
          update() {
            this.reload(), this.$events.$emit("model.update");
          },
        },
      },
      Ek = Sk,
      jk = (s("224d"), Object(c["a"])(Ek, xk, Ok, !1, null, null, null)),
      Tk = jk.exports,
      Lk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return !1 === t.isLoading
          ? s(
              "section",
              {
                staticClass: "k-files-section",
                attrs: { "data-processing": t.isProcessing },
              },
              [
                s(
                  "header",
                  { staticClass: "k-section-header" },
                  [
                    s("k-headline", [
                      t._v(" " + t._s(t.headline) + " "),
                      t.options.min
                        ? s(
                            "abbr",
                            { attrs: { title: t.$t("section.required") } },
                            [t._v("*")]
                          )
                        : t._e(),
                    ]),
                    t.add
                      ? s(
                          "k-button-group",
                          [
                            s(
                              "k-button",
                              {
                                attrs: { icon: "upload" },
                                on: { click: t.upload },
                              },
                              [t._v(" " + t._s(t.$t("add")) + " ")]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                  ],
                  1
                ),
                t.error
                  ? [
                      s(
                        "k-box",
                        { attrs: { theme: "negative" } },
                        [
                          s("k-text", { attrs: { size: "small" } }, [
                            s("strong", [
                              t._v(
                                t._s(
                                  t.$t("error.section.notLoaded", {
                                    name: t.name,
                                  })
                                ) + ":"
                              ),
                            ]),
                            t._v(" " + t._s(t.error) + " "),
                          ]),
                        ],
                        1
                      ),
                    ]
                  : [
                      s(
                        "k-dropzone",
                        {
                          attrs: { disabled: !1 === t.add },
                          on: { drop: t.drop },
                        },
                        [
                          t.data.length
                            ? s("k-collection", {
                                attrs: {
                                  help: t.help,
                                  items: t.data,
                                  layout: t.options.layout,
                                  pagination: t.pagination,
                                  sortable:
                                    !t.isProcessing && t.options.sortable,
                                  size: t.options.size,
                                  "data-invalid": t.isInvalid,
                                },
                                on: {
                                  sort: t.sort,
                                  paginate: t.paginate,
                                  action: t.action,
                                },
                              })
                            : [
                                s(
                                  "k-empty",
                                  {
                                    attrs: {
                                      layout: t.options.layout,
                                      "data-invalid": t.isInvalid,
                                      icon: "image",
                                    },
                                    on: {
                                      click: function (e) {
                                        t.add && t.upload();
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.options.empty || t.$t("files.empty")
                                        ) +
                                        " "
                                    ),
                                  ]
                                ),
                                s(
                                  "footer",
                                  { staticClass: "k-collection-footer" },
                                  [
                                    t.help
                                      ? s("k-text", {
                                          staticClass: "k-collection-help",
                                          attrs: { theme: "help" },
                                          domProps: { innerHTML: t._s(t.help) },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                        ],
                        2
                      ),
                      s("k-file-rename-dialog", {
                        ref: "rename",
                        on: { success: t.update },
                      }),
                      s("k-file-remove-dialog", {
                        ref: "remove",
                        on: { success: t.update },
                      }),
                      s("k-file-sort-dialog", {
                        ref: "sort",
                        on: { success: t.reload },
                      }),
                      s("k-upload", {
                        ref: "upload",
                        on: { success: t.uploaded, error: t.reload },
                      }),
                    ],
              ],
              2
            )
          : t._e();
      },
      Ik = [],
      Ak = {
        mixins: [Ck],
        computed: {
          add() {
            return (
              !(
                !this.$permissions.files.create || !1 === this.options.upload
              ) && this.options.upload
            );
          },
        },
        created() {
          this.load(),
            this.$events.$on("model.update", this.reload),
            this.$events.$on("file.sort", this.reload);
        },
        destroyed() {
          this.$events.$off("model.update", this.reload),
            this.$events.$off("file.sort", this.reload);
        },
        methods: {
          action(t, e) {
            switch (e) {
              case "edit":
                this.$go(t.link);
                break;
              case "download":
                window.open(t.url);
                break;
              case "rename":
                this.$refs.rename.open(t.parent, t.filename);
                break;
              case "replace":
                this.$refs.upload.open({
                  url: O.api + "/" + this.$api.files.url(t.parent, t.filename),
                  accept: "." + t.extension + "," + t.mime,
                  multiple: !1,
                });
                break;
              case "remove":
                if (this.data.length <= this.options.min) {
                  const t = this.options.min > 1 ? "plural" : "singular";
                  this.$store.dispatch("notification/error", {
                    message: this.$t("error.section.files.min." + t, {
                      section: this.options.headline || this.name,
                      min: this.options.min,
                    }),
                  });
                  break;
                }
                this.$refs.remove.open(t.parent, t.filename);
                break;
              case "sort":
                this.$refs.sort.open(t.parent, t, this.options.apiUrl);
                break;
            }
          },
          drop(t) {
            if (!1 === this.add) return !1;
            this.$refs.upload.drop(t, {
              ...this.add,
              url: O.api + "/" + this.add.api,
            });
          },
          items(t) {
            return t.map(
              (t) => (
                (t.sortable = this.options.sortable),
                (t.column = this.column),
                (t.options = async (e) => {
                  try {
                    const s = await this.$api.files.options(
                      t.parent,
                      t.filename,
                      "list",
                      this.options.sortable
                    );
                    e(s);
                  } catch (s) {
                    this.$store.dispatch("notification/error", s);
                  }
                }),
                t
              )
            );
          },
          replace(t) {
            this.$refs.upload.open({
              url: O.api + "/" + this.$api.files.url(t.parent, t.filename),
              accept: t.mime,
              multiple: !1,
            });
          },
          async sort(t) {
            if (!1 === this.options.sortable) return !1;
            (this.isProcessing = !0), (t = t.map((t) => t.id));
            try {
              await this.$api.patch(this.options.apiUrl + "/files/sort", {
                files: t,
                index: this.pagination.offset,
              }),
                this.$store.dispatch("notification/success", ":)"),
                this.$events.$emit("file.sort");
            } catch (e) {
              this.reload(),
                this.$store.dispatch("notification/error", e.message);
            } finally {
              this.isProcessing = !1;
            }
          },
          update() {
            this.$events.$emit("model.update");
          },
          upload() {
            if (!1 === this.add) return !1;
            this.$refs.upload.open({
              ...this.add,
              url: O.api + "/" + this.add.api,
            });
          },
          uploaded() {
            this.$events.$emit("file.create"),
              this.$events.$emit("model.update"),
              this.$store.dispatch("notification/success", ":)");
          },
        },
      },
      Bk = Ak,
      Mk = (s("b7a8"), Object(c["a"])(Bk, Lk, Ik, !1, null, null, null)),
      Dk = Mk.exports,
      Nk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isLoading
          ? t._e()
          : s(
              "section",
              { staticClass: "k-fields-section" },
              [
                t.issue
                  ? [
                      s(
                        "k-headline",
                        { staticClass: "k-fields-issue-headline" },
                        [t._v(" Error ")]
                      ),
                      s("k-box", {
                        attrs: {
                          text: t.issue.message,
                          html: !1,
                          theme: "negative",
                        },
                      }),
                    ]
                  : t._e(),
                s("k-form", {
                  attrs: {
                    fields: t.fields,
                    validate: !0,
                    value: t.values,
                    disabled: null !== t.$store.state.content.status.lock,
                  },
                  on: { input: t.input, submit: t.onSubmit },
                }),
              ],
              2
            );
      },
      Pk = [],
      Rk = {
        mixins: [vk],
        inheritAttrs: !1,
        data() {
          return { fields: {}, isLoading: !0, issue: null };
        },
        computed: {
          language() {
            return this.$store.state.languages.current;
          },
          values() {
            return this.$store.getters["content/values"]();
          },
        },
        watch: {
          language() {
            this.fetch();
          },
        },
        created() {
          (this.input = V(this.input, 50)), this.fetch();
        },
        methods: {
          input(t, e, s) {
            this.$store.dispatch("content/update", [s, t[s]]);
          },
          async fetch() {
            try {
              const t = await this.load();
              (this.fields = t.fields),
                Object.keys(this.fields).forEach((t) => {
                  (this.fields[t].section = this.name),
                    (this.fields[t].endpoints = {
                      field: this.parent + "/fields/" + t,
                      section: this.parent + "/sections/" + this.name,
                      model: this.parent,
                    });
                });
            } catch (t) {
              this.issue = t;
            } finally {
              this.isLoading = !1;
            }
          },
          onSubmit(t) {
            this.$events.$emit("keydown.cmd.s", t);
          },
        },
      },
      qk = Rk,
      Fk = (s("7d5d"), Object(c["a"])(qk, Nk, Pk, !1, null, null, null)),
      Uk = Fk.exports,
      Hk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-error-view",
          { staticClass: "k-browser-view" },
          [
            s("p", [
              t._v(
                " We are really sorry, but your browser does not support all features required for the Kirby Panel. "
              ),
            ]),
            !1 === t.hasFetchSupport
              ? [
                  s("p", [
                    s("strong", [t._v("Fetch")]),
                    s("br"),
                    t._v(
                      " We use Javascript's new Fetch API. You can find a list of supported browsers for this feature on "
                    ),
                    s("strong", [
                      s(
                        "a",
                        { attrs: { href: "https://caniuse.com/#feat=fetch" } },
                        [t._v("caniuse.com")]
                      ),
                    ]),
                  ]),
                ]
              : t._e(),
            !1 === t.hasGridSupport
              ? [
                  s("p", [
                    s("strong", [t._v("CSS Grid")]),
                    s("br"),
                    t._v(
                      " We use CSS Grids for all our layouts. You can find a list of supported browsers for this feature on "
                    ),
                    s("strong", [
                      s(
                        "a",
                        {
                          attrs: { href: "https://caniuse.com/#feat=css-grid" },
                        },
                        [t._v("caniuse.com")]
                      ),
                    ]),
                  ]),
                ]
              : t._e(),
          ],
          2
        );
      },
      zk = [],
      Kk = {
        grid() {
          return !(!window.CSS || !window.CSS.supports("display", "grid"));
        },
        fetch() {
          return void 0 !== window.fetch;
        },
        all() {
          return this.fetch() && this.grid();
        },
      },
      Gk = {
        computed: {
          hasFetchSupport() {
            return Kk.fetch();
          },
          hasGridSupport() {
            return Kk.grid();
          },
        },
        created() {
          this.$store.dispatch("content/current", null),
            Kk.all() && this.$go("/");
        },
      },
      Wk = Gk,
      Yk = (s("d6fc"), Object(c["a"])(Wk, Hk, zk, !1, null, null, null)),
      Vk = Yk.exports,
      Jk = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-error-boundary",
          {
            key: t.plugin,
            scopedSlots: t._u([
              {
                key: "error",
                fn: function (e) {
                  var i = e.error;
                  return s("k-error-view", {}, [
                    t._v(" " + t._s(i.message || i) + " "),
                  ]);
                },
              },
            ]),
          },
          [
            s(
              "k-" + t.plugin + "-plugin-view",
              t._b({ tag: "component" }, "component", t.$props, !1)
            ),
          ],
          1
        );
      },
      Zk = [],
      Xk = {
        props: { plugin: String, hash: String },
        beforeRouteEnter(t, e, s) {
          s((t) => {
            t.$store.dispatch("breadcrumb", []),
              t.$store.dispatch("content/current", null);
          });
        },
      },
      Qk = Xk,
      tv = Object(c["a"])(Qk, Jk, Zk, !1, null, null, null),
      ev = tv.exports,
      sv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-view", { staticClass: "k-error-view" }, [
          s(
            "div",
            { staticClass: "k-error-view-content" },
            [
              s("k-text", [
                s(
                  "p",
                  [
                    s("k-icon", {
                      staticClass: "k-error-view-icon",
                      attrs: { type: "alert" },
                    }),
                  ],
                  1
                ),
                s("p", [t._t("default")], 2),
              ]),
            ],
            1
          ),
        ]);
      },
      iv = [],
      nv = (s("d221"), {}),
      av = Object(c["a"])(nv, sv, iv, !1, null, null, null),
      rv = av.exports,
      ov = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.issue
          ? s("k-error-view", [t._v(" " + t._s(t.issue.message) + " ")])
          : null !== t.file.id
          ? s(
              "div",
              { staticClass: "k-file-view" },
              [
                s("k-file-preview", { attrs: { file: t.file } }),
                s(
                  "k-view",
                  {
                    staticClass: "k-file-content",
                    attrs: { "data-locked": t.isLocked },
                  },
                  [
                    s(
                      "k-header",
                      {
                        attrs: {
                          editable: t.permissions.changeName && !t.isLocked,
                          tab: t.tab,
                          tabs: t.tabs,
                        },
                        on: {
                          edit: function (e) {
                            return t.action("rename");
                          },
                        },
                      },
                      [
                        t._v(" " + t._s(t.file.filename) + " "),
                        s(
                          "k-button-group",
                          { attrs: { slot: "left" }, slot: "left" },
                          [
                            s(
                              "k-button",
                              {
                                attrs: {
                                  link: t.file.url,
                                  responsive: !0,
                                  icon: "open",
                                  target: "_blank",
                                },
                              },
                              [t._v(" " + t._s(t.$t("open")) + " ")]
                            ),
                            s(
                              "k-dropdown",
                              [
                                s(
                                  "k-button",
                                  {
                                    attrs: {
                                      responsive: !0,
                                      disabled: t.isLocked,
                                      icon: "cog",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.$refs.settings.toggle();
                                      },
                                    },
                                  },
                                  [t._v(" " + t._s(t.$t("settings")) + " ")]
                                ),
                                s("k-dropdown-content", {
                                  ref: "settings",
                                  attrs: { options: t.options },
                                  on: { action: t.action },
                                }),
                              ],
                              1
                            ),
                            s("k-languages-dropdown"),
                          ],
                          1
                        ),
                        t.file.id
                          ? s("k-prev-next", {
                              attrs: {
                                slot: "right",
                                prev: t.prev,
                                next: t.next,
                              },
                              slot: "right",
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    t.file.id
                      ? s("k-sections", {
                          attrs: {
                            blueprint: t.file.blueprint.name,
                            empty: t.$t("file.blueprint", {
                              template: t.$esc(t.file.blueprint.name),
                            }),
                            parent: t.parent,
                            tab: t.tab,
                            tabs: t.tabs,
                          },
                        })
                      : t._e(),
                    s("k-file-rename-dialog", {
                      ref: "rename",
                      on: { success: t.renamed },
                    }),
                    s("k-file-remove-dialog", {
                      ref: "remove",
                      on: { success: t.deleted },
                    }),
                    s("k-upload", {
                      ref: "upload",
                      attrs: {
                        url: t.uploadApi,
                        accept: t.file.mime,
                        multiple: !1,
                      },
                      on: { success: t.uploaded },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e();
      },
      lv = [],
      cv = {
        computed: {
          isLocked() {
            return null !== this.$store.state.content.status.lock;
          },
        },
        created() {
          this.fetch(),
            this.$events.$on("model.reload", this.fetch),
            this.$events.$on("keydown.left", this.toPrev),
            this.$events.$on("keydown.right", this.toNext);
        },
        destroyed() {
          this.$events.$off("model.reload", this.fetch),
            this.$events.$off("keydown.left", this.toPrev),
            this.$events.$off("keydown.right", this.toNext);
        },
        methods: {
          toPrev(t) {
            this.prev &&
              "body" === t.target.localName &&
              this.$router.push(this.prev.link);
          },
          toNext(t) {
            this.next &&
              "body" === t.target.localName &&
              this.$router.push(this.next.link);
          },
        },
      },
      uv = {
        mixins: [cv],
        props: {
          path: { type: String },
          filename: { type: String, required: !0 },
          tab: { type: String, required: !0 },
        },
        data() {
          return {
            file: {
              id: null,
              parent: null,
              filename: "",
              url: "",
              prev: null,
              next: null,
              panelIcon: null,
              panelImage: null,
              mime: null,
              content: {},
            },
            parent: null,
            permissions: { changeName: !1, delete: !1 },
            issue: null,
            tabs: [],
            options: null,
          };
        },
        computed: {
          uploadApi() {
            return O.api + "/" + this.path + "/files/" + this.filename;
          },
          prev() {
            return this.file.prev
              ? {
                  link: this.$api.files.link(
                    this.path,
                    this.file.prev.filename
                  ),
                  tooltip: this.file.prev.filename,
                }
              : null;
          },
          language() {
            return this.$store.state.languages.current;
          },
          next() {
            return this.file.next
              ? {
                  link: this.$api.files.link(
                    this.path,
                    this.file.next.filename
                  ),
                  tooltip: this.file.next.filename,
                }
              : null;
          },
        },
        watch: {
          language() {
            this.fetch();
          },
          filename() {
            this.fetch();
          },
        },
        methods: {
          async fetch() {
            try {
              const t = await this.$api.files.get(this.path, this.filename, {
                view: "panel",
              });
              (this.file = {
                ...t,
                next: t.nextWithTemplate,
                prev: t.prevWithTemplate,
                url: t.url,
              }),
                (this.parent = this.$api.files.url(this.path, t.filename)),
                (this.tabs = t.blueprint.tabs),
                (this.permissions = t.options),
                (this.options = async (t) => {
                  const e = await this.$api.files.options(
                    this.path,
                    this.file.filename
                  );
                  t(e);
                }),
                this.$store.dispatch(
                  "breadcrumb",
                  this.$api.files.breadcrumb(this.file, this.$route.name)
                ),
                this.$store.dispatch("title", this.filename),
                this.$store.dispatch("content/create", {
                  id: "files/" + t.id,
                  api: this.$api.files.link(this.path, this.filename),
                  content: t.content,
                });
            } catch (t) {
              window.console.error(t), (this.issue = t);
            }
          },
          action(t) {
            switch (t) {
              case "rename":
                this.$refs.rename.open(this.path, this.file.filename);
                break;
              case "replace":
                this.$refs.upload.open({
                  url:
                    O.api +
                    "/" +
                    this.$api.files.url(this.path, this.file.filename),
                  accept: "." + this.file.extension + "," + this.file.mime,
                });
                break;
              case "remove":
                this.$refs.remove.open(this.path, this.file.filename);
                break;
            }
          },
          deleted() {
            this.path ? this.$go("/" + this.path) : this.$go("/site");
          },
          renamed(t) {
            this.$go(this.$api.files.link(this.path, t.filename));
          },
          uploaded() {
            this.fetch(), this.$store.dispatch("notification/success", ":)");
          },
        },
      },
      dv = uv,
      pv = Object(c["a"])(dv, ov, lv, !1, null, null, null),
      hv = pv.exports,
      mv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.system
          ? s(
              "k-view",
              {
                staticClass: "k-installation-view",
                attrs: { align: "center" },
              },
              [
                "install" === t.state
                  ? s(
                      "form",
                      {
                        on: {
                          submit: function (e) {
                            return e.preventDefault(), t.install(e);
                          },
                        },
                      },
                      [
                        s("h1", { staticClass: "k-offscreen" }, [
                          t._v(" " + t._s(t.$t("installation")) + " "),
                        ]),
                        s("k-fieldset", {
                          attrs: { fields: t.fields, novalidate: !0 },
                          model: {
                            value: t.user,
                            callback: function (e) {
                              t.user = e;
                            },
                            expression: "user",
                          },
                        }),
                        s(
                          "k-button",
                          { attrs: { type: "submit", icon: "check" } },
                          [t._v(" " + t._s(t.$t("install")) + " ")]
                        ),
                      ],
                      1
                    )
                  : "completed" === t.state
                  ? s(
                      "k-text",
                      [
                        s("k-headline", [
                          t._v(t._s(t.$t("installation.completed"))),
                        ]),
                        s("k-link", { attrs: { to: "/login" } }, [
                          t._v(" " + t._s(t.$t("login")) + " "),
                        ]),
                      ],
                      1
                    )
                  : s(
                      "div",
                      [
                        t.system.isInstalled
                          ? t._e()
                          : s("k-headline", [
                              t._v(
                                " " +
                                  t._s(t.$t("installation.issues.headline")) +
                                  " "
                              ),
                            ]),
                        s("ul", { staticClass: "k-installation-issues" }, [
                          !1 === t.system.isInstallable
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.disabled")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.php
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.php")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.server
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.server")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.mbstring
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.mbstring")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.curl
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.curl")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.accounts
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.accounts")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.content
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.content")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.media
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.media")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          !1 === t.requirements.sessions
                            ? s(
                                "li",
                                [
                                  s("k-icon", { attrs: { type: "alert" } }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$t("installation.issues.sessions")
                                      ),
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]),
                        s(
                          "k-button",
                          {
                            attrs: { icon: "refresh" },
                            on: { click: t.check },
                          },
                          [t._v(" " + t._s(t.$t("retry")) + " ")]
                        ),
                      ],
                      1
                    ),
              ],
              1
            )
          : t._e();
      },
      fv = [],
      gv = {
        data() {
          return {
            user: {
              name: "",
              email: "",
              language: "",
              password: "",
              role: "admin",
            },
            languages: [],
            system: null,
          };
        },
        computed: {
          state() {
            return this.system.isOk &&
              this.system.isInstallable &&
              !this.system.isInstalled
              ? "install"
              : this.system.isOk &&
                this.system.isInstallable &&
                this.system.isInstalled
              ? "completed"
              : null;
          },
          translation() {
            return this.$store.state.translation.current;
          },
          requirements() {
            return this.system && this.system.requirements
              ? this.system.requirements
              : {};
          },
          fields() {
            return {
              email: {
                label: this.$t("email"),
                type: "email",
                link: !1,
                required: !0,
              },
              password: {
                label: this.$t("password"),
                type: "password",
                placeholder: this.$t("password") + " …",
                required: !0,
              },
              language: {
                label: this.$t("language"),
                type: "select",
                options: this.languages,
                icon: "globe",
                empty: !1,
                required: !0,
              },
            };
          },
        },
        watch: {
          translation: {
            handler(t) {
              this.user.language = t;
            },
            immediate: !0,
          },
          "user.language"(t) {
            this.$store.dispatch("translation/activate", t);
          },
        },
        created() {
          this.$store.dispatch("content/current", null), this.check();
        },
        methods: {
          install() {
            this.$api.system
              .install(this.user)
              .then((t) => {
                this.$store.dispatch("user/current", t),
                  this.$store.dispatch(
                    "notification/success",
                    this.$t("welcome") + "!"
                  ),
                  this.$go("/");
              })
              .catch((t) => {
                this.$store.dispatch("notification/error", t);
              });
          },
          check() {
            this.$store.dispatch("system/load", !0).then((t) => {
              !0 === t.isInstalled && t.isReady
                ? this.$go("/login")
                : this.$api.translations.options().then((e) => {
                    (this.languages = e),
                      (this.system = t),
                      this.$store.dispatch(
                        "title",
                        this.$t("view.installation")
                      );
                  });
            });
          },
        },
      },
      bv = gv,
      kv = (s("146c"), Object(c["a"])(bv, mv, fv, !1, null, null, null)),
      vv = kv.exports,
      $v = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.issue
          ? s("k-error-view", [t._v(" " + t._s(t.issue.message) + " ")])
          : t.ready && "login" === t.form
          ? s(
              "k-view",
              { staticClass: "k-login-view", attrs: { align: "center" } },
              [s("k-login-plugin")],
              1
            )
          : t.ready && "code" === t.form
          ? s(
              "k-view",
              { staticClass: "k-login-code-view", attrs: { align: "center" } },
              [s("k-login-code")],
              1
            )
          : t._e();
      },
      yv = [],
      _v = {
        components: { "k-login-plugin": window.panel.plugins.login || An },
        data() {
          return { ready: !1, issue: null };
        },
        computed: {
          form() {
            return this.$store.state.user.pendingEmail
              ? "code"
              : this.$store.state.user.current
              ? null
              : "login";
          },
        },
        created() {
          this.$store.dispatch("content/current", null),
            this.$store
              .dispatch("system/load")
              .then((t) => {
                t.isReady || this.$go("/installation"),
                  t.user && t.user.id && this.$go("/"),
                  "pending" === t.authStatus.status &&
                    this.$store.dispatch("user/pending", t.authStatus),
                  (this.ready = !0),
                  this.$store.dispatch("title", this.$t("login"));
              })
              .catch((t) => {
                this.issue = t;
              });
        },
      },
      wv = _v,
      xv = (s("24c1"), Object(c["a"])(wv, $v, yv, !1, null, null, null)),
      Ov = xv.exports,
      Cv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.issue
          ? s("k-error-view", [t._v(" " + t._s(t.issue.message) + " ")])
          : s(
              "k-view",
              {
                staticClass: "k-page-view",
                attrs: { "data-locked": t.isLocked },
              },
              [
                s(
                  "k-header",
                  {
                    attrs: {
                      editable: t.permissions.changeTitle && !t.isLocked,
                      tab: t.tab,
                      tabs: t.tabs,
                    },
                    on: {
                      edit: function (e) {
                        return t.action("rename");
                      },
                    },
                  },
                  [
                    t._v(" " + t._s(t.page.title) + " "),
                    s(
                      "k-button-group",
                      { attrs: { slot: "left" }, slot: "left" },
                      [
                        t.permissions.preview && t.page.previewUrl
                          ? s(
                              "k-button",
                              {
                                attrs: {
                                  responsive: !0,
                                  link: t.page.previewUrl,
                                  target: "_blank",
                                  icon: "open",
                                },
                              },
                              [t._v(" " + t._s(t.$t("open")) + " ")]
                            )
                          : t._e(),
                        t.status
                          ? s("k-status-icon", {
                              attrs: {
                                status: t.page.status,
                                disabled:
                                  !t.permissions.changeStatus || t.isLocked,
                                responsive: !0,
                                text: t.status.label,
                              },
                              on: {
                                click: function (e) {
                                  return t.action("status");
                                },
                              },
                            })
                          : t._e(),
                        s(
                          "k-dropdown",
                          [
                            s(
                              "k-button",
                              {
                                attrs: {
                                  responsive: !0,
                                  disabled: !0 === t.isLocked,
                                  icon: "cog",
                                },
                                on: {
                                  click: function (e) {
                                    return t.$refs.settings.toggle();
                                  },
                                },
                              },
                              [t._v(" " + t._s(t.$t("settings")) + " ")]
                            ),
                            s("k-dropdown-content", {
                              ref: "settings",
                              attrs: { options: t.options },
                              on: { action: t.action },
                            }),
                          ],
                          1
                        ),
                        s("k-languages-dropdown"),
                      ],
                      1
                    ),
                    t.page.id
                      ? s("k-prev-next", {
                          attrs: { slot: "right", prev: t.prev, next: t.next },
                          slot: "right",
                        })
                      : t._e(),
                  ],
                  1
                ),
                t.page.id
                  ? s("k-sections", {
                      attrs: {
                        blueprint: t.blueprint,
                        empty: t.$t("page.blueprint", {
                          template: t.$esc(t.blueprint),
                        }),
                        parent: t.$api.pages.url(t.page.id),
                        tab: t.tab,
                        tabs: t.tabs,
                      },
                    })
                  : t._e(),
                s("k-page-rename-dialog", {
                  ref: "rename",
                  on: { success: t.update },
                }),
                s("k-page-duplicate-dialog", { ref: "duplicate" }),
                s("k-page-status-dialog", {
                  ref: "status",
                  on: { success: t.update },
                }),
                s("k-page-template-dialog", {
                  ref: "template",
                  on: { success: t.update },
                }),
                s("k-page-remove-dialog", { ref: "remove" }),
              ],
              1
            );
      },
      Sv = [],
      Ev = {
        mixins: [cv],
        props: { path: { type: String, required: !0 }, tab: { type: String } },
        data() {
          return {
            page: { title: "", id: null, prev: null, next: null, status: null },
            blueprint: null,
            preview: !0,
            permissions: { changeTitle: !1, changeStatus: !1 },
            icon: "page",
            issue: null,
            tabs: [],
            options: null,
          };
        },
        computed: {
          language() {
            return this.$store.state.languages.current;
          },
          next() {
            return this.page.next
              ? {
                  link: this.$api.pages.link(this.page.next.id),
                  tooltip: this.page.next.title,
                }
              : null;
          },
          prev() {
            return this.page.prev
              ? {
                  link: this.$api.pages.link(this.page.prev.id),
                  tooltip: this.page.prev.title,
                }
              : null;
          },
          status() {
            return null !== this.page.status
              ? this.page.blueprint.status[this.page.status]
              : null;
          },
        },
        watch: {
          language() {
            this.fetch();
          },
          path() {
            this.fetch();
          },
        },
        created() {
          this.$events.$on("page.changeSlug", this.update);
        },
        destroyed() {
          this.$events.$off("page.changeSlug", this.update);
        },
        methods: {
          action(t) {
            switch (t) {
              case "duplicate":
                this.$refs.duplicate.open(this.page.id);
                break;
              case "rename":
                this.$refs.rename.open(this.page.id, this.permissions, "title");
                break;
              case "url":
                this.$refs.rename.open(this.page.id, this.permissions, "slug");
                break;
              case "status":
                this.$refs.status.open(this.page.id);
                break;
              case "template":
                this.$refs.template.open(this.page.id);
                break;
              case "remove":
                this.$refs.remove.open(this.page.id);
                break;
              default:
                this.$store.dispatch(
                  "notification/error",
                  this.$t("notification.notImplemented")
                );
                break;
            }
          },
          async fetch() {
            try {
              (this.page = await this.$api.pages.get(this.path, {
                view: "panel",
              })),
                (this.blueprint = this.page.blueprint.name),
                (this.permissions = this.page.options),
                (this.tabs = this.page.blueprint.tabs),
                (this.options = async (t) => {
                  const e = await this.$api.pages.options(this.page.id);
                  t(e);
                }),
                this.$store.dispatch(
                  "breadcrumb",
                  this.$api.pages.breadcrumb(this.page)
                ),
                this.$store.dispatch("title", this.page.title),
                this.$store.dispatch("content/create", {
                  id: "pages/" + this.page.id,
                  api: this.$api.pages.link(this.page.id),
                  content: this.page.content,
                });
            } catch (t) {
              this.issue = t;
            }
          },
          update() {
            this.fetch(), this.$emit("model.update");
          },
        },
      },
      jv = Ev,
      Tv = Object(c["a"])(jv, Cv, Sv, !1, null, null, null),
      Lv = Tv.exports,
      Iv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-view",
          { staticClass: "k-password-reset-view", attrs: { align: "center" } },
          [
            s(
              "k-form",
              {
                attrs: { fields: t.fields, "submit-button": t.$t("change") },
                on: { submit: t.submit },
                model: {
                  value: t.values,
                  callback: function (e) {
                    t.values = e;
                  },
                  expression: "values",
                },
              },
              [
                s(
                  "template",
                  { slot: "header" },
                  [
                    s("h1", { staticClass: "k-offscreen" }, [
                      t._v(" " + t._s(t.$t("view.resetPassword")) + " "),
                    ]),
                    t.issue
                      ? s(
                          "div",
                          {
                            staticClass: "k-login-alert",
                            on: {
                              click: function (e) {
                                t.issue = null;
                              },
                            },
                          },
                          [
                            s("span", [t._v(t._s(t.issue))]),
                            s("k-icon", { attrs: { type: "alert" } }),
                          ],
                          1
                        )
                      : t._e(),
                    s("k-user-info", { attrs: { user: t.$user } }),
                  ],
                  1
                ),
                s(
                  "div",
                  {
                    staticClass: "k-login-buttons",
                    attrs: { slot: "footer" },
                    slot: "footer",
                  },
                  [
                    s(
                      "k-button",
                      {
                        staticClass: "k-login-button",
                        attrs: { icon: "check", type: "submit" },
                      },
                      [
                        t._v(" " + t._s(t.$t("change")) + " "),
                        t.isLoading ? [t._v(" … ")] : t._e(),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              2
            ),
          ],
          1
        );
      },
      Av = [],
      Bv = {
        data() {
          return {
            isLoading: !1,
            issue: "",
            values: { password: null, passwordConfirmation: null },
          };
        },
        computed: {
          fields() {
            return {
              password: {
                autofocus: !0,
                label: this.$t("user.changePassword.new"),
                icon: "key",
                type: "password",
              },
              passwordConfirmation: {
                label: this.$t("user.changePassword.new.confirm"),
                icon: "key",
                type: "password",
              },
            };
          },
        },
        mounted() {
          this.$store.dispatch("title", this.$t("view.resetPassword"));
        },
        methods: {
          async submit() {
            if (!this.values.password || this.values.password.length < 8)
              return (this.issue = this.$t("error.user.password.invalid")), !1;
            if (this.values.password !== this.values.passwordConfirmation)
              return (this.issue = this.$t("error.user.password.notSame")), !1;
            this.isLoading = !0;
            try {
              await this.$api.users.changePassword(
                this.$user.id,
                this.values.password
              ),
                this.$store.dispatch("notification/success", ":)"),
                this.$go("/");
            } catch (t) {
              this.issue = t.message;
            } finally {
              this.isLoading = !1;
            }
          },
        },
      },
      Mv = Bv,
      Dv = (s("310e"), Object(c["a"])(Mv, Iv, Av, !1, null, null, null)),
      Nv = Dv.exports,
      Pv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-view",
          { staticClass: "k-settings-view" },
          [
            s("k-header", [t._v(" " + t._s(t.$t("view.settings")) + " ")]),
            s("section", { staticClass: "k-system-info" }, [
              s("header", [s("k-headline", [t._v("Kirby")])], 1),
              s("ul", { staticClass: "k-system-info-box" }, [
                s("li", [
                  s("dl", [
                    s("dt", [t._v(t._s(t.$t("license")))]),
                    s(
                      "dd",
                      [
                        t.license
                          ? [t._v(" " + t._s(t.license) + " ")]
                          : s("p", [
                              s(
                                "strong",
                                { staticClass: "k-system-unregistered" },
                                [t._v(t._s(t.$t("license.unregistered")))]
                              ),
                            ]),
                      ],
                      2
                    ),
                  ]),
                ]),
                s("li", [
                  s("dl", [
                    s("dt", [t._v(t._s(t.$t("version")))]),
                    s("dd", [t._v(t._s(t.$store.state.system.info.version))]),
                  ]),
                ]),
              ]),
            ]),
            t.multilang
              ? s(
                  "section",
                  { staticClass: "k-languages" },
                  [
                    t.languages.length > 0
                      ? [
                          s(
                            "section",
                            { staticClass: "k-languages-section" },
                            [
                              s(
                                "header",
                                [
                                  s("k-headline", [
                                    t._v(t._s(t.$t("languages.default"))),
                                  ]),
                                ],
                                1
                              ),
                              s("k-collection", {
                                attrs: { items: t.defaultLanguage },
                                on: { action: t.action },
                              }),
                            ],
                            1
                          ),
                          s(
                            "section",
                            { staticClass: "k-languages-section" },
                            [
                              s(
                                "header",
                                [
                                  s("k-headline", [
                                    t._v(t._s(t.$t("languages.secondary"))),
                                  ]),
                                  s(
                                    "k-button",
                                    {
                                      attrs: { icon: "add" },
                                      on: {
                                        click: function (e) {
                                          return t.$refs.create.open();
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(t.$t("language.create")) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              t.translations.length
                                ? s("k-collection", {
                                    attrs: { items: t.translations },
                                    on: { action: t.action },
                                  })
                                : s(
                                    "k-empty",
                                    {
                                      attrs: { icon: "globe" },
                                      on: {
                                        click: function (e) {
                                          return t.$refs.create.open();
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.$t("languages.secondary.empty")
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                            ],
                            1
                          ),
                        ]
                      : 0 === t.languages.length
                      ? [
                          s(
                            "header",
                            [
                              s("k-headline", [t._v(t._s(t.$t("languages")))]),
                              s(
                                "k-button",
                                {
                                  attrs: { icon: "add" },
                                  on: {
                                    click: function (e) {
                                      return t.$refs.create.open();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    " " + t._s(t.$t("language.create")) + " "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s(
                            "k-empty",
                            {
                              attrs: { icon: "globe" },
                              on: {
                                click: function (e) {
                                  return t.$refs.create.open();
                                },
                              },
                            },
                            [t._v(" " + t._s(t.$t("languages.empty")) + " ")]
                          ),
                        ]
                      : t._e(),
                    s("k-language-create-dialog", {
                      ref: "create",
                      on: { success: t.fetch },
                    }),
                    s("k-language-update-dialog", {
                      ref: "update",
                      on: { success: t.fetch },
                    }),
                    s("k-language-remove-dialog", {
                      ref: "remove",
                      on: { success: t.fetch },
                    }),
                  ],
                  2
                )
              : t._e(),
          ],
          1
        );
      },
      Rv = [],
      qv = {
        data() {
          return { languages: [] };
        },
        computed: {
          defaultLanguage() {
            return this.languages.filter((t) => t.default);
          },
          multilang() {
            return this.$store.state.system.info.multilang;
          },
          license() {
            return this.$store.state.system.info.license;
          },
          translations() {
            return this.languages.filter((t) => !1 === t.default);
          },
        },
        created() {
          this.$store.dispatch("content/current", null),
            this.$store.dispatch("title", this.$t("view.settings")),
            this.$store.dispatch("breadcrumb", []),
            this.fetch();
        },
        methods: {
          fetch() {
            !0 === this.multilang
              ? this.$api.get("languages").then((t) => {
                  this.languages = t.data.map((e) => ({
                    id: e.code,
                    default: e.default,
                    icon: { type: "globe", back: "black" },
                    image: !0,
                    text: this.$esc(e.name),
                    info: this.$esc(e.code),
                    link: () => {
                      this.$refs.update.open(e.code);
                    },
                    options: [
                      { icon: "edit", text: this.$t("edit"), click: "update" },
                      {
                        icon: "trash",
                        text: this.$t("delete"),
                        disabled: e.default && 1 !== t.data.length,
                        click: "remove",
                      },
                    ],
                  }));
                })
              : (this.languages = []);
          },
          action(t, e) {
            switch (e) {
              case "update":
                this.$refs.update.open(t.id);
                break;
              case "remove":
                this.$refs.remove.open(t.id);
                break;
            }
          },
        },
      },
      Fv = qv,
      Uv = (s("9bd5"), Object(c["a"])(Fv, Pv, Rv, !1, null, null, null)),
      Hv = Uv.exports,
      zv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.issue
          ? s("k-error-view", [t._v(" " + t._s(t.issue.message) + " ")])
          : s(
              "k-view",
              {
                key: "site-view",
                staticClass: "k-site-view",
                attrs: { "data-locked": t.isLocked },
              },
              [
                s(
                  "k-header",
                  {
                    attrs: {
                      editable: t.permissions.changeTitle && !t.isLocked,
                      tab: t.tab,
                      tabs: t.tabs,
                    },
                    on: {
                      edit: function (e) {
                        return t.action("rename");
                      },
                    },
                  },
                  [
                    t._v(" " + t._s(t.site.title) + " "),
                    s(
                      "k-button-group",
                      { attrs: { slot: "left" }, slot: "left" },
                      [
                        s(
                          "k-button",
                          {
                            attrs: {
                              responsive: !0,
                              link: t.site.previewUrl,
                              target: "_blank",
                              icon: "open",
                            },
                          },
                          [t._v(" " + t._s(t.$t("open")) + " ")]
                        ),
                        s("k-languages-dropdown"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t.site.url
                  ? s("k-sections", {
                      attrs: {
                        blueprint: t.site.blueprint.name,
                        empty: t.$t("site.blueprint"),
                        tab: t.tab,
                        tabs: t.tabs,
                        parent: "site",
                      },
                      on: {
                        submit: function (e) {
                          return t.$emit("submit", e);
                        },
                      },
                    })
                  : t._e(),
                s("k-site-rename-dialog", {
                  ref: "rename",
                  on: { success: t.fetch },
                }),
              ],
              1
            );
      },
      Kv = [],
      Gv = {
        props: { tab: String },
        data() {
          return {
            site: { title: null, url: null },
            issue: null,
            tabs: [],
            options: null,
            permissions: { changeTitle: !0 },
          };
        },
        computed: {
          isLocked() {
            return null !== this.$store.state.content.status.lock;
          },
          language() {
            return this.$store.state.languages.current;
          },
        },
        watch: {
          language() {
            this.fetch();
          },
        },
        created() {
          this.fetch();
        },
        methods: {
          fetch() {
            this.$api.site
              .get({ view: "panel" })
              .then((t) => {
                (this.site = t),
                  (this.tabs = t.blueprint.tabs),
                  (this.permissions = t.options),
                  (this.options = (t) => {
                    this.$api.site.options().then((e) => {
                      t(e);
                    });
                  }),
                  this.$store.dispatch("breadcrumb", []),
                  this.$store.dispatch("title", null),
                  this.$store.dispatch("content/create", {
                    id: "site",
                    api: "site",
                    content: t.content,
                  });
              })
              .catch((t) => {
                this.issue = t;
              });
          },
          action(t) {
            switch (t) {
              case "languages":
                this.$refs.languages.open();
                break;
              case "rename":
                this.$refs.rename.open();
                break;
              default:
                this.$store.dispatch(
                  "notification/error",
                  this.$t("notification.notImplemented")
                );
                break;
            }
          },
        },
      },
      Wv = Gv,
      Yv = Object(c["a"])(Wv, zv, Kv, !1, null, null, null),
      Vv = Yv.exports,
      Jv = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.issue
          ? s("k-error-view", [t._v(" " + t._s(t.issue.message) + " ")])
          : s(
              "k-view",
              { staticClass: "k-users-view" },
              [
                s(
                  "k-header",
                  [
                    t._v(" " + t._s(t.$t("view.users")) + " "),
                    s(
                      "k-button-group",
                      { attrs: { slot: "left" }, slot: "left" },
                      [
                        s(
                          "k-button",
                          {
                            attrs: {
                              disabled: !1 === t.$permissions.users.create,
                              icon: "add",
                            },
                            on: {
                              click: function (e) {
                                return t.$refs.create.open();
                              },
                            },
                          },
                          [t._v(" " + t._s(t.$t("user.create")) + " ")]
                        ),
                      ],
                      1
                    ),
                    s(
                      "k-button-group",
                      { attrs: { slot: "right" }, slot: "right" },
                      [
                        s(
                          "k-dropdown",
                          [
                            s(
                              "k-button",
                              {
                                attrs: { responsive: !0, icon: "funnel" },
                                on: {
                                  click: function (e) {
                                    return t.$refs.roles.toggle();
                                  },
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t("role")) +
                                    ": " +
                                    t._s(
                                      t.role ? t.role.text : t.$t("role.all")
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                            s(
                              "k-dropdown-content",
                              { ref: "roles", attrs: { align: "right" } },
                              [
                                s(
                                  "k-dropdown-item",
                                  {
                                    attrs: { icon: "bolt" },
                                    on: {
                                      click: function (e) {
                                        return t.filter(!1);
                                      },
                                    },
                                  },
                                  [t._v(" " + t._s(t.$t("role.all")) + " ")]
                                ),
                                s("hr"),
                                t._l(t.roles, function (e) {
                                  return s(
                                    "k-dropdown-item",
                                    {
                                      key: e.value,
                                      attrs: { icon: "bolt" },
                                      on: {
                                        click: function (s) {
                                          return t.filter(e);
                                        },
                                      },
                                    },
                                    [t._v(" " + t._s(e.text) + " ")]
                                  );
                                }),
                              ],
                              2
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t.users.length > 0
                  ? [
                      s("k-collection", {
                        attrs: { items: t.users, pagination: t.pagination },
                        on: { paginate: t.paginate, action: t.action },
                      }),
                    ]
                  : 0 === t.total
                  ? [
                      s("k-empty", { attrs: { icon: "users" } }, [
                        t._v(" " + t._s(t.$t("role.empty")) + " "),
                      ]),
                    ]
                  : t._e(),
                s("k-user-create-dialog", {
                  ref: "create",
                  on: { success: t.fetch },
                }),
                s("k-user-email-dialog", {
                  ref: "email",
                  on: { success: t.fetch },
                }),
                s("k-user-language-dialog", {
                  ref: "language",
                  on: { success: t.fetch },
                }),
                s("k-user-password-dialog", { ref: "password" }),
                s("k-user-remove-dialog", {
                  ref: "remove",
                  on: { success: t.fetch },
                }),
                s("k-user-rename-dialog", {
                  ref: "rename",
                  on: { success: t.fetch },
                }),
                s("k-user-role-dialog", {
                  ref: "role",
                  on: { success: t.fetch },
                }),
              ],
              2
            );
      },
      Zv = [],
      Xv = {
        data() {
          return {
            page: 1,
            limit: 20,
            total: null,
            users: [],
            roles: [],
            issue: null,
          };
        },
        computed: {
          pagination() {
            return { page: this.page, limit: this.limit, total: this.total };
          },
          role() {
            let t = null;
            return (
              this.$route.params.role &&
                this.roles.forEach((e) => {
                  e.value === this.$route.params.role && (t = e);
                }),
              t
            );
          },
        },
        watch: {
          $route() {
            this.fetch();
          },
        },
        created() {
          this.$store.dispatch("content/current", null),
            this.$api.roles.options().then((t) => {
              (this.roles = t), this.fetch();
            });
        },
        methods: {
          fetch() {
            this.$store.dispatch("title", this.$t("view.users"));
            let t = {
              paginate: { page: this.page, limit: this.limit },
              sortBy: "username asc",
            };
            this.role &&
              (t.filterBy = [
                { field: "role", operator: "==", value: this.role.value },
              ]),
              this.$api.users
                .list(t)
                .then((t) => {
                  (this.users = t.data.map((t) => {
                    let e = {
                      id: t.id,
                      icon: { type: "user", back: "black" },
                      text: this.$esc(t.name || t.email),
                      info: this.$esc(t.role.title),
                      link: "/users/" + t.id,
                      options: (e) => {
                        this.$api.users
                          .options(t.id, "list")
                          .then((t) => e(t))
                          .catch((t) => {
                            this.$store.dispatch("notification/error", t);
                          });
                      },
                      image: !0,
                    };
                    return (
                      t.avatar && (e.image = { url: t.avatar.url, cover: !0 }),
                      e
                    );
                  })),
                    this.role
                      ? this.$store.dispatch("breadcrumb", [
                          {
                            link: "/users/role/" + this.role.value,
                            label: this.$t("role") + ": " + this.role.text,
                          },
                        ])
                      : this.$store.dispatch("breadcrumb", []),
                    (this.total = t.pagination.total);
                })
                .catch((t) => {
                  this.issue = t;
                });
          },
          paginate(t) {
            (this.page = t.page), (this.limit = t.limit), this.fetch();
          },
          action(t, e) {
            switch (e) {
              case "edit":
                this.$go("/users/" + t.id);
                break;
              case "email":
                this.$refs.email.open(t.id);
                break;
              case "role":
                this.$refs.role.open(t.id);
                break;
              case "rename":
                this.$refs.rename.open(t.id);
                break;
              case "password":
                this.$refs.password.open(t.id);
                break;
              case "language":
                this.$refs.language.open(t.id);
                break;
              case "remove":
                this.$refs.remove.open(t.id);
                break;
            }
          },
          filter(t) {
            !1 === t ? this.$go("/users") : this.$go("/users/role/" + t.value),
              this.$refs.roles.close();
          },
        },
      },
      Qv = Xv,
      t$ = Object(c["a"])(Qv, Jv, Zv, !1, null, null, null),
      e$ = t$.exports,
      s$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.issue
          ? s("k-error-view", [t._v(" " + t._s(t.issue.message) + " ")])
          : t.ready
          ? s(
              "div",
              {
                staticClass: "k-user-view",
                attrs: { "data-locked": t.isLocked },
              },
              [
                s(
                  "div",
                  { staticClass: "k-user-profile" },
                  [
                    s(
                      "k-view",
                      [
                        t.avatar
                          ? [
                              s(
                                "k-dropdown",
                                [
                                  s(
                                    "k-button",
                                    {
                                      staticClass: "k-user-view-image",
                                      attrs: {
                                        tooltip: t.$t("avatar"),
                                        disabled: t.isLocked,
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.$refs.picture.toggle();
                                        },
                                      },
                                    },
                                    [
                                      t.avatar
                                        ? s("k-image", {
                                            attrs: {
                                              cover: !0,
                                              src: t.avatar,
                                              ratio: "1/1",
                                            },
                                          })
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  s(
                                    "k-dropdown-content",
                                    { ref: "picture" },
                                    [
                                      s(
                                        "k-dropdown-item",
                                        {
                                          attrs: { icon: "upload" },
                                          on: {
                                            click: function (e) {
                                              return t.$refs.upload.open();
                                            },
                                          },
                                        },
                                        [t._v(" " + t._s(t.$t("change")) + " ")]
                                      ),
                                      s(
                                        "k-dropdown-item",
                                        {
                                          attrs: { icon: "trash" },
                                          on: {
                                            click: function (e) {
                                              return t.action("picture.delete");
                                            },
                                          },
                                        },
                                        [t._v(" " + t._s(t.$t("delete")) + " ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : [
                              s(
                                "k-button",
                                {
                                  staticClass: "k-user-view-image",
                                  attrs: { tooltip: t.$t("avatar") },
                                  on: {
                                    click: function (e) {
                                      return t.$refs.upload.open();
                                    },
                                  },
                                },
                                [s("k-icon", { attrs: { type: "user" } })],
                                1
                              ),
                            ],
                        s(
                          "k-button-group",
                          [
                            s(
                              "k-button",
                              {
                                attrs: {
                                  disabled:
                                    !t.permissions.changeEmail || t.isLocked,
                                  icon: "email",
                                },
                                on: {
                                  click: function (e) {
                                    return t.action("email");
                                  },
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t("email")) +
                                    ": " +
                                    t._s(t.user.email) +
                                    " "
                                ),
                              ]
                            ),
                            s(
                              "k-button",
                              {
                                attrs: {
                                  disabled:
                                    !t.permissions.changeRole || t.isLocked,
                                  icon: "bolt",
                                },
                                on: {
                                  click: function (e) {
                                    return t.action("role");
                                  },
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t("role")) +
                                    ": " +
                                    t._s(t.user.role.title) +
                                    " "
                                ),
                              ]
                            ),
                            s(
                              "k-button",
                              {
                                attrs: {
                                  disabled:
                                    !t.permissions.changeLanguage || t.isLocked,
                                  icon: "globe",
                                },
                                on: {
                                  click: function (e) {
                                    return t.action("language");
                                  },
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t("language")) +
                                    ": " +
                                    t._s(t.user.language) +
                                    " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      2
                    ),
                  ],
                  1
                ),
                s(
                  "k-view",
                  [
                    s(
                      "k-header",
                      {
                        attrs: {
                          editable: t.permissions.changeName && !t.isLocked,
                          tab: t.tab,
                          tabs: t.tabs,
                        },
                        on: {
                          edit: function (e) {
                            return t.action("rename");
                          },
                        },
                      },
                      [
                        t.user.name && 0 !== t.user.name.length
                          ? [t._v(" " + t._s(t.user.name) + " ")]
                          : s(
                              "span",
                              { staticClass: "k-user-name-placeholder" },
                              [t._v(t._s(t.$t("name")) + " …")]
                            ),
                        s(
                          "k-button-group",
                          { attrs: { slot: "left" }, slot: "left" },
                          [
                            s(
                              "k-dropdown",
                              [
                                s(
                                  "k-button",
                                  {
                                    attrs: {
                                      disabled: t.isLocked,
                                      icon: "cog",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.$refs.settings.toggle();
                                      },
                                    },
                                  },
                                  [t._v(" " + t._s(t.$t("settings")) + " ")]
                                ),
                                s("k-dropdown-content", {
                                  ref: "settings",
                                  attrs: { options: t.options },
                                  on: { action: t.action },
                                }),
                              ],
                              1
                            ),
                            s("k-languages-dropdown"),
                          ],
                          1
                        ),
                        t.user.id && "User" === t.$route.name
                          ? s("k-prev-next", {
                              attrs: {
                                slot: "right",
                                prev: t.prev,
                                next: t.next,
                              },
                              slot: "right",
                            })
                          : t._e(),
                      ],
                      2
                    ),
                    t.user
                      ? s("k-sections", {
                          attrs: {
                            blueprint: t.user.blueprint.name,
                            empty: t.$t("user.blueprint", {
                              role: t.$esc(t.user.role.name),
                            }),
                            parent: "users/" + t.user.id,
                            tab: t.tab,
                            tabs: t.tabs,
                          },
                        })
                      : t._e(),
                    s("k-user-email-dialog", {
                      ref: "email",
                      on: { success: t.fetch },
                    }),
                    s("k-user-language-dialog", {
                      ref: "language",
                      on: { success: t.fetch },
                    }),
                    s("k-user-password-dialog", { ref: "password" }),
                    s("k-user-remove-dialog", { ref: "remove" }),
                    s("k-user-rename-dialog", {
                      ref: "rename",
                      on: { success: t.fetch },
                    }),
                    s("k-user-role-dialog", {
                      ref: "role",
                      on: { success: t.fetch },
                    }),
                    s("k-upload", {
                      ref: "upload",
                      attrs: {
                        url: t.uploadApi,
                        multiple: !1,
                        accept: "image/*",
                      },
                      on: { success: t.uploadedAvatar },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e();
      },
      i$ = [],
      n$ = {
        mixins: [cv],
        props: { id: { type: [Boolean, String], required: !0 }, tab: String },
        data() {
          return {
            tabs: [],
            ready: !1,
            user: {
              role: { name: null },
              name: null,
              language: null,
              prev: null,
              next: null,
            },
            permissions: {
              changeEmail: !0,
              changeName: !0,
              changeLanguage: !0,
              changeRole: !0,
            },
            issue: null,
            avatar: null,
            options: null,
          };
        },
        computed: {
          language() {
            return this.$store.state.languages.current;
          },
          next() {
            return this.user.next
              ? {
                  link: this.$api.users.link(this.user.next.id),
                  tooltip: this.user.next.name,
                }
              : null;
          },
          prev() {
            return this.user.prev
              ? {
                  link: this.$api.users.link(this.user.prev.id),
                  tooltip: this.user.prev.name,
                }
              : null;
          },
          uploadApi() {
            return O.api + "/users/" + this.user.id + "/avatar";
          },
        },
        watch: {
          "$route.name": {
            handler(t) {
              "Account" === t && this.$store.dispatch("breadcrumb", []);
            },
            immediate: !0,
          },
          language() {
            this.fetch();
          },
          id() {
            this.fetch();
          },
        },
        methods: {
          async action(t) {
            switch (t) {
              case "email":
                this.$refs.email.open(this.user.id);
                break;
              case "language":
                this.$refs.language.open(this.user.id);
                break;
              case "password":
                this.$refs.password.open(this.user.id);
                break;
              case "picture.delete":
                await this.$api.users.deleteAvatar(this.id),
                  (this.avatar = null),
                  this.$store.dispatch("notification/success", ":)");
                break;
              case "remove":
                this.$refs.remove.open(this.user.id);
                break;
              case "rename":
                this.$refs.rename.open(this.user.id);
                break;
              case "role":
                this.$refs.role.open(this.user.id);
                break;
              default:
                this.$store.dispatch(
                  "notification/error",
                  "Not yet implemented"
                );
            }
          },
          async fetch() {
            if (this.id)
              try {
                (this.user = await this.$api.users.get(this.id, {
                  view: "panel",
                })),
                  (this.tabs = this.user.blueprint.tabs),
                  (this.ready = !0),
                  (this.permissions = this.user.options),
                  (this.options = async (t) => {
                    const e = await this.$api.users.options(this.user.id);
                    t(e);
                  }),
                  this.user.avatar
                    ? (this.avatar = this.user.avatar.url)
                    : (this.avatar = null),
                  "User" === this.$route.name &&
                    this.$store.dispatch(
                      "breadcrumb",
                      this.$api.users.breadcrumb(this.user)
                    ),
                  this.$store.dispatch(
                    "title",
                    this.user.name || this.user.email
                  ),
                  this.$store.dispatch("content/create", {
                    id: "users/" + this.user.id,
                    api: this.$api.users.link(this.user.id),
                    content: this.user.content,
                  });
              } catch (t) {
                window.console.error(t), (this.issue = t);
              }
          },
          uploadedAvatar() {
            this.$store.dispatch("notification/success", ":)"), this.fetch();
          },
        },
      },
      a$ = n$,
      r$ = (s("bd96"), Object(c["a"])(a$, s$, i$, !1, null, null, null)),
      o$ = r$.exports,
      l$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            ref: "container",
            staticClass: "k-block-container",
            class: "k-block-container-type-" + t.type,
            attrs: {
              "data-batched": t.isBatched,
              "data-disabled": t.fieldset.disabled,
              "data-hidden": t.isHidden,
              "data-last-in-batch": t.isLastInBatch,
              "data-selected": t.isSelected,
              "data-translate": t.fieldset.translate,
              tabindex: "0",
            },
            on: {
              keydown: [
                function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"])
                    ? null
                    : e.ctrlKey && e.shiftKey
                    ? (e.preventDefault(), t.$emit("sortDown"))
                    : null;
                },
                function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                    ? null
                    : e.ctrlKey && e.shiftKey
                    ? (e.preventDefault(), t.$emit("sortUp"))
                    : null;
                },
              ],
              focus: function (e) {
                return t.$emit("focus");
              },
              focusin: function (e) {
                return t.$emit("focus");
              },
            },
          },
          [
            s(
              "div",
              { staticClass: "k-block", class: t.className },
              [
                s(
                  t.customComponent,
                  t._g(
                    t._b(
                      { ref: "editor", tag: "component" },
                      "component",
                      t.$props,
                      !1
                    ),
                    t.listeners
                  )
                ),
              ],
              1
            ),
            s(
              "k-block-options",
              t._g(
                {
                  ref: "options",
                  attrs: {
                    "is-batched": t.isBatched,
                    "is-full": t.isFull,
                    "is-hidden": t.isHidden,
                  },
                },
                t.listeners
              )
            ),
            t.isBatched
              ? t._e()
              : s("k-form-drawer", {
                  ref: "drawer",
                  staticClass: "k-block-drawer",
                  attrs: {
                    icon: t.fieldset.icon || "box",
                    tabs: t.tabs,
                    title: t.fieldset.name,
                    value: t.content,
                  },
                  on: {
                    close: function (e) {
                      return t.focus();
                    },
                    input: function (e) {
                      return t.$emit("update", e);
                    },
                  },
                  scopedSlots: t._u(
                    [
                      {
                        key: "options",
                        fn: function () {
                          return [
                            t.isHidden
                              ? s("k-button", {
                                  staticClass: "k-drawer-option",
                                  attrs: { icon: "hidden" },
                                  on: {
                                    click: function (e) {
                                      return t.$emit("show");
                                    },
                                  },
                                })
                              : t._e(),
                            s("k-button", {
                              staticClass: "k-drawer-option",
                              attrs: { disabled: !t.prev, icon: "angle-left" },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.goTo(t.prev)
                                  );
                                },
                              },
                            }),
                            s("k-button", {
                              staticClass: "k-drawer-option",
                              attrs: { disabled: !t.next, icon: "angle-right" },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.goTo(t.next)
                                  );
                                },
                              },
                            }),
                            s("k-button", {
                              staticClass: "k-drawer-option",
                              attrs: { icon: "trash" },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.confirmToRemove(e)
                                  );
                                },
                              },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                    ],
                    null,
                    !1,
                    2458022885
                  ),
                }),
            s("k-remove-dialog", {
              ref: "removeDialog",
              attrs: { text: t.$t("field.blocks.delete.confirm") },
              on: { submit: t.remove },
            }),
          ],
          1
        );
      },
      c$ = [],
      u$ = {
        inheritAttrs: !1,
        props: {
          attrs: [Array, Object],
          content: [Array, Object],
          endpoints: Object,
          fieldset: Object,
          id: String,
          isBatched: Boolean,
          isFull: Boolean,
          isHidden: Boolean,
          isLastInBatch: Boolean,
          isSelected: Boolean,
          name: String,
          next: Object,
          prev: Object,
          type: String,
        },
        data() {
          return { skipFocus: !1 };
        },
        computed: {
          className() {
            let t = ["k-block-type-" + this.type];
            return (
              this.fieldset.preview &&
                this.fieldset.preview !== this.type &&
                t.push("k-block-type-" + this.fieldset.preview),
              !1 === this.wysiwyg && t.push("k-block-type-default"),
              t
            );
          },
          customComponent() {
            return this.wysiwyg
              ? this.wysiwygComponent
              : "k-block-type-default";
          },
          listeners() {
            return {
              ...this.$listeners,
              confirmToRemove: this.confirmToRemove,
              open: this.open,
            };
          },
          tabs() {
            let t = this.fieldset.tabs;
            return (
              Object.entries(t).forEach(([e, s]) => {
                Object.entries(s.fields).forEach(([s]) => {
                  (t[e].fields[s].section = this.name),
                    (t[e].fields[s].endpoints = {
                      field:
                        this.endpoints.field +
                        "/fieldsets/" +
                        this.type +
                        "/fields/" +
                        s,
                      section: this.endpoints.section,
                      model: this.endpoints.model,
                    });
                });
              }),
              t
            );
          },
          wysiwyg() {
            return !1 !== this.wysiwygComponent;
          },
          wysiwygComponent() {
            if (!1 === this.fieldset.preview) return !1;
            let t = "k-block-type-" + this.type;
            return (
              (this.$helper.isComponent(t) ||
                !(
                  !this.fieldset.preview ||
                  ((t = "k-block-type-" + this.fieldset.preview),
                  !this.$helper.isComponent(t))
                )) &&
              t
            );
          },
        },
        methods: {
          close() {
            this.$refs.drawer.close();
          },
          confirmToRemove() {
            this.$refs.removeDialog.open();
          },
          focus() {
            !0 !== this.skipFocus &&
              ("function" === typeof this.$refs.editor.focus
                ? this.$refs.editor.focus()
                : this.$refs.container.focus());
          },
          goTo(t) {
            t &&
              ((this.skipFocus = !0),
              this.close(),
              this.$nextTick(() => {
                t.$refs.container.focus(), t.open(), (this.skipFocus = !1);
              }));
          },
          open() {
            this.$refs.drawer.open();
          },
          remove() {
            this.$refs.removeDialog.close(), this.$emit("remove", this.id);
          },
        },
      },
      d$ = u$,
      p$ = (s("bbdf"), Object(c["a"])(d$, l$, c$, !1, null, null, null)),
      h$ = p$.exports,
      m$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-blocks",
            attrs: {
              "data-empty": 0 === t.blocks.length,
              "data-alt": t.altKey,
            },
          },
          [
            t.hasFieldsets
              ? [
                  s(
                    "k-draggable",
                    t._b(
                      {
                        staticClass: "k-blocks-list",
                        on: { sort: t.save },
                        scopedSlots: t._u(
                          [
                            {
                              key: "footer",
                              fn: function () {
                                return [
                                  s(
                                    "k-empty",
                                    {
                                      staticClass: "k-blocks-empty",
                                      attrs: { icon: "box" },
                                      on: {
                                        click: function (e) {
                                          return t.choose(t.blocks.length);
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.empty ||
                                              t.$t("field.blocks.empty")
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          2413899928
                        ),
                      },
                      "k-draggable",
                      t.draggableOptions,
                      !1
                    ),
                    t._l(t.blocks, function (e, i) {
                      return s(
                        "k-block",
                        t._b(
                          {
                            key: e.id,
                            ref: "block-" + e.id,
                            refInFor: !0,
                            attrs: {
                              endpoints: t.endpoints,
                              fieldset: t.fieldset(e),
                              "is-batched": t.isBatched(e),
                              "is-last-in-batch": t.isLastInBatch(e),
                              "is-full": t.isFull,
                              "is-hidden": !0 === e.isHidden,
                              "is-selected": t.isSelected(e),
                              next: t.prevNext(i + 1),
                              prev: t.prevNext(i - 1),
                            },
                            on: {
                              append: function (e) {
                                return t.add(e, i + 1);
                              },
                              blur: function (e) {
                                return t.select(null);
                              },
                              choose: function (e) {
                                return t.choose(e);
                              },
                              chooseToAppend: function (e) {
                                return t.choose(i + 1);
                              },
                              chooseToConvert: function (s) {
                                return t.chooseToConvert(e);
                              },
                              chooseToPrepend: function (e) {
                                return t.choose(i);
                              },
                              confirmToRemoveSelected:
                                t.confirmToRemoveSelected,
                              duplicate: function (s) {
                                return t.duplicate(e, i);
                              },
                              focus: function (s) {
                                return t.select(e);
                              },
                              hide: function (s) {
                                return t.hide(e);
                              },
                              prepend: function (e) {
                                return t.add(e, i);
                              },
                              remove: function (s) {
                                return t.remove(e);
                              },
                              sortDown: function (s) {
                                return t.sort(e, i, i + 1);
                              },
                              sortUp: function (s) {
                                return t.sort(e, i, i - 1);
                              },
                              show: function (s) {
                                return t.show(e);
                              },
                              update: function (s) {
                                return t.update(e, s);
                              },
                            },
                          },
                          "k-block",
                          e,
                          !1
                        )
                      );
                    }),
                    1
                  ),
                  s("k-block-selector", {
                    ref: "selector",
                    attrs: {
                      fieldsets: t.fieldsets,
                      "fieldset-groups": t.fieldsetGroups,
                    },
                    on: { add: t.add, convert: t.convert },
                  }),
                  s("k-remove-dialog", {
                    ref: "removeAll",
                    attrs: { text: t.$t("field.blocks.delete.confirm.all") },
                    on: { submit: t.removeAll },
                  }),
                  s("k-remove-dialog", {
                    ref: "removeSelected",
                    attrs: {
                      text: t.$t("field.blocks.delete.confirm.selected"),
                    },
                    on: { submit: t.removeSelected },
                  }),
                ]
              : [
                  s("k-box", { attrs: { theme: "info" } }, [
                    t._v(" No fieldsets yet "),
                  ]),
                ],
          ],
          2
        );
      },
      f$ = [],
      g$ = {
        inheritAttrs: !1,
        props: {
          empty: String,
          endpoints: Object,
          fieldsets: Object,
          fieldsetGroups: Object,
          group: String,
          max: { type: Number, default: null },
          value: {
            type: Array,
            default() {
              return [];
            },
          },
        },
        data() {
          return { batch: [], blocks: this.value, altKey: !1 };
        },
        computed: {
          draggableOptions() {
            return {
              id: this._uid,
              handle: ".k-block-handle",
              list: this.blocks,
              move: this.move,
              delay: 10,
              data: { fieldsets: this.fieldsets, isFull: this.isFull },
              options: { group: this.group },
            };
          },
          hasFieldsets() {
            return Object.keys(this.fieldsets).length;
          },
          isEmpty() {
            return 0 === this.blocks.length;
          },
          isFull() {
            return null !== this.max && this.blocks.length >= this.max;
          },
          selected() {
            return this.$store.state.blocks.current;
          },
        },
        watch: {
          value() {
            this.blocks = this.value;
          },
        },
        created() {
          (this.outsideFocus = (t) => {
            const e = document.querySelector(".k-overlay:last-of-type");
            !1 !== this.$el.contains(t.target) ||
              (e && !1 !== e.contains(t.target)) ||
              this.select(null);
          }),
            document.addEventListener("focus", this.outsideFocus, !0),
            (this.onAlt = (t) => {
              t.altKey ? (this.altKey = !0) : (this.altKey = !1);
            }),
            document.addEventListener("keydown", this.onAlt, !0),
            document.addEventListener("keyup", this.onAlt, !0);
        },
        destroyed() {
          document.removeEventListener("focus", this.outsideFocus),
            document.removeEventListener("keydown", this.onAlt),
            document.removeEventListener("keyup", this.onAlt);
        },
        methods: {
          async add(t = "text", e) {
            const s = await this.$api.get(
              this.endpoints.field + "/fieldsets/" + t
            );
            this.blocks.splice(e, 0, s),
              this.save(),
              this.$nextTick(() => {
                this.focusOrOpen(s);
              });
          },
          addToBatch(t) {
            null !== this.selected &&
              !1 === this.batch.includes(this.selected) &&
              (this.batch.push(this.selected),
              this.$store.dispatch("blocks/current", null)),
              !1 === this.batch.includes(t.id) && this.batch.push(t.id);
          },
          choose(t) {
            if (1 === Object.keys(this.fieldsets).length) {
              const e = Object.values(this.fieldsets)[0].type;
              this.add(e, t);
            } else this.$refs.selector.open(t);
          },
          chooseToConvert(t) {
            this.$refs.selector.open(t, {
              disabled: [t.type],
              headline: this.$t("field.blocks.changeType"),
              event: "convert",
            });
          },
          click(t) {
            this.$emit("click", t);
          },
          confirmToRemoveAll() {
            this.$refs.removeAll.open();
          },
          confirmToRemoveSelected() {
            this.$refs.removeSelected.open();
          },
          async convert(t, e) {
            const s = this.blocks.findIndex((t) => t.id === e.id);
            if (-1 === s) return !1;
            const i = (t) => {
                let e = {};
                return (
                  Object.values(t.tabs).forEach((t) => {
                    e = { ...e, ...t.fields };
                  }),
                  e
                );
              },
              n = this.blocks[s],
              a = await this.$api.get(this.endpoints.field + "/fieldsets/" + t),
              r = this.fieldsets[n.type],
              o = this.fieldsets[t];
            if (!o) return !1;
            let l = a.content;
            const c = i(r),
              u = i(o);
            Object.entries(u).forEach(([t, e]) => {
              const s = c[t];
              s && s.type === e.type && n.content[t] && (l[t] = n.content[t]);
            }),
              (this.blocks[s] = { ...a, id: n.id, content: l }),
              this.save();
          },
          async duplicate(t, e) {
            const s = { ...this.$helper.clone(t), id: this.$helper.uuid() };
            this.blocks.splice(e + 1, 0, s), this.save();
          },
          fieldset(t) {
            return (
              this.fieldsets[t.type] || {
                icon: "box",
                name: t.type,
                tabs: { content: { fields: {} } },
                type: t.type,
              }
            );
          },
          focus(t) {
            this.$refs["block-" + t.id] &&
              this.$refs["block-" + t.id][0].focus();
          },
          focusOrOpen(t) {
            this.fieldsets[t.type].wysiwyg ? this.focus(t) : this.open(t);
          },
          hide(t) {
            this.$set(t, "isHidden", !0), this.save();
          },
          isBatched(t) {
            return this.batch.includes(t.id);
          },
          isLastInBatch(t) {
            const [e] = this.batch.slice(-1);
            return e && t.id === e;
          },
          isSelected(t) {
            return this.selected && this.selected === t.id;
          },
          move(t) {
            if (t.from !== t.to) {
              const e = t.draggedContext.element,
                s =
                  t.relatedContext.component.componentData ||
                  t.relatedContext.component.$parent.componentData;
              if (!1 === Object.keys(s.fieldsets).includes(e.type)) return !1;
              if (!0 === s.isFull) return !1;
            }
            return !0;
          },
          open(t) {
            this.$refs["block-" + t.id] &&
              this.$refs["block-" + t.id][0].open();
          },
          prevNext(t) {
            if (this.blocks[t]) {
              let e = this.blocks[t];
              if (this.$refs["block-" + e.id])
                return this.$refs["block-" + e.id][0];
            }
          },
          remove(t) {
            const e = this.blocks.findIndex((e) => e.id === t.id);
            -1 !== e &&
              (this.selected && this.selected.id === t.id && this.select(null),
              this.$delete(this.blocks, e),
              this.save());
          },
          removeAll() {
            (this.blocks = []), this.save(), this.$refs.removeAll.close();
          },
          removeSelected() {
            this.batch.forEach((t) => {
              const e = this.blocks.findIndex((e) => e.id === t);
              -1 !== e && this.$delete(this.blocks, e);
            }),
              (this.batch = []),
              this.$store.dispatch("blocks/current", null),
              this.save(),
              this.$refs.removeSelected.close();
          },
          save() {
            this.$emit("input", this.blocks);
          },
          select(t) {
            t && this.altKey
              ? this.addToBatch(t)
              : ((this.batch = []),
                this.$store.dispatch("blocks/current", t ? t.id : null));
          },
          show(t) {
            this.$set(t, "isHidden", !1), this.save();
          },
          sort(t, e, s) {
            if (s < 0) return;
            let i = this.$helper.clone(this.blocks);
            i.splice(e, 1),
              i.splice(s, 0, t),
              (this.blocks = i),
              this.save(),
              this.$nextTick(() => {
                this.focus(t);
              });
          },
          update(t, e) {
            const s = this.blocks.findIndex((e) => e.id === t.id);
            -1 !== s &&
              Object.entries(e).forEach(([t, e]) => {
                this.$set(this.blocks[s].content, t, e);
              }),
              this.save();
          },
        },
      },
      b$ = g$,
      k$ = (s("f470"), Object(c["a"])(b$, m$, f$, !1, null, null, null)),
      v$ = k$.exports,
      $$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "figure",
          { staticClass: "k-block-figure" },
          [
            t.isEmpty
              ? s(
                  "k-button",
                  {
                    staticClass: "k-block-figure-empty",
                    attrs: { icon: t.emptyIcon },
                    on: {
                      click: function (e) {
                        return t.$emit("open");
                      },
                    },
                  },
                  [t._v(" " + t._s(t.emptyText) + " ")]
                )
              : s(
                  "span",
                  {
                    staticClass: "k-block-figure-container",
                    on: {
                      dblclick: function (e) {
                        return t.$emit("open");
                      },
                    },
                  },
                  [t._t("default")],
                  2
                ),
            t.caption
              ? s(
                  "figcaption",
                  [
                    s("k-writer", {
                      attrs: {
                        inline: !0,
                        marks: t.captionMarks,
                        value: t.caption,
                      },
                      on: {
                        input: function (e) {
                          return t.$emit("update", { caption: e });
                        },
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      y$ = [],
      _$ = {
        inheritAttrs: !1,
        props: {
          caption: String,
          captionMarks: [Boolean, Array],
          cover: { type: Boolean, default: !0 },
          isEmpty: Boolean,
          emptyIcon: String,
          emptyText: String,
          ratio: String,
        },
        computed: {
          ratioPadding() {
            return this.$helper.ratio(this.ratio || "16/9");
          },
        },
      },
      w$ = _$,
      x$ = (s("0069"), Object(c["a"])(w$, $$, y$, !1, null, null, null)),
      O$ = x$.exports,
      C$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dropdown",
          { staticClass: "k-block-options" },
          [
            t.isBatched
              ? [
                  s("k-button", {
                    staticClass: "k-block-options-button",
                    attrs: { tooltip: t.$t("remove"), icon: "trash" },
                    nativeOn: {
                      mousedown: function (e) {
                        return (
                          e.preventDefault(), t.$emit("confirmToRemoveSelected")
                        );
                      },
                    },
                  }),
                ]
              : [
                  s("k-button", {
                    staticClass: "k-block-options-button",
                    attrs: { tooltip: t.$t("edit"), icon: "edit" },
                    on: {
                      click: function (e) {
                        return t.$emit("open");
                      },
                    },
                  }),
                  s("k-button", {
                    staticClass: "k-block-options-button",
                    attrs: {
                      disabled: t.isFull,
                      tooltip: t.$t("insert.after"),
                      icon: "add",
                    },
                    on: {
                      click: function (e) {
                        return t.$emit("chooseToAppend");
                      },
                    },
                  }),
                  s("k-button", {
                    staticClass: "k-block-options-button",
                    attrs: { tooltip: t.$t("delete"), icon: "trash" },
                    on: {
                      click: function (e) {
                        return t.$emit("confirmToRemove");
                      },
                    },
                  }),
                  s("k-button", {
                    staticClass: "k-block-options-button",
                    attrs: { tooltip: t.$t("more"), icon: "dots" },
                    on: {
                      click: function (e) {
                        return t.$refs.options.toggle();
                      },
                    },
                  }),
                  s("k-button", {
                    staticClass: "k-block-options-button k-block-handle",
                    attrs: { tooltip: t.$t("sort"), icon: "sort" },
                    on: {
                      keydown: [
                        function (e) {
                          return !e.type.indexOf("key") &&
                            t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                            ? null
                            : (e.preventDefault(), t.$emit("sortUp"));
                        },
                        function (e) {
                          return !e.type.indexOf("key") &&
                            t._k(e.keyCode, "down", 40, e.key, [
                              "Down",
                              "ArrowDown",
                            ])
                            ? null
                            : (e.preventDefault(), t.$emit("sortDown"));
                        },
                      ],
                    },
                  }),
                  s(
                    "k-dropdown-content",
                    { ref: "options", attrs: { align: "right" } },
                    [
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { disabled: t.isFull, icon: "angle-up" },
                          on: {
                            click: function (e) {
                              return t.$emit("chooseToPrepend");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("insert.before")) + " ")]
                      ),
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { disabled: t.isFull, icon: "angle-down" },
                          on: {
                            click: function (e) {
                              return t.$emit("chooseToAppend");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("insert.after")) + " ")]
                      ),
                      s("hr"),
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { icon: "edit" },
                          on: {
                            click: function (e) {
                              return t.$emit("open");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("edit")) + " ")]
                      ),
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { icon: "refresh" },
                          on: {
                            click: function (e) {
                              return t.$emit("chooseToConvert");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("field.blocks.changeType")) + " "
                          ),
                        ]
                      ),
                      s("hr"),
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { icon: t.isHidden ? "preview" : "hidden" },
                          on: {
                            click: function (e) {
                              return t.$emit(t.isHidden ? "show" : "hide");
                            },
                          },
                        },
                        [
                          t._v(
                            " " +
                              t._s(
                                !0 === t.isHidden ? t.$t("show") : t.$t("hide")
                              ) +
                              " "
                          ),
                        ]
                      ),
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { disabled: t.isFull, icon: "copy" },
                          on: {
                            click: function (e) {
                              return t.$emit("duplicate");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("duplicate")) + " ")]
                      ),
                      s("hr"),
                      s(
                        "k-dropdown-item",
                        {
                          attrs: { icon: "trash" },
                          on: {
                            click: function (e) {
                              return t.$emit("confirmToRemove");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("delete")) + " ")]
                      ),
                    ],
                    1
                  ),
                ],
          ],
          2
        );
      },
      S$ = [],
      E$ = {
        props: { isBatched: Boolean, isFull: Boolean, isHidden: Boolean },
        methods: {
          open() {
            this.$refs.options.open();
          },
        },
      },
      j$ = E$,
      T$ = (s("9c44"), Object(c["a"])(j$, C$, S$, !1, null, null, null)),
      L$ = T$.exports,
      I$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-block-selector",
            attrs: { "cancel-button": !1, "submit-button": !1, size: "medium" },
          },
          [
            t.headline
              ? s("k-headline", [t._v(" " + t._s(t.headline) + " ")])
              : t._e(),
            t._l(t.groups, function (e, i) {
              return s("details", { key: i, attrs: { open: e.open } }, [
                s("summary", [t._v(t._s(e.label))]),
                s(
                  "div",
                  { staticClass: "k-block-types" },
                  t._l(e.fieldsets, function (e) {
                    return s(
                      "k-button",
                      {
                        key: e.name,
                        ref: "fieldset-" + e.index,
                        refInFor: !0,
                        attrs: {
                          disabled: t.disabled.includes(e.type),
                          icon: e.icon || "box",
                        },
                        on: {
                          keydown: [
                            function (s) {
                              return !s.type.indexOf("key") &&
                                t._k(s.keyCode, "up", 38, s.key, [
                                  "Up",
                                  "ArrowUp",
                                ])
                                ? null
                                : t.navigate(e.index - 1);
                            },
                            function (s) {
                              return !s.type.indexOf("key") &&
                                t._k(s.keyCode, "down", 40, s.key, [
                                  "Down",
                                  "ArrowDown",
                                ])
                                ? null
                                : t.navigate(e.index + 1);
                            },
                          ],
                          click: function (s) {
                            return t.add(e.type);
                          },
                        },
                      },
                      [t._v(" " + t._s(e.name) + " ")]
                    );
                  }),
                  1
                ),
              ]);
            }),
          ],
          2
        );
      },
      A$ = [],
      B$ = {
        inheritAttrs: !1,
        props: { endpoint: String, fieldsets: Object, fieldsetGroups: Object },
        data() {
          return {
            disabled: [],
            headline: null,
            payload: null,
            event: "add",
            groups: this.createGroups(),
          };
        },
        methods: {
          add(t) {
            this.$emit(this.event, t, this.payload), this.$refs.dialog.close();
          },
          createGroups() {
            let t = {},
              e = 0;
            const s = this.fieldsetGroups || {
              blocks: {
                label: this.$t("field.blocks.fieldsets.label"),
                sets: Object.keys(this.fieldsets),
              },
            };
            return (
              Object.keys(s).forEach((i) => {
                let n = s[i];
                (n.open = !1 !== n.open),
                  (n.fieldsets = n.sets
                    .filter((t) => this.fieldsets[t])
                    .map((t) => (e++, { ...this.fieldsets[t], index: e }))),
                  0 !== n.fieldsets.length && (t[i] = n);
              }),
              t
            );
          },
          navigate(t) {
            const e = this.$refs["fieldset-" + t];
            e && e[0] && e[0].focus();
          },
          open(t, e = {}) {
            const s = { event: "add", disabled: [], headline: null, ...e };
            (this.event = s.event),
              (this.disabled = s.disabled),
              (this.headline = s.headline),
              (this.payload = t),
              this.$refs.dialog.open();
          },
        },
      },
      M$ = B$,
      D$ = (s("f6c2"), Object(c["a"])(M$, I$, A$, !1, null, null, null)),
      N$ = D$.exports,
      P$ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          t._g({ staticClass: "k-block-title" }, t.$listeners),
          [
            s("k-icon", {
              staticClass: "k-block-icon",
              attrs: { type: t.icon },
            }),
            s("span", { staticClass: "k-block-name" }, [
              t._v(" " + t._s(t.name) + " "),
            ]),
            t.label
              ? s("span", { staticClass: "k-block-label" }, [
                  t._v(" " + t._s(t.label) + " "),
                ])
              : t._e(),
          ],
          1
        );
      },
      R$ = [],
      q$ = {
        inheritAttrs: !1,
        props: { fieldset: Object, content: Object },
        computed: {
          icon() {
            return this.fieldset.icon || "box";
          },
          label() {
            if (!this.fieldset.label || 0 === this.fieldset.label.length)
              return !1;
            if (this.fieldset.label === this.fieldset.name) return !1;
            const t = this.$helper.string.template(
              this.fieldset.label,
              this.content
            );
            return "…" !== t && t;
          },
          name() {
            return this.fieldset.name;
          },
        },
      },
      F$ = q$,
      U$ = (s("c21a"), Object(c["a"])(F$, P$, R$, !1, null, null, null)),
      H$ = U$.exports,
      z$ = {
        inheritAttrs: !1,
        props: { content: Object, fieldset: Object },
        methods: {
          field(t, e = null) {
            let s = null;
            return (
              Object.values(this.fieldset.tabs).forEach((e) => {
                e.fields[t] && (s = e.fields[t]);
              }),
              s || e
            );
          },
          open() {
            this.$emit("open");
          },
          update(t) {
            this.$emit("update", { ...this.content, ...t });
          },
        },
      },
      K$ = z$,
      G$ = Object(c["a"])(K$, ub, db, !1, null, null, null),
      W$ = G$.exports;
    I["a"].component("k-block", h$),
      I["a"].component("k-blocks", v$),
      I["a"].component("k-block-figure", O$),
      I["a"].component("k-block-options", L$),
      I["a"].component("k-block-selector", N$),
      I["a"].component("k-block-title", H$),
      I["a"].component("k-block-type", W$);
    const Y$ = s("9711");
    Y$.keys().map((t) => {
      const e = t.match(/\w+/)[0],
        s = e.toLowerCase();
      let i = Y$(t).default;
      (i.extends = W$), I["a"].component("k-block-type-" + s, i);
    }),
      I["a"].component("k-dialog", mt),
      I["a"].component("k-error-dialog", $t),
      I["a"].component("k-file-rename-dialog", It),
      I["a"].component("k-file-remove-dialog", Ct),
      I["a"].component("k-file-sort-dialog", Pt),
      I["a"].component("k-files-dialog", Kt),
      I["a"].component("k-form-dialog", Zt),
      I["a"].component("k-language-create-dialog", ie),
      I["a"].component("k-language-remove-dialog", ce),
      I["a"].component("k-language-update-dialog", fe),
      I["a"].component("k-page-create-dialog", ye),
      I["a"].component("k-page-duplicate-dialog", Se),
      I["a"].component("k-page-remove-dialog", Ae),
      I["a"].component("k-page-sort-dialog", Ve),
      I["a"].component("k-page-rename-dialog", Re),
      I["a"].component("k-page-status-dialog", Ke),
      I["a"].component("k-page-template-dialog", es),
      I["a"].component("k-pages-dialog", os),
      I["a"].component("k-remove-dialog", hs),
      I["a"].component("k-site-rename-dialog", vs),
      I["a"].component("k-text-dialog", Os),
      I["a"].component("k-user-create-dialog", Ls),
      I["a"].component("k-user-email-dialog", Ns),
      I["a"].component("k-user-language-dialog", Hs),
      I["a"].component("k-user-password-dialog", Vs),
      I["a"].component("k-user-remove-dialog", ei),
      I["a"].component("k-user-rename-dialog", oi),
      I["a"].component("k-user-role-dialog", hi),
      I["a"].component("k-users-dialog", vi),
      I["a"].component("k-drawer", Oi),
      I["a"].component("k-form-drawer", Li),
      I["a"].component("k-calendar", Hi),
      I["a"].component("k-counter", Vi),
      I["a"].component("k-autocomplete", Ni),
      I["a"].component("k-form", en),
      I["a"].component("k-form-buttons", ln),
      I["a"].component("k-form-indicator", mn),
      I["a"].component("k-field", fn["a"]),
      I["a"].component("k-fieldset", yn),
      I["a"].component("k-input", Sn),
      I["a"].component("k-login", An),
      I["a"].component("k-login-code", Rn),
      I["a"].component("k-upload", Kn),
      I["a"].component("k-writer", cr),
      I["a"].component("k-checkbox-input", gr),
      I["a"].component("k-checkboxes-input", _r),
      I["a"].component("k-date-input", Er),
      I["a"].component("k-datetime-input", Br),
      I["a"].component("k-email-input", Kr),
      I["a"].component("k-list-input", ro),
      I["a"].component("k-multiselect-input", ho),
      I["a"].component("k-number-input", vo),
      I["a"].component("k-password-input", wo),
      I["a"].component("k-radio-input", jo),
      I["a"].component("k-range-input", Mo),
      I["a"].component("k-select-input", Fo),
      I["a"].component("k-tags-input", Wo),
      I["a"].component("k-tel-input", Zo),
      I["a"].component("k-text-input", Fr),
      I["a"].component("k-textarea-input", il),
      I["a"].component("k-time-input", ol),
      I["a"].component("k-toggle-input", hl),
      I["a"].component("k-url-input", bl),
      I["a"].component("k-blocks-field", wl),
      I["a"].component("k-checkboxes-field", jl),
      I["a"].component("k-date-field", Ml),
      I["a"].component("k-email-field", Fl),
      I["a"].component("k-files-field", Yl),
      I["a"].component("k-gap-field", Ql),
      I["a"].component("k-headline-field", ac),
      I["a"].component("k-info-field", dc),
      I["a"].component("k-layout-field", Mc),
      I["a"].component("k-line-field", Fc),
      I["a"].component("k-list-field", Wc),
      I["a"].component("k-multiselect-field", Qc),
      I["a"].component("k-number-field", au),
      I["a"].component("k-pages-field", du),
      I["a"].component("k-password-field", bu),
      I["a"].component("k-radio-field", wu),
      I["a"].component("k-range-field", ju),
      I["a"].component("k-select-field", Mu),
      I["a"].component("k-structure-field", Uu),
      I["a"].component("k-tags-field", Yu),
      I["a"].component("k-text-field", rd),
      I["a"].component("k-textarea-field", pd),
      I["a"].component("k-tel-field", td),
      I["a"].component("k-time-field", kd),
      I["a"].component("k-toggle-field", xd),
      I["a"].component("k-url-field", Td),
      I["a"].component("k-users-field", Dd),
      I["a"].component("k-writer-field", Ud),
      I["a"].component("k-toolbar", Zd),
      I["a"].component("k-toolbar-email-dialog", ip),
      I["a"].component("k-toolbar-link-dialog", cp),
      I["a"].component("k-date-field-preview", fp),
      I["a"].component("k-email-field-preview", Op),
      I["a"].component("k-files-field-preview", Mp),
      I["a"].component("k-list-field-preview", Fp),
      I["a"].component("k-pages-field-preview", Wp),
      I["a"].component("k-toggle-field-preview", ah),
      I["a"].component("k-time-field-preview", Qp),
      I["a"].component("k-url-field-preview", yp),
      I["a"].component("k-users-field-preview", dh),
      I["a"].component("k-writer-field-preview", bh),
      I["a"].component("k-aspect-ratio", wh),
      I["a"].component("k-bar", jh),
      I["a"].component("k-box", Mh),
      I["a"].component("k-card", Fh),
      I["a"].component("k-cards", Wh),
      I["a"].component("k-collection", Qh),
      I["a"].component("k-column", am),
      I["a"].component("k-dropzone", dm),
      I["a"].component("k-empty", bm),
      I["a"].component("k-file-preview", wm),
      I["a"].component("k-grid", jm),
      I["a"].component("k-header", Mm),
      I["a"].component("k-list", Fm),
      I["a"].component("k-list-item", Wm),
      I["a"].component("k-overlay", Qm),
      I["a"].component("k-tabs", rf),
      I["a"].component("k-view", pf),
      I["a"].component("k-draggable", $f),
      I["a"].component("k-error-boundary", xf),
      I["a"].component("k-headline", Tf),
      I["a"].component("k-icon", Df),
      I["a"].component("k-image", Uf),
      I["a"].component("k-loader", Wf),
      I["a"].component("k-progress", Qf),
      I["a"].component("k-status-icon", dg),
      I["a"].component("k-sort-handle", ag),
      I["a"].component("k-text", bg),
      I["a"].component("k-user-info", wg),
      I["a"].component("k-button", jg),
      I["a"].component("k-button-disabled", Mg),
      I["a"].component("k-button-group", Fg),
      I["a"].component("k-button-link", Wg),
      I["a"].component("k-button-native", tb),
      I["a"].component("k-dropdown", rb),
      I["a"].component("k-dropdown-content", fb),
      I["a"].component("k-dropdown-item", yb),
      I["a"].component("k-languages-dropdown", Ab),
      I["a"].component("k-link", Sb),
      I["a"].component("k-pagination", Rb),
      I["a"].component("k-prev-next", Kb),
      I["a"].component("k-search", Zb),
      I["a"].component("k-tag", ik),
      I["a"].component("k-topbar", uk),
      I["a"].component("k-sections", gk),
      I["a"].component("k-info-section", wk),
      I["a"].component("k-pages-section", Tk),
      I["a"].component("k-files-section", Dk),
      I["a"].component("k-fields-section", Uk),
      I["a"].component("k-browser-view", Vk),
      I["a"].component("k-custom-view", ev),
      I["a"].component("k-error-view", rv),
      I["a"].component("k-file-view", hv),
      I["a"].component("k-installation-view", vv),
      I["a"].component("k-login-view", Ov),
      I["a"].component("k-page-view", Lv),
      I["a"].component("k-reset-password-view", Nv),
      I["a"].component("k-settings-view", Hv),
      I["a"].component("k-site-view", Vv),
      I["a"].component("k-users-view", e$),
      I["a"].component("k-user-view", o$);
    var V$ = s("2f62"),
      J$ = {
        namespaced: !0,
        state: { current: null },
        mutations: {
          CURRENT(t, e) {
            t.current = e;
          },
        },
        actions: {
          current(t, e) {
            t.commit("CURRENT", e);
          },
        },
      };
    const Z$ = (t, e) => {
      localStorage.setItem("kirby$content$" + t, JSON.stringify(e));
    };
    var X$ = {
        namespaced: !0,
        state: {
          current: null,
          models: {},
          status: { enabled: !0, lock: null, unlock: null },
        },
        getters: {
          exists: (t) => (e) =>
            Object.prototype.hasOwnProperty.call(t.models, e),
          hasChanges: (t, e) => (t) => {
            const s = e.model(t).changes;
            return Object.keys(s).length > 0;
          },
          isCurrent: (t) => (e) => t.current === e,
          id: (t, e, s) => (e) =>
            (e = e || t.current),
            s.languages.current ? e + "/" + s.languages.current.code : e,
          model: (t, e) => (s) =>
            (s = s || t.current),
            !0 === e.exists(s)
              ? t.models[s]
              : { api: null, originals: {}, values: {}, changes: {} },
          originals: (t, e) => (t) => Y(e.model(t).originals),
          values: (t, e) => (t) => ({ ...e.originals(t), ...e.changes(t) }),
          changes: (t, e) => (t) => Y(e.model(t).changes),
        },
        mutations: {
          CREATE(t, [e, s]) {
            if (!s) return !1;
            let i = t.models[e] ? t.models[e].changes : s.changes;
            I["a"].set(t.models, e, {
              api: s.api,
              originals: s.originals,
              changes: i || {},
            });
          },
          CURRENT(t, e) {
            t.current = e;
          },
          LOCK(t, e) {
            I["a"].set(t.status, "lock", e);
          },
          MOVE(t, [e, s]) {
            const i = Y(t.models[e]);
            I["a"].delete(t.models, e), I["a"].set(t.models, s, i);
            const n = localStorage.getItem("kirby$content$" + e);
            localStorage.removeItem("kirby$content$" + e),
              localStorage.setItem("kirby$content$" + s, n);
          },
          REMOVE(t, e) {
            I["a"].delete(t.models, e),
              localStorage.removeItem("kirby$content$" + e);
          },
          REVERT(t, e) {
            t.models[e] &&
              (I["a"].set(t.models[e], "changes", {}),
              localStorage.removeItem("kirby$content$" + e));
          },
          STATUS(t, e) {
            I["a"].set(t.status, "enabled", e);
          },
          UNLOCK(t, e) {
            e && I["a"].set(t.models[t.current], "changes", {}),
              I["a"].set(t.status, "unlock", e);
          },
          UPDATE(t, [e, s, i]) {
            if (!t.models[e]) return !1;
            i = Y(i);
            const n = JSON.stringify(i),
              a = JSON.stringify(t.models[e].originals[s]);
            a == n
              ? I["a"].delete(t.models[e].changes, s)
              : I["a"].set(t.models[e].changes, s, i),
              Z$(e, {
                api: t.models[e].api,
                originals: t.models[e].originals,
                changes: t.models[e].changes,
              });
          },
        },
        actions: {
          init(t) {
            Object.keys(localStorage)
              .filter((t) => t.startsWith("kirby$content$"))
              .map((t) => t.split("kirby$content$")[1])
              .forEach((e) => {
                const s = localStorage.getItem("kirby$content$" + e);
                t.commit("CREATE", [e, JSON.parse(s)]);
              }),
              Object.keys(localStorage)
                .filter((t) => t.startsWith("kirby$form$"))
                .map((t) => t.split("kirby$form$")[1])
                .forEach((e) => {
                  const s = localStorage.getItem("kirby$form$" + e);
                  let i = null;
                  try {
                    i = JSON.parse(s);
                  } catch (a) {}
                  if (!i || !i.api)
                    return localStorage.removeItem("kirby$form$" + e), !1;
                  const n = {
                    api: i.api,
                    originals: i.originals,
                    changes: i.values,
                  };
                  t.commit("CREATE", [e, n]),
                    Z$(e, n),
                    localStorage.removeItem("kirby$form$" + e);
                });
          },
          create(t, e) {
            (e.id = t.getters.id(e.id)),
              (e.id.startsWith("pages/") || e.id.startsWith("site")) &&
                delete e.content.title;
            const s = { api: e.api, originals: Y(e.content), changes: {} };
            I["a"].$api
              .get(e.api + "/unlock")
              .then((s) => {
                !0 === s.supported &&
                  !0 === s.unlocked &&
                  t.commit("UNLOCK", t.state.models[e.id].changes);
              })
              .catch(() => {}),
              t.commit("CREATE", [e.id, s]),
              t.dispatch("current", e.id);
          },
          current(t, e) {
            t.commit("CURRENT", e);
          },
          disable(t) {
            t.commit("STATUS", !1);
          },
          enable(t) {
            t.commit("STATUS", !0);
          },
          lock(t, e) {
            t.commit("LOCK", e);
          },
          move(t, [e, s]) {
            (e = t.getters.id(e)),
              (s = t.getters.id(s)),
              t.commit("MOVE", [e, s]);
          },
          remove(t, e) {
            t.commit("REMOVE", e),
              t.getters.isCurrent(e) && t.commit("CURRENT", null);
          },
          revert(t, e) {
            (e = e || t.state.current), t.commit("REVERT", e);
          },
          save(t, e) {
            if (
              ((e = e || t.state.current),
              t.getters.isCurrent(e) && !1 === t.state.status.enabled)
            )
              return !1;
            t.dispatch("disable");
            const s = t.getters.model(e),
              i = { ...s.originals, ...s.changes };
            return I["a"].$api
              .patch(s.api, i)
              .then(() => {
                t.commit("CREATE", [e, { ...s, originals: i }]),
                  t.dispatch("revert", e),
                  t.dispatch("enable");
              })
              .catch((e) => {
                throw (t.dispatch("enable"), e);
              });
          },
          unlock(t, e) {
            t.commit("UNLOCK", e);
          },
          update(t, [e, s, i]) {
            (i = i || t.state.current), t.commit("UPDATE", [i, e, s]);
          },
        },
      },
      Q$ = {
        namespaced: !0,
        state: { open: [] },
        mutations: {
          CLOSE(t, e) {
            t.open = t.open.filter((t) => t.id !== e);
          },
          GOTO(t, e) {
            t.open = t.open.filter((t) => t.id === e);
          },
          OPEN(t, e) {
            t.open.push(e);
          },
        },
        actions: {
          close(t, e) {
            t.commit("CLOSE", e);
          },
          goto(t, e) {
            t.commit("GOTO", e);
          },
          open(t, e) {
            t.commit("OPEN", e);
          },
        },
      },
      ty = {
        namespaced: !0,
        state: { instance: null, clock: 0, step: 5, beats: [] },
        mutations: {
          ADD(t, e) {
            t.beats.push(e);
          },
          CLEAR(t) {
            clearInterval(t.instance), (t.clock = 0);
          },
          CLOCK(t) {
            t.clock += t.step;
          },
          INITIALIZE(t, e) {
            t.instance = e;
          },
          REMOVE(t, e) {
            const s = t.beats.map((t) => t.handler).indexOf(e);
            -1 !== s && I["a"].delete(t.beats, s);
          },
        },
        actions: {
          add(t, e) {
            (e = { handler: e[0] || e, interval: e[1] || t.state.step }),
              e.handler(),
              t.commit("ADD", e),
              1 === t.state.beats.length && t.dispatch("run");
          },
          clear(t) {
            t.commit("CLEAR");
          },
          remove(t, e) {
            t.commit("REMOVE", e),
              t.state.beats.length < 1 && t.commit("CLEAR");
          },
          run(t) {
            t.commit("CLEAR"),
              t.commit(
                "INITIALIZE",
                setInterval(() => {
                  t.commit("CLOCK"),
                    t.state.beats.forEach((e) => {
                      t.state.clock % e.interval === 0 && e.handler();
                    });
                }, 1e3 * t.state.step)
              );
          },
        },
      },
      ey = {
        namespaced: !0,
        state: { all: [], current: null, default: null },
        mutations: {
          SET_ALL(t, e) {
            t.all = e.map((t) => ({
              code: t.code,
              default: t.default,
              direction: t.direction,
              locale: t.locale,
              name: t.name,
              rules: t.rules,
              url: t.url,
            }));
          },
          SET_CURRENT(t, e) {
            (t.current = e),
              e && e.code && localStorage.setItem("kirby$language", e.code);
          },
          SET_DEFAULT(t, e) {
            t.default = e;
          },
        },
        actions: {
          current(t, e) {
            t.commit("SET_CURRENT", e);
          },
          install(t, e) {
            const s = e.filter((t) => t.default)[0];
            t.commit("SET_ALL", e), t.commit("SET_DEFAULT", s);
            const i = localStorage.getItem("kirby$language");
            if (i) {
              const s = e.filter((t) => t.code === i)[0];
              if (s) return void t.dispatch("current", s);
            }
            t.dispatch("current", s || e[0] || null);
          },
          async load(t) {
            const e = await I["a"].$api.languages.list();
            t.dispatch("install", e.data);
          },
        },
      },
      sy = {
        timer: null,
        namespaced: !0,
        state: { type: null, message: null, details: null, timeout: null },
        mutations: {
          SET(t, e) {
            (t.type = e.type),
              (t.message = e.message),
              (t.details = e.details),
              (t.timeout = e.timeout);
          },
          UNSET(t) {
            (t.type = null),
              (t.message = null),
              (t.details = null),
              (t.timeout = null);
          },
        },
        actions: {
          close(t) {
            clearTimeout(this.timer), t.commit("UNSET");
          },
          open(t, e) {
            t.dispatch("close"),
              t.commit("SET", e),
              e.timeout &&
                (this.timer = setTimeout(() => {
                  t.dispatch("close");
                }, e.timeout));
          },
          success(t, e) {
            "string" === typeof e && (e = { message: e }),
              t.dispatch("open", { type: "success", timeout: 4e3, ...e });
          },
          error(t, e) {
            "string" === typeof e && (e = { message: e }),
              t.dispatch("open", { type: "error", ...e });
          },
        },
      },
      iy = {
        namespaced: !0,
        state: { info: { title: null } },
        mutations: {
          SET_INFO(t, e) {
            t.info = e;
          },
          SET_LICENSE(t, e) {
            t.info.license = e;
          },
          SET_TITLE(t, e) {
            t.info.title = e;
          },
        },
        actions: {
          async load(t, e) {
            if (!e && t.state.info.isReady && t.rootState.user.current)
              return new Promise((e) => {
                e(t.state.info);
              });
            try {
              const e = await I["a"].$api.system.get();
              return (
                t.commit("SET_INFO", {
                  isReady: e.isInstalled && e.isOk,
                  ...e,
                }),
                e.languages &&
                  t.dispatch("languages/install", e.languages, { root: !0 }),
                t.dispatch("translation/install", e.translation, { root: !0 }),
                t.dispatch("translation/activate", e.translation.id, {
                  root: !0,
                }),
                e.user && t.dispatch("user/current", e.user, { root: !0 }),
                t.state.info
              );
            } catch (s) {
              t.commit("SET_INFO", { isBroken: !0, error: s.message });
            }
          },
          register(t, e) {
            t.commit("SET_LICENSE", e);
          },
          title(t, e) {
            t.commit("SET_TITLE", e);
          },
        },
      },
      ny = {
        namespaced: !0,
        state: { current: null, installed: [] },
        mutations: {
          SET_CURRENT(t, e) {
            t.current = e;
          },
          INSTALL(t, e) {
            t.installed[e.id] = e;
          },
        },
        actions: {
          load(t, e) {
            return I["a"].$api.translations.get(e);
          },
          install(t, e) {
            t.commit("INSTALL", e), I["a"].i18n.add(e.id, e.data);
          },
          async activate(t, e) {
            const s = t.state.installed[e];
            if (!s) {
              const s = await t.dispatch("load", e);
              return t.dispatch("install", s), void t.dispatch("activate", e);
            }
            I["a"].i18n.set(e),
              t.commit("SET_CURRENT", e),
              (document.dir = s.direction),
              (document.documentElement.lang = e);
          },
        },
      },
      ay = {
        namespaced: !0,
        state: {
          current: null,
          path: null,
          pendingEmail: null,
          pendingChallenge: null,
        },
        mutations: {
          SET_CURRENT(t, e) {
            (t.current = e),
              (t.pendingEmail = null),
              (t.pendingChallenge = null),
              e && e.permissions
                ? ((I["a"].prototype.$user = e),
                  (I["a"].prototype.$permissions = e.permissions))
                : ((I["a"].prototype.$user = null),
                  (I["a"].prototype.$permissions = null));
          },
          SET_PATH(t, e) {
            t.path = e;
          },
          SET_PENDING(t, { email: e, challenge: s }) {
            (t.pendingEmail = e),
              (t.pendingChallenge = s),
              (t.user = null),
              (I["a"].prototype.$user = null),
              (I["a"].prototype.$permissions = null);
          },
        },
        actions: {
          current(t, e) {
            t.commit("SET_CURRENT", e);
          },
          email(t, e) {
            t.commit("SET_CURRENT", { ...t.state.current, email: e });
          },
          language(t, e) {
            t.dispatch("translation/activate", e, { root: !0 }),
              t.commit("SET_CURRENT", { ...t.state.current, language: e });
          },
          async load(t) {
            const e = await I["a"].$api.auth.user();
            return t.commit("SET_CURRENT", e), e;
          },
          login(t, e) {
            return (
              t.commit("SET_CURRENT", e),
              t.dispatch("translation/activate", e.language, { root: !0 }),
              I["a"].prototype.$go(t.state.path || "/"),
              e
            );
          },
          async logout(t, e) {
            if ((t.commit("SET_CURRENT", null), e))
              window.location.href = (window.panel.url || "") + "/login";
            else
              try {
                await I["a"].$api.auth.logout();
              } finally {
                I["a"].prototype.$go("/login");
              }
          },
          name(t, e) {
            t.commit("SET_CURRENT", { ...t.state.current, name: e });
          },
          pending(t, e) {
            t.commit("SET_PENDING", e);
          },
          visit(t, e) {
            t.commit("SET_PATH", e);
          },
        },
      };
    I["a"].use(V$["a"]);
    var ry = new V$["a"].Store({
      strict: !1,
      state: {
        breadcrumb: [],
        dialog: null,
        drag: null,
        fatal: null,
        isLoading: !1,
        title: null,
        view: null,
      },
      mutations: {
        SET_BREADCRUMB(t, e) {
          t.breadcrumb = e;
        },
        SET_DIALOG(t, e) {
          t.dialog = e;
        },
        SET_DRAG(t, e) {
          t.drag = e;
        },
        SET_FATAL(t, e) {
          t.fatal = e;
        },
        SET_TITLE(t, e) {
          t.title = e;
        },
        SET_VIEW(t, e) {
          t.view = e;
        },
        START_LOADING(t) {
          t.isLoading = !0;
        },
        STOP_LOADING(t) {
          t.isLoading = !1;
        },
      },
      actions: {
        breadcrumb(t, e) {
          t.commit("SET_BREADCRUMB", e);
        },
        dialog(t, e) {
          t.commit("SET_DIALOG", e);
        },
        drag(t, e) {
          t.commit("SET_DRAG", e);
        },
        fatal(t, e) {
          t.commit("SET_FATAL", e);
        },
        isLoading(t, e) {
          t.commit(!0 === e ? "START_LOADING" : "STOP_LOADING");
        },
        title(t, e) {
          let s;
          (s = t.state.user.current
            ? I["a"].$api.site.get(["title"])
            : new Promise((e) => {
                e(t.state.system.info);
              })),
            s.then((s) => {
              t.commit("SET_TITLE", e),
                t.dispatch("system/title", s.title),
                (document.title = e || ""),
                (document.title += null !== e ? " | " + s.title : s.title);
            });
        },
        view(t, e) {
          t.commit("SET_VIEW", e);
        },
      },
      modules: {
        blocks: J$,
        content: X$,
        drawers: Q$,
        heartbeat: ty,
        languages: ey,
        notification: sy,
        system: iy,
        translation: ny,
        user: ay,
      },
    });
    (I["a"].config.errorHandler = (t) => {
      O.debug && window.console.error(t),
        ry.dispatch("notification/error", {
          message: t.message || "An error occurred. Please reload the Panel.",
        });
    }),
      (window.panel = window.panel || {}),
      (window.panel.error = (t, e) => {
        O.debug && window.console.error(t + ": " + e),
          ry.dispatch("error", t + ". See the console for more information.");
      });
    var oy = s("f2f3");
    I["a"].use(oy["a"].plugin, ry);
    var ly = s("19e9"),
      cy = s.n(ly),
      uy = s("5a0c"),
      dy = s.n(uy),
      py = s("f906"),
      hy = s.n(py),
      my = s("0ecf"),
      fy = s.n(my);
    dy.a.extend(hy.a),
      dy.a.extend(fy.a),
      (I["a"].prototype.$library = { autosize: cy.a, dayjs: dy.a });
    let gy = {};
    for (var by in I["a"].options.components)
      gy[by] = I["a"].options.components[by];
    let ky = { section: vk };
    Object.entries(window.panel.plugins.components).forEach(([t, e]) => {
      e.template || e.render || e.extends
        ? (e.extends &&
            "string" === typeof e.extends &&
            ((e.extends = gy[e.extends].extend({
              options: e,
              components: { ...gy, ...(e.components || {}) },
            })),
            e.template && (e.render = null)),
          e.mixins &&
            (e.mixins = e.mixins.map((t) =>
              "string" === typeof t ? ky[t] : t
            )),
          gy[t] && window.console.warn(`Plugin is replacing "${t}"`),
          I["a"].component(t, e),
          (gy[t] = I["a"].options.components[t]))
        : ry.dispatch(
            "notification/error",
            `Neither template or render method provided nor extending a component when loading plugin component "${t}". The component has not been registered.`
          );
    }),
      Object.entries(window.panel.plugins.views).forEach(([t, e]) => {
        if (!e.component)
          return (
            ry.dispatch(
              "notification/error",
              `No view component provided when loading view "${t}". The view has not been registered.`
            ),
            void delete window.panel.plugins.views[t]
          );
        (e.link = "/plugins/" + t),
          void 0 === e.icon && (e.icon = "page"),
          void 0 === e.menu && (e.menu = !0),
          (window.panel.plugins.views[t] = {
            id: t,
            text: e.text || e.label,
            link: e.link,
            icon: e.icon,
            menu: e.menu,
          }),
          I["a"].component("k-" + t + "-plugin-view", e.component);
      }),
      window.panel.plugins.use.forEach((t) => {
        I["a"].use(t);
      });
    var vy = s("82f1"),
      $y = s("8c4f"),
      yy = function (t, e, s) {
        ry.dispatch("system/load").then(() => {
          const e = ry.state.user.current;
          if (!e)
            return (
              ry.dispatch("user/visit", t.path),
              ry.dispatch("user/logout"),
              s(!1)
            );
          const i = e.permissions.access;
          return !1 === i.panel
            ? ((window.location.href = O.site), s(!1))
            : !1 === i[t.meta.view]
            ? (ry.dispatch("notification/error", {
                message: I["a"].i18n.translate("error.access.view"),
              }),
              s(!1 === i.site ? "/account" : "/"))
            : void s();
        });
      };
    let _y = [
      { path: "/", name: "Home", redirect: "/site" },
      {
        path: "/browser",
        name: "Browser",
        component: I["a"].component("k-browser-view"),
        meta: { outside: !0 },
      },
      {
        path: "/login",
        component: I["a"].component("k-login-view"),
        meta: { outside: !0 },
      },
      {
        path: "/logout",
        beforeEnter() {
          Object.keys(localStorage).forEach((t) => {
            t.startsWith("kirby$content$") && localStorage.removeItem(t);
          }),
            ry.dispatch("user/logout");
        },
        meta: { outside: !0 },
      },
      {
        path: "/installation",
        component: I["a"].component("k-installation-view"),
        meta: { outside: !0 },
      },
      {
        path: "/site",
        name: "Site",
        meta: { view: "site" },
        component: I["a"].component("k-site-view"),
        beforeEnter: yy,
        props: (t) => ({ tab: t.hash.slice(1) || "main" }),
      },
      {
        path: "/site/files/:filename",
        name: "SiteFile",
        meta: { view: "site" },
        component: I["a"].component("k-file-view"),
        beforeEnter: yy,
        props: (t) => ({
          filename: t.params.filename,
          path: "site",
          tab: t.hash.slice(1) || "main",
        }),
      },
      {
        path: "/pages/:path/files/:filename",
        name: "PageFile",
        meta: { view: "site" },
        component: I["a"].component("k-file-view"),
        beforeEnter: yy,
        props: (t) => ({
          filename: t.params.filename,
          path: "pages/" + t.params.path,
          tab: t.hash.slice(1) || "main",
        }),
      },
      {
        path: "/users/:path/files/:filename",
        name: "UserFile",
        meta: { view: "users" },
        component: I["a"].component("k-file-view"),
        beforeEnter: yy,
        props: (t) => ({
          filename: t.params.filename,
          path: "users/" + t.params.path,
          tab: t.hash.slice(1) || "main",
        }),
      },
      {
        path: "/pages/:path",
        name: "Page",
        meta: { view: "site" },
        component: I["a"].component("k-page-view"),
        beforeEnter: yy,
        props: (t) => ({ path: t.params.path, tab: t.hash.slice(1) || "main" }),
      },
      {
        path: "/settings",
        name: "Settings",
        meta: { view: "settings" },
        component: I["a"].component("k-settings-view"),
        beforeEnter: yy,
      },
      {
        path: "/users/role/:role",
        name: "UsersByRole",
        meta: { view: "users" },
        component: I["a"].component("k-users-view"),
        beforeEnter: yy,
        props: (t) => ({ role: t.params.role }),
      },
      {
        path: "/users",
        name: "Users",
        meta: { view: "users" },
        beforeEnter: yy,
        component: I["a"].component("k-users-view"),
      },
      {
        path: "/users/:id",
        name: "User",
        meta: { view: "users" },
        component: I["a"].component("k-user-view"),
        beforeEnter: yy,
        props: (t) => ({ id: t.params.id, tab: t.hash.slice(1) || "main" }),
      },
      {
        path: "/account",
        name: "Account",
        meta: { view: "account" },
        component: I["a"].component("k-user-view"),
        beforeEnter: yy,
        props: (t) => ({
          id: !!ry.state.user.current && ry.state.user.current.id,
          tab: t.hash.slice(1) || "main",
        }),
      },
      {
        path: "/reset-password",
        name: "Reset password",
        meta: { view: "resetPassword" },
        component: I["a"].component("k-reset-password-view"),
        beforeEnter: yy,
      },
      {
        path: "/plugins/:id",
        name: "Plugin",
        meta: { view: "plugin" },
        props: (t) => ({ plugin: t.params.id, hash: t.hash.slice(1) }),
        beforeEnter: yy,
        component: I["a"].component("k-custom-view"),
      },
    ];
    _y.push({
      path: "*",
      name: "NotFound",
      beforeEnter: (t, e, s) => {
        s("/");
      },
    });
    var wy = _y;
    I["a"].use($y["a"]);
    const xy = new $y["a"]({
      mode: "history",
      routes: wy,
      url: "/" === O.url ? "" : O.url,
    });
    xy.beforeEach((t, e, s) => {
      "Browser" !== t.name && !1 === Kk.all() && s("/browser"),
        t.meta.outside || ry.dispatch("user/visit", t.path),
        "plugin" === t.meta.view
          ? ry.dispatch("view", t.params.id)
          : ry.dispatch("view", t.meta.view),
        ry.dispatch("content/lock", null),
        ry.dispatch("content/unlock", null),
        ry.dispatch("heartbeat/clear"),
        s();
    });
    var Oy = xy;
    (I["a"].config.productionTip = !1),
      (I["a"].config.devtools = !0),
      I["a"].use(rt),
      I["a"].use(K),
      I["a"].use(z),
      I["a"].use(W.a),
      I["a"].use(vy["a"]),
      I["a"].use(H, ry),
      (I["a"].$t = I["a"].prototype.$t),
      (I["a"].prototype.$go = (t) => {
        (t = t.split("#")),
          (t = { path: t[0], hash: t[1] || null }),
          Oy.push(t).catch((t) => {
            if (t && t.name && "NavigationDuplicated" === t.name) return !0;
            throw t;
          });
      }),
      new I["a"]({
        router: Oy,
        store: ry,
        created() {
          (window.panel.app = this),
            window.panel.plugins.created.forEach((t) => {
              t(this);
            }),
            this.$store.dispatch("content/init");
        },
        render: (t) => t(T),
      }).$mount("#app");
  },
  "56f2": function (t, e, s) {},
  "577a": function (t, e, s) {},
  "580a": function (t, e, s) {
    "use strict";
    s("ae29");
  },
  "5aee": function (t, e, s) {
    "use strict";
    s("931e");
  },
  "5b23": function (t, e, s) {
    "use strict";
    s("05be");
  },
  "5c0b": function (t, e, s) {
    "use strict";
    s("9c0c");
  },
  "5c47": function (t, e, s) {},
  "5c57": function (t, e, s) {},
  "5cbe": function (t, e, s) {},
  "5d33": function (t, e, s) {
    "use strict";
    s("4e0b");
  },
  "5e2d": function (t, e, s) {},
  "5e77": function (t, e, s) {},
  "5e9a": function (t, e, s) {
    "use strict";
    s("aa34");
  },
  "5f34": function (t, e, s) {
    "use strict";
    s("b231");
  },
  "5f43": function (t, e, s) {},
  "5f52": function (t, e, s) {
    "use strict";
    s("26c3");
  },
  6018: function (t, e, s) {
    "use strict";
    s("2a08");
  },
  "625a": function (t, e, s) {
    "use strict";
    s("d3bb");
  },
  6284: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-input", {
          ref: "input",
          staticClass: "k-block-type-markdown-input",
          attrs: {
            buttons: !1,
            placeholder: t.placeholder,
            spellcheck: !1,
            value: t.content.text,
            type: "textarea",
          },
          on: {
            input: function (e) {
              return t.update({ text: e });
            },
          },
        });
      },
      n = [],
      a = {
        computed: {
          placeholder() {
            return this.field("text", {}).placeholder;
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      r = a,
      o = (s("af44"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  "64e4": function (t, e, s) {
    "use strict";
    s("99ed");
  },
  "653a": function (t, e, s) {},
  "696b": function (t, e, s) {
    "use strict";
    s("40a6");
  },
  6992: function (t, e, s) {},
  "6a16": function (t, e, s) {
    "use strict";
    s("ca47");
  },
  "6a18": function (t, e, s) {
    "use strict";
    s("c57e");
  },
  "6ae1": function (t, e, s) {},
  "6ae8": function (t, e, s) {},
  "6bc0": function (t, e, s) {},
  "6bcd": function (t, e, s) {
    "use strict";
    s("d49c");
  },
  "6f7b": function (t, e, s) {
    "use strict";
    s("f13c");
  },
  7041: function (t, e, s) {},
  7086: function (t, e, s) {},
  7187: function (t, e, s) {},
  "718c": function (t, e, s) {
    "use strict";
    s("43bf");
  },
  7491: function (t, e, s) {},
  7568: function (t, e, s) {
    "use strict";
    s("6bc0");
  },
  "772f": function (t, e, s) {},
  7737: function (t, e, s) {
    "use strict";
    s("2609");
  },
  7740: function (t, e, s) {},
  7997: function (t, e, s) {},
  "7a7d": function (t, e, s) {
    "use strict";
    s("53fd");
  },
  "7b55": function (t, e, s) {},
  "7d5d": function (t, e, s) {
    "use strict";
    s("1e4a");
  },
  "7dc7": function (t, e, s) {
    "use strict";
    s("6992");
  },
  "7e85": function (t, e, s) {
    "use strict";
    s("f239");
  },
  "7f51": function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "k-block-type-heading-input",
            attrs: { "data-level": t.content.level },
          },
          [
            s("k-writer", {
              ref: "input",
              attrs: {
                inline: !0,
                marks: t.textField.marks,
                placeholder: t.textField.placeholder,
                value: t.content.text,
              },
              on: {
                input: function (e) {
                  return t.update({ text: e });
                },
              },
            }),
          ],
          1
        );
      },
      n = [],
      a = {
        computed: {
          textField() {
            return this.field("text", { marks: !0 });
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      r = a,
      o = (s("455b"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  "7f6e": function (t, e, s) {
    "use strict";
    s("772f");
  },
  8065: function (t, e, s) {},
  8152: function (t, e, s) {},
  8216: function (t, e, s) {},
  "82b4": function (t, e, s) {},
  "82c9": function (t, e, s) {
    "use strict";
    s("e661");
  },
  "862b": function (t, e, s) {
    "use strict";
    s("f0f6");
  },
  "86ab": function (t, e, s) {},
  "86c7": function (t, e) {
    RegExp.escape = function (t) {
      return t.replace(new RegExp("[-/\\\\^$*+?.()[\\]{}]", "gu"), "\\$&");
    };
  },
  "86eb": function (t, e, s) {},
  "877d": function (t, e, s) {},
  "893d": function (t, e, s) {
    "use strict";
    s("fdbf");
  },
  "8a02": function (t, e, s) {},
  "8abf": function (t, e, s) {},
  "8c28": function (t, e, s) {
    "use strict";
    s("4f8f");
  },
  "8d8b": function (t, e, s) {
    "use strict";
    s("e292");
  },
  "8f7d": function (t, e, s) {
    "use strict";
    s("c82a");
  },
  "907a": function (t, e, s) {},
  "91a7": function (t, e, s) {
    "use strict";
    s("653a");
  },
  "931e": function (t, e, s) {},
  "96a5": function (t, e, s) {
    "use strict";
    s("5c57");
  },
  9711: function (t, e, s) {
    var i = {
      "./Code.vue": "1bde",
      "./Default.vue": "367b",
      "./Gallery.vue": "3273",
      "./Heading.vue": "7f51",
      "./Image.vue": "9978",
      "./List.vue": "1991",
      "./Markdown.vue": "6284",
      "./Quote.vue": "d55e",
      "./Table.vue": "e54a",
      "./Text.vue": "dc40",
      "./Video.vue": "a08f",
    };
    function n(t) {
      var e = a(t);
      return s(e);
    }
    function a(t) {
      if (!s.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    (n.keys = function () {
      return Object.keys(i);
    }),
      (n.resolve = a),
      (t.exports = n),
      (n.id = "9711");
  },
  "977f": function (t, e, s) {
    "use strict";
    s("ccf4");
  },
  9799: function (t, e, s) {
    "use strict";
    s("8152");
  },
  "98a1": function (t, e, s) {
    "use strict";
    s("20f8");
  },
  9978: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-block-figure",
          {
            attrs: {
              caption: t.content.caption,
              "caption-marks": t.captionMarks,
              "empty-text": t.$t("field.blocks.image.placeholder") + " …",
              "is-empty": !t.src,
              "empty-icon": "image",
            },
            on: { open: t.open, update: t.update },
          },
          [
            t.src
              ? [
                  t.ratio
                    ? s(
                        "k-aspect-ratio",
                        { attrs: { ratio: t.ratio, cover: t.crop } },
                        [
                          s("img", {
                            attrs: { alt: t.content.alt, src: t.src },
                          }),
                        ]
                      )
                    : s("img", {
                        staticClass: "k-block-type-image-auto",
                        attrs: { alt: t.content.alt, src: t.src },
                      }),
                ]
              : t._e(),
          ],
          2
        );
      },
      n = [],
      a = {
        computed: {
          captionMarks() {
            return this.field("caption", { marks: !0 }).marks;
          },
          crop() {
            return this.content.crop || !1;
          },
          src() {
            return "web" === this.content.location
              ? this.content.src
              : !(!this.content.image[0] || !this.content.image[0].url) &&
                  this.content.image[0].url;
          },
          ratio() {
            return this.content.ratio || !1;
          },
        },
      },
      r = a,
      o = (s("625a"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  "99ed": function (t, e, s) {},
  "9aff": function (t, e, s) {},
  "9bd5": function (t, e, s) {
    "use strict";
    s("3e1e");
  },
  "9c0c": function (t, e, s) {},
  "9c44": function (t, e, s) {
    "use strict";
    s("56f2");
  },
  "9d40": function (t, e, s) {},
  "9d48": function (t, e, s) {},
  "9d9f": function (t, e, s) {},
  "9e26": function (t, e, s) {
    "use strict";
    s("9d9f");
  },
  "9efc": function (t, e, s) {},
  "9fc0": function (t, e, s) {
    "use strict";
    var i = s("38b6");
    e["a"] = {
      props: { ...i["a"].props },
      methods: {
        displayText(t, e) {
          switch (t.type) {
            case "user":
              return e.email;
            case "date": {
              const s = this.$library.dayjs(e),
                i = !0 === t.time ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD";
              return s.isValid() ? s.format(i) : "";
            }
            case "tags":
            case "multiselect":
              return e.map((t) => t.text).join(", ");
            case "checkboxes":
              return e
                .map((e) => {
                  let s = e;
                  return (
                    t.options.forEach((t) => {
                      t.value === e && (s = t.text);
                    }),
                    s
                  );
                })
                .join(", ");
            case "radio":
            case "select": {
              const s = t.options.filter((t) => t.value === e)[0];
              return s ? s.text : null;
            }
          }
          return "object" === typeof e && null !== e ? "…" : e.toString();
        },
        previewExists(t) {
          return this.$helper.isComponent(`k-${t}-field-preview`);
        },
        width(t) {
          if (!t) return "auto";
          const e = t.toString().split("/");
          if (2 !== e.length) return "auto";
          const s = Number(e[0]),
            i = Number(e[1]);
          return parseFloat(String((100 / i) * s)).toFixed(2) + "%";
        },
      },
    };
  },
  a08f: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "k-block-figure",
          {
            attrs: {
              caption: t.content.caption,
              "caption-marks": t.captionMarks,
              "empty-text": t.$t("field.blocks.video.placeholder") + " …",
              "is-empty": !t.video,
              "empty-icon": "video",
            },
            on: { open: t.open, update: t.update },
          },
          [
            s("k-aspect-ratio", { attrs: { ratio: "16/9" } }, [
              t.video ? s("iframe", { attrs: { src: t.video } }) : t._e(),
            ]),
          ],
          1
        );
      },
      n = [],
      a = {
        computed: {
          captionMarks() {
            return this.field("caption", { marks: !0 }).marks;
          },
          video() {
            var t = this.content.url;
            if (!t) return !1;
            var e =
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
              s = t.match(e);
            if (s) return "https://www.youtube.com/embed/" + s[2];
            var i = /vimeo\.com\/([0-9]+)/,
              n = t.match(i);
            return !!n && "https://player.vimeo.com/video/" + n[1];
          },
        },
      },
      r = a,
      o = s("2877"),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  a11f: function (t, e, s) {},
  a134: function (t, e, s) {
    "use strict";
    s("b329");
  },
  a2eb: function (t, e, s) {},
  a567: function (t, e, s) {
    "use strict";
    s("6ae8");
  },
  a5f3: function (t, e, s) {
    "use strict";
    s("1174");
  },
  a659: function (t, e, s) {
    "use strict";
    s("86eb");
  },
  a66d: function (t, e, s) {
    "use strict";
    s("f464");
  },
  a901: function (t, e, s) {},
  aa34: function (t, e, s) {},
  ac27: function (t, e, s) {
    "use strict";
    s("3dcf");
  },
  ae14: function (t, e, s) {
    "use strict";
    s("7997");
  },
  ae1b: function (t, e, s) {
    "use strict";
    s("e928");
  },
  ae29: function (t, e, s) {},
  af44: function (t, e, s) {
    "use strict";
    s("907a");
  },
  b0d6: function (t, e, s) {
    "use strict";
    s("c6d0");
  },
  b231: function (t, e, s) {},
  b329: function (t, e, s) {},
  b5d2: function (t, e, s) {
    "use strict";
    s("526c");
  },
  b746: function (t, e, s) {
    "use strict";
    s("7187");
  },
  b7a8: function (t, e, s) {
    "use strict";
    s("9efc");
  },
  b846: function (t, e, s) {},
  ba8f: function (t, e, s) {
    "use strict";
    s("0643");
  },
  bad3: function (t, e, s) {},
  bb41: function (t, e, s) {
    "use strict";
    s("49b6");
  },
  bbdf: function (t, e, s) {
    "use strict";
    s("e729");
  },
  bd96: function (t, e, s) {
    "use strict";
    s("e947");
  },
  bf53: function (t, e, s) {
    "use strict";
    s("ecf0");
  },
  c08c: function (t, e, s) {},
  c119: function (t, e, s) {
    "use strict";
    s("8065");
  },
  c130: function (t, e, s) {},
  c21a: function (t, e, s) {
    "use strict";
    s("c577");
  },
  c24c: function (t, e, s) {},
  c362: function (t, e, s) {},
  c577: function (t, e, s) {},
  c57e: function (t, e, s) {},
  c6d0: function (t, e, s) {},
  c7c8: function (t, e, s) {
    "use strict";
    s("7086");
  },
  c82a: function (t, e, s) {},
  c857: function (t, e, s) {
    "use strict";
    s("022d");
  },
  c9cb: function (t, e, s) {
    "use strict";
    s("577a");
  },
  ca47: function (t, e, s) {},
  cb5b: function (t, e, s) {},
  cb8f: function (t, e, s) {
    "use strict";
    s("82b4");
  },
  cc79: function (t, e, s) {
    "use strict";
    s("0de1");
  },
  cca8: function (t, e, s) {
    "use strict";
    s("b846");
  },
  ccf4: function (t, e, s) {},
  d0c1: function (t, e, s) {
    "use strict";
    s("d4e5");
  },
  d221: function (t, e, s) {
    "use strict";
    s("1a8b");
  },
  d3bb: function (t, e, s) {},
  d49c: function (t, e, s) {},
  d4e5: function (t, e, s) {},
  d55e: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "k-block-type-quote-editor" },
          [
            s("k-writer", {
              ref: "text",
              staticClass: "k-block-type-quote-text",
              attrs: {
                inline: !0,
                marks: t.textField.marks,
                placeholder: t.textField.placeholder,
                value: t.content.text,
              },
              on: {
                input: function (e) {
                  return t.update({ text: e });
                },
              },
            }),
            s("k-writer", {
              ref: "citation",
              staticClass: "k-block-type-quote-citation",
              attrs: {
                inline: !0,
                marks: t.citationField.marks,
                placeholder: t.citationField.placeholder,
                value: t.content.citation,
              },
              on: {
                input: function (e) {
                  return t.update({ citation: e });
                },
              },
            }),
          ],
          1
        );
      },
      n = [],
      a = {
        computed: {
          citationField() {
            return this.field("citation", {});
          },
          textField() {
            return this.field("text", {});
          },
        },
        methods: {
          focus() {
            this.$refs.text.focus();
          },
        },
      },
      r = a,
      o = (s("91a7"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  d6fc: function (t, e, s) {
    "use strict";
    s("877d");
  },
  d733: function (t, e, s) {},
  daa8: function (t, e, s) {
    "use strict";
    s("04f3");
  },
  dc40: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("k-writer", {
          ref: "input",
          staticClass: "k-block-type-text-input",
          attrs: {
            inline: t.textField.inline,
            marks: t.textField.marks,
            nodes: t.textField.nodes,
            placeholder: t.textField.placeholder,
            value: t.content.text,
          },
          on: {
            input: function (e) {
              return t.update({ text: e });
            },
          },
        });
      },
      n = [],
      a = {
        computed: {
          textField() {
            return this.field("text", {});
          },
        },
        methods: {
          focus() {
            this.$refs.input.focus();
          },
        },
      },
      r = a,
      o = (s("f293"), s("2877")),
      l = Object(o["a"])(r, i, n, !1, null, null, null);
    e["default"] = l.exports;
  },
  dd70: function (t, e, s) {
    "use strict";
    s("a901");
  },
  ddfd: function (t, e, s) {
    "use strict";
    s("7491");
  },
  df0d: function (t, e, s) {
    "use strict";
    s("5c47");
  },
  e1f3: function (t, e, s) {
    "use strict";
    s("3b07");
  },
  e292: function (t, e, s) {},
  e2d7: function (t, e, s) {},
  e54a: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "table",
          {
            staticClass: "k-block-type-table-preview",
            on: { dblclick: t.open },
          },
          [
            s(
              "tr",
              t._l(t.columns, function (e, i) {
                return s(
                  "th",
                  {
                    key: i,
                    style: "width:" + t.width(e.width),
                    attrs: { "data-align": e.align },
                  },
                  [t._v(" " + t._s(e.label) + " ")]
                );
              }),
              0
            ),
            0 === t.rows.length
              ? s("tr", [
                  s("td", { attrs: { colspan: t.columnsCount } }, [
                    s(
                      "small",
                      { staticClass: "k-block-type-table-preview-empty" },
                      [t._v(t._s(t.$t("field.structure.empty")))]
                    ),
                  ]),
                ])
              : t._l(t.rows, function (e, i) {
                  return s(
                    "tr",
                    { key: i },
                    t._l(t.columns, function (n, a) {
                      return s(
                        "td",
                        {
                          key: i + "-" + a,
                          style: "width:" + t.width(n.width),
                          attrs: { "data-align": n.align },
                        },
                        [
                          t.previewExists(n.type)
                            ? s("k-" + n.type + "-field-preview", {
                                tag: "component",
                                attrs: {
                                  value: e[a],
                                  column: n,
                                  field: t.fields[a],
                                },
                              })
                            : [
                                s(
                                  "p",
                                  { staticClass: "k-structure-table-text" },
                                  [
                                    t._v(
                                      " " +
                                        t._s(n.before) +
                                        " " +
                                        t._s(
                                          t.displayText(t.fields[a], e[a]) ||
                                            "–"
                                        ) +
                                        " " +
                                        t._s(n.after) +
                                        " "
                                    ),
                                  ]
                                ),
                              ],
                        ],
                        2
                      );
                    }),
                    0
                  );
                }),
          ],
          2
        );
      },
      n = [],
      a = s("9fc0"),
      r = {
        mixins: [a["a"]],
        inheritAttrs: !1,
        computed: {
          columns() {
            return this.table.columns || this.fields;
          },
          columnsCount() {
            return Object.keys(this.columns).length;
          },
          fields() {
            return this.table.fields || {};
          },
          rows() {
            return this.content.rows || [];
          },
          table() {
            let t = null;
            return (
              Object.values(this.fieldset.tabs).forEach((e) => {
                e.fields.rows && (t = e.fields.rows);
              }),
              t || {}
            );
          },
        },
      },
      o = r,
      l = (s("f635"), s("2877")),
      c = Object(l["a"])(o, i, n, !1, null, null, null);
    e["default"] = c.exports;
  },
  e661: function (t, e, s) {},
  e729: function (t, e, s) {},
  e791: function (t, e, s) {
    "use strict";
    s("2283");
  },
  e863: function (t, e, s) {},
  e928: function (t, e, s) {},
  e947: function (t, e, s) {},
  ecf0: function (t, e, s) {},
  ee15: function (t, e, s) {
    "use strict";
    s("4c2e");
  },
  ee92: function (t, e, s) {},
  efe1: function (t, e, s) {},
  f0f6: function (t, e, s) {},
  f13c: function (t, e, s) {},
  f239: function (t, e, s) {},
  f293: function (t, e, s) {
    "use strict";
    s("c24c");
  },
  f3da: function (t, e, s) {},
  f464: function (t, e, s) {},
  f470: function (t, e, s) {
    "use strict";
    s("cb5b");
  },
  f56d: function (t, e, s) {
    "use strict";
    s("7041");
  },
  f635: function (t, e, s) {
    "use strict";
    s("4bcb");
  },
  f6c2: function (t, e, s) {
    "use strict";
    s("0c44");
  },
  f7f5: function (t, e, s) {
    "use strict";
    s("7b55");
  },
  f8a7: function (t, e, s) {
    "use strict";
    s("4d5b");
  },
  f95f: function (t, e, s) {
    "use strict";
    s("0756");
  },
  f9aa: function (t, e, s) {
    "use strict";
    s("5f43");
  },
  f9c1: function (t, e, s) {},
  fa6a: function (t, e, s) {
    "use strict";
    s("5e77");
  },
  fc0f: function (t, e, s) {
    "use strict";
    s("a11f");
  },
  fdbf: function (t, e, s) {},
});
