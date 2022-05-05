// Scrivi due funzioni una che prenda in input un array di numeri e restituisca il maggiore,
// l'altra che restituisca il minore.
// Esempio:
// Input: a = 1, b = -10, c = 4
// Output: minore = -10, maggiore = 4




function max(array) {

   let max = Math.max(...array);
   let maxval = (`maggiore = ${max}`);

 return maxval;
}


function min(array) {
    
    let min = Math.min(...array);

    let minval = (`minore = ${min}`);


    return minval;
}


let input =[-1,-10,-4,-50];

console.log(min(input));