const button = document.querySelector("button");
const notificationContainer = document.querySelector(".notification-container");
const notificationClass = ["github", "instagram", "twitter", "youtube"];
button.addEventListener("click", createNotification);
function createNotification() {
    let sonuc = classAndText();
    const notif = document.createElement("span");
    notif.classList.add("notification");
    notif.classList.add(sonuc);
    notif.textContent = sonuc.toUpperCase();
    notificationContainer.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 5000);
};
function classAndText() {
    return notificationClass[Math.floor(Math.random() * notificationClass.length)];
};