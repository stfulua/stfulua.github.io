function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function searchProjects() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `/projects.html?search=${encodeURIComponent(query)}`;
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());
