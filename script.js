const container = document.getElementById('container');
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
});

let library = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

library[0] = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
library[1] = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, "not read yet");
library[2] = new Book("The Two Towers", "J.R.R. Tolkien", 352, "not read yet");
library[3] = new Book("The Return of the King", "J.R.R. Tolkien", 416, "not read yet");
library[4] = new Book("The Silmarillion", "J.R.R. Tolkien", 365, "not read yet");

openForm = () => { document.getElementById('form').style.display = 'block'; }
closeForm = () => { document.getElementById('form').style.display = 'none'; }

function addBookToLibrary() {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    let bookStatus = document.getElementById('status').checked;
    if (bookStatus === false) {
        bookStatus = "not read yet";
    } else {
        bookStatus = "read";
    }
    
    library[library.length] = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    displayBooks();
}

function displayBooks() {
    container.innerHTML = '';

    library.forEach(book => {
        let bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;

        let infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');

        let bookInfo = document.createElement('div');
        bookInfo.classList.add('bookInfo');

        let bookAuthor = document.createElement('span');
        const boldAuthor = document.createElement('strong');
        boldAuthor.textContent = 'Author: ';
        bookAuthor.appendChild(boldAuthor);
        bookAuthor.append(book.author);

        let bookPages = document.createElement('span');
        const boldPages = document.createElement('strong');
        boldPages.textContent = 'Pages: ';
        bookPages.appendChild(boldPages);
        bookPages.append(book.pages);

        let bookStatus = document.createElement('span');
        const boldStatus = document.createElement('strong');
        boldStatus.textContent = 'Status: ';
        bookStatus.appendChild(boldStatus);
        bookStatus.append(book.status);

        container.appendChild(infoContainer);
        infoContainer.appendChild(bookTitle);
        infoContainer.appendChild(bookInfo);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);
        bookInfo.appendChild(bookStatus);
    });
}

displayBooks();