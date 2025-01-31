//eins
let sum = 0;
for (var i = 7; i < 344; i++) {
  if (i % 12 === 0) {
    sum += 3 * i;
  } else if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

//zwei
let data = "Super duper";
let result = "";

for (let i = 0; i < data.length; i++) {
  if (data[i] === "u" || data[i] === "e") {
    result += "x";
  } else {
    result += data[i];
  }
}

console.log(result);

//drei
let number = 100;
while (number >= 25) {
  if (number != 50 && number != 40 && number != 30) {
    console.log(number);
  }
  number -= 5;
}
