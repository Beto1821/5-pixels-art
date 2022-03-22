//item 4
let paletaCores = document.getElementById('color-palette');
let pixelBox = document.getElementById('pixel-board');
let pixel = document.querySelector('.pixel');
const Cblack = document.getElementsByClassName('black');
const Cred = document.getElementsByClassName('red');
const Cblue = document.getElementsByClassName('blue');
const Cgreen = document.getElementsByClassName('green');

function criaMatriz() {
  for (let z = 1; z <= 5; z += 1) {
    let row = document.createElement('div');
    row.className = 'linha';
    for (let i = 1; i <= 5; i += 1) {
      let box = document.createElement('div');
      box.className = 'pixel';
      box.addEventListener('click', pixelColor);
      row.appendChild(box);
    }
    pixelBox.appendChild(row);
  }
}
criaMatriz();

//7
function seleciona(event) {
  let eraSelecionada = document.querySelector('.selected');
  eraSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(getComputedStyle(event.target).backgroundColor);
}
paletaCores.addEventListener('click', seleciona);

//8

function pixelColor(event) {
  let paleta = document.querySelector('.selected');
  let color = getComputedStyle(paleta).backgroundColor;
  event.target.style.backgroundColor = color;
  console.log(event.target);
  console.log(color);
}

let btn = document.querySelector('#clear-board');

btn.addEventListener('click', function() {
  location.reload();
});