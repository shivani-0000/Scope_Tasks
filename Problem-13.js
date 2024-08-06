function createCounter() {
    let counter = 0;

    return function(addValue) {
        counter += addValue;
        return counter;
    };
}

const addToCounter = createCounter();

console.log(addToCounter(5));
console.log(addToCounter(10));
console.log(addToCounter(-2));