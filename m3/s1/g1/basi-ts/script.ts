function gioco(numeroGiocatore1: number, numeroGiocatore2: number): void {
    // Genera un numero casuale compreso tra 1 e 100
    const numeroCasuale: number = Math.floor(Math.random() * (100 - 1) + 1);
  
    // Calcola le differenze tra i numeri dei giocatori e il numero casuale
    const diffGiocatore1: number = Math.abs(numeroGiocatore1 - numeroCasuale);
    const diffGiocatore2: number = Math.abs(numeroGiocatore2 - numeroCasuale);
  
    console.log("Numero casuale generato =", numeroCasuale);
  
    if (numeroGiocatore1 === numeroCasuale && numeroGiocatore2 === numeroCasuale) {
      console.log("Entrambi i giocatori hanno azzeccato il numero casuale!");
    } else if (numeroGiocatore1 === numeroCasuale) {
      console.log("Il giocatore 1 ha azzeccato il numero casuale!");
    } else if (numeroGiocatore2 === numeroCasuale) {
      console.log("Il giocatore 2 ha azzeccato il numero casuale!");
    } else {
      // Nessuno dei giocatori ha azzeccato il numero casuale
      if (diffGiocatore1 < diffGiocatore2) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!");
      } else if (diffGiocatore2 < diffGiocatore1) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!");
      } else {
        console.log("Nessuno dei due ha azzeccato il numero casuale, e i giocatori sono distanti ugualmente!");
      }
    }
  }
  gioco(5, 10);