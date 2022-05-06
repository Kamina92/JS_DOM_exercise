// Scrivi un programma che dati:
//   - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
//   - il tipo di operazione aritmetica da effettuare, una delle seguenti:
//     addizione
//     sottrazione
//     moltiplicazione
//     divisione
//    Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

//   Esempio:
//     Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
//     Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]




// let arrayA = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];

// let arrayB = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];


// function addition(arrayA,arrayB) {

//     let arraySum = [];

//     for (let i = 0; i < arrayA.length; i++) {
//         const element = arrayA[i];
//         arraySum.push(element+arrayB[i])
//     }
//     return arraySum
// }

// console.log(addition(arrayA,arrayB));


// function subtraction(arrayA,arrayB) {

//     let arraySubtraction = [];

//     for (let i = 0; i < arrayA.length; i++) {
//         const element = arrayA[i];
//         arraySubtraction.push(element-arrayB[i])
//     }
//     return arraySubtraction
// }

// console.log(subtraction(arrayA,arrayB));

// function moltiplication(arrayA,arrayB) {

//     let arrayMoltiplication = [];


//     for (let i = 0; i < arrayA.length; i++) {
//         const element = arrayA[i];
//         arrayMoltiplication.push(element*arrayB[i])
//     }
//     return arrayMoltiplication
// }

// console.log(moltiplication(arrayA,arrayB));


// function division(arrayA,arrayB) {

//     let arrayDivision = [];

//     for (let i = 0; i < arrayA.length; i++) {
//         const element = arrayA[i];
//         arrayDivision.push(element/arrayB[i])
//     }
//     return arrayDivision
// }

// console.log(division(arrayA,arrayB));

let arrayA =[];

let arrayB = [];

for(let i=0; i<10;i++){

    let appoggio = prompt(`Inserisci dieci numeri interi`)

    
    appoggio = Number(appoggio);

    arrayA.push(appoggio);
}

for(let i=0; i<10;i++){

    let appoggio = prompt(`Inserisci altri dieci numeri interi`)

    appoggio = Number(appoggio);

    arrayB.push(appoggio);
}


let choice = prompt(`scegli tra addizione,sottrazione,moltiplicazione o divisione`)


switch (choice) {

    case `addizione`:

        function addition(arrayA,arrayB) {

            let arraySum = [];

            for (let i = 0; i < arrayA.length; i++) {
                const element = arrayA[i];
                arraySum.push(element+arrayB[i])
            }
            return arraySum
        }
        console.log(addition(arrayA,arrayB));


        break;
    case `sottrazione`:

        function subtraction(arrayA,arrayB) {

            let arraySubtraction = [];

            for (let i = 0; i < arrayA.length; i++) {
                const element = arrayA[i];
                arraySubtraction.push(element-arrayB[i])
            }
            return arraySubtraction
        }
        console.log(subtraction(arrayA,arrayB));

        break;
    case `moltiplicazione`:

        function moltiplication(arrayA,arrayB) {

            let arrayMoltiplication = [];


            for (let i = 0; i < arrayA.length; i++) {
                const element = arrayA[i];
                arrayMoltiplication.push(element*arrayB[i])
            }
            return arrayMoltiplication
        }
        console.log(moltiplication(arrayA,arrayB));

        break;
    case `divisione`:

        function division(arrayA,arrayB) {

            let arrayDivision = [];

            for (let i = 0; i < arrayA.length; i++) {
                const element = arrayA[i];
                arrayDivision.push(element/arrayB[i])
            }
            return arrayDivision
        }

        console.log(division(arrayA,arrayB));

        break;

    default: console.log( `non tra le scelte possibili`);
        break;
}