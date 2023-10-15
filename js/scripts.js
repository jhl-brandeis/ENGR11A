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


































let slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls for the 6th slideshow
function plusSlides6(n) {
    showSlides6(slideIndex6 += n);
}

// Thumbnail image controls for the 6th slideshow
function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    let dots = document.getElementsByClassName("dot6");
    let captions = document.getElementsByClassName("picCaption6");
    if (n > slides.length) { slideIndex6 = 1 }
    if (n < 1) { slideIndex6 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex6 - 1].style.display = "block";
    dots[slideIndex6 - 1].className += " active";
    captions[slideIndex6 - 1].style.display = "block";
}


let slideIndex7 = 1;
showSlides7(slideIndex7);

// Next/previous controls for the 7th slideshow
function plusSlides7(n) {
    showSlides7(slideIndex7 += n);
}

// Thumbnail image controls for the 7th slideshow
function currentSlide7(n) {
    showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides7");
    let dots = document.getElementsByClassName("dot7");
    let captions = document.getElementsByClassName("picCaption7");
    if (n > slides.length) { slideIndex7 = 1 }
    if (n < 1) { slideIndex7 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex7 - 1].style.display = "block";
    dots[slideIndex7 - 1].className += " active";
    captions[slideIndex7 - 1].style.display = "block";
}

let slideIndex8 = 1;
showSlides8(slideIndex8);

// Next/previous controls for the 8th slideshow
function plusSlides8(n) {
    showSlides8(slideIndex8 += n);
}

// Thumbnail image controls for the 8th slideshow
function currentSlide8(n) {
    showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides8");
    let dots = document.getElementsByClassName("dot8");
    let captions = document.getElementsByClassName("picCaption8");
    if (n > slides.length) { slideIndex8 = 1 }
    if (n < 1) { slideIndex8 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex8 - 1].style.display = "block";
    dots[slideIndex8 - 1].className += " active";
    captions[slideIndex8 - 1].style.display = "block";
}

let slideIndex9 = 1;
showSlides9(slideIndex9);

// Next/previous controls for the 9th slideshow
function plusSlides9(n) {
    showSlides9(slideIndex9 += n);
}

// Thumbnail image controls for the 9th slideshow
function currentSlide9(n) {
    showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    let dots = document.getElementsByClassName("dot9");
    let captions = document.getElementsByClassName("picCaption9");
    if (n > slides.length) { slideIndex9 = 1 }
    if (n < 1) { slideIndex9 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex9 - 1].style.display = "block";
    dots[slideIndex9 - 1].className += " active";
    captions[slideIndex9 - 1].style.display = "block";
}


let slideIndex10 = 1;
showSlides10(slideIndex10);

// Next/previous controls for the 10th slideshow
function plusSlides10(n) {
    showSlides10(slideIndex10 += n);
}

// Thumbnail image controls for the 10th slideshow
function currentSlide10(n) {
    showSlides10(slideIndex10 = n);
}

function showSlides10(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides10");
    let dots = document.getElementsByClassName("dot10");
    let captions = document.getElementsByClassName("picCaption10");
    if (n > slides.length) { slideIndex10 = 1 }
    if (n < 1) { slideIndex10 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex10 - 1].style.display = "block";
    dots[slideIndex10 - 1].className += " active";
    captions[slideIndex10 - 1].style.display = "block";
}


let slideIndex11 = 1;
showSlides11(slideIndex11);

// Next/previous controls for the 11th slideshow
function plusSlides11(n) {
    showSlides11(slideIndex11 += n);
}

// Thumbnail image controls for the 11th slideshow
function currentSlide11(n) {
    showSlides11(slideIndex11 = n);
}

function showSlides11(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides11");
    let dots = document.getElementsByClassName("dot11");
    let captions = document.getElementsByClassName("picCaption11");
    if (n > slides.length) { slideIndex11 = 1 }
    if (n < 1) { slideIndex11 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex11 - 1].style.display = "block";
    dots[slideIndex11 - 1].className += " active";
    captions[slideIndex11 - 1].style.display = "block";
}


let slideIndex12 = 1;
showSlides12(slideIndex12);

// Next/previous controls for the 12th slideshow
function plusSlides12(n) {
    showSlides12(slideIndex12 += n);
}

