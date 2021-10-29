// let redBtn = document.querySelector("data-color='red'");
// let greenBtn = document.querySelector("data-color='green'");
// let blueBtn = document.querySelector("data-color='blue'");
// let blackBtn = document.querySelector("data-color='black'");

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove All Active Classes From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Li
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Remove Active Class From All Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active To Class Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background-Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
