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

    let obj = Object.fromEntries(array)

    return obj
    
}

// let arr = [['nome','mario'],['cognome','rossi'],['anni','32']]

// console.log(createObj(arr));

// SCRIVERE UNA FUNZIONE ChannelMergerNode,ASSEGNATA UNA STRONGA, RITORNI UN OGGETTO CON CHIAVI LE PAROLE (DISTINTE) E VALORI LA LORO FREQUENZA
// AD ESEMPIO 'QUELLA COSA AFFIANCO ALLA COSA SULLA COSA ' => {QUELLA : 1,COSA:3,AFFIANCO:1,ALLA:1,SULLA:1}

function countWord(str) {

    let obj ={};

    let arr = str.split(' ');

    let app=[];

    arr.forEach((el,i)=>{

        app = arr.filter(a => a == el)

        obj[app[0]] = app.length
    })
    
    console.log(obj);


    
}

// let str = 'Ramarro marrone marrone ramarro marrone Ramarro';

// countWord(str)

// SCRIVERE UNA FUNZIONE CHE DATA UNA STRINGA TRASFORNMI LA PRIMA LETTERA DI OGNI PAROLA IN MAIUSCOLO

function capitalize(str) {

    str = str.split(' ');

    str.forEach((el,i) => {
       el = el.split('')
       el[0] = el[0].toUpperCase();
       el = el.join('')
       str[i]=el;
    })
    
    return str.join(' ');
    
}

// let str = 'Ramarro marrone marrone ramarro marrone Ramarro';

// console.log(capitalize(str)); 


// SCRIVERE UNA FUNZIONE CHE ASSEGNATA UNA STRINGA RITORNI IL NUMERO DI VOCALI PRESENTI (GESTIRE LE MAIUSCOLE)

function countVowels(str) {

    str = str.toLowerCase();

    str = str.replace(/[aeiou]/g, '1')

    str = str.split('');

    str = str.filter(el => el=='1')

    return str.length
    
}

// let str = 'Ciao a tutti'

// console.log(countVowels(str))


// SCRIVERE UNA FUNZIONE CHE, ASSEGNATA UNA STRINGA,NE FACCIA LO SLUG AD ESEMPIO 'Sono una stringa'=> '/sono-una-stringa'

function slug(str) {

    let final = '/';

    str = str.toLowerCase();

    str = str.replace(/\s/g,'-')

    return final+str


    
}


// let str = 'Ciao a tutti';

// console.log(slug(str));

// SCRIVERE UNA FUNZIONE CHE ACCETTA UNA STRINGA E RESTITUISCE LA PAROLA PIU LUNGA

function longestWord(str) {

    str = str.split(' ').sort((a,b) => b.length-a.length);
    
    return final = str[0];
    
}

// let str = 'io sono 232441221';



// console.log(longestWord(str));

// SCRIVERE UNA FUNZIONE CHE DATO UN ARRAY RITORNI 'PARI' O 'DISPARI' A SECONDA CHE LA SOMMA DEI SUOI ELEMENTI SIA PARI O DISPARI

function pariOdispari(array) {

    if((array.reduce((acc,n)=> acc+n))%2 == 0){
        return console.log('pari');
    } else { return console.log(('dispari'));}



}

// let arr =[1,2,3,4];

// pariOdispari(arr)

// SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO UN ARRAY DI 0 E 1 E RESTITUISCA L'EQUIVALENTE NUMERO IN BASE DECIMALE ES [1,0] => 2


function toDecimal(array) {

    array = Number(array.join(''));

    return parseInt(array,2)
    
}

// let arr =[1,0,0,1,1,1]

// console.log(toDecimal(arr));

// VIENE ASSEGNATA UNA STRINGA CONTENENTE SOLO CARATTERI X E Y. SCRIVERE UNA FUNZIONE CHE RITORNI SE NUMERO DI X E DI Y è UGUALE 

function XEqualY(str) {

    str = str.split('')

    let x = str.filter(el => el == 'x')

    let y = str.filter(el => el == 'y')

    if(x.length == y.length){
        return true
    } else return false
    
}

// let str ='xxyxyy';

// console.log(XEqualY(str));

// SCRIVERE UNA FUNZIONE CHE ASSEGNATA UNA STRONGA ED UNA VOCALE RITORNI LA STRINGA ORIGINALE CON TUTTE LE VOCALI CAMBIATE IN QUELLA FORNITA

function subVowels(str,vowel) {
    
    return str.replace(/[aeiouAEIOU]/g,vowel)
    
}

// let str = 'Ciao a tutti'

// console.log(subVowels(str,'o'));

// SCRIVERE UNA FUNZIONE CHE ASSEGNATO UN ARRAY CONTENENTE NUMERI E STRINGHE, RITORNI UN NUOVO ARRAY FORMATO DA SOLI NUMERI. AD ESEMPIO [1,2,'A',4] => [1,2,4]

function removeLetter(array) {

    array = array.join(' ');

    array = array.replace(/[A-Za-z]/g,' ');

    
    array = array.split(' ');

   array = array.filter(el => el != '');

    return array;
    
}

// let arr = [1,2,'A',4,'b','X',23,'a',1,140,'A'];

// console.log(removeLetter(arr));

// SCRIVERE UNA FUNZIO NE CHE ASSEGNATA UNA SGTRINGA NE RESTITUISTA IL REVERSE 

function reverse(str) {

   return str.split('').reverse().join('');

    
}

// let str='Ciao a tutti';
// console.log(reverse(str));


// SCRIVERE UNA FUNZIONE CHE ACCETTA UN ARRAY DI NUMERI E NE RITORNI LA MEDIA E LA DEVIAZIONE STANDARD

function mediaDeviazione(array) {

    let media = (array.reduce((acc,n)=> acc+n))/array.length;

    let num = 0;

    array.forEach((el,i)=>{
        num += Math.pow((el-media),2)
    })

    num = Math.sqrt(num/array.length)

    return `la media è : ${media}, la deviazione standard è : ${num}`

}

// let arr = [1,2,3]

// console.log(mediaDeviazione(arr));

// SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO UN ARRAY DI NUMERI RITORNARE LA SOMMA SE QUESTA E' PARI ALTRIMENTI LA MEDIA

function sumOravarage(array) {

    if((array.reduce((acc,n)=>acc+n)%2==0)){
        return array.reduce((acc,n)=>acc+n);
    } else{
        return array.reduce((acc,n)=>acc+n)/array.length
    }
    
}

// let arr = [2,2,3];

// console.log(sumOravarage(arr));

// SCRIVERE UN PROGRAMMA CHE CHIEDA ALL'UTENTE DI INSERIRE UN NUMERO LANCIARE UN ALERT CHE COMUNICA SE IL NUMERO E PARI O DISPARI

function pariOdispari() {
    
    let num = prompt('Inserire un numero');

    if(num%2 == 0){
        return  alert('Il numero è PARI');
    } else alert('Il numero è DISPARI');
}

// pariOdispari()

// SCRIVERE UNA FUNZIONE CHE ASSEGNATO UN NUMERO NATURALE RITORNI LA SOMMA DI TUTTI I NUMERI NATURALI DA 1 AL NUMERO ASSEGNATO 

function sumTo(num) {
    let final=0;
    for(let i = 1; i<=num ;){
        final += i
    }

    return final;
    
}
console.log(sumTo(4));

console.log('aa');