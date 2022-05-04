// import { randomIntFromInterval } from "./alph.js";
// import { show, clears, plus, minus, multiply, equals } from "./number.js";
var data = [
  { letter: "Aa", image: "IMAGES/A.jpg" },
  { letter: "Bb", image: "IMAGES/B.jpg" },
  { letter: "Cc", image: "IMAGES/C.jpg" },
  { letter: "Dd", image: "IMAGES/D.jpg" },
  { letter: "Ee", image: "IMAGES/E.jpg" },
  { letter: "Ff", image: "IMAGES/F.jpg" },
  { letter: "Gg", image: "IMAGES/G.jpg" },
  { letter: "Hh", image: "IMAGES/H.jpg" },
  { letter: "Ii", image: "IMAGES/I.jpg" },
  { letter: "Jj", image: "IMAGES/J.webp" },
  { letter: "Kk", image: "IMAGES/K.jpg" },
  { letter: "Ll", image: "IMAGES/L.jpg" },
  { letter: "Mm", image: "IMAGES/M.jpg" },
  { letter: "Nn", image: "IMAGES/N.webp" },
  { letter: "Oo", image: "IMAGES/O.jpg" },
  { letter: "Pp", image: "IMAGES/P.jpg" },
  { letter: "Qq", image: "IMAGES/Q.webp" },
  { letter: "Rr", image: "IMAGES/R.jpg" },
  { letter: "Ss", image: "IMAGES/S.webp" },
  { letter: "Tt", image: "IMAGES/T.jpg" },
  { letter: "Uu", image: "IMAGES/U.webp" },
  { letter: "Vv", image: "IMAGES/V.jpg" },
  { letter: "Ww", image: "IMAGES/W.webp" },
  { letter: "Xx", image: "IMAGES/X.jpg" },
  { letter: "Yy", image: "IMAGES/Y.jpg" },
  { letter: "Zz", image: "IMAGES/Z.jpg" },
];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("letters").innerHTML =
  data
    .map(
      (letterDetail, index) =>
        `<button type="button" class="abutton color${randomIntFromInterval(
          1,
          5
        )}" onclick="setLetter('${letterDetail.image}');">${
          letterDetail.letter
        }</button>`
    )
    .join("") + document.getElementById("letters").innerHTML;

function setLetter(image) {
  // alert(image)
  //   for (i = 0; i < data.length; i++)
  //     Image += letter[i] + console.warn(document.getElementById("imagebox").src);
  document.getElementById("imagebox").src = image;
}
function show(numb) {
  textBox = document.getElementById("calculatorTextBox");
  currentValue = textBox.value;
  newValue = currentValue + numb;
  document.getElementById("calculatorTextBox").value = newValue;
  document.getElementById("imagebox").src = "";
}
function clears() {
  document.getElementById("calculatorTextBox").value = "";
}
function plus() {
  lastCickedOperation = "+";
  lastValue = document.getElementById("calculatorTextBox").value;
  document.getElementById("calculatorTextBox").value = "";
}
function minus() {
  lastCickedOperation = "-";
  lastValue = document.getElementById("calculatorTextBox").value;

  document.getElementById("calculatorTextBox").value = " ";
}
function multiply() {
  lastCickedOperation = "*";
  lastValue = document.getElementById("calculatorTextBox").value;
  document.getElementById("calculatorTextBox").value = " ";
}
function equals() {
  result = 0;
  if (lastCickedOperation == "+") {
    currentValue = document.getElementById("calculatorTextBox").value;
    result = Number(lastValue) + Number(currentValue);
    document.getElementById("calculatorTextBox").value = result;
  } else if (lastCickedOperation == "-") {
    currentValue = document.getElementById("calculatorTextBox").value;
    result = Number(lastValue) - Number(currentValue);
    document.getElementById("calculatorTextBox").value = result;
  } else if (lastCickedOperation == "*") {
    currentValue = document.getElementById("calculatorTextBox").value;
    result = Number(lastValue) * Number(currentValue);
    document.getElementById("calculatorTextBox").value = result;
  }
}

function play() {
  document.getElementById("imagebox").src =
    document.getElementById("forPostyourvideo").iframe;
  console.log(document.getElementById("forPostyurvideo").video);

  // document.getElementById("forPostyourvideo").contentWindow.Reset();
}
