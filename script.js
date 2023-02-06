const container = document.getElementById("grid");
const gridSizeBtn = document.getElementById("grid-size");

function makeRows(rows) {
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
  container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', changeColor);
    container.appendChild(cell).className = "grid-item";
  };
};

function changeColor(e){
  e.target.style.backgroundColor = 'black';
};

function changeGridSize(e){
  const sizeChange = prompt('Enter a number for grid width and height: ');
  clearGrid();
  makeRows(sizeChange);
};

function clearGrid(){
  container.innerHTML = '';
};

gridSizeBtn.addEventListener('click', changeGridSize);


makeRows(16, 16);