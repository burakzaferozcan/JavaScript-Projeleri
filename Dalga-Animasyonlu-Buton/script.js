const button = document.querySelector(".ripple");
button.addEventListener("click", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const span = document.createElement("span");
    span.className = "circle";
    span.style.top = y + "px";
    span.style.left = x + "px";
    button.appendChild(span);
    setTimeout(() => { span.remove() }, 500);
});