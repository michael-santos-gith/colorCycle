function random(min, max) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}
  
function randomColor() {
  return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}

function decimalToHex(func) {
  let numberHex, RED, GREEN, BLUE;

  numberHex = randomColor().toString();
  numberHex = numberHex.replace(/\D+/g, ',');
  numberHex = numberHex.slice(1);
  [ RED, GREEN, BLUE ] = numberHex.split(',');

  return console.log(RED,GREEN,BLUE);
}

function colorCycle() {
  for (let index = 1; index <= 11; index++) {
    document.documentElement.style.setProperty(`--color-0${index}`, randomColor());
    decimalToHex(randomColor()); 
  }
}

colorCycle();