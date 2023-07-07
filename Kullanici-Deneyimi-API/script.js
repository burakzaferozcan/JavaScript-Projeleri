const container = document.querySelector(".container");
let i = 1;
userCommentsApiToUI();
createContainer();
function userCommentsApiToUI() {
    setInterval(() => {
        if (i == 20) {
            i = 0;
        }
        else {
            i++;
            createContainer();
        };
    }, 5000);
};
async function createContainer() {
    let img = `https://randomuser.me/api/portraits/lego/${Math.round(Math.random() * 9)}.jpg`;
    let data = await (await fetch(`https://dummyjson.com/comments/${i}`)).json();
    container.innerHTML =
        `
    <span class="progress-bar"></span>
    <p>${data.body}</p>
    <div class="user">
    <img src="${img}"></img>
    <h1>@${data.user.username}</h1>
    </div>
    `;
};