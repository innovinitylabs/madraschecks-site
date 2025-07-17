// Dynamically include navbar.html into <!-- NAVBAR --> placeholder
(function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      const placeholder = document.querySelector('body > .background-overlay')?.nextElementSibling;
      if (placeholder && placeholder.nodeType === 8 && placeholder.nodeValue.trim() === 'NAVBAR') {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        placeholder.parentNode.insertBefore(temp.firstElementChild, placeholder.nextSibling);
      } else {
        // fallback: insert before main
        const main = document.querySelector('main');
        if (main) {
          const temp = document.createElement('div');
          temp.innerHTML = html;
          main.parentNode.insertBefore(temp.firstElementChild, main);
        }
      }
      // After navbar is loaded, load navbar.js for menu logic
      const script = document.createElement('script');
      script.src = 'js/navbar.js';
      document.body.appendChild(script);
    });
})(); 