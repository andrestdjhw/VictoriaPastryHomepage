import React, { useState, useEffect } from "react"

const COLORS = {
  espresso:   "#3B2314",
  cream:      "#F5EFE0",
  gold:       "#C69C3C",
  terracotta: "#B85C38",
  green:      "#6B8F3A",
}

const NAV_LINKS = [
  { label: "Menu",          href: "#menu" },
  { label: "Princess Cake", href: "#princess-cake" },
  { label: "Catering",      href: "#catering" },
  { label: "Our Story",     href: "#our-story" },
]

/* ── tiny hook: detect scroll position ─────────────────── */
function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])
  return scrolled
}

/* ── NavLink ────────────────────────────────────────────── */
function NavLink({ label, href }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 300,
        fontSize: "0.8125rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: hovered ? COLORS.gold : "rgba(245,239,224,0.85)",
        textDecoration: "none",
        paddingBottom: "3px",
        borderBottom: hovered
          ? `1px solid ${COLORS.gold}`
          : "1px solid transparent",
        transition: "color 0.25s ease, border-color 0.25s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  )
}

/* ── CTAButton ──────────────────────────────────────────── */
function CTAButton({ label, href }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
        lineHeight: 1,
      }}
    >
      {label}
    </a>
  )
}

/* ── MobileMenu ─────────────────────────────────────────── */
function MobileMenu({ open }) {
  return (
    <div
      style={{
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
        zIndex: 99,
      }}
    >
      {NAV_LINKS.map(link => (
        <a
          key={link.label}
          href={link.href}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(245,239,224,0.8)",
            textDecoration: "none",
          }}
        >
          {link.label}
        </a>
      ))}
      <CTAButton label="Order Pickup" href="#order" />
    </div>
  )
}

/* ── FrostingWave ───────────────────────────────────────── */
/*
 * SVG scallop shape that "drips" below the navbar.
 * 18 bumps across 1440 px, each 80 px wide, dipping ~38 px.
 * A couple of bumps are intentionally taller/shorter for an
 * organic hand-piped frosting feel.
 */
function FrostingWave({ fill, scrolled }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        transform: "translateY(100%)",
        lineHeight: 0,          /* kill inline gap below svg */
        pointerEvents: "none",
        zIndex: 99,
        /*
         * Fade the wave out slightly when scrolled so the
         * glassmorphism effect looks clean against any bg.
         */
        opacity: scrolled ? 0.93 : 1,
        transition: "opacity 0.4s ease",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "auto" }}
      >
        {/*
          Path breakdown:
          • M0,0 H1440 V9  — rectangular top, down to wave baseline
          • Q cx,cy ex,ey  — 18 quadratic bezier scallops going right→left
            control-y varies between 44–52 for organic unevenness
          • L0,9 → L0,0 Z  — close the shape
        */}
        <path
          d={
            "M0,0 H1440 V9 " +
            "Q1400,50 1360,9 " +
            "Q1320,44 1280,9 " +
            "Q1240,52 1200,9 " +
            "Q1160,46 1120,9 " +
            "Q1080,52 1040,9 " +
            "Q1000,44 960,9 " +
            "Q920,50 880,9 " +
            "Q840,46 800,9 " +
            "Q760,52 720,9 " +
            "Q680,44 640,9 " +
            "Q600,50 560,9 " +
            "Q520,46 480,9 " +
            "Q440,52 400,9 " +
            "Q360,44 320,9 " +
            "Q280,50 240,9 " +
            "Q200,46 160,9 " +
            "Q120,52 80,9 " +
            "Q40,44 0,9 " +
            "L0,0 Z"
          }
          fill={fill}
        />
      </svg>
    </div>
  )
}

/* ── HamburgerIcon ──────────────────────────────────────── */
function HamburgerIcon({ open, color }) {
  const bar = (rotation, translateY) => ({
    display: "block",
    width: "22px",
    height: "1.5px",
    backgroundColor: color,
    borderRadius: "1px",
    transformOrigin: "center",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: rotation,
    opacity: translateY === "opacity0" ? 0 : 1,
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }}>
      <span style={bar(open ? "rotate(45deg) translate(4.5px, 4.5px)" : "none", "")} />
      <span style={bar("none", open ? "opacity0" : "")} />
      <span style={bar(open ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none", "")} />
    </div>
  )
}

/* ── Navbar (main) ──────────────────────────────────────── */
export default function Navbar() {
  const scrolled     = useScrolled(10)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  /* ── decorative dot separator ── */
  const Dot = () => (
    <span
      style={{
        display: "inline-block",
        width: "3px",
        height: "3px",
        borderRadius: "50%",
        backgroundColor: COLORS.gold,
        opacity: 0.6,
        flexShrink: 0,
        alignSelf: "center",
      }}
    />
  )

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        paddingBottom: "2px",
        backgroundColor: scrolled
          ? "rgba(42,24,14,0.96)"
          : COLORS.espresso,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.3)"
          : "none",
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        overflow: "visible",
      }}
    >
      {/* ── thin gold accent line at very top ── */}
      <div style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* ── Logo ── */}
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1.45rem",
              color: COLORS.cream,
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Victoria
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: COLORS.gold,
              marginTop: "2px",
            }}
          >
            Pastry · Homemade
          </span>
        </a>

        {/* ── Desktop links ── */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "1.1rem" }}>
            {NAV_LINKS.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && <Dot />}
                <NavLink label={link.label} href={link.href} />
              </React.Fragment>
            ))}
            <div style={{ width: "1.5rem" }} />
            <CTAButton label="Order Pickup" href="#order" />
          </div>
        )}

        {/* ── Mobile hamburger ── */}
        {isMobile && (
          <button
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              padding: "4px",
              cursor: "pointer",
              lineHeight: 0,
            }}
          >
            <HamburgerIcon open={open} color={COLORS.cream} />
          </button>
        )}
      </div>

      {/* ── Mobile dropdown ── */}
      {isMobile && <MobileMenu open={open} />}

      {/* ── Frosting wave drip ── */}
      {!open && (
        <FrostingWave
          fill={scrolled ? "rgba(42,24,14,0.96)" : COLORS.espresso}
          scrolled={scrolled}
        />
      )}
    </nav>
  )
}