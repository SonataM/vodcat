(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5398: function (e, t, l) {
      Promise.resolve().then(l.t.bind(l, 8173, 23)),
        Promise.resolve().then(l.bind(l, 6278)),
        Promise.resolve().then(l.bind(l, 4978)),
        Promise.resolve().then(l.bind(l, 2740)),
        Promise.resolve().then(l.bind(l, 8100));
    },
    6278: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          Chart: function () {
            return n;
          },
        });
      var s = l(7437),
        r = l(1135),
        o = l(8780);
      let n = () => {
        let e = (0, r.G)("md");
        return (0, s.jsxs)("section", {
          // className:
          //   "flex flex-col items-center justify-center mt-[60px] container",
          // children: [
          //   (0, s.jsx)(o.X, { text: "Vodcat live chart" }),
          //   (0, s.jsx)("div", {
          //     className: "rounded-lg w-full mt-4 md:mt-0",
          //     children: (0, s.jsx)("div", {
          //       className:
          //         "h-auto w-full bg-white p-2 md:p-5 mb-12 md:mb-0 rounded-lg overflow-hidden",
          //       children: (0, s.jsx)("iframe", {
          //         id: "dextools-widget",
          //         title: "DEXTools Trading Chart",
          //         width: "100%",
          //         height: "auto",
          //         style: {
          //           borderRadius: "10px",
          //           border: "3px solid black",
          //           minHeight: e ? "700px" : "400px",
          //         },
          //         src: "https://www.dextools.io/widget-chart/en/solana/pe-light/479ekZizdwB756KbtW3jeMAQ8p6ozKiX6XXKsihDYFRv?theme=light&chartType=2&chartResolution=30&drawingToolbars=false",
          //       }),
          //     }),
          //   }),
          // ],
        });
      };
    },
    4978: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          Memes: function () {
            return d;
          },
        });
      var s = l(7437),
        r = l(6648),
        o = l(4551),
        n = l(1135),
        x = l(762),
        a = l(8780);
      let i = (e) => {
          let { src: t, alt: l, width: o, height: a } = e,
            i = (0, n.G)("md");
          return (0, s.jsx)("div", {
            className: "bg-white hover:bg-customYellow p-5 rounded-lg",
            children: (0, s.jsx)("img", {
              className: (0, x.cn)(
                "border border-black rounded-lg",
                !i && "w-full"
              ),
              src: t,
              alt: l,
              width: o,
              height: a,
            }),
          });
        },
        c = (e) => {
          let { memes: t } = e;
          return (0, s.jsx)("div", {
            className: "flex flex-col space-y-14",
            children: t.map((e, t) => (0, s.jsx)(i, { ...e }, t)),
          });
        },
        d = () => {
          let e = (0, n.G)("sm");
          return (0, s.jsxs)("section", {
            className: "flex flex-col items-center w-full container z-20",
            children: [
              (0, s.jsx)(a.X, { text: "Memes" }),
              (0, s.jsxs)("div", {
                className:
                  "flex flex-col items-center lg:flex-row gap-14 mt-12",
                children: [
                  e &&
                    (0, s.jsx)(c, {
                      memes: [
                        {
                          src: "/memes/meme1.png",
                          alt: "Image 1",
                          width: 268,
                          height: 339,
                        },
                        {
                          src: "/memes/meme2.png",
                          alt: "Image 2",
                          width: 268,
                          height: 305,
                        },
                      ],
                    }),
                  (0, s.jsx)("div", {
                    className:
                      "bg-white relative hover:bg-customYellow p-5 rounded-lg w-[360px] h-[400px] md:w-[407px] md:h-[624px]",
                    children: (0, s.jsx)("div", {
                      className:
                        "absolute top-0 left-0 w-full h-full p-5 overflow-hidden",
                      children: (0, s.jsxs)("video", {
                        autoPlay: !0,
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        preload: "none",
                        width: e ? 360 : 407,
                        height: 624,
                        className:
                          " top-0 left-0 w-full h-full object-cover rounded-lg border-[3px] border-black",
                        children: [
                          (0, s.jsx)("source", {
                            src: "/memes/video3.mp4",
                            type: "video/mp4",
                            className: "",
                          }),
                          "Your browser does not support the video tag.",
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col space-y-14",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "bg-white relative hover:bg-customYellow p-5 rounded-lg w-[360px] h-[400px] md:w-[476px] md:h-[281px]",
                        children: (0, s.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-full p-5 overflow-hidden",
                          children: (0, s.jsxs)("video", {
                            autoPlay: !0,
                            playsInline: !0,
                            loop: !0,
                            muted: !0,
                            preload: "none",
                            width: e ? 360 : 476,
                            height: 281,
                            className:
                              " top-0 left-0 w-full h-full object-cover rounded-lg border-[3px] border-black",
                            children: [
                              (0, s.jsx)("source", {
                                src: "/memes/video4.mp4",
                                type: "video/mp4",
                                className: "",
                              }),
                              "Your browser does not support the video tag.",
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsx)(i, {
                        src: "/memes/meme5.png",
                        alt: "Image 3",
                        width: 476,
                        height: 163,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(o.$_, {}),
            ],
          });
        };
    },
    8780: function (e, t, l) {
      "use strict";
      l.d(t, {
        X: function () {
          return r;
        },
      });
      var s = l(7437);
      let r = (e) => {
        let { text: t } = e;
        return (0, s.jsx)("h1", {
          className:
            "uppercase text-center text-[55px] md:text-[80px] text-stroke text-white",
          children: t,
        });
      };
    },
    4551: function (e, t, l) {
      "use strict";
      l.d(t, {
        zx: function () {
          return a;
        },
        u: function () {
          return o;
        },
        $_: function () {
          return c;
        },
      });
      var s = l(7437),
        r = l(762);
      let o = (e) => {
        let { children: t, className: l } = e;
        return (0, s.jsx)("div", {
          className: (0, r.cn)(
            "rounded-lg bg-black border-black border-[3px] border-b-[6px]",
            l
          ),
          children: t,
        });
      };
      var n = l(6648);
      let x = {
          red: "bg-customRed text-white",
          purple: "bg-customPurple text-white",
          yellow: "bg-customYellow text-black",
        },
        a = (e) => {
          let { text: t, type: l, className: a, withIcon: i } = e;
          return (0, s.jsx)(o, {
            className: "",
            children: (0, s.jsxs)("button", {
              className: (0, r.cn)(
                "flex text-center cursor-pointer justify-center items-center rounded-md uppercase w-full hover:brightness-90",
                x[l],
                a
              ),
              children: [
                t,
                "tools" === i &&
                  (0, s.jsx)(n.default, {
                    alt: "dextools",
                    width: 30,
                    height: 35,
                    className: "ml-2 xl:ml-4 h-[30px] xl:w-[30px] xl:h-[35px]",
                    src: "/icons/tools.svg",
                  }),
                "screener" === i &&
                  (0, s.jsx)(n.default, {
                    alt: "dexscreener",
                    width: 30,
                    height: 35,
                    className: "ml-2 xl:ml-4 h-[30px] xl:w-[30px] xl:h-[35px]",
                    src: "/icons/screener.svg",
                  }),
              ],
            }),
          });
        };
      l(8100);
      let i = "py-3 px-4 xl:py-4 xl:px-5",
        c = () =>
          (0, s.jsxs)("footer", {
            className:
              "flex flex-col items-center w-full xl:px-[20px] mt-[50px]",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-between items-center w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex gap-x-2 lg:gap-x-5 xl:gap-x-10 text-lg lg:text-2xl xl:text-[32px]",
                    children: [
                      (0, s.jsx)("a", {
                        href: "https://dexscreener.com/ethereum/0xComingSoon",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, s.jsx)(a, {
                          type: "purple",
                          text: "Dexscreener",
                          withIcon: "screener",
                          className: i,
                        }),
                      }),
                      (0, s.jsx)("a", {
                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0xComingSoon",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, s.jsx)(a, {
                          type: "purple",
                          text: "Dextools",
                          withIcon: "tools",
                          className: i,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex gap-x-2 lg:gap-x-5 xl:gap-x-10",
                    children: [
                      (0, s.jsx)(o, {
                        children: (0, s.jsx)("a", {
                          href: "https://x.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, s.jsx)("div", {
                            onClick: () =>
                              window.open(
                                "https://x.com",
                                "_blank"
                              ),
                            className: "bg-white rounded-md p-3 xl:p-4",
                            children: (0, s.jsx)(n.default, {
                              src: "/icons/twitter.svg",
                              alt: "twitter",
                              width: 40,
                              height: 40,
                              className:
                                "w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]",
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsx)(o, {
                        children: (0, s.jsx)("a", {
                          href: "https://t.me",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, s.jsx)("div", {
                            className: "bg-white rounded-md p-3 xl:p-4",
                            children: (0, s.jsx)(n.default, {
                              onClick: () =>
                                window.open(
                                  "https://t.me",
                                  "_blank"
                                ),
                              src: "/icons/telegram.svg",
                              alt: "telegram",
                              width: 40,
                              height: 40,
                              className:
                                "w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("a", {
                    href: "https://app.uniswap.org/swap?inputCurrency=ETH",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, s.jsx)(a, {
                      type: "red",
                      text: "Buy $VODCAT",
                      className:
                        "py-4 xl:py-5 px-14 xl:px-24 text-[24px] lg:text-[30px] xl:text-[40px]",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex py-5 lg:py-20 gap-x-2 uppercase text-2xl",
              }),
            ],
          });
    },
    8100: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          Header: function () {
            return i;
          },
        });
      var s = l(7437);
      l(6278), l(6648);
      var r = l(4551);
      l(4978), l(8780), l(2740);
      var o = l(2265);
      let n = (e) => {
        let { isOpen: t, onClose: l } = e;
        return ((0, o.useEffect)(
          () => (
            t
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = ""),
            () => {
              document.body.style.overflow = "";
            }
          ),
          [t]
        ),
        t)
          ? (0, s.jsx)("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
              children: (0, s.jsxs)("div", {
                className: "bg-white z-50 p-6 rounded-lg shadow-lg",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-y-4 text-lg",
                    children: [
                      // (0, s.jsx)(r.zx, {
                      //   type: "yellow",
                      //   text: "Holders parser",
                      //   className: "py-3 px-4 xl:py-4 xl:px-5",
                      // }),
                      // (0, s.jsx)(r.zx, {
                      //   type: "yellow",
                      //   text: "Token sender",
                      //   className: "py-3 px-4 xl:py-4 xl:px-5",
                      // }),
                      // (0, s.jsx)(r.zx, {
                      //   type: "yellow",
                      //   text: "Volume bot",
                      //   className: "py-3 px-4 xl:py-4 xl:px-5",
                      // }),
                      // (0, s.jsx)(r.zx, {
                      //   type: "purple",
                      //   text: "Dexscreener",
                      //   withIcon: "screener",
                      //   className: "py-3 px-4 xl:py-4 xl:px-5",
                      // }),
                      // (0, s.jsx)("a", {
                      //   href: "https://www.dextools.io/app/en/ether/pair-explorer/0xComingSoon",
                      //   target: "_blank",
                      //   rel: "noopener noreferrer",
                      //   children: (0, s.jsx)(r.zx, {
                      //     type: "purple",
                      //     text: "Dextools",
                      //     withIcon: "tools",
                      //     className: "py-3 px-4 xl:py-4 xl:px-5",
                      //   }),
                      // }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    onClick: l,
                    className: "mt-4 text-red-500",
                    children: "Close",
                  }),
                ],
              }),
            })
          : null;
      };
      var x = l(762);
      let a = "py-3 px-4 xl:py-4 xl:px-5",
        i = () => {
          let [e, t] = (0, o.useState)(!1);
          return (0, s.jsxs)("header", {
            className:
              "flex w-full justify-end lg:justify-between container z-20",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "gap-x-5 xl:gap-x-10 text-lg lg:text-2xl xl:text-3xl hidden lg:flex",
                // children: [
                //   (0, s.jsx)(r.zx, {
                //     type: "yellow",
                //     text: "Holders parser",
                //     className: (0, x.cn)(a, "opacity-60 cursor-not-allowed"),
                //   }),
                //   (0, s.jsx)(r.zx, {
                //     type: "yellow",
                //     text: "Token sender",
                //     className: (0, x.cn)(a, "opacity-60 cursor-not-allowed"),
                //   }),
                //   (0, s.jsx)(r.zx, {
                //     type: "yellow",
                //     text: "Volume bot",
                //     className: (0, x.cn)(a, "opacity-60 cursor-not-allowed"),
                //   }),
                // ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "gap-x-5 xl:gap-x-10 text-lg lg:text-2xl xl:text-3xl hidden lg:flex",
                children: [
                  (0, s.jsx)("a", {
                    href: "https://dexscreener.com/ethereum/0xComingSoon",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, s.jsx)(r.zx, {
                      type: "purple",
                      text: "Dexscreener",
                      withIcon: "screener",
                      className: a,
                    }),
                  }),
                  (0, s.jsx)("a", {
                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xComingSoon",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, s.jsx)(r.zx, {
                      type: "purple",
                      text: "Dextools",
                      withIcon: "tools",
                      className: a,
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex lg:hidden",
                children: (0, s.jsx)(r.zx, {
                  type: "yellow",
                  text: "Info",
                  className: a,
                  onClick: () => t(!0),
                }),
              }),
              (0, s.jsx)(n, { isOpen: e, onClose: () => t(!1) }),
            ],
          });
        };
    },
    2740: function (e, t, l) {
      "use strict";
      l.d(t, {
        RoadmapItem: function () {
          return x;
        },
      });
      var s = l(7437),
        r = l(2265),
        o = l(6648),
        n = l(1135);
      let x = (e) => {
        let { title: t, description: l, img: x, rotation: a, zIndex: i } = e,
          c = (0, n.G)("md"),
          [d, p] = (0, r.useState)(!1);
        return (0, s.jsxs)("div", {
          style: { transform: c ? "rotate(".concat(a, "deg)") : "", zIndex: i },
          className:
            "bg-white text-black shadow-2xl self-start rounded-lg p-3 xl:p-5 flex flex-col w-[350px] xl:w-[450px]",
          children: [
            (0, s.jsxs)("div", {
              className:
                "relative border-[3px] border-black overflow-hidden transition-all duration-300 hover:bg-customBlue rounded-lg h-[340px] xl:w-[440px] xl:h-[440px]",
              onMouseEnter: () => p(!0),
              onMouseLeave: () => p(!1),
              children: [
                (0, s.jsx)("img", {
                  src: x,
                  alt: t,
                  width: 440,
                  height: 440,
                  className: "absolute top-0 z-20 w-full h-full",
                }),
                (0, s.jsx)("img", {
                  src: "/hero/cloud.png",
                  alt: "Moving Cloud",
                  width: 225,
                  height: 112,
                  className:
                    "z-0 top-12 opacity-30 transition-transform duration-500 ease-in-out ".concat(
                      d
                        ? "translate-x-[200px] opacity-100"
                        : "translate-x-[450px] opacity-0"
                    ),
                }),
                (0, s.jsx)("img", {
                  src: "/hero/cloud.png",
                  alt: "Moving Cloud",
                  width: 225,
                  height: 112,
                  className:
                    "absolute top-[200px] left-0 transition-transform duration-500 ease-in-out ".concat(
                      d
                        ? "-translate-x-[100px] opacity-100 "
                        : "-translate-x-[225px] opacity-0"
                    ),
                }),
              ],
            }),
            (0, s.jsx)("h1", {
              className: "px-3 text-[30px] xl:text-[40px] my-[5px]",
              children: t,
            }),
            (0, s.jsx)("p", {
              className: "px-3 font-light text-lg xl:text-xl mb-[10px] mystyle",
              children: l,
            }),
          ],
        });
      };
    },
    762: function (e, t, l) {
      "use strict";
      l.d(t, {
        cn: function () {
          return o;
        },
      });
      var s = l(4839),
        r = l(6164);
      function o() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, r.m6)((0, s.W)(t));
      }
    },
    1135: function (e, t, l) {
      "use strict";
      l.d(t, {
        G: function () {
          return o;
        },
      });
      var s = l(2265);
      let r = {
          sm: "480px",
          md: "830px",
          lg: "1064px",
          xl: "1180px",
          "2xl": "1340px",
          "3xl": "1920px",
        },
        o = (e) => {
          let [t, l] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              let t = () => {
                window.matchMedia("(min-width: ".concat(r[e], ")")).matches
                  ? l(!0)
                  : l(!1);
              };
              return (
                t(),
                window.addEventListener("resize", t),
                () => window.removeEventListener("resize", t)
              );
            }, [e]),
            t
          );
        };
    },
  },
  function (e) {
    e.O(0, [678, 971, 23, 744], function () {
      return e((e.s = 5398));
    }),
      (_N_E = e.O());
  },
]);