// Thumbnail image controls for the 12th slideshow
function currentSlide12(n) {
    showSlides12(slideIndex12 = n);
}

function showSlides12(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides12");
    let dots = document.getElementsByClassName("dot12");
    let captions = document.getElementsByClassName("picCaption12");
    if (n > slides.length) { slideIndex12 = 1 }
    if (n < 1) { slideIndex12 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex12 - 1].style.display = "block";
    dots[slideIndex12 - 1].className += " active";
    captions[slideIndex12 - 1].style.display = "block";
}

let slideIndex13 = 1;
showSlides13(slideIndex13);

// Next/previous controls for the 13th slideshow
function plusSlides13(n) {
    showSlides13(slideIndex13 += n);
}

// Thumbnail image controls for the 13th slideshow
function currentSlide13(n) {
    showSlides13(slideIndex13 = n);
}

function showSlides13(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides13");
    let dots = document.getElementsByClassName("dot13");
    let captions = document.getElementsByClassName("picCaption13");
    if (n > slides.length) { slideIndex13 = 1 }
    if (n < 1) { slideIndex13 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex13 - 1].style.display = "block";
    dots[slideIndex13 - 1].className += " active";
    captions[slideIndex13 - 1].style.display = "block";
}


let slideIndex14 = 1;
showSlides14(slideIndex14);

// Next/previous controls for the 14th slideshow
function plusSlides14(n) {
    showSlides14(slideIndex14 += n);
}

// Thumbnail image controls for the 14th slideshow
function currentSlide14(n) {
    showSlides14(slideIndex14 = n);
}

function showSlides14(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides14");
    let dots = document.getElementsByClassName("dot14");
    let captions = document.getElementsByClassName("picCaption14");
    if (n > slides.length) { slideIndex14 = 1 }
    if (n < 1) { slideIndex14 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex14 - 1].style.display = "block";
    dots[slideIndex14 - 1].className += " active";
    captions[slideIndex14 - 1].style.display = "block";
}


let slideIndex15 = 1;
showSlides15(slideIndex15);

// Next/previous controls for the 15th slideshow
function plusSlides15(n) {
    showSlides15(slideIndex15 += n);
}

// Thumbnail image controls for the 15th slideshow
function currentSlide15(n) {
    showSlides15(slideIndex15 = n);
}

function showSlides15(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides15");
    let dots = document.getElementsByClassName("dot15");
    let captions = document.getElementsByClassName("picCaption15");
    if (n > slides.length) { slideIndex15 = 1 }
    if (n < 1) { slideIndex15 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex15 - 1].style.display = "block";
    dots[slideIndex15 - 1].className += " active";
    captions[slideIndex15 - 1].style.display = "block";
}

let slideIndex16 = 1;
showSlides16(slideIndex16);

// Next/previous controls for the 16th slideshow
function plusSlides16(n) {
    showSlides16(slideIndex16 += n);
}

// Thumbnail image controls for the 16th slideshow
function currentSlide16(n) {
    showSlides16(slideIndex16 = n);
}

function showSlides16(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides16");
    let dots = document.getElementsByClassName("dot16");
    let captions = document.getElementsByClassName("picCaption16");
    if (n > slides.length) { slideIndex16 = 1 }
    if (n < 1) { slideIndex16 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex16 - 1].style.display = "block";
    dots[slideIndex16 - 1].className += " active";
    captions[slideIndex16 - 1].style.display = "block";
}

let slideIndex17 = 1;
showSlides17(slideIndex17);

// Next/previous controls for the 17th slideshow
function plusSlides17(n) {
    showSlides17(slideIndex17 += n);
}

// Thumbnail image controls for the 17th slideshow
function currentSlide17(n) {
    showSlides17(slideIndex17 = n);
}

function showSlides17(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides17");
    let dots = document.getElementsByClassName("dot17");
    let captions = document.getElementsByClassName("picCaption17");
    if (n > slides.length) { slideIndex17 = 1 }
    if (n < 1) { slideIndex17 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex17 - 1].style.display = "block";
    dots[slideIndex17 - 1].className += " active";
    captions[slideIndex17 - 1].style.display = "block";
}


let slideIndex18 = 1;
showSlides18(slideIndex18);

// Next/previous controls for the 18th slideshow
function plusSlides18(n) {
    showSlides18(slideIndex18 += n);
}

