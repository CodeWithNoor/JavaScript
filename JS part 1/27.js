// ************* array push pop ***************

// push & pop fast method as compare to shift & unshift
// push --> add element to end
let strings = ["A", "B", "C", "D", "E"];
strings.push("F");
console.log(strings);

//  pop --> remove and return element
let string = ["A", "B", "C", "D", "E", "F"]; 
string.pop();
console.log(string);

// ************* array shift unshift ****************

// unshift --> starting add of any variable element
let number = [1, 2, 3, 4];
number.unshift(0);
console.log(number);

// shift --> remove starting number element
let numbers = [1, 2, 3, 4, 5, 6];
numbers.shift();
console.log(numbers);