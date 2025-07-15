// Konami code: type 'valipokkann' to unlock art
(function() {
  const secret = 'valipokkann';
  let buffer = '';
  const modal = document.getElementById('generator-modal');
  const closeBtn = document.getElementById('close-generator');

  function showModal() {
    if (modal) modal.style.display = 'block';
  }
  function hideModal() {
    if (modal) modal.style.display = 'none';
  }

  document.addEventListener('keydown', function(e) {
    if (e.key.length === 1) {
      buffer += e.key.toLowerCase();
      if (buffer.length > secret.length) buffer = buffer.slice(-secret.length);
      if (buffer === secret) {
        showModal();
        buffer = '';
      }
    }
  });
  if (closeBtn) {
    closeBtn.addEventListener('click', hideModal);
  }
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) hideModal();
    });
  }
})(); 