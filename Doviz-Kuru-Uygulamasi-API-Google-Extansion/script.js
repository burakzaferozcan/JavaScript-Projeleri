// const amount = document.querySelector("#amount");
// const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
// const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
// const result = document.querySelector("#result");
// runEventListener();
// function runEventListener() {
//     amount.addEventListener("input", exchance);
//     firstCurrencyOption.addEventListener("change",exchance);
//     secondCurrencyOption.addEventListener("change",exchance);
// };
// function exchance() {
//     const amountValue = Number(amount.value.trim());
//     const firstOption = firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
//     const secondOption = secondCurrencyOption.options[secondCurrencyOption.selectedIndex].textContent;
//     fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=VYw9NrayG6Nboqus24vuIYpT37WVv6q9CfJAaYzc&base_currency=${firstOption}&currencies=${secondOption}`)
//         .then(res => res.json())
//         .then((success) => {
//             const sonuc = amountValue * Object.values(success.data)
//             result.textContent=sonuc.toFixed(2)
//         })
//         .catch((err) => {
//             alert(err);
//         });
// };




























const amount = document.querySelector("#amount"),
    firstCurrencyOption = document.querySelector("#firstCurrencyOption"),
    secondCurrencyOption = document.querySelector("#secondCurrencyOption"),
    result = document.querySelector("#result");
runEventListeners();
function runEventListeners() {
    amount.addEventListener("input", exchange);
    firstCurrencyOption.addEventListener("change", exchange);
    secondCurrencyOption.addEventListener("change", exchange);
};
async function exchange() {
    const value = Number(amount.value.trim());
    const firstOptionValue = firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
    const secondOptionValue = secondCurrencyOption.options[secondCurrencyOption.selectedIndex].textContent;
    let success = await (await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=VYw9NrayG6Nboqus24vuIYpT37WVv6q9CfJAaYzc&base_currency=${firstOptionValue}&currencies=${secondOptionValue}`)).json()
    let sonuc = (value * Object.values(success.data));
    result.innerHTML = sonuc.toFixed(2);
};







