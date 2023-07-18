const asks=document.querySelectorAll(".ask");
asks.forEach((ask)=>{
    ask.addEventListener("click",()=>{
        ask.classList.toggle("active")
    })
})