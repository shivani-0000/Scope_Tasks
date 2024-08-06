function createValueHandler() {
    let privateValue;

    return {
      setValue: function(value) {
        privateValue = value;
      },
      getValue: function() {
        return privateValue;
      }
    };
  }
  
const handler = createValueHandler();

handler.setValue(42);
console.log(handler.getValue());

handler.setValue("Hello Wold!");
console.log(handler.getValue());