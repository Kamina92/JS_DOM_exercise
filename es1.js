
//  esercizio 1


//  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.
//  Esempio
//    Input: a = 1, b = 2, c = 3, d = 4, e = 5
//    “La somma e’  X e la media e Y”                                                                                                                                                                                                  
//    Output: somma = 15, media = 3;

let media;
let somma = 0;

for (i = 0; i < 5; i++) {
    let a = prompt('Inserisci il numero:');
    a= Number(a)
    somma = somma + a;
}

console.log(somma);

media = somma / 5;

console.log(media);

