//  INITIALIZATION OF AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 650,
    once: false,
  });
});

// Read More Button at Key Initiatives
// function toggleReadMore(button) {
//   const description = button.closest('div[id^="description"]');
//   const paragraphs = description.querySelectorAll('p:not(:first-of-type)');

//   const isHidden = Array.from(paragraphs).some(p => !p.classList.contains('show'));

//   paragraphs.forEach(p => {
//       if (isHidden) {
//           p.classList.add('show');
//       } else {
//           p.classList.remove('show');
//       }
//   });

//   const btnText = button.querySelector('span');
//   if (btnText) {
//       btnText.textContent = isHidden ? 'Read Less' : 'Read More';
//   }
// }

// Change content on Key Initiatives
function openDescription(id) {
  const descriptionContainer = document.getElementById('descriptions');
  const descriptions = descriptionContainer.querySelectorAll('div[id^="description"]');

  descriptions.forEach(description => {
      if (description.id === id) {

          description.classList.add('show');
          
      } else {
          description.classList.remove('show');
      }
  });
}

// Change active class on Key Initiatives
const cardContainer = document.getElementById('cardContainer');
const cards = cardContainer.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');  
  });
});

// Read More Button at Key Industries
// function toggleReadMoreKI(button) {
//   const description = button.closest('div[id^="description"]');
//   const paragraphs = description.querySelectorAll('p:not(:first-of-type)');
//   const lists = description.querySelectorAll ('ul')

//   const isHidden = Array.from(paragraphs).some(p => !p.classList.contains('show'));

//   paragraphs.forEach(p => {
//       if (isHidden) {
//           p.classList.add('show');
//       } else {
//           p.classList.remove('show');
//       }
//   });

//   lists.forEach(ul => {
//     if (isHidden) {
//         ul.classList.add('show');
//     } else {
//         ul.classList.remove('show');
//     }
// });

//   const btnText = button.querySelector('span');
//   if (btnText) {
//       btnText.textContent = isHidden ? 'Read Less' : 'Read More';
//   }
// }

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

// Change content on Key Initiatives Trade and Logistics
// document.getElementById('tradeIntro').style.display = 'none';
// document.getElementById('tradeView').style.display = 'none';

// function openTrade(){

//   document.getElementById('tradeIntro').style.display = 'block';
//   document.getElementById('tradeView').style.display = 'block';

//   document.getElementById('normalView').style.display = 'none';
//   document.getElementById('intro').style.display = 'none';
  
//   document.getElementById('readMoreTradeBtn').style.display = 'none';

//   if (window.matchMedia("(max-width: 435px)").matches) {
//     const element = document.getElementById('descriptionsKIView');
//     if (element) {
//       element.style.marginTop = '5%';
//       element.classList.remove('col-8');
//       element.classList.add('col-12');
//     }
//   }
 
// }

// function goBack(){
//   document.getElementById('normalView').style.display = 'block';
//   document.getElementById('intro').style.display = 'block';
  
//   document.getElementById('tradeIntro').style.display = 'none';
//   document.getElementById('tradeView').style.display = 'none';

//   document.getElementById('readMoreTradeBtn').style.display = 'block';

//   if (window.matchMedia("(max-width: 435px)").matches) {
//     const element = document.getElementById('descriptionsKIView');
//     if (element) {
//       element.style.marginTop = '5%';
//       element.classList.remove('col-12');
//       element.classList.add('col-8');
//     }
//   }

// }






// Accordion button
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
  
      document.querySelectorAll('.accordion-button .icon').forEach(icon => {
        icon.textContent = '+';
      });
  
      const icon = this.querySelector('.icon');
      if (this.classList.contains('collapsed')) {
        icon.textContent = '+';
      } else {
        icon.textContent = '-';
      }
    });
  });



  /////////// MOBILE VERSION ///////////


  // Read More Button at Key Initiatives -  MOBILE
function toggleReadMoreMobile(button) {
  const description = button.closest('.card');
  const paragraphs = description.querySelectorAll('p:not(:first-of-type)');
  const lists = description.querySelectorAll ('ul')

  const isHidden = Array.from(paragraphs).some(p => !p.classList.contains('show'));

  paragraphs.forEach(p => {
      if (isHidden) {
          p.classList.add('show');
      } else {
          p.classList.remove('show');
      }
  });

  lists.forEach(ul => {
        if (isHidden) {
            ul.classList.add('show');
        } else {
            ul.classList.remove('show');
        }
    });

  const btnText = button.querySelector('span');
  if (btnText) {
      btnText.textContent = isHidden ? 'Read Less' : 'Read More';
  }
}


// KEY ACHIEVEMENTS SLIDER - MOBILE
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

// KEY ACHIEVEMENTS SLIDER - MOBILE
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.PE-slider');
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  let currentIndex = 0;

  const slides = document.querySelectorAll('.PE-slide');
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

// TRADE&LOGISTICS SLIDER - MOBILE
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.TL-slider');
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  let currentIndex = 0;

  const slides = document.querySelectorAll('.TL-slide');
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


  


