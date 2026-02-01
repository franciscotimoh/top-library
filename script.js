let myLibrary = [];

/**
 * Book object with title, author, pages, and whether or not you have read the book.
 * @param {title} - title of the book
 * @param {author} - author of the book
 * @param {pages} - number of pages of the book
 * @param {read} - whether or not you have read the book
 */
function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const readOrNot = (this.read === "read") ? "read" : "not read yet";  
        return `${this.title} by ${this.author}, ${this.pages.toString()} pages, ${readOrNot}.`;
    }
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead) {
    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, "read");
addBookToLibrary("Dune", "Frank Herbert", 489, "not read");
addBookToLibrary("12 Rules for Life: An Antidote to Chaos", "Jordan B. Peterson", 448, "read"); 

const libraryPage = document.querySelector(".library");

// function addReadStatusSwitch(card, book) {
//     const actions = document.createElement("div");
//     actions.classList.add("actions");
//     const readStatus = document.createElement("img");
//     if (book.read === "read") {
//         readStatus.src = "./icons/eye-remove-outline.svg";
//         readStatus.alt = "Mark as Unread";
//     } else {
//         readStatus.src = "./icons/eye-outline.svg";
//         readStatus.alt = "Mark as Read"
//     }
// }

function addRemoveCardButton(card) {
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("actions");
    const removeCard = document.createElement("img"); 
    removeCard.src = "./icons/close-circle-outline.svg";
    removeCard.alt = "Remove Card";
    removeCard.classList.add("remove");
    removeCard.addEventListener('click', (event) => {
        card.remove();
        myLibrary = myLibrary.filter(book => book.id !== card.dataset.bookId);
        console.log(myLibrary);
    })
    actionsContainer.appendChild(removeCard);
    return actionsContainer;
}

function addBookText(book) {
    const bookInfoContainer = document.createElement("div"); 
    bookInfoContainer.classList.add("content");
    bookInfoContainer.textContent = book.info();
    return bookInfoContainer; 
}

function displayBook(book) {
    const card = document.createElement("div");
    const actionsContainer = addRemoveCardButton(card);
    card.appendChild(actionsContainer);
    addRemoveCardButton(card);
    const bookInfoContainer = addBookText(book);
    card.appendChild(bookInfoContainer); 
    card.classList.add("book");
    card.dataset.bookId = book.id;
    libraryPage.appendChild(card);
}

for (const book of myLibrary) {
    displayBook(book);
}

const form = document.querySelector('.addBook');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBook = new Book(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('read'));
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBook(newBook);
});

