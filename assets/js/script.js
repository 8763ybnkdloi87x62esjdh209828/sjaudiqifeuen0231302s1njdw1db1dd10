'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);


/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


const phrases = ["website", "Mobile App", "Software", "Ecommerce store"];
const dynamicTextElement = document.getElementById("dynamic-text");
let currentIndex = 0;

function updateText() {
  // Fade out the current phrase
  dynamicTextElement.classList.remove("visible");
  dynamicTextElement.classList.add("hidden");

  // After the fade-out transition, update the text
  setTimeout(() => {
    dynamicTextElement.textContent = phrases[currentIndex];
    
    // Fade in the new phrase
    dynamicTextElement.classList.remove("hidden");
    dynamicTextElement.classList.add("visible");

    // Update the current index for the next phrase
    currentIndex = (currentIndex + 1) % phrases.length;

    // Set the time before the next update
    setTimeout(updateText, 2000); // Change phrase every 2 seconds
  }, 300); // Fade out duration reduced to 300ms
}

// Start the text updates
updateText();

// Initial setup to show the first phrase
dynamicTextElement.textContent = phrases[currentIndex];
dynamicTextElement.classList.add("visible");
