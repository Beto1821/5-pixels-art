//item 4
let pixelBox = document.getElementById('pixel-board');


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

