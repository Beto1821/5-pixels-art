//item 4
let paletaCores = document.getElementById('color-palette') 
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
      row.appendChild(box);
    }
    pixelBox.appendChild(row);
  }
}
criaMatriz();

//7
function seleciona(event) {
    let eraSelecionada = document.querySelector('.selected')
    eraSelecionada.classList.remove('selected');
    event.target.classList.add('selected');

}
paletaCores.addEventListener('click', seleciona)

// Cblack.addEventListener('click', seleciona)
// Cred.addEventListener('click', seleciona)
// Cblue.addEventListener('click', seleciona)
// Cgreen.addEventListener('click', seleciona)



