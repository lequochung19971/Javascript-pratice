const nodeList = Array.from(document.querySelectorAll('li[data-time]'));

let seconds = nodeList
    .map(node => node.dataset.time)
    .map(splitNode => {
        const [mins, secs] = splitNode.split(':');
        return parseInt(mins) * 60 + parseInt(secs);
    })
    .reduce((total, secs) => total + secs);

function splitTimes(sec) {
    let hours = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let seconds = Math.floor((sec - hours * 3600 - mins * 60));
    console.log(hours, mins, seconds);
}

splitTimes(seconds)