// // let Social = ["Facebook", "Instagram", "Twitter", "WatsApp", "GitHub"];

// let Symbols = {
//   face: "Facebook",
//   Insta: "Instagram",
//   Twita: "Twitter",
//   Wats: "WatsApp",
//   Git: "GitHub",
// };

// for (let myAccounts in Symbols) {
//   console.log(`The Shorts Name Is: ${myAccounts} , The Full Name Is: ${Symbols[myAccounts]}`);
// }

// Assignments 2 Part 1

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// Assignments 2 Part 2
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Assignments 2 Part 2

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
  if (specialMix === "number") {
    let result = 0,allString = true;
    for (let item of data) {
		if (!isNaN(parseInt(item))) {
			result += parseInt(item);
			allString = false;
		}
    return allString ? "All Strings":result
  }
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
