// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleWeight = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaWeight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let applesPerKilo = 1 / appleWeight;
let bananasPerKilo = 1 / bananaWeight;

let pricePerApple = applePricePerKilo * appleWeight;
let pricePerBanana = bananaPricePerKilo * bananaWeight;

console.log("Anzahl Äpfel pro Kilo:", applesPerKilo);
console.log("Anzahl Bananen pro Kilo:", bananasPerKilo);
console.log("Preis pro Apfel:", pricePerApple, "€");
console.log("Preis pro Banane:", pricePerBanana, "€");

// Preis von 8 Äpfeln
let price8Apples = pricePerApple * 8;
console.log("Preis von 8 Äpfeln:", price8Apples, "€");

// Preis von 17 Bananen
let price17Bananas = pricePerBanana * 17;
console.log("Preis von 17 Bananen:", price17Bananas, "€");

// Preis von 1 Tonne Äpfel
let applePricePerTonne = applePricePerKilo * 1000;
console.log("Preis von 1 Tonne Äpfel:", applePricePerTonne, "€");

// Preis von 1 Tonne Bananen
let bananaPricePerTonne = bananaPricePerKilo * 1000;
console.log("Preis von 1 Tonne Bananen:", bananaPricePerTonne, "€");
