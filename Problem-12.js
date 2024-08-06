const myNumber = 40;

try {
    myNumber = 100;
} catch(error){
    console.log("Error:", error.message);
}

const myObject = {
    name : "John",
    age : 25
};

myObject.name = "Bob";
myObject.age = 26;
console.log("Modified object:", myObject);

try {
    myObject = {
        name : "Charli",
        age : 40
    };
} catch (error) {
    console.log("Erroe", error.message);
}

const myArray = [1,2,3];

myArray.push(4);
myArray[0]=0;
console.log("Modified array:", myArray);

try{
    myArray= [5,6,7];
} catch(error) {
    console.log("Error:", error.message);
}


// Explain:-

// -> When a variable is declared with const, it cannot be reassigned to a different value. This is true for all types of data, including primitives, objects, and arrays.
// -> Reassigning myNumber results in an error (Assignment to constant variable.).
// -> Reassigning myObject and myArray also results in the same error.
// -> For const variables that hold objects or arrays, the reference to the object or array cannot change, but the contents can be modified. This is because const only affects the binding of the variable, not the contents of the object or array it points to.
// -> The properties of the myObject object are modified, changing name from "Alice" to "Bob" and age from 30 to 31. These modifications are allowed because the reference to the object remains the same.
// -> The elements of the myArray array are modified, with the first element changed to 0 and the number 4 added to the array. Again, these changes are allowed because the reference to the array remains unchanged.