"use strict";
//더보기
const plusList = document.querySelectorAll("#con2 .hidden");
const plusForm = document.querySelector("#con2 .rank-plus a");

const hIDDEN_CLASSNAME = "hidden";

function PlusEvent(event)
{
    event.preventDefault();
    for (let i = 0; i < plusList.length; i++) {
        plusList[i].classList.remove(hIDDEN_CLASSNAME);
    }
    plusForm.classList.add(hIDDEN_CLASSNAME)
}

plusForm.addEventListener("click", PlusEvent);

//슬라이드
const btnArrowNext = document.getElementById("next");
const btnArrowPrev = document.getElementById("prev");

btnArrowNext.addEventListener('click', () => {
    
})