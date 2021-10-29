// Set
window.localStorage.setItem("color", "red");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "32px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
window.localStorage.removeItem("color");

// Remove Two
window.localStorage.clear();

// Set Item In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);
