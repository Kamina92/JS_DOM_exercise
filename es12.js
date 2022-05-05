// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
//   Nel controllo scarta gli spazi e i segni di punteggiatura.

//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE



function palindromi() {
 let text =['i','t','o','p','i','n','o','n','a','v','e','v','a','n','o','n','i','p','o','t','f'];
 let texttemp=text;
 console.log(texttemp);
 text.reverse();
 console.log(text);

let control =0;

    for (let i = 0; i <= text.length; i++) {
        
        if (texttemp[i] != text[i] ) {
            control = 1;
        }
        
        
    } 

    if (control == 1) {

        return false;
        
    } else{
        return true;
    }
  
}

console.log(palindromi());

