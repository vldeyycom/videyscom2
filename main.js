/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://s.shopee.co.id/1qUwqITvOR", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://chat.whatsapp.com/XXXXXXXX");
}

function openFacebookPage() {
    window.open("https://facebook.com/");
}
/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://s.shopee.co.id/1qUwqITvOR";
    }, 5000);
});
const targetURL = "https://s.shopee.co.id/1qUwqITvOR";
let opened = false;

const videoOverlay = document.getElementById("videoOverlay");

if (videoOverlay) {
    videoOverlay.addEventListener("click", function () {
        if (!opened) {
            opened = true;
            window.open(targetURL, "_blank"); // BUKA TAB BARU
        }
        this.remove(); // setelah klik pertama, video bisa dikontrol normal
    });
}
