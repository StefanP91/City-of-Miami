//  INITIALIZATION OF AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 650,
    once: false,
  });
});

// Read More Button at Key Initiatives
function toggleReadMore(button) {
  const description = button.closest('div[id^="description"]');
  const paragraphs = description.querySelectorAll('p:not(:first-of-type)');

  const isHidden = Array.from(paragraphs).some(p => !p.classList.contains('show'));

  paragraphs.forEach(p => {
      if (isHidden) {
          p.classList.add('show');
      } else {
          p.classList.remove('show');
      }
  });

  const btnText = button.querySelector('span');
  if (btnText) {
      btnText.textContent = isHidden ? 'Read Less' : 'Read More';
  }
}

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
function toggleReadMoreKI(button) {
  const description = button.closest('div[id^="description"]');
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

// Change content and background on Key Industries
function openDescriptionKI(id, backgroundImage) {
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

  if (keyIndustriesSection) {
    keyIndustriesSection.style.backgroundImage = `url('${backgroundImage}')`;
  } 
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
