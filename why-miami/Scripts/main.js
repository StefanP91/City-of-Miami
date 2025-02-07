//  INITIALIZATION OF AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 650,
    once: false,
  });
});

// Change content and Desktop and Mobile background on Key Industries
function openDescriptionKI(id, backgroundImage, backgroundPositionDesktop, backgroundPositionMobile) {
  const descriptionContainer = document.getElementById('descriptionsKI');
  const descriptions = descriptionContainer.querySelectorAll('div[id^="description"]');
  const keyIndustriesSection = document.getElementById('keyIndustries');

  descriptions.forEach(description => {
      if (description.id === id) {

          description.classList.add('show');
          
      } else {
          description.classList.remove('show');
      }
  });

  // Preload the new background image
  const img = new Image();
  img.src = backgroundImage;
  img.onload = () => {
    keyIndustriesSection.style.backgroundImage = `url('${backgroundImage}')`;

    if (window.matchMedia("(max-width: 435px)").matches) {
      keyIndustriesSection.style.backgroundPosition = backgroundPositionMobile;
    } 
    
    else {
      keyIndustriesSection.style.backgroundPosition = backgroundPositionDesktop;
    }
  }; 
}

// Change active class on Key Industries
const cardContainerKI = document.getElementById('cardContainerKI');
const cardsKI = cardContainerKI.querySelectorAll('.card');
cardsKI.forEach(card => {
  card.addEventListener('click', () => {
    cardsKI.forEach(c => c.classList.remove('active'));
    card.classList.add('active');  
  });
});

// STARTUP INVESTMENTS SLIDER MOBILE
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

