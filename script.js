const message = document.querySelector(".message");
const dialog = document.querySelector(".message-dialog");
const close = document.querySelector(".close");
const click = document.querySelector(".click");
const bgaudio = new Audio("bg.mp3");
const counter = document.querySelector('.counter');
const coffeti = document.querySelector(".confetti");
const opening = document.querySelector(".opening"
)

message.addEventListener("click", () => {
    dialog.showModal();
})



close.addEventListener("click", () => {
    dialog.close();
})

click.addEventListener('click', () => {
    bgaudio.play();
    // console.log("ok")
    let num = 10;
    setInterval(() => {
        counter.textContent = num--;
        if (num == 0) {
            clearInterval();
            opening.style.display = 'none';
            coffeti.style.display = 'block';

        }
    }, 1000)
})
