// Short syntax

let user = {
    name : "Abbas",
    age : 23,
    passion : "Web Developer",
    about(hobbies)
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.passion);
        console.log(hobbies);
    }
}

user.about(["Coding","Traveling"]);