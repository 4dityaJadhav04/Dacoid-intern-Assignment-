"use strict";

// Loading will be end after the documnet is loaded :

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Add Event listener on multiple elements :

const addEventsonElements = function (elements, functiontype, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(functiontype, callback);
  }
};

// NavBAr :

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  overlay.classList.toggle("nav-active");
};

addEventsonElements(navToggler, "click", toggleNavbar);

// Header :

const Header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    Header.classList.add("hide");
  } else {
    Header.classList.remove("hide");
  }
  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 50) {
    Header.classList.add("active");
    hideHeader();
  } else {
    Header.classList.remove("active");
  }
});
