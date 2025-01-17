function sagHallo(name, callback) {
  console.log("Hallo, " + name);
  callback(); // Aufruf der Callback-Funktion
}

function verabschieden() {
  console.log("Auf Wiedersehen!");
}

// Hier wird die Callback-Funktion übergeben
sagHallo("Max", verabschieden);
