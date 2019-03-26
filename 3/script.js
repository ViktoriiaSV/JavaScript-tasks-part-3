let firstNumber = prompt('Write first number');
let secondNumber = prompt('Write second number');

document.write('first number is ' + firstNumber + '<br>');
document.write('second number is ' + secondNumber + '<br>' + '<br>');

if (firstNumber > secondNumber) {
    document.write(firstNumber + ' more than ' + secondNumber);
} else if (firstNumber < secondNumber) {
    document.write(firstNumber + ' less than ' + secondNumber);
} else if (firstNumber === secondNumber) {
    document.write(firstNumber + ' is equal to ' + secondNumber);
}
