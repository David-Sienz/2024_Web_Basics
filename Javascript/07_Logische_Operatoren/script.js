let randomNumber1 = Math.random() * 100 + 1;
let random1 = Math.floor(randomNumber1);

let randomNumber2 = Math.random() * 100 + 1;
let random2 = Math.floor(randomNumber2);

console.log("Random 1:", random1);
console.log("Random 2:", random2);

if (random1 < random2 && random1 < 50) {
  console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

if (random1 < 30 || random2 < 30) {
  console.log("Eine der beiden ist kleiner als 30");
}

if (random1 < 50 && random2 !== 50) {
  console.log("Erste Zahl klein, zweite kein 50iger");
}
