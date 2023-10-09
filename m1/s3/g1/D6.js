/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenaStringhe(stringa1, stringa2) {

  let primiCaratteri = stringa1.slice(0, 2);
  
  let ultimiCaratteri = stringa2.slice(-3);
  

  let risultato = primiCaratteri + ultimiCaratteri
  

  let risultatoMaiuscolo = risultato.toUpperCase();
  
  console.log(risultatoMaiuscolo);
}
const stringa1 = "Hello";
const stringa2 = "world";
concatenaStringhe(stringa1, stringa2);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function generaArrayCasuale() {
  let arrayCasuale = [];

  for (let i = 0; i < 10; i++) {
    let valoreCasuale = Math.floor(Math.random() * 101)
    arrayCasuale.push(valoreCasuale); 
  }

  return arrayCasuale;
}

let arrayCasuale = generaArrayCasuale();
console.log(arrayCasuale);
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function even(array) {
  let valoriPari = array.filter((valore) => typeof valore === 'number' && valore % 2 === 0);
  return valoriPari;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valoriPari = even(arr);
console.log(valoriPari); 

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  let somma = 0;

  array.forEach((numero) => {
    if (typeof numero === 'number') {
      somma += numero;
    }
  });

  return somma;
}
let arrayDiNumeri = [1, 2, 3, 4, 5];
let risultato = sommaArray(arrayDiNumeri);
console.log(risultato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sum(array) {
  let somma = array.reduce((acc, numero) => {
    if (typeof numero === 'number') {
      return acc + numero;
    }
    return acc;
  }, 0);

  return somma;
}

let arrayNumeri = [1, 2, 3, 4, 5];
let risultatoO= sum(arrayDiNumeri);
console.log(risultato); 




/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incrementaArr(array, n) {
 
  let arrayIncrementato = array.map((valore) => {
    if (typeof valore === 'number') {
      return valore + n;
    }
    return valore;
  });

  return arrayIncrementato;
}
let numeri = [1, 2, 3, 4, 5];
let n = 10;
let arrayIncrementato = incrementaArr(numeri, n);
console.log(arrayIncrementato); 

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function lunghezzeStringhe(arrayDiStringhe) {
  let lunghezze = arrayDiStringhe.map((stringa) => stringa.length);
  return lunghezze;
}
let arrayDiStringhe = ["EPICODE", "is", "great"];
let lunghezze = lunghezzeStringhe(arrayDiStringhe);
console.log(lunghezze)
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function valoriDispari() {
  let arrayDispari = [];

  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }

  return arrayDispari;
}

let arrayDispari = valoriDispari();
console.log(arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function trovaFilmPiuVecchio(movies) {
  let filmPiuVecchio = null;

  movies.forEach((film) => {
    let annoFilm = parseInt(film.Year);

    if (!filmPiuVecchio || annoFilm < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

let filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log(filmPiuVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroDiFilm(movies) {
  return movies.length;
}
const numero = numeroDiFilm(movies);
console.log(numero);
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function titoloFilm(movies) {
  let titoli = movies.map((film) => film.Title);
  return titoli;
}

let titoliDeiFilm = titoloFilm(movies);
console.log(titoliDeiFilm);
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmDelMillennioCorrente(movies) {
  let filmMillennioCorrente = movies.filter((film) => {
    let annoUscita = parseInt(film.Year);
    return annoUscita >= 2000 && annoUscita <= 2099;
  });
  return filmMillennioCorrente;
}

const filmMillennioCorrente = filmDelMillennioCorrente(movies);
console.log(filmMillennioCorrente);
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function Produzione(movies) {
  let sommaAnni = movies.reduce((acc, film) => {
    const anno = parseInt(film.Year);
    return acc + anno;
  }, 0);

  return sommaAnni;
}

const somma = Produzione(movies);
console.log(somma); 
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaID(movies, imdbID) {
  let filmTrovato = movies.find((film) => film.imdbID === imdbID);
  return filmTrovato;
}

let iDDaCercare = 'tt0120737'; 
let filmTrovato = trovaID(movies, iDDaCercare);

if (filmTrovato) {
  console.log(filmTrovato);
} else {
  console.log('Film non trovato.');
}
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndice(movies, anno) {
 let indice = movies.findIndex((film) => parseInt(film.Year) === anno);
  return indice;
}


let anNo = 2002; 
let indiceDelFilm = trovaIndice(movies, anNo);

if (indiceDelFilm !== -1) {
  console.log(`Il primo film uscito nell'anno ${anNo} ha indice ${indiceDelFilm}.`);
} else {
  console.log(`Nessun film trovato per l'anno ${anNo}.`);
}