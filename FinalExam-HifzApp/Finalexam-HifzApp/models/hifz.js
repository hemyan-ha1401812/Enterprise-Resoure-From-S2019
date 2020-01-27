// ToDo: Implement the schema of the hifz entity
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hifzSchema = new Schema({
    surah : {
        type : Schema.Types.ObjectId,
        ref : 'Surah',
        required : [true, "Surah is required"]
    },
    fromAya : {
        type : Number,
        min : 1,
        required : [true, "fromAya is required"]
    },
    toAya : {
        type : Number,
        required : [true, "toAya is required"]
    },
    masteryLevel : {
        type : Number,
        min : 1,
        max: 5,
        required : [true, "masteryLevel is required"]
    }
});

const Hifz = mongoose.model('Hifz', hifzSchema);
module.exports = Hifz;