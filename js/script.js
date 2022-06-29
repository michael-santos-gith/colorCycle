const buttons = document.querySelectorAll('button');
let colors;

function random(min, max) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}
  
function randomColor() {
  return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}

function decimalToHex(func) {
  let numberHex, color;

  color = numberHex = func.toString().replace(/\D+/g, ',').slice(1).split(',').join('');
  color = Number(color).toString(16);
  
  return color;
}

function displayColor() {
  let color, colorChange;
  color = randomColor();
  colorChange = decimalToHex(color);
  document.getElementById("hex-color").value = colorChange;
  document.documentElement.style.setProperty(`--color-01`, color);
}

function colorCycle() {
  colors = setInterval(displayColor, 1000)
}

function stopColors() {
  clearInterval(colors);
  colors = null;
}

buttons.forEach((element, index, array) => {
  array[1].disabled = true;
  element.addEventListener('click', () => {
    if (index === 0) {
      colorCycle();
      array[index].disabled = true;
      array[1].disabled = false;
    } else if (index === 1) {
      stopColors(colors);
      array[index].disabled = true;
      array[0].disabled = false;
    }
  })
})