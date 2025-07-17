// Toast-style responsive navbar logic for Madras Checks
(function() {
  const hamburger = document.querySelector('.nav-hamburger');
  const toast = document.querySelector('.nav-toast');
  const overlay = document.querySelector('.nav-toast-overlay');
  const closeBtn = document.querySelector('.nav-toast-close');
  const toastLinks = document.querySelectorAll('.toast-nav a');
  const desktopLinks = document.querySelectorAll('.desktop-nav a');

  function openToast() {
    toast.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toast.focus();
  }
  function closeToast() {
    toast.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (hamburger && toast && overlay && closeBtn) {
    hamburger.addEventListener('click', openToast);
    closeBtn.addEventListener('click', closeToast);
    overlay.addEventListener('click', closeToast);
    toastLinks.forEach(link => {
      link.addEventListener('click', closeToast);
    });
    document.addEventListener('keydown', function(e) {
      if (toast.classList.contains('open') && (e.key === 'Escape' || e.key === 'Esc')) closeToast();
    });
  }
  // Defensive: always close toast on page load
  if (toast && overlay) {
    toast.classList.remove('open');
    overlay.classList.remove('open');
  }
  // Highlight current page in both navs
  function highlightLinks(links) {
    const path = window.location.pathname.split('/').pop();
    links.forEach(link => {
      if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  highlightLinks(toastLinks);
  highlightLinks(desktopLinks);
})(); 