let slideIndex = 1;
showSlides(slideIndex);
autoSlides();

//Next/previous controls

// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls 

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName('dot');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";


    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(autoSlides, 5000);


}