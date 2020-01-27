const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title : {
        type : String,
        required : [true, "title is required"]
    },
    isbn : {
        type : String,
        required : [true, "isbn is required"]
    },
    pageCount : {
        type : Number,
    },
    publishedDate : {
        type : Date,
        required : [true, "published Date is required"]
    },
    thumbnailUrl : {
        type : String
    },
    shortDescription : {
        type : String
    },
    longDescription: {
        type : String
    },
    status : {
        type : String,
        enum : ["PUBLISH" , "MEAP"],
        required : [true, "status is required"]
    },authors : {
        type : [Schema.Types.ObjectId],
        ref : 'Author',
        required : [true, "authors are required"]

    },categories : {
        type : [String],
        required : [true, "categories are required"]
    }

});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;