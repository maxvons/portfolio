var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("img-gallery-item");
var dots = document.getElementsByClassName("dot");
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

/* Toggle between adding and removing the "responsive" class to navbar 
    when the user clicks on the menu icon */
function toggleMobileMenu() {
    var x = document.getElementById("navbar");
    var m_div = document.getElementById("main-div");
    if (x.className === "topnav") {
        x.className += " responsive";
        m_div.className += " top-extra-padding";
    } else {
        x.className = "topnav";
        m_div.className = "top-padding";
    }
}


