let num = prompt('Enter two-digit natural number');
let twoNumbers = num.split('');
console.log(twoNumbers);
let firstNumber = parseInt(twoNumbers[0]);
let secondNumber = parseInt(twoNumbers[1]);

console.log(firstNumber);
console.log(typeof(firstNumber));

console.log(typeof(secondNumber));


if (firstNumber > secondNumber) {
    document.write('Max number is ' + firstNumber + '<br>');
    document.write('Min number is ' + secondNumber);
} else if (firstNumber < secondNumber) {
    document.write('Max number is ' + secondNumber + '<br>');
    document.write('Mix number is ' + firstNumber);
}







