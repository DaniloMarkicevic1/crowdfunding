// Nav
const navOverlay = document.querySelector('.navOverlay');
const nav = document.querySelector('.nav');
const navHamburger = document.querySelector('.hamburger');
const hamburgerIcon = './assets/images/icon-hamburger.svg';
const closeIcon = './assets/images/icon-close-menu.svg';
// Modules
const overlay = document.querySelector('.overlay');
const backProjectBtn = document.querySelector('.backProjectBtn');
const modal = document.querySelector('.modal');
const thankYou = document.querySelector('.thankYou');
const closeModal = document.querySelector('.closeModal');
const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    toggleNav(e.target.classList[0]);
    toggleModal(e.target.classList[0]);
});

function toggleNav(value) {
    switch (value) {
        case 'hamburger':
            navHamburger.classList.remove('hamburger');
            navHamburger.classList.add('close');
            navHamburger.src = closeIcon;
            navOverlay.classList.add('linearBackground');
            nav.classList.remove('hide');
            break;
        case 'close':
        case 'logo':
        case 'navOverlay':
        case 'getStarted':
            navHamburger.classList.add('hamburger');
            navHamburger.classList.remove('close');
            navHamburger.src = hamburgerIcon;
            navOverlay.classList.remove('linearBackground');
            nav.classList.add('hide');
            break;
    }
}
function toggleModal(value) {
    switch (value) {
        case 'backProjectBtn':
            overlay.classList.remove('hidden');
            modal.classList.remove('hidden');
            break;
        case 'closeModal':
        case 'overlay':
            overlay.classList.add('hidden');
            modal.classList.add('hidden');
            break;
        case 'selectReward':
        case 'getStarted':
            overlay.classList.remove('hidden');
            modal.classList.remove('hidden');
            break;
    }
}
