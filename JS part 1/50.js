// Block scope vs function scope

// let & const are block scope 
{
    let name = "Abbas";
    console.log(name);
}
// console.log(name); ---> Error not declaration of outside the block


// var is a function scope
{
    var name = "Abbas";
}
console.log(name); // --> var outside declaration of block scope

// ***************************************************************
function string()
{
    console.log("find block and function scope");
    
    {
        // let array = ['a','b','b','a','s']; //---> Error not declaration of outside the block
        var array = ['a','b','b','a','s']; 
        console.log(array);
    }
    console.log(array);
    
}
string()