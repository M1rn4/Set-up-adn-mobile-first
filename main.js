// eslint-disable-next-line no-unused-vars
function closewindows() {
  const navbarOptions = document.querySelector('#navbar-options');
  return navbarOptions.classList.replace('menu-mobile', 'nav-menu');
}
const openmenu = document.querySelector('#button-hamburger');
openmenu.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-menu', 'menu-mobile');
  const closeIcon = document.querySelector('#x');
  closeIcon.classList.replace('hidden', 'close-icon-visible');
});

const closemenu = document.querySelector('#x');
closemenu.addEventListener('click', () => {
  closewindows();
});

const closeLinkP = document.querySelector('#links-p');
closeLinkP.addEventListener('click', () => {
  closewindows();
});

const closeLinkA = document.querySelector('#links-a');
closeLinkA.addEventListener('click', () => {
  closewindows();
});

const closeLinkC = document.querySelector('#links-c');
closeLinkC.addEventListener('click', () => {
  closewindows();
});
