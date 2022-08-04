const toggle = document.getElementById("toggle")
const nav = document.getElementById("nav")

function toggleMenu() {
  nav.classList.toggle("active")
}

function main() {
  toggle.addEventListener("pointerup", toggleMenu)
}

main()
