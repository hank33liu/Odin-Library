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
        
    }
}

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