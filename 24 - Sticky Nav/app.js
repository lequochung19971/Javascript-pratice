const sticky_nav = document.querySelector('#main');
const site_wrap = document.querySelector('.site-wrap');
const logo = document.querySelector('.logo');

function handleSticky() {
    console.log(window.scrollY);
    console.log(sticky_nav.offsetTop);
    if (sticky_nav.offsetTop === window.scrollY) {
        Sticky();
    } else if (sticky_nav.offsetTop !== window.scrollY) {
        noSticky();
    }
}

function Sticky() {
    site_wrap.classList.add('sticky-wrap');
    logo.style.maxWidth = '500px';
    sticky_nav.style.boxShadow = '0px 5px rgb(0, 0, 0, 0.1)';
}

function noSticky() {
    site_wrap.classList.remove('sticky-wrap');
    logo.style.maxWidth = '0';
    sticky_nav.style.boxShadow = 'none';
}

window.addEventListener('scroll', handleSticky);