import React, { useState } from "react"

const COLORS = {
  espresso:   "#3B2314",
  espressoDark: "#2A180E",
  cream:      "#F5EFE0",
  creamMuted: "rgba(245,239,224,0.55)",
  gold:       "#C69C3C",
  goldMuted:  "rgba(198,156,60,0.25)",
  terracotta: "#B85C38",
  green:      "#6B8F3A",
}

const NAV_LINKS = [
  { label: "Menu",          href: "#menu" },
  { label: "Princess Cake", href: "#princess-cake" },
  { label: "Catering",      href: "#catering" },
  { label: "Our Story",     href: "#our-story" },
  { label: "Order Pickup",  href: "#order",   cta: true },
  { label: "Contact",       href: "#contact" },
]

/* ── FooterLink ─────────────────────────────────────────── */
function FooterLink({ label, href, cta }) {
  const [hovered, setHovered] = useState(false)

  if (cta) {
    return (
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
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
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
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
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  )
}

/* ── Badge ──────────────────────────────────────────────── */
function Badge({ children }) {
  return (
    <span
      style={{
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
        padding: "5px 11px",
      }}
    >
      {/* tiny star glyph */}
      <span style={{ fontSize: "0.6rem", opacity: 0.85 }}>✦</span>
      {children}
    </span>
  )
}

/* ── Divider dot ────────────────────────────────────────── */
const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: "3px",
      height: "3px",
      borderRadius: "50%",
      backgroundColor: COLORS.gold,
      opacity: 0.4,
      flexShrink: 0,
      alignSelf: "center",
    }}
  />
)

/* ── FrostingWave (footer edition — scallops face UP) ───── */
/*
 * Identical path to the navbar wave but the SVG is flipped
 * vertically with scaleY(-1).  Positioned at the very top of
 * the footer with translateY(-100%) so it "drips" up into
 * whatever section sits above.
 */
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
        zIndex: 10,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          /* flip upside-down so scallops point upward */
          transform: "scaleY(-1)",
        }}
      >
        <path
          d={
            "M0,0 H1440 V9 " +
            "Q1400,50 1360,9 " +
            "Q1320,44 1280,9 " +
            "Q1240,52 1200,9 " +
            "Q1160,46 1120,9 " +
            "Q1080,52 1040,9 " +
            "Q1000,44 960,9 "  +
            "Q920,50 880,9 "   +
            "Q840,46 800,9 "   +
            "Q760,52 720,9 "   +
            "Q680,44 640,9 "   +
            "Q600,50 560,9 "   +
            "Q520,46 480,9 "   +
            "Q440,52 400,9 "   +
            "Q360,44 320,9 "   +
            "Q280,50 240,9 "   +
            "Q200,46 160,9 "   +
            "Q120,52 80,9 "    +
            "Q40,44 0,9 "      +
            "L0,0 Z"
          }
          fill={COLORS.espressoDark}
        />
      </svg>
    </div>
  )
}

/* ── Footer (main) ──────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: COLORS.espressoDark,
        width: "100%",
        position: "relative",
        /*
         * overflow must be VISIBLE so the wave can protrude
         * above the footer's top edge into the section above.
         */
        overflow: "visible",
      }}
    >
      {/* ── frosting wave drip — protrudes upward ── */}
      <FrostingWave />

      {/* ══════════════════════════════════════════════
          BACKGROUND PATTERN — Uiverse by AatreyuShau
          Adapted palette:
            #777777 (gray dots/lines) → gold #C69C3C
            #eaeaea (light shapes)    → cream #F5EFE0
          ══════════════════════════════════════════════ */}

      {/* SVG filter for the paper texture overlay */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="vp-void-texture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="grayNoise"
            />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
            <feComponentTransfer in="blended">
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Layer 1 — geometric dot + diamond pattern */}
      <div
        aria-hidden
        style={{
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
          pointerEvents: "none",
        }}
      />

      {/* Layer 2 — paper texture overlay with gold gradient */}
      <div
        aria-hidden
        style={{
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
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── thin gold line at top (sits below the wave) ── */}
      <div
        style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
          opacity: 0.35,
        }}
      />

      {/* ════════════ MAIN CONTENT ════════════ */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "calc(54px + 2rem) 1.5rem 2.5rem",
          position: "relative",
        }}
      >
        {/* ── Top row: Logo + Nav ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2.5rem",
            marginBottom: "2.75rem",
          }}
        >
          {/* Logo + tagline */}
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  color: COLORS.cream,
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                Victoria
              </div>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: COLORS.terracotta,
                  marginTop: "5px",
                }}
              >
                Pastry &nbsp;·&nbsp; Homemade
              </div>
            </a>

            {/* tagline below logo */}
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "0.8rem",
                color: COLORS.creamMuted,
                marginTop: "1rem",
                maxWidth: "200px",
                lineHeight: 1.6,
              }}
            >
              Baked with tradition since the day North Beach fell in love.
            </p>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.9rem 1rem",
              maxWidth: "540px",
              paddingTop: "4px",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && !link.cta && !NAV_LINKS[i - 1]?.cta && <Dot />}
                <FooterLink {...link} />
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* ── horizontal rule ── */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(245,239,224,0.08)",
            marginBottom: "2rem",
          }}
        />

        {/* ── Middle row: Address / Hours + Badges ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Contact info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: COLORS.gold, fontSize: "0.7rem", marginTop: "2px", flexShrink: 0 }}>
                📍
              </span>
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: COLORS.creamMuted,
                  letterSpacing: "0.02em",
                  lineHeight: 1.5,
                }}
              >
                700 Filbert St, North Beach<br />
                San Francisco, CA 94133
              </span>
            </div>

            {/* Hours */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: COLORS.gold, fontSize: "0.7rem", flexShrink: 0 }}>🕖</span>
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: COLORS.creamMuted,
                  letterSpacing: "0.02em",
                }}
              >
                Open Daily &nbsp;7:00 AM – 8:00 PM
              </span>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: COLORS.gold, fontSize: "0.7rem", flexShrink: 0 }}>📞</span>
              <a
                href="tel:+14157812015"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: COLORS.creamMuted,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.target.style.color = COLORS.gold)}
                onMouseLeave={e => (e.target.style.color = COLORS.creamMuted)}
              >
                (415) 781-2015
              </a>
            </div>
          </div>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.6rem",
            }}
          >
            <Badge>SF Business Legendary</Badge>
            <Badge>Best Cannoli in San Francisco</Badge>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(245,239,224,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "rgba(245,239,224,0.3)",
            }}
          >
            © {year} Victoria Pastry Co. &nbsp;·&nbsp; All rights reserved.
          </span>

          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "0.65rem",
              color: "rgba(198,156,60,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            North Beach, San Francisco
          </span>
        </div>
      </div>
    </footer>
  )
}