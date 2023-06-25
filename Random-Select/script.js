const textArea = document.querySelector("#textarea"),
    tagsHtml = document.querySelector(".tags");
textArea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
        randomTag()
    }
});
function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    tagsHtml.textContent = "";
    tags.forEach((tag) => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.textContent = tag;
        tagsHtml.append(span);
    });
};
function randomTag() {
    const tags = document.querySelectorAll(".tag"),
        randomAddHighlight = Math.floor(Math.random() * tags.length),
        time = (Math.floor(Math.random() * (6 - 3)) + 3) * 1000;
    tags.forEach((tag, index) => {
        const interval = setInterval(() => {
            const randomAddHighlight2 = Math.floor(Math.random() * tags.length);
            if (randomAddHighlight2 === index) {
                tag.classList.toggle("highlight");
            };
        }, time / 100);
        setTimeout(() => {
            if (randomAddHighlight === index) {
                tag.classList.add("highlight");

            } else {
                tag.classList.remove("highlight");
            };
            clearInterval(interval);
        }, time)
    });
};