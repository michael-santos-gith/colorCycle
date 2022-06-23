function random(min, max) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
  }
  
  function randomColor() {
    return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
  }

document.documentElement.style.setProperty('--color-01', randomColor());
document.documentElement.style.setProperty('--color-02', randomColor());
document.documentElement.style.setProperty('--color-03', randomColor());
document.documentElement.style.setProperty('--color-04', randomColor());
document.documentElement.style.setProperty('--color-05', randomColor());
document.documentElement.style.setProperty('--color-06', randomColor());
document.documentElement.style.setProperty('--color-07', randomColor());
document.documentElement.style.setProperty('--color-08', randomColor());
document.documentElement.style.setProperty('--color-09', randomColor());
document.documentElement.style.setProperty('--color-10', randomColor());
document.documentElement.style.setProperty('--color-11', randomColor());