import React, { useState, useEffect, useRef } from "react"

/* ─── BRAND TOKENS ──────────────────────────────────────────── */
const C = {
  dark:  "#3f1016",
  wine:  "#65333c",
  muted: "#9d7961",
  cream: "#feefdc",
  rose:  "#d6bcad",
}

const NAV_LINKS = [
  { label: "Menu",          href: "#menu",          featured: false },
  { label: "Princess Cake", href: "#princess-cake", featured: true  },
  { label: "Catering",      href: "#catering",      featured: false },
  { label: "Our Story",     href: "#visit",     featured: false },
]

/* ─── HOOKS ──────────────────────────────────────────────────── */
function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", fn, { passive: true })
    fn()
    return () => window.removeEventListener("scroll", fn)
  }, [threshold])
  return scrolled
}

function useAdminBarHeight() {
  const [h, setH] = useState(0)

  useEffect(() => {
    const bar = document.getElementById("wpadminbar")

    if (bar) {
      setH(bar.offsetHeight) // ya detecta 32px desktop / 46px mobile
    } else {
      setH(0)
    }
  }, [])

  return h
}

function useMobile(breakpoint = 860) {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < breakpoint)
    fn()
    window.addEventListener("resize", fn)
    return () => window.removeEventListener("resize", fn)
  }, [breakpoint])
  return mobile
}

/* ─── FROSTING WAVE ──────────────────────────────────────────── */
function FrostingWave({ color }) {
  return (
    <div aria-hidden="true" style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      transform: "translateY(100%)",
      lineHeight: 0,
      pointerEvents: "none",
      zIndex: 0,
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 52"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "52px" }}
      >
        <path
          d={
            "M0,0 H1440 V10 " +
            "Q1410,48 1380,10 Q1350,46 1320,10 Q1290,48 1260,10 " +
            "Q1230,46 1200,10 Q1170,48 1140,10 Q1110,46 1080,10 " +
            "Q1050,48 1020,10 Q990,46 960,10  Q930,48 900,10  " +
            "Q870,46 840,10  Q810,48 780,10  Q750,46 720,10  " +
            "Q690,48 660,10  Q630,46 600,10  Q570,48 540,10  " +
            "Q510,46 480,10  Q450,48 420,10  Q390,46 360,10  " +
            "Q330,48 300,10  Q270,46 240,10  Q210,48 180,10  " +
            "Q150,46 120,10  Q90,48 60,10   Q30,46 0,10   " +
            "L0,0 Z"
          }
          fill={color}
        />
      </svg>
    </div>
  )
}

/* ─── SMOOTH SCROLL HELPER ───────────────────────────────────── */
function smoothTo(href, offset = 0) {
  if (!href.startsWith("#")) { window.location.href = href; return }
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: "smooth" })
}

/* ─── DESKTOP NAV LINK ───────────────────────────────────────── */
function DesktopLink({ label, href, featured, scrollOffset }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); smoothTo(href, scrollOffset) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:    featured ? "'Playfair Display', serif" : "'Lato', sans-serif",
        fontStyle:     featured ? "italic" : "normal",
        fontWeight:    featured ? 700 : 400,
        fontSize:      featured ? "0.90rem" : "0.72rem",
        letterSpacing: featured ? "0.01em" : "0.17em",
        textTransform: featured ? "none" : "uppercase",
        color:         hovered  ? C.rose : (featured ? "rgba(214,188,173,0.88)" : "rgba(254,239,220,0.78)"),
        textDecoration: "none",
        transition: "color .22s ease, border-color .22s ease",
        whiteSpace: "nowrap",
        paddingBottom: "3px",
        borderBottom: `1px solid ${hovered ? C.rose : "transparent"}`,
      }}
    >
      {label}
    </a>
  )
}

/* ─── ORDER CTA ──────────────────────────────────────────────── */
function OrderCTA({ href = "#order", compact = false }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
        display: "inline-block",
      }}
    >
      Order Pickup
    </a>
  )
}

/* ─── SEPARATOR DOT ──────────────────────────────────────────── */
const Dot = () => (
  <span style={{
    display: "inline-block",
    width: "3px", height: "3px",
    borderRadius: 0,
    background: C.rose,
    opacity: 0.45,
    flexShrink: 0,
    alignSelf: "center",
  }} />
)

/* ─── HAMBURGER ──────────────────────────────────────────────── */
function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle navigation"
      aria-expanded={open}
      style={{
        background: "rgba(254,239,220,0.07)",
        border: "1px solid rgba(214,188,173,0.25)",
        padding: "10px 12px",
        cursor: "pointer",
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {[
        open ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
        "none",
        open ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
      ].map((t, i) => (
        <span key={i} style={{
          display: "block",
          width: "20px", height: "1.5px",
          background: C.cream,
          borderRadius: "1px",
          transformOrigin: "center",
          transition: "transform .28s ease, opacity .28s ease",
          transform: t,
          opacity: i === 1 && open ? 0 : 1,
        }} />
      ))}
    </button>
  )
}

