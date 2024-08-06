function outerFunction() {
    let message = "Hello outerFunction";

    function innerFunction() {
        let message = "Hello innerFunction";
        console.log(message);
    }
    innerFunction();
    console.log(message);
}
outerFunction();