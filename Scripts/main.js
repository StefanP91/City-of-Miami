//  INITIALIZATION OF AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 650,
    once: false,
  });
});

// Read More Button at Key Initiatives
document.getElementById('read-more-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const paragraphs = document.querySelectorAll('.without-card p:not(:first-of-type)');

    const isHidden = Array.from(paragraphs).some(p => !p.classList.contains('show'));

    paragraphs.forEach(p => {
        if (isHidden) {
            p.classList.add('show'); 
        } else {
            p.classList.remove('show'); 
        }
    });

    const btnText = this.querySelector('span');
    if (btnText) {
        btnText.textContent = isHidden ? 'Read Less' : 'Read More';
    }
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
