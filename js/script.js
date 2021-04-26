"use strict";

const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav");
const links = document.querySelector(".nav ul li");
const social = document.querySelector(".social");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
  social.classList.toggle("open");
});

document.querySelector(".year").innerHTML = new Date().getFullYear();
