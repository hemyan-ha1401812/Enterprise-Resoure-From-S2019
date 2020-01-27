const Account = require('../models/account');
const Transaction = require('../models/account-transaction');
const uuid = require('uuid');

/*
    aggregation very fast
    $match ,

 */
class AccountRepository {

    constructor() {
    }

    //Get account from accounts.json file
    async getAccounts(acctType) {
        if(acctType)
        return await Account.find({"acctType": acctType}).populate('transactions'); // you can remove "acctType" if it has the same name

        return await Account.find();
    }

    //Get account by accountNo
    async getAccount(accountNo) {
        return await Account.findOne({accountNo});

    }

    async addAccount(account) {
        account.accountNo=uuid.v4();
        const newAccount = new Account(account);
        return await newAccount.save();
    }

    async deleteAccount(accountNo) {
        return await Account.findOneAndDelete(accountNo);
    }

    async updateAccount(updatedAccount) {
        return await Account.findOneAndUpdate({"accountNo": updatedAccount.accountNo}, updatedAccount);
    }


    async addTransaction(transaction, accountNo) {
        const account = await this.getAccount(accountNo);
        const trans = new Transaction (Transaction);

        trans.accountId = account._id;

        return trans.save((err, savedTrans)=>{
            if(!err)
            {
                account.transaction.push(savedTrans._id)
                account.save();
            }
            return savedTrans
        });

    }


    async sumBalance() {
        return await Account.aggregate([
            {$group: {_id : "",//group them with something if there is something in " ?? "
                    totalAmountInBank : {$sum:"$balance"}}},
            {
                $project: {_id: 0, balance:1}// 0 for dont project(or display) _id "the property" & 1 project(or display) balance "the property"
            }])



    }

    async chargeFees() {

    }

    async distributeBenefits(benefitRate) {
        try {
            const accounts = await this.getAccounts();
            // Go through all the Saving accounts and distribute the benefit using a 5% benefit.
            // Should not use filter and map for this as this will NOT update the original array
            for (const acct of accounts) {
                //console.log('acct instanceof SavingAccount', acct instanceof SavingAccount);
                if (acct instanceof SavingAccount) {
                    acct.addBenefit(benefitRate);
                }
            }
            await this.saveAccounts(accounts);
        } catch (err) {
            throw err;
        }
    }



}

module.exports = new AccountRepository();

console.log(uuid.v4());
