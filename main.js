import "./style.css"

/**
 * Smooth scroll in js without adding id to url
 * https://codepen.io/ProgrammingDIY/pen/XBvQQq
 */
function scrollSmoothTo(elementId) {
  const element = document.getElementById(elementId)
  element.scrollIntoView({ block: "start", behavior: "smooth" })
}

const scrollToFeaturesArrow = document.querySelector("#scroll-to-features-arrow")

scrollToFeaturesArrow?.addEventListener("click", () => {
  scrollSmoothTo("features")
})

const menuToggleButton = document.querySelector("#menu-toggle-button")
const menuNavigation = document.querySelector("#menu-navigation")
menuToggleButton?.addEventListener("click", () => {
  menuNavigation?.classList.toggle("max-md:hidden")
})
