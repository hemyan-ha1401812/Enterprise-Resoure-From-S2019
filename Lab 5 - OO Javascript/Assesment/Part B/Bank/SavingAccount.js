let BankAccount = require('./BankAccount');

class SavingAccount extends BankAccount{
    constructor(accountNo,balance,minBalance){
        super(accountNo, balance);
        this.minBalancd=minBalance;
    }

    distributeBenefit(benefitPercentage){
        this.balance+=(this.balance*benefitPercentage);
    }
toString() {
    return `Saviing ${super.toString()}`;
}
}

module.exports=SavingAccount;

// console.log(new SavingAccount(444,500,909));