const BooksRepo = require('./BooksRepo');
const expectChai = require('chai').expect;
const expectMocha = require('mocha').expect;



describe("BooksRepo Test Functions", () => {
    // testing getBooks(bookName) function:
    // testing using chai:
        it('Griffon in Action should return true ', () => {
            expectChai(BooksRepo.getBooks("Griffon in Action")).to.equal(true);
        });
    // testing using mocha:
    it('Griffon in Action should return its book object ', () => {
        expectMocha(BooksRepo.getBooks("Griffon in Action")).to.equal(Object);
    });
    // testing getBooksWIthPageCountMoreThanX(pageCount) function:
    // testing using chai:
        it('1000 should return true', () => {
            expectChai(BooksRepo.getBooksWIthPageCountMoreThanX(1000)).to.equal(true);
    });
    // testing using mocha:
    it('1000 should return 0 ', () => {
        expectMocha(BooksRepo.getBooksWIthPageCountMoreThanX(1000)).to.equal(0);
    });
// testing getAuthorBooks(author) function:
    // testing using chai:
    it('Steven Brown should return true ', () => {
        expectChai(BooksRepo.getAuthorBooks("Steven Brown")).to.equal(true);
    });
    // testing using mocha:
    it('Steven Brown should return its books object ', () => {
        expectMocha(BooksRepo.getAuthorBooks("Steven Brown")).to.equal(Object);
    });
// testing getAuthorsBookCount() function:
    // testing using chai:
    it('Should return true ', () => {
        expectChai(BooksRepo.getAuthorsBookCount()).to.equal(true);
    });
    // testing using mocha:
    it('Should return a map of authors and its book count ', () => {
        expectMocha(BooksRepo.getAuthorsBookCount()).to.equal(Object);
    });
// testing getBooksbyCatagory(category) function:
    // testing using chai:
    it('Java should return true ', () => {
        expectChai(BooksRepo.getBooksbyCatagory("Java")).to.equal(true);
    });
    // testing using mocha:
    it('Java should return its books object ', () => {
        expectMocha(BooksRepo.getBooksbyCatagory("Java")).to.equal(Object);
    });
});




