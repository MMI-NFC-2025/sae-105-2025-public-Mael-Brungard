
const text = document.getElementById("text-404");
const error = "Error";

text.innerText = `${error} 404`;


function glitchOnce() {
    let chars = error.split("");

    const glitchSymbols = ["#", "%", "&", "?", "@"];
    const randomIndex = Math.floor(Math.random() * chars.length);

    chars[randomIndex] = glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)];

    text.innerText = `${chars.join("")} 404`;

    setTimeout(() => {
        text.innerText = `${error} 404`;
    }, 150);
}

setInterval(glitchOnce, 200);

// 404.html