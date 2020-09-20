const inputBlurRef = document.querySelector("#validation-input");
const lengthRef = inputBlurRef.dataset.length;

inputBlurRef.addEventListener("blur", onInputColorize);
inputBlurRef.addEventListener("focus", offInputColorize);

function onInputColorize(event) {
  inputBlurRef.classList.add(
    event.currentTarget.value.length === Number(lengthRef) ? "valid" : "invalid"
  );
}

function offInputColorize(event) {
  inputBlurRef.classList.remove("invalid");
  inputBlurRef.classList.remove("valid");
}
