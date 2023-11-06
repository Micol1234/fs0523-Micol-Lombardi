class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

const utente1 = new User("Alice", "Rossi", 30, "Milano");
const utente2 = new User("Bob", "Verdi", 25, "Roma");

let confrontoEta = "";
if (utente1.age < utente2.age) {
    confrontoEta = `${utente1.firstName} è più giovane di ${utente2.firstName}`;
} else if (utente1.age > utente2.age) {
    confrontoEta = `${utente1.firstName} è più vecchio di ${utente2.firstName}`;
} else {
    confrontoEta = `${utente1.firstName} ha la stessa età di ${utente2.firstName}`;
}

document.getElementById("confrontoEta").textContent = confrontoEta;