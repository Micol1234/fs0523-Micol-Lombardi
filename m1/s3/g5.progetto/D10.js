/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics


const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;

console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);

console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Micol",
  surname: "Lombardi",
  age: 23 
};

console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "Python", "Java", "C++"];

console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Ruby");

console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
let risultato = dice();
console.log(`Il dado ha mostrato il numero: ${risultato}`);
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let numeroMaggiore = whoIsBigger(10, 20);
console.log(`Il numero maggiore è: ${numeroMaggiore}`);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(inputString) {
  let words = inputString.split(' ');
  return words;
}
let inputString = "Hello World";
let parole = splitMe(inputString);
console.log(parole);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(inputString, deleteFirst) {
  if (deleteFirst === true) {
    return inputString.substring(1); 
  } else {
    return inputString.substring(0, inputString.length - 1); 
  }
}

let stringa1 = "Hello";
let risultato1 = deleteOne(stringa1, true); 
console.log(risultato1);

var stringa2 = "World";
var risultato2 = deleteOne(stringa2, false); 
console.log(risultato2);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(inputString) {
  let risultatO = '';
  for (var i = 0; i < inputString.length; i++) {
    var carattere = inputString.charAt(i);
    if (isNaN(carattere)) {
      risultatO += carattere;
    }
  }
  return risultatO;
}

let stringaConCifre = "H3ll0 W0r1d";
let risultatO = onlyLetters(stringaConCifre);
console.log(risultatO);
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(inputString) {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(inputString);
}

let email1 = "email@example.com";
let risultato10 = isThisAnEmail(email1);
console.log(risultato10); 

let email2 = "invalid_email";
let risultato20 = isThisAnEmail(email2);
console.log(risultato20); 

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  
  
  let dataCorrente = new Date();
  

 let indiceGiorno = dataCorrente.getDay();
  
  
  let giornoCorrente = giorniSettimana[indiceGiorno];
  
  return giornoCorrente;
}
let giornoCorrente = whatDayIsIt();
console.log("Oggi è " + giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollTheDices(numeroDiVolte) {
  var sum = 0;
  let values = [];

  for (let i = 0; i < numeroDiVolte; i++) {
    let result = dice();
    sum += result;
    values.push(result);
  }

  let risultatoFinale = {
    sum: sum,
    values: values
  };

  return risultatoFinale;
}


let lanci = rollTheDices(5);
console.log("Somma: " + lanci.sum);
console.log("Valori lanciati: " + lanci.values);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(dataIniziale) {
  let dataAttuale = new Date();
  let differenzaInMillisecondi = dataAttuale - dataIniziale;
  let differenzaInGiorni = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));
  return differenzaInGiorni;
}

let dataIniziale = new Date('2023-01-01'); 
let giorniTrascorsi = howManyDays(dataIniziale);
console.log("Sono trascorsi " + giorniTrascorsi + " giorni dalla data iniziale.");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  
  let dataAttuale = new Date();
  
 
  let dataCompleanno = new Date(dataAttuale.getFullYear(), MeseDelCompleanno - 1, GiornoDelCompleanno);

  if (dataAttuale.getMonth() === dataCompleanno.getMonth() && dataAttuale.getDate() === dataCompleanno.getDate()) {
    return true; 
  } else {
    return false; 
  }
}

let MeseDelCompleanno = 6; 
let GiornoDelCompleanno = 16;

if (isTodayMyBirthday()) {
  console.log("Buon compleanno!");
} else {
  console.log("Oggi non è il tuo compleanno.");
}
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, propertyName) {
  if (obj.hasOwnProperty(propertyName)) {
    delete obj[propertyName];
  }
  return obj;
}
const oggetto = {
  nome: "Mario",
  età: 30,
  professione: "Programmatore"
};

