let buttons = document.querySelectorAll(".box");
let boxes = ["box1", "box2", "box3", "box4"];
let gameSeq = [];
let userSeq = [];
let level = 0;
let game = false;

let randNum = () => Math.floor(Math.random() * 4);
// adding Event listener to Divs 
for (btn of buttons) {
  btn.addEventListener("click", function () {
    userSeq.push(this.getAttribute("id"));
    checkUserClick();
    this.classList.add("flash-Green");
    setTimeout(() => {
      this.classList.remove("flash-Green");
    }, 150);
  });
}

function checkUserClick() {
  if (userSeq[userSeq.length - 1] === gameSeq[userSeq.length - 1]) {
    console.log("correct");
    if (userSeq.length == gameSeq.length) {
      userSeq = [];
      setTimeout(() => {
        levelUp();
      }, 500);
    }
  } else {
    document.querySelector(
      "h2"
    ).innerText = `You Guessed wrong! Your Score was ${level} `;
    game = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    document.querySelector("body").classList.add("red");
    setTimeout(() => {
      document.querySelector("body").classList.remove("red");
    }, 200);
  }
}

function blink(div) {
  div.classList.add("blink");
  setTimeout(() => {
    div.classList.remove("blink");
  }, 150);
}

function randomBox() {
  let randBox = boxes[randNum()];
  gameSeq.push(randBox);
  blink(document.querySelector(`.${randBox}`));
}

function levelUp() {
  level++;
  document.querySelector("h2").innerText = `Level ${level}`;
  randomBox();
}

// Press key to start game ↓↓↓
document.addEventListener("keypress", function () {
  if (game == false) {
    levelUp();
    game = true;
  }
});


