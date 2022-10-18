// fetch API

// ****************** GET Method********************

// One line sendRequest 
// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)  // By default GET Request send --- return Promise
//     .then(response => {
//         if(response.ok){
//             return response.json()
//         }
//         else{
//             // throw new Error("Something went wrong")
//             // new Error("Something went wrong")
//         }
//     })

//     .then(data => {
//         console.log(data)
//     })

//     // Internet disconnect catch method work otherwise not work

//     .catch(error => {  // Network related error
//         console.log("Inside catch")
//         console.log(error)  // {}
//     })

// 404 error ma catch work ni kre ga


// *************** POST method ***************
// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL, { method: 'POST',
// body: JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// }),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(response => {
//         if(response.ok){
//             return response.json() // convert JS object
//         }
//         else{
//             new Error("Something went wrong")
//         }
//     })

//     .then(data => {
//         console.log(data);
//     })

//     .catch(error => {
//         console.log(error);
//     })


// *************** PATCH method ***************
// const URL = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(URL, { method: 'PATCH',
// body: JSON.stringify({
//   title: 'foo',
// }),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(response => {
//         if(response.ok){
//             return response.json() // convert JS object
//         }
//         else{
//             new Error("Something went wrong")
//         }
//     })

//     .then(data => {
//         console.log(data);
//     })

//     .catch(error => {
//         console.log(error);
//     })


// *************** DELETE method ***************
const URL = "https://jsonplaceholder.typicode.com/posts/1";

fetch(URL, {
    method: 'DELETE',
  })

    .then(response => {
        if(response.ok){
            return response.json() // convert JS object
        }
        else{
            new Error("Something went wrong")
        }
    })

    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.log(error);
    })
