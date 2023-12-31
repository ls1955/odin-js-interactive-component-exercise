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

      triggers.forEach((trigger) => trigger.classList.remove("highlight"));
      trigger.classList.add("highlight");
    });
  });

  triggers[0].click();
}

function addImagesCarouselEvent(
  imagesContainer,
  images,
  prevBtn,
  nextBtn,
  navDots
) {
  let index = 0;
  // Assuming the frame we are working are squares that stick with each
  // other without any gap.
  let offset = images[0].width;
  let fiveSecondsAutoClickId = setInterval(() => {
    nextBtn.click();
  }, 5000);

  // Generate all those nav dot at here?

  prevBtn.addEventListener("click", () => {
    index--;

    if (index < 0) index += images.length;

    imagesContainer.style.left = `-${index * offset}px`;

    resetAutoClickInterval();
    applyHighlight(navDots, index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;

    imagesContainer.style.left = `-${index * offset}px`;

    resetAutoClickInterval();
    applyHighlight(navDots, index);
  });

  navDots.forEach((navDot, i) => {
    navDot.addEventListener("click", () => {
      index = i;

      imagesContainer.style.left = `-${index * offset}px`;

      resetAutoClickInterval();
      applyHighlight(navDots, index);
    });
  });

  function resetAutoClickInterval() {
    clearInterval(fiveSecondsAutoClickId);
    fiveSecondsAutoClickId = setInterval(() => {
      nextBtn.click();
    }, 5000);
  }

  function applyHighlight(navDots, index) {
    navDots.forEach((navDot) => navDot.classList.remove("highlight"));
    navDots[index].classList.add("highlight");
  }

  applyHighlight(navDots, 0);
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

let imagesContainer = document.querySelector(".images-container");
let images = document.querySelectorAll(".image");
let prevBtn = document.querySelector(".prev-frame-button");
let nextBtn = document.querySelector(".next-frame-button");
let navDots = document.querySelectorAll(".nav-dot");

addImagesCarouselEvent(imagesContainer, images, prevBtn, nextBtn, navDots);
