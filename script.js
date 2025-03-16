function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

// Disable right-click (comment this out if you change your mind, bro)
document.addEventListener('contextmenu', event => event.preventDefault());
