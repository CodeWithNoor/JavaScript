// Object iterate in loop

// for in loop
let Emp = {
    Name: "Abbas", 
    Age: 23,
    Passion: ["Coding", "Traveling"]
};

for(let person in Emp)
{ 
    console.log(person, " : ",Emp[person]);
    // console.log(`${person} : ${Emp[person]}`)
    // console.log(Emp[person]);
}

  // object keys for of loop
 for (const key of Object.keys(Emp)) {
    console.log(key, ": " ,Emp[key]);
 }

//  type of object
// console.log(Array.isArray(Object.keys(Emp)));
const str = Array.isArray(Object.keys(Emp));
console.log(str);
