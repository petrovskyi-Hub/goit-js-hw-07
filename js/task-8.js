const refs = {
  input: document.querySelector("#controls>input"),
  boxes: document.querySelector("#boxes"),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
};

refs.renderBtn.addEventListener("click", () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener("click", () => destroyBoxes());

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    refs.boxes.insertAdjacentHTML("beforeend", `<div></div>`);
    refs.boxes.lastElementChild.style.backgroundColor = `#${(
      0x1000000 +
      Math.random() * 0xffffff
    )
      .toString(16)
      .substr(1, 6)}`;

    refs.boxes.lastElementChild.style.width = `${30 + i * 10}px`;
    refs.boxes.lastElementChild.style.height = `${30 + i * 10}px`;
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
