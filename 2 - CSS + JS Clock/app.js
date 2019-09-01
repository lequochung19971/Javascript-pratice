const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const secondDeg = (90 + second * 6);

    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const minute = now.getMinutes();
    const minuteDeg = (90 + minute * 6 + second / 10);
    minHand.style.transform = `rotate(${minuteDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = (90 + hour * 30 + minute / 2)
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);