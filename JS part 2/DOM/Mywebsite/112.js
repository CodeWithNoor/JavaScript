// const rootNode = document.getRootNode();
// console.log(rootNode);

// how to see all child of document

// const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode);
// console.dir(htmlElementNode);

// ******************** child node **************************
// console.log(htmlElementNode.childNodes); ---> NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(headElementNode);
// console.log(textNode);
// console.log(bodyElementNode);

// ********************* parent node **************************
// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode.parentNode);

// ********************* sibling relation **************************
// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode.nextSibling); ---> #text
// console.log(headElementNode.nextSibling.nextSibling); ---> body

// ***********************************************
// console.log(headElementNode.nextElementSibling); //---> Ignore new space and print element
// console.log(headElementNode.childNodes); 

// ********************* task **************************
// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.backgroundColor = "Red";
// div.style.color = "white";

// ********************* fast method **************************
// const body = document.body
// console.log(body)

// const head = document.head
// const title = head.querySelector("title");
// console.log(title)

const container = document.querySelector(".container");
console.log(container.children); // h1, p remove text