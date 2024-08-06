function outerFunction() {
    let message = "Hello outerFunction";
    console.log(message);
    innerFunction();
    console.log(message);

}

function innerFunction() {
    let message = "Hello innerFunction";
    console.log(message);
}
outerFunction();


// Explain:-

// -> In the outerFunction, a variable message is declared and initialized with the value "Hello outerFunction!".
// -> This message variable is scoped to outerFunction and is not accessible outside of it.
// -> Within outerFunction, the innerFunction is called.
// -> Before innerFunction is called, outerFunction logs its own message variable to the console, which outputs "Hello outerFunction!".
// -> Inside innerFunction, another variable named message is declared, but with the value "Hello innerFunction!".
// -> This message variable is scoped to innerFunction and is entirely separate from the message variable in outerFunction.
// -> innerFunction logs its own message variable to the console, outputting "Hello innerFunction!".
// -> After innerFunction completes, control returns to outerFunction.
// -> The message variable inside outerFunction is logged again, and it still outputs "Hello outerFunction!" because the message variable in innerFunction does not affect the message variable in outerFunction.
