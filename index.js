let btnOne = document.querySelector(".button-one");
let listOne = document.querySelector(".list-one");
let btnTwo = document.querySelector(".button-two");
let listTwo = document.querySelector(".list-two");

addDropDownEvent(btnOne, listOne);
addDropDownEvent(btnTwo, listTwo);

function addDropDownEvent(trigger, list) {
    trigger.addEventListener("mouseover", () => {
        list.style.display = "block";
        trigger.textContent = "Hide drop-down";
    });

    trigger.addEventListener("mouseleave", () => {
        list.style.display = "none";
        trigger.textContent = "Show drop-down";
    });
}
