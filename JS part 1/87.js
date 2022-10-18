// More practice of class keyword
// Without using new keyword constructor not call
// Base Class --> Extends Class --> Sub Class

class Animal { 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    about(num1, num2){
        return num1 * num2;
    }
}

const animal = new Animal("Tiger", 23);
console.log(animal);

const sum = animal.about(3,6);
console.log(sum);

console.log(Object.getPrototypeOf(animal));

// *************************************************************
// Same work without any error
class dog extends Animal{
    
}

const animal1 = new Animal("Dog", 2);
console.log(animal1);

const sum1 = animal.about(8,6);
console.log(sum1);

console.log(Object.getPrototypeOf(dog));