// Espacio reservado para interacciones futuras.
const slides = document.querySelectorAll('.gallery-slide');
const prev = document.querySelector('.gallery-prev');
const next = document.querySelector('.gallery-next');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');

    const video = slide.querySelector('video');
    if (video) video.pause();
  });

  slides[index].classList.add('active');
}

next.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
