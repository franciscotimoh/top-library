const myLibrary = [];

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

function displayBook(book) {
    // given a book, make and display it as a card in library page
    const card = document.createElement("div");
    card.classList.add("book");
    card.textContent = book.info();
    libraryPage.appendChild(card);
}

for (const book of myLibrary) {
    displayBook(book);
}

const form = document.querySelector('.addBook');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get('title'));
    console.log(formData.get('author'));
    console.log(formData.get('pages'));
    console.log(formData.get('read'));
})

