let arrKey = [];
let secretCode = 'quochung';
window.addEventListener('keyup', (e) => {

    arrKey.push(e.key);
    arrKey.splice(-secretCode.length - 1, arrKey.length - secretCode.length);
    console.log(arrKey);

    if (arrKey.join('').includes(secretCode)) {
        cornify_add();
    }
})