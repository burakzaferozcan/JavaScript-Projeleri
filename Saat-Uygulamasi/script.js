let hours = document.querySelector("#hours")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
function updateTime() {
    let hourJs = new Date().getHours();
    let minuteJs = new Date().getMinutes();
    let secondJs = new Date().getSeconds();
    hourJs < 10 ? hourJs = "0" + hourJs : hourJs;
    minuteJs < 10 ? minuteJs = "0" + minuteJs : minuteJs;
    secondJs < 10 ? secondJs = "0" + secondJs : secondJs;
    setTimeout(() => {
        updateTime()
        hours.innerText = hourJs
        minute.innerText = minuteJs
        second.innerText = secondJs
    }, 1000);
}
updateTime()