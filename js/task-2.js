const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = (ingredientsList) => {
  return ingredientsList.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;

    return listItemEl;
  });
};

const listItems = makeIngredientsList(ingredients);
console.log("listItems", listItems);
ingredientsListEl.append(...listItems);
