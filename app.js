var slideTime = 5000;
var slideIndex = -1;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider-inner");
  // console.log(slideIndex);
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  setTimeout(showSlides, slideTime);
}

window.onload = showSlides;
