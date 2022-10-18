// Promise && setTimeOut


// I want to resolve / reject promise after 2 seconds

// const juice = ["Mango", "milk", "sugar", "ice-cubes"]

// function MangoJuice(){
//     return new Promise((resolve, reject) => {

//         setTimeout(()=>{
//             if(juice.includes("Mango") && juice.includes("milk") && juice.includes("sugar") && juice.includes("ice-cubes")){
//                 resolve("Mango Juice");
//             }
//             else{
//                 reject(new Error, "Something is missing");
//             }
//         }, 2000)
//     })
// }

// MangoJuice().then((JuicePromise)=>{
//     console.log("Let's drink", JuicePromise);
// }) .catch((error)=>{
//     console.log(error);
// })

// ***************** harshit code ************************
function myPromise(){
    return new Promise((resolve ,reject)=>{

        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        },2000)
    })
}

myPromise().then(()=>{
    console.log("Resolved");
}) .catch(()=>{
    console.log("Reject");
})