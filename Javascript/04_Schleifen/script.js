// Zähle von 7 bis 45
console.log("Zähle von 7 bis 45");

for (var i = 7; i <= 45; i++) {
  // <= statt <, da auch 45 ausgegeben werden soll
  console.log("Zahl", i);
}

// Zähle von 9 bis 99
console.log("Zähle von 9 bis 99");

for (var i = 9; i <= 99; i++) {
  console.log("Zahl", i);
}

// Zähle rückwärts von 10 bis 0
console.log("Zähle rückwärts von 10 bis 0");

for (var i = 10; i >= 0; i--) {
  console.log("Zahl", i);
}

// Zähle rückwärts von 1234 bis 1207
console.log("Zähle rückwärts von 1234 bis 1207");

for (var i = 1234; i >= 1207; i--) {
  console.log("Zahl", i);
}

// Gib Deinen Namen genau 8 mal aus
console.log("Gib Deinen Namen genau 8 mal aus");

for (var i = 1; i <= 8; i++) {
  console.log("David", i);
}

//Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0
console.log(
  "Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0"
);

for (var i = 0; i <= 20; i++) {
  if (i <= 10) {
    // Zählen von 0 auf 10
    console.log("Zahl", i);
  } else if (i === 11) {
    // Namen ausgeben
    console.log("David");
  } else {
    // Zählen von 10 auf 0
    console.log("Zahl", 20 - i);
  }
}
