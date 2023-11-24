"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    calcolaRedditoNetto() {
        return this.redditoannuolordo - this.getUtileTasse() - this.getTasseInps();
    }
}
class LavoratoreAutonomoA extends LavoratoreAutonomo {
    constructor(redditoannuolordo, tasseinps, tasseirpef) {
        super(1, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        // Implementazione specifica per LavoratoreAutonomoA
        return this.redditoannuolordo * 0.2;
    }
    getTasseInps() {
        // Implementazione specifica per LavoratoreAutonomoA
        return this.tasseinps + this.redditoannuolordo * 0.1;
    }
}
class LavoratoreAutonomoB extends LavoratoreAutonomo {
    constructor(redditoannuolordo, tasseinps, tasseirpef) {
        super(2, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        // Implementazione specifica per LavoratoreAutonomoB
        return this.redditoannuolordo * 0.15;
    }
    getTasseInps() {
        // Implementazione specifica per LavoratoreAutonomoB
        return this.tasseinps + this.redditoannuolordo * 0.08;
    }
}
const lavoratoreA = new LavoratoreAutonomoA(50000, 2000, 3000);
console.log("Reddito Netto Lavoratore A:", lavoratoreA.calcolaRedditoNetto());
const lavoratoreB = new LavoratoreAutonomoB(60000, 2500, 3500);
console.log("Reddito Netto Lavoratore B:", lavoratoreB.calcolaRedditoNetto());
