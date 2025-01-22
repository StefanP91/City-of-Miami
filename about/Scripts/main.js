
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

// KEY INITIATIVES SLIDER MOBILE
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-mobile');
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;
  
    const slides = document.querySelectorAll('.slide-mobile');
    const slideWidth = slides[0].offsetWidth;
  
    const setSliderPosition = () => {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    };
  
    const animation = () => {
      setSliderPosition();
      if (isDragging) requestAnimationFrame(animation);
    };
  
    const touchStart = (index) => (event) => {
      isDragging = true;
      currentIndex = index;
      startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      prevTranslate = currentTranslate;
      animationID = requestAnimationFrame(animation);
    };
  
    const touchMove = (event) => {
      if (!isDragging) return;
      const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      const distance = currentX - startX;
      currentTranslate = prevTranslate + distance;
    };
  
    const touchEnd = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
  
      // Snap to nearest slide
      const movedBy = currentTranslate - prevTranslate;
      if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
      if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
  
      currentTranslate = -currentIndex * slideWidth;
      setSliderPosition();
    };
  
    slides.forEach((slide, index) => {
      slide.addEventListener('touchstart', touchStart(index));
      slide.addEventListener('touchmove', touchMove);
      slide.addEventListener('touchend', touchEnd);
  
      slide.addEventListener('mousedown', touchStart(index));
      slide.addEventListener('mousemove', touchMove);
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
    });
  });
