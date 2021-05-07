// メニューボックス
const menuBox = document.querySelector(".menu_box");
const menuContent = document.querySelector(".menu_content");
const menuIcon = document.querySelector(".menu_icon");
// 横三分割
const imageColorBox1 = document.querySelector(".imageColorBox1");
const imageColorBox2 = document.querySelector(".imageColorBox2");
const imageColorBox3 = document.querySelector(".imageColorBox3");
// 手書き、国旗の中心(画像)
const signature = document.querySelector("#signature");
const centerOfIndia = document.querySelector("#centerOfIndia");
const moreInformation = document.querySelector(".more_information");
// 文言
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const line4 = document.querySelector(".line4");
const line5 = document.querySelector(".line5");
const line6 = document.querySelector(".line6");
const line7 = document.querySelector(".line7");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
// クリックボタン
const hindhi = document.querySelector("#hindhi");
const english = document.querySelector("#english");
const hobby = document.querySelector("#hobby");
console.log(moreInformation);
// 乱数画像表示
const coffeeBox = document.createElement("img");
const clothBox = document.createElement("img");
const saunaBox = document.createElement("img");

// メニューアイコン、クリックイベント
menuIcon.addEventListener("click", () => {
  if (menuContent.style.visibility == "visible") {
    menuContent.style.visibility = "hidden";
  } else {
    menuContent.style.visibility = "visible";
  }

  menuIcon.classList.toggle("menu_open");
});

// インド版、クリックイベント
hindhi.addEventListener("click", () => {
  // 共通処理
  menuContent.style.visibility = "hidden";
  menuIcon.classList.remove("menu_open");
  imageColorBox1.classList.add("bgkColor1");
  imageColorBox2.classList.add("bgkColor2");
  imageColorBox3.classList.add("bgkColor3");
  // 手書き画像表示のON/OFF
  signature.style.visibility = "hidden";
  centerOfIndia.style.visibility = "visible";
  // 文言の変更、ON/OFF
  line1.textContent = "";
  line2.textContent = "";
  line3.textContent = "";
  lastName.style.visibility = "visible";
  firstName.style.visibility = "visible";
  //   乱数画像OFF
  coffeeBox.remove();
  clothBox.remove();
  saunaBox.remove();
});

english.addEventListener("click", () => {
  // 共通処理
  menuContent.style.visibility = "hidden";
  menuIcon.classList.remove("menu_open");
  imageColorBox1.classList.remove("bgkColor1");
  imageColorBox2.classList.remove("bgkColor2");
  imageColorBox3.classList.remove("bgkColor3");
  // 手書き画像表示のON/OFF
  signature.style.visibility = "visible";
  centerOfIndia.style.visibility = "hidden";
  // 文言の変更、ON/OFF
  line1.textContent = "Geeksalon/webEx/10th";
  line2.textContent = "Born in 1999, Living in Tokyo";
  line3.textContent = "grew up in Tokunoshima-island in childhood";
  lastName.style.visibility = "hidden";
  firstName.style.visibility = "hidden";
  //   乱数画像OFF
  coffeeBox.remove();
  clothBox.remove();
  saunaBox.remove();
});
hobby.addEventListener("click", () => {
  // 共通処理
  menuContent.style.visibility = "hidden";
  menuIcon.classList.remove("menu_open");
  imageColorBox1.classList.remove("bgkColor1");
  imageColorBox2.classList.remove("bgkColor2");
  imageColorBox3.classList.remove("bgkColor3");
  lastName.style.visibility = "hidden";
  firstName.style.visibility = "hidden";
  //   乱数画像表示
  coffeeBox.classList.add("image1");
  clothBox.classList.add("image2");
  saunaBox.classList.add("image3");
  const coffeeImage = document.querySelector("image1");
  const clothImage = document.querySelector("image2");
  const saunaImage = document.querySelector("image3");
  const coffee = ["c１.jpeg", "c２.jpeg", "c３.jpeg"];
  const cloth = ["h１.jpeg", "h２.jpeg", "h３.jpeg"];
  const sauna = ["s１.jpeg", "s２.jpeg", "s３.jpeg"];
  const coffeeNo = Math.floor(Math.random() * coffee.length);
  const clothNo = Math.floor(Math.random() * cloth.length);
  const saunaNo = Math.floor(Math.random() * sauna.length);
  coffeeBox.src = coffee[coffeeNo];
  clothBox.src = cloth[clothNo];
  saunaBox.src = sauna[saunaNo];
  imageColorBox3.append(coffeeBox);
  imageColorBox3.append(clothBox);
  imageColorBox3.append(saunaBox);
});
