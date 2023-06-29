const speedInput = document.querySelector("#speedInput")
const text = "I am a computer programing student and front-end developer";
const p = document.querySelector(".text")
const positive = document.querySelector("#positive")
const negative = document.querySelector("#negative")
let index = 0;
positive.addEventListener("click", () => {
    speedInput.value++
    if (speedInput.value > 5) {
        speedInput.value = 5
    }
})
negative.addEventListener("click", () => {
    speedInput.value--
    if (speedInput.value < 1) {
        speedInput.value = 1
    }
})
writeTextAnimation();
function writeTextAnimation() {
    p.textContent += text.slice("")[index];
    // p.textContent=text.slice(0,index)
    index++;
    if (index === text.length) {
        index = 0;
        p.textContent = ""
    };
    setTimeout(writeTextAnimation, 200/speedInput.value);
};