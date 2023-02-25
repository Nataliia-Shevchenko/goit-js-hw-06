function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxEls = document.querySelector("#boxes");
const inputNumEl = document.querySelector("#controls input");

const createBtnEl = document.querySelector("[data-create]");
const desrtoyBtnEl = document.querySelector("[data-destroy]");


createBtnEl.addEventListener("click", createBoxes);

const amount = inputNumEl.value;

function createBoxes(amount) {

    const divEl = document.createElement("div");
    const randomColor = getRandomHexColor();
    divEl.style.backgroundColor = randomColor;
    divEl.style.width = "30px";
    divEl.style.height = "30px";
    boxEls.append(divEl);
}

function destroyBoxes(e) {
  boxEls.innerHTML = "";
}
desrtoyBtnEl.addEventListener("click", destroyBoxes);
