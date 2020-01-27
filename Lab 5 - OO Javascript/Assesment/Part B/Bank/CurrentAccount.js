let BankAccount=require('./BankAccount');

class CurrentAccount extends BankAccount{

    constructor(accountNo, balance, monthlyFee){
        super(accountNo,balance);
        this.monthlyFee=monthlyFee;
    }



    deductFee(){

        if (this.balance<BankAccount.this.balance){
            this.balance-=this.monthlyFee;
        }
    }

    toString() {
        return `Current ${super.toString()}`;
    }


}

module.exports=CurrentAccount;