// Thumbnail image controls for the 18th slideshow
function currentSlide18(n) {
    showSlides18(slideIndex18 = n);
}

function showSlides18(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides18");
    let dots = document.getElementsByClassName("dot18");
    let captions = document.getElementsByClassName("picCaption18");
    if (n > slides.length) { slideIndex18 = 1 }
    if (n < 1) { slideIndex18 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex18 - 1].style.display = "block";
    dots[slideIndex18 - 1].className += " active";
    captions[slideIndex18 - 1].style.display = "block";
}







let slideIndex19 = 1;
showSlides19(slideIndex19);

// Next/previous controls for the 19th slideshow
function plusSlides19(n) {
    showSlides19(slideIndex19 += n);
}

// Thumbnail image controls for the 19th slideshow
function currentSlide19(n) {
    showSlides19(slideIndex19 = n);
}

function showSlides19(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides19");
    let dots = document.getElementsByClassName("dot19");
    let captions = document.getElementsByClassName("picCaption19");
    if (n > slides.length) { slideIndex19 = 1 }
    if (n < 1) { slideIndex19 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex19 - 1].style.display = "block";
    dots[slideIndex19 - 1].className += " active";
    captions[slideIndex19 - 1].style.display = "block";
}




let slideIndex20 = 1;
showSlides20(slideIndex20);

// Next/previous controls for the 20th slideshow
function plusSlides20(n) {
    showSlides20(slideIndex20 += n);
}

// Thumbnail image controls for the 20th slideshow
function currentSlide20(n) {
    showSlides20(slideIndex20 = n);
}

function showSlides20(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides20");
    let dots = document.getElementsByClassName("dot20");
    let captions = document.getElementsByClassName("picCaption20");
    if (n > slides.length) { slideIndex20 = 1 }
    if (n < 1) { slideIndex20 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex20 - 1].style.display = "block";
    dots[slideIndex20 - 1].className += " active";
    captions[slideIndex20 - 1].style.display = "block";
}







let slideIndex21 = 1;
showSlides21(slideIndex21);

// Next/previous controls for the 21th slideshow
function plusSlides21(n) {
    showSlides21(slideIndex21 += n);
}

// Thumbnail image controls for the 21th slideshow
function currentSlide21(n) {
    showSlides21(slideIndex21 = n);
}

function showSlides21(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides21");
    let dots = document.getElementsByClassName("dot21");
    let captions = document.getElementsByClassName("picCaption21");
    if (n > slides.length) { slideIndex21 = 1 }
    if (n < 1) { slideIndex21 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex21 - 1].style.display = "block";
    dots[slideIndex21 - 1].className += " active";
    captions[slideIndex21 - 1].style.display = "block";
}






let slideIndex22 = 1;
showSlides22(slideIndex22);

// Next/previous controls for the 22th slideshow
function plusSlides22(n) {
    showSlides22(slideIndex22 += n);
}

// Thumbnail image controls for the 22th slideshow
function currentSlide22(n) {
    showSlides22(slideIndex22 = n);
}

function showSlides22(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides22");
    let dots = document.getElementsByClassName("dot22");
    let captions = document.getElementsByClassName("picCaption22");
    if (n > slides.length) { slideIndex22 = 1 }
    if (n < 1) { slideIndex22 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex22 - 1].style.display = "block";
    dots[slideIndex22 - 1].className += " active";
    captions[slideIndex22 - 1].style.display = "block";
}









let slideIndex23 = 1;
showSlides23(slideIndex23);

// Next/previous controls for the 23th slideshow
function plusSlides23(n) {
    showSlides23(slideIndex23 += n);
}

// Thumbnail image controls for the 23th slideshow
function currentSlide23(n) {
    showSlides23(slideIndex23 = n);
}

function showSlides23(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides23");
    let dots = document.getElementsByClassName("dot23");
    let captions = document.getElementsByClassName("picCaption23");
    if (n > slides.length) { slideIndex23 = 1 }
    if (n < 1) { slideIndex23 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex23 - 1].style.display = "block";
    dots[slideIndex23 - 1].className += " active";
    captions[slideIndex23 - 1].style.display = "block";
}








let slideIndex24 = 1;
showSlides24(slideIndex24);

