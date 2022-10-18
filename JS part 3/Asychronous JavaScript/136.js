// function returning promise
const chocolate = ['milk', 'sugar', 'cocoPowder'];

function chocolates (){
    return new Promise((resolve, reject)=>{
        if(chocolate.includes("milk") && chocolate.includes("sugar") && chocolate.includes("cocoPowder")){
            resolve("Hurry!!!");
        }
        else{
            reject("Can't do it");
        }
    })
}

chocolates().then((chocolatePromise)=>{
    console.log("let's eat chocolates", chocolatePromise);
}) . catch((error)=>{
    console.log(error);
})