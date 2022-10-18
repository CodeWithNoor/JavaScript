// promise resolve
// promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
// console.log("The resolve value is: ", value);
// })

// then() --> then method always return promise

// ***************** Promise chaining *****************
function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("FOO");
    })
}

myPromise().then((value)=>{
    console.log(value);
    value += "bAr";
    return value; // not return value internally js return promise
    // return prmoise.resolve(value);
})

.then((value)=>{
    console.log(value);
    value += "BaaZ";
    return value;
})

.then((value)=>{
    console.log(value);
})