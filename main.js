let bitCoin = document.getElementById("coin");
let amout = document.getElementById("amount");
let maincoin = document.getElementById("maincoin");
let message = document.getElementById("message");
///bitCoin.onclick
let imuji = "😂";
let imgConter = 0;
bitCoin.onmousedown = () => {
    maincoin.classList.remove("animation");
    start();
    if (imgConter >= 0 && imgConter <= 3) {
        imgConter++
        message.innerText += imuji;
    }
    else if (imgConter => 3 && imgConter <= 0) {
        imgConter = 0;
        message.innerText = imuji;
    }
}

bitCoin.onmouseup = () => {
    start();
}
let increase = 0;
function start() {
    increase++;
    amout.innerHTML = `<i class="fa fa-bitcoin" style="font-size:24px"></i>` + increase;
    let newCoin = document.createElement("img");
    newCoin.src = "BTC.webp",
        newCoin.setAttribute("class", "single")
    bitCoin.appendChild(newCoin);

    setTimeout(() => {
        bitCoin.removeChild(newCoin);
    }, 2550);
}

maincoin.onmousedown = () => {
    maincoin.classList.add("down");
}

maincoin.onmouseup = () => {
    maincoin.classList.remove("down");
}

maincoin.ontouchstart = () => {
    maincoin.classList.add("down");
    start();
}

maincoin.ontouchcancel = () => {
    maincoin.classList.add("down");
    start()
}

let video = document.getElementById("vid");

function playSound() {
    video.classList.remove("left")
    video.play()
    setTimeout(() => {
        video.classList.add("left");
    }, 6500)
}
