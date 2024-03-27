const ip = document.querySelector("input");
const rupee = document.querySelector(".rupee");
const euro = document.querySelector(".euro");
const pound = document.querySelector(".pound");
const yen = document.querySelector(".yen");
const btn = document.querySelector("button");
const arrow = document.querySelector(".arrow");
const to = document.querySelector(".to");
arrow.style.display = "none";
to.style.display = "none";
btn.addEventListener("click", () => {
  if (!ip.value) {
    alert("Enter input");
  } else {
    arrow.style.display = "block";
    to.style.display = "block";
    rupee.innerHTML = `${ip.value * 83.32} Indian Rupee`;
    pound.innerHTML = `${ip.value * 0.79} Pound sterling`;
    yen.innerHTML = `${ip.value * 151.68} Japanese Yen`;
    euro.innerHTML = `${ip.value * 0.92} Euro`;
  }
});
