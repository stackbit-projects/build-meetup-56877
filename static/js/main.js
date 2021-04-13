const templateParams = document.getElementById('template-params').dataset;
const apiKey = templateParams.apiKey;
const templatesUrl = templateParams.templatesUrl

// Handle hamburger menu toggle
function menuToggleHandler() {
  let nav = document.querySelector('.nav');
  let logoDiv = document.querySelector('.nav__logo');
  let originalLogo = logoDiv.dataset.original;
  let darkLogo = logoDiv.dataset.dark;
  let logo = document.querySelector('.nav__logo-image');

  if (nav.classList.contains('nav--opened')) {
    nav.classList.remove('nav--opened');
    if (originalLogo) {
      setTimeout(function(){
        logo.src = originalLogo;
      }, 200)
    }
    document.body.style.overflow = 'initial';
  } else {
    nav.classList.add('nav--opened');
    if (originalLogo && darkLogo) {
      setTimeout(function(){
        logo.src = darkLogo;
      }, 100);
    }
    document.body.style.overflow = 'hidden';
  }
}

// Close hamburger menu
function closeHamburgerMenu() {
  let originalLogo = document.querySelector('.nav__logo').dataset.original;
  document.querySelector('.nav').classList.remove('nav--opened');
  if (originalLogo) {
    document.querySelector('.nav__logo-image').src = originalLogo;
  }
  document.body.style.overflow = 'initial';
}

window.addHamburgerMenuHandlers = function () {
  document.querySelector('.hamburger').addEventListener('click', menuToggleHandler, false);
};

window.removeHamburgerMenuHandlers = function () {
  closeHamburgerMenu();
  document.querySelector('.hamburger').removeEventListener('click', menuToggleHandler, false);
};

window.addEventListener('resize', function () {
  if (document.querySelector('.hamburger').offsetParent === null) {
    closeHamburgerMenu();
  }
}, true);
