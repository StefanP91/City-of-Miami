
// KEY INITIATIVES SLIDER
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const visibleSlides = 3; 

    const updateSliderPosition = () => {
        slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;

        slides.forEach(slide => slide.classList.remove('last-visible'));

        const lastVisibleIndex = currentIndex + visibleSlides - 1;
        if (lastVisibleIndex < slides.length) {
            slides[lastVisibleIndex].classList.add('last-visible');
        }
    };

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    updateSliderPosition();
});
