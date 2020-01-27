

let map= new map();


class BookCatalog{
    constructor(){
    this.books=[];
    }
    addBook(book){
        if(book.status==pending)
            this.books.unshift(book);
        else
           this. books.push(book);
    }

    updateBook(book){
        books.find(books=>book.bookId==books.bookId).update(book);
    }

    deleteBook(bookId){
        let index = this.books.find(book=> book==bookId)
            this.books.slice(index,1);
    }

    getBooks(){
        return books.filter(books=>books.status=='available');
    }

    getDonorBooks(donorId){
        return books.filter(books=>books.donor.donorId==donorId);
    }

    getTopXDonors(donorsCont){
        map.add(books.donor.donorId,);
    }



}






let Book={
    bookId,
    title,
    author,
    imageUrl,
    donor: {
        donorId,
        firstName,
        lastName,
        phoneNumber,
        street,
        city,
        email,
        password,

    },
    status:[pending, available],

}

















module.exports=BookCatalog;