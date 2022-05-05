
// esercizio 3
// Scrivi un programma che dato:
// a) Un numero totale di gatti
// b) Il numero dei gatti presenti in ogni fila
// Restituisca in output:
// - Il  numero di file risultanti
// - indicare il numero di gatti mancanti per completare una nuova fila 
// Gatti: 44, gatti in ogni fila : 6 
// “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila”.

let gatti = 44;
let gattiPerFila = 6;

let numeroFile = gatti / gattiPerFila ;

console.log(numeroFile.toFixed(0));

numeroFile = numeroFile.toFixed(0);

let mancantiFila = gatti % gattiPerFila;

console.log(`Ci sono ${numeroFile} file e ne mancano ${mancantiFila} per una nuova fila`); 

