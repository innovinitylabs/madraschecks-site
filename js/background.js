// background.js
// Random background image logic for Madras Checks

(function() {
  const bgImages = [
    '../assets/bg1.png',
    '../assets/bg2.png',
    '../assets/bg3.png',
    '../assets/bg4.png',
    '../assets/bg5.png',
    '../assets/bg6.png',
    '../assets/bg7.png',
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