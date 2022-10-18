// Change randomly body color to click button

const btn = document.querySelector("button");
const body = document.querySelector("body");

const currentColor = document.querySelector(".currentColor");

const randomColorGenerator = ()=>
{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}

btn.addEventListener("click", () => {
    const random = randomColorGenerator();
    body.style.backgroundColor = random;
    currentColor.textContent = random;
})