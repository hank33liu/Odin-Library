// Constants
// Constants - Books
const booksGrid = document.getElementById("books-grid"); //get div that holds the book-card divs
// Constants - Modal
const addBookBtn = document.getElementById("add-book"); //get button that opens addBookModal
const overlay = document.getElementById("modal-overlay"); //get modal overlay
const addBookForm = document.getElementById("addBookForm")
const addBookModal = document.getElementById("addBookModal"); //get addBookModal
const errorMsg = document.getElementById("error-msg") //get error-msg in addBookModal
const submitAddBookForm = document.getElementById("submit-addBookForm")

// Book constructor
class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        isRead = False
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    removeBook (title) {
        this.books = this.books.filter((book) => book.title !== title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const library = new Library();

//Submit form
const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    return new Book(title, author, pages, isRead);
}

const updateBooksGrid = () => {
    resetBooksGrid();
    for (let book of library.books) {
        createBookCard(book);
    } 
}

const resetBooksGrid =() => {
    booksGrid.innerHTML = "";
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const pages = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    if (book.read) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('read')
    } else {
        readBtn.textContent = 'Not read'
        readBtn.classList.add('unread')
    }
    removeBtn.classList.add('remove')
    readBtn.onclick = toggleRead
    removeBtn.onclick = removeBook

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    booksGrid.append(bookCard)
}

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();

    if (library.isInLibrary(newBook)) {
        errorMsg.textContent = "This book already exists in your library";
        errorMsg.style.display = "block";
        return
    }


    library.addBook(newBook)
    updateBooksGrid()
    errorMsg.style.display = "none";
    hideAddBookModal()
}

addBookForm.onsubmit = addBook;

// Toggle read
const toggleRead = (e) => {
    const title = e.target.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    const book = library.getBook(title)
    book.read = !book.read
    updateBooksGrid()
}

// Remove
const removeBook = (e) => {
    const title = e.target.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    library.removeBook(title)
    updateBooksGrid()
}

//Modal
const showAddBookModal = () => {
    overlay.style.display = "block";
    addBookModal.style.display = "block";
}

const hideAddBookModal = () => {
    addBookForm.reset();
    overlay.style.display = "none";
    addBookModal.style.display = "none";
}

addBookBtn.addEventListener("click", showAddBookModal) //Show overlay and addBookModal when Add book button is clicked

overlay.addEventListener("click", hideAddBookModal) //Hide overlay and addBookModal when overlay is clicked

window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        hideAddBookModal()};
})

// TESTING LINE DO NOT CROSS

// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     sayName() {
//         return this.name;
//     }
// }


// class EigthGrader extends Student {
//     constructor(name) {
//         super();
//         this.name = name;
//         this.grade = 8;
//     }
// }

// // EigthGrader.prototype = Object.create(Student.prototype)

// const carl = new EigthGrader("carl")
// console.log(carl.sayName())