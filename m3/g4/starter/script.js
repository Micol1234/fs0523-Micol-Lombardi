"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Definizione della classe CapoAbbigliamento
class CapoAbbigliamento {
    // Costruttore
    constructor(data) {
        this.id = data.id;
        this.codprod = data.codprod;
        this.collezione = data.collezione;
        this.capo = data.capo;
        this.modello = data.modello;
        this.quantita = data.quantita;
        this.colore = data.colore;
        this.prezzoivaesclusa = data.prezzoivaesclusa;
        this.prezzoivainclusa = data.prezzoivainclusa;
        this.disponibile = data.disponibile;
        this.saldo = data.saldo;
    }
    // Metodo per ottenere il saldo del capo
    getsaldocapo() {
        return this.saldo;
    }
    // Metodo per ottenere il costo totale del capo
    getacquistocapo() {
        return this.prezzoivainclusa - this.saldo;
    }
}
// Funzione per eseguire la fetch dell'API
function fetchAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'starter/Abbigliamento.json';
        try {
            const response = yield fetch(apiUrl);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Errore durante la fetch dell\'API:', error);
            throw error;
        }
    });
}
// Funzione per creare un oggetto CapoAbbigliamento e utilizzare i metodi
function eseguiOperazioni() {
    fetchAPI().then(data => {
        // Esempio: Creazione di un oggetto CapoAbbigliamento con i dati dell'API
        const primoCapo = new CapoAbbigliamento(data[0]);
        // Esempio di utilizzo dei metodi della classe
        console.log(`Saldo del capo: ${primoCapo.getsaldocapo()}`);
        console.log(`Costo totale del capo: ${primoCapo.getacquistocapo()}`);
    });
}
// Chiamata alla funzione eseguiOperazioni
eseguiOperazioni();
