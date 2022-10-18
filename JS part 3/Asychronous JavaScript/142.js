// Error handling

const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()

xhr.open("GET", URL)

xhr.onload = () =>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        // console.log(data);

        // complete object ma se mujhe ik post ki id chahiya 
        const id = data[3].id;
        console.log(id);

        const URL2 = `${URL}/${id}`
        const xhr2 = new XMLHttpRequest()
        console.log(URL2);
        xhr2.open("GET", URL2)
        xhr2.onload = () => {
            const data1 = JSON.parse(xhr2.response)
            console.log(data1)
        }
        xhr2.send()
    }
    else{
        console.log("Something went wrong");
    }
}

xhr.onerror = ()=>{
    console.log("Internet Error");
}
xhr.send()
