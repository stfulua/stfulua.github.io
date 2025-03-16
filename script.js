function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

document.addEventListener('contextmenu', event => event.preventDefault());
