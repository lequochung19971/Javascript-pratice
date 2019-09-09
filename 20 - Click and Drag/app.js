const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
  console.log({
    startX,
    scrollLeft
  });
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return; //stop
  e.preventDefault();
  const x = e.pageX;
  const scroll = x - startX;
  console.log({
    x,
    scroll
  });
  slider.scrollLeft = scrollLeft - scroll;
  console.log(slider.scrollLeft);
});