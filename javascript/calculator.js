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
    this.roundResult(3);
    this.previousNumber = 0;
    this.printScreen();
  }

  substractNums() {
    this.currentNumber = this.previousNumber - Number(this.currentNumber);
    this.roundResult(3);
    this.previousNumber = 0;
    this.printScreen();
  }

  multiplyNums() {
    this.currentNumber = this.previousNumber * Number(this.currentNumber);
    this.roundResult(3);
    this.previousNumber = 0;
    this.printScreen();
  }

  divideNums() {
    this.currentNumber = this.previousNumber / Number(this.currentNumber);
    this.roundResult(2);
    this.previousNumber = 0;
    this.printScreen();
  }

  roundResult(decimalPoint) {
    this.currentNumber = Number(this.currentNumber.toFixed(decimalPoint));
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
        this.currentNumber = this.currentNumber + ".";
      }
    }
    this.printScreen();
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
    this.printScreen();
  }

  delete() {
    if (this.currentNumber !== 0) {
      let newCurrentNumber = String(this.currentNumber);
      this.currentNumber = Number(
        newCurrentNumber.substring(0, newCurrentNumber.length - 1)
      );
      this.printScreen();
    }
  }

  clear() {
    this.operation = null;
    this.previousNumber = 0;
    this.currentNumber = 0;
    this.printScreen();
  }

  printScreen() {
    this.screen.innerHTML = this.currentNumber;
  }
}
