const bookRepo = require('../repositories/BookRepo');

class BookService {
    constructor() {

    }

    // todo implement the missing methods,
    // the method names should be the same as the ones inside book-repo
    async getBook(req, res) {
        let book = await bookRepo.getBook(req.params.name);
        res.json(book);
    }

    async getBooksByPageCount(req, res) {
        let pageCount = await bookRepo.getBooksByPageCount(req.param.pageCount);
        res.json(pageCount);
    }

    async getBooksByAuthor(req, res){
        let booksByAuthor = await bookRepo.getBooksByAuthor(req.param.author);
        res.json(booksByAuthor);
    }

    async getBooksByCategory(req, res){
       let booksByCategory = await bookRepo.getBooksByCategory(req.param.category);
       res.json(booksByCategory);
    }

    async getBooksSummary(req, res){
        let booksSummary = await bookRepo.getBooksSummary();
        res.json(booksSummary);
    }

    async addBook(req, res) {
        await bookRepo.aaddBook(req.body);
        res.status(201).send("created");
    }

    async updateBook (req, res){
        await bookRepo.updateBook(req.param.isbn,req.body);
        res.status(200).send("ok");
    }

    async deleteBook(req, res) {
        await bookRepo.deleteBook(req.param.isbn);
        res.status(200).send("ok");
    }

    }
module.exports = new BookService();