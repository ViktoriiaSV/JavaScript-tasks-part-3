let number = prompt('Enter number');
let maxNumber = parseInt(number);

let minNumber = 0;
let sumOfNumbers = 0;
while (minNumber <= maxNumber) {
    if (minNumber % 5 === 0) {
        sumOfNumbers += minNumber;
    }
    minNumber++;
}
document.write('sum of numbers divisible by 5 is ' + sumOfNumbers);
