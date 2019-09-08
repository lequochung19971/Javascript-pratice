const wrapper = document.querySelector('.wrapper');
const text = wrapper.querySelector('h2');

function handleShadow(e) {
    const moveX = (e.clientX - (text.offsetLeft + text.offsetWidth / 2)) / 3;
    const moveY = (e.clientY - (text.offsetTop + text.offsetHeight / 2)) / 3;

    text.style.textShadow = `${moveX}px ${moveY}px rgba(255, 0, 255, 0.7), ${-moveX}px ${-moveY}px rgba(0, 255, 255, 0.7), ${-moveY}px ${moveX}px rgba(0, 255, 0, 0.7), ${moveY}px ${-moveX}px rgba(255, 217, 0, 0.7)`;
}
window.addEventListener('mousemove', handleShadow);