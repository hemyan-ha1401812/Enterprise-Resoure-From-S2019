
class BankAccount{
    constructor(accountNo, balance){
        this.accountNo=accountNo;
        this.balance= balance;
    }

    deopsite(amount){
        this.balance+=amount;
    }

    withdraw(amount){
        this.balance-=amount;
    }

    toString(){
        return`Account # ${this.accountNo} has QR ${this.balance}.`;
    }

}



module.exports= BankAccount;

