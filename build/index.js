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


const C = {
  dark: "#3f1016",
  deep: "#300b10",
  wine: "#4b1219",
  muted: "#9d7961",
  cream: "#feefdc",
  rose: "#d6bcad"
};
const FOOTER_LINKS = [{
  label: "Menu",
  href: "#menu"
}, {
  label: "Princess Cake",
  href: "#princess-cake",
  featured: true
}, {
  label: "Catering",
  href: "#catering"
}, {
  label: "Our Story",
  href: "#our-story"
}, {
  label: "Order Pickup",
  href: "#order"
}, {
  label: "Visit Us",
  href: "#visit"
}];
function getAdminBarHeight() {
  const bar = document.getElementById("wpadminbar");
  return bar ? bar.offsetHeight : 0;
}
function smoothTo(href, offset = 0) {
  if (!href.startsWith("#")) {
    window.location.href = href;
    return;
  }
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top,
    behavior: "smooth"
  });
}
function FooterLink({
  label,
  href,
  featured
}) {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onClick: e => {
      e.preventDefault();
      smoothTo(href, getAdminBarHeight() + 74);
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: featured ? "'Playfair Display', serif" : "'Lato', sans-serif",
      fontStyle: featured ? "italic" : "normal",
      fontWeight: 700,
      fontSize: featured ? "0.9rem" : "0.64rem",
      letterSpacing: featured ? "0.01em" : "0.17em",
      textTransform: featured ? "none" : "uppercase",
      color: hovered ? C.cream : featured ? "rgba(254,239,220,.78)" : "rgba(254,239,220,.48)",
      textDecoration: "none",
      transition: "color .22s ease, transform .22s ease",
      transform: hovered ? "translateX(3px)" : "none",
      display: "inline-block",
      whiteSpace: "nowrap"
    },
    children: label
  });
}
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
      zIndex: 5
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 46",
      preserveAspectRatio: "none",
      style: {
        display: "block",
        width: "100%",
        height: "46px",
        transform: "scaleY(-1)"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M0,0 H1440 V10 " + "Q1410,42 1380,10 Q1350,40 1320,10 Q1290,42 1260,10 " + "Q1230,40 1200,10 Q1170,42 1140,10 Q1110,40 1080,10 " + "Q1050,42 1020,10 Q990,40 960,10 Q930,42 900,10 " + "Q870,40 840,10 Q810,42 780,10 Q750,40 720,10 " + "Q690,42 660,10 Q630,40 600,10 Q570,42 540,10 " + "Q510,40 480,10 Q450,42 420,10 Q390,40 360,10 " + "Q330,42 300,10 Q270,40 240,10 Q210,42 180,10 " + "Q150,40 120,10 Q90,42 60,10 Q30,40 0,10 " + "L0,0 Z",
        fill: C.deep
      })
    })
  });
}
function Badge({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      border: "1px solid rgba(214,188,173,.18)",
      color: "rgba(214,188,173,.70)",
      padding: "7px 11px",
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "0.54rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      background: "rgba(254,239,220,.025)"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      style: {
        opacity: 0.55
      },
      children: "\u2726"
    }), children]
  });
}
function MiniTable({
  left = false
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "10px",
      [left ? "left" : "right"]: left ? "5%" : "7%",
      width: "135px",
      height: "80px",
      opacity: 0.055,
      pointerEvents: "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        position: "absolute",
        left: "50%",
        bottom: "44px",
        width: "90px",
        height: "8px",
        transform: "translateX(-50%)",
        background: C.rose,
        borderRadius: "999px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        position: "absolute",
        left: "50%",
        bottom: "0",
        width: "2px",
        height: "46px",
        background: C.rose
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        position: "absolute",
        left: "20px",
        bottom: "8px",
        width: "32px",
        height: "32px",
        border: `2px solid ${C.rose}`,
        borderTop: "none",
        borderRadius: "0 0 18px 18px",
        transform: "rotate(-7deg)"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        position: "absolute",
        right: "20px",
        bottom: "8px",
        width: "32px",
        height: "32px",
        border: `2px solid ${C.rose}`,
        borderTop: "none",
        borderRadius: "0 0 18px 18px",
        transform: "rotate(7deg)"
      }
    })]
  });
}
function Footer() {
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
    style: {
      position: "relative",
      overflow: "visible",
      background: C.deep,
      color: C.cream
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FrostingWave, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(180deg, ${C.deep} 0%, #26080d 100%),
             radial-gradient(circle at 20% 10%, rgba(214,188,173,.05), transparent 28%),
             radial-gradient(circle at 82% 32%, rgba(157,121,97,.06), transparent 34%)`,
        pointerEvents: "none"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.055,
        backgroundImage: "linear-gradient(rgba(254,239,220,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(254,239,220,.10) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 78%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 78%, transparent 100%)",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MiniTable, {
      left: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MiniTable, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        position: "relative",
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "5.4rem 2rem 1.75rem"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        style: {
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(214,188,173,.22), transparent)",
          marginBottom: "3rem"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "vp-footer-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/",
            style: {
              textDecoration: "none",
              display: "inline-block"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: {
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: "-0.035em",
                color: "rgba(254,239,224,.88)",
                lineHeight: 1
              },
              children: "Victoria Pastry Co."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.5rem",
                letterSpacing: "0.31em",
                textTransform: "uppercase",
                color: "rgba(214,188,173,.62)",
                marginTop: "8px"
              },
              children: "North Beach \xA0\xB7\xA0 Est. 1914"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            style: {
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1.28rem",
              lineHeight: 1.48,
              color: "rgba(254,239,220,.68)",
              maxWidth: "430px",
              margin: "1.6rem 0 0"
            },
            children: "Over a century of Italian pastry, made the same way \u2014 with the same recipes, same care, and the same North Beach soul."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: ".65rem",
              marginTop: "1.6rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Badge, {
              children: "SF Business Legendary"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Badge, {
              children: "Best Cannoli in San Francisco"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            borderLeft: "1px solid rgba(254,239,220,.075)",
            paddingLeft: "2rem"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.58rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(157,121,97,.75)",
              marginBottom: "1.15rem"
            },
            children: "Explore"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: ".85rem"
            },
            children: FOOTER_LINKS.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
              ...link
            }, link.label))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            background: "rgba(254,239,220,.035)",
            border: "1px solid rgba(214,188,173,.14)",
            boxShadow: "0 24px 70px rgba(0,0,0,.16)",
            padding: "1.45rem",
            position: "relative",
            overflow: "hidden"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              right: "-36px",
              top: "-36px",
              width: "104px",
              height: "104px",
              borderRadius: "999px",
              border: "1px solid rgba(214,188,173,.12)"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.58rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(214,188,173,.65)",
              marginBottom: ".95rem"
            },
            children: "Visit Us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1.55rem",
              color: "rgba(254,239,220,.88)",
              lineHeight: 1.1,
              marginBottom: ".9rem"
            },
            children: "700 Filbert St."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: ".8rem",
              lineHeight: 1.7,
              color: "rgba(254,239,220,.54)",
              margin: 0
            },
            children: ["North Beach, San Francisco, CA 94133", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Open daily 7:00 AM \u2013 8:00 PM"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: ".7rem",
              marginTop: "1.35rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "tel:+14157812015",
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: ".64rem",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: C.dark,
                background: "rgba(254,239,220,.88)",
                padding: "11px 15px",
                border: "1px solid rgba(254,239,220,.88)"
              },
              children: "Call Us"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "https://www.google.com/maps/search/?api=1&query=700%20Filbert%20St%20San%20Francisco%20CA%2094133",
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: ".64rem",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "rgba(254,239,220,.82)",
                background: "transparent",
                padding: "11px 15px",
                border: "1px solid rgba(214,188,173,.38)"
              },
              children: "Directions"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          marginTop: "3.6rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(254,239,220,.07)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(254,239,220,.30)"
          },
          children: ["\xA9 ", year, " Victoria Pastry Co. \xB7 All rights reserved."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: ".82rem",
            color: "rgba(214,188,173,.42)"
          },
          children: "Authentic Since 1914."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        .vp-footer-grid {
          display: grid;
          grid-template-columns: minmax(260px, 1.1fr) minmax(190px, .65fr) minmax(260px, .85fr);
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 920px) {
          .vp-footer-grid {
            grid-template-columns: 1fr !important;
          }

          .vp-footer-grid > div {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }

        @media (max-width: 640px) {
          footer {
            text-align: left;
          }
        }
      `
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


/* ─── BRAND TOKENS ──────────────────────────────────────────── */

const C = {
  dark: "#3f1016",
  wine: "#65333c",
  muted: "#9d7961",
  cream: "#feefdc",
  rose: "#d6bcad"
};
const NAV_LINKS = [{
  label: "Menu",
  href: "#menu",
  featured: false
}, {
  label: "Princess Cake",
  href: "#princess-cake",
  featured: true
}, {
  label: "Catering",
  href: "#catering",
  featured: false
}, {
  label: "Our Story",
  href: "#visit",
  featured: false
}];

/* ─── HOOKS ──────────────────────────────────────────────────── */
function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, {
      passive: true
    });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}
function useAdminBarHeight() {
  const [h, setH] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const bar = document.getElementById("wpadminbar");
    if (bar) {
      setH(bar.offsetHeight); // ya detecta 32px desktop / 46px mobile
    } else {
      setH(0);
    }
  }, []);
  return h;
}
function useMobile(breakpoint = 860) {
  const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fn = () => setMobile(window.innerWidth < breakpoint);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [breakpoint]);
  return mobile;
}

