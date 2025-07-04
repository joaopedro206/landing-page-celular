const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove('active');
    menuBtn.classList.remove('open');
  }
});

// Fecha ao clicar em qualquer link do menu
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('open');
  });
});
