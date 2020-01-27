let BankAccount = require('./Bank/BankAccount');
let SavingAccount = require('./Bank/SavingAccount');
let SavingAccount = require('./Bank/SavingAccount');
let Bank = require('./Bank/Bank');



Bank.add(new BankAccount(123,1000))
let acc2=new BankAccount(234,4000);
let acc3=new BankAccount(345,3500);

let sacc1 = new SavingAccount(acc1.accountNo,acc1.balance,500);
let sacc2 = new SavingAccount(acc2.accountNo,acc2.balance,500);
let sacc3 = new SavingAccount(acc3.accountNo,acc3.balance,500);

let acounts=[acc1,acc2,acc3];

let savingAcounts = [sacc1,sacc2,sacc3];

acounts.forEach(acounts => console.log(acounts.toString()));

savingAcounts.forEach(savingAcounts=>console.log(savingAcounts.toString()));






