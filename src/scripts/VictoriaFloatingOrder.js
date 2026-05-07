import React, { useEffect, useState } from "react"

const logoUrl = "/wp-content/uploads/2026/04/victoria-pastry-logo.png" // ← swap for real logo path

export default function VictoriaFloatingOrder() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 900)

    return () => clearTimeout(showTimer)
  }, [])

  const handleClick = (e) => {
    const target = document.querySelector("#order")

    if (!target) return

    e.preventDefault()

    const wpAdminBar = document.getElementById("wpadminbar")
    const adminBarHeight = wpAdminBar ? wpAdminBar.offsetHeight : 0
    const navOffset = window.innerWidth >= 1024 ? 104 : 86

    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      adminBarHeight -
      navOffset -
      10

    window.scrollTo({
      top,
      behavior: "smooth",
    })
  }

  return (
    <div className={`vp-floating-order ${isVisible ? "is-visible" : ""}`}>
      <a
        href="#order"
        className="vp-floating-order__card"
        onClick={handleClick}
        aria-label="Order from Victoria Pastry Company"
      >
        <span className="vp-floating-order__logo">
          <img src={logoUrl} alt="" aria-hidden="true" />
        </span>

        <span className="vp-floating-order__copy">
          <strong>Victoria Pastry Co.</strong>
          <small>Order pickup or catering</small>
        </span>

        <span className="vp-floating-order__btn">
          Order now
        </span>
      </a>
    </div>
  )
}