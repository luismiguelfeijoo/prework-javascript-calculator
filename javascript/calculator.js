class Calculator {
  constructor(screen) {
    this.previousNumber = 0;
    this.currentNumber = 0;
    this.operation = null;
    this.screen = screen;
    this.printScreen();
  }

  addNums() {
    this.currentNumber = this.previousNumber + Number(this.currentNumber);
    this.previousNumber = 0;
    this.printScreen();
  }

  substractNums() {
    this.currentNumber = this.previousNumber - Number(this.currentNumber);
    this.previousNumber = 0;
    this.printScreen();
  }

  multiplyNums() {
    this.currentNumber = this.previousNumber * Number(this.currentNumber);
    this.previousNumber = 0;
    this.printScreen();
  }

  divideNums() {
    this.currentNumber = Number(
      (this.previousNumber / Number(this.currentNumber)).toFixed(2)
    );
    this.previousNumber = 0;
    this.printScreen();
  }

  setTotal() {
    switch (this.operation) {
      case "add":
        this.addNums();
        break;
      case "substract":
        this.substractNums();
        break;
      case "multiply":
        this.multiplyNums();
        break;
      case "divide":
        this.divideNums();
        break;
      case null:
        console.log("No operation selected");
        break;
    }
    this.operation = null;
  }

  setCurrentNumber(num) {
    console.log(this.currentNumber, typeof this.currentNumber);
    if (num !== ".") {
      num = Number(num);
    }
    if (this.currentNumber === ".0") {
      this.currentNumber = this.currentNumber + String(num);
    } else if (this.currentNumber === 0) {
      this.currentNumber = num;
    } else if (this.currentNumber === ".") {
      this.currentNumber = this.currentNumber + String(num);
    } else {
      if (num !== ".") {
        this.currentNumber = Number(this.currentNumber + String(num));
      } else {
        console.log("making decimal");
        this.currentNumber = this.currentNumber + ".";
      }
    }
    this.printScreen();
    console.log(this.currentNumber, typeof this.currentNumber);
  }

  setPreviousNumber() {
    this.previousNumber = Number(this.currentNumber);
    this.currentNumber = 0;
    this.printScreen();
  }

  setOperation(operation) {
    if (this.operation === null) {
      this.setPreviousNumber();
    }
    this.operation = operation;
  }

  makeDecimal() {
    if (this.currentNumber - Math.floor(this.currentNumber) === 0) {
      this.currentNumber === 0
        ? (this.currentNumber = ".")
        : this.setCurrentNumber(".");
    }
  }

  printScreen() {
    this.screen.innerHTML = this.currentNumber;
  }
}
