// esercizio 7


// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
// simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
// supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore                                                                    


// // Suggerimento 
// // Usiamo questa formula per generare un numero random

//   Math.floor(Math.random() * (max - min + 1) + min);

const max = 6;
const min = 1;

let numLanci= prompt(`Decidi quante volte vuoi lanciare il dado`);
numLanci = Number(numLanci);


let puntiGiocatoreUno = 0
let puntiGiocatoreDue = 0


for(i=numLanci;numLanci>0;numLanci--){
    let  tiroDadoUno= Math.floor(Math.random() * (max - min + 1) + min);
    let  tiroDadoDue= Math.floor(Math.random() * (max - min + 1) + min);
    puntiGiocatoreUno = puntiGiocatoreUno + tiroDadoUno;
    puntiGiocatoreDue = puntiGiocatoreDue + tiroDadoDue;
}

if(puntiGiocatoreUno>puntiGiocatoreDue){
    console.log(`Il giocatore 1 ha vinto con ${puntiGiocatoreUno} punti `);
} else{
    console.log(`Il giocatore 2 ha vinto con ${puntiGiocatoreDue} punti `);

}
