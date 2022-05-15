// Calcolare area cerchio

function areaCerchio(raggio) {
    return Math.floor(raggio*raggio*Math.PI);
}

// calcolare Ipotenusa

function Ipotenusa(cat1,cat2) {

    return (Math.sqrt((cat1**2)+(cat2**2)));

}

// Generare numero intero casuale tra due numeri

function Nrandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// dato stringa con nome cognome restituire iniziali separate da un .

function iniziali(stringa) {

   stringa = stringa.split(' ');

   let iniziali='';

   stringa.forEach(element => {

    iniziali += element.charAt(0)

   });
 return iniziali.split('').join('.')
}

// dati 3 numeri ritornare true se possono essere i lati di un triangolo altrimenti false

function triangolo(a,b,c) {

    let lato1;
    let lato2;
    let lato3;

    if(a<(b+c)&& a> Math.abs(b-c)){
        lato1 = true
    } else {
        lato1 = false;
    }
    if(b<(a+c)&& b> Math.abs(a-c)){
        lato2 = true
    } else {
        lato2 = false;
    }
    if(c<(b+a)&& c> Math.abs(b-a)){
        lato3 = true
    } else {
        lato3 = false;
    }

    if (lato1 == true && lato2 ==true && lato3 == true){
        return true 
    } else{
        return false 
    }
}


// congettura di collatz

function Collatz(numero) {
    let arr =[numero];
    if (numero<1){
        console.log(alert('inserire un numero maggiore di 1 !'));
    } else {
        while (numero != 1) {
            if(numero%2==0){
                numero = numero / 2;
                arr.push(numero);
            } else {
                numero = (numero * 3) + 1;
                arr.push(numero);
            }
        }
    }

    return arr
    
}

// stampare tutti i numeri da 1 a 100, per i multipli di 3 stampare JAVA al posto del numero per i multipli di 5 stampare SCRIPT al posto del numero. per i multipli di 3 E 5 stampare JAVASCRIPT


function JS() {

    
    for(let i=1; i<=100; i++){
        if (i%3 == 0 && i%5 == 0){
            console.log('JAVASCRIPT');
        } else if (i%3 == 0){
            console.log('JAVA');
        }else if (i%5 == 0){
            console.log('SCRIPT');
        } else{ console.log(i);}
    };
    
}

// SCRIVERE UNA FUNZIONE CHE ASSEGNATO UN NUMERO N RITORNI LA SUCCESSIONE DI FIBONACCI FINO ALL'N-ESIMO NUMERO SOTTO FORMA DI ARRAY

function fiboNacci(num) {

    let arr = [1];
    
    let app = 1;
    for(let i=1; i<num; i++){
        arr.push(app);
        app +=arr[i-1];
        console.log(app);

    }
    return arr
}

// SCRIVERE UNA FUNZIONE CHE ASSEGNATO UN NUMERO N RITORNI SE E' PRIMO 

function isPrimo(num) {

    if(num%2 ==0 && num !=2){
        return false
    } else if(num%3 == 0 && num != 3){
        return false
    } else return true
    
}

// SCRIVERE UNA FUNZIONE CHE, ASSEGNATA UNA STRINGA, RITORNI LA SOMMA DELLE CIFRE IN ESSE PRESENTI

function sumNumStr(stringa) {

    stringa = stringa.split('');

    let app=0;

    stringa.forEach((el,i)=>{
        
     el = Number(el);

     if (Number.isNaN(el) == false) {
         app = el + app
     }

    })

    return app
}

// console.log(sumNumStr('sono 1 stringa di 6 paro1le'));

// SCRIVERE UNA FUNZIONE CHE ACCETTA COME PARAMETRI UN ARRAY DI NUMERI ED UN NUMERO DI SOGLIA E RESTITUISCA UN ARRAY FORMATO DAI NUMERI MAGGIORI DI QUELLA SOGLIA


function isGreater(array,num) {

    return array.filter(el => el>num)
    
}

// let arr = [1,2,3,4]

// console.log(isGreater(arr,2));

// scrivere una funzione che trasformi un numero in ore e minuti ad esempio : 3014 => 50:14; devono essere sempre presenti 2 cifre 

function watch(num) {

    let ore = Math.floor(num/60);

    let minuti = Math.floor(num%60);

    
    if (ore<10){
        ore = `0${ore}`
    }
    if (minuti<10){ 
        minuti = `0${minuti}`
    }
    
    let orologio = `${ore}:${minuti}`
    return orologio
}


// console.log(watch(5))

// SCRIVERE UNA FUNZIONE CHE GENERI UN ARRAY FORMATO DA N NUMERI INTERI RANDOM, FRA UN MINUMO E UN MASSIMO ASSEGNATI 

function arrRandom(n,min,max) {

    let arr = [];

    for(let i=0; i<n;i++){
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    
    return arr;
}

// console.log(arrRandom(10,1,10));

// SCRIVERE UNA FUNZIONE CHE TRASFORMA UN ARRAY DI ARRAY IN UN OGGETTO



function createObj(array) {

    
    
}