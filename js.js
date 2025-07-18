//Adapted from the w3 schools slideshow content
let slideIndex = 1;
let slideshowActive = false;

function enterSlideshow() {
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('slideshowContainer').classList.remove('hidden');
    document.getElementById('dotsContainer').classList.remove('hidden');
    slideshowActive = true;
    showSlides(slideIndex);
}

function currentSlide(n) {
    if (slideshowActive) {
        showSlides(slideIndex = n);
    }
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}