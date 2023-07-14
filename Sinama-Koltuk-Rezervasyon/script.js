const container = document.querySelector(".container")
const buySeatButton = document.querySelector("#buySeat")
const seats = document.querySelectorAll(".container .seat")
const movie = document.querySelector("#movie")
const text = document.querySelector(".text")
let storageArr = []
runEvents();
getStorageToUI();
//todo *****************************************EVENT'LAR*****************************************
function runEvents() {
    container.addEventListener("click", selectedSeatFunction)
    buySeatButton.addEventListener("click", reservedSeatFunction)
    movie.addEventListener("change", reservedCalculator)
}
//todo *****************************************EVENT'LAR*****************************************
//! *****************************************KOLTUK SEÇİMİ YAPMA*****************************************
function selectedSeatFunction(e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected")
    }
    reservedCalculator();
}
//! *****************************************KOLTUK SEÇİMİ YAPMA*****************************************
//todo *****************************************KOLTUK REZERVASYON YAPMA*****************************************
function reservedSeatFunction() {
    const reservedSeats = document.querySelectorAll(".container .seat.selected")
    reservedSeats.forEach((seat) => {
        seat.classList.remove("selected")
        seat.classList.add("reserved")
    })
    reservedToStorage();
    storageArr = []
    if (reservedSeats.length > 0) {
        text.textContent = `Ödendi`
        setTimeout(() => {
            text.textContent = ""
        }, 2000)
    }
}
//todo *****************************************KOLTUK REZERVASYON YAPMA*****************************************
//! *****************************************ÖDEME YAPMA*****************************************
function reservedCalculator() {
    if (document.querySelectorAll(".container .selected") != null && document.querySelectorAll(".container .selected").length > 0)
        text.textContent = `${document.querySelectorAll(".container .selected").length} adet bilet için ödenecek tutar = ${document.querySelectorAll(".container .selected").length * movie.value} tl`
}
//! *****************************************ÖDEME YAPMA*****************************************
//todo *****************************************STORAGE'A DEĞER EKLEME*****************************************
function reservedToStorage() {
    seats.forEach((seat, index) => {
        if (seat.className === "seat reserved") {
            storageArr.push(index)
            localStorage.setItem("reservedSeats", JSON.stringify(storageArr))
        }
    })
}
//todo *****************************************STORAGE'A DEĞER EKLEME*****************************************
//! *****************************************STORAGE'DAN ARAYÜZE EKLEME*****************************************
function getStorageToUI() {
    let i = JSON.parse(localStorage.getItem("reservedSeats"))
    if (i.length > 0) {
        i.forEach((a) => {
            seats.forEach((seat, index) => {
                if (a === index)
                    seat.classList.add("reserved")
            })
        })
    }
}
//! *****************************************STORAGE'DAN ARAYÜZE EKLEME*****************************************