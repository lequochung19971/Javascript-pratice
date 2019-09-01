const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.sizing}`));
}

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
});