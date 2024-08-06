function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let i= 0 ; i < numbers.length; i++) {
        let currentNumbers = numbers[i];
        if (currentNumbers % 2 === 0) {
            sum += currentNumbers;
        }
    }
    return sum;
}

const numbersArray = [1,2,3,4,5];
const evenSum = sumEvenNumbers(numbersArray);
console.log(evenSum); 