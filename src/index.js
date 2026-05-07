import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import VictoriaFloatingOrder from "./scripts/VictoriaFloatingOrder"
import React from "react"
import ReactDOM from "react-dom/client"

const person1 = new Person("Brad")

if (document.querySelector("#render-navbar-here")) {
  const navRoot = ReactDOM.createRoot(document.querySelector("#render-navbar-here"))
  navRoot.render(<Navbar />)
}

if (document.querySelector("#render-react-example-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react-example-here"))
  root.render(<ExampleReactComponent />)
}

if (document.querySelector("#render-footer-here")) {
  const footerRoot = ReactDOM.createRoot(document.querySelector("#render-footer-here"))
  footerRoot.render(<Footer />)
}

/**
 * Victoria Pastry floating order CTA
 * Se monta automáticamente solo en la home.
 */
if (document.querySelector(".vp-home")) {
  let floatingRoot = document.querySelector("#vp-floating-order-root")

  if (!floatingRoot) {
    floatingRoot = document.createElement("div")
    floatingRoot.id = "vp-floating-order-root"
    document.body.appendChild(floatingRoot)
  }

  const root = ReactDOM.createRoot(floatingRoot)
  root.render(<VictoriaFloatingOrder />)
}