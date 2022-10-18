// Object Maps     
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

// (Map --> for of loop)
// Map is is iterable

// Store data in ordered function

// Store key value pair --> (like object)
// Duplicate key are not allowed like objects

// Different between maps and object. (object --> for in loop)

// Object can only have string or symbol
// As key

// In map you can use anything as key
// like array, number, string 

// Method	       Description
// new Map()       Creates a new Map object
// set()	       Sets the value for a key in a Map
// get()	       Gets the value for a key in a Map
// clear()	       Removes all the elements from a Map
// delete()        Removes a Map element specified by a key
// has()	       Returns true if a key exists in a Map
// forEach()       Invokes a callback for each key/value pair in a Map
// entries()       Returns an iterator object with the [key, value] pairs in a Map
// keys()	       Returns an iterator object with the keys in a Map
// values()        Returns an iterator object of the values in a Map
// Property        Description
// size	           Returns the number of Map elements

// Object literals
// key --> String
// key --> Symbol

// ******************************************************
// const person = {
    //     first_Name : "Fatima",
    //     Std_Id : "BC210203667",
    //     1 : "10"
// }

// console.log(person.first_Name);
// console.log(person["Std_Id"]);

// console.log(person["1"]);
// for(const key in person)  // for of loop show error
// {
//     console.log(typeof key, key);
// }

// ******************************************************
// Map store key pair value
// Map function any type of data store like string, number, array, array like object

// ******************************************************
// let persons = 
// {
    //     name: "harshit", Passion: "Web_Developer"
// }

// const person = new Map()

// console.log(person.get("Name"));

// person.set('Name', 'Abbas');
// person.set('Std_Id', 'BC21002094');
// person.set('Passion', 'Web_Developer');
// console.log(person);
// console.log(person.keys()); //--> MapIterator 

// for(let key of person.keys())
// {
//     console.log(typeof key, key);
// }

// ***************** array destructuring ********************

// for(let [key, value] of person)
// {
//     console.log([key, value]);
// }

// ******************************************************

// let employee = new Map([['name', 'Abbas'],['id', 'bc210202706'],['hobbies', ['coding','traveling']]]);
// console.log(employee);

// for(let [key,value] of employee)
// {
//     console.log(key, " : ",value);
// }

// ******************************************************

let person1 = {
    id : 1, name : 'harshit'
}

let person2 = {
    id : 2, name : 'abbas'
}

let userinfo = new Map();
userinfo.set(person1,{age : 20, goal : "Web Developer"});
userinfo.set(person2,{age : 23, goal : "Web Developer"});

// console.log(person1.id);
console.log(userinfo);

// console.log(userinfo.get(person1)); // --> get give me a person1 object age, goal
