var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var slideIndex = 1;
showSlides(slideIndex);

prev.addEventListener("click", function() {
    plusSlides(-1)
});

next.addEventListener("click", function() {
    plusSlides(1)
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}
var dots = document.querySelectorAll(".indicator");

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        showSlides(slideIndex = i + 1);
    });
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName("indicator");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].classList.add("active");
}