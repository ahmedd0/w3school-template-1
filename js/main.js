// ----------------- GLOBAL VARIABLE ----------------------------
var pointer = document.querySelector("#pointer");
//------------------ MAKING DIV MOVING AS A POINTER -------------
function movePointer(e) {
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;

  console.log(e.clientX);
}
//----------------- EVENT LISTENTER ----------------------------
document.addEventListener("mousemove", function (e) {
  movePointer(e);
});
