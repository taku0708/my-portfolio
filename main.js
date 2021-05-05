const menuBox = document.querySelector(".menu_box");
const imageColorBox1 = document.querySelector(".imageColorBox1");
const imageColorBox2 = document.querySelector(".imageColorBox2");
const imageColorBox3 = document.querySelector(".imageColorBox3");
const bills = document.querySelector(".bills");
const born = document.querySelector(".born");
const detail = document.querySelector(".detail");
const hindhi = document.querySelector("#hindhi");
const english = document.querySelector("#english");
const menuContent = document.querySelector(".menu_content");
console.log(hindhi);
menuBox.addEventListener("click", () => {
  if (menuContent.style.visibility == "visible") {
    menuContent.style.visibility = "hidden";
  } else {
    menuContent.style.visibility = "visible";
  }
});
hindhi.addEventListener("click", () => {
  menuContent.style.visibility = "hidden";
  imageColorBox1.classList.add("bgkColor1");
  imageColorBox2.classList.add("bgkColor2");
  imageColorBox3.classList.add("bgkColor3");
});
english.addEventListener("click", () => {
  menuContent.style.visibility = "hidden";
  imageColorBox1.classList.remove("bgkColor1");
  imageColorBox2.classList.remove("bgkColor2");
  imageColorBox3.classList.remove("bgkColor3");
});
