// const categoriesListEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll(".item");

// console.log(`В списке ${categoriesListEl.children.length} категории`);
console.log(`В списке ${itemsEl.length} категории`);

itemsEl.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
