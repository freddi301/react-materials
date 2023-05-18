// https://codesandbox.io/s/great-dew-jkkex

const inputAElement = document.getElementById("input-a");
const inputBElement = document.getElementById("input-b");
const operationElement = document.getElementById("operation");
const outputElement = document.getElementById("output");
function getOperation(type) {
  switch (type) {
    case "addizione":
      return addizione;
    case "sotrazione":
      return sotrazione;
    case "moltiplicazione":
      return moltiplicazione;
    case "divisione":
      return divisione;
    default:
      return noop;
  }
}
function addizione(a, b) {
  return a + b;
}
function sotrazione(a, b) {
  return a - b;
}
function moltiplicazione(a, b) {
  return a * b;
}
function divisione(a, b) {
  return a / b;
}
function noop(a, b) {
  return 0;
}
function update() {
  const a = Number(inputAElement.value);
  const b = Number(inputBElement.value);
  const operationName = operationElement.value;
  const operation = getOperation(operationName);
  const result = operation(a, b);
  outputElement.innerText = result;
}
inputAElement.addEventListener("change", update);
inputAElement.addEventListener("keyup", update);
inputBElement.addEventListener("change", update);
inputAElement.addEventListener("keyup", update);
operationElement.addEventListener("change", update);

// inizializzazione
inputAElement.value = 0;
inputBElement.value = 0;
operationElement.value = "addizione";
update();
