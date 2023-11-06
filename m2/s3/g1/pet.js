class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    condividonoPapàAlbero(pet) {
        return this.ownerName === pet.ownerName;
    }
}

const pets = [];

function creaPet() {
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

    aggiornaListaPet();
}

function aggiornaListaPet() {
    const listaPet = document.getElementById("listaPet");
    listaPet.innerHTML = "";

    pets.forEach(pet => {
        const listItem = document.createElement("li");
        listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        listaPet.appendChild(listItem);
    });
}