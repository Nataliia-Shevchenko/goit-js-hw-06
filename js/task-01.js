const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${ numberOfCategories.length }`);


const listItems = categories.children;


for (let elem of listItems){

console.log(`Category: ${elem.firstElementChild.textContent}`);

console.log(`Elements: ${elem.lastElementChild.children.length}`);
};


