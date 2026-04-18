/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ExampleReactComponent.js"
/*!**********************************************!*\
  !*** ./src/scripts/ExampleReactComponent.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ExampleReactComponent() {
  const [clickCount, setClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-md",
    onClick: () => setClickCount(prev => prev + 1),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      className: "text-xl",
      children: "Hello from React!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      className: "text-sm",
      children: ["You have clicked on this component", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-yellow-200 font-bold",
        children: clickCount
      }), " times."]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleReactComponent);

/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const COLORS = {
  espresso: "#3B2314",
  espressoDark: "#2A180E",
  cream: "#F5EFE0",
  creamMuted: "rgba(245,239,224,0.55)",
  gold: "#C69C3C",
  goldMuted: "rgba(198,156,60,0.25)",
  terracotta: "#B85C38",
  green: "#6B8F3A"
};
const NAV_LINKS = [{
  label: "Menu",
  href: "#menu"
}, {
  label: "Princess Cake",
  href: "#princess-cake"
}, {
  label: "Catering",
  href: "#catering"
}, {
  label: "Our Story",
  href: "#our-story"
}, {
  label: "Order Pickup",
  href: "#order",
  cta: true
}, {
  label: "Contact",
  href: "#contact"
}];

/* ── FooterLink ─────────────────────────────────────────── */
function FooterLink({
  label,
  href,
  cta
}) {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (cta) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
      href: href,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "0.7rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "5px 14px",
        border: `1px solid ${COLORS.gold}`,
        borderRadius: "2px",
        backgroundColor: hovered ? COLORS.gold : "transparent",
        color: hovered ? COLORS.espresso : COLORS.gold,
        transition: "background-color 0.22s ease, color 0.22s ease",
        lineHeight: 1,
        whiteSpace: "nowrap"
      },
      children: label
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 300,
      fontSize: "0.7rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: hovered ? COLORS.gold : COLORS.creamMuted,
      textDecoration: "none",
      paddingBottom: "2px",
      borderBottom: hovered ? `1px solid ${COLORS.gold}` : "1px solid transparent",
      transition: "color 0.22s ease, border-color 0.22s ease",
      whiteSpace: "nowrap"
    },
    children: label
  });
}

/* ── Badge ──────────────────────────────────────────────── */
function Badge({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "'Lato', sans-serif",
      fontWeight: 300,
      fontSize: "0.65rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: COLORS.gold,
      border: `1px solid ${COLORS.goldMuted}`,
      borderRadius: "2px",
      padding: "5px 11px"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      style: {
        fontSize: "0.6rem",
        opacity: 0.85
      },
      children: "\u2726"
    }), children]
  });
}

/* ── Divider dot ────────────────────────────────────────── */
const Dot = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
  style: {
    display: "inline-block",
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    backgroundColor: COLORS.gold,
    opacity: 0.4,
    flexShrink: 0,
    alignSelf: "center"
  }
});

/* ── FrostingWave (footer edition — scallops face UP) ───── */
/*
 * Identical path to the navbar wave but the SVG is flipped
 * vertically with scaleY(-1).  Positioned at the very top of
 * the footer with translateY(-100%) so it "drips" up into
 * whatever section sits above.
 */
function FrostingWave() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: "translateY(-100%)",
      lineHeight: 0,
      pointerEvents: "none",
      zIndex: 10
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 54",
      preserveAspectRatio: "none",
      style: {
        display: "block",
        width: "100%",
        height: "auto",
        /* flip upside-down so scallops point upward */
        transform: "scaleY(-1)"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M0,0 H1440 V9 " + "Q1400,50 1360,9 " + "Q1320,44 1280,9 " + "Q1240,52 1200,9 " + "Q1160,46 1120,9 " + "Q1080,52 1040,9 " + "Q1000,44 960,9 " + "Q920,50 880,9 " + "Q840,46 800,9 " + "Q760,52 720,9 " + "Q680,44 640,9 " + "Q600,50 560,9 " + "Q520,46 480,9 " + "Q440,52 400,9 " + "Q360,44 320,9 " + "Q280,50 240,9 " + "Q200,46 160,9 " + "Q120,52 80,9 " + "Q40,44 0,9 " + "L0,0 Z",
        fill: COLORS.espressoDark
      })
    })
  });
}

