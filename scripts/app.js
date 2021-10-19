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
// Pledges, RadioButtons
const pledgesRadioBtns = document.querySelectorAll('input[name="pledge"]');
const enterPledge = document.querySelectorAll('.enterPledge');
const modalItem = document.querySelectorAll('.modalItem');
const pledgeTexts = document.querySelectorAll('.pledgeText');
const body = document.querySelector('body');
body.addEventListener('click', (e) => {
    // console.log(e.target.classList[0]);
    toggleNav(e.target.classList[0]);
    toggleModal(e.target.classList[0]);
    pickReward(e.target.classList[0]);
    highlightPledge();
    thankYouModal(e.target.innerText);
});

function pickReward(value) {
    switch (value) {
        case 'selectMin':
            pledgesRadioBtns[0].checked = false;
            pledgesRadioBtns[1].checked = true;
            pledgesRadioBtns[2].checked = false;
            pledgesRadioBtns[3].checked = false;
            break;
        case 'selectMed':
            pledgesRadioBtns[0].checked = false;
            pledgesRadioBtns[1].checked = false;
            pledgesRadioBtns[2].checked = true;
            pledgesRadioBtns[3].checked = false;
            break;
        case 'selectHigh':
            pledgesRadioBtns[0].checked = false;
            pledgesRadioBtns[1].checked = false;
            pledgesRadioBtns[2].checked = false;
            pledgesRadioBtns[3].checked = true;
            break;
    }
}
function thankYouModal(innerText) {
    if (innerText === 'Continue') {
        thankYou.classList.remove('hidden');
        overlay.classList.remove('hidden');
        modal.classList.add('hidden');
        body.classList.add('bodyOverflow');
    }
    if (innerText === 'Got it!') {
        thankYou.classList.add('hidden');
        overlay.classList.add('hidden');
        body.classList.remove('bodyOverflow');
    }
}

function highlightPledge() {
    pledgeTexts.forEach((text, i) => {
        text.addEventListener('click', (e) => {
            console.log(e.target.classList[0]);
            if (e.target.classList[0]) {
                pledgesRadioBtns[i].checked = true;
            }
        });
    });
    pledgesRadioBtns.forEach((btn, i) => {
        if (btn.checked) {
            enterPledge[i].classList.remove('enterPledge');
            modalItem[i].classList.add('picked');
        } else {
            enterPledge[i].classList.add('enterPledge');
            modalItem[i].classList.remove('picked');
        }
    });
}
function toggleNav(value) {
    switch (value) {
        case 'hamburger':
            navHamburger.classList.remove('hamburger');
            navHamburger.classList.add('close');
            navHamburger.src = closeIcon;
            navOverlay.classList.add('linearBackground');
            nav.classList.remove('hide');
            body.classList.add('bodyOverflow');
            break;
        case 'close':
        case 'logo':
        case 'navOverlay':
        case 'closeNav':
        case 'getStarted':
            navHamburger.classList.add('hamburger');
            navHamburger.classList.remove('close');
            navHamburger.src = hamburgerIcon;
            navOverlay.classList.remove('linearBackground');
            nav.classList.add('hide');
            body.classList.remove('bodyOverflow');
            break;
    }
}
function toggleModal(value) {
    switch (value) {
        case 'backProjectBtn':
        case 'selectMed':
        case 'selectMin':
        case 'selectHigh':
        case 'getStarted':
            overlay.classList.remove('hidden');
            modal.classList.remove('hidden');
            body.classList.add('bodyOverflow');
            break;
        case 'closeModal':
        case 'overlay':
            overlay.classList.add('hidden');
            modal.classList.add('hidden');
            body.classList.remove('bodyOverflow');
            break;
    }
}
