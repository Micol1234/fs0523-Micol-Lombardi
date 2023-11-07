// Funzione per salvare il nome in localStorage come JSON
document.getElementById('saveButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const data = { name: name };
    localStorage.setItem('userData', JSON.stringify(data));
    document.getElementById('savedName').textContent = name;
});

// Funzione per rimuovere il nome da localStorage
document.getElementById('removeButton').addEventListener('click', function() {
    localStorage.removeItem('userData');
    document.getElementById('nameInput').value = '';
    document.getElementById('savedName').textContent = '';
});

// Funzione per avviare e aggiornare il contatore di tempo
function updateCounter() {
    let time = sessionStorage.getItem('timeCounter');
    if (time === null) {
        time = 0;
    } else {
        time = parseInt(time);
    }
    time++;
    sessionStorage.setItem('timeCounter', time);
    document.getElementById('timeCounter').textContent = time + ' secondi';
}

// Avvia il contatore e aggiorna ogni secondo
updateCounter();
setInterval(updateCounter, 1000);

// Recupera e mostra il nome precedentemente salvato come JSON
const userData = localStorage.getItem('userData');
if (userData) {
    const data = JSON.parse(userData);
    document.getElementById('savedName').textContent = data.name;
    document.getElementById('nameInput').value = data.name;
}