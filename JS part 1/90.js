// greaters and setters

class person{
    constructor(firstname, age, id){
        this.firstname = firstname;
        this.age = age;
        this.id = id;
    }

    get about()
    {
        console.log(`${this.name} age is ${this.age} and id is ${this.id}`);
    }

    set fullname(fullname)
    {
        // name.split(" ");
        // [Abbas, Ali]

        const [firstname] = fullname.split(" ");
        this.firstname = firstname;
    }
}

const Info = new person("Noor", 20, "Bc210203667");
console.log(Info);

// console.log(Info.name());
// console.log(Info.name); // --> get use in this method treat property

Info.fullname = "Abbas";
console.log(Info);