"use strict";
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = 0;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente per il prelievo.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SonAccount extends BankAccount {
    oneDeposit(amount) {
        this.deposit(amount);
    }
    oneWithdraw(amount) {
        this.withdraw(amount);
    }
}
class MotherAccount extends BankAccount {
    addInterest() {
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
