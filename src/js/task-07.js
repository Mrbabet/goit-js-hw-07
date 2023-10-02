const rangeInput = document.getElementById("font-size-control");
const changeTextSize = document.getElementById("text");

changeTextSize.style.fontSize = rangeInput.value + "px";
const changeSize = (e) => {
  changeTextSize.style.fontSize = e.currentTarget.value + "px";
};

rangeInput.addEventListener("input", changeSize);
