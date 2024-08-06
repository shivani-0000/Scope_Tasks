function scopeTest() {
    var varVariable = "I'm var variable";
    let letVariable = "I'm let variable";

    console.log(varVariable);
    console.log(letVariable);
}

scopeTest();
console.log(varVariable);
console.log(letVariable);


// Explain:-

// -> Both varVariable and letVariable are accessible, and their values are printed to the console. This demonstrates that both var and let have local scope within the function.
// -> When attempting to access varVariable outside the function, the result depends on the JavaScript environment:-
//    - If strict mode is enabled, an error (ReferenceError) will be thrown because varVariable is not defined globally.
//    - If strict mode is not enabled, varVariable will still be undefined because var declarations within functions do not leak to the global scope.
// -> When trying to access letVariable outside the function, a ReferenceError is thrown because let has block scope and is not accessible outside the block (in this case, the function) where it was declared.