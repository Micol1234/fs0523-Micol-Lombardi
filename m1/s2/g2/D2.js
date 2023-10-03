/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1=10
let n2=20
let numeroMaggiore
if(n1>n2){numeroMaggiore=10
  console.log(numeroMaggiore)}
  else{
    numeroMaggiore=20
    console.log(numeroMaggiore)
  }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let number=5
let number2=3
if(number!=number2){
  console.log("not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let multiplo=15
let div=5
if(multiplo % div==0){
  console.log("divisibile")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1=0
let num2=8
if(num1=8 || num2==8 || num1+num2 == 8){
  console.log("true")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart= 40
let shipping=10
if(totalShoppingCart>50){
  console.log(totalShoppingCart)
}
else{
console.log(totalShoppingCart+shipping)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let discount=8
if(totalShoppingCart>50){
  console.log(totalShoppingCart-8)
}
else{
  console.log(totalShoppingCart+shipping-discount)
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let n4=34
let n5=54
let n6=23
if(n5>n4 && n4>n6){
 console.log(n5, n4, n6)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let nome= "casa"
console.log(typeof "casa")

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isDisparo(num){
  let risultato = num % 2;
  if (risultato == 0){
    return false;
  }else if(risultato == 1){
    return true;
  }else{
    alert("Non è un numero intero");
    return "";
  }
}

console.log(isDisparo(5));
    // true = disparo


console.log(isDisparo(8));
    // false = paro

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val=7
if(val<10){
  console.log("Meno di 10")
}
else if(val<5){
  console.log("false")}
  else if(val>=10){
    console.log("false")
  }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',

  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me.lastName)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log(me.skills)
let lasT=me.skills.pop("css")
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

 const numb={
  lista:[]
 }
 numb.lista= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numb.lista)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let last=numb.lista.pop(10)
console.log(numb.lista)
numb.lista.push(100)