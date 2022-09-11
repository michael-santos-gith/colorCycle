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
  colors = setInterval(displayColor, 1000);
}

function stopColors() {
  clearInterval(colors);
  colors = null;
}

function efectButtons(array, index, disableButton=true, styleCursor='no-drop') {
  array[index].disabled = disableButton;
  array[index].style.cursor = styleCursor;
  array[index].style.border = `${2}px solid #516BEB`;
}

buttons.forEach((element, index, array) => {
  efectButtons(array, 1, true);
  efectButtons(array, 0, false, 'pointer');
  element.addEventListener('click', () => {
    if (index === 0) {
      colorCycle();
      efectButtons(array, 0, true);
      efectButtons(array, 1, false, 'pointer');
    } else if (index === 1) {
      stopColors(colors);
      efectButtons(array, 1, true);
      efectButtons(array, 0, false, 'pointer');
    }
  })
})