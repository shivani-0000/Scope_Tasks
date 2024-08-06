function createHandler({value, callback}) {
    return{
        getvalue: function() {
            return value;
        },
        runCallback: function() {
            if (typeof callback === 'function') {
                callback(value);
            }else {
                console.log("callback is not a function");
            }
        }
    };
}
const handle = createHandler({
    value : 24,
    callback: function(val) {
        console.log("callback called with value:", val);
    }
});
console.log(handle.getvalue());
handle.runCallback();