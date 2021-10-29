const two = document.querySelector("#two");
let one = document.querySelector("#one");

function len() {
  if (one.length <= 1) {
    one.onblur();
    two.focus();
  }
}
