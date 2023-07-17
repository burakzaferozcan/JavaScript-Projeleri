const citySearch = document.querySelector("#citySearch")
const citySearchButton = document.querySelector("#citySearchButton")
const daysContainer = document.querySelector(".days")
const bigDayWrapper = document.querySelector(".bigday-wrapper")
const container=document.querySelector(".container")


runEvents();
function runEvents() {
    citySearchButton.addEventListener("click", searchFunction)
}
async function searchFunction() {
    daysContainer.innerHTML = ""
    let city = citySearch.value.toLowerCase()
    let weathers = await (await (fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {
        method: "GET",
        headers: {
            Authorization: "apikey 5vDgHQ0lYaSAbqTEkxbvNc:2nTjHaUrezc4HweduWgLmW"
        }
    }))).json()

    weathers.result.forEach((data) => {
        let div = document.createElement("div")
        div.className = "day"
        div.innerHTML = `<p>${data.day}</p>
       <img
         src="${data.icon}"
         alt=""
       />
       <p>${Math.round(data.degree)}°</p>
       `;
        daysContainer.append(div)
    })
    const days = document.querySelectorAll(".day")
    days.forEach((day, index) => {
        day.addEventListener("click", () => {
            bigDayWrapper.innerHTML = ""
            const sehir = weathers.city.toUpperCase()
            let bigDayDiv = document.createElement("div")
            bigDayDiv.className = "big-day"
            bigDayDiv.innerHTML = `
            <p>${sehir}</p>
        <img src="${weathers.result[index].icon}" alt="" />
        <span>${weathers.result[index].day}</span>
        <p>${Math.round(weathers.result[index].degree)}°</p>
        <p>Hava Durumu ${weathers.result[index].description}</p>
        <p>Nem Oranı ${weathers.result[index].humidity}%</p>
        <p>Maksimum Sıcaklık ${Math.round(weathers.result[index].max)}°</p>
        <p>Minimum Sıcaklık ${Math.round(weathers.result[index].min)}°</p>
        <p>Tarih ${weathers.result[index].date}</p>
            `;
            bigDayWrapper.prepend(bigDayDiv)
        })
    })
    citySearch.value = ""
}

