const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const accountSchema =new mongoose.Schema({
    accountNo:{
        type: String,
        required: [true, "accontNo is required"]
    },
acctType : {
    type: String,
        required: [true, "acctType is required"]
},
balance: {
    type: Number,
        required: [true, "balance is required"]
},

    transactions: [{
        type : Schema.Types.ObjectId,
        ref: 'Transaction'


    }]



});



accountSchema.virtual('minBalance',()=>{
    if(this.acctType=='Current')
        this.minBalance=1000;
    else
        this.monthlyFee=15;

});




const Account  = mongoose.model('Account', accountSchema);
module.exports=Account;