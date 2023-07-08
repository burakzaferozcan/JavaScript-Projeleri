const navBar = document.querySelector(".nav");
const content = document.querySelector(".content");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log("offsettop", content.offsetTop);
    if (window.scrollY >= content.offsetTop - 70) {
        navBar.setAttribute("style", "background-color: black; color:white; border-color:white;");
        document.body.setAttribute("style", "background-color:black;");
    }
    else {
        navBar.setAttribute("style", "background-color: white; border-color:black;");
        document.body.setAttribute("style", "background-color:white;");
    };
});