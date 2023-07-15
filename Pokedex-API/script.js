//poke fotoğraf= sprites.other['official-artwork'].front_default
//poke isim= name
//poke id= id
//poke weight= weight
//poke type= types[0].type.name       types[0].type.name

// const searchInput=document.querySelector("#searchInput")
// const searchButton=document.querySelector("#searchButton")
// const pokemonCardsWrapper=document.querySelector(".pokemon-cards-wrapper")
// const pokeNumber=151;

// function runEventListeners(){
//     searchInput.addEventListener("input",searchPoke)
//     searchButton.addEventListener("click",(e)=>{
// e.preventDefault()
//     })
// }
// runEventListeners();
// pokeAddUI()
// async function pokeAddUI(){
//     for(let i=1;i<=pokeNumber;i++){
//       const poke=await(await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
//      const pokePhoto=poke.sprites.other['official-artwork'].front_default
//      const pokeName=poke.name.toUpperCase()
//      const pokeId=poke.id
//      const pokeType=poke.types[0].type.name
//      const pokeWeight=poke.weight
//      const pokeDiv=document.createElement("div")
//      pokeDiv.className="pokemon-card"
//      pokeDiv.innerHTML=`
//      <img src="${pokePhoto}" alt="">
//      <h2 class="searchName">${pokeName}</h2>
//      <p>Id : ${pokeId}</p>
//      <p>Type : ${pokeType}</p>
//      <p>Weight : ${pokeWeight}</p>`
//      pokemonCardsWrapper.append(pokeDiv)
//      pokeDiv.addEventListener("click",()=>{
//         pokeDiv.classList.toggle("active")
//      })
//     }
// }



// function searchPoke(){
//     const pokeNames=document.querySelectorAll(".searchName")
//     pokeNames.forEach((pokeName)=>{
//         if(pokeName.textContent.includes(searchInput.value.toUpperCase().trim())){
//             pokeName.parentElement.setAttribute("style","display:flex")
//         }else{
//             pokeName.parentElement.setAttribute("style","display:none")
//         }
//     })
//  }













//poke photo= sprites.other['official-artwork'].front_default
//poke name= name
//poke type= types[0].type.name
//poke weight= weight
//poke height= height

const searchInput=document.querySelector("#searchInput");
const searchButton=document.querySelector("#searchButton");
const pokemonCardsWrapper=document.querySelector(".pokemon-cards-wrapper");
const pokeNumber = 151;
const colors={
    fire:"#FDDFDF",
    grass:"#DEFDE0",
    electric:"#FCF7DE",
    water:"#DEF3FD",
    ground:"#f4e7da",
    rock:"#d5d5d4",
    fairy:"#fceaff",
    poison:"#d6b3ff",
    bug:"#f8d5a3",
    dragon:"#97b3e6",
    psychic:"#eaeda1",
    flying:"#F5F5F5",
    fighting:"#E6E0D4",
    normal:"#F5F5F5",
    ice:"#e0f5ff",
    ghost:"rgba(255, 255, 255, 0.384)"
}

addPokeUI();
runEventListeners();
function runEventListeners(){
    searchInput.addEventListener("input",searchPoke)
            searchButton.addEventListener("click",(e)=>{
                e.preventDefault()
            })

}

function searchPoke(pokeColor){
    const pokeNames=document.querySelectorAll(".searchName")
    pokeNames.forEach((pokeName)=>{
        if(pokeName.textContent.toUpperCase().includes(searchInput.value.toUpperCase().trim())){

            pokeName.parentElement.setAttribute("style",`display:flex; background-color:${pokeColor}`)

        }else{
            pokeName.parentElement.setAttribute("style",`display:none;background-color:${pokeColor}`)
        }
    })
}
async function addPokeUI() {
    for (let i = 1; i <= pokeNumber; i++) {
        const poke = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
        const pokePhoto = poke.sprites.other['official-artwork'].front_default
        const pokeName = poke.name.toUpperCase();
        const pokeHeight ="Height : "+ poke.height + "cm";
        const pokeWeight ="Weight : "+ poke.weight + "kg";
        const pokeType =poke.types[0].type.name;
        const pokeColor=colors[pokeType]
        const pokeDiv=document.createElement("div");
        pokeDiv.setAttribute(`style`,`background-color:${pokeColor};`)
        pokeDiv.className="pokemon-card";
        
        pokeDiv.innerHTML=`
        <img src="${pokePhoto}" alt="">
            <h2 class="searchName">${pokeName}</h2>
            <p>${pokeHeight}</p>
            <p>${pokeWeight}</p>
            <p> Type : ${pokeType}</p>`;
            pokemonCardsWrapper.append(pokeDiv);
            pokeDiv.addEventListener("click",()=>{
                pokeDiv.classList.toggle("active");
                
            });

    };
};



