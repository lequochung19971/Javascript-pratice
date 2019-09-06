const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.basket');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const valueInput = this.querySelector('[name=item]').value;
    const item = {
        valueInput,
        done: false
    };
    items.push(item);

    console.table(items);
    this.reset();
    localStorage.setItem('items', JSON.stringify(items));
    makeLists(items);

}


function makeLists(baskets = []) {
    const html = baskets.map((basket, index) => {
        return `
            <li>
                <input type="checkbox" data-index="${index}" id="item${index}" ${basket.done ? 'checked': ''}>
                <label for="item${index}">${basket.valueInput}</label>
            </li>
        `
    }).join('');
    itemList.innerHTML = html;
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    makeLists(items);
}
makeLists(items);
addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);