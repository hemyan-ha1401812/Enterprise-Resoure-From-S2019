const path = require('path');
const fs = require('fs-extra');
const Author = require('../models/Author');
const Book = require('../models/Book');
const Borrowing = require('../models/Borrowing');
const Borrower = require('../models/Borrower');

class BookRepo {
    constructor() {
        this.booksFilePath = path.resolve(__dirname, '../data/catalog-books.json');
    }

    async getCategories() {
        return await Book.find().sort({categories:1}).distinct('categories');
    }

    async getAuthors() {
        return await Author.find();

        /*  const data = await this.getBooks();
        let authors = new Set();
        data.forEach(b => {
            const cats = b.authors;
            cats.forEach(c => {
                authors.add(c);
            });
        });

        authors = [...authors].sort();
        console.log(authors);
        return authors;*/
    }

    async getBooks() {
       return await Book.find();
    }

    async getBooksByName(bookName) {
            return Book.find({title: bookName});
    }

    async getBooksByPageCount(pageCount) {
        return Book.find({pageCount});
    }

    async getBooksByAuthor(authorName) {
        return Book.find({authors: authorName});
    }

    async getBookByISBN(isbn) {
        return Book.findOne({isbn});
    }

    async getBooksByCategory(bookCategory) {
        return Book.find({categories: bookCategory});
    }

    async getBooksSummary() {

        return await Book.aggregate([
            {
                $group: {
                _id:"$categories",
                pageCount: {$avg: "$pageCount"},
                totalBooks: {$Sum: this.getBooks()}

            }},
            {
                $sort:{
                totalBooks: 1
                        }}
        ]);
    }

    async getTopThreeBorrowers() {

        return await Borrower.aggregate([
            {
                $match: {"id": {$eq: Borrowing.borrowerId}}},
            {
                $group: {
                    _id:"$Borrowing.borrowerId",
                    totalBooks: {$Sum: this.getBooks()}

                }},
            {
                $sort:{
                    totalBooks: 1
                }},
            {
                $limit: 3
            }
        ]);
    }

    async getTopThreeBorroweredBooks() {

        return await Book.aggregate([
            {
                $match:{"isbn": {$eq: Borrowing.bookId}}},
            {
                $group: {
                    _id:"$Borrowing.bookId",
                    totalBooks: {$Sum: this.getBooks()}

                }},
            {
                $sort:{
                    totalBooks: 1
                }},
            {
                $limit: 3
            }
        ]);
    }

    async getBorrowingSummary() {

        return await Borrowing.aggregate([
            {
                $match:{
                    "bookId": {$eq: Book.isbn}
                }
            },
            {
                $group: {
                    _id:"categories",
                    totalBooks: {$Sum: this.getBooks()}

                }},
            {
                $sort:{
                    totalBooks: 1
                }},
        ]);
    }


    async addBook(book) {
        return Book.create(book);
    }

    async updateBook(isbn, updatedBook) {
        return await Book.findByIdAndUpdate({isbn},updatedBook)
    }

    async deleteBook(isbn) {
        Book.remove({isbn});
    }

    async saveBooks(books) {
            await Book.save(books);
    }
/*/!*
    //run this method to delete books without description
    async cleanBooks() {
        const books = await this.getBooks();
        const cleanBooks= books.filter(book => book.shortDescription && book.shortDescription.length > 10)
        await this.saveBooks(cleanBooks);
    *!/}*/
}

module.exports = new BookRepo();