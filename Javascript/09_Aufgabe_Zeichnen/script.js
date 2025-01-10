//Aufgabe 1
console.log("//Aufgabe 1");
for (let index = 0; index < 4; index++) {
  if (index % 2 == 0) {
    console.log("0000");
  } else {
    console.log("XXXX");
  }
}

//Aufgabe 2
console.log("//Aufgabe 2");

let evennumbers = 0;

for (let index = 0; index <= 100; index++) {
  if (index % 2 == 0) {
    evennumbers += index;
  }
}

console.log(evennumbers);

//Aufgabe 3
console.log("//Aufgabe 3");

for (let index = 0; index <= 4; index++) {
  if (index == 1) {
    console.log("X X");
  }

  if (index == 2) {
    console.log("X   X");
  }

  if (index == 3) {
    console.log("X   X");
  }

  if (index == 4) {
    console.log("X X");
  }
}
