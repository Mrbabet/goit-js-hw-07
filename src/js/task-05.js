const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const changeOutput = (e) => {
  output.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    return (output.textContent = "Anonymous");
  }
};

input.addEventListener("input", changeOutput);
