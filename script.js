// TypeIt Script

new TypeIt("#shell-action", {
    strings: ["cd /home/ammfat/", "./ammfat", 'echo "Hello World!"'],
    loop: true,
    nextStringDelay: [3000, 1000],
    loopDelay: [1000, 3000],
    speed: 150,
    deleteSpeed: 100,
    breakLines: false,
    cursorChar: "<span style='color: forestgreen;'>_</span>",
}).go();

// Send to Google Sheet Script
const scriptURL = "https://script.google.com/macros/s/AKfycbyDMqxje8K5v-4X8K1zXe6x5wmVfkc0x62y0LhlKZsgpPjiyfaz4mG-FWPsIyc-oPE_Ww/exec";
const form = document.forms["contact-form"];

const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const successAlert = document.querySelector(".success-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // appear btn-loading, disappear btn-send
    btnLoading.classList.toggle("d-none");
    btnSend.classList.toggle("d-none");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // appear btn-send AND success-alert, disappear btn-loading
            btnLoading.classList.toggle("d-none");
            btnSend.classList.toggle("d-none");
            successAlert.classList.toggle("d-none");

            // reset form field
            form.reset();

            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
