let colors = [
    "#16a085",
    "#27ae60",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#77B1A9",
    "#73A857"
];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function playSound(key) {
    let keyIsPressed = document.querySelector(`.key[data-key="${key.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    if (!audio) return;
    let color = randomColor();
    keyIsPressed.style.background = color;
    keyIsPressed.style.transform = 'scale(1.1)';
    keyIsPressed.style.transition = "background box-shadow 0.2s";
    keyIsPressed.style.boxShadow = `-1px -1px 15px 2px ${color}`;
    audio.currentTime = 0;
    audio.play();
}

function endedPlaySound(key) {
    let keyUp = document.querySelector(`.key[data-key="${key.keyCode}"]`);
    if (!keyUp) return;
    keyUp.style.background = "#333333";
    keyUp.style.boxShadow = "-1px -1px 15px 2px #333333";
    keyUp.style.transform = 'scale(1)';
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', endedPlaySound);