/* ─── FROSTING WAVE ──────────────────────────────────────────── */
function FrostingWave({
  color
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
      pointerEvents: "none",
      zIndex: 0
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 52",
      preserveAspectRatio: "none",
      style: {
        display: "block",
        width: "100%",
        height: "52px"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M0,0 H1440 V10 " + "Q1410,48 1380,10 Q1350,46 1320,10 Q1290,48 1260,10 " + "Q1230,46 1200,10 Q1170,48 1140,10 Q1110,46 1080,10 " + "Q1050,48 1020,10 Q990,46 960,10  Q930,48 900,10  " + "Q870,46 840,10  Q810,48 780,10  Q750,46 720,10  " + "Q690,48 660,10  Q630,46 600,10  Q570,48 540,10  " + "Q510,46 480,10  Q450,48 420,10  Q390,46 360,10  " + "Q330,48 300,10  Q270,46 240,10  Q210,48 180,10  " + "Q150,46 120,10  Q90,48 60,10   Q30,46 0,10   " + "L0,0 Z",
        fill: color
      })
    })
  });
}

/* ─── SMOOTH SCROLL HELPER ───────────────────────────────────── */
function smoothTo(href, offset = 0) {
  if (!href.startsWith("#")) {
    window.location.href = href;
    return;
  }
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top,
    behavior: "smooth"
  });
}

