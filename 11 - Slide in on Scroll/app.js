function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const slideImgs = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    slideImgs.forEach(img => {

        const isHalfImg = img.offsetTop + (img.height / 2) - window.innerHeight;
        const outHalfImg = isHalfImg + window.innerHeight;

        if (window.scrollY >= isHalfImg && window.scrollY <= outHalfImg) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }

    })
}

window.addEventListener('scroll', debounce(checkSlide));