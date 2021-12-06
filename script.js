const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const listItems = document.querySelectorAll(".list");

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    removeActiveClasses();
    item.classList.add("current");
  });
});

function removeActiveClasses() {
  listItems.forEach((item) => item.classList.remove("current"));
}

// listItems.forEach(item => {
//     console.log(item);
//     item.addEventListener('mouseover', () => {

//         item.classList.toggle('current')
//     })

// });

//<--------------------------------- Toasts ----------------------------->
const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = ["Start Conversation", "View GitHub", "Checkout LinkedIn"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// <================Auto type text================>
const textEl = document.getElementById("text");

const text = "Welcome To My Portfolio Website";
const text2 = "Love Programming";

const text3 = "Help make Life Easier";

let idx = 1;
let idx2 = 1;
let idx3 = 1;
let speed = 100;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    textEl.innerText = "";
    writeText2();
  }

  setTimeout(writeText, speed);
}

function writeText2() {
  textEl.innerText = text2.slice(0, idx2);

  if (idx2 > text2.length) {
    textEl.innerText = "";
    writeText3();
  }

  idx2++;
  // setTimeout(writeText2, 100) =========================>>>>>>>>>>>>>this setTimeOut is executed in writeText() itself this writetext() inturn calls both writeText2() & writetext3()
}
function writeText3() {
  textEl.innerText = text3.slice(0, idx3);

  idx3++;

  // writeText()
  if (idx3 > text3.length) {
    textEl.innerText = text;
  }

  // setTimeout(writeText3, speed)
}
