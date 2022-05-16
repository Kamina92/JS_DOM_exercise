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

    for(let i = 1; i<=num ; i++){
        final += i
    }

    return final;
    
}

// console.log(sumTo(5));


// SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO DUE ARRAY E NE RESTITUISCA IL PRODOTTO SCALARE

function scalare(array1,array2) {

    let final = 0;

    array1.forEach((el,i)=>{
        final += el*array2[i]
    });

    return final
    
}

// let arr1 = [1,2,3];
// let arr2 = [2,6,9];

// console.log(scalare(arr1,arr2));

// VIENE FORNITA UNA STRINGA. RITORNARE UN OGGETTO CON CHIAVE IL CARATTERE, VALORE IL NUMERO DI VOLTE CHE COMPARE NELLA STRINGA
// AD ESEMPIO 'casa =>' {'a': 2,'c': 1,'s':1}


function charObj(str) {

    str = str.split('');

    let key = Array.from(new Set(str))

    key.sort();

    let final = key.map(el => 
        [el,str.filter(val => val == el).length]
    )


    return Object.fromEntries(final)

    
}

// let str = 'casa';

// console.log(charObj(str));

// SCRIVERE UNA FUNZIONE CHE PRENDE IN INGRESSO UN NUMERO INTERO E RITORNA IL NUMERO DI BIT UGUALI AD UNO NELLA SUA RAPPRESENTAZIONE BINARIA 
// ES 42, IN BINARIO 101010 => 3

function countBin(num) {

    num = num.toString(2)
    
    return num.split('').filter(el => el == 1).length
    
}

// console.log(countBin(42));

// VIENE ASSEGNATO UN ARRAY DI NOMI. SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO L'ARRAY ED UN NUMERO E RITORNI UN NUOVO ARRAY CONTENENTE SOLO I NOMI DI LUNGHEZZA UGUALE AL NUMERO ASSEGNATO, IN ORDINE ALFABETICO. AD ESEMPIO ['GIGI','TIZIO','CAIO','PIERO'],4 => ['CAIO','GIGI']. EXTRA LE LA FUNZIONE VIENE INVOCATA SENZA IL SECONDO PARAMETRO DEVE RITORNARE TUTTI I NOMI LUNGHI 5 LETTERE 

function findName(array,num) {

    if (num == undefined){
        return array.filter(el => el.length == 5);
    }else return array.filter(el => el.length == num);
    
}



// let arr = ['GIGI','TIZIO','CAIO','PIERO','fil'];

// console.log(findName(arr,4));

// SCRIVERE UNA FUNZIONE CHE ASSEGNATO UN NUMERO INTERO RITORNI TUITTI I NUMERI PRIMI ESISTENTI FINO AL NUMERO ASSEGNATO (COMPRESO).
// AD ESEMPIO : 15 => [2,3,5,7,11,13]

function primoFino(num) {

    let arr =[];

    for(let i=2; i<=num;i++){
        if(i==2){
            arr.push(i)
        }
        if(i==3){
            arr.push(i)
        }

        if (i%2!=0 && i%3!=0 && i%7!=0) {
            arr.push(i)
        }

    }
    
    return arr
}

// console.log(primoFino(51));

// SCRIVERE UNA FUNZIONE CHE ACCETTA UN NUMERO INTERO E RITORNA TUTTI I SUOI DIVISORI. DOPO TRASFORMARE LA FUNZIONE PER VERIFICARE SE UN NUMERO E' PRIMO 

function divisori(num) {

    let arr =[];

    for (let i = 0; i <= num; i++) {
        if (num%i == 0) {
            arr.push(i)
        }
    }
    return arr
}

// console.log(divisori(10));


// SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO UNA STRINGA (UNA PASSWORD) E RITORNI TRUE O FALSE SE E' VALIDA. PER ESSERE VALIDA LA PASSWORD DEVE ESSERE LUNGA ALMENO 6 CARATTERI E DEVE CONTENERE ALMENO UN NUMERO. EXTRA COME PRIMA MA NELLA PASSWORD NON CI DEVONO ESSERE CARATTERI RIPETUTI 


