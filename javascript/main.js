let display = document.getElementById("display");
let numbers = Array.from(document.getElementsByClassName("number"));
let decimalButton = document.getElementById("decimal");
let addButton = document.getElementById("add");
let substractButton = document.getElementById("substract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let totalButton = document.getElementById("total");
let calculator = new Calculator(display);

numbers.forEach((number) => {
  number.addEventListener("click", () =>
    calculator.setCurrentNumber(number.innerHTML)
  );
});

addButton.addEventListener("click", () => {
  calculator.setOperation("add");
});

substractButton.addEventListener("click", () => {
  calculator.setOperation("substract");
});

multiplyButton.addEventListener("click", () => {
  calculator.setOperation("multiply");
});

divideButton.addEventListener("click", () => {
  calculator.setOperation("divide");
});

totalButton.addEventListener("click", () => {
  calculator.setTotal();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
});

decimal.addEventListener("click", (event) => {
  calculator.makeDecimal();
});