const nuovoOggetto = deleteProp(oggetto, "età");
console.log(nuovoOggetto);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  if (movies.length === 0) {
    return null; 
  }

  let filmPiùRecente = movies[0];

  for (const film of movies) {
    if (parseInt(film.Year) > parseInt(filmPiùRecente.Year)) {
      filmPiùRecente = film;
    }
  }

  return filmPiùRecente;
}

const filmPiùRecente = newestMovie(movies);

if (filmPiùRecente) {
  console.log("Il film più recente è:", filmPiùRecente);
} else {
  console.log("Nessun film nell'array.");
}


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}

const numeroDiFilm = countMovies(movies);
console.log("Il numero di film è:", numeroDiFilm);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const yearsArray = movies.map(film => film.Year);
  return yearsArray;
}

const anniDeiFilm = onlyTheYears(movies);
console.log("Anni di uscita dei film:", anniDeiFilm);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const currentYear = new Date().getFullYear();
  const lastMillenniumStart = currentYear - 1000;

  return movies.filter(film => {
    const filmYear = parseInt(film.Year);
    return filmYear >= lastMillenniumStart && filmYear <= currentYear;
  });
}

const filmMillennioScorso = onlyInLastMillennium(movies);
console.log("Film prodotti nel millennio scorso:", filmMillennioScorso);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  const totalYears = movies.reduce((sum, film) => sum + parseInt(film.Year), 0);
  return totalYears;
}

const sommaAnni = sumAllTheYears(movies);
console.log("Somma di tutti gli anni di produzione:", sommaAnni);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(searchString, movies) {
  const matchingMovies = movies.filter(film => film.Title.toLowerCase().includes(searchString.toLowerCase()));
  return matchingMovies;
}

const risultatoRicerca = searchByTitle("The Lord of the Rings", movies);
console.log("Risultato della ricerca:", risultatoRicerca);
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchString, movies) {
  const match = [];
  const unmatch = [];

  for (const film of movies) {
    if (film.Title.toLowerCase().includes(searchString.toLowerCase())) {
      match.push(film);
    } else {
      unmatch.push(film);
    }
  }

  return { match, unmatch };
}

const outcome = searchAndDivide("The Lord of the Rings", movies);
console.log("Risultato della ricerca:", outcome);
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index, movies) {
  if (index < 0 || index >= movies.length) {
    return movies;
  }

  const updatedMovies = [...movies];
  updatedMovies.splice(index, 1);

  return updatedMovies;
}

const indiceDaRimuovere = 1;
const moviesSenzaElemento = removeIndex(indiceDaRimuovere, movies);
console.log("Array movies senza l'elemento in posizione", indiceDaRimuovere, ":", moviesSenzaElemento);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  const containerElement = document.getElementById("container");
  return containerElement;
}
const container = selectContainerElement();
console.log(container);
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTdElements() {
  const tdElements = document.getElementsByTagName("td");
  return tdElements;
}
const tdElements = selectAllTdElements();
console.log(tdElements)
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTdText() {
  const tdElements = document.getElementsByTagName("td");

  for (let i = 0; i < tdElements.length; i++) {
    const text = tdElements[i].textContent;
    console.log(text);
  }
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  const links = document.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addListItem() {
  const myList = document.getElementById("myList");
  const newItem = document.createElement("li");
  const text = document.createTextNode("Nuovo elemento della lista");
  newItem.appendChild(text);
  myList.appendChild(newItem);
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  const myList = document.getElementById("myList");
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTableRows() {
  const tableRows = document.getElementsByTagName("tr");

  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].classList.add("test");
  }
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i); 
    let stars = "*".repeat(2 * i - 1); 
    console.log(spaces + stars);
  }
}
tree(5); 
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(num) {
  if (num <= 1) {
    return false; 
  }

  if (num <= 3) {
    return true; 
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;  
    }
  }

  return true; 
}
console.log(isItPrime(5)); 
console.log(isItPrime(10)); 
console.log(isItPrime(17));







/* Questo array viene usato per gli esercizi. Non modificarlo. */


