const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");

function increment(value) {
  value.textContent = Number(value.textContent) + 1;
}

function decrement(value) {
  value.textContent = Number(value.textContent) - 1;
}

incrementBtn.addEventListener("click", () => increment(counterValue));

decrementBtn.addEventListener("click", () => decrement(counterValue));
