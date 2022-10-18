// Promise ---> old name Future value
// Promise ---> aesi value jo humein abhi ni pta but future ma pta hogi
// Promise is a constructor function
// Promise is a browser feature not a JavaScript feature
// Promise is an object

const bucket = ['coffee', 'chocolate-chips', 'ice-cream', 'chocolates', 'milk', 'sugar'];

const iceCreamPromise = new Promise((resolve, reject) => {
    if(bucket.includes("milk") && bucket.includes("sugar") && bucket.includes("chocolates") && bucket.includes("chocolate-chips"))
    {
        resolve("ice-cream");
    }
    else{
        reject("Missing something not fullfill my promise");
    }
})

// produce



// Consume --- browser
// how to consume

// then method as a input ik callback function ly ga

iceCreamPromise.then(

// jb promise resolve hoga...
    (myiceCream)=>{
        console.log("let's eat", myiceCream);
}) 

// jb promise reject hoga...

// (Error)=>{
//         console.log(Error);
// })

.catch((error) => {
    console.log(error)
})


// *************************** Simple Example **************************************
// Promise add microtask quene and it is a high priority

console.log("Script start!!!");
const things = ['chicken', 'salt', 'masala'];

const chickenfried = new Promise((resolve, reject)=>{
 if(things.includes("chicken") && things.includes("salt") && things.includes("masala") )
    {
        resolve("chicken fried");
    }
    else{
        reject("Could not do it");
    }
 })

 //  Only One callback function pass
chickenfried.then((chickenpromise)=>{
    console.log("Let's eat", chickenpromise);
})

// .catch() --- chaining kr skte hain 

.catch((error)=>{
    console.log(error);
})

setTimeout(()=>{
    console.log("Hello from setTimeOut")
}, 1000)

for(let i = 0; i<=5; i++){
    console.log(Math.random(), i);
}

console.log("Script end!!!");
