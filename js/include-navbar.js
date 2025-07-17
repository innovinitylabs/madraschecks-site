// Dynamically include navbar.html into <!-- NAVBAR --> placeholder
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // Find the <!-- NAVBAR --> comment node
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_COMMENT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() === 'NAVBAR') {
        // Insert the navbar HTML after the comment
        const temp = document.createElement('div');
        temp.innerHTML = data;
        node.parentNode.insertBefore(temp.firstElementChild, node.nextSibling);
        break;
      }
    }
  }); 