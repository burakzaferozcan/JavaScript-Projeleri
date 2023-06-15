const searchButton = document.querySelector("#searchButton")
const form = document.querySelector(".form")

document.body.addEventListener("click", (e) => {
    if (e.target.id === "searchButton" || e.target.id === "searchInput") {
        form.classList.add("active")
    } else {
        form.classList.remove("active")
    }
})