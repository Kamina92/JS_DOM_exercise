
/* esercizio 1

let media;
let somma = 0;

for (i = 0; i < 5; i++) {
    let a = prompt('Inserisci il numero:');
    a= Number(a)
    somma = somma + a;
}

console.log(somma);

media = somma / 5;

console.log(media); */


/* esercizio 2

let annoCorrente = 2022;
let annoNascita = prompt('Inserisci anno di nascita');

annoNascita = Number(annoNascita);

let anniPersona = annoCorrente - annoNascita;

console.log(anniPersona);

let untilHundred = annoNascita + 100 - annoCorrente;

console.log(untilHundred);

console.log(`Hai ${anniPersona} anni e ti mancano ${untilHundred} anni per compierne 100` ); */

/* esercizio 3

let gatti = 44;
let gattiPerFila = 6;

let numeroFile = gatti / gattiPerFila ;

console.log(numeroFile.toFixed(0));

numeroFile = numeroFile.toFixed(0);

let mancantiFila = gatti % gattiPerFila;

console.log(`Ci sono ${numeroFile} file e ne mancano ${mancantiFila} per una nuova fila`); */

/* esercizio 5

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

console.log(`La temperatura più calda è ${tempMax} quella più fredda ${tempMin}`); */

/* esercizio 5

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
} */

// esercizio 6

// let voto = prompt(`Inserisci un numero tra 0 e 30`);
// voto = Number(voto);


// if(voto==30){
//     console.log(`Eccellente`);
// } else if (voto>=27 && voto <= 29){
//     console.log(`Ottimo`);
// } else if (voto>=24 && voto<27){
//     console.log(`Distinto`);
// } else if (voto>=21 && voto<24) {
//     console.log('Buono');
// } else if (voto>=18 && voto<21){
//     console.log(`Sufficiente`);
// } else if (voto<18){
//     console.log(`insufficiente`);
// } 


// esercizio 7

// const max = 6;
// const min = 1;

// let numLanci= prompt(`Decidi quante volte vuoi lanciare il dado`);
// numLanci = Number(numLanci);


// let puntiGiocatoreUno = 0
// let puntiGiocatoreDue = 0


// for(i=numLanci;numLanci>0;numLanci--){
    // let  tiroDadoUno= Math.floor(Math.random() * (max - min + 1) + min);
    // let  tiroDadoDue= Math.floor(Math.random() * (max - min + 1) + min);
//     puntiGiocatoreUno = puntiGiocatoreUno + tiroDadoUno;
//     puntiGiocatoreDue = puntiGiocatoreDue + tiroDadoDue;
// }

// if(puntiGiocatoreUno>puntiGiocatoreDue){
//     console.log(`Il giocatore 1 ha vinto con ${puntiGiocatoreUno} punti `);
// } else{
//     console.log(`Il giocatore 2 ha vinto con ${puntiGiocatoreDue} punti `);

// }

// esercizio 8

// let num = prompt(`Inserisci un numero maggiore di 0`);
// num = Number(num);

// for(let i=1;i<=10;i++){
//     let tab = num * i;
//     console.log(tab);
// }

// esercizio 9

let str= "";

for(let i=1;i<=100; i++){


    str = str+=i+" ";

    if(i%10==0){
        str=str +='\n'
    }
    
}

console.log(str);



