const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function () {
  return (hamburger.checked = navMenu.classList.toggle("hidden"));
});

// navFix

// klick di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    navMenu.classList.add("hidden");
  }
});
// window scroll tampilkan navbar

window.onscroll = function () {
  const navbar = document.querySelector("#navbar");
  const fixNav = navbar.offsetTop;

  if (window.pageYOffset > fixNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

//dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// // pindahkan posisi toggle sesuai mode
// if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
//   darkToggle.checked = true;
// } else {
//   darkToggle.checked = false;
// }
