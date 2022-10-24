let myLibrary = [];

//Book constructor
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
        this.read = read
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook() {
        pass
    }
}

//Submit form
const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    return new Book(title, author, pages, isRead)
}

// const createBookCard = (book)


//Modal
const addBook = document.getElementById("add-book"); //get button that opens addBookModal

const overlay = document.getElementById("modal-overlay"); //get modal overlay

const addBookModal = document.getElementById("addBookModal"); //get addBookModal

const showAddBookModal = () => {
    overlay.style.display = "block";
    addBookModal.style.display = "block";
}

const hideAddBookModal = () => {
    overlay.style.display = "none";
    addBookModal.style.display = "none";
}

addBook.addEventListener("click", showAddBookModal) //Show overlay and addBookModal when Add book button is clicked

overlay.addEventListener("click", hideAddBookModal) //Hide overlay and addBookModal when overlay is clicked

window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        console.log("Escaped");
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