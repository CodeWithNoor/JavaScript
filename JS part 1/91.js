// Static method and properties

class person{
    constructor(firstname, age, id){
        this.firstname = firstname;
        this.age = age;
        this.id = id;
    }

    static classInfo()
    {
        return "this is a person class";
    }

    static classproperty = "Directly class call";

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
const ans = person.classInfo() // --> is object ko class se hi directly call kren gy object ki zroort ni hai
console.log(ans);

console.log(person.classproperty);