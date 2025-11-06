// --- Apparition fluide des sections ---
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
sections.forEach(section => observer.observe(section));

// --- Lightbox pour agrandir les images ---
const allImages = document.querySelectorAll("img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

allImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// --- Slider automatique des certifications ---
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  if (i >= slides.length) index = 0;
  if (i < 0) index = slides.length - 1;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index++;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  showSlide(index);
});

setInterval(() => {
  index++;
  showSlide(index);
}, 4000);