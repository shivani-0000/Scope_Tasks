function multiplyBy(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const timeThree = multiplyBy(3);
console.log(timeThree(5));

const timeFive = multiplyBy(5);
console.log(timeFive(10));

const timeTen = multiplyBy(10);
console.log(timeTen(7));