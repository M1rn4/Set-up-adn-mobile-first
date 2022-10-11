// eslint-disable-next-line no-unused-vars
const openmenu = document.querySelector('#button-hamburger');
openmenu.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-menu', 'menu-mobile');
  const closeIcon = document.querySelector('#x');
  closeIcon.classList.replace('hidden', 'close-icon-visible');
});

const closemenu = document.querySelector('#x');
closemenu.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('menu-mobile', 'nav-menu');
});

const closeLinkP = document.querySelector('#links-p');
closeLinkP.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('menu-mobile', 'nav-menu');
});

const closeLinkA = document.querySelector('#links-a');
closeLinkA.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('menu-mobile', 'nav-menu');
});

const closeLinkC = document.querySelector('#links-c');
closeLinkC.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('menu-mobile', 'nav-menu');
});
