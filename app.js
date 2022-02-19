var slideTime = 8000;
var slideIndex = -1;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider-inner");
  var slidesUpperImages = document.getElementsByClassName("slider-inner--img");
  // console.log(slideIndex);
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slidesUpperImages[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.animation = "slideout 4s";
  slidesUpperImages[slideIndex].style.display = "block";
  slidesUpperImages[slideIndex].style.animation = "slideout 4s";

  setTimeout(() => {
    if (slideIndex + 1 <= slides.length - 1) {
      slides[slideIndex].style.display = "none";
      slidesUpperImages[slideIndex].style.display = "none";
      slides[slideIndex + 1].style.display = "block";
      slides[slideIndex + 1].style.animation = "slidein 4s";
      slidesUpperImages[slideIndex + 1].style.display = "block";
      slidesUpperImages[slideIndex + 1].style.animation = "imageSlidin 4s";
    } else {
      slides[slides.length - 1].style.display = "none";
      slidesUpperImages[slides.length - 1].style.display = "none";
      slides[0].style.display = "block";
      slides[0].style.animation = "slidein 4s";
      slidesUpperImages[0].style.display = "block";
      slidesUpperImages[0].style.animation = "imageSlidin 4s";
    }
  }, 4000);

  setTimeout(showSlides, slideTime);
}

window.onload = showSlides;
