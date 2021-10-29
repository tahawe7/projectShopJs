// function sayMsg(user) {
//   let prom = prompt(user);
//   console.log(`I'm A Massage For ${prom}`);
// }
// setTimeout(sayMsg, 3000);

// function sayMsg(user, age) {
//   let promName = prompt(`Write Your Name`);
//   let promAge = prompt(`Write Your Age`);
//   console.log(`I'm A Massage For : ${promName} His/Her Age Is : ${promAge}`);
// }

// setTimeout(sayMsg, 3000);

// let counter = setTimeout(sayMsg, 3000);

// console.log(counter);
// function sayMsg() {
//   console.log("I'm A Massage");
// }

// // Satrt Create Element
// let btn = document.createElement("button");
// let btnTxt = document.createTextNode("Stop");
// btn.appendChild(btnTxt);
// document.body.appendChild(btn);
// // End Create Element

// btn.onclick = () => {
//   clearTimeout(counter);
// };

// This Was SetTimeOut And ClearTimout

// Start SetInteval And ClearInterval

// Satrt Create Element
let div = document.createElement("div");
let prom = prompt("Write A Nuumber");
let divText = document.createTextNode(prom);
div.appendChild(divText);
document.body.appendChild(div);
// End Create Element

function countDown() {
  div.innerHTML++;
  //   if (div.innerHTML === "0") {
  //     clearInterval(counter);
  //   }
}

// Satrt Create Element
let btn = document.createElement("button");
let btnTxt = document.createTextNode("Stop");
btn.appendChild(btnTxt);
document.body.appendChild(btn);
// End Create Element

btn.onclick = () => clearInterval(counter);

let counter = setInterval(countDown, 1000);

console.log(60 * 60);
