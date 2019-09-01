const panels = document.querySelectorAll('.panel');

function togglePanel() {
    this.classList.toggle('open');
    this.classList.toggle('open-active');
    this.classList.toggle('boxShadow');
}

function toggleTransform() {

}

panels.forEach(panel => {
    panel.addEventListener('click', togglePanel);
});