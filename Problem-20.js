function reverseArray(strings) {
    let index = strings.length - 1;
    const reversedArray = [];
  
    function addToReversedArray() {
      while (index >= 0) {
        reversedArray.push(strings[index]);
        index--;
      }
    }
    addToReversedArray();
    return reversedArray;
  }
  const strings = ["apple", "banana", "cherry"];
  const reversed = reverseArray(strings);
  console.log(reversed); 
  