// Next/previous controls for the 24th slideshow
function plusSlides24(n) {
    showSlides24(slideIndex24 += n);
}

// Thumbnail image controls for the 24th slideshow
function currentSlide24(n) {
    showSlides24(slideIndex24 = n);
}

function showSlides24(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides24");
    let dots = document.getElementsByClassName("dot24");
    let captions = document.getElementsByClassName("picCaption24");
    if (n > slides.length) { slideIndex24 = 1 }
    if (n < 1) { slideIndex24 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex24 - 1].style.display = "block";
    dots[slideIndex24 - 1].className += " active";
    captions[slideIndex24 - 1].style.display = "block";
}





let slideIndex25 = 1;
showSlides25(slideIndex25);

// Next/previous controls for the 25th slideshow
function plusSlides25(n) {
    showSlides25(slideIndex25 += n);
}

// Thumbnail image controls for the 25th slideshow
function currentSlide25(n) {
    showSlides25(slideIndex25 = n);
}

function showSlides25(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides25");
    let dots = document.getElementsByClassName("dot25");
    let captions = document.getElementsByClassName("picCaption25");
    if (n > slides.length) { slideIndex25 = 1 }
    if (n < 1) { slideIndex25 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex25 - 1].style.display = "block";
    dots[slideIndex25 - 1].className += " active";
    captions[slideIndex25 - 1].style.display = "block";
}






let slideIndex26 = 1;
showSlides26(slideIndex26);

// Next/previous controls for the 26th slideshow
function plusSlides26(n) {
    showSlides26(slideIndex26 += n);
}

// Thumbnail image controls for the 26th slideshow
function currentSlide26(n) {
    showSlides26(slideIndex26 = n);
}

function showSlides26(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides26");
    let dots = document.getElementsByClassName("dot26");
    let captions = document.getElementsByClassName("picCaption26");
    if (n > slides.length) { slideIndex26 = 1 }
    if (n < 1) { slideIndex26 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex26 - 1].style.display = "block";
    dots[slideIndex26 - 1].className += " active";
    captions[slideIndex26 - 1].style.display = "block";
}




let slideIndex27 = 1;
showSlides27(slideIndex27);

// Next/previous controls for the 27th slideshow
function plusSlides27(n) {
    showSlides27(slideIndex27 += n);
}

// Thumbnail image controls for the 27th slideshow
function currentSlide27(n) {
    showSlides27(slideIndex27 = n);
}

function showSlides27(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides27");
    let dots = document.getElementsByClassName("dot27");
    let captions = document.getElementsByClassName("picCaption27");
    if (n > slides.length) { slideIndex27 = 1 }
    if (n < 1) { slideIndex27 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex27 - 1].style.display = "block";
    dots[slideIndex27 - 1].className += " active";
    captions[slideIndex27 - 1].style.display = "block";
}









let slideIndex28 = 1;
showSlides28(slideIndex28);

// Next/previous controls for the 28th slideshow
function plusSlides28(n) {
    showSlides28(slideIndex28 += n);
}

// Thumbnail image controls for the 28th slideshow
function currentSlide28(n) {
    showSlides28(slideIndex28 = n);
}

function showSlides28(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides28");
    let dots = document.getElementsByClassName("dot28");
    let captions = document.getElementsByClassName("picCaption28");
    if (n > slides.length) { slideIndex28 = 1 }
    if (n < 1) { slideIndex28 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex28 - 1].style.display = "block";
    dots[slideIndex28 - 1].className += " active";
    captions[slideIndex28 - 1].style.display = "block";
}








let slideIndex29 = 1;
showSlides29(slideIndex29);

// Next/previous controls for the 29th slideshow
function plusSlides29(n) {
    showSlides29(slideIndex29 += n);
}

// Thumbnail image controls for the 29th slideshow
function currentSlide29(n) {
    showSlides29(slideIndex29 = n);
}

function showSlides29(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides29");
    let dots = document.getElementsByClassName("dot29");
    let captions = document.getElementsByClassName("picCaption29");
    if (n > slides.length) { slideIndex29 = 1 }
    if (n < 1) { slideIndex29 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex29 - 1].style.display = "block";
    dots[slideIndex29 - 1].className += " active";
    captions[slideIndex29 - 1].style.display = "block";
}






let slideIndex30 = 1;
showSlides30(slideIndex30);

