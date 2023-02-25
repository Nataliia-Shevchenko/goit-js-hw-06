let counterValue = 0;
const descBtnEl = document.querySelector('button[data-action="decrement"]');
const incrBtnEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector("#value");

incrBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

descBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
