// background.js
// Random background image logic for Madras Checks

(function() {
  const bgImages = [
    '../assets/bg4.png',
    '../assets/bg8.png'
  ];
  function setBackground() {
    const bgDiv = document.querySelector('.background-image');
    if (bgDiv) {
      // Use bg8.png as default for home page
      const isHome = document.body.classList.contains('home');
      const bgUrl = isHome ? '../assets/bg8.png' : bgImages[Math.floor(Math.random() * bgImages.length)];
      bgDiv.style.backgroundImage = `url('${bgUrl}')`;
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
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
    // Close menu if clicking outside
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== hamburger) {
        navMenu.classList.remove('open');
      }
    });
    // Optional: close menu on route change (hashchange/popstate)
    window.addEventListener('hashchange', () => navMenu.classList.remove('open'));
    window.addEventListener('popstate', () => navMenu.classList.remove('open'));
  }
})(); 