function sumArray(number) {
    let total = 0;

    function addToTotal(number) {
        total += number;
    }
    number.forEach(addToTotal);
    return total;
}

const numbers = [1,2,3,4,5];
const sum = sumArray(numbers);
console.log(sum);