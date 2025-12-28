/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://s.shopee.co.id/60KuRSjjIg", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029Vb7SCdU6rsQmVOJkK80h");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/amel.hamzi.56");
}
/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://s.shopee.co.id/1LZ4stqZbY";
    }, 5000);
});
const targetURL = "https://otieu.com/4/10348915";
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

