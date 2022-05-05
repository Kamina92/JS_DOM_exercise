// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempi:

//     Input : 9
//     Output :  1 cifra


//     Input : 99
//     Output :  2 cifre



function cifre(num) {

    let a = 0;
    num /=10;
    
    if (num<1) {
         a = 1;
    } 
    else if (num<10) {
        a = 2;
    }
    else if (num<100) {
        a = 3;
    }   
    else if (num<1000) {
        a = 4;
    }
    return a
} 


let a = cifre(5);

console.log(a);