function password(str) {

    str=str.split('');

    let ver = Array.from(new Set(str))

    console.log(ver);
    if (str.length>=6 && str.find(el => el>=0) != undefined && str.length == ver.length){

        return true 

    } else return false 
    
}
// console.log(password('provadd1'));

// VIENE ASSEGNAOT UN ARRAY DI NUMERI INTERI, IN CUI SONO PRESENTI IN POSIZIONI RANDOM, UN NUMERO ED IL SUO OPPOSTO TRANNE CHE PER UN ELEMENTO CHE COMPARE SENZA L'OPPOSTO. SCRIVERE UNA FUNZIONE CHE RITORNA TALE ELEMENTO AD ESEMPIO [-3,1,2,3,-1,4,-2] => 4


function loneN(array) {

    let final = [];

    array.forEach((el,i)=>{
        if (array.find(val=> val == -el) == undefined){
            final.push(el)
        }
    })
    return final
}


// let arr = [-3,1,2,3,-1,4,-2];
// console.log(loneN(arr))

// SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO UN NUMERO E RITORNA UN NUMERO FORMATO DAI QUADRATI DI OGNI CIFRA PRESENTE IN INGRESSO. AD ESEMPIO 372 => 9494

function quadrati(num) {

    return  Number(num.toString().split('').map(el=> el = el**2).join(''))
    
}

let num = 123;

// console.log(quadrati(num));

// SCRIVERE UNA FUNZIONE CHE UNISCA DIE ARRAY DI NUMERI, ORDINANDOLI IN MODO DECRESCENTE ED ELIMINANDO I DUPLICATI AD ESEMPIO 

// [2,1],[1,2,3] =>[3,2,1]

function combine(arr1,arr2) {
    arr1.forEach(el =>{
        arr2.push(el)
    })

    let ver = Array.from(new Set(arr2))

    return ver.sort((a,b)=> b-a)
}

// console.log(combine([2,1],[1,2,3]));

// ABBIAMO UNA STRINGA DI PAROLE OGNI PAROLA CONTIENE UN NUMERO. SCRIVERE UNA FUNZIONE CHE RITORNI LA STRINGA ORDINATA IN BASE AL NUMERO PRESENTE IN OGNI PAROLA AD ESEMPIO 'Is2 Thi1s T4est 3a' => 'Thi1s Is2 3a T4est'


function orderW(str) {
    str = str.split(' ');

    let final = [];

    
    for(let i=1; i<=str.length;i++){
        
        final.push(str.find(el => el.includes(i.toString())))


    }

    return final.join(' ')
    
}

// let str = 'Is2 Thi1s T4est 3a';

// console.log(orderW(str));

// UN ISOGRAMMA E' UNA PAROLA ALL'INTERNO DELLA QUALE OGNI LETTERA COMPARE UNA ED UNA SOLA VOLTA AS ESEMPIO CIAO MA NON BARCA. SCRIVERE UNA FUNZIONE CHE DETERMINI SE UNA STRINGA è UN ISOGRAMMA. MAIUSCOLE E MINUSCOLE SONO CONSIDERATE UGUALI IN DERMINI DI PRESENZA


function iso(str) {

    return str == Array.from(new Set(str.split(''))).join('')
    
}

// console.log(iso('buongiorno'));

// SCRIVERE UNA FUNZIONE CHE ACCETTA IN INGRESSO 2 ARRAY E NE RITORNI LA DIFFERENZA. OSSIA RESTITUISTA IL PRIMO ARRAY PRIVO DEGLI ELEMENTI DEL SECONDO


function diffArr(arr1,arr2) {

    let final=[];

     arr1.map((el,i)=>{
        if(!arr2.includes(el)){
            final.push(el)
        }

    })

 return final

    
}

// let arr1=[1,2,3,4,5]

// let arr2=[1]

// console.log(diffArr(arr1,arr2));


