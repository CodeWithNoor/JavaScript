// Filter method

const number = [1,2,3,4,5,6];

function isEven(numbers)
{
   return numbers % 2 === 0;
}
const ans = number.filter(isEven);
console.log(ans)

// ******************************************
const array = [1,2,3,4,5,6];

const answer = array.filter(function isOdd(num)
{
        return num % 2 == 1;
})
console.log(answer)
