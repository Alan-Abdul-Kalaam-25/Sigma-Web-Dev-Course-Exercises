let bgClrs = ["blue", "green", "yellow", "orange", "purple"];
let clrs = ["cyan", "lime", "pink", "violet", "red"];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function setRandomColors() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    let randomBgColor = bgClrs[getRandomIndex(bgClrs)];
    let randomTextColor = clrs[getRandomIndex(clrs)];

    box.style.backgroundColor = randomBgColor;
    box.style.color = randomTextColor;
  });
}

setInterval(setRandomColors, 1000);