// SCRIVERE UNA FUNZIONE CHE RITORNI I GIORNI MANCATI FINO A NATALE

function untilXmas() {

    let xmas = new Date ('25 December, 2022')

    let today = Date()
    
    let until = xmas-today

    console.log(until);
}


// SCRIVERE UNA FUNZIONE CHE ACCETTA UN ARRAY DI DIECI CIFRE E RESTITUISCA UNA STRINGA FORMATTATA COME UN NUMERO DI TELEFONO.A

// AD ESEMPIO [1,2,3,4,5,6,7,8,9,0] => '(123) 456-7890'

function phoneNumber(arr) {

    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
    
}

// let arr =[1,2,3,4,5,6,7,8,9,0];

// console.log(phoneNumber(arr));


// VIENE FORNITO UN ARRAY DI NUMERI, TUTTI UGUALI TRANNE UNO. SCRIVERE UNA FUNZIONE CHE RITORNI L'ESTRANEO. AD ESEMPIO [3,3,3,2,3,3,3,3,3,]=>2


function estraneo(arr) {

    arr = arr.sort((a,b)=> a-b)

    if(arr[0]==arr[1]){
        return arr[arr.length-1]
    } else return arr[0]

    console.log(arr);
    
}

// let arr= [3,3,3,3,4,3,3,3,3,3,3,3];

// console.log(estraneo(arr));


// SCRIVERE UNA FUNZIONE CHE ACCETTA UN ANNO E RITORNA I 'VENERDI 17' PRESENTI IN QUELL'ANNO, SOTTO FORMA DI ARRAY 

function friday(year) {


    
}

// SCRIVERE UNA FUNZIONE CHE ACCETTA COME PARAMETRO UN NUMERO N E:

// - GENERA LA SEQUENZA DI FIBONACCI DI LUNGHEZZA N (E LA STAMPI IN CONSOLE)
// - CALCOLA IL RAPPORTO FRA DUE TERMINI CONSECUTIVI DELLA STESSA(I RAPPORTI APPROSSIMANO LA SEZIONE AUREA,E LI STAMPA)
// - STAMPA UN ARRAY CON LE DIFFERENZE FRA TERMINI CONSECUTIVI DEI RAPPORTI 


function fib(num) {

    let fibo =[1,1];

    for (let i = 2; i < num; i++){
        
        fibo.push(fibo[i-2]+fibo[i-1])

    }

    console.log(fibo);

    let rapporto=[]





    
}

// fib(10)


// SCRIVERE UNA FUNZIONE CHE ASSEGNATA UNA STRINGA RESTITUISCA UN OGGETTO 'PAROLA' : FREQUENZA, ORDINATO PER FREQUENZA DECRESCENTE.
// PRIMA DI PORCESSARE LA STRINGA, RIPULIRLA DA PAROLE INUTILI (ARTICOLI,PREPOSIZIONI,...) E PUNTEGGIATURA

function cWordEx(str) {

    let del = ['di','a','da','in','con','su','per','tra','fra','il','le','lo','gli','la','e','ma','al','che','un','una','e','del','delle','della'];

    str = str.replace(/[.,]/g,'');

    str = str.toLowerCase().split(' ');

    str = str.filter(el =>
        !del.includes(el)  
    )

    let norep = Array.from(new Set(str))

    let appoggio = norep.map((el,i)=> [el, str.filter(val => val == el).length])

    appoggio = appoggio.sort((a,b)=> b[1]-a[1])

    let final = Object.fromEntries(appoggio)

    return final;


}

// let str = 'Gareth Damian Martin è un autore di videogiochi nel senso più puro del termine, perché non solo crea le sue opere in una quasi perfetta solitudine, determinandone quindi grandezza e limiti, ma ciò che fa si pone sempre in modo critico verso il medium e alcune delle sue forme più consolidate. In Other Waters, il suo primo gioco, fu concepito proprio in antitesi al concetto di aggressività che domina spesso i videogiochi, anche quelli apparentemente più innocui.'

// cWordEx(str)
