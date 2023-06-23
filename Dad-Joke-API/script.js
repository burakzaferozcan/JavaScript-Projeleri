const buton=document.querySelector("#buton");
const p=document.querySelector(".container p");

buton.addEventListener("click",getDadJokes)

async function getDadJokes(){
   let data =await(await fetch("https://icanhazdadjoke.com",{
        headers:{
            Accept:"application/json"
        }
    })).json()
    console.log(data.joke);
    p.textContent=data.joke
}