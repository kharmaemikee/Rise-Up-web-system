'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});


  function makeDonation() {
    
     window.location.href = "donation.html";
  }


  // Select the button and the paragraph
const button = document.getElementById('nextPlanButton');
const paragraph = document.getElementById('sectionText');

// Define the new text that you want to display
const newText = 'Our next plan is to focus on sustainable development, expanding educational programs, and building infrastructure to support underserved communities.';

// Add an event listener for the button click
button.addEventListener('click', function() {
  // Change the text of the paragraph when the button is clicked
  paragraph.textContent = newText;
});

function redirectToBecomePartner() {
  window.location.href = "BecomePartner.html";  // Redirects to a new page where donation form is present
}

