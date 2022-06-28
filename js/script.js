const buttons = document.querySelectorAll('button');

function random(min, max) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}
  
function randomColor() {
  return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}

function decimalToHex(func) {
  let numberHex, color;

  numberHex = func.toString();
  numberHex = numberHex.replace(/\D+/g, ',');
  numberHex = numberHex.slice(1);
  color = numberHex.split(',').join('');
  color = Number(color).toString(16);
  
  return color;
}

function colorCycle() {
  let color, colorChange;
  setInterval(() => {
    color = randomColor();
    colorChange = decimalToHex(color);
    document.getElementById("hex-color").value = colorChange;
    document.documentElement.style.setProperty(`--color-01`, color);
  }, 1000)
}

function stopColors() {
  clearInterval(colorCycle());
}

buttons.forEach((element, index, array) => {
  array[1].disabled = true;
  element.addEventListener('click', () => {
    if (index === 0) {
      // colorCycle();
      array[index].disabled = true;
      array[1].disabled = false;
    } else if (index === 1) {
      // stopColors();
      array[index].disabled = true;
      array[0].disabled = false;
    }
  })
})