function add() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  let result = parseFloat(input1) + parseFloat(input2);
  console.log("result: " + result);
}

function subtract() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  let result = parseFloat(input1) - parseFloat(input2);
  console.log("result: " + result);
}

function multiply() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  let result = parseFloat(input1) * parseFloat(input2);
  console.log("result: " + result);
}

function divide() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  let num1 = parseFloat(input1);
  let num2 = parseFloat(input2);

  if (num2 === 0) {
    console.log("Fehler: Division durch 0 ist nicht erlaubt!");
  } else {
    let result = num1 / num2;
    console.log("result: " + result);
  }
}
