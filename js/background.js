// background.js
// Random background image logic for Madras Checks

(function() {
  const bgImages = [
    '../assets/bg4.png',
    '../assets/bg8.png'
  ];
  const idx = Math.floor(Math.random() * bgImages.length);
  function setBackground() {
    const bgDiv = document.querySelector('.background-image');
    if (bgDiv) {
      bgDiv.style.backgroundImage = `url('${bgImages[idx]}')`;
      bgDiv.style.backgroundSize = 'cover';
      bgDiv.style.backgroundPosition = 'center';
      bgDiv.style.backgroundRepeat = 'no-repeat';
      bgDiv.style.backgroundAttachment = 'fixed';
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setBackground);
  } else {
    setBackground();
  }
})();

// Hamburger menu logic for mobile nav
(function() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
})(); 