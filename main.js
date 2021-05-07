const menuBox = document.querySelector(".menu_box");
const imageColorBox1 = document.querySelector(".imageColorBox1");
const imageColorBox2 = document.querySelector(".imageColorBox2");
const imageColorBox3 = document.querySelector(".imageColorBox3");
const signature = document.querySelector("#signature");
const centerOfIndia = document.querySelector("#centerOfIndia");
// const bills = document.querySelector(".bills");
// const born = document.querySelector(".born");
// const detail = document.querySelector(".detail");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const line4 = document.querySelector(".line4");
const line5 = document.querySelector(".line5");
const line6 = document.querySelector(".line6");
const line7 = document.querySelector(".line7");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const hindhi = document.querySelector("#hindhi");
const english = document.querySelector("#english");
const hobby = document.querySelector("#hobby");
const menuContent = document.querySelector(".menu_content");
const menuIcon = document.querySelector(".menu_icon");
console.log(hobby);
menuIcon.addEventListener("click", () => {
  if (menuContent.style.visibility == "visible") {
    menuContent.style.visibility = "hidden";
  } else {
    menuContent.style.visibility = "visible";
  }

  menuIcon.classList.toggle("menu_open");
});
hindhi.addEventListener("click", () => {
  menuContent.style.visibility = "hidden";
  imageColorBox1.classList.add("bgkColor1");
  imageColorBox2.classList.add("bgkColor2");
  imageColorBox3.classList.add("bgkColor3");
  line1.textContent = "";
  line2.textContent = "";
  line3.textContent = "";
  signature.style.visibility = "hidden";
  centerOfIndia.style.visibility = "visible";
  lastName.style.visibility = "visible";
  firstName.style.visibility = "visible";
  menuIcon.classList.remove("menu_open");
});
english.addEventListener("click", () => {
  menuContent.style.visibility = "hidden";
  imageColorBox1.classList.remove("bgkColor1");
  imageColorBox2.classList.remove("bgkColor2");
  imageColorBox3.classList.remove("bgkColor3");
  signature.style.visibility = "visible";
  centerOfIndia.style.visibility = "hidden";
  line1.textContent = "Geeksalon/webEx/10th";
  line2.textContent = "Born in 1999, Living in Tokyo";
  line3.textContent = "grew up in Tokunoshima-island in childhood";
  menuIcon.classList.remove("menu_open");
  lastName.style.visibility = "hidden";
  firstName.style.visibility = "hidden";
});
hobby.addEventListener("click", () => {
  imageColorBox1.classList.remove("bgkColor1");
  imageColorBox2.classList.remove("bgkColor2");
  imageColorBox3.classList.remove("bgkColor3");
});
