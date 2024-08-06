function createLogger(message) {
    return function(repeatCount) {
        if(typeof repeatCount !== 'number' || repeatCount <0 ) {
            console.log("Invalid repeat count. Please provide a non-negative number");
            return;
        }
        const repeatedMessage = message.repeat(repeatCount);
        console.log(repeatedMessage);
    };
}
const logHello = createLogger("Hello");
logHello(5);
logHello(0);
logHello(3);
