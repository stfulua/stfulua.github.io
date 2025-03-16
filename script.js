function searchCategories() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let buttons = document.getElementsByClassName('category-btn');
  
  for (let i = 0; i < buttons.length; i++) {
    let text = buttons[i].textContent.toLowerCase();
    if (text.includes(input)) {
      buttons[i].style.display = '';
    } else {
      buttons[i].style.display = 'none';
    }
  }
}
