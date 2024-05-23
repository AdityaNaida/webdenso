const servicesContainer = document.querySelector(".services-container");
function viewServices() {
  servicesContainer.classList.toggle("flex");
}
document.addEventListener("click", (e) => {
  if (
    !servicesContainer.contains(e.target) &&
    e.target !== document.querySelector(".services-btn")
  ) {
    servicesContainer.classList.remove("flex");
  }
});
let a = 1;
function viewMenu(imgSrc) {
  if (a == 1) {
    imgSrc.src = "assets/icons/close-icon.svg";
    a = 0;
  } else {
    imgSrc.src = "assets/icons/menu.svg";
    a = 1;
  }
  document.querySelector(".navlinks-container").classList.toggle("menuFadeIn");
}

let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 3000);

const faqs = document.querySelectorAll(".faq-question");
faqs.forEach((e) => {
  e.addEventListener("click", () => {
    const nextDiv = e.nextElementSibling;
    nextDiv.classList.toggle("block-faq");
    const img = e.querySelector("img");
    if (nextDiv.classList.contains("block-faq")) {
      img.src = "/assets/icons/minus.svg";
    } else {
      img.src = "/assets/icons/plus.svg";
    }
  });
});
