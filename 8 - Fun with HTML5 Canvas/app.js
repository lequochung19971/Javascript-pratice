const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.shadowBlur = 30;



let isDrawing = false;
let lastX = 0;
let lastY = 0;
let lineWidth = 100;
let change = true;
let colorChange = 360;


function draw(e) {
    if (!isDrawing) return;
    // console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    colorChange -= 1;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = `hsl(${colorChange}, 100%, 50%)`;
    ctx.shadowColor = `hsl(${colorChange}, 100%, 50%)`;

    console.log(lineWidth);
    if (lineWidth <= 1 || lineWidth > 100) {
        change = !change;

    }
    if (colorChange == 0) {
        colorChange = 360;
    }

    if (change) {
        console.log('-');
        lineWidth -= 0.5;
    } else if (!change) {
        console.log('+');
        lineWidth += 0.5;
    }

    ctx.stroke();
    [lastX, lastY] = [e.clientX, e.clientY];

}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    [lastX, lastY] = [this.clientX, this.clientY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);