

const cards=document.querySelectorAll(".card");

cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        removeEventListener()
        card.classList.add("active");
    })
})

function removeEventListener(){
    cards.forEach((card)=>{
        card.classList.remove("active");
    })
}