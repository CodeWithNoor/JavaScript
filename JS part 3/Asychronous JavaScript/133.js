// understand callback function

// *********** Synchronous programming *************
// function myfunc(callback){
//     console.log("My function perform task 1");
//     callback();
// }

// myfunc(function (){
//     console.log("My function perform task 2");
// })

function getTwoNumbers(number1, number2, onSuccess, onFailure){

    // console.log(num1, num2);
    // check two numbers are numbers or not it is string so not calling a callback function

    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1, number2);
    }
    else{
        onFailure();
    }
}

// ***********************************
// function addTwoNumbers(num1, num2)
// {
//     console.log(num1 + num2);
// }

// ******** Same Work *********** 
getTwoNumbers("3", 7, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong data type");
    console.log("Please pass numbers only");
});