/* ── Footer (main) ──────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
    style: {
      backgroundColor: COLORS.espressoDark,
      width: "100%",
      position: "relative",
      /*
       * overflow must be VISIBLE so the wave can protrude
       * above the footer's top edge into the section above.
       */
      overflow: "visible"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FrostingWave, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: "0",
      height: "0",
      style: {
        position: "absolute"
      },
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("filter", {
          id: "vp-void-texture",
          x: "0%",
          y: "0%",
          width: "100%",
          height: "100%",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feTurbulence", {
            type: "fractalNoise",
            baseFrequency: "0.65",
            numOctaves: "3",
            stitchTiles: "stitch",
            result: "noise"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feColorMatrix", {
            type: "saturate",
            values: "0",
            in: "noise",
            result: "grayNoise"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feBlend", {
            in: "SourceGraphic",
            in2: "grayNoise",
            mode: "multiply",
            result: "blended"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feComponentTransfer", {
            in: "blended",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("feFuncA", {
              type: "linear",
              slope: "1"
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": true,
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.06,
        backgroundImage: `
            radial-gradient(circle, ${COLORS.gold} 2px, transparent 2px),
            radial-gradient(circle, ${COLORS.cream} 10px, transparent 32px),
            linear-gradient(
              -45deg,
              ${COLORS.cream} 0%,
              transparent 49%,
              transparent 50%,
              transparent 51%,
              ${COLORS.cream} 100%
            ),
            linear-gradient(
              45deg,
              ${COLORS.cream} 0%,
              transparent 49%,
              ${COLORS.gold} 50%,
              transparent 51%,
              ${COLORS.cream} 100%
            ),
            linear-gradient(-45deg, transparent 49%, ${COLORS.gold} 50%, transparent 51%)
          `,
        backgroundSize: "8rem 8rem",
        backgroundRepeat: "repeat",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": true,
      style: {
        position: "absolute",
        inset: 0,
        filter: "url(#vp-void-texture)",
        background: `linear-gradient(
            to bottom,
            rgba(198, 156, 60, 0.18) 0%,
            rgba(184, 92,  56, 0.14) 100%
          )`,
        backgroundSize: "cover",
        pointerEvents: "none",
        mixBlendMode: "soft-light"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        height: "1px",
        background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
        opacity: 0.35
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "calc(54px + 2rem) 1.5rem 2.5rem",
        position: "relative"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2.5rem",
          marginBottom: "2.75rem"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/",
            style: {
              textDecoration: "none"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: {
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "1.75rem",
                color: COLORS.cream,
                letterSpacing: "-0.01em",
                lineHeight: 1
              },
              children: "Victoria"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: COLORS.terracotta,
                marginTop: "5px"
              },
              children: "Pastry \xA0\xB7\xA0 Homemade"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            style: {
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "0.8rem",
              color: COLORS.creamMuted,
              marginTop: "1rem",
              maxWidth: "200px",
              lineHeight: 1.6
            },
            children: "Baked with tradition since the day North Beach fell in love."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.9rem 1rem",
            maxWidth: "540px",
            paddingTop: "4px"
          },
          children: NAV_LINKS.map((link, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [i > 0 && !link.cta && !NAV_LINKS[i - 1]?.cta && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
              ...link
            })]
          }, link.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        style: {
          height: "1px",
          backgroundColor: "rgba(245,239,224,0.08)",
          marginBottom: "2rem"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2rem",
          marginBottom: "2.5rem"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "flex-start",
              gap: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              style: {
                color: COLORS.gold,
                fontSize: "0.7rem",
                marginTop: "2px",
                flexShrink: 0
              },
              children: "\uD83D\uDCCD"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "0.78rem",
                color: COLORS.creamMuted,
                letterSpacing: "0.02em",
                lineHeight: 1.5
              },
              children: ["700 Filbert St, North Beach", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "San Francisco, CA 94133"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              style: {
                color: COLORS.gold,
                fontSize: "0.7rem",
                flexShrink: 0
              },
              children: "\uD83D\uDD56"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "0.78rem",
                color: COLORS.creamMuted,
                letterSpacing: "0.02em"
              },
              children: "Open Daily \xA07:00 AM \u2013 8:00 PM"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              style: {
                color: COLORS.gold,
                fontSize: "0.7rem",
                flexShrink: 0
              },
              children: "\uD83D\uDCDE"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "tel:+14157812015",
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "0.78rem",
                color: COLORS.creamMuted,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s"
              },
              onMouseEnter: e => e.target.style.color = COLORS.gold,
              onMouseLeave: e => e.target.style.color = COLORS.creamMuted,
              children: "(415) 781-2015"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.6rem"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Badge, {
            children: "SF Business Legendary"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Badge, {
            children: "Best Cannoli in San Francisco"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.75rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(245,239,224,0.06)"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          style: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(245,239,224,0.3)"
          },
          children: ["\xA9 ", year, " Victoria Pastry Co. \xA0\xB7\xA0 All rights reserved."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          style: {
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "0.65rem",
            color: "rgba(198,156,60,0.4)",
            letterSpacing: "0.05em"
          },
          children: "North Beach, San Francisco"
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const COLORS = {
  espresso: "#3B2314",
  cream: "#F5EFE0",
  gold: "#C69C3C",
  terracotta: "#B85C38",
  green: "#6B8F3A"
};
const NAV_LINKS = [{
  label: "Menu",
  href: "#menu"
}, {
  label: "Princess Cake",
  href: "#princess-cake"
}, {
  label: "Catering",
  href: "#catering"
}, {
  label: "Our Story",
  href: "#our-story"
}];

/* ── tiny hook: detect scroll position ─────────────────── */
function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/* ── NavLink ────────────────────────────────────────────── */
function NavLink({
  label,
  href
}) {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 300,
      fontSize: "0.8125rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: hovered ? COLORS.gold : "rgba(245,239,224,0.85)",
      textDecoration: "none",
      paddingBottom: "3px",
      borderBottom: hovered ? `1px solid ${COLORS.gold}` : "1px solid transparent",
      transition: "color 0.25s ease, border-color 0.25s ease",
      whiteSpace: "nowrap"
    },
    children: label
  });
}

