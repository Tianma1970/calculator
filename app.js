let choosedNumbers = []

//functions for click events
function multiply() {
  const showMultiply = document.querySelector("input")
  showMultiply.value = "*"
  // Eftersom det är ett "input" element
  // så ska man sätta "value" inte insertAdjacentHTML
  // ok?
}

function devide() {
  const showDevide = document.querySelector("input")
  showDevide.value = "/"
}

function minus() {
  const showMinus = document.querySelector("input")
  showMinus.value = "-"
}

function plus() {
  const showPlus = document.querySelector("input")
  showPlus.value = "+"
}

function set0() {
  const show0 = document.querySelector("input")
  show0.value = "0"
}
function set9() {
  let show9 = document.querySelector("input")
  show9.value = 9
  choosedNumbers.push(show9.value)

  show9.value = choosedNumbers.join("")
}
function set8() {
  const show8 = document.querySelector("input")
  show8.value = "8"
  choosedNumbers.push(show8.value)
  show8.value = choosedNumbers.join("")
}
function set7() {
  const show7 = document.querySelector("input")
  show7.value = "7"
  choosedNumbers.push(show7.value)
  show7.value = choosedNumbers.join("")
}
function set6() {
  const show6 = document.querySelector("input")
  show6.value = "6"
  choosedNumbers.push(show6.value)
  show6.value = choosedNumbers.join("")
}
function set5() {
  const show5 = document.querySelector("input")
  show5.value = "5"
  choosedNumbers.push(show5.value)
  show5.value = choosedNumbers.join("")
}
function set4() {
  const show4 = document.querySelector("input")
  show4.value = "4"
  choosedNumbers.push(show4.value)
  show4.value = choosedNumbers.join("")
}
function set3() {
  const show3 = document.querySelector("input")
  show3.value = "3"
  choosedNumbers.push(show3.value)
  show3.value = choosedNumbers.join("")
}
function set2() {
  const show2 = document.querySelector("input")
  show2.value = "2"
  choosedNumbers.push(show2.value)
  show2.value = choosedNumbers.join("")
}
function set1() {
  const show1 = document.querySelector("input")
  show1.value = "1"
  choosedNumbers.push(show1.value)
  show1.value = choosedNumbers.join("")
}

//funktionen för att nollställa
function clear() {
  const clear = document.querySelector("input")
  clear.value = null
}

choosedNumbers.join("")
console.log(choosedNumbers)
