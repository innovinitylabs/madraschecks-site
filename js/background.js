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
  document.body.style.backgroundImage = `url('${bgImages[idx]}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
})(); 