  // JavaScript per gestire la modifica del profilo
  document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recupera i valori inseriti dall'utente
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const profilePicture = document.getElementById('profilePicture').value;


    // Dopo aver inviato i dati, puoi aggiornare l'interfaccia utente per riflettere le modifiche
    
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Profile Picture:', profilePicture);
});