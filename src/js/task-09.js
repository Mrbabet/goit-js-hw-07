function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

const changeColor = () => {
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  document.querySelector("body").style.backgroundColor = color;
};
colorButton.addEventListener("click", changeColor);
