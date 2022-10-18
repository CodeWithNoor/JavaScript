// HTTP request krni hai server pe
const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest() // constructor call hoga to mujhe ik object miljae ga
// console.log(xhr);


// STEP: 01
// ready state change hogi jb work kre ga 
// **************************************************************

// console.log(xhr.readyState)
xhr.open("GET", URL)  // Asynchronously work background ma browser kre ga
// console.log(xhr.readyState)

// xhr.onreadystatechange = function(){
    //console.log(xhr.readyState)  // refrence mdn xhr readyState
        // if(xhr.readyState === 4){
        //      console.log(xhr)
    //  console.log(xhr.readyState);
    //  console.log(typeof xhr.response, xhr.response);  // response JSON file format
        // const response = xhr.response;
        // const data = JSON.parse(response);  // JSON file format convert JS object
        // console.log(typeof data, data);
//     }

// }

// **************************************************************
// Both are same work 
// ready state 4 hogi jb work kre ga 

xhr.onload = function(){
    console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);  // JSON file format convert JS object
    console.log(data);
}
xhr.send()

// ************ HTTP Status Codes Error *********************

// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request