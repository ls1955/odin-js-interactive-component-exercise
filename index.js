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

function addMobileMenuEvent(triggers, contents, contentContainer) {
    triggers.forEach((trigger, i) => {
        trigger.addEventListener("click", () => {
            contentContainer.textContent = contents[i].textContent;
        });
    });

    triggers[0].click();
}

let btnOne = document.querySelector(".button-one");
let listOne = document.querySelector(".list-one");
let btnTwo = document.querySelector(".button-two");
let listTwo = document.querySelector(".list-two");

addDropDownEvent(btnOne, listOne);
addDropDownEvent(btnTwo, listTwo);

let phoneBtns = document.querySelectorAll(".phone-button");
let phoneContents = document.querySelectorAll(".phone-button-content");
let phoneContentContainer = document.querySelector(".phone-content-container");

addMobileMenuEvent(phoneBtns, phoneContents, phoneContentContainer);
