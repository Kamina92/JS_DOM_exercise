
// esercizio 4
// Scrivi un programma che dati sette valori relativi alle temperature della settimana
// stabilisca la giornata più calda e quella più fredda.
// Esempio:
//   Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
//   “La temperatura piu’ calda e’ 31 quella piu’ fredda -6”

let tempMax = -1000;
let tempMin = 1000;

for(let i = 0;i < 7; i++){

    let temp = prompt (`Inserisci temperatura`);
    temp=Number(temp);

    if (temp>tempMax){
        tempMax = temp;
    }

    if (temp < tempMin){
        tempMin = temp;
    }
}

console.log(`La temperatura più calda è ${tempMax} quella più fredda ${tempMin}`); 
