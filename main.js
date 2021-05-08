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
// 乱数画像表示
const coffeeBox = document.createElement("img");
const clothBox = document.createElement("img");
const saunaBox = document.createElement("img");
const cyclingBox = document.createElement("img");
const coffeeContent = document.createElement("div");
const clothContent = document.createElement("div");
const saunaContent = document.createElement("div");
const blackBlock1 = document.createElement("div");
const blackBlock3 = document.createElement("div");

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
  line4.textContent =
    "मैं टोक्यो यूनिवर्सिटी ऑफ फॉरेन स्टडीज में हिंदियों का अध्ययन करता हूं।  वर्तमान में, मैं अफ्रीका की राजनीति पर शोध करता हूं।";
  line5.textContent =
    "हालाँकि, आपके साथ फ्रैंक होने के लिए, मुझे हिंदियों का अध्ययन करना पसंद नहीं है, कहने के लिए, भाषाएँ।";
  line6.textContent =
    "अब, मैं एक इंजीनियर के रूप में कंपनी में काम करने के लिए विश्वविद्यालय से एक साल की छुट्टी ले रहा हूं।";
  line7.textContent =
    "इतना कठिन, इतना व्यस्त, इतना कठिन, लेकिन उससे भी अधिक, मैं इतना खुश महसूस करता हूं";
  lastName.style.visibility = "visible";
  firstName.style.visibility = "visible";
  //   乱数画像OFF
  coffeeBox.remove();
  clothBox.remove();
  saunaBox.remove();
  cyclingBox.remove();
  coffeeContent.remove();
  clothContent.remove();
  saunaContent.remove();
  blackBlock1.remove();
  blackBlock3.remove();
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
  line4.textContent =
    "I study Hindhi in Tokyo University of foreign studies. Currently, I research the Politics of Africa.";
  line5.textContent =
    "However, to be frank with you, I don't like studying Hindhi, more to say, the languages.";
  line6.textContent =
    " Now, I'm taking a year off from the university to work in the company as a engineer.";
  line7.textContent =
    "so hard, so busy, so difficult, but more than that, I feel so happy";
  lastName.style.visibility = "hidden";
  firstName.style.visibility = "hidden";
  //   乱数画像OFF
  coffeeBox.remove();
  clothBox.remove();
  saunaBox.remove();
  cyclingBox.remove();
  coffeeContent.remove();
  clothContent.remove();
  saunaContent.remove();
  blackBlock1.remove();
  blackBlock3.remove();
});
hobby.addEventListener("click", () => {
  window.onload = () => {
    // 共通処理
    menuContent.style.visibility = "hidden";
    menuIcon.classList.remove("menu_open");
    imageColorBox1.classList.remove("bgkColor1");
    imageColorBox2.classList.remove("bgkColor2");
    imageColorBox3.classList.remove("bgkColor3");
    // 手書き画像表示のON/OFF
    lastName.style.visibility = "hidden";
    firstName.style.visibility = "hidden";
    //   乱数画像表示
    coffeeBox.classList.add("image1");
    clothBox.classList.add("image2");
    cyclingBox.classList.add("image2");
    saunaBox.classList.add("image3");
    const coffee = ["coffee/c１.jpeg", "coffee/c２.jpeg", "coffee/c３.jpeg"];
    const cloth = ["cloth/h１.jpeg", "cloth/h２.jpeg", "cloth/h３.jpeg"];
    const sauna = ["sauna/s１.jpeg", "sauna/s２.jpeg", "sauna/s３.jpeg"];
    const cycling = [
      "cycling/cycling1.jpeg",
      "cycling/cycling2.jpeg",
      "cycling/cycling3.jpeg",
    ];
    const coffeeNo = Math.floor(Math.random() * coffee.length);
    const clothNo = Math.floor(Math.random() * cloth.length);
    const saunaNo = Math.floor(Math.random() * sauna.length);
    const cyclingNo = Math.floor(Math.random() * cycling.length);
    coffeeBox.src = coffee[coffeeNo];
    clothBox.src = cloth[clothNo];
    saunaBox.src = sauna[saunaNo];
    cyclingBox.src = cycling[cyclingNo];
    // 黒枠
    coffeeContent.classList.add("image1");
    clothContent.classList.add("image2");
    saunaContent.classList.add("image3");
    blackBlock1.classList.add("image1");
    blackBlock3.classList.add("image3");
    // hobby title
    clothContent.textContent = "hobby";
    coffeeContent.textContent = "coffee";
    saunaContent.textContent = "old cloth";
    blackBlock1.textContent = "cycling";
    blackBlock3.textContent = "sauna";
    // append
    imageColorBox1.append(cyclingBox);
    imageColorBox1.append(blackBlock1);
    imageColorBox1.append(blackBlock3);
    imageColorBox2.append(coffeeBox);
    imageColorBox2.append(clothContent);
    imageColorBox2.append(saunaBox);
    imageColorBox3.append(coffeeContent);
    imageColorBox3.append(clothBox);
    imageColorBox3.append(saunaContent);
  };
});