/* ── CTAButton ──────────────────────────────────────────── */
function CTAButton({
  label,
  href
}) {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      textDecoration: "none",
      padding: "8px 20px",
      border: `1.5px solid ${COLORS.gold}`,
      borderRadius: "2px",
      backgroundColor: hovered ? COLORS.gold : "transparent",
      color: hovered ? COLORS.espresso : COLORS.gold,
      transition: "background-color 0.25s ease, color 0.25s ease",
      whiteSpace: "nowrap",
      lineHeight: 1
    },
    children: label
  });
}

/* ── MobileMenu ─────────────────────────────────────────── */
function MobileMenu({
  open
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: COLORS.espresso,
      borderTop: `1px solid rgba(198,156,60,0.2)`,
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      padding: open ? "1.5rem 1.5rem 2rem" : "0 1.5rem",
      maxHeight: open ? "400px" : "0px",
      overflow: "hidden",
      transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.35s ease",
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
      zIndex: 99
    },
    children: [NAV_LINKS.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
      href: link.href,
      style: {
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300,
        fontSize: "0.875rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(245,239,224,0.8)",
        textDecoration: "none"
      },
      children: link.label
    }, link.label)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CTAButton, {
      label: "Order Pickup",
      href: "#order"
    })]
  });
}

/* ── FrostingWave ───────────────────────────────────────── */
/*
 * SVG scallop shape that "drips" below the navbar.
 * 18 bumps across 1440 px, each 80 px wide, dipping ~38 px.
 * A couple of bumps are intentionally taller/shorter for an
 * organic hand-piped frosting feel.
 */
