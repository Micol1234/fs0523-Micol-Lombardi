/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(){
   
    return 11*12;
}
console.log(area())

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a,b){
    if (a==b){
        return (a+b)*3
    }
    else{ 
        return a+b
    }
}
crazySum(4,6)
crazySum(5,5)
console.log(crazySum(4,6))
console.log(crazySum(5,5))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    let differenza = Math.abs(numero - 19)
  
    if (numero > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
}
  
  crazyDiff(22); 
  crazyDiff(15);  
  
  console.log(crazyDiff(22));
  console.log(crazyDiff(15));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true
    } else {
      return false
    }
  }

  let dato1 = 50  
let dato2 = 150
let dato3= 400

console.log(boundary(dato1)) 
console.log(boundary(dato2)) 
console.log(boundary(dato3))






/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa 
    } else {
      return "EPICODE " + stringa
    }
  }
 epify("School");  
 epify("EPICODE Class")
  console.log(epify("School"))
console.log(epify("EPICODE Class"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number){
    if(number>0 && number % 3== 0 || number % 7 == 0){
        return true
    }
    else{ return false}
}
let d=check3and7(10)
let e=check3and7(9)
let f=check3and7(14)
let g=check3and7(-2)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {

    let stringaInvertita = stringa.split('').reverse().join('');
    return stringaInvertita;
  }
  let stringaOriginale = "EPICODE";
let stringaInvertita = reverseString(stringaOriginale)
console.log(stringaInvertita)
 






/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {

    let parole = stringa.split(' ')
  
    for (let i = 0; i < parole.length; i++) {
      parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1)
    }
  
    let maiuscole = parole.join(' ')
  
    return maiuscole
  }
  
  let string = "il cielo è blu"
  let maiuscole = upperFirst(string);
  console.log(maiuscole); 

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
   if (stringa.length >= 2) {
      
      return stringa.slice(1, -1)
    } else {
      
      return "nulla"
    }
  }
  

  let stringaIntera = "Hello"
  let stringaTagliata = cutString(stringaIntera)
  console.log(stringaTagliata)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    var numeriCaso = [];
    
    for (var i = 0; i < n; i++) {
      let numeroCasuale = Math.floor(Math.random() * 11);
     
      numeriCaso.push(numeroCasuale);
    }
    
    return numeriCaso;
  }
  
  let insieme = giveMeRandom(5);
  console.log(insieme)
  
  
  
  
  
  
