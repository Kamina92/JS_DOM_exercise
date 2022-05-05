
// esercizio 5
// Scrivi un programma che dato un numero intero compreso tra 1 e 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"

let numeroGiorno = prompt(`Inserisci un numero tra 1 e 7`);
numeroGiorno = Number(numeroGiorno);

switch (numeroGiorno){

    case 1 : 
        console.log("Lunedì");
        break;
    case 2 : 
        console.log("Martedì");
        break;
    case 3 : 
        console.log("Mercoledì");
        break;
    case 4 : 
        console.log("Giovedì");
        break;
    case 5 : 
        console.log("Venerdì");
        break;
    case 6 : 
        console.log("Sabato");
        break;
    case 7 : 
        console.log("Domenica");
        break;

    default:
        console.log(`non un numero tra 1 e 7`);
} 
