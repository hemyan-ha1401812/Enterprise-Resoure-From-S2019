const accountRepo = require('../repositories/account-repository')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const secret = require('../config/myCredentials').secret;

class AccountService {

    async addUser(req,res){
        try{
            const user = await accountRepo.addUser(req.body)
            res.json(user).status(201);
        }catch(e){
            console.log(e);
            res.send(e).status(500);

        }
    }

    async loginUser(req,res){
        try{
            const user = await accountRepo.getUser(req.body);
            if (user) {
                const isMatch = await bcrypt.compare(req.body.password, user.password);

                if (isMatch){
                    const token =jwt.sign({user},secret);
                    res.json(token).status(201);
                }
                else
                    res.send("The email or password is incorrect")
            }
            else
                res.send("The email dose not exist");
        }
        catch(e){
            console.log(e);
            res.send(e).status(500);

        }
    }

    async verifyAuthToken(req,res,next){
        try{
            const bearerHeader = req.headers['authorization'];
            if (typeof bearerHeader !== 'undefined') {
                const bearerToken = bearerHeader.split( ' ')[1];
                const authData = await jwt.verify(bearerToken, secret) ;
                req.token = bearerToken;
                req.authData = authData;
                next() ;
            }
            else {
                res.send("No token was provided").status(401);
            }
        }


        catch(e){
            res.send("Error");
    }
    }

    async addMultipleAccounts(req, res){
        try{
            const accounts = req.body;
            await accounts.forEach(async(account)=> await accountRepo.addAccount(account))
            res.send('All accounts added')
        }catch(e){
            res. send(e)
        }
    }
    async getAccounts(req, res) {
        try {
            if(req.authData) {
                const acctType = req.query.acctType;
                const accounts = await accountRepo.getAccounts(acctType);
                res.json(accounts);
            }
            else {
                res.send("UnAuthorized Access").status(401);
            }

        } catch (err) {
            res.status(500).send(err);
        }
    }

    async addAccount(req, res) {
        try {
            const account = await accountRepo.addAccount(req.body)
            res.status(201).json(account)
        } catch (err) {
            console.log(err);
            res.status(500).send(err)
        }
    }

    async getAccount(req, res) {
        try {
            const accountNo = req.params.id;
            res.status(200).json(await accountRepo.getAccount(accountNo))
        } catch (err) {
            res.status(500).send(err)
        }
    }

    async updateAccount(req, res) {
        try {
            const account = req.body;
            await accountRepo.updateAccount(account);
            res.status(200).send("Acct Updated");
        } catch (err) {
            res.status(500).send(err);
        }
    }

    async deleteAccount(req, res) {
        try {
            const deletedAccount = await accountRepo.deleteAccount(req.params.id);
            if(deletedAccount)
                res.status(200).json(deletedAccount)
            else
                res.status(200).json('Account Does Not Exist')

        } catch (err) {
            res.status(500).send(err)
        }
    }
    async addTransaction(req, res) {
        try {
            const transaction = req.body;
            console.log(req.body);
            res.status(200).send(await accountRepo.addTransaction(transaction));
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    async sumBalance(req, res) {
        try {
            res.json(await accountRepo.sumBalance())
        } catch (e) {
           console.log(e);
        }
    }
}

module.exports = new AccountService();