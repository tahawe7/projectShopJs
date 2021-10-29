let input = document.querySelector(".name");
input.addEventListener("reload", (e) => {
  e.value(window.sessionStorage.getItem("Input-value"));
});
input.onblur = () => {
  window.sessionStorage.setItem("input-value", this.value);
};

if (window.sessionStorage.getItem("Input-value")) {
  input.value(window.sessionStorage.getItem("Input-value"));
}
