function outerFunction() {
    const outerVar = "I'm outer variable";

    console.log("Inside outerFunction");
    console.log(outerVar);

    function innerFunction() {
        const innerVar = "I'm inner variable";

        console.log("Inside innerFunction")
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction();
}
outerFunction();


// Explain:-

// -> The variable outerVar is declared in the outerFunction. Inside this function, outerVar is accessible, as shown by the console.log(outerVar) statement, which prints its value.
// -> Inside the innerFunction, we can access outerVar because of the scope chain. When innerFunction is called, it has access to its own scope and the scopes of all its parent functions. This is why console.log(outerVar) inside innerFunction successfully prints the value of outerVar.
// -> The variable innerVar is declared inside innerFunction. Within innerFunction, innerVar is accessible, as demonstrated by console.log(innerVar), which prints its value.
// -> When attempting to access innerVar from outerFunction, a ReferenceError occurs. This is because the innerVar variable is not in the scope of outerFunction or the global scope. Variables declared inside an inner function are not accessible from their parent (outer) functions.
