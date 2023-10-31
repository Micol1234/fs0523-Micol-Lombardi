document.addEventListener("DOMContentLoaded", function() {
    const numViaggi = document.querySelectorAll(".viaggio-card").length;
    alert(`Sulla pagina ci sono ${numViaggi} viaggi disponibili.`);
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".welcome-summer-card");
    cards.forEach(function(card) {
        const badge = document.createElement("span");
        badge.className = "badge badge-danger";
        badge.textContent = "HOT";
        card.appendChild(badge);
    });
});


function rimuoviTutteCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.remove();
    });
}







