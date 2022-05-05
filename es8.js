
// esercizio 8
// Scrivi un programma che dato un numero stampi la tabellina corrispondente.


let num = prompt(`Inserisci un numero maggiore di 0`);
num = Number(num);

for(let i=1;i<=10;i++){
    let tab = num * i;
    console.log(tab);
}