// Next/previous controls for the 30th slideshow
function plusSlides30(n) {
    showSlides30(slideIndex30 += n);
}

// Thumbnail image controls for the 30th slideshow
function currentSlide30(n) {
    showSlides30(slideIndex30 = n);
}

function showSlides30(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides30");
    let dots = document.getElementsByClassName("dot30");
    let captions = document.getElementsByClassName("picCaption30");
    if (n > slides.length) { slideIndex30 = 1 }
    if (n < 1) { slideIndex30 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex30 - 1].style.display = "block";
    dots[slideIndex30 - 1].className += " active";
    captions[slideIndex30 - 1].style.display = "block";
}






let slideIndex31 = 1;
showSlides31(slideIndex31);

// Next/previous controls for the 31th slideshow
function plusSlides31(n) {
    showSlides31(slideIndex31 += n);
}

// Thumbnail image controls for the 31th slideshow
function currentSlide31(n) {
    showSlides31(slideIndex31 = n);
}

function showSlides31(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides31");
    let dots = document.getElementsByClassName("dot31");
    let captions = document.getElementsByClassName("picCaption31");
    if (n > slides.length) { slideIndex31 = 1 }
    if (n < 1) { slideIndex31 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex31 - 1].style.display = "block";
    dots[slideIndex31 - 1].className += " active";
    captions[slideIndex31 - 1].style.display = "block";
}



let slideIndex32 = 1;
showSlides32(slideIndex32);

// Next/previous controls for the 32th slideshow
function plusSlides32(n) {
    showSlides32(slideIndex32 += n);
}

// Thumbnail image controls for the 32th slideshow
function currentSlide32(n) {
    showSlides32(slideIndex32 = n);
}

function showSlides32(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides32");
    let dots = document.getElementsByClassName("dot32");
    let captions = document.getElementsByClassName("picCaption32");
    if (n > slides.length) { slideIndex32 = 1 }
    if (n < 1) { slideIndex32 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex32 - 1].style.display = "block";
    dots[slideIndex32 - 1].className += " active";
    captions[slideIndex32 - 1].style.display = "block";
}



let slideIndex33 = 1;
showSlides33(slideIndex33);

// Next/previous controls for the 33th slideshow
function plusSlides33(n) {
    showSlides33(slideIndex33 += n);
}

// Thumbnail image controls for the 33th slideshow
function currentSlide33(n) {
    showSlides33(slideIndex33 = n);
}

function showSlides33(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides33");
    let dots = document.getElementsByClassName("dot33");
    let captions = document.getElementsByClassName("picCaption33");
    if (n > slides.length) { slideIndex33 = 1 }
    if (n < 1) { slideIndex33 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex33 - 1].style.display = "block";
    dots[slideIndex33 - 1].className += " active";
    captions[slideIndex33 - 1].style.display = "block";
}



let slideIndex34 = 1;
showSlides34(slideIndex34);

// Next/previous controls for the 34th slideshow
function plusSlides34(n) {
    showSlides34(slideIndex34 += n);
}

// Thumbnail image controls for the 34th slideshow
function currentSlide34(n) {
    showSlides34(slideIndex34 = n);
}

function showSlides34(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides34");
    let dots = document.getElementsByClassName("dot34");
    let captions = document.getElementsByClassName("picCaption34");
    if (n > slides.length) { slideIndex34 = 1 }
    if (n < 1) { slideIndex34 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex34 - 1].style.display = "block";
    dots[slideIndex34 - 1].className += " active";
    captions[slideIndex34 - 1].style.display = "block";
}



let slideIndex35 = 1;
showSlides35(slideIndex35);

// Next/previous controls for the 35th slideshow
function plusSlides35(n) {
    showSlides35(slideIndex35 += n);
}

// Thumbnail image controls for the 35th slideshow
function currentSlide35(n) {
    showSlides35(slideIndex35 = n);
}

function showSlides35(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides35");
    let dots = document.getElementsByClassName("dot35");
    let captions = document.getElementsByClassName("picCaption35");
    if (n > slides.length) { slideIndex35 = 1 }
    if (n < 1) { slideIndex35 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    slides[slideIndex35 - 1].style.display = "block";
    dots[slideIndex35 - 1].className += " active";
    captions[slideIndex35 - 1].style.display = "block";
}


































































