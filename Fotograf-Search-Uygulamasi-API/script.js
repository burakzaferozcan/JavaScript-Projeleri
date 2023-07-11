// const formWrapper = document.querySelector(".form-wrapper");
// const form = document.querySelector("#form");
// const searchInput = document.querySelector("#searchInput");
// const buttonWrapper = document.querySelector(".button-wrapper");
// const searchButon = document.querySelector("#searchButton");
// const clearButon = document.querySelector("#clearButton");
// const imageListWrapper = document.querySelector(".imagelist-wrapper");

// runEventListeners();
// function runEventListeners() {
//     searchButon.addEventListener("click", search)
//     clearButon.addEventListener("click", clear)
// };
// function search(e) {

//     fetch(`https://api.unsplash.com/search/photos?query=${searchInput.value.trim()}`, {
//         method: "GET",
//         headers: {
//             Authorization: "Client-ID ccpIZnW6FOJE54PLeX-THZnzqZXyA-7MzwSEQBLC6nU"
//         }
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             // console.log(data);
//             data.results.forEach((image) => {
//                 // console.log(image.urls.small);
//                 addImageToUI(image.urls.small)
//             })

//         })
//         .catch((err) => console.log(err))
//     searchInput.value = ""
//     imageListWrapper.innerHTML = ""
//     e.preventDefault();
// };
// function addImageToUI(url) {
//     const div = document.createElement("div");
//     div.className = "card";
//     const img = document.createElement("img");
//     img.setAttribute("src", url);
//     div.setAttribute("style", "height:350px;width:350px;");
//     div.append(img);
//     imageListWrapper.append(div);

// };
// function clear() {
//     //! BU ŞEKİLDE
//     //    Array.from(imageListWrapper.children).forEach((image)=>{
//     //         image.remove()
//     //     })
//     //! YA DA BU ŞEKİLDE TEMİZLENEBİLİR
//     imageListWrapper.innerHTML = ""
// };



//todo *******************kendim yapıyorum*******************
// const searchInput=document.querySelector("#searchInput");
// const searchButton=document.querySelector("#searchButton");
// const clearButton=document.querySelector("#clearButton");
// const imageWrapper=document.querySelector(".image-wrapper");
// runEvents();
// function runEvents(){
//     searchButton.addEventListener("click",search);
//     clearButton.addEventListener("click",clear);
// };
// function search(e){
//     const value= searchInput.value.trim();
//     fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
//         method: "GET",
//         headers:{Authorization: "Client-ID wRFYdghDQbRkebA-boEXDeuOVLaQL-Of2dQmSriaQNE"}})
//     .then(res=>res.json())
//     .then((success)=>{
//         success.results.forEach((image)=>{
//             addImageToUI(image.urls.small,image.urls.full)
//         })
//     })
//     .catch((err)=>console.log(err))
//     searchInput.value=""
//     imageWrapper.innerHTML=""
//     e.preventDefault();
// };

// function addImageToUI(url,bigURL){
//     const div=document.createElement("div")
//     div.className="card"
//     const a=document.createElement("a")
//     a.href=bigURL
//     a.target="=blank"
//     imageWrapper.append(div)
//     imageWrapper.setAttribute("style","border-top: 1px rgb(63, 60, 60) solid; border-bottom: 1px rgb(63, 60, 60) solid")
//     const img=document.createElement("img")
//     img.setAttribute("src",url)
//     div.append(a)
//     a.append(img)
// };
// function clear(){
//     imageWrapper.children.forEach((card)=>{
//         card.remove()
//     })
//     //! ya da bu şekilde yapılabilir
//     // imageWrapper.innerHTML=""
// };









//todo *******************kendim yapıyorum 2*******************
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const searchInput = document.querySelector("#searchInput");
const imageWrapper = document.querySelector(".image-wrapper");

runEvents();
function runEvents() {
    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click",clear);
};

function search(e) {
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: { Authorization: "Client-ID wRFYdghDQbRkebA-boEXDeuOVLaQL-Of2dQmSriaQNE" }
    })
        .then(res => res.json())
        .then((success) => {
            success.results.forEach((data) => {
                addPhotosToUI(data.urls.small, data.urls.full);
            })
        })
        .catch(err=>console.log(err));
    searchInput.value = "";
    imageWrapper.innerHTML="";
    e.preventDefault();
};

function addPhotosToUI(smallPhotoURL,fullScreenPhotoURL){
    const div=document.createElement("div");
    div.className="card"
    const a=document.createElement("a");
    a.href=fullScreenPhotoURL;
    a.target="_blank";
    const image=document.createElement("img");
    image.src=smallPhotoURL;
    imageWrapper.append(div);
    div.append(a);
    a.append(image);
};

function clear(){
    // imageWrapper.children.forEach((image)=>{
    //     image.remove()
    // })
    //! yada şu şekilde yapılabilir
    imageWrapper.innerHTML=""

}


