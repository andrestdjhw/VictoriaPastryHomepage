import React, { useState } from "react"

const C = {
  dark: "#3f1016",
  deep: "#300b10",
  wine: "#4b1219",
  muted: "#9d7961",
  cream: "#feefdc",
  rose: "#d6bcad",
}

const FOOTER_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Princess Cake", href: "#princess-cake", featured: true },
  { label: "Catering", href: "#catering" },
  { label: "Our Story", href: "#our-story" },
  { label: "Order Pickup", href: "#order" },
  { label: "Visit Us", href: "#visit" },
]

function getAdminBarHeight() {
  const bar = document.getElementById("wpadminbar")
  return bar ? bar.offsetHeight : 0
}

function smoothTo(href, offset = 0) {
  if (!href.startsWith("#")) {
    window.location.href = href
    return
  }

  const el = document.querySelector(href)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: "smooth" })
}

function FooterLink({ label, href, featured }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        smoothTo(href, getAdminBarHeight() + 74)
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  )
}

function FrostingWave() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        transform: "translateY(-100%)",
        lineHeight: 0,
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 46"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "46px",
          transform: "scaleY(-1)",
        }}
      >
        <path
          d={
            "M0,0 H1440 V10 " +
            "Q1410,42 1380,10 Q1350,40 1320,10 Q1290,42 1260,10 " +
            "Q1230,40 1200,10 Q1170,42 1140,10 Q1110,40 1080,10 " +
            "Q1050,42 1020,10 Q990,40 960,10 Q930,42 900,10 " +
            "Q870,40 840,10 Q810,42 780,10 Q750,40 720,10 " +
            "Q690,42 660,10 Q630,40 600,10 Q570,42 540,10 " +
            "Q510,40 480,10 Q450,42 420,10 Q390,40 360,10 " +
            "Q330,42 300,10 Q270,40 240,10 Q210,42 180,10 " +
            "Q150,40 120,10 Q90,42 60,10 Q30,40 0,10 " +
            "L0,0 Z"
          }
          fill={C.deep}
        />
      </svg>
    </div>
  )
}

function Badge({ children }) {
  return (
    <span
      style={{
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
        background: "rgba(254,239,220,.025)",
      }}
    >
      <span style={{ opacity: 0.55 }}>✦</span>
      {children}
    </span>
  )
}

function MiniTable({ left = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "10px",
        [left ? "left" : "right"]: left ? "5%" : "7%",
        width: "135px",
        height: "80px",
        opacity: 0.055,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "44px",
          width: "90px",
          height: "8px",
          transform: "translateX(-50%)",
          background: C.rose,
          borderRadius: "999px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "0",
          width: "2px",
          height: "46px",
          background: C.rose,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "20px",
          bottom: "8px",
          width: "32px",
          height: "32px",
          border: `2px solid ${C.rose}`,
          borderTop: "none",
          borderRadius: "0 0 18px 18px",
          transform: "rotate(-7deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "20px",
          bottom: "8px",
          width: "32px",
          height: "32px",
          border: `2px solid ${C.rose}`,
          borderTop: "none",
          borderRadius: "0 0 18px 18px",
          transform: "rotate(7deg)",
        }}
      />
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        position: "relative",
        overflow: "visible",
        background: C.deep,
        color: C.cream,
      }}
    >
      <FrostingWave />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            `linear-gradient(180deg, ${C.deep} 0%, #26080d 100%),
             radial-gradient(circle at 20% 10%, rgba(214,188,173,.05), transparent 28%),
             radial-gradient(circle at 82% 32%, rgba(157,121,97,.06), transparent 34%)`,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.055,
          backgroundImage:
            "linear-gradient(rgba(254,239,220,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(254,239,220,.10) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 78%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 78%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <MiniTable left />
      <MiniTable />

      <div
        style={{
          position: "relative",
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "5.4rem 2rem 1.75rem",
        }}
      >
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(214,188,173,.22), transparent)",
            marginBottom: "3rem",
          }}
        />

        <div className="vp-footer-grid">
          <div>
            <a href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "2rem",
                  letterSpacing: "-0.035em",
                  color: "rgba(254,239,224,.88)",
                  lineHeight: 1,
                }}
              >
                Victoria Pastry Co.
              </div>

              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.5rem",
                  letterSpacing: "0.31em",
                  textTransform: "uppercase",
                  color: "rgba(214,188,173,.62)",
                  marginTop: "8px",
                }}
              >
                North Beach &nbsp;·&nbsp; Est. 1914
              </div>
            </a>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "1.28rem",
                lineHeight: 1.48,
                color: "rgba(254,239,220,.68)",
                maxWidth: "430px",
                margin: "1.6rem 0 0",
              }}
            >
              Over a century of Italian pastry, made the same way — with the same
              recipes, same care, and the same North Beach soul.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".65rem",
                marginTop: "1.6rem",
              }}
            >
              <Badge>SF Business Legendary</Badge>
              <Badge>Best Cannoli in San Francisco</Badge>
            </div>
          </div>

          <div
            style={{
              borderLeft: "1px solid rgba(254,239,220,.075)",
              paddingLeft: "2rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.58rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(157,121,97,.75)",
                marginBottom: "1.15rem",
              }}
            >
              Explore
            </div>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".85rem",
              }}
            >
              {FOOTER_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>

          <div
            style={{
              background: "rgba(254,239,220,.035)",
              border: "1px solid rgba(214,188,173,.14)",
              boxShadow: "0 24px 70px rgba(0,0,0,.16)",
              padding: "1.45rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "-36px",
                top: "-36px",
                width: "104px",
                height: "104px",
                borderRadius: "999px",
                border: "1px solid rgba(214,188,173,.12)",
              }}
            />

            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.58rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(214,188,173,.65)",
                marginBottom: ".95rem",
              }}
            >
              Visit Us
            </div>

            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "1.55rem",
                color: "rgba(254,239,220,.88)",
                lineHeight: 1.1,
                marginBottom: ".9rem",
              }}
            >
              700 Filbert St.
            </div>

            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: ".8rem",
                lineHeight: 1.7,
                color: "rgba(254,239,220,.54)",
                margin: 0,
              }}
            >
              North Beach, San Francisco, CA 94133
              <br />
              Open daily 7:00 AM – 8:00 PM
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".7rem",
                marginTop: "1.35rem",
              }}
            >
              <a
                href="tel:+14157812015"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: ".64rem",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: C.dark,
                  background: "rgba(254,239,220,.88)",
                  padding: "11px 15px",
                  border: "1px solid rgba(254,239,220,.88)",
                }}
              >
                Call Us
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=700%20Filbert%20St%20San%20Francisco%20CA%2094133"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: ".64rem",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "rgba(254,239,220,.82)",
                  background: "transparent",
                  padding: "11px 15px",
                  border: "1px solid rgba(214,188,173,.38)",
                }}
              >
                Directions
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "3.6rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(254,239,220,.07)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(254,239,220,.30)",
            }}
          >
            © {year} Victoria Pastry Co. · All rights reserved.
          </div>

          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: ".82rem",
              color: "rgba(214,188,173,.42)",
            }}
          >
            Authentic Since 1914.
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </footer>
  )
}