/* ─── MOBILE DRAWER ──────────────────────────────────────────── */
function MobileDrawer({ open, scrollOffset, onClose }) {
  return (
    <div style={{
      maxHeight: open ? "500px" : "0",
      overflow: "hidden",
      transition: "max-height .38s cubic-bezier(.4,0,.2,1)",
      background: C.dark,
      borderTop: `1px solid rgba(214,188,173,0.12)`,
    }}>
      <div style={{
        padding: "1.6rem 1.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}>
        {/* Section label */}
        <div style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: C.muted,
          marginBottom: "1.2rem",
          paddingBottom: "0.8rem",
          borderBottom: `1px solid rgba(214,188,173,0.12)`,
        }}>
          Navigate
        </div>

        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault()
              onClose()
              setTimeout(() => smoothTo(link.href, scrollOffset), 320)
            }}
            style={{
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
              transition: "color .2s",
            }}
          >
            {link.label}
          </a>
        ))}

        {/* Phone */}
        <a
          href="tel:+14157812015"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
            color: "rgba(254,239,220,0.42)",
            textDecoration: "none",
            marginTop: "1.2rem",
            marginBottom: "1.2rem",
            display: "block",
          }}
        >
          (415) 781-2015
        </a>

        <OrderCTA compact />
      </div>
    </div>
  )
}

/* ─── MAIN NAVBAR ────────────────────────────────────────────── */
export default function Navbar() {
  const scrolled    = useScrolled(12)
  const adminH      = useAdminBarHeight()
  const isMobile    = useMobile(860)
  const [open, setOpen] = useState(false)

  // nav bar actual height: 72px normal, 64px scrolled + 2px accent line
  const navHeight = scrolled ? 66 : 74
  const scrollOffset = adminH + navHeight

  const navBg = scrolled ? "rgba(56,14,20,0.97)" : C.dark

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  return (
    <nav
      style={{
        position: "fixed",
        top: `${adminH}px`,
        left: 0,
        right: 0,
        zIndex: 99999,
        overflow: "visible",
      }}
    >
      {/* ── TOP ACCENT LINE ── */}
      <div style={{
        height: "2px",
        background: `linear-gradient(90deg,
          transparent 0%,
          ${C.rose} 20%,
          ${C.muted} 50%,
          ${C.rose} 80%,
          transparent 100%)`,
      }} />

      {/* ── MAIN BAR ── */}
      <div style={{
        position: "relative",
        background: navBg,
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        boxShadow: scrolled
          ? "0 8px 40px rgba(63,16,22,0.45)"
          : "none",
        transition: "background .35s ease, box-shadow .35s ease",
      }}>

        <div style={{
          maxWidth: "1340px",
          margin: "0 auto",
          padding: "0 2rem",
          height: scrolled ? "64px" : "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          transition: "height .3s ease",
        }}>

          {/* ── LOGO ── */}
          <a href="/" style={{ textDecoration: "none", flexShrink: 0, lineHeight: 1 }}>
            {/* Wordmark */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: scrolled ? "1.38rem" : "1.52rem",
              color: C.cream,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              transition: "font-size .3s ease",
            }}>
              Victoria Pastry Co.
            </div>
            {/* Tagline */}
            <div style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.50rem",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: C.rose,
              marginTop: "5px",
              opacity: scrolled ? 0.7 : 1,
              transition: "opacity .3s",
            }}>
              North Beach &nbsp;·&nbsp; Est. 1914
            </div>
          </a>

          {/* ── DESKTOP LINKS ── */}
          {!isMobile && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              flex: 1,
              justifyContent: "center",
            }}>
              {NAV_LINKS.map((link, i) => (
                <React.Fragment key={link.label}>
                  {i > 0 && <Dot />}
                  <DesktopLink {...link} scrollOffset={scrollOffset} />
                </React.Fragment>
              ))}
            </div>
          )}

          {/* ── RIGHT SIDE ── */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            flexShrink: 0,
          }}>
            {/* Phone — hidden on small screens */}
            {!isMobile && (
              <a href="tel:+14157812015" style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "0.73rem",
                color: "rgba(254,239,220,0.42)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                transition: "color .22s",
              }}
              onMouseEnter={e => e.target.style.color = "rgba(254,239,220,0.75)"}
              onMouseLeave={e => e.target.style.color = "rgba(254,239,220,0.42)"}
              >
                (415) 781-2015
              </a>
            )}

            {/* Order CTA */}
            {!isMobile && <OrderCTA />}

            {/* Hamburger */}
            {isMobile && (
              <Hamburger open={open} onClick={() => setOpen(p => !p)} />
            )}
          </div>

        </div>{/* end inner */}

        {/* ── FROSTING WAVE ── */}
        <FrostingWave color={navBg} />

        {/* ── MOBILE DRAWER ── */}
        {isMobile && <MobileDrawer open={open} />}

      </div>{/* end main bar */}
    </nav>
  )
}