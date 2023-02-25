const bodyEl = document.querySelector("body");

const colorBtnEl = document.querySelector(".change-color");

const spanColorEl = document.querySelector(".color");

colorBtnEl.addEventListener("click", handleChangeColor);

function handleChangeColor(event) {
  const colorGenerated = getRandomHexColor();

  spanColorEl.textContent = colorGenerated;
  bodyEl.style.backgroundColor = colorGenerated;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
