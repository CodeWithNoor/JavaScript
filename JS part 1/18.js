// nested else if

let temp_deg = 31;

if(temp_deg < 0)
{
    console.log("Extremely cold outside");
}

else if(temp_deg < 10)
{
    console.log("It is better than 0 deg");
}

else if(temp_deg < 16)
{
    console.log("Weather is okay");
}

else if(temp_deg < 25)
{
    console.log("Use AC");
}
else 
{
    console.log("TOO Hot!!!");
}