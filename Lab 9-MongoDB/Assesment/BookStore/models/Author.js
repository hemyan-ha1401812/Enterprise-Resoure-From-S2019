const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    author : {
        type : String,
        required : [true, "author is required"]
    },
    country : {
        type : String,
        required : [true, "country is required"]
    },
    imageLink : {
        type : String
    },
    language : {
        type : String,
        required : [true, "language is required"]
    },
    link : {
        type : String
    },
    pages : {
        type : Number
    },
    Books: {
        type : [Schema.Types.ObjectId],
        ref : 'Book',
        required : [true, "Book are required"]
    }
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;