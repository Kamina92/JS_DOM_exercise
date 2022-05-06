// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//   Esempio:
//     Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//     Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
//   Variante:
//   Prova ad ordinali in modo crescente.


let array = [1,4,50,23,99,309,48,5,-10,6];


let arr = array.sort((a,b)=> b-a);

console.log(arr);