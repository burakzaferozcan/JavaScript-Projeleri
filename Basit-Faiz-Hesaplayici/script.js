const debtInput = document.querySelector("#debtInput");
const interestRateInput = document.querySelector("#interestRateInput");
const maturityInput = document.querySelector("#maturityInput");
const p = document.querySelector(".result p");
const span = document.createElement("span");
debtInput.addEventListener("keyup", calculate);
interestRateInput.addEventListener("keyup", calculate);
maturityInput.addEventListener("keyup", calculate);
function calculate() {
    const interestAmount = (debtInput.value * (interestRateInput.value * 0.01)) * maturityInput.value;
    const result = Number(debtInput.value) + Number(interestAmount);
    span.textContent = 0;
    span.textContent = result + "TL";
    p.append(span);
};