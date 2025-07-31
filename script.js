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

const stl= getComputedStyle(dropdown);
console.log(dropdown.getBoundingClientRect().height);
/*const styleroots = document.querySelector(':root');
styleroots.style.setProperty('--default', '#051429');
styleroots.style.setProperty('--textcolor', 'white');
styleroots.style.setProperty('--headerbg', 'url(/img/bgdark.jpg)');*/