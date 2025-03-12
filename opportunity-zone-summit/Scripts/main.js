// COUNTER
const counter = document.getElementById('counter');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countdown = () => {
  const currentDate = new Date();
  const summitDate = new Date('2025-04-11T00:00:00');
  const timeDifference = summitDate - currentDate;

  const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((timeDifference % (1000 * 60)) / 1000);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
};

setInterval(countdown, 1000);

  // EXAMPLES SLIDER MOBILE
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  let currentIndex = 0;

  const slides = document.querySelectorAll('.slide');
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