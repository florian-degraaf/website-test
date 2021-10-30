// Shrink navbar on scroll
window.onscroll = function() {scrollTop()};

var returntop = document.getElementById("return-top");

// Scroll to top button
function scrollTop() {
  if (window.scrollY < 500) {
      returntop.classList.add("item-hide")
    } else {
      returntop.classList.remove("item-hide")
    }
} 

// Collapsable navbar for desktop
function navbarhide() {
    if (window.scrollY >= navbar) {
        navbar.classList.add("");
    }
}

// Collapsable navbar for mobile/tablet
function navbarShow() {
    var navbarCollapsable = document.getElementById("navbar-collapsable");
    if (navbarCollapsable.className === "navbar-hide") {
        navbarCollapsable.className += " navbar-show";
    } else {
      navbarCollapsable.className = "navbar-hide";
    }
  }
