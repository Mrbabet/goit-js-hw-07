const counter = document.getElementById("value");
const button = document.querySelectorAll("button");
let counterValue = 0;

button.forEach((btn) => {
  const changeValue = () => {
    btn.dataset.action === "increment"
      ? (counter.textContent = ++counterValue)
      : (counter.textContent = --counterValue);
  };
  btn.addEventListener("click", changeValue);
});
