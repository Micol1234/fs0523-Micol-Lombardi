class BankAccount {
    protected balance: number = 0;
  
    constructor(initialBalance: number = 0) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente per il prelievo.");
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  class SonAccount extends BankAccount {
    oneDeposit(amount: number): void {
      this.deposit(amount);
    }
  
    oneWithdraw(amount: number): void {
      this.withdraw(amount);
    }
  }
  
  class MotherAccount extends BankAccount {
    addInterest(): void {
      const interestRate = 0.1; // 10%
      const interest = this.balance * interestRate;
      this.deposit(interest);
    }
  }
  
  
  // Esempio di utilizzo
  const sonAccount = new SonAccount();
  const motherAccount = new MotherAccount();
  
  sonAccount.oneDeposit(100);
  sonAccount.oneWithdraw(30);
  
  motherAccount.deposit(200);
  motherAccount.withdraw(50);
  motherAccount.addInterest();
  
  console.log("Saldo conto figlio:", sonAccount.getBalance());
  console.log("Saldo conto madre:", motherAccount.getBalance());