const formEl = document.querySelector(".login-form");

const formInputEls = document.querySelectorAll("input");

console.log(formEl.firstChild.textContent);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  formInputEls.forEach((el) => {
    if (el.value === "") {
      alert("Усі поля повинні бути заповнені!");
    }
  });
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  
  const formData = { email, password };
  
  console.log(formData);

  event.target.reset();
}
