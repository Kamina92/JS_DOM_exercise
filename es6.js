
// esercizio 6
// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// v < 18: insufficiente
// 18 <= v < 21: sufficiente
// 21 <= v < 24: buono
// 24 <= v < 27: distinto
// 27 <= v <= 29: ottimo
// v = 30: eccellente
// Esempio:if
// Input: v = 29
// Output: Ottimo

let voto = prompt(`Inserisci un numero tra 0 e 30`);
voto = Number(voto);


if(voto==30){
    console.log(`Eccellente`);
} else if (voto>=27 && voto <= 29){
    console.log(`Ottimo`);
} else if (voto>=24 && voto<27){
    console.log(`Distinto`);
} else if (voto>=21 && voto<24) {
    console.log('Buono');
} else if (voto>=18 && voto<21){
    console.log(`Sufficiente`);
} else if (voto<18){
    console.log(`insufficiente`);
} 
