const empties = document.querySelectorAll(".empty")
const fill = document.querySelector(".fill")
empties.forEach((empty) => {
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
})
function dragOver(e) {
    e.preventDefault()
    this.classList.add("hover")
}
function dragLeave() {
    this.classList.remove("hover")
}
function dragDrop() {
    this.append(fill)
}