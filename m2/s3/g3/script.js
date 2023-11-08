document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
    const cartList = document.getElementById("cart");

    // Funzione per caricare i libri dalla chiamata API
    async function fetchBooks() {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/books");
            const data = await response.json();

            data.forEach((book) => {
                const card = createBookCard(book);
                bookList.appendChild(card);
            });
        } catch (error) {
            console.error("Errore nel recupero dei libri:", error);
        }
    }

    // Funzione per creare una card per un libro
    function createBookCard(book) {
        const card = document.createElement("div");
        card.classList.add("col-md-3", "mb-4");

        card.innerHTML = `
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Prezzo: ${book.price} €</p>
                    <button class="btn btn-primary" onclick="addToCart('${book.title}', ${book.price})">Aggiungi al Carrello</button>
                    <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
                </div>
            </div>
        `;

        return card;
    }

    // Funzione per aggiungere un libro al carrello
    function addToCart(title, price) {
        const cartItem = document.createElement("li");
        cartItem.classList.add("list-group-item");
        cartItem.innerHTML = `${title} - ${price} € <button class="btn btn-danger" onclick="removeFromCart(this)">Rimuovi</button>`;
        cartList.appendChild(cartItem);

        updateCartStorage();
    }

    // Funzione per rimuovere una card
    function removeCard(button) {
        const card = button.closest(".col-md-3");
        card.remove();
    }

    // Funzione per rimuovere un libro dal carrello
    function removeFromCart(button) {
        const cartItem = button.parentElement;
        cartItem.remove();

        updateCartStorage();
    }

    // Funzione per aggiornare i dati nel localStorage
    function updateCartStorage() {
        const cartItems = cartList.querySelectorAll("li");
        const cartData = [];

        cartItems.forEach((item) => {
            const itemText = item.textContent.split(" - ");
            const title = itemText[0];
            const price = parseFloat(itemText[1].split(" €")[0]);
            cartData.push({ title, price });
        });

        localStorage.setItem("cartData", JSON.stringify(cartData));
    }

    // Carica i libri al caricamento della pagina
    fetchBooks();

    // Carica i dati del carrello dal localStorage
    const storedCartData = JSON.parse(localStorage.getItem("cartData") || "[]");
    storedCartData.forEach((item) => {
        addToCart(item.title, item.price);
    });
});