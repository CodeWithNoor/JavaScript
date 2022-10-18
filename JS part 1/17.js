// nested if else
// prompt accept string not number;

let winning_prize = 28;
let user_Guess = +prompt("Guess a number"); // 12 number convert string +12
user_Guess = confirm("Confirm guess number");

if(user_Guess === winning_prize)
{
    console.log("Your are winning the prize");
}

else if(user_Guess < winning_prize)
{
    console.log("Too low");
}
else if(user_Guess > winning_prize)
{
    console.log("Too high");
}
else
{
    console.log("Try again");
}