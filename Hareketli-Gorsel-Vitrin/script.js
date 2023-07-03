const imageWrapper = document.querySelector(".image-wrapper");
const images = document.querySelectorAll(".image-wrapper img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let interval = setInterval(play, 3000);
let index = 0;
let timeout;
function play() {
    index++;
    changeImage();
}
function changeImage() {
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    };
    imageWrapper.style.transform = `translateX(${index * -60}rem)`;
};
next.addEventListener("click", () => {
    index++;
    changeImage();
    clearAndRestartInterval();
});
prev.addEventListener("click", () => {
    index--;
    changeImage();
    clearAndRestartInterval();
});
function clearAndRestartInterval() {
    clearInterval(interval);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        interval = setInterval(play, 3000);
    }, 10000);
};