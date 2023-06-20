const container = document.querySelector(".container"),
    left = document.querySelector(".left"),
    right = document.querySelector(".right")
left.addEventListener("mouseenter", () => container.classList.add("left-hover"));
left.addEventListener("mouseleave", () => container.classList.remove("left-hover"));
right.addEventListener("mouseenter", () => container.classList.add("right-hover"));
right.addEventListener("mouseleave", () => container.classList.remove("right-hover"))