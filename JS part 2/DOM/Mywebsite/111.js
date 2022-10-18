// innerHTML

const headline = document.querySelector(".headline");

// headline.textContent = "HEADLINE";
headline.innerHTML = "<h2> HEADLINE </h2>";
headline.innerHTML += "<button> Read More... </button>";

headline.innerHTML += "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit! </p>";
console.log(headline.innerHTML);
