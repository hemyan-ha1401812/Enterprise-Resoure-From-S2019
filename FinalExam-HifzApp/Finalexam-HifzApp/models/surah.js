// ToDo: Implement the schema of the surah entity
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surahSchema = new Schema({
    name : {
        type : String,
        required : [true, "name is required"]
    },
    englishName : {
        type : String,
        required : [true, "englishName is required"]
    },
    ayaCount : {
        type : Number,
        required : [true, "ayaCount is required"]
    },
    type : {
        type : String,
        required : [true, "type is required"]
    }
});

const Surah = mongoose.model('Surah', surahSchema);
module.exports = Surah;

