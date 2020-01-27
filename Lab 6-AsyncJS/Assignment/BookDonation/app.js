let BooksRepo = require('./BooksRepo');
BooksRepo = new BooksRepo();

// testing getBooks(bookName) function:
BooksRepo.readFileAsync(BooksRepo.bookDonationFilePath).then(console.log(BooksRepo.getBook("Griffon in Action")));

// testing getBooksWIthPageCountMoreThanX(pageCount) function:
BooksRepo.readFileAsync(BooksRepo.bookDonationFilePath).then(console.log(BooksRepo.getBooksWIthPageCountMoreThanX(1000)));

// testing getAuthorBooks(author) function:
BooksRepo.readFileAsync(BooksRepo.bookDonationFilePath).then(console.log(BooksRepo.getAuthorBooks("Steven Brown")));

// testing getAuthorsBookCount() function:
console.log("Author Name \t Book Count");
BooksRepo.readFileAsync(BooksRepo.bookDonationFilePath).then(console.log(BooksRepo.getAuthorsBookCount()));

// testing getBooksbyCatagory(category) function:
BooksRepo.readFileAsync(BooksRepo.bookDonationFilePath).then(console.log(BooksRepo.getBooksbyCatagory("Java")));
