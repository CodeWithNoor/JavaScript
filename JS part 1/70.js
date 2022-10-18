// Optional chaining

const obj = {
    first_Name: "Abbas",
    id : {'Std_ID' : 'BC2100384'},
    // address : {'house_number' : '1234...'}
};

console.log(obj.first_Name);
console.log(obj.id); //--> object inside object
console.log(obj.address); //--> undefined

// console.log(obj.address.house_number) ; --> Cannot read properties of undefined

console.log(obj?.address?.house_number) ; // --> undefined

let user;

// console.log(user.Name); --> Error
console.log(user?.Name); // --> undefined