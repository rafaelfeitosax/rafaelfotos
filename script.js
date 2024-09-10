const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
const slideElements = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slideElements.length;

function showSlide(index) {
    if (index >= totalSlides) index = totalSlides - 1;
    if (index < 0) index = totalSlides - 1;

    slides.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');

    slideElements.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('show');
        } else {
            slide.classList.remove('show');
        }
    });

    currentIndex = index;
}

function initializeCarousel() {
    showSlide(currentIndex);
}

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-slide'));
        showSlide(index);
    });
});

document.querySelector('.carousel').addEventListener('wheel', e => {
    if (e.deltaY < 0) {
        showSlide(currentIndex - 1);
    } else if (e.deltaY > 0) {
        showSlide(currentIndex + 1);
    }
});

initializeCarousel();
