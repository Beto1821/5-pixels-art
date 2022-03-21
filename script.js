let pixelBox = document.getElementById('pixel-board');

function criaMatriz() {
  for (let z = 0; z < 5; z += 1) {
    let quebra = document.createElement('br');
    pixelBox.appendChild(quebra);
    for (let i = 0; i < 5; i += 1) {
      let box = document.createElement('div');
      box.className = 'pixel';
      pixelBox.appendChild(box);
    }
  }
}
criaMatriz();
