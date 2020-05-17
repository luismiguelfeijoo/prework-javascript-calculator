let display = document.getElementById("display");
let numbers = Array.from(document.getElementsByClassName("number"));

let calculator = new Calculator(display);

numbers.forEach((number) => {
  number.addEventListener("click", () =>
    calculator.setCurrentNumber(number.innerHTML)
  );
});
