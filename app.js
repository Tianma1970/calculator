//functions for click events
function multiply() {
  const showMultiply = document.querySelector("form")
  //let node = document.createElement("p")
  let textNode = document.createTextNode("*")
  showMultiply.appendChild(textNode)
  //showMultiply.createElement("p")

  console.log("*")
}

function devide() {
  console.log("/")
}

function minus() {
  console.log("-")
}

function plus() {
  console.log("+")
}
