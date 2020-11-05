//  Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const navlinks = document.querySelectorAll(".nav-link");

// set initial state of MENU
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);




function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((navItem) => navItem.classList.add("show"));

    //  set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((navItem) => navItem.classList.remove("show"));

    //  set menu state
    showMenu = false;
  }
}

navlinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
      menuNav.querySelector(".current").classList.remove("current")

      navLink.classList.add("current")
    })
})
