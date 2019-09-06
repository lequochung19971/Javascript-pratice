const checkBoxes = document.querySelectorAll('.item>input');
const text = document.querySelectorAll('.item>p');

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
let lastChecked;

function handleCheck(e) {
  let iBetween = false;
  if (e.shiftKey && this.checked) {

    checkBoxes.forEach(checkbox => {
      console.log(checkbox)
      if ((checkbox === this || checkbox === lastChecked)) {
        iBetween = !iBetween;
        console.log("CHECK HEER");
      }
      if (iBetween && lastChecked.checked) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}