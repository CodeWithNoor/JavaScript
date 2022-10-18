// async await

// fetch(URL)
//     .then(response => {
//         if(response.ok){
//             return response.json()  // return data
//         }
//         else{
//             new Error("Something went wrong");
//         }
//     })

//     .then(data => {
//         console.log(data)
//     })

//     .catch(error => {
//         console.log("Inside catch")
//         console.log(error)
//     })

// *****************************************************************

console.log("Script start");
const URL = "https://jsonplaceholder.typicode.com/postss";

// this function always return Promise

// async function getPost(){ 
    
//     const response = await fetch(URL)  // wait kre ga jb tk yeh resolve yeah reject na hojae
//     if(response.ok){
//         const data = response.json()
//         return data;     // return promise ---> Promise {<pending>}        
//     }
//     else{
//         throw new Error("Something went wrong");
//     }
// }

//  ***************** Arrow Function ******************
const getPost = async () => {
    const response = await fetch(URL)  // wait kre ga jb tk yeh resolve yeah reject na hojae
    if(response.ok){
        const data = response.json()
        return data;     // return promise ---> Promise {<pending>}        
    }
    else{
        throw new Error("Something went wrong");
    }
}

// const newData = getPost()
// console.log(newData)

getPost()
    .then(newData => {
        console.log(newData);
    })

    .catch(error => {
        console.log("Inside catch");
        console.log(error);
    })

console.log("Script end")