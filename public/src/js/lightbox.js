const lightBox_1 = document.querySelector(".lightbox__style--1");
const lightBox_1_open = document.querySelector("#lightBox_1_open");
const lightBox_2_open = document.querySelector("#lightBox_2_open");
const lightBox_3_open = document.querySelector("#lightBox_3_open");

const lightBox_close = document.querySelector(".lightbox__close");
const pop = document.querySelector(".pop");

lightBox_1_open.addEventListener("click", open1);
lightBox_2_open.addEventListener("click", open1);
lightBox_3_open.addEventListener("click", open1);

function open1() {
    lightBox_1.classList.add("pop");
}

lightBox_close.addEventListener("click", close1);

function close1() {
    lightBox_1.classList.remove("pop");
}

window.onclick = function (event) {
    if (event.target == lightBox_1) {
        close1();
    }
};
