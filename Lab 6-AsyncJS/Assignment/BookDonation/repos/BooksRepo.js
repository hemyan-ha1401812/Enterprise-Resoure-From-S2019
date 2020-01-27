const path = require('path')
class BooksRepo {

    constructor(){
        this.fse = require('fs-extra');
        this.bookDonationFilePath = path.resolve(__dirname, "../data/catalog.books.json");
    }

    async readFileAsync(filePath) {
        let data = await this.fse.readFile(filePath);
        let parsedData = await JSON.parse(data);

        return parsedData;
    }


    async getBook(bookName){
        let books = await this.readFileAsync(this.bookDonationFilePath);
        let book = await books.find(book=> book.title == bookName);

        return book;

    }


    async getBooksWIthPageCountMoreThanX(pageCount){
        let books = await this.readFileAsync(this.bookDonationFilePath);
        let wantedBooks = await books.filter(book => book.pageCount >= pageCount);

        return wantedBooks;

    }
    async getAuthorBooks(author){
        let books = await this.readFileAsync(this.bookDonationFilePath);
        // filter function to filter by authors then use find function to return the author by it's name and add it to the array that been created by filter function
        let booksByAuthor = await books.filter(book => book.authors.find(wantedAuthor => wantedAuthor == author));

        return booksByAuthor;
    }
    /* ---  GET BOOKS-- */
    async  getAuthorsBookCount(){
        let books = await this.readFileAsync(this.bookDonationFilePath);
        // take an array of authors names
        let authors = await books.filter(book => book.authors);
        let map = new Map();
        let count =0;
        // for every author count how many time did that author appeared
        for (let author of authors ){
            map.add(author,count++);
        }

        return map;
    }
    async getBooksbyCatagory(category){
        let books = await this.readFileAsync(this.bookDonationFilePath);
        // filter function to filter by categories then use find function to return the category by the wanted Category and add it to the array that been created by filter function
        let booksByCategory = books.filter(book => book.categories.find(wantedCategory => wantedCategory == category));

        return booksByCategory;

    }
}

module.exports= BooksRepo;

bookRepo = new BooksRepo();

bookRepo.readFileAsync(bookRepo.bookDonationFilePath).then(books=>console.log(books))


// console.log(__dirname)
