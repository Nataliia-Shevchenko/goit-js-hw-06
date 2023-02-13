const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemsList = document.querySelector('#ingredients');

const items = ingredients.map((elem) => {

  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = elem;

  return itemEl;
});

itemsList.append(...items);

console.log(itemsList);

