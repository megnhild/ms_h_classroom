/* --- sticky header --- */
window.onscroll = function() {scrollFunction()};
let header = document.getElementById("header");
let sticky = 25;

// Adds the sticky class to the header when you scroll. Removes sticky class when you leave the scroll.
function scrollFunction() {
  if (window.pageYOffset || window.scrollY >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/* --- /sticky header --- */

/* --- video slideshow --- */
let slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// video controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("videos");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
/* --- video slideshow --- */
