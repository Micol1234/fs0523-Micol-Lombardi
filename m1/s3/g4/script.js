var numeriEstratti = [];
var numeriGiocatore = [];
var numeroTabelline = 1; // Numero di tabelline di default

function generaNumeriGiocatore(tabellinaIndex) {
    numeriGiocatore[tabellinaIndex] = [];
    while (numeriGiocatore[tabellinaIndex].length < 24) {
        var numeroCasuale = generaNumeroCasuale();
        if (!numeriGiocatore[tabellinaIndex].includes(numeroCasuale)) {
            numeriGiocatore[tabellinaIndex].push(numeroCasuale);
        }
    }
}

function creaTabellineGiocatore() {
    var tabellineGiocatoreContainer = document.getElementById("tabellineGiocatoreContainer");
    tabellineGiocatoreContainer.innerHTML = "";

    for (var i = 0; i < numeroTabelline; i++) {
        generaNumeriGiocatore(i);
        var tabellinaGiocatore = document.createElement("table");
        tabellinaGiocatore.innerHTML = "<h2>Tabellina del Giocatore " + (i + 1) + "</h2>";
        var tabellinaBody = document.createElement("tbody");
        numeriGiocatore[i].forEach(function (numero) {
            var cella = document.createElement("td");
            cella.textContent = numero;
            cella.dataset.numero = numero;
            cella.addEventListener("click", function () {
                this.classList.toggle("highlighted");
            });
            tabellinaBody.appendChild(cella);
        });
        tabellinaGiocatore.appendChild(tabellinaBody);
        tabellineGiocatoreContainer.appendChild(tabellinaGiocatore);
    }
}

function generaNumeroCasuale() {
    return Math.floor(Math.random() * 76) + 1;
}

function numeroEstratto(numero) {
    return numeriEstratti.includes(numero);
}

function estraiNumero() {
    if (numeriEstratti.length === 76) {
        alert("Hai estratto tutti i numeri!");
        return;
    }

    var numeroCasuale;
    do {
        numeroCasuale = generaNumeroCasuale();
    } while (numeroEstratto(numeroCasuale));

    numeriEstratti.push(numeroCasuale);

    var cellaCorrispondente = document.querySelector(`td[data-numero="${numeroCasuale}"]`);
    if (cellaCorrispondente) {
        cellaCorrispondente.classList.add("highlighted");
    }

    numeriGiocatore.forEach(function (tabellina, tabellinaIndex) {
        var cellaTabellina = document.querySelector(`table:nth-child(${tabellinaIndex + 2}) td[data-numero="${numeroCasuale}"]`);
        if (cellaTabellina) {
            cellaTabellina.classList.add("highlighted");
        }
    });
}

var numeroTabellineInput = document.getElementById("numeroTabelline");
numeroTabellineInput.addEventListener("change", function () {
    numeroTabelline = parseInt(numeroTabellineInput.value);
});

var creaTabellineButton = document.getElementById("creaTabellineButton");
creaTabellineButton.addEventListener("click", function () {
    creaTabellineGiocatore();
    abilitaEstrazione();
});

var estrazioneButton = document.getElementById("estrazioneButton");
estrazioneButton.addEventListener("click", estraiNumero);

function abilitaEstrazione() {
    estrazioneButton.removeAttribute("disabled");
}

function inizializzaTabellone() {
    var tabellone = document.getElementById("tabellone");
    for (var i = 1; i <= 76; i++) {
        var cella = document.createElement("td");
        cella.textContent = i;
        cella.dataset.numero = i;
        cella.addEventListener("click", function () {
            this.classList.toggle("highlighted");
        });
        tabellone.appendChild(cella);
    }
}

inizializzaTabellone();
