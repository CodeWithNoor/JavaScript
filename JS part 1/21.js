//  while loop example

let i = 0;
let total = 0;

while(i <= 100)
{
    total = total + i;
    i++;
}

console.log(total);

// without while loop use mathematical formula and get same answer

let num = 10;
let total_1 = (num*(num+1)/2);
console.log(total_1);