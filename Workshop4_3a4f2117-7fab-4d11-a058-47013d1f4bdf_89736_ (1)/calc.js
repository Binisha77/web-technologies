const display = document.getElementById("display");
const output = document.getElementById("output");


document.getElementById("button1").addEventListener("click", function() {
  display.value += "1";
});

document.getElementById("button2").addEventListener("click", function() {
  display.value += "2";
});

document.getElementById("button3").addEventListener("click", function() {
  display.value += "3";
});

document.getElementById("button4").addEventListener("click", function() {
  display.value += "4";
});

document.getElementById("button5").addEventListener("click", function() {
  display.value += "5";
});

document.getElementById("button6").addEventListener("click", function() {
  display.value += "6";
});

document.getElementById("button7").addEventListener("click", function() {
  display.value += "7";
});

document.getElementById("button8").addEventListener("click", function() {
  display.value += "8";
});

document.getElementById("button9").addEventListener("click", function() {
  display.value += "9";
});

document.getElementById("button0").addEventListener("click", function() {
  display.value += "0";
});

document.getElementById("addButton").addEventListener("click", function() {
  display.value += "+";
});

document.getElementById("subtractButton").addEventListener("click", function() {
  display.value += "-";
});

document.getElementById("multiplyButton").addEventListener("click", function() {
  display.value += "*";
});

document.getElementById("divideButton").addEventListener("click", function() {
  display.value += "/";
});

document.getElementById("clearButton").addEventListener("click", function() {
  display.value = "";
});

document.getElementById("equalsButton").addEventListener("click", function() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});