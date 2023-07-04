const background=document.querySelector(".bg");
const passwordLabel=document.querySelector("#passwordLabel");
const password=document.querySelector("#password");
password.addEventListener("input",(e)=>{
    let length=e.target.value.length;
    let bgBlur=16-(2*length);
    if(length>=8){
        background.setAttribute("style",`filter: blur(0px);`);
        passwordLabel.setAttribute("style",`color:purple; font-weight:bold;`);
        passwordLabel.textContent="Strong Password";
        password.setAttribute("style",`color:purple; font-weight:bold;`);
    }else{
        background.setAttribute("style",`filter: blur(${bgBlur}px);`);
        passwordLabel.setAttribute("style",`color:black; font-weight: 400;`);
        passwordLabel.textContent="Password:";
        password.setAttribute("style",`color:black; font-weight: 400;`);
    };
});