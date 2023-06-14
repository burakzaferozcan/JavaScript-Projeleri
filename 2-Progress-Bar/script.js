const next = document.querySelector("#next"),
    prev = document.querySelector("#prev"),
    progress = document.querySelector("#progress"),
    circles = document.querySelectorAll(".circle");

currentActive = 1;

runEvents();
function runEvents() {
    next.addEventListener("click", nextFunciton);
    prev.addEventListener("click", prevFunction);
};

function nextFunciton() {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    } else {
        update();
    };
};

function prevFunction() {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    } else {
        update();
    };
};

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        };
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    };
};