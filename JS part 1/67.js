//              Object Sets     
// *********************************************

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables
// Sets (it is iterable)
// Store data  
// Sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)


// Method	        Description
// new Set()        Creates a new Set
// add()	        Adds a new element to the Set
// delete()	        Removes an element from a Set
// has()	        Returns true if a value exists
// clear()	        Removes all elements from a Set
// forEach()        Invokes a callback for each element
// values()	        Returns an Iterator with all the values in a Set
// keys()	        Same as values()
// entries()        Returns an Iterator with the [value,value] pairs from a Set
// Property	        Description
// size	            Returns the number elements in a Set

// **************************************************
// console.log(numbers[3]); ---> undefined no index_based access 
const numbers = new Set([1,2,3,4]);
console.log(numbers);

// **************************************************
const names = new Set(["harshit","vashisth","naira", "akshara"]);
console.log(names);

// **************************************************
const array = ['item1', 'item2', 'item3'];
const number = new Set();
number.add('items');
number.add('item1');
number.add('item2');
number.add(array);

// number.add(array); --> both are same and same address so ignore

// number.add(['item1', 'item2', 'item3']); //--> defined beacuse change address
// number.add(['item1', 'item2', 'item3']);

// Check element it is present or not
// if(number.has(array))
// {
//     console.log("present");
// } 
// else{
//     console.log("Not Present");
// }

// *******************************************************
for(const checked of number)
{
    console.log(checked);
}

// *******************************************************
const myArray = [1,2,3,4,5,6,4,5,6];
let length = 0;

const unique_element = new Set(myArray);
console.log(unique_element);
console.log(myArray); //--> Not effected

// Find unique elements of length
for(let element of unique_element)
{
    length++;
}
console.log(length);