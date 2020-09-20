const inputRengeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRengeRef.setAttribute("min", "10");
inputRengeRef.setAttribute("max", "120");
inputRengeRef.setAttribute("value", "14");

inputRengeRef.addEventListener("input", () => {
  textRef.style.fontSize = `${inputRengeRef.value}px`;
});
