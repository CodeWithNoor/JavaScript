//Both are same 

// console.log(this);
// console.log(window);

// this === window
// true
"use strict"

function myfunc()
{
    console.log("HELLO!");
    console.log(this); // --> By default window access --> strict mode use undefined
}

// *********** Same output ***************

// window.myfunc();
// this.myfunc();
myfunc();