const sounds=["ses1","ses2","ses3","ses4","ses5","ses6"];
sounds.forEach(sound=>{
    const button=document.createElement("button");
    button.classList.add("btn");
    document.querySelector(".buttons").append(button);
    button.textContent=sound;
    button.addEventListener("click",()=>{
        pauseSound();
        document.getElementById(sound).play();
    });
});
function pauseSound(){
    sounds.forEach(sound=>{
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime=0
    });
};