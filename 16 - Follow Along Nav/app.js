const triggers = document.querySelectorAll('a');
const highlights = document.createElement('span');
highlights.classList.add('highlight');
document.body.append(highlights);

function highLightLink() {
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    };

    highlights.style.width = `${coords.width}px`;
    highlights.style.height = `${coords.height}px`;
    highlights.style.top = `${coords.top}px`;
    highlights.style.left = `${coords.left}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highLightLink));