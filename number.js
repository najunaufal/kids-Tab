export function show(numb) {
    textBox = document.getElementById("calculatorTextBox");
    currentValue = textBox.value;
    newValue = currentValue + numb;
    document.getElementById("calculatorTextBox").value = newValue;
    document.getElementById("imagebox").src = "";
  }
   export function clears() {
    document.getElementById("calculatorTextBox").value = "";
  }
 export function plus() {
    lastCickedOperation = "+";
    lastValue = document.getElementById("calculatorTextBox").value;
    document.getElementById("calculatorTextBox").value = "";
  }
  export function minus() {
    lastCickedOperation = "-";
    lastValue = document.getElementById("calculatorTextBox").value;
  
    document.getElementById("calculatorTextBox").value = " ";
  }
  export function multiply() {
    lastCickedOperation = "*";
    lastValue = document.getElementById("calculatorTextBox").value;
    document.getElementById("calculatorTextBox").value = " ";
  }
  export function equals() {
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