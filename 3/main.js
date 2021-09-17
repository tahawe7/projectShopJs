let start = 0;
let swappedName = "elZerO";

let result = "";


for(let i = start; i<swappedName.length; i++){
    swappedName[i] === swappedName[i].toLowerCase() ? (result += swappedName[i].toUpperCase()) : (result += swappedName[i].toLowerCase()) ;
}
console.log(result) 


// let start_Q_6 = 0;
// let swappedName = "elZerO";

// let str = "";

// for (let i = start_Q_6; i < swappedName.length; i++) {
// 	swappedName[i] === swappedName[i].toLowerCase()? (str += swappedName[i].toUpperCase()): (str += swappedName[i].toLowerCase());
// }
// console.log(str);

let male = "ahmed";
let female = "samera";
let prom = prompt();
prom ==="ahmed" ? prom(`${prom} الزيك يا`):prompt("hi");
