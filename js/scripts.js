/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}











let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls for the second slideshow
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls for the second slideshow
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    let captions = document.getElementsByClassName("picCaption2"); // Added for captions
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) { // Loop through captions
        captions[i].style.display = "none"; // Hide captions by default
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    captions[slideIndex2 - 1].style.display = "block"; // Show the caption for the current slide
}










let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls for the 3rd slideshow
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

// Thumbnail image controls for the 3rd slideshow
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    let dots = document.getElementsByClassName("dot3");
    let captions = document.getElementsByClassName("picCaption3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " active";
    captions[slideIndex3 - 1].style.display = "block";
}


















let slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls for the 4th slideshow
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

// Thumbnail image controls for the 4th slideshow
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    let dots = document.getElementsByClassName("dot4");
    let captions = document.getElementsByClassName("picCaption4");
    if (n > slides.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex4 - 1].style.display = "block";
    dots[slideIndex4 - 1].className += " active";
    captions[slideIndex4 - 1].style.display = "block";
}





























let slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls for the 5th slideshow
function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

// Thumbnail image controls for the 5th slideshow
function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    let dots = document.getElementsByClassName("dot5");
    let captions = document.getElementsByClassName("picCaption5");
    if (n > slides.length) { slideIndex5 = 1 }
    if (n < 1) { slideIndex5 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex5 - 1].style.display = "block";
    dots[slideIndex5 - 1].className += " active";
    captions[slideIndex5 - 1].style.display = "block";
}





