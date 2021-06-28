const bars = document.querySelector('.menu-bars');
const navMobile = document.querySelector('#nav-mobile');

bars.addEventListener('click', () => {
  navMobile.classList.toggle('is-active');
});

bars.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    bars.click();
  }
});