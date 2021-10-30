// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav(), scrollTop()};

// Get the html elements
var navbar = document.getElementById("navbar-items");
var bodyId = document.getElementById("body");
var returntop = document.getElementById("return-top");
var logo = document.getElementById("navbar-logo");
var tel = document.getElementById("navbar-tel");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky"); 
        bodyId.classList.add("padding");
        logo.classList.remove("item-hide");
        tel.classList.remove("item-hide");
      } else {
        navbar.classList.remove("sticky");
        bodyId.classList.remove("padding");
        logo.classList.add("item-hide");
        tel.classList.add("item-hide");
      }
} 

function scrollTop() {
  if (window.scrollY < 500) {
      returntop.classList.add("item-hide")
    } else {
      returntop.classList.remove("item-hide")
    }
} 