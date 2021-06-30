const bars = document.querySelector('.menu-bars');
const navMobile = document.querySelector('#nav-mobile');
const navItems = document.querySelectorAll('.nav-item');

bars.addEventListener('click', () => {
  navMobile.classList.toggle('is-active');
  bars.classList.toggle('is-active');
});

bars.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    bars.click();
  }
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMobile.classList.remove('is-active');
    bars.classList.toggle('is-active');
  });
});
