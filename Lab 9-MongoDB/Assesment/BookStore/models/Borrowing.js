const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const borrowingSchema = new Schema({
    bookId : {
        type : [Schema.Types.ObjectId],
        ref : 'Book',
        required : [true, "book ID  is required"]
    },
    borrowerId : {
        type : [Schema.Types.ObjectId],
        ref : 'Borrower',
        required : [true, "borrower ID is required"]
    }
});

const Borrowing = mongoose.model('Borrowing', borrowingSchema);
module.exports = Borrowing;