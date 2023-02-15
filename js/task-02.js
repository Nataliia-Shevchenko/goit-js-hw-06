const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemsList = document.querySelector("#ingredients");

const makeIngredientsList = (items) => {
  return ingredients.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = item;

    return itemEl;
  });
};

const items = makeIngredientsList(ingredients);

itemsList.append(...items);

