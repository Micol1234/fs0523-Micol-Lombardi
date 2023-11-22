abstract class LavoratoreAutonomo {
    protected codredd: number;
    protected redditoannuolordo: number;
    protected tasseinps: number;
    protected tasseirpef: number;
  
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
  
    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
  
    calcolaRedditoNetto(): number {
      return this.redditoannuolordo - this.getUtileTasse() - this.getTasseInps();
    }
  }
  
  class LavoratoreAutonomoA extends LavoratoreAutonomo {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      super(1, redditoannuolordo, tasseinps, tasseirpef);
    }
  
    getUtileTasse(): number {
      // Implementazione specifica per LavoratoreAutonomoA
      return this.redditoannuolordo * 0.2;
    }
  
    getTasseInps(): number {
      // Implementazione specifica per LavoratoreAutonomoA
      return this.tasseinps + this.redditoannuolordo * 0.1;
    }
  }
  
  class LavoratoreAutonomoB extends LavoratoreAutonomo {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      super(2, redditoannuolordo, tasseinps, tasseirpef);
    }
  
    getUtileTasse(): number {
      // Implementazione specifica per LavoratoreAutonomoB
      return this.redditoannuolordo * 0.15;
    }
  
    getTasseInps(): number {
      // Implementazione specifica per LavoratoreAutonomoB
      return this.tasseinps + this.redditoannuolordo * 0.08;
    }
  }
  
  const lavoratoreA = new LavoratoreAutonomoA(50000, 2000, 3000);
  console.log("Reddito Netto Lavoratore A:", lavoratoreA.calcolaRedditoNetto());
  
  const lavoratoreB = new LavoratoreAutonomoB(60000, 2500, 3500);
  console.log("Reddito Netto Lavoratore B:", lavoratoreB.calcolaRedditoNetto());