// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
//   Nel controllo scarta gli spazi e i segni di punteggiatura.

//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE
// str.replace(/\W/g, "").


function palindroma(text) {
    

    let textnospace= text.replace(/\W/g, "");

    let textr="";

    let textlen = textnospace.length;

    for (let i = 0; i <= textlen; i++) {
    
        textr+= textnospace.charAt(textlen-i);
    
    }

    if (textnospace !== textr) {
    return false;
    } else return true;
    
}

let input = "i topi non avevano nipoti";

console.log(palindroma(input));