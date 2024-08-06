function Fun() {
    let insideVar = "I'm inside function";
    console.log(insideVar);
}
Fun();
{
    console.log(insideVar);
}


// Explain:- 

// -> The variable insideVar is declared inside the function Fun using the let keyword.
// -> Variables declared with let, var and const inside a function are scoped to that function, meaning they are only accessible within that function.
// -> Inside Fun, InsideVar can be accessed and manipulated freely. The statement console.log(insideVar) ; inside the function works correctly and outputs "I'm inside function!".
// -> Outside of Fun, the block of code tries to log insideVar to the console.
// -> This results in a ReferenceError: insideVar is not defined because insideVar is not accessible outside the function in which it was declared
