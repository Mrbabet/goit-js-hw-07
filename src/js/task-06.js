const textInput = document.getElementById("validation-input");
const minLength = textInput.getAttribute("data-length");

const isValid = (e) => {
  if (e.currentTarget.value.length >= minLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
};

textInput.addEventListener("blur", isValid);
