const PlusList = document.querySelectorAll("#con2 .hidden");
const PlusForm = document.querySelector("#con2 .rem-plus a");

const HIDDEN_CLASSNAME = "hidden";

function PlusEvent(event)
{
    event.preventDefault();
    for (let i = 0; i < PlusList.length; i++) {
        PlusList[i].classList.remove(HIDDEN_CLASSNAME);
    }
    PlusForm.classList.add(HIDDEN_CLASSNAME)
}

PlusForm.addEventListener("click", PlusEvent);