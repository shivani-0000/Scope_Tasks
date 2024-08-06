function blockScopeExample() {
    if(true) {
        let blockScopevariable = " I,m block scoped";
        console.log("Inside block:", blockScopevariable);
    }
    console.log("Outside block:", typeof blockScopevariable);
}
blockScopeExample();


// Explain:-

// -> The variable blockScopedVariable is declared inside an if block using the let keyword. Because let is block-scoped, blockScopedVariable is only accessible within the block where it was defined (between the {} braces of the if statement).
// -> Within the if block, blockScopedVariable is accessible, and the statement console.log("Inside block:", blockScopedVariable); prints "I'm block scoped!" to the console.
// -> After the block ends, we attempt to access blockScopedVariable with console.log("Outside block:", typeof blockScopedVariable);. However, since blockScopedVariable is block-scoped, it is not accessible outside the block. This results in typeof blockScopedVariable returning "undefined", indicating that the variable is not defined in this scope.
