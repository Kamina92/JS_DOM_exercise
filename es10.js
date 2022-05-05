
// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
// FALSE altrimenti.
// Esempi:
//   Input: n = 2, m = 3
//   Output: FALSE
//   Input: n = 2, m = '2'
//   Output: FALSE
//   Input: n = 2, m = 2
//   Output: TRUE


function identici(num1,num2) {
    
    if (num1 == num2) {
        return true
    } else return false
    
}

let a = identici(4,4);
console.log(a);