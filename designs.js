const pickedColor = document.getElementById("colorPicker");
const gridHeightValue = document.getElementById("inputHeight");
const gridWidthValue = document.getElementById("inputWidth");
const canvas = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");

form.addEventListener("submit", function (event) {
  /**
  clearing the canvas for achieving the functionality of when clicking the 
  "submit" button, the canvas/table should be empty. if not, then for each changes
  on the form value, new cells would be just added to the existing table/grid/canvas.
  */
  canvas.innerHTML = "";
  // preventing default submit behavior
  event.preventDefault();
  makeGrid();
});

canvas.addEventListener("click", function (event) {
  /** https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName,
 targetting Node with tagName for each column and then
  changing color for each cell with click event
 */
  if (event.target.tagName.toLowerCase() === "td") {
    event.target.style.backgroundColor = pickedColor.value;
  }
});

function makeGrid() {
  for (let i = 0; i < gridHeightValue.value; i++) {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
    const row = canvas.insertRow(-1);
    for (let j = 0; j < gridWidthValue.value; j++) {
      row.insertCell(0);
    }
  }
}
