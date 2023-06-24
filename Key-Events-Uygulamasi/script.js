//! 1.YÖNTEM 
// const key=document.querySelector("#key")
// const keyCode=document.querySelector("#keyCode")
// const code=document.querySelector("#code")
// window.addEventListener("keyup",(e)=>{
//     key.textContent=e.key.toUpperCase()
//     keyCode.textContent=e.keyCode
//     code.textContent=e.code
//     e.preventDefault()
// })
//! 1.YÖNTEM 

//TODO 2.YÖNTEM 
const container = document.querySelector(".container");
window.addEventListener("keyup", (e)=>{
    container.innerHTML = `
    <div class="event-wrapper">
    <p>event.key</p>
    <span>${e.key.toUpperCase()}</span>
</div>
<div class="event-wrapper">
    <p>event.keyCode</p>
    <span>${e.keyCode}</span>
</div>
<div class="event-wrapper">
    <p>event.code</p>
    <span>${e.code}</span>
</div>
    `;
})
//! 2.YÖNTEM 