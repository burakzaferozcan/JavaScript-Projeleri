const container = document.querySelector(".container");
window.addEventListener("load", getApiToUIPhoto);
async function getApiToUIPhoto() {
    const datas = await (await fetch(`https://api.unsplash.com/photos/random?count=27`, {
        headers: { Authorization: "Client-ID ccpIZnW6FOJE54PLeX-THZnzqZXyA-7MzwSEQBLC6nU" },
    })).json();
    datas.forEach(data => {
        const image = document.createElement("img");
        image.src = data.urls.small;
        container.append(image);
    });
};