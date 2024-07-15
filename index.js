// Nav Menu

const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
        mobileMenu.style.display = 'flex';
}
function closeMenu() {
    mobileMenu.style.display = 'none';
}

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
  } 


function toggleMenu() {

  const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
  const menu = document.getElementById('mobile-menu');
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', !isExpanded);
  menu.hidden = isExpanded;
}

