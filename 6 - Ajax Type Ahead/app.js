const endpoint = 'https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json';

const cities = [];
fetch(endpoint)
    .then(response => {
        if (response.status !== 200) {
            console.log(`Looks like there was a problem. Status code: ${response.status}`);
            return;
        }
        response.json().then(data => cities.push(...data));
    })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    })

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex);
    })
}


function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const regex = new RegExp(this.value, 'gi');

    const html = matchArray.map(place => {
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${place.province}</span>
                <span class="population" style="padding-left:40px;">${place.population}</span>
            </li>
        `
    }).join('');
    suggestions.innerHTML = html;
}
const suggestions = document.querySelector('.suggestions');
const valueSearch = document.querySelector('.search');


valueSearch.addEventListener('keyup', displayMatches);
valueSearch.addEventListener('change', displayMatches);