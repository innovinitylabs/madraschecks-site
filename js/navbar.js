// Responsive navbar logic for Madras Checks
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
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== hamburger) {
        navMenu.classList.remove('open');
      }
    });
    window.addEventListener('hashchange', () => navMenu.classList.remove('open'));
    window.addEventListener('popstate', () => navMenu.classList.remove('open'));
  }
  // Highlight current page
  if (navMenu) {
    const path = window.location.pathname.split('/').pop();
    navMenu.querySelectorAll('a').forEach(link => {
      if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
})(); 