const bgText = document.querySelector(".bg-text");
const bg = document.querySelector(".bg");

let blurEfect = 100;
let bgTextContent = 0;

setInterval(() => {
    if (blurEfect > 0 && bgTextContent < 100) {
        blurEfect--;
        bg.setAttribute("style", `filter:blur(${blurEfect}px)`)
        bgTextContent++;
        bgText.textContent = `%${bgTextContent}`
        bgText.setAttribute("style", `opacity:${blurEfect / 100}`)
    }
}, 30)
