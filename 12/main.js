let btn = document.querySelector("button");

window.onscroll = () => {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = " none";
  }
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
