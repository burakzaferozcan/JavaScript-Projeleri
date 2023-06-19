const boxes=document.querySelectorAll(".box");
window.addEventListener("scroll",checkBox);
checkBox();
function checkBox(){
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top
        console.log(boxTop);
        console.log("inner hight",innerHeight);
        if(boxTop<innerHeight){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        };
    });
};