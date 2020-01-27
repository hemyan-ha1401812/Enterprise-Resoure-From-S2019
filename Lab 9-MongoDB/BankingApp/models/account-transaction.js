const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const accountTransactionSchema =new mongoose.Schema({
    transactionType:{
        type: String,
        required: [true, "transactionType is required"]
    },
    amount : {
        type: Number,
        required: [true, "amount is required"],
        min:[0, "Amount can't be negative"]
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },


});







const Transaction  = mongoose.model('Transaction', accountTransactionSchema);
module.exports=Transaction;