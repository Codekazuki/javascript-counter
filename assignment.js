"use strict";

// const hideButton = function (x) {
//   x.stle.dispaly = "none";
// };
function hideButton(x) {
  x.style.display = "none";
}

function changeColor(hi) {
  hi.style.color = "red";
}
function removeClass(i) {
  var allElements = document.querySelectorAll(".text");
  for (i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("text");
  }
}
function remove() {
  const e = document.getElementsById("classremove");
  e.classList.remove("text");
}
