const container = document.getElementById("grid");

function makeRows(rows, cols) {
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
  container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', changeColor);
    container.appendChild(cell).className = "grid-item";
  };
};

function changeColor(e){
    e.target.style.backgroundColor = 'black';
};

makeRows(16, 16);