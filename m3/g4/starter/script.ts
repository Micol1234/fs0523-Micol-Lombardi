// Definizione del tipo per un capo di abbigliamento
type CapoAbbigliamentoData = {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
  };
  
  // Definizione della classe CapoAbbigliamento
  class CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
  
    // Costruttore
    constructor(data: CapoAbbigliamentoData) {
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
    getsaldocapo(): number {
      return this.saldo;
    }
  
    // Metodo per ottenere il costo totale del capo
    getacquistocapo(): number {
      return this.prezzoivainclusa - this.saldo;
    }
  }
  
  // Funzione per eseguire la fetch dell'API
  async function fetchAPI(): Promise<CapoAbbigliamentoData[]> {
    const apiUrl = 'starter/Abbigliamento.json'; 
    
  
    try {
      const response = await fetch(apiUrl);
      const data: CapoAbbigliamentoData[] = await response.json();
      return data;
    } catch (error) {
      console.error('Errore durante la fetch dell\'API:', error);
      throw error; 
    }
  }
  
  // Funzione per creare un oggetto CapoAbbigliamento e utilizzare i metodi
  function eseguiOperazioni() {
    fetchAPI().then(data => {
      // Esempio: Creazione di un oggetto CapoAbbigliamento con i dati dell'API
      const primoCapo: CapoAbbigliamento = new CapoAbbigliamento(data[0]);
  
      // Esempio di utilizzo dei metodi della classe
      console.log(`Saldo del capo: ${primoCapo.getsaldocapo()}`);
      console.log(`Costo totale del capo: ${primoCapo.getacquistocapo()}`);
    });
  }
  
  // Chiamata alla funzione eseguiOperazioni
  eseguiOperazioni();
  