const registerForm = document.querySelector(".login-form");

const submitForm = (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const loginData = {
    user: email,
    password: password,
  };

  console.log(loginData);
};

registerForm.addEventListener("submit", submitForm);
