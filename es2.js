

// esercizio 2
// Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
// - l'età della persona,
// - quanti anni sono necessari per raggiungere i 100
// Restituisca in output entrambi i risultati.

let annoCorrente = 2022;
let annoNascita = prompt('Inserisci anno di nascita');

annoNascita = Number(annoNascita);

let anniPersona = annoCorrente - annoNascita;

console.log(anniPersona);

let untilHundred = annoNascita + 100 - annoCorrente;

console.log(untilHundred);

console.log(`Hai ${anniPersona} anni e ti mancano ${untilHundred} anni per compierne 100` ); 