/* ─── DESKTOP NAV LINK ───────────────────────────────────────── */
function DesktopLink({
  label,
  href,
  featured,
  scrollOffset
}) {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onClick: e => {
      e.preventDefault();
      smoothTo(href, scrollOffset);
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: featured ? "'Playfair Display', serif" : "'Lato', sans-serif",
      fontStyle: featured ? "italic" : "normal",
      fontWeight: featured ? 700 : 400,
      fontSize: featured ? "0.90rem" : "0.72rem",
      letterSpacing: featured ? "0.01em" : "0.17em",
      textTransform: featured ? "none" : "uppercase",
      color: hovered ? C.rose : featured ? "rgba(214,188,173,0.88)" : "rgba(254,239,220,0.78)",
      textDecoration: "none",
      transition: "color .22s ease, border-color .22s ease",
      whiteSpace: "nowrap",
      paddingBottom: "3px",
      borderBottom: `1px solid ${hovered ? C.rose : "transparent"}`
    },
    children: label
  });
}

/* ─── ORDER CTA ──────────────────────────────────────────────── */
function OrderCTA({
  href = "#order",
  compact = false
}) {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: compact ? "0.65rem" : "0.70rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      textDecoration: "none",
      padding: compact ? "9px 18px" : "11px 24px",
      border: `1.5px solid ${hovered ? C.cream : C.rose}`,
      borderRadius: 0,
      backgroundColor: hovered ? C.cream : "transparent",
      color: hovered ? C.dark : C.cream,
      transition: "all .22s ease",
      whiteSpace: "nowrap",
      lineHeight: 1,
      transform: hovered ? "translateY(-1px)" : "none",
      display: "inline-block"
    },
    children: "Order Pickup"
  });
}

/* ─── SEPARATOR DOT ──────────────────────────────────────────── */
const Dot = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
  style: {
    display: "inline-block",
    width: "3px",
    height: "3px",
    borderRadius: 0,
    background: C.rose,
    opacity: 0.45,
    flexShrink: 0,
    alignSelf: "center"
  }
});

/* ─── HAMBURGER ──────────────────────────────────────────────── */
function Hamburger({
  open,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: onClick,
    "aria-label": "Toggle navigation",
    "aria-expanded": open,
    style: {
      background: "rgba(254,239,220,0.07)",
      border: "1px solid rgba(214,188,173,0.25)",
      padding: "10px 12px",
      cursor: "pointer",
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      alignItems: "center",
      justifyContent: "center"
    },
    children: [open ? "rotate(45deg) translate(4.5px, 4.5px)" : "none", "none", open ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none"].map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      style: {
        display: "block",
        width: "20px",
        height: "1.5px",
        background: C.cream,
        borderRadius: "1px",
        transformOrigin: "center",
        transition: "transform .28s ease, opacity .28s ease",
        transform: t,
        opacity: i === 1 && open ? 0 : 1
      }
    }, i))
  });
}

