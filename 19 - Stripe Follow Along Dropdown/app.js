const triggers = document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("mouseenter");
  setTimeout(
    () =>
      this.classList.contains("mouseenter") &&
      this.classList.add("mouseenter-show"),
    300
  );

  background.classList.add("open");
  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  console.log(dropdownCoords);

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    left: dropdownCoords.left,
    top: dropdownCoords.top
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("top", `${coords.top}px`);
  background.style.setProperty("left", `${coords.left}px`);
}

function handleRemove() {
  this.classList.remove("mouseenter", "mouseenter-show");
  background.classList.remove("open");
}

triggers.forEach(trigger =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", handleRemove)
);
