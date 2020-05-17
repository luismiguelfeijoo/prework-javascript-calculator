class Calculator {
  constructor(screen) {
    this.previousNumber = 0;
    this.currentNumber = 0;
    this.screen = screen;
    this.printScreen();
  }

  addNums() {
    this.previousNumber = this.screen;
    return this.previousNumber + this.screen;
  }

  substractNums() {
    this.previousNumber = this.screen;
    return this.previousNumber - this.screen;
  }

  multiplyNums() {
    this.previousNumber = this.screen;
    return this.previousNumber * this.screen;
  }

  divideNums() {
    this.previousNumber = this.screen;
    return this.previousNumber / this.screen;
  }

  setCurrentNumber(num) {
    num = Number(num);
    if (this.currentNumber === 0) {
      this.currentNumber = num;
    } else {
      this.currentNumber = this.currentNumber + String(num);
    }
    this.printScreen();
  }

  setPreviousNumber(num) {
    this.currentNumber = num;
  }

  printScreen() {
    this.screen.innerHTML = this.currentNumber;
  }

  parseString(string) {
    Number(string);
  }
}
