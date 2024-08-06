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

