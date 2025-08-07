window.addEventListener('load', function() {
  document.querySelector('.loader').style.display = 'none';
});

const nav = document.querySelector('nav');
const dropdown = document.querySelector('.dropdown');

function menu(v) {
  if (v == 'ab') {
    dropdown.style.display = 'flex'
  }
  else {
    dropdown.style.display = 'none'
  }
}