/* ─── MOBILE DRAWER ──────────────────────────────────────────── */
function MobileDrawer({
  open,
  scrollOffset,
  onClose
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    style: {
      maxHeight: open ? "500px" : "0",
      overflow: "hidden",
      transition: "max-height .38s cubic-bezier(.4,0,.2,1)",
      background: C.dark,
      borderTop: `1px solid rgba(214,188,173,0.12)`
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        padding: "1.6rem 1.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        style: {
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: C.muted,
          marginBottom: "1.2rem",
          paddingBottom: "0.8rem",
          borderBottom: `1px solid rgba(214,188,173,0.12)`
        },
        children: "Navigate"
      }), NAV_LINKS.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: link.href,
        onClick: e => {
          e.preventDefault();
          onClose();
          setTimeout(() => smoothTo(link.href, scrollOffset), 320);
        },
        style: {
          fontFamily: link.featured ? "'Playfair Display', serif" : "'Lato', sans-serif",
          fontStyle: link.featured ? "italic" : "normal",
          fontWeight: link.featured ? 700 : 400,
          fontSize: link.featured ? "1.25rem" : "0.78rem",
          letterSpacing: link.featured ? "-0.01em" : "0.14em",
          textTransform: link.featured ? "none" : "uppercase",
          color: link.featured ? C.rose : "rgba(254,239,220,0.78)",
          textDecoration: "none",
          padding: "0.9rem 0",
          borderBottom: `1px solid rgba(214,188,173,0.08)`,
          display: "block",
          transition: "color .2s"
        },
        children: link.label
      }, link.label)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "tel:+14157812015",
        style: {
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "0.78rem",
          letterSpacing: "0.06em",
          color: "rgba(254,239,220,0.42)",
          textDecoration: "none",
          marginTop: "1.2rem",
          marginBottom: "1.2rem",
          display: "block"
        },
        children: "(415) 781-2015"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(OrderCTA, {
        compact: true
      })]
    })
  });
}

/* ─── MAIN NAVBAR ────────────────────────────────────────────── */
function Navbar() {
  const scrolled = useScrolled(12);
  const adminH = useAdminBarHeight();
  const isMobile = useMobile(860);
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // nav bar actual height: 72px normal, 64px scrolled + 2px accent line
  const navHeight = scrolled ? 66 : 74;
  const scrollOffset = adminH + navHeight;
  const navBg = scrolled ? "rgba(56,14,20,0.97)" : C.dark;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
    style: {
      position: "fixed",
      top: `${adminH}px`,
      left: 0,
      right: 0,
      zIndex: 99999,
      overflow: "visible"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        height: "2px",
        background: `linear-gradient(90deg,
          transparent 0%,
          ${C.rose} 20%,
          ${C.muted} 50%,
          ${C.rose} 80%,
          transparent 100%)`
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        position: "relative",
        background: navBg,
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        boxShadow: scrolled ? "0 8px 40px rgba(63,16,22,0.45)" : "none",
        transition: "background .35s ease, box-shadow .35s ease"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          maxWidth: "1340px",
          margin: "0 auto",
          padding: "0 2rem",
          height: scrolled ? "64px" : "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          transition: "height .3s ease"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "/",
          style: {
            textDecoration: "none",
            flexShrink: 0,
            lineHeight: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: scrolled ? "1.38rem" : "1.52rem",
              color: C.cream,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              transition: "font-size .3s ease"
            },
            children: "Victoria Pastry Co."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.50rem",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: C.rose,
              marginTop: "5px",
              opacity: scrolled ? 0.7 : 1,
              transition: "opacity .3s"
            },
            children: "North Beach \xA0\xB7\xA0 Est. 1914"
          })]
        }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "0.9rem",
            flex: 1,
            justifyContent: "center"
          },
          children: NAV_LINKS.map((link, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [i > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DesktopLink, {
              ...link,
              scrollOffset: scrollOffset
            })]
          }, link.label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            flexShrink: 0
          },
          children: [!isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "tel:+14157812015",
            style: {
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "0.73rem",
              color: "rgba(254,239,220,0.42)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              transition: "color .22s"
            },
            onMouseEnter: e => e.target.style.color = "rgba(254,239,220,0.75)",
            onMouseLeave: e => e.target.style.color = "rgba(254,239,220,0.42)",
            children: "(415) 781-2015"
          }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(OrderCTA, {}), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Hamburger, {
            open: open,
            onClick: () => setOpen(p => !p)
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FrostingWave, {
        color: navBg
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileDrawer, {
        open: open
      })]
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