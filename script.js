const container = document.getElementById('container');
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
});

let library = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

library[0] = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
library[1] = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, "not read yet");
library[2] = new Book("The Two Towers", "J.R.R. Tolkien", 352, "not read yet");
library[3] = new Book("The Return of the King", "J.R.R. Tolkien", 416, "not read yet");
library[4] = new Book("The Silmarillion", "J.R.R. Tolkien", 365, "not read yet");

openForm = () => { 
    document.getElementById('form').style.display = 'block'; 
    document.getElementById('popup-bg').classList.add('popup-bg');
}

closeForm = () => { 
    document.getElementById('form').style.display = 'none'; 
    document.getElementById('popup-bg').classList.remove('popup-bg');
    addBookToLibrary();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('status').checked = false;
}

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

    for (let i = 0; i < library.length; i++) {
        let bookTitle = document.createElement('h3');
        bookTitle.textContent = library[i].title;

        let infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');

        let bookInfo = document.createElement('div');
        bookInfo.classList.add('bookInfo');

        let bookAuthor = document.createElement('span');
        const boldAuthor = document.createElement('strong');
        boldAuthor.textContent = 'Author: ';
        bookAuthor.appendChild(boldAuthor);
        bookAuthor.append(library[i].author);

        let bookPages = document.createElement('span');
        const boldPages = document.createElement('strong');
        boldPages.textContent = 'Pages: ';
        bookPages.appendChild(boldPages);
        bookPages.append(library[i].pages);

        let bookStatus = document.createElement('span');
        const boldStatus = document.createElement('strong');
        boldStatus.textContent = 'Status: ';
        bookStatus.appendChild(boldStatus);
        bookStatus.append(library[i].status);

        let editContainer = document.createElement('div');
        editContainer.classList.add('edit-container');

        let removeButton = document.createElement('div');
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', function () {
            library.splice(i, 1);
            container.innerHTML = '';
            displayBooks();
        });

        let readButton = document.createElement('div');
        readButton.classList.add('readButton');
        readButton.addEventListener('click', function () {
            if (library[i].status === "not read yet") {
                library[i].status = "read";
                container.innerHTML = '';
                displayBooks();
            }
            else {
                library[i].status = "not read yet";
                container.innerHTML = '';
                displayBooks();
            }
        });

        container.appendChild(infoContainer);
        infoContainer.appendChild(bookTitle);
        infoContainer.appendChild(bookInfo);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);
        bookInfo.appendChild(bookStatus);
        infoContainer.appendChild(editContainer);
        editContainer.appendChild(readButton);
        editContainer.appendChild(removeButton);
    }
}

displayBooks();