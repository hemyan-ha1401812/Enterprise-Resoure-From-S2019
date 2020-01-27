const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const borrowerSchema = new Schema({
    name : {
        type : String,
        required : [true, "Borrower name is required"]
    },
    id : {
        type : Number,
        required : [true, "id is required"]
    }
});

const Borrower = mongoose.model('Borrower', borrowerSchema);
module.exports = Borrower;