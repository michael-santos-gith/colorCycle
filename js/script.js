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

function colorCycle(colorRandom, hexDecimal) {
  let color, colorChange;
  setInterval(() => {
    color = colorRandom();
    colorChange = hexDecimal(color);
    document.getElementById("hex-color").value = colorChange;
    document.documentElement.style.setProperty(`--color-01`, color);
  }, 1000)
}

colorCycle(randomColor, decimalToHex);