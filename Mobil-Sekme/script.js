const contents=document.querySelectorAll(".content");
const btns=document.querySelectorAll("nav ul li");
btns.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        removeClassShow();
        removeClassActive();
        btn.classList.add("active");
        contents[index].classList.add("show");
    });
});
function removeClassShow(){
    contents.forEach(content=>{
        content.classList.remove("show");
    });
};
function removeClassActive(){
    btns.forEach(btn=>{
        btn.classList.remove("active");
    });
};