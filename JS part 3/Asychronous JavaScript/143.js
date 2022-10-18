// XMLHTTPRequest with promise

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, URL){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, URL)
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.response)
            }
            else{
                reject(new Error ("Something went wrong"));
            }
        }
        xhr.send()
    })
}

// chaining promise

sendRequest("GET", URL)
    .then((response) => {   // return Promise and resolve value
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })

    .then(data => {
        const id = data[3].id;
        return id;
    })

    .then(id =>{
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })

    .then(newResponse => {
        const newData = JSON.parse(newResponse)
        console.log(newData)
    })
    
.catch(error => {
    console.log(error)
})    