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
const disabled = document.querySelectorAll('.itemsLeft');
const body = document.querySelector('body');
// Progress Bar
const currentAmount = document.querySelector('.currentAmount');
const maxAmount = document.querySelector('.maxAmount');
const bar = document.querySelector('.fill');
// Bookmark
const bookmarkWrap = document.querySelector('.bookmarkWrap');
const bookmark = document.querySelector('.bookmark');
// Numbers
const backers = document.querySelector('.backerAmount').childNodes[1];
const amount0 = document.querySelector('.donateAmount1');
const amount1 = document.querySelector('.donateAmount2');
const amount2 = document.querySelector('.donateAmount3');
const amount3 = document.querySelector('.donateAmount4');
const numBackers = toNumber(backers);
if (sessionStorage.getItem('moneyAmount')) {
    currentAmount.innerText = sessionStorage.getItem('moneyAmount');
    backers.innerText = sessionStorage.getItem('backerAmount');
}
bookmarkWrap.addEventListener('click', (e) => {
    bookmark.setAttribute('src', './assets/images/icon-bookmarked.svg');
});
backedAmount(currentAmount, maxAmount);

body.addEventListener('click', (e) => {
    toggleNav(e.target.classList[0]);
    toggleModal(e.target.classList[0]);
    pickReward(e.target.classList[0]);
    highlightPledge();
    thankYouModal(e.target.innerText);
});
disabled.forEach((item, i) => {
    if (item.childNodes[1].innerText === '0') {
        item.parentElement.classList.add('disabled');
        pledgesRadioBtns[i + 1].setAttribute('disabled', 'true');
    }
});
function backedAmount(a, b) {
    const x = toNumber(a);
    const y = toNumber(b);
    const barFill = (+x / +y) * 100;
    bar.style.width = `${barFill}%`;
}
function toNumber(number) {
    const num = number.innerText.replace(/[^0-9]/g, '');
    return num;
}
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
function highlightPledge() {
    pledgeTexts.forEach((text, i) => {
        text.addEventListener('click', (e) => {
            if (modalItem[i].classList[1] === 'disabled') {
                return;
            }

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
function thankYouModal(innerText) {
    if (innerText === 'Continue') {
        numBackers++;
        thankYou.classList.remove('hidden');
        overlay.classList.remove('hidden');
        modal.classList.add('hidden');
        body.classList.add('bodyOverflow');
        backers.innerText = +numBackers;
        let newAmount;
        if (pledgesRadioBtns[0].checked) {
            newAmount = +toNumber(currentAmount) + +amount0.value;
            currentAmount.innerText = `$${newAmount.toLocaleString()}`;
            backedAmount(currentAmount, maxAmount);
        }

        if (pledgesRadioBtns[1].checked) {
            newAmount = +toNumber(currentAmount) + +amount1.value;
            currentAmount.innerText = `$${newAmount.toLocaleString()}`;
            backedAmount(currentAmount, maxAmount);
        }

        if (pledgesRadioBtns[2].checked) {
            newAmount = +toNumber(currentAmount) + +amount2.value;
            currentAmount.innerText = `$${newAmount.toLocaleString()}`;
            backedAmount(currentAmount, maxAmount);
        }

        if (pledgesRadioBtns[3].checked) {
            newAmount = +toNumber(currentAmount) + +amount3.value;
            currentAmount.innerText = `$${newAmount.toLocaleString()}`;
            backedAmount(currentAmount, maxAmount);
        }
        sessionStorage.setItem('moneyAmount', currentAmount.innerText);
        sessionStorage.setItem('backerAmount', backers.innerText);
    }

    if (innerText === 'Got it!') {
        thankYou.classList.add('hidden');
        overlay.classList.add('hidden');
        body.classList.remove('bodyOverflow');
    }
}
