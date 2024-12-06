function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let maincolor =
    "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  return maincolor;
}

function setRandomColors() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    let randomBgColor = getRandomColor();
    let randomTextColor = getRandomColor();

    box.style.backgroundColor = randomBgColor;
    box.style.color = randomTextColor;
  });
}

setInterval(setRandomColors, 1000);
