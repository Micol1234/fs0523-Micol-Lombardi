class Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    valuta: string;
    registroChiamate: {
      id: number;
      durata: number;
      dataOra: Date;
    }[];
  
    constructor(carica: number, costoMinuto: number, valuta: string) {
      this.carica = carica;
      this.numeroChiamate = 0;
      this.costoMinuto = costoMinuto;
      this.valuta = valuta;
      this.registroChiamate = [];
    }
  
    ricarica(euro: number): void {
      if (euro <= 0) {
        console.log("L'importo della ricarica deve essere maggiore di zero.");
      } else {
        this.carica += euro;
        console.log(`Ricarica effettuata. Nuovo credito: ${this.carica} ${this.valuta}`);
      }
    }
  
    numero404(): string {
      return `Credito residuo: ${this.carica} ${this.valuta}`;
    }
  
    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }
  
    chiamata(min: number): void {
      if (min <= 0) {
        console.log("La durata della chiamata deve essere maggiore di zero.");
        return;
      }
  
      const costoChiamata = min * this.costoMinuto;
  
      if (costoChiamata > this.carica) {
        console.log("Credito insufficiente. Ricarica il tuo telefono.");
      } else {
        this.carica -= costoChiamata;
        this.numeroChiamate++;
  
        const id = this.numeroChiamate;
        const dataOra = new Date();
        this.registroChiamate.push({ id, durata: min, dataOra });
  
        console.log(`Chiamata effettuata (${min} minuti). Credito residuo: ${this.carica} ${this.valuta}`);
      }
    }
  
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
      this.registroChiamate = [];
      console.log("Il numero di chiamate è stato azzerato.");
    }
  
    mostraRegistroChiamate(): void {
      console.log("Registro delle chiamate:");
      this.registroChiamate.forEach(chiamata => {
        console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data/Ora: ${chiamata.dataOra}`);
      });
    }
  
    filtraChiamatePerDataOra(dataOra: Date): void {
      const chiamateFiltrate = this.registroChiamate.filter(chiamata =>
        chiamata.dataOra.getTime() === dataOra.getTime()
      );
  
      if (chiamateFiltrate.length > 0) {
        console.log(`Chiamate effettuate in data/ora ${dataOra}:`);
        chiamateFiltrate.forEach(chiamata => {
          console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data/Ora: ${chiamata.dataOra}`);
        });
      } else {
        console.log(`Nessuna chiamata effettuata in data/ora ${dataOra}.`);
      }
    }
  }
  
  const smartphone = new Smartphone(50, 0.6, 'euro');
  smartphone.chiamata(8);
  smartphone.chiamata(12);
  smartphone.mostraRegistroChiamate();
  const dataOraFiltro = new Date();
  smartphone.filtraChiamatePerDataOra(dataOraFiltro);
  