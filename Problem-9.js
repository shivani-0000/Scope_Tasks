const myArray = [1,2,3,4];
myArray.push(5);
myArray[0] = 0;

console.log(myArray);

const myObject = {
    name : "John",
    age : 25
};
myObject.name = "Bob";
myObject.age = 26;

console.log(myObject);


// Explain:-

// -> The myArray variable is declared using const, so the reference to the array cannot be changed (i.e., you can't reassign myArray to a new array). However, the elements within the array can still be modified. In the program, we push a new element to the array and change the first element. This does not throw an error because we are not changing the reference; we are modifying the contents.
// -> The myObject variable is also declared using const. Similar to the array example, the reference to the object cannot be changed, but the properties of the object can be modified. In the program, we change the name and age properties. This is allowed because we are not reassigning the myObject variable itself.
// -> If you try to reassign the myArray or myObject variables to a new array or object, it will throw a TypeError. This is because const declarations do not allow the variable to be reassigned to a different value. 