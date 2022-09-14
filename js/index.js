"use strict";
//더보기 기능
const plusList = document.querySelectorAll("#con3 .hidden");
const plusForm = document.querySelector("#con3 .rank-plus a");

const hIDDEN_CLASSNAME = "hidden";

function PlusEvent(event) {
    event.preventDefault();
    for (let i = 0; i < plusList.length; i++) {
        plusList[i].classList.remove(hIDDEN_CLASSNAME);
    }
    plusForm.classList.add(hIDDEN_CLASSNAME);
}

plusForm.addEventListener("click", PlusEvent);

//슬라이드 기능
const imgBox = document.querySelector(".img-box");
const btnArrowNext = document.getElementById("next");
const btnArrowPrev = document.getElementById("prev");

let currentPosition= 0;
let position = 0;
const IMAGE_WIDTH = 1080;

function prev() {
    if  (currentPosition > 0) {
        btnArrowNext.removeAttribute("disabled");
        position += IMAGE_WIDTH;
        imgBox.style.transform = `translateX(${position}px)`;
        currentPosition -= 1;
    }
    if  (currentPosition == 0) {
        btnArrowPrev.setAttribute("disabled", 'true');
    }
}
function next() {
    if  (currentPosition < 2) {
        btnArrowPrev.removeAttribute("disabled");
        position -= IMAGE_WIDTH;
        imgBox.style.transform = `translateX(${position}px)`;
        currentPosition += 1;
    }
    if  (currentPosition  == 2) {
        btnArrowNext.setAttribute("disabled", 'true');
    }
}

function init() {
    btnArrowPrev.setAttribute("disabled", 'true');
    btnArrowPrev.addEventListener("click", prev);
    btnArrowNext.addEventListener("click", next);
}
init();

//검색 기능
const btnSearch = document.getElementById('search-icon');
const searchBar = document.querySelector('.search-bar');

btnSearch.addEventListener("click", () => {

});