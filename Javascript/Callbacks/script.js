//Aufgabe 1
function decider(number, callback) {
  console.log("number: " + number);
  if (number > 100) {
    callback();
  }
}

function bigNumber() {
  console.log("This number is bigger than 100!");
}

decider(150, bigNumber);

//Aufgabe 2
function orderPizza(name, callback) {
  console.log("Ihre Pizza: " + name);
  callback();
}

function price() {
  let random = Math.random() * 5 + 7;
  let randomFloor = Math.floor(random);
  console.log("Preis: " + randomFloor + "€");
}

orderPizza("Margherita", price);
