const navToggle = document.getElementById('.nav-toggle')
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible')
})