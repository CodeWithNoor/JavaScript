// Same method in sub class
// Animal class is a super class

class Animal { 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    about(num1, num2){
        return num1 * num2;
    }
    eat()
    {
        console.log("Biscuits and milk");
    }
}

const animal = new Animal("Tiger", 23);
console.log(animal);

const sum = animal.about(3,6);
console.log(sum);

console.log(Object.getPrototypeOf(animal));

// *************************************************************
// Object and instance same keyword

class dog extends Animal{
    constructor(name, age, speed)
    {
        super(name, age);
        this.speed = speed;
    }

    about_dog()
    {
        console.log("Dog color is black");
    }
    eat()
    {
        console.log("Modified eat: Biscuits and milk");
    }
}

const animal1 = new dog("Dog", 2, 45);
console.log(animal1);

animal1.about_dog();
animal1.eat(); // --> yahan ni mily to Animal ma jaa kr dekhy ga