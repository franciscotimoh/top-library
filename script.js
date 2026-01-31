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
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead) {
    newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, true);
addBookToLibrary("Dune", "Frank Herbert", 489, false);
addBookToLibrary("12 Rules for Life: An Antidote to Chaos", "Jordan B. Peterson", 448, true); 

console.log(myLibrary);