function FrostingWave({
  fill,
  scrolled
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      transform: "translateY(100%)",
      lineHeight: 0,
      /* kill inline gap below svg */
      pointerEvents: "none",
      zIndex: 99,
      /*
       * Fade the wave out slightly when scrolled so the
       * glassmorphism effect looks clean against any bg.
       */
      opacity: scrolled ? 0.93 : 1,
      transition: "opacity 0.4s ease"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 54",
      preserveAspectRatio: "none",
      style: {
        display: "block",
        width: "100%",
        height: "auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M0,0 H1440 V9 " + "Q1400,50 1360,9 " + "Q1320,44 1280,9 " + "Q1240,52 1200,9 " + "Q1160,46 1120,9 " + "Q1080,52 1040,9 " + "Q1000,44 960,9 " + "Q920,50 880,9 " + "Q840,46 800,9 " + "Q760,52 720,9 " + "Q680,44 640,9 " + "Q600,50 560,9 " + "Q520,46 480,9 " + "Q440,52 400,9 " + "Q360,44 320,9 " + "Q280,50 240,9 " + "Q200,46 160,9 " + "Q120,52 80,9 " + "Q40,44 0,9 " + "L0,0 Z",
        fill: fill
      })
    })
  });
}

/* ── HamburgerIcon ──────────────────────────────────────── */
function HamburgerIcon({
  open,
  color
}) {
  const bar = (rotation, translateY) => ({
    display: "block",
    width: "22px",
    height: "1.5px",
    backgroundColor: color,
    borderRadius: "1px",
    transformOrigin: "center",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: rotation,
    opacity: translateY === "opacity0" ? 0 : 1
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      style: bar(open ? "rotate(45deg) translate(4.5px, 4.5px)" : "none", "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      style: bar("none", open ? "opacity0" : "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      style: bar(open ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none", "")
    })]
  });
}

/* ── Navbar (main) ──────────────────────────────────────── */
function Navbar() {
  const scrolled = useScrolled(10);
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth < 768);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── decorative dot separator ── */
  const Dot = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    style: {
      display: "inline-block",
      width: "3px",
      height: "3px",
      borderRadius: "50%",
      backgroundColor: COLORS.gold,
      opacity: 0.6,
      flexShrink: 0,
      alignSelf: "center"
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      width: "100%",
      paddingBottom: "2px",
      backgroundColor: scrolled ? "rgba(42,24,14,0.96)" : COLORS.espresso,
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      overflow: "visible"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.5rem",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
        href: "/",
        style: {
          textDecoration: "none",
          flexShrink: 0
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          style: {
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "1.45rem",
            color: COLORS.cream,
            letterSpacing: "-0.01em",
            lineHeight: 1
          },
          children: "Victoria"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          style: {
            display: "block",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: COLORS.gold,
            marginTop: "2px"
          },
          children: "Pastry \xB7 Homemade"
        })]
      }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "1.1rem"
        },
        children: [NAV_LINKS.map((link, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [i > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavLink, {
            label: link.label,
            href: link.href
          })]
        }, link.label)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            width: "1.5rem"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CTAButton, {
          label: "Order Pickup",
          href: "#order"
        })]
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        onClick: () => setOpen(prev => !prev),
        "aria-label": "Toggle menu",
        style: {
          background: "none",
          border: "none",
          padding: "4px",
          cursor: "pointer",
          lineHeight: 0
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HamburgerIcon, {
          open: open,
          color: COLORS.cream
        })
      })]
    }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileMenu, {
      open: open
    }), !open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FrostingWave, {
      fill: scrolled ? "rgba(42,24,14,0.96)" : COLORS.espresso,
      scrolled: scrolled
    })]
  });
}

/***/ },

/***/ "./src/scripts/Person.js"
/*!*******************************!*\
  !*** ./src/scripts/Person.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Person {
  constructor(name) {
    this.name = name;
    this.greet();
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);

/***/ },

/***/ "./node_modules/react-dom/client.js"
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Person */ "./src/scripts/Person.js");
/* harmony import */ var _scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ExampleReactComponent */ "./src/scripts/ExampleReactComponent.js");
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const person1 = new _scripts_Person__WEBPACK_IMPORTED_MODULE_0__["default"]("Brad");
if (document.querySelector("#render-navbar-here")) {
  const navRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot(document.querySelector("#render-navbar-here"));
  navRoot.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
}
if (document.querySelector("#render-react-example-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot(document.querySelector("#render-react-example-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
}
if (document.querySelector("#render-footer-here")) {
  const footerRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot(document.querySelector("#render-footer-here"));
  footerRoot.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map