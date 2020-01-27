let BankAccount = require('./BankAccount');

class Bank{
    constructor(accounts){
        this.accounts=[];
    }
    
    add(account){
        this.accounts.push(account);
    }

    getAccount(accountNo){
        return this.accounts.find(accountNo);
    }

    deletAccount(accountNo) {
        let index =  this.accounts.find( account => account == accountNo);
            this.accounts.slice(index,1);
    }

    avgBalance(){
        this.accounts.reduce((acc,curr)=> acc+curr)/this.accounts.length;
    }

    sumBalance(){
        this.accounts.reduce((acc,curr)=> acc+curr);
    }

    serialze(){
        return JSON.stringify(BankAccount);
    }

    deserialize(accountsJson){
        return JSON.parse(accountsJson);
    }








}




module.exports=Bank;


