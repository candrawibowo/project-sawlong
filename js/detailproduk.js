document.querySelectorAll(".carousel").forEach(carousel => {

    const slides = carousel.querySelectorAll(".slide");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");
  
    let index = 0;
  
    function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
    }
  
    nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
    });
  
    prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    });
  
    });

    // NAVBAR TOGGLE 
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});