"use strict";

/*


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnsCloseModal = document.querySelector(".close-modal");

const btnsOpenModel = document.querySelectorAll(".show-modal");
console.log(btnsOpenModel);

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", function () {
    console.log("button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnsCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
});

*/

// Making it short :

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnsCloseModal = document.querySelector(".close-modal");

const btnsOpenModel = document.querySelectorAll(".show-modal");

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", openModel);
}

btnsCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// Key Press Event :

// document.addEventListener("keydown", function () {
//   console.log("key is pressed");
// });

document.addEventListener("keydown", function (e) {
  // console.log(e);
  console.log(e.key);

  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModel();
    }
  }
});
