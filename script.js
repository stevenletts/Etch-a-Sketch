const container = document.getElementById("grid");
const gridSizeBtn = document.getElementById("grid-size");
const clearBtn = document.getElementById("clear");

function makeRows(rows=16) {
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
  if (sizeChange < 1 || sizeChange > 100){
    alert("Please stay between 1 and 100");
    makeRows(16);
    return
  }
  clearGrid();
  makeRows(sizeChange);
};

function clearGrid(){
  container.innerHTML = '';
  makeRows();
};

gridSizeBtn.addEventListener('click', changeGridSize);
clearBtn.addEventListener('click', clearGrid);
makeRows(16, 16);