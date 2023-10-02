function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const controlsInput = document.querySelector("#controls input");
const boxes = document.getElementById("boxes");
const destroyBtn = document.querySelector("[data-destroy]");
const createBtn = document.querySelector("[data-create]");
const buttons = document.querySelectorAll("button");

const amountOfBoxes = () => controlsInput.value;

const createBoxes = (amount) => {
  amount = amountOfBoxes();

  for (let i = 0; i < amount; i++) {
    const sizeOfBox = 30 + 10 * i;
    const createBox = document.createElement("div");
    createBox.style.height = sizeOfBox + "px";
    createBox.style.width = sizeOfBox + "px";
    createBox.style.backgroundColor = getRandomHexColor();
    boxes.append(createBox);
    createBox.classList = "color-box";
  }
};
const destroyBoxes = () => {
  const createBox = document.querySelectorAll(".color-box");

  createBox.forEach((box) => {
    box.remove();
  });
